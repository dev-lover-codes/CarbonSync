import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useStore } from '../store/useStore';
import { Html, Sparkles } from '@react-three/drei';
import GlassPanel from '../components/GlassPanel';
import EarthGlobe from '../components/EarthGlobe';
import { Mail, Lock, User, Zap, Globe, Cpu, Trophy, BarChart3, ArrowRight } from 'lucide-react';

export function AuthScene() {
  const { login, signup, loginWithGoogle } = useAuth();
  const { navigate } = useStore();

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError('');
    if (!email || !password || (!isSignIn && !name)) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      if (isSignIn) {
        await login(email, password);
        navigate('dashboard');
      } else {
        await signup(email, password, name);
        navigate('onboarding');
      }
    } catch (err) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate('dashboard');
    } catch (err) {
      setError(err.message || 'Google Sign-In failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <group>
      {/* Background Earth — dimmed */}
      <group 
        position={isMobile ? [0, 2.3, -6] : isTablet ? [1.8, 0.4, -5] : [3.5, 0.2, -5]}
        scale={isMobile ? 0.68 : isTablet ? 0.85 : 1.0}
      >
        <EarthGlobe scale={2.2} />
        <mesh position={[0, 0, 2.5]}>
          <planeGeometry args={[30, 25]} />
          <meshBasicMaterial color="#020b06" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* Ambient sparkles */}
      <Sparkles count={80} scale={6} size={2} speed={0.25} color="#00ff87" position={[0, 0, -1]} />
      <Sparkles count={40} scale={5} size={1.5} speed={0.2} color="#00d4ff" position={[-2, 0, -1]} />

      {/* Auth Panel */}
      <GlassPanel width={isMobile ? 3.4 : 4.2} height={isMobile ? 5.2 : 6.2} depth={0.06} position={isMobile ? [0, -0.4, 0] : isTablet ? [-0.8, 0, 0] : [-1, 0, 0]} glowColor="#00ff87">
        <Html
          position={[0, 0, 0.1]}
          center
          distanceFactor={5}
          zIndexRange={[100, 0]}
          style={{ width: isMobile ? '280px' : '360px', pointerEvents: 'auto' }}
          transform
        >
          <div className="w-full px-2 text-center text-white" style={{ fontFamily: "'Space Grotesk', 'Inter', monospace" }}>
            
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff87] to-[#00d4ff] p-[1px] shadow-glow-green">
                <div className="w-full h-full bg-[#0a1a0e] rounded-xl flex items-center justify-center">
                  <Zap size={20} className="text-[#00ff87] group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="text-xl font-extrabold tracking-tight">
                CarbonSync
              </div>
            </div>

            {/* Headline */}
            <div className="mb-4">
              <h2 className="text-2xl font-extrabold leading-tight mb-1 text-white">
                {isSignIn ? 'Welcome Back' : 'Join the Movement'}
              </h2>
              <p className="text-xs text-[#99b0a0] tracking-wide">
                {isSignIn ? 'Track your carbon footprint today' : 'Start your eco journey for free'}
              </p>
            </div>

            {/* Tab Toggle */}
            <div className="flex bg-[#00ff87]/5 border border-[#00ff87]/15 rounded-xl p-1 mt-5 mb-6">
              <button
                onClick={() => { setIsSignIn(true); setError(''); }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold tracking-widest transition-all duration-200 ${
                  isSignIn 
                    ? 'bg-gradient-to-br from-[#00ff87] to-[#00c46b] text-[#020b06] shadow-[0_0_12px_rgba(0,255,135,0.3)]' 
                    : 'text-[#99b0a0] hover:text-white bg-transparent'
                }`}
              >
                SIGN IN
              </button>
              <button
                onClick={() => { setIsSignIn(false); setError(''); }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold tracking-widest transition-all duration-200 ${
                  !isSignIn 
                    ? 'bg-gradient-to-br from-[#00ff87] to-[#00c46b] text-[#020b06] shadow-[0_0_12px_rgba(0,255,135,0.3)]' 
                    : 'text-[#99b0a0] hover:text-white bg-transparent'
                }`}
              >
                SIGN UP
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-3">
              {!isSignIn && (
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b8f78] group-focus-within:text-[#00ff87] transition-colors">
                    <User size={16} />
                  </div>
                  <input
                    placeholder="DISPLAY NAME"
                    className="input-neon pl-11"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
              )}
              
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b8f78] group-focus-within:text-[#00ff87] transition-colors">
                  <Mail size={16} />
                </div>
                <input
                  placeholder="EMAIL ADDRESS"
                  type="email"
                  className="input-neon pl-11"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b8f78] group-focus-within:text-[#00ff87] transition-colors">
                  <Lock size={16} />
                </div>
                <input
                  placeholder="PASSWORD"
                  type="password"
                  className="input-neon pl-11"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mt-3 text-left p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-[#ff5e62] text-[11px] tracking-wide">
                ⚠ {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full mt-5 py-3.5 rounded-xl font-extrabold text-xs tracking-[0.1em] uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
                loading 
                  ? 'bg-[#00ff87]/20 text-[#00ff87] cursor-not-allowed'
                  : 'btn-neon'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  AUTHENTICATING...
                </>
              ) : (
                <>
                  {isSignIn ? 'CONTINUE' : 'CREATE ACCOUNT'}
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative my-4 flex items-center gap-3">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[10px] text-[#99b0a0] tracking-widest">OR</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Google Button */}
            <button
              onClick={handleGoogle}
              disabled={loading}
              className="btn-ghost w-full py-3 flex items-center justify-center gap-3 text-xs tracking-wider"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-4 h-4" />
              <span>CONTINUE WITH GOOGLE</span>
            </button>

            {/* Back link */}
            <div
              onClick={() => navigate('landing')}
              className="mt-5 text-[11px] tracking-wider text-[#99b0a0] hover:text-[#00ff87] cursor-pointer transition-colors"
            >
              ← BACK TO HOME
            </div>
          </div>
        </Html>
      </GlassPanel>

      {/* Right side info panel */}
      <group position={[3.0, 0, -0.5]}>
        <GlassPanel width={2.8} height={5.0} depth={0.04} glowColor="#00d4ff">
          <Html position={[0, 0, 0.06]} center distanceFactor={4} transform zIndexRange={[100, 0]} style={{ width: '210px', pointerEvents: 'none', textAlign: 'center' }}>
            <div className="text-white" style={{ fontFamily: "'Space Grotesk', monospace" }}>
              <div className="text-[11px] text-[#00d4ff] tracking-[0.15em] uppercase mb-6 font-bold">
                ◆ WHY CARBONSYNC ◆
              </div>
              
              {[
                { icon: <Globe size={18} className="text-[#00d4ff]" />, title: 'Real Impact', desc: 'Track 5+ emission categories' },
                { icon: <Cpu size={18} className="text-[#00d4ff]" />, title: 'AI Powered', desc: 'Gemini-driven coaching' },
                { icon: <Trophy size={18} className="text-[#00d4ff]" />, title: 'Gamified', desc: 'Streaks, levels, leaderboard' },
                { icon: <BarChart3 size={18} className="text-[#00d4ff]" />, title: '3D Insights', desc: 'Immersive data visualization' },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3 mb-4 text-left">
                  <div className="mt-0.5">{f.icon}</div>
                  <div>
                    <div className="text-xs font-bold text-white mb-0.5">{f.title}</div>
                    <div className="text-[10px] text-[#99b0a0] leading-tight">{f.desc}</div>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-3 bg-[#00ff87]/5 border border-[#00ff87]/15 rounded-xl text-center">
                <div className="text-lg font-extrabold text-[#00ff87] shadow-glow-green drop-shadow-[0_0_10px_rgba(0,255,135,0.5)]">
                  2,300+
                </div>
                <div className="text-[10px] text-[#99b0a0] mt-1 tracking-widest">
                  ECO-WARRIORS JOINED
                </div>
              </div>
            </div>
          </Html>
        </GlassPanel>
      </group>
    </group>
  );
}

export default AuthScene;
