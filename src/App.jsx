import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { CarbonProvider } from './contexts/CarbonContext';
import { AnimatePresence } from 'framer-motion';
import { getIsMock } from './lib/firebase';
import { seedTips } from './utils/firestoreHelpers';
import Spinner from './components/ui/Spinner';

// Layouts
const AppLayout = lazy(() => import('./components/layout/AppLayout'));

// Pages
const Landing = lazy(() => import('./pages/Landing'));
const Auth = lazy(() => import('./pages/Auth'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const Onboarding = lazy(() => import('./pages/Onboarding'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Tracker = lazy(() => import('./pages/Tracker'));
const AICoach = lazy(() => import('./pages/AICoach'));
const Insights = lazy(() => import('./pages/Insights'));
const Goals = lazy(() => import('./pages/Goals'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const Tips = lazy(() => import('./pages/Tips'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { currentUser, userProfile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAF8]">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/auth" />;
  }

  if (userProfile && !userProfile.onboardingComplete && window.location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" />;
  }

  return children;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAF8]">
          <Spinner size="lg" />
        </div>
      }>
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Onboarding */}
          <Route 
            path="/onboarding" 
            element={
              <ProtectedRoute>
                <Onboarding />
              </ProtectedRoute>
            } 
          />

          {/* Protected App Routes */}
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tracker" element={<Tracker />} />
            <Route path="coach" element={<AICoach />} />
            <Route path="insights" element={<Insights />} />
            <Route path="goals" element={<Goals />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="tips" element={<Tips />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
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
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2.5 bg-white shadow-xl hover:shadow-2xl border border-gray-200/80 px-4 py-3 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5">
      <span className={`w-2.5 h-2.5 rounded-full ${isMockActive ? 'bg-emerald-500 animate-pulse' : 'bg-blue-500 animate-pulse'}`} />
      <span className="text-xs font-bold text-gray-700 select-none">
        {isMockActive ? 'Mock DB (Offline)' : 'Live Firebase'}
      </span>
      <button 
        onClick={handleToggle}
        className="ml-1.5 text-[10px] font-black uppercase tracking-wider text-green-700 bg-green-50 hover:bg-green-100 active:bg-green-200 border border-green-200 px-2 py-1 rounded-lg transition-colors"
      >
        Toggle
      </button>
    </div>
  );
};

function App() {
  useEffect(() => {
    seedTips();
  }, []);

  return (
    <AuthProvider>
      <CarbonProvider>
        <Router>
          <Toaster 
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#FFFFFF',
                color: '#0F1C14',
                borderRadius: '16px',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              },
            }}
          />
          <AnimatedRoutes />
          <MockModeToggle />
        </Router>
      </CarbonProvider>
    </AuthProvider>
  );
}

export default App;
