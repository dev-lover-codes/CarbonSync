import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useStore } from '../store/useStore';
import { Text, Sparkles } from '@react-three/drei';
import GlassPanel from '../components/GlassPanel';
import Button3D from '../components/Button3D';
import InputField3D from '../components/InputField3D';
import EarthGlobe from '../components/EarthGlobe';

export function AuthScene() {
  const { login, signup, loginWithGoogle } = useAuth();
  const { navigate } = useStore();
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');
    if (!email || !password || (!isLogin && !name)) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      if (isLogin) {
        await login(email, password);
        navigate('dashboard');
      } else {
        await signup(email, password, name);
        navigate('onboarding');
      }
    } catch (err) {
      setError(err.message || 'Authentication failed');
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    try {
      await loginWithGoogle();
      navigate('dashboard');
    } catch (err) {
      setError(err.message || 'Google Sign-In failed');
    }
  };

  return (
    <group>
      {/* Background Sphere with low opacity screen to make text readable */}
      <group position={[0, 0.4, -6]}>
        <EarthGlobe scale={2.0} />
        <mesh position={[0, 0, 2]}>
          <planeGeometry args={[25, 25]} />
          <meshBasicMaterial color="#020b06" transparent opacity={0.4} />
        </mesh>
      </group>

      {/* Background Star Sparks */}
      <Sparkles count={60} scale={5} size={2.5} speed={0.3} color="#00ff87" position={[0, 0, -1]} />

      {/* Form Panel */}
      <GlassPanel width={3.6} height={4.2} depth={0.05} position={[0, -0.15, 0]} glowColor="#00ff87">
        
        {/* Screen Title */}
        <Text
          position={[0, 1.6, 0.05]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {isLogin ? 'COSMIC LOGIN' : 'CREATE PROFILE'}
        </Text>

        {/* Tab selection */}
        <group position={[0, 1.1, 0.05]}>
          <Button3D
            width={1.2}
            height={0.25}
            position={[-0.7, 0, 0]}
            label="SIGN IN"
            color={isLogin ? '#00ff87' : 'rgba(0, 255, 135, 0.15)'}
            textColor={isLogin ? '#020b06' : '#00ff87'}
            fontSize={0.08}
            onClick={() => { setIsLogin(true); setError(''); }}
          />
          <Button3D
            width={1.2}
            height={0.25}
            position={[0.7, 0, 0]}
            label="SIGN UP"
            color={!isLogin ? '#00ff87' : 'rgba(0, 255, 135, 0.15)'}
            textColor={!isLogin ? '#020b06' : '#00ff87'}
            fontSize={0.08}
            onClick={() => { setIsLogin(false); setError(''); }}
          />
        </group>

        {/* Input Fields */}
        <group position={[0, 0.08, 0.05]}>
          {!isLogin && (
            <InputField3D
              width={2.6}
              height={0.34}
              position={[0, 0.52, 0]}
              placeholder="ENTER DISPLAY NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <InputField3D
            width={2.6}
            height={0.34}
            position={[0, 0, 0]}
            placeholder="EMAIL ADDRESS"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField3D
            width={2.6}
            height={0.34}
            position={[0, -0.52, 0]}
            placeholder="PASSWORD"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </group>

        {/* CTA Buttons */}
        <group position={[0, -1.2, 0.05]}>
          <Button3D
            width={2.6}
            height={0.35}
            label={isLogin ? 'CONTINUE' : 'REGISTER PROFILE'}
            color="#00ff87"
            onClick={handleSubmit}
          />
          
          <Button3D
            width={2.6}
            height={0.35}
            position={[0, -0.45, 0]}
            label="AUTH WITH GOOGLE"
            color="rgba(0, 212, 255, 0.2)"
            textColor="#00d4ff"
            onClick={handleGoogleSignIn}
          />
        </group>

        {/* Error text */}
        {error && (
          <Text
            position={[0, -1.9, 0.05]}
            fontSize={0.08}
            color="#ff5e62"
            maxWidth={3.0}
            textAlign="center"
          >
            {error}
          </Text>
        )}
      </GlassPanel>
    </group>
  );
}

export default AuthScene;
