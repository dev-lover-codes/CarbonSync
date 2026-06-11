import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/ui/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error('Please fill in all fields');

    try {
      setLoading(true);
      await login(email, password);
      toast.success('Welcome back!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.message || 'Failed to log in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success('Welcome back!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Google sign-in failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#08140d] p-6">
      <div className="flex w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        {/* Form Container */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-white mb-2">Sign In</h2>
            <p className="text-gray-400">Enter your credentials to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-semibold text-gray-300 ml-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-white/10 border border-white/20 focus:border-emerald-400 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-200 pl-11"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-semibold text-gray-300 ml-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock size={20} />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-white/10 border border-white/20 focus:border-emerald-400 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-200 pl-11"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Link to="/forgot-password" name="forgot-password" className="text-xs font-semibold text-emerald-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full py-4 shadow-[0_0_20px_rgba(16,185,129,0.4)]" isLoading={loading}>
              Sign In
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#0a1b10] text-gray-400 font-medium">Or continue with</span>
            </div>
          </div>

          <button 
            type="button"
            className="w-full bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-4 py-3 text-white font-medium transition-all duration-200 flex items-center justify-center gap-3"
            onClick={handleGoogleLogin}
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            <span>Sign in with Google</span>
          </button>

          <p className="mt-10 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="font-bold text-emerald-400 hover:underline">
              Create an account
            </Link>
          </p>
        </div>

        {/* Features Container */}
        <div className="w-1/2 p-10 bg-gradient-to-br from-emerald-900/20 to-transparent border-l border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Abstract Animated Nature Shapes */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-10"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -45, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-400 rounded-full blur-3xl opacity-10"
          />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 inline-flex p-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#10b981"/>
                  <path d="M12 22V12" stroke="#F8FAF7" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 12L17 7" stroke="#F8FAF7" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 12L7 7" stroke="#F8FAF7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h1 className="text-4xl font-extrabold text-white mb-6 tracking-tight">CarbonSync</h1>
              <p className="text-base text-gray-300 max-w-sm mx-auto leading-relaxed">
                Join the community dedicated to tracking and reducing carbon footprints for a greener tomorrow.
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-6 text-gray-500 font-medium text-xs">
            © 2026 CarbonSync Platform. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
