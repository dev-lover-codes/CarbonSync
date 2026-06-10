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
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'rgba(2,11,6,0.88)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: `1px solid ${isMockActive ? 'rgba(16,185,129,0.35)' : 'rgba(0,212,255,0.35)'}`,
      borderRadius: '14px',
      padding: '8px 14px',
      boxShadow: isMockActive
        ? '0 0 20px rgba(16,185,129,0.2), 0 4px 20px rgba(0,0,0,0.4)'
        : '0 0 20px rgba(0,212,255,0.2), 0 4px 20px rgba(0,0,0,0.4)',
      fontFamily: "'Space Grotesk', monospace",
    }}>
      {/* Status dot */}
      <div style={{
        width: '7px', height: '7px', borderRadius: '50%',
        background: isMockActive ? '#10b981' : '#00d4ff',
        boxShadow: isMockActive ? '0 0 8px #10b981' : '0 0 8px #00d4ff',
        animation: 'pulse 1.5s ease-in-out infinite',
      }} />
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      
      {/* Label */}
      <span style={{
        fontSize: '10px',
        fontWeight: '700',
        color: isMockActive ? '#10b981' : '#00d4ff',
        letterSpacing: '0.1em',
        userSelect: 'none',
        textTransform: 'uppercase',
      }}>
        {isMockActive ? '⚡ Offline Mock' : '🔥 Live Firebase'}
      </span>

      {/* Toggle button */}
      <button
        onClick={handleToggle}
        style={{
          fontSize: '9px',
          fontWeight: '700',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#020b06',
          background: isMockActive ? '#10b981' : '#00d4ff',
          border: 'none',
          borderRadius: '8px',
          padding: '3px 10px',
          cursor: 'pointer',
          fontFamily: "'Space Grotesk', monospace",
          transition: 'all 0.2s ease',
          boxShadow: isMockActive ? '0 0 8px rgba(16,185,129,0.4)' : '0 0 8px rgba(0,212,255,0.4)',
        }}
      >
        Switch
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
