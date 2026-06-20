import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getUserProfile } from '../lib/firestore';
import { Leaf, Mail, Lock, User, Eye, EyeOff, AlertTriangle, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

export default function Auth() {
  const [activeTab, setActiveTab] = useState('login'); // login | signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { login, signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email address is invalid';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (activeTab === 'signup') {
      if (!name) newErrors.name = 'Full Name is required';
      if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAuthSuccess = async (user) => {
    try {
      const profile = await getUserProfile(user.uid);
      if (!profile || !profile.onboardingComplete) {
        navigate('/onboarding');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      navigate('/onboarding');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      if (activeTab === 'login') {
        const user = await login(email, password);
        toast.success('Welcome back!');
        await handleAuthSuccess(user);
      } else {
        await signup(email, password, name);
        toast.success('Account created successfully!');
        navigate('/onboarding');
      }
    } catch (err) {
      toast.error(err.message || 'Authentication failed. Please check your credentials.');
      setErrors({ form: err.message || 'Authentication failed' });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    try {
      const user = await loginWithGoogle();
      toast.success('Signed in with Google!');
      await handleAuthSuccess(user);
    } catch (err) {
      toast.error('Google Authentication failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A110F] flex items-center justify-center px-4 py-12 relative overflow-hidden font-sans">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#52B788]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#1B4332]/40 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-[420px] relative z-10"
      >
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-[2rem] p-8 shadow-[0_0_80px_rgba(82,183,136,0.1)]">
          
          {/* Logo & Header */}
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="relative group cursor-pointer mb-4">
              <div className="absolute inset-0 bg-[#52B788] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-[#1B4332] to-[#0A110F] border border-[#52B788]/30 rounded-2xl flex items-center justify-center shadow-inner">
                <Leaf className="w-8 h-8 text-[#52B788] drop-shadow-[0_0_8px_rgba(82,183,136,0.8)]" />
              </div>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">CarbonSync</h1>
            <p className="text-sm font-medium text-white/40 tracking-wider uppercase">Eco • Intelligence • Impact</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex relative bg-white/5 rounded-xl p-1 mb-8 border border-white/10">
            <button 
              type="button"
              onClick={() => { setActiveTab('login'); setErrors({}); }} 
              className={`relative flex-1 py-2.5 rounded-lg text-sm font-semibold z-10 transition-colors duration-300 ${
                activeTab === 'login' ? 'text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              {activeTab === 'login' && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute inset-0 bg-[#52B788] rounded-lg shadow-[0_4px_12px_rgba(82,183,136,0.3)] -z-10" 
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              Sign In
            </button>
            <button 
              type="button"
              onClick={() => { setActiveTab('signup'); setErrors({}); }} 
              className={`relative flex-1 py-2.5 rounded-lg text-sm font-semibold z-10 transition-colors duration-300 ${
                activeTab === 'signup' ? 'text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              {activeTab === 'signup' && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute inset-0 bg-[#52B788] rounded-lg shadow-[0_4px_12px_rgba(82,183,136,0.3)] -z-10" 
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <AnimatePresence mode="popLayout">
              {activeTab === 'signup' && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#52B788] transition-colors" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full bg-black/20 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#52B788] focus:bg-white/5 transition-all duration-200`}
                      aria-label="Full Name"
                      aria-required={activeTab === 'signup'}
                    />
                  </div>
                  {errors.name && <p className="text-red-400 text-xs mt-1.5 ml-1 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/>{errors.name}</p>}
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#52B788] transition-colors" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-black/20 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#52B788] focus:bg-white/5 transition-all duration-200`}
                  aria-label="Email Address"
                  aria-required="true"
                />
              </div>
              {errors.email && <p className="text-red-400 text-xs mt-1.5 ml-1 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/>{errors.email}</p>}
            </div>

            <div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#52B788] transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full bg-black/20 border ${errors.password ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-3.5 pl-12 pr-12 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#52B788] focus:bg-white/5 transition-all duration-200`}
                  aria-label="Password"
                  aria-required="true"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-white/30 hover:text-white/80 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1.5 ml-1 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/>{errors.password}</p>}
            </div>

            <AnimatePresence mode="popLayout">
              {activeTab === 'signup' && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#52B788] transition-colors" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`w-full bg-black/20 border ${errors.confirmPassword ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#52B788] focus:bg-white/5 transition-all duration-200`}
                      aria-label="Confirm Password"
                      aria-required={activeTab === 'signup'}
                    />
                  </div>
                  {errors.confirmPassword && <p className="text-red-400 text-xs mt-1.5 ml-1 flex items-center gap-1"><AlertTriangle className="w-3 h-3"/>{errors.confirmPassword}</p>}
                </motion.div>
              )}
            </AnimatePresence>

            {activeTab === 'login' && (
              <div className="flex justify-end pt-1">
                <Link to="/forgot-password" className="text-xs font-semibold text-[#52B788] hover:text-[#74c69d] transition-colors">
                  Forgot password?
                </Link>
              </div>
            )}

            {errors.form && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                {errors.form}
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full relative group overflow-hidden bg-[#52B788] text-[#0A110F] font-bold text-sm tracking-widest uppercase py-4 rounded-xl mt-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(82,183,136,0.4)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none disabled:transform-none"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative flex items-center justify-center gap-2">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (activeTab === 'login' ? 'Sign In' : 'Create Account')}
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8 opacity-40">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <span className="px-4 text-[10px] font-bold text-white uppercase tracking-[0.3em]">OR</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>

          {/* Google Button */}
          <button 
            type="button"
            onClick={handleGoogleAuth}
            disabled={loading}
            className="w-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-medium text-sm py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </div>
      </motion.div>
    </div>
  );
}
