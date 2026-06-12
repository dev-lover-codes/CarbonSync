import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useStore } from '../store/useStore';
import { Html, Sparkles } from '@react-three/drei';
import GlassPanel from '../components/GlassPanel';
import EarthGlobe from '../components/EarthGlobe';

const inputStyle = {
  width: '100%',
  padding: '13px 16px',
  marginBottom: '12px',
  background: 'rgba(0,255,135,0.04)',
  border: '1px solid rgba(0,255,135,0.18)',
  borderRadius: '10px',
  color: 'white',
  fontSize: '12px',
  letterSpacing: '0.04em',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: "'Space Grotesk', monospace",
  display: 'block',
  transition: 'all 0.2s ease',
};

const inputFocusStyle = {
  border: '1px solid rgba(0,255,135,0.7)',
  background: 'rgba(0,255,135,0.07)',
  boxShadow: '0 0 0 3px rgba(0,255,135,0.1), 0 0 20px rgba(0,255,135,0.1)',
};

function FocusInput({ placeholder, type = 'text', value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      placeholder={placeholder}
      type={type}
      style={focused ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

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
          zIndexRange={[100, 0]}
          style={{ width: isMobile ? '280px' : '360px', pointerEvents: 'auto' }}
          transform
        >
          <div style={{
            width: isMobile ? '280px' : '360px',
            padding: '0 4px',
            fontFamily: "'Space Grotesk', 'Inter', monospace",
            color: 'white',
            textAlign: 'center',
          }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '24px' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'linear-gradient(135deg, #00ff87, #00c46b)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px rgba(0,255,135,0.4)',
                fontSize: '18px',
              }}>
                🌿
              </div>
              <div style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '-0.02em', color: 'white' }}>
                CarbonSync
              </div>
            </div>

            {/* Headline */}
            <div style={{ marginBottom: '8px' }}>
              <div style={{
                fontSize: '22px',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                color: 'white',
                lineHeight: 1.2,
                marginBottom: '6px',
              }}>
                {isSignIn ? 'Welcome Back' : 'Join the Movement'}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(153,176,160,0.7)', letterSpacing: '0.02em' }}>
                {isSignIn ? 'Track your carbon footprint today' : 'Start your eco journey for free'}
              </div>
            </div>

            {/* Tab Toggle */}
            <div style={{
              display: 'flex',
              gap: '0',
              marginBottom: '24px',
              background: 'rgba(0,255,135,0.05)',
              border: '1px solid rgba(0,255,135,0.12)',
              borderRadius: '10px',
              padding: '4px',
              marginTop: '20px',
            }}>
              <button
                onClick={() => { setIsSignIn(true); setError(''); }}
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  borderRadius: '7px',
                  cursor: 'pointer',
                  background: isSignIn ? 'linear-gradient(135deg, #00ff87, #00c46b)' : 'transparent',
                  color: isSignIn ? '#020b06' : 'rgba(153,176,160,0.7)',
                  border: 'none',
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  fontWeight: '700',
                  fontFamily: "'Space Grotesk', monospace",
                  boxShadow: isSignIn ? '0 0 12px rgba(0,255,135,0.3)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                SIGN IN
              </button>
              <button
                onClick={() => { setIsSignIn(false); setError(''); }}
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  borderRadius: '7px',
                  cursor: 'pointer',
                  background: !isSignIn ? 'linear-gradient(135deg, #00ff87, #00c46b)' : 'transparent',
                  color: !isSignIn ? '#020b06' : 'rgba(153,176,160,0.7)',
                  border: 'none',
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  fontWeight: '700',
                  fontFamily: "'Space Grotesk', monospace",
                  boxShadow: !isSignIn ? '0 0 12px rgba(0,255,135,0.3)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                SIGN UP
              </button>
            </div>

            {/* Form Fields */}
            {!isSignIn && (
              <FocusInput
                placeholder="DISPLAY NAME"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            )}
            <FocusInput
              placeholder="EMAIL ADDRESS"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <FocusInput
              placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            {/* Error */}
            {error && (
              <div style={{
                color: '#ff5e62',
                fontSize: '11px',
                marginBottom: '12px',
                letterSpacing: '0.02em',
                padding: '8px 12px',
                background: 'rgba(255,94,98,0.08)',
                border: '1px solid rgba(255,94,98,0.2)',
                borderRadius: '8px',
                textAlign: 'left',
              }}>
                ⚠ {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '10px',
                border: 'none',
                background: loading
                  ? 'rgba(0,255,135,0.2)'
                  : 'linear-gradient(135deg, #00ff87 0%, #00c46b 100%)',
                color: '#020b06',
                fontWeight: '800',
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginBottom: '10px',
                fontFamily: "'Space Grotesk', monospace",
                boxShadow: loading ? 'none' : '0 0 25px rgba(0,255,135,0.3), 0 4px 15px rgba(0,0,0,0.3)',
                transition: 'all 0.2s ease',
              }}
            >
              {loading ? '● AUTHENTICATING...' : isSignIn ? 'CONTINUE →' : 'CREATE ACCOUNT →'}
            </button>

            {/* Divider */}
            <div style={{ position: 'relative', margin: '14px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
              <span style={{ fontSize: '10px', color: 'rgba(153,176,160,0.5)', letterSpacing: '0.1em' }}>OR</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            </div>

            {/* Google Button */}
            <button
              onClick={handleGoogle}
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.75)',
                fontSize: '12px',
                letterSpacing: '0.06em',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: "'Space Grotesk', monospace",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              CONTINUE WITH GOOGLE
            </button>

            {/* Back link */}
            <div
              onClick={() => navigate('landing')}
              style={{
                marginTop: '18px',
                fontSize: '11px',
                letterSpacing: '0.06em',
                color: 'rgba(153,176,160,0.45)',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.color = 'rgba(0,255,135,0.6)'}
              onMouseLeave={e => e.target.style.color = 'rgba(153,176,160,0.45)'}
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
            <div style={{ fontFamily: "'Space Grotesk', monospace", color: 'white' }}>
              <div style={{ fontSize: '11px', color: 'rgba(0,212,255,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>◆ WHY CARBONSYNC ◆</div>
              
              {[
                { icon: '🌍', title: 'Real Impact', desc: 'Track 5+ emission categories' },
                { icon: '🤖', title: 'AI Powered', desc: 'Gemini-driven coaching' },
                { icon: '🏆', title: 'Gamified', desc: 'Streaks, levels, leaderboard' },
                { icon: '📊', title: '3D Insights', desc: 'Immersive data visualization' },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px', textAlign: 'left' }}>
                  <div style={{ fontSize: '16px', lineHeight: 1, flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: 'white', marginBottom: '2px' }}>{f.title}</div>
                    <div style={{ fontSize: '10px', color: 'rgba(153,176,160,0.6)', lineHeight: 1.4 }}>{f.desc}</div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '20px', padding: '12px', background: 'rgba(0,255,135,0.06)', border: '1px solid rgba(0,255,135,0.15)', borderRadius: '10px' }}>
                <div style={{ fontSize: '18px', fontWeight: '800', color: '#00ff87', textShadow: '0 0 10px rgba(0,255,135,0.5)' }}>2,300+</div>
                <div style={{ fontSize: '10px', color: 'rgba(153,176,160,0.6)', marginTop: '4px', letterSpacing: '0.08em' }}>ECO-WARRIORS JOINED</div>
              </div>
            </div>
          </Html>
        </GlassPanel>
      </group>
    </group>
  );
}

export default AuthScene;
