import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function LeafParticle({ position = [0, 0, 0], scale = 0.4, speed = 1.0 }) {
  const meshRef = useRef();

  const leafGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    // Draw leaf profile
    shape.moveTo(0, 0);
    shape.quadraticCurveTo(0.2, 0.4, 0, 0.85);
    shape.quadraticCurveTo(-0.2, 0.4, 0, 0);
    
    return new THREE.ExtrudeGeometry(shape, {
      steps: 1,
      depth: 0.015,
      bevelEnabled: true,
      bevelThickness: 0.008,
      bevelSize: 0.005,
      bevelSegments: 2
    });
  }, []);

  const spin = useMemo(() => ({
    x: 0.3 + Math.random() * 0.6,
    y: 0.4 + Math.random() * 0.8,
    z: 0.1 + Math.random() * 0.4,
    drift: 0.2 + Math.random() * 0.4
  }), []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += spin.x * speed * delta;
      meshRef.current.rotation.y += spin.y * speed * delta;
      meshRef.current.rotation.z += spin.z * speed * delta;
      
      meshRef.current.position.y += spin.drift * speed * delta;
      
      // Recycle particle when it drifts too high
      if (meshRef.current.position.y > 6) {
        meshRef.current.position.y = -6;
      }
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      scale={[scale, scale, scale]} 
      geometry={leafGeometry}
      castShadow
    >
      <meshStandardMaterial 
        color="#00ff87" 
        roughness={0.3} 
        metalness={0.6} 
        emissive="#001a08"
      />
    </mesh>
  );
}

export default LeafParticle;
