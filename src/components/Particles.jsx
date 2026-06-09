import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Particles({ count = 2000 }) {
  const meshRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 15;
      const speed = 0.1 + Math.random() * 0.15;
      const scale = 0.4 + Math.random() * 1.2;
      temp.push({ x, y, z, speed, scale });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    particles.forEach((particle, i) => {
      // Delta-based calculation to remain frame-rate independent
      particle.y += particle.speed * 2.0 * delta;
      
      if (particle.y > 10) {
        particle.y = -10;
      }
      
      dummy.position.set(particle.x, particle.y, particle.z);
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[0.015, 4, 4]} />
      <meshBasicMaterial color="#00ff87" transparent opacity={0.5} />
    </instancedMesh>
  );
}

export default Particles;
