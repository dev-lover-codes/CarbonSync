import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import auroraVert from '../shaders/aurora.vert?raw';
import auroraFrag from '../shaders/aurora.frag?raw';

export function AreaChart3D({
  data = [10, 8.5, 9.2, 7.0, 8.8, 6.2, 7.5],
  title = 'Emissions Waves',
  position = [0, 0, 0],
  ...props
}) {
  const materialRef = useRef();

  const uniforms = useMemo(() => ({
    time: { value: 0 },
    color1: { value: new THREE.Color('#00ff87') },
    color2: { value: new THREE.Color('#00d4ff') }
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime() * 1.5;
    }
  });

  return (
    <group position={position} {...props}>
      {/* Title */}
      <Text
        position={[0, 1.4, 0.05]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="bottom"
      >
        {title || ''}
      </Text>

      {/* Animated Wave Plane */}
      <mesh position={[0, 0.3, 0]}>
        <planeGeometry args={[3.2, 1.3, 32, 32]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={auroraVert}
          fragmentShader={auroraFrag}
          uniforms={uniforms}
          transparent
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Baseline */}
      <mesh position={[0, -0.4, 0.02]}>
        <boxGeometry args={[3.2, 0.015, 0.02]} />
        <meshBasicMaterial color="#00ff87" transparent opacity={0.6} />
      </mesh>

      {/* Day tags */}
      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
        <Text
          key={idx}
          position={[-1.35 + idx * 0.45, -0.55, 0.05]}
          fontSize={0.08}
          color="rgba(255,255,255,0.5)"
          anchorX="center"
          anchorY="top"
        >
          {day}
        </Text>
      ))}
    </group>
  );
}

export default AreaChart3D;
