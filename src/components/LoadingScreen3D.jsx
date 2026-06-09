import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sparkles } from '@react-three/drei';

export function LoadingScreen3D() {
  const leafRef = useRef();

  useFrame((state, delta) => {
    if (leafRef.current) {
      leafRef.current.rotation.y += 1.0 * delta;
      leafRef.current.rotation.x += 0.4 * delta;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Dark background panel to cover the screen while assets load */}
      <mesh position={[0, 0, -1]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#020b06" />
      </mesh>

      <mesh ref={leafRef}>
        <torusKnotGeometry args={[0.5, 0.15, 64, 8, 3, 5]} />
        <meshStandardMaterial 
          color="#00ff87" 
          roughness={0.1} 
          metalness={0.9} 
          emissive="#00220a"
        />
      </mesh>

      <Sparkles count={40} scale={2.5} size={2.5} speed={0.5} color="#00ff87" />

      <Text
        position={[0, -1.2, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        CarbonSync 3D
      </Text>

      <Text
        position={[0, -1.7, 0]}
        fontSize={0.2}
        color="#00ff87"
        anchorX="center"
        anchorY="middle"
      >
        Synchronizing Eco Cosmos...
      </Text>
    </group>
  );
}

export default LoadingScreen3D;
