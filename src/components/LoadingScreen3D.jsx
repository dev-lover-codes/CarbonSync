import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sparkles, Html } from '@react-three/drei';

export function LoadingScreen3D() {
  const ringRef = useRef();
  const ring2Ref = useRef();
  const gemRef = useRef();

  useFrame((state, delta) => {
    if (ringRef.current) ringRef.current.rotation.z += 1.2 * delta;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= 0.8 * delta;
    if (gemRef.current) {
      gemRef.current.rotation.y += 1.0 * delta;
      gemRef.current.rotation.x += 0.4 * delta;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Darkening backdrop */}
      <mesh position={[0, 0, -2]}>
        <planeGeometry args={[200, 200]} />
        <meshBasicMaterial color="#020b06" />
      </mesh>

      {/* Outer spinning ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.0, 0.025, 16, 80]} />
        <meshStandardMaterial color="#00ff87" emissive="#00ff87" emissiveIntensity={1.0} transparent opacity={0.7} />
      </mesh>

      {/* Inner counter-spinning ring */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[0.72, 0.015, 16, 60]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={1.0} transparent opacity={0.5} />
      </mesh>

      {/* Center gem */}
      <mesh ref={gemRef}>
        <octahedronGeometry args={[0.28, 0]} />
        <meshStandardMaterial
          color="#00ff87"
          roughness={0.0}
          metalness={1.0}
          emissive="#00ff87"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* Sparkles cloud */}
      <Sparkles count={55} scale={3} size={2} speed={0.4} color="#00ff87" />
      <Sparkles count={30} scale={2} size={1.5} speed={0.3} color="#00d4ff" position={[0, 0, 0.2]} />

      {/* Brand name */}
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.42}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.04}
      >
        CarbonSync
      </Text>

      {/* Loading label */}
      <Html position={[0, -2.0, 0]} center style={{ pointerEvents: 'none', textAlign: 'center' }}>
        <div style={{
          fontFamily: "'Space Grotesk', monospace",
          fontSize: '11px',
          color: 'rgba(0,255,135,0.6)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          animation: 'pulse 1.5s ease-in-out infinite',
        }}>
          Initializing Eco Cosmos...
        </div>
        <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      </Html>
    </group>
  );
}

export default LoadingScreen3D;
