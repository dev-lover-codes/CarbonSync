import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useStore } from '../store/useStore';
import { Html, Sparkles } from '@react-three/drei';
import GlassPanel from '../components/GlassPanel';
import EarthGlobe from '../components/EarthGlobe';

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  marginBottom: '12px',
  background: 'rgba(0,255,135,0.05)',
  border: '1px solid rgba(0,255,135,0.3)',
  borderRadius: '6px',
  color: 'white',
  fontSize: '12px',
  letterSpacing: '2px',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: "'Space Grotesk', monospace",
  display: 'block',
};

export function AuthScene() {
  const { login, signup, loginWithGoogle } = useAuth();
  const { navigate } = useStore();
  
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
      {/* Background Earth */}
      <group position={[0, 0.4, -6]}>
        <EarthGlobe scale={2.0} />
        <mesh position={[0, 0, 2]}>
          <planeGeometry args={[25, 25]} />
          <meshBasicMaterial color="#020b06" transparent opacity={0.5} />
        </mesh>
      </group>

      {/* Background sparkles */}
      <Sparkles count={60} scale={5} size={2.5} speed={0.3} color="#00ff87" position={[0, 0, -1]} />

      {/* Form Panel — all form content inside a single Html component */}
      <GlassPanel width={4} height={5.5} depth={0.06} position={[0, 0, 0]} glowColor="#00ff87">
        <Html
          position={[0, 0, 0.1]}
          center
          distanceFactor={4}
          style={{ width: '340px', pointerEvents: 'auto' }}
          transform
        >
          <div style={{
            width: '340px',
            padding: '0',
            fontFamily: "'Space Grotesk', monospace",
            color: 'white',
            textAlign: 'center',
          }}>
            {/* Title */}
            <div style={{
              fontSize: '13px',
              letterSpacing: '4px',
              color: '#00ff87',
              marginBottom: '20px',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}>
              {isSignIn ? '◆ COSMIC LOGIN ◆' : '◆ CREATE PROFILE ◆'}
            </div>

            {/* Toggle tabs */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', justifyContent: 'center' }}>
              <button
                onClick={() => { setIsSignIn(true); setError(''); }}
                style={{
                  padding: '6px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  background: isSignIn ? '#00ff87' : 'transparent',
                  color: isSignIn ? '#020b06' : '#00ff87',
                  border: '1px solid #00ff87',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  fontWeight: '600',
                  fontFamily: "'Space Grotesk', monospace",
                }}
              >
                SIGN IN
              </button>
              <button
                onClick={() => { setIsSignIn(false); setError(''); }}
                style={{
                  padding: '6px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  background: !isSignIn ? '#00ff87' : 'transparent',
                  color: !isSignIn ? '#020b06' : '#00ff87',
                  border: '1px solid #00ff87',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  fontWeight: '600',
                  fontFamily: "'Space Grotesk', monospace",
                }}
              >
                SIGN UP
              </button>
            </div>

            {/* Input fields */}
            {!isSignIn && (
              <input
                placeholder="DISPLAY NAME"
                style={inputStyle}
                value={name}
                onChange={e => setName(e.target.value)}
              />
            )}
            <input
              placeholder="EMAIL ADDRESS"
              type="email"
              style={inputStyle}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              placeholder="PASSWORD"
              type="password"
              style={inputStyle}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            {/* Error */}
            {error && (
              <div style={{ color: '#ff4444', fontSize: '11px', marginBottom: '12px', letterSpacing: '1px' }}>
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                background: loading ? '#005533' : '#00ff87',
                color: '#020b06',
                fontWeight: '700',
                fontSize: '12px',
                letterSpacing: '3px',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginBottom: '10px',
                fontFamily: "'Space Grotesk', monospace",
              }}
            >
              {loading ? 'PROCESSING...' : isSignIn ? 'CONTINUE →' : 'REGISTER PROFILE →'}
            </button>

            {/* Google */}
            <button
              onClick={handleGoogle}
              disabled={loading}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '11px',
                letterSpacing: '2px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: "'Space Grotesk', monospace",
              }}
            >
              AUTH WITH GOOGLE
            </button>

            {/* Back to landing */}
            <div
              onClick={() => navigate('landing')}
              style={{
                marginTop: '16px',
                fontSize: '10px',
                letterSpacing: '2px',
                color: 'rgba(255,255,255,0.35)',
                cursor: 'pointer',
              }}
            >
              ← BACK TO COSMOS
            </div>
          </div>
        </Html>
      </GlassPanel>
    </group>
  );
}

export default AuthScene;
