import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export function AchievementBadge3D({
  earned = false,
  label = 'Badge',
  icon = '🌱',
  position = [0, 0, 0],
  ...props
}) {
  const coinRef = useRef();

  useFrame((state, delta) => {
    if (coinRef.current && earned) {
      coinRef.current.rotation.y += 0.8 * delta;
    }
  });

  const goldColor = '#ffd700';
  const greenGlow = '#00ff87';
  const lockedColor = '#1a2e22';

  return (
    <group position={position} {...props}>
      {/* Hexagonal Medal/Coin Shape */}
      <mesh ref={coinRef} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.08, 6]} />
        <meshStandardMaterial
          color={earned ? goldColor : lockedColor}
          emissive={earned ? greenGlow : '#000000'}
          emissiveIntensity={earned ? 0.4 : 0.0}
          roughness={0.15}
          metalness={0.9}
        />
        {/* Face of coin text indicator */}
        <Text
          position={[0, 0.05, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.25}
          anchorX="center"
          anchorY="middle"
        >
          {icon}
        </Text>
      </mesh>

      {/* Label under badge */}
      <Text
        position={[0, -0.6, 0]}
        fontSize={0.12}
        color={earned ? '#ffffff' : 'rgba(255,255,255,0.4)'}
        maxWidth={1.0}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

export default AchievementBadge3D;
