import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import { useStore } from '../store/useStore';
import GlassPanel from './GlassPanel';
import Button3D from './Button3D';
import * as THREE from 'three';

export function NavBar3D() {
  const groupRef = useRef();
  const { currentPage, navigate } = useStore();

  const navItems = [
    { id: 'dashboard', label: 'Dash' },
    { id: 'tracker', label: 'Track' },
    { id: 'insights', label: 'Insights' },
    { id: 'goals', label: 'Goals' },
    { id: 'leaderboard', label: 'Board' },
    { id: 'coach', label: 'Coach' }
  ];

  // Dynamic Camera HUD positioning
  useFrame(({ camera }) => {
    if (groupRef.current) {
      // Pin to camera viewport plane
      groupRef.current.position.copy(camera.position);
      groupRef.current.rotation.copy(camera.rotation);
      // Translate to sit at top-middle of camera view
      groupRef.current.translateZ(-5);
      groupRef.current.translateY(1.85);
    }
  });

  return (
    <group ref={groupRef}>
      <GlassPanel 
        width={6.2} 
        height={0.5} 
        depth={0.03} 
        glowColor="#00d4ff"
      >
        {/* Logo */}
        <group position={[-2.6, 0, 0.025]}>
          <mesh rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.12, 0.12, 0.12]} />
            <meshStandardMaterial color="#00ff87" emissive="#00ff87" emissiveIntensity={0.8} />
          </mesh>
          <Text
            position={[0.15, 0, 0]}
            fontSize={0.14}
            color="#ffffff"
            anchorX="left"
            anchorY="middle"
          >
            CarbonSync
          </Text>
        </group>

        {/* Links */}
        <group position={[-0.8, 0, 0.025]}>
          {navItems.map((item, idx) => {
            const isActive = currentPage === item.id;
            return (
              <group key={item.id} position={[idx * 0.72, 0, 0]}>
                <Button3D
                  width={0.62}
                  height={0.28}
                  depth={0.04}
                  label={item.label}
                  color={isActive ? '#00ff87' : 'rgba(0, 255, 135, 0.1)'}
                  textColor={isActive ? '#020b06' : '#00ff87'}
                  fontSize={0.08}
                  onClick={() => navigate(item.id)}
                />
              </group>
            );
          })}
        </group>
      </GlassPanel>
    </group>
  );
}

export default NavBar3D;
