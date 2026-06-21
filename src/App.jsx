import React, { useEffect, Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { seedTips } from './utils/firestoreHelpers';
import useStore from './store/useStore';
import ErrorBoundary from './components/ErrorBoundary';

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
    <ErrorBoundary>
      <a href="#main-content" 
         className="sr-only focus:not-sr-only focus:absolute focus:top-4 
                    focus:left-4 focus:z-50 bg-emerald-400 text-black 
                    px-4 py-2 rounded-lg font-semibold">
        Skip to main content
      </a>
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
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          }}
        />
        <AuthSync />
        <Suspense fallback={<div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00ff87', background: '#020b06', fontFamily: 'monospace' }}>INITIALIZING 3D ENGINE...</div>}>
          <Scene />
        </Suspense>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
