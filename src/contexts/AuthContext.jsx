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
import { auth } from '../lib/firebase';
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
    setCurrentUser(user);
    setUserProfile(profileData);
    return user;
  }

  async function login(email, password) {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    const profile = await getUserProfile(user.uid);
    setCurrentUser(user);
    setUserProfile(profile);
    return user;
  }

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    const profile = await getUserProfile(user.uid);
    let profileData = profile;
    if (!profile) {
      profileData = {
        name: user.displayName,
        email: user.email,
        totalSaved: 0,
        streak: 0,
        level: 'Seedling',
        joinedAt: new Date(),
        onboardingComplete: false
      };
      await createUserProfile(user.uid, profileData);
    }
    setCurrentUser(user);
    setUserProfile(profileData);
    return user;
  }

  async function logout() {
    await signOut(auth);
    setCurrentUser(null);
    setUserProfile(null);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  async function updateProfile(data) {
    if (!currentUser) return;
    await updateUserProfile(currentUser.uid, data);
    setUserProfile(prev => ({ ...prev, ...data }));
  }

  useEffect(() => {
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

