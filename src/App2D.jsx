import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CarbonProvider } from './contexts/CarbonContext';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Tracker from './pages/Tracker';
import AICoach from './pages/AICoach';
import Insights from './pages/Insights';
import Goals from './pages/Goals';
import Leaderboard from './pages/Leaderboard';
import Tips from './pages/Tips';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import NotFound from './pages/NotFound';

export default function App2D() {
  return (
    <BrowserRouter>
      <CarbonProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Protected App Routes with Layout */}
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/coach" element={<AICoach />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/onboarding" element={<Onboarding />} />
          </Route>
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CarbonProvider>
    </BrowserRouter>
  );
}
