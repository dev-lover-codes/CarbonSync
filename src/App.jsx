import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { getIsMock } from './lib/firebase';
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
  }, [currentUser, userProfile, loading]);

  return null;
};

const MockModeToggle = () => {
  const [isMockActive, setIsMockActive] = useState(() => getIsMock());

  const handleToggle = () => {
    const newVal = !isMockActive;
    localStorage.setItem('force_mock_mode', newVal ? 'true' : 'false');
    setIsMockActive(newVal);
    window.location.reload();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 bg-[#020b06]/85 backdrop-blur-md border border-[#00ff87]/30 px-3.5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(0,255,135,0.2)]">
      <span className={`w-2 h-2 rounded-full ${isMockActive ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400 animate-pulse'}`} />
      <span className="text-[10px] font-mono font-bold text-white select-none mr-2">
        {isMockActive ? 'OFFLINE MOCK' : 'LIVE FIREBASE'}
      </span>
      <button 
        onClick={handleToggle}
        className="text-[9px] font-mono font-bold uppercase text-[#020b06] bg-[#00ff87] hover:bg-[#00ff87]/80 px-2 py-0.5 rounded transition-all active:scale-95"
      >
        Toggle
      </button>
    </div>
  );
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
      <MockModeToggle />
    </AuthProvider>
  );
}

export default App;
