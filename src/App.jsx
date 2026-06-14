import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { seedTips } from './utils/firestoreHelpers';
import Scene from './components/Scene';
import useStore from './store/useStore';

const AuthSync = () => {
  const { currentUser, userProfile, loading } = useAuth();
  const { setUser, setUserStats, currentPage, navigate } = useStore();

  useEffect(() => {
    if (!loading) {
      setUser(currentUser);
      if (currentUser) {
        if (userProfile) {
          // Sync profile statistics to the Zustand store
          setUserStats({
            totalSaved: userProfile.totalSaved || 0,
            streak: userProfile.streak || 0,
            level: userProfile.level || 'Seed'
          });

          // Route based on onboarding status
          if (!userProfile.onboardingComplete) {
            if (currentPage !== 'onboarding') navigate('onboarding');
          } else if (currentPage === 'landing' || currentPage === 'auth') {
            navigate('dashboard');
          }
        }
      } else {
        // Redirect anonymous users back to Landing/Auth
        if (currentPage !== 'landing' && currentPage !== 'auth') {
          navigate('landing');
        }
      }
    }
  }, [currentUser, userProfile, loading, currentPage, navigate, setUser, setUserStats]);

  return null;
};

function App() {
  useEffect(() => {
    // Seed firestore tips on initialization
    seedTips();
  }, []);

  return (
    <AuthProvider>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#020b06',
            color: '#ffffff',
            border: '1px solid rgba(0, 255, 135, 0.25)',
            borderRadius: '12px',
            fontFamily: 'monospace',
            fontSize: '11px',
          },
        }}
      />
      <AuthSync />
      <Scene />
    </AuthProvider>
  );
}

export default App;
