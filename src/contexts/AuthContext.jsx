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
    setUserProfile(profileData);
    return user;
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    // Check if profile exists, if not create one
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
    return signOut(auth);
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
      setCurrentUser(user);
      if (user) {
        const profile = await getUserProfile(user.uid);
        setUserProfile(profile);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
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
