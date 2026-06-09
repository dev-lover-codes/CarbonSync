import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Text } from '@react-three/drei';

export function ProgressRing3D({
  progress = 0.75, // value from 0 to 1
  color = '#00ff87',
  size = 1.0,
  position = [0, 0, 0],
  ...props
}) {
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z -= 0.3 * delta;
    }
  });

  const percent = Math.round(progress * 100);
  const arcLength = Math.PI * 2 * Math.max(0.001, Math.min(0.999, progress));

  return (
    <group position={position} {...props}>
      {/* Background ring (full circle, dark muted color) */}
      <Torus args={[size, size * 0.08, 16, 64]} castShadow receiveShadow>
        <meshStandardMaterial color="#0b1b11" roughness={0.8} />
      </Torus>

      {/* Foreground glowing progress ring */}
      <Torus 
        ref={ringRef}
        args={[size, size * 0.09, 16, 64, arcLength]}
        rotation={[0, 0, Math.PI / 2]} // Start at top
      >
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.8} 
          roughness={0.1}
          metalness={0.9}
        />
      </Torus>

      {/* Numerical percentage text in center */}
      <Text
        position={[0, 0, size * 0.05]}
        fontSize={size * 0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {`${percent}%`}
      </Text>
    </group>
  );
}

export default ProgressRing3D;
