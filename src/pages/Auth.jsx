import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getUserProfile } from '../lib/firestore';
import { Leaf, Mail, Lock, User, Sparkles } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function Auth() {
  const [activeTab, setActiveTab] = useState('login'); // login | signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
      console.error("Profile check error:", err);
      // Fallback
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
        const user = await signup(email, password, name);
        toast.success('Account created successfully!');
        navigate('/onboarding');
      }
    } catch (err) {
      toast.error(err.message || 'Authentication failed. Please check your credentials.');
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
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAF8] py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden p-8"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#2D6A4F] mb-4">
            <Leaf className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-[#2D6A4F]">CarbonSync</h1>
          <p className="text-sm text-gray-500 mt-1">Track and reduce your ecological impact</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-gray-50 p-1.5 rounded-xl mb-8">
          <button
            onClick={() => { setActiveTab('login'); setErrors({}); }}
            className={`flex-1 text-center py-2 text-sm font-bold rounded-lg transition-colors ${
              activeTab === 'login' 
                ? 'bg-white text-[#2D6A4F] shadow-sm' 
                : 'text-gray-500 hover:text-[#2D6A4F]'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => { setActiveTab('signup'); setErrors({}); }}
            className={`flex-1 text-center py-2 text-sm font-bold rounded-lg transition-colors ${
              activeTab === 'signup' 
                ? 'bg-white text-[#2D6A4F] shadow-sm' 
                : 'text-gray-500 hover:text-[#2D6A4F]'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {activeTab === 'signup' && (
            <div>
              <Input
                label="Full Name"
                placeholder="John Doe"
                icon={User}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <p className="text-xs font-bold text-red-500 mt-1">{errors.name}</p>}
            </div>
          )}

          <div>
            <Input
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              icon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="text-xs font-bold text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="text-xs font-bold text-red-500 mt-1">{errors.password}</p>}
          </div>

          {activeTab === 'signup' && (
            <div>
              <Input
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
                icon={Lock}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {errors.confirmPassword && (
                <p className="text-xs font-bold text-red-500 mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          {activeTab === 'login' && (
            <div className="flex justify-end text-xs">
              <Link to="/forgot-password" name="forgot-password" className="font-semibold text-[#2D6A4F] hover:underline">
                Forgot password?
              </Link>
            </div>
          )}

          <Button type="submit" className="w-full py-4 mt-6" isLoading={loading}>
            {activeTab === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-4 bg-white text-gray-400 font-medium">Or continue with</span>
          </div>
        </div>

        {/* Google Button */}
        <Button 
          variant="outline" 
          className="w-full py-4 bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-3"
          onClick={handleGoogleAuth}
          disabled={loading}
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          <span className="font-bold text-gray-700">Continue with Google</span>
        </Button>
      </motion.div>
    </div>
  );
}
