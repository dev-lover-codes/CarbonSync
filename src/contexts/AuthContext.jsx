import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  signInWithPopup,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth, isMock } from '../lib/firebase';
import { createUserProfile, getUserProfile, updateUserProfile } from '../lib/firestore';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signup(email, password, name) {
    if (isMock) {
      const creds = JSON.parse(localStorage.getItem('mock_creds') || '{}');
      if (creds[email.toLowerCase()]) {
        throw new Error('Email already in use.');
      }
      const uid = 'mock_' + Math.random().toString(36).substr(2, 9);
      creds[email.toLowerCase()] = { uid, password, name };
      localStorage.setItem('mock_creds', JSON.stringify(creds));

      const profileData = {
        name,
        email,
        totalSaved: 0,
        streak: 3, // Initial streak
        level: 'Seedling',
        joinedAt: new Date().toISOString(),
        onboardingComplete: false
      };
      
      await createUserProfile(uid, profileData);
      
      const mockUser = { uid, email, displayName: name };
      localStorage.setItem('mock_current_user', JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      setUserProfile(profileData);
      return mockUser;
    }

    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    
    const profileData = {
      name,
      email,
      totalSaved: 0,
      streak: 0,
      level: 'Seedling',
      joinedAt: new Date(),
      onboardingComplete: false
    };
    
    await createUserProfile(user.uid, profileData);
    setUserProfile(profileData);
    return user;
  }

  async function login(email, password) {
    if (isMock) {
      const creds = JSON.parse(localStorage.getItem('mock_creds') || '{}');
      const userCreds = creds[email.toLowerCase()];
      if (!userCreds || userCreds.password !== password) {
        throw new Error('Invalid email or password.');
      }
      const mockUser = { uid: userCreds.uid, email, displayName: userCreds.name };
      localStorage.setItem('mock_current_user', JSON.stringify(mockUser));
      
      const profile = await getUserProfile(userCreds.uid);
      setCurrentUser(mockUser);
      setUserProfile(profile);
      return mockUser;
    }

    return signInWithEmailAndPassword(auth, email, password);
  }

  async function loginWithGoogle() {
    if (isMock) {
      const uid = 'mock_google_123';
      const email = 'eco.warrior@gmail.com';
      const name = 'Eco Warrior';
      
      const mockUser = { uid, email, displayName: name };
      localStorage.setItem('mock_current_user', JSON.stringify(mockUser));
      
      const profile = await getUserProfile(uid);
      if (!profile) {
        const profileData = {
          name,
          email,
          totalSaved: 15.0,
          streak: 5,
          level: 'Sapling',
          joinedAt: new Date().toISOString(),
          onboardingComplete: true
        };
        await createUserProfile(uid, profileData);
        setUserProfile(profileData);
      } else {
        setUserProfile(profile);
      }
      setCurrentUser(mockUser);
      return mockUser;
    }

    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    const profile = await getUserProfile(user.uid);
    if (!profile) {
      const profileData = {
        name: user.displayName,
        email: user.email,
        totalSaved: 0,
        streak: 0,
        level: 'Seedling',
        joinedAt: new Date(),
        onboardingComplete: false
      };
      await createUserProfile(user.uid, profileData);
      setUserProfile(profileData);
    } else {
      setUserProfile(profile);
    }
    return user;
  }

  function logout() {
    if (isMock) {
      localStorage.removeItem('mock_current_user');
      setCurrentUser(null);
      setUserProfile(null);
      return Promise.resolve();
    }

    return signOut(auth);
  }

  function resetPassword(email) {
    if (isMock) {
      toast.success('Password reset email sent (Mock Mode)!');
      return Promise.resolve();
    }

    return sendPasswordResetEmail(auth, email);
  }

  async function updateProfile(data) {
    if (isMock) {
      if (!currentUser) return;
      await updateUserProfile(currentUser.uid, data);
      setUserProfile(prev => ({ ...prev, ...data }));
      return;
    }

    if (!currentUser) return;
    await updateUserProfile(currentUser.uid, data);
    setUserProfile(prev => ({ ...prev, ...data }));
  }

  useEffect(() => {
    if (isMock) {
      const initMockAuth = async () => {
        try {
          const storedUser = localStorage.getItem('mock_current_user');
          if (storedUser) {
            const user = JSON.parse(storedUser);
            setCurrentUser(user);
            const profile = await getUserProfile(user.uid);
            setUserProfile(profile);
          } else {
            setCurrentUser(null);
            setUserProfile(null);
          }
        } catch (err) {
          console.error("Mock auth init error", err);
        } finally {
          setLoading(false);
        }
      };
      initMockAuth();
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        setCurrentUser(user);
        if (user) {
          const profile = await getUserProfile(user.uid);
          setUserProfile(profile);
        } else {
          setUserProfile(null);
        }
      } catch (error) {
        console.error("Error in onAuthStateChanged profile fetch:", error);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    loading,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

