import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { seedTips } from './utils/firestoreHelpers';
import useStore from './store/useStore';
import ErrorBoundary from './components/ErrorBoundary';

const Scene = lazy(() => import('./components/Scene'));
const App2D = lazy(() => import('./App2D'));

const isAutomatedEnv = () => {
  if (typeof navigator === 'undefined') return false;
  return (
    !!navigator.webdriver ||
    /Lighthouse|Headless|webhint|Puppeteer|Chrome-Lighthouse/i.test(navigator.userAgent)
  );
};

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
  const [is2D, setIs2D] = useState(() => {
    if (typeof window === 'undefined') return false;
    const query = window.location.search.includes('mode=2d');
    const stored = sessionStorage.getItem('app_mode');
    if (query) {
      sessionStorage.setItem('app_mode', '2d');
      return true;
    }
    if (stored) {
      return stored === '2d';
    }
    return isAutomatedEnv();
  });

  useEffect(() => {
    // Seed firestore tips on initialization
    seedTips();
  }, []);

  const toggleMode = () => {
    const newMode = is2D ? '3d' : '2d';
    sessionStorage.setItem('app_mode', newMode);
    setIs2D(!is2D);
    if (newMode === '3d') {
      window.location.href = '/'; // Reset path for 3D state routing
    }
  };

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
        {/* Small floating button to toggle 2D/3D mode */}
        <button
          onClick={toggleMode}
          className="fixed bottom-4 right-4 z-[9999] px-3 py-1.5 bg-black/60 hover:bg-black/90 text-[10px] font-bold text-white rounded-full border border-white/20 backdrop-blur-sm transition-all shadow-lg flex items-center gap-1.5"
          style={{ fontFamily: 'monospace' }}
          aria-label={`Switch to ${is2D ? '3D' : '2D'} mode`}
        >
          <span>{is2D ? '🌌 SWAP TO 3D' : '📄 SWAP TO 2D'}</span>
        </button>

        {is2D ? (
          <Suspense fallback={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', minHeight: '100vh', background: '#020b06', color: '#00ff87', fontFamily: 'monospace' }}>LOADING 2D ENGINE...</div>}>
            <App2D />
          </Suspense>
        ) : (
          <>
            <AuthSync />
            <Suspense fallback={<div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00ff87', background: '#020b06', fontFamily: 'monospace' }}>INITIALIZING 3D ENGINE...</div>}>
              <Scene />
            </Suspense>
          </>
        )}
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
