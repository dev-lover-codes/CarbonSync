import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import { useStore } from '../store/useStore';
import GlassPanel from './GlassPanel';
import * as THREE from 'three';

export function NavBar3D() {
  const groupRef = useRef();
  const { currentPage, navigate } = useStore();

  const navItems = [
    { id: 'dashboard', label: 'Dash', emoji: '⚡' },
    { id: 'tracker', label: 'Track', emoji: '📊' },
    { id: 'insights', label: 'Insights', emoji: '🔍' },
    { id: 'goals', label: 'Goals', emoji: '🎯' },
    { id: 'leaderboard', label: 'Board', emoji: '🏆' },
    { id: 'coach', label: 'Coach', emoji: '🤖' },
  ];

  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.position.copy(camera.position);
      groupRef.current.rotation.copy(camera.rotation);
      groupRef.current.translateZ(-5);
      groupRef.current.translateY(1.88);
    }
  });

  return (
    <group ref={groupRef}>
      <GlassPanel
        width={6.8}
        height={0.52}
        depth={0.03}
        glowColor="#00d4ff"
      >
        {/* Logo */}
        <group position={[-2.9, 0, 0.025]}>
          <mesh rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.11, 0.11, 0.11]} />
            <meshStandardMaterial
              color="#00ff87"
              emissive="#00ff87"
              emissiveIntensity={1.0}
              roughness={0.0}
              metalness={1.0}
            />
          </mesh>
          <Text
            position={[0.17, 0, 0]}
            fontSize={0.13}
            color="#ffffff"
            anchorX="left"
            anchorY="middle"
          >
            CarbonSync
          </Text>
        </group>

        {/* Nav Items */}
        <group position={[-1.1, 0, 0.025]}>
          {navItems.map((item, idx) => {
            const isActive = currentPage === item.id;
            return (
              <group key={item.id} position={[idx * 0.76, 0, 0]}>
                <Html center distanceFactor={6} transform style={{ pointerEvents: 'auto' }}>
                  <button
                    onClick={() => navigate(item.id)}
                    aria-label={`Navigate to ${item.label}`}
                    aria-current={isActive ? 'page' : undefined}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '8px',
                      border: isActive ? '1px solid rgba(0,255,135,0.5)' : '1px solid transparent',
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(0,255,135,0.2), rgba(0,255,135,0.08))'
                        : 'transparent',
                      color: isActive ? '#00ff87' : 'rgba(153,176,160,0.65)',
                      fontSize: '9px',
                      fontWeight: '700',
                      fontFamily: "'Space Grotesk', monospace",
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 0 10px rgba(0,255,135,0.2)' : 'none',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'rgba(0,255,135,0.8)';
                        e.currentTarget.style.background = 'rgba(0,255,135,0.05)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'rgba(153,176,160,0.65)';
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {item.label}
                  </button>
                </Html>
              </group>
            );
          })}
        </group>
      </GlassPanel>
    </group>
  );
}

export default NavBar3D;
