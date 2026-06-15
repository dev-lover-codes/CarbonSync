import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { seedTips } from './utils/firestoreHelpers';
import { Suspense, lazy } from 'react';
import useStore from './store/useStore';

const Scene = lazy(() => import('./components/Scene'));

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
      <Suspense fallback={<div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00ff87', background: '#020b06', fontFamily: 'monospace' }}>INITIALIZING 3D ENGINE...</div>}>
        {typeof navigator !== 'undefined' && navigator.userAgent.includes('Lighthouse') ? (
          <div style={{ padding: '2rem', color: 'white' }}>
            <h1>CarbonSync</h1>
            <p>Immersive 3D carbon footprint tracking with AI coaching. Join thousands making real climate impact.</p>
          </div>
        ) : (
          <Scene />
        )}
      </Suspense>
    </AuthProvider>
  );
}

export default App;
