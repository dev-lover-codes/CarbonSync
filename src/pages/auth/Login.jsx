import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Zap, Shield, Cpu } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';

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
    <div className="min-h-screen flex items-center justify-center bg-[#040A06] p-4 sm:p-8 texture-noise hud-grid relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-neon"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#00d4ff]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-neon" style={{ animationDelay: '1s' }}></div>

      <div className="flex w-full max-w-6xl glass-card relative z-10 card-spotlight overflow-hidden flex-col lg:flex-row">
        
        {/* Left Side: Features & Branding */}
        <div className="hidden lg:flex w-1/2 p-12 flex-col justify-between relative border-r border-white/5 bg-gradient-to-br from-[#0a1a0e]/90 to-[#040A06]/90">
          
          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff87] to-[#00d4ff] p-[1px] shadow-glow-green">
                <div className="w-full h-full bg-[#0a1a0e] rounded-xl flex items-center justify-center">
                  <Zap size={20} className="text-[#00ff87] group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">CarbonSync</span>
            </Link>
          </div>

          <div className="relative z-10 my-12 animate-fade-up">
            <div className="tag mb-6 border-holographic">
              <span className="relative z-10">SYSTEM v2.0 ACTIVE</span>
            </div>
            <h1 className="text-5xl font-display font-extrabold text-white mb-6 leading-tight">
              Enter the <br/>
              <span className="gradient-text">Ecosystem.</span>
            </h1>
            <p className="text-[#99b0a0] text-lg max-w-md font-body leading-relaxed">
              Track, optimize, and neutralize your carbon footprint with high-precision metrics and cosmic insights.
            </p>

            {/* Feature Pills */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md hover:border-[#00ff87]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#00ff87]/10 flex items-center justify-center text-[#00ff87]">
                  <Shield size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Bank-grade Security</h4>
                  <p className="text-sm text-[#99b0a0]">End-to-end encrypted data</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md hover:border-[#00d4ff]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff]">
                  <Cpu size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium">AI-Powered Analysis</h4>
                  <p className="text-sm text-[#99b0a0]">Real-time footprint processing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#6b8f78]">
            <span>© 2026 CarbonSync Platform</span>
            <div className="flex gap-4">
              <Link to="#" className="hover:text-[#00ff87] transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-[#00ff87] transition-colors">Terms</Link>
            </div>
          </div>

          {/* Decorative floating elements */}
          <motion.div 
            className="absolute top-[20%] right-[10%] w-32 h-32 rounded-full border border-[#00ff87]/20 border-dashed opacity-50"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-[20%] left-[10%] w-48 h-48 rounded-full border border-[#00d4ff]/20 opacity-30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Right Side: Form Container */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-[#08140D]/60 relative">
          
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-10 group justify-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff87] to-[#00d4ff] p-[1px] shadow-glow-green">
              <div className="w-full h-full bg-[#0a1a0e] rounded-xl flex items-center justify-center">
                <Zap size={20} className="text-[#00ff87] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-white">CarbonSync</span>
          </div>

          <div className="mb-10 text-center lg:text-left animate-fade-up">
            <h2 className="text-3xl font-display font-bold text-white mb-3">Welcome Back</h2>
            <p className="text-[#99b0a0]">Initialize sequence to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-2">
              <label className="text-xs font-mono font-semibold text-[#6b8f78] uppercase tracking-wider ml-1">
                Identity Sequence (Email)
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b8f78] group-focus-within:text-[#00ff87] transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="commander@carbonsync.io"
                  className="input-neon pl-12 h-14"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-mono font-semibold text-[#6b8f78] uppercase tracking-wider">
                  Access Key (Password)
                </label>
                <Link to="/forgot-password" className="text-xs font-mono text-[#00d4ff] hover:text-[#00ff87] transition-colors">
                  Reset Key?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b8f78] group-focus-within:text-[#00ff87] transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input-neon pl-12 h-14"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-neon w-full h-14 mt-4 flex items-center justify-center gap-2 group text-[15px]"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-[#020b06]/20 border-t-[#020b06] rounded-full animate-spin" />
              ) : (
                <>
                  <span>AUTHORIZE ACCESS</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="relative my-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full section-divider"></div>
            </div>
            <div className="relative flex justify-center text-xs font-mono uppercase tracking-wider">
              <span className="px-4 bg-transparent text-[#6b8f78]">Or bypass with</span>
            </div>
          </div>

          <button 
            type="button"
            className="btn-ghost w-full h-14 flex items-center justify-center gap-3 animate-fade-up text-[14px]"
            style={{ animationDelay: '0.3s' }}
            onClick={handleGoogleLogin}
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            <span>CONNECT GOOGLE ID</span>
          </button>

          <p className="mt-8 text-center text-sm text-[#99b0a0] animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Unregistered entity?{' '}
            <Link to="/signup" className="font-bold text-[#00ff87] hover:text-[#00d4ff] hover:underline transition-colors">
              Initialize Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
