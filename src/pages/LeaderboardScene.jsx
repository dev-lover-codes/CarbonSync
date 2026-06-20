import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { Text, Sparkles } from '@react-three/drei';
import GlassPanel from '../components/GlassPanel';
import Button3D from '../components/Button3D';
import * as THREE from 'three';

export function LeaderboardScene() {
  const [filter, setFilter] = useState('month'); // 'month' | 'alltime'

  // Spring animation for podiums rising on mount
  const { y1, y2, y3 } = useSpring({
    from: { y1: -2.5, y2: -2.5, y3: -2.5 },
    to: { y1: -0.3, y2: -0.5, y3: -0.7 },
    delay: 150,
    config: { mass: 1, tension: 170, friction: 18 }
  });

  const podiumData = {
    first: { name: 'AARAV K.', saved: '124.5 KG', initials: 'AK', color: '#ffd700' },
    second: { name: 'PRIYA S.', saved: '105.2 KG', initials: 'PS', color: '#c0c0c0' },
    third: { name: 'ROHIT M.', saved: '92.1 KG', initials: 'RM', color: '#cd7f32' }
  };

  const runnersUp = [
    { rank: 4, name: 'SNEHA P.', saved: '82.4 KG', initials: 'SP' },
    { rank: 5, name: 'KABIR J.', saved: '79.0 KG', initials: 'KJ' },
    { rank: 6, name: 'TANYA G.', saved: '71.5 KG', initials: 'TG' }
  ];

  return (
    <group>
      {/* Background space stars */}
      <Sparkles count={80} scale={6} size={2.5} speed={0.4} color="#ffd700" />

      {/* Filter Toggle Buttons */}
      <group position={[0, 1.8, 0]}>
        <GlassPanel width={2.6} height={0.42} depth={0.02} glowColor="#00ff87">
          <Button3D
            width={1.0}
            height={0.25}
            position={[-0.6, 0, 0.02]}
            label="THIS MONTH"
            color={filter === 'month' ? '#00ff87' : 'rgba(0, 255, 135, 0.12)'}
            textColor={filter === 'month' ? '#020b06' : '#00ff87'}
            fontSize={0.07}
            onClick={() => setFilter('month')}
          />
          <Button3D
            width={1.0}
            height={0.25}
            position={[0.6, 0, 0.02]}
            label="ALL TIME"
            color={filter === 'alltime' ? '#00ff87' : 'rgba(0, 255, 135, 0.12)'}
            textColor={filter === 'alltime' ? '#020b06' : '#00ff87'}
            fontSize={0.07}
            onClick={() => setFilter('alltime')}
          />
        </GlassPanel>
      </group>

      {/* ================= TOP 3 STAGE PODIUMS ================= */}
      <group position={[0, -0.25, 0]}>
        
        {/* 2ND PLACE (Left) */}
        <animated.group position={[-1.2, y2, 0]}>
          {/* Podium platform */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.8, 0.8, 0.6]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.15} />
          </mesh>
          {/* Avatar */}
          <mesh position={[0, 0.65, 0]} castShadow>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color="#00d4ff" roughness={0.2} metalness={0.8} />
          </mesh>
          <Text position={[0, 0.65, 0.22]} fontSize={0.12} color="#020b06" anchorX="center" anchorY="middle">
            {podiumData.second.initials}
          </Text>
          {/* Info */}
          <Text position={[0, -0.55, 0.1]} fontSize={0.1} color="#ffffff" anchorX="center">
            {podiumData.second.name}
          </Text>
          <Text position={[0, -0.7, 0.1]} fontSize={0.08} color="#00d4ff" anchorX="center">
            {podiumData.second.saved}
          </Text>
        </animated.group>

        {/* 1ST PLACE (Center) */}
        <animated.group position={[0, y1, 0.1]}>
          {/* Podium platform */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.9, 1.2, 0.6]} />
            <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.15} />
          </mesh>
          {/* Avatar */}
          <mesh position={[0, 0.85, 0]} castShadow>
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshStandardMaterial color="#00ff87" roughness={0.2} metalness={0.8} />
          </mesh>
          <Text position={[0, 0.85, 0.24]} fontSize={0.13} color="#020b06" anchorX="center" anchorY="middle">
            {podiumData.first.initials}
          </Text>
          {/* Crown */}
          <mesh position={[0, 1.15, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.15, 0.12, 5]} />
            <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.3} />
          </mesh>
          {/* Info */}
          <Text position={[0, -0.75, 0.1]} fontSize={0.11} color="#ffffff" anchorX="center">
            {podiumData.first.name}
          </Text>
          <Text position={[0, -0.9, 0.1]} fontSize={0.09} color="#00ff87" anchorX="center">
            {podiumData.first.saved}
          </Text>
          {/* Winner Sparkles */}
          <Sparkles count={15} scale={1.2} size={3} speed={0.8} color="#ffd700" position={[0, 0.8, 0]} />
        </animated.group>

        {/* 3RD PLACE (Right) */}
        <animated.group position={[1.2, y3, 0]}>
          {/* Podium platform */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.8, 0.5, 0.6]} />
            <meshStandardMaterial color="#cd7f32" metalness={0.9} roughness={0.15} />
          </mesh>
          {/* Avatar */}
          <mesh position={[0, 0.5, 0]} castShadow>
            <sphereGeometry args={[0.18, 16, 16]} />
            <meshStandardMaterial color="#ffb347" roughness={0.2} metalness={0.8} />
          </mesh>
          <Text position={[0, 0.5, 0.2]} fontSize={0.11} color="#020b06" anchorX="center" anchorY="middle">
            {podiumData.third.initials}
          </Text>
          {/* Info */}
          <Text position={[0, -0.4, 0.1]} fontSize={0.1} color="#ffffff" anchorX="center">
            {podiumData.third.name}
          </Text>
          <Text position={[0, -0.55, 0.1]} fontSize={0.08} color="#ffb347" anchorX="center">
            {podiumData.third.saved}
          </Text>
        </animated.group>
      </group>

      {/* ================= RANKS 4-6 LIST ================= */}
      <group position={[0, -1.75, 0.05]}>
        {runnersUp.map((user, idx) => (
          <group key={user.rank} position={[0, -idx * 0.46, 0]}>
            <GlassPanel width={3.2} height={0.36} glowColor="#00d4ff">
              {/* Rank text */}
              <Text position={[-1.3, 0, 0.05]} fontSize={0.1} color="#00d4ff" anchorX="left" anchorY="middle">
                {`#0${user.rank}`}
              </Text>
              
              {/* Avatar circle */}
              <mesh position={[-0.7, 0, 0.02]}>
                <sphereGeometry args={[0.11, 16, 16]} />
                <meshStandardMaterial color="#555555" />
              </mesh>
              <Text position={[-0.7, 0, 0.14]} fontSize={0.06} color="#ffffff" anchorX="center" anchorY="middle">
                {user.initials}
              </Text>

              {/* Name */}
              <Text position={[-0.4, 0, 0.05]} fontSize={0.09} color="#ffffff" anchorX="left" anchorY="middle">
                {user.name}
              </Text>

              {/* Savings */}
              <Text position={[1.3, 0, 0.05]} fontSize={0.095} color="#00ff87" anchorX="right" anchorY="middle">
                {user.saved}
              </Text>
            </GlassPanel>
          </group>
        ))}
      </group>
    </group>
  );
}

export default LeaderboardScene;
