import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export function GlassPanel({ 
  width = 3, 
  height = 2, 
  depth = 0.05, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  children, 
  glowColor = "#00ff87",
  ...props 
}) {
  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? 1.03 : 1.0,
    config: { mass: 1, tension: 280, friction: 18 }
  });

  return (
    <animated.group 
      position={position} 
      rotation={rotation} 
      scale={scale}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      {...props}
    >
      {/* Solid dark background plane — makes content readable */}
      <mesh position={[0, 0, -0.06]}>
        <planeGeometry args={[width + 0.02, height + 0.02]} />
        <meshBasicMaterial 
          color="#0a1f12" 
          transparent 
          opacity={0.88}
        />
      </mesh>

      {/* Main glass panel */}
      <RoundedBox args={[width, height, depth]} radius={0.08} smoothness={4} castShadow receiveShadow>
        <meshPhysicalMaterial
          transmission={0.25}
          roughness={0.05}
          thickness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          transparent={true}
          opacity={0.55}
          color="#0a2e1a"
          metalness={0.05}
          attenuationColor="#00ff87"
          attenuationDistance={0.5}
        />
      </RoundedBox>

      {/* Neon border using lineSegments */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(width, height, depth)]} />
        <lineBasicMaterial 
          color={glowColor} 
          transparent 
          opacity={0.85}
        />
      </lineSegments>

      {/* Inner glow plane — subtle tint on front face */}
      <mesh position={[0, 0, depth / 2 + 0.001]}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial 
          color={glowColor}
          transparent 
          opacity={0.03}
        />
      </mesh>

      {/* Children rendered in front of the panel */}
      <group position={[0, 0, depth / 2 + 0.01]}>
        {children}
      </group>
    </animated.group>
  );
}

export default GlassPanel;
