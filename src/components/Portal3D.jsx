import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useStore } from '../store/useStore';
import gsap from 'gsap';

export function Portal3D() {
  const groupRef = useRef();
  const vortexRef = useRef();
  const { transitionActive } = useStore();

  useEffect(() => {
    if (!vortexRef.current) return;
    if (transitionActive) {
      // Swirl scale-up and fly toward viewport
      gsap.fromTo(vortexRef.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 4, y: 4, z: 4, duration: 0.6, ease: 'power2.inOut' }
      );
    } else {
      // Swirl scale-down back to center
      gsap.to(vortexRef.current.scale, { 
        x: 0, 
        y: 0, 
        z: 0, 
        duration: 0.5, 
        ease: 'power2.inOut' 
      });
    }
  }, [transitionActive]);

  useFrame(({ camera }, delta) => {
    if (groupRef.current) {
      // Pin to HUD space
      groupRef.current.position.copy(camera.position);
      groupRef.current.rotation.copy(camera.rotation);
      groupRef.current.translateZ(-1.8); // Position right in front of camera lens
    }

    if (vortexRef.current) {
      // Rapid spin rotation
      vortexRef.current.rotation.z += 5.0 * delta;
      vortexRef.current.rotation.x += 0.4 * delta;
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={vortexRef} scale={[0, 0, 0]}>
        {/* Neon cyan outer ring */}
        <mesh>
          <torusGeometry args={[0.8, 0.18, 16, 64]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#00d4ff" 
            emissiveIntensity={2.0} 
            wireframe 
          />
        </mesh>
        
        {/* Neon mint inner ring */}
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.5, 0.12, 16, 64]} />
          <meshStandardMaterial 
            color="#00ff87" 
            emissive="#00ff87" 
            emissiveIntensity={2.5} 
            wireframe 
          />
        </mesh>

        {/* Core light flash */}
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>
      </group>
    </group>
  );
}

export default Portal3D;
