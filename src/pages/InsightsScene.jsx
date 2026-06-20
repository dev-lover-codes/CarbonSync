import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Text, Sparkles } from '@react-three/drei';
import { useStore } from '../store/useStore';
import PieChart3D from '../components/PieChart3D';
import BarChart3D from '../components/BarChart3D';
import ProgressRing3D from '../components/ProgressRing3D';
import GlassPanel from '../components/GlassPanel';
import Button3D from '../components/Button3D';
import * as THREE from 'three';

function InsightsScrollHandler({ layoutRef }) {
  const scroll = useScroll();
  useFrame(() => {
    if (layoutRef.current) {
      // Smoothly scroll the observatory dashboard
      layoutRef.current.position.y = scroll.offset * 3.8;
      layoutRef.current.position.z = -scroll.offset * 4.5;
    }
  });
  return null;
}

export function InsightsScene() {
  const { userStats } = useStore();
  const layoutRef = useRef();
  
  const [range, setRange] = useState('week'); // 'week' | 'month' | 'quarter'
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Count up score metric on mount
    let start = 0;
    const target = 82; // Footprint rating score (out of 100)
    const timer = setInterval(() => {
      start += 2;
      if (start >= target) {
        setScore(target);
        clearInterval(timer);
      } else {
        setScore(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <group>
      <InsightsScrollHandler layoutRef={layoutRef} />
      <Sparkles count={50} scale={6} size={2} speed={0.4} color="#00ff87" />

      {/* Date Range Selector pinned HUD-like at top */}
      <group position={[0, 1.8, 0]}>
        <GlassPanel width={3.6} height={0.45} depth={0.02} glowColor="#00d4ff">
          {['week', 'month', 'quarter'].map((r, idx) => {
            const active = range === r;
            return (
              <group key={r} position={[-1.1 + idx * 1.1, 0, active ? 0.05 : 0]}>
                <Button3D
                  width={0.9}
                  height={0.25}
                  label={r.toUpperCase()}
                  color={active ? '#00d4ff' : 'rgba(0, 212, 255, 0.12)'}
                  textColor={active ? '#020b06' : '#00d4ff'}
                  fontSize={0.07}
                  onClick={() => setRange(r)}
                />
              </group>
            );
          })}
        </GlassPanel>
      </group>

      {/* Tilted Scroll Layout */}
      <group ref={layoutRef} position={[0, 0, 0]}>
        
        {/* ================= SECTION 1: CHARTS (y=0) ================= */}
        <group position={[0, 0, 0]}>
          {/* Pie Chart categories */}
          <group position={[-1.6, 0.2, 0]} scale={0.7}>
            <PieChart3D 
              data={[
                { label: 'Transport', value: userStats.categories.transport, color: '#00ff87' },
                { label: 'Food', value: userStats.categories.food, color: '#00d4ff' },
                { label: 'Energy', value: userStats.categories.energy, color: '#ffb347' },
                { label: 'Shopping', value: userStats.categories.shopping, color: '#ff5e62' },
              ]}
              title="EMISSIONS BREAKDOWN"
            />
          </group>

          {/* Bar Chart comparing periods */}
          <group position={[1.6, 0.2, 0]} scale={0.7}>
            <BarChart3D 
              data={[
                { label: 'Current', value: 38.4, color: '#00ff87' },
                { label: 'Previous', value: 45.8, color: '#00d4ff' },
                { label: 'Average', value: 50.0, color: '#ffb347' },
              ]}
              title="PERIOD COMPARISON"
            />
          </group>
        </group>

        {/* ================= SECTION 2: SCORE RING (y=-3.2) ================= */}
        <group position={[0, -3.2, 0]}>
          {/* Main rating score ring */}
          <group position={[-1.4, 0, 0]}>
            <ProgressRing3D progress={score / 100} size={1.1} color="#00ff87" />
            
            <Text
              position={[0, -1.3, 0.05]}
              fontSize={0.15}
              color="#ffffff"
            >
              FOOTPRINT RATING: GRADE A
            </Text>
          </group>

          {/* Average compare bars */}
          <group position={[1.3, 0, 0]}>
            <GlassPanel width={2.4} height={1.8} glowColor="#00d4ff">
              <Text position={[0, 0.65, 0.05]} fontSize={0.11} color="#ffffff">
                BENCHMARK COMPARISON
              </Text>

              {/* Indian Average Compare Bar */}
              <group position={[0, 0.1, 0.05]}>
                <Text position={[-1.0, 0.15, 0]} fontSize={0.08} color="#99b0a0" anchorX="left">
                  INDIAN REGIONAL AVG (1.8T)
                </Text>
                <mesh position={[0, -0.05, 0]}>
                  <planeGeometry args={[2.0, 0.08]} />
                  <meshBasicMaterial color="#13281b" />
                </mesh>
                <mesh position={[-0.4, -0.05, 0.01]}>
                  <planeGeometry args={[1.2, 0.08]} />
                  <meshBasicMaterial color="#00ff87" />
                </mesh>
              </group>

              {/* Global Average Compare Bar */}
              <group position={[0, -0.5, 0.05]}>
                <Text position={[-1.0, 0.15, 0]} fontSize={0.08} color="#99b0a0" anchorX="left">
                  GLOBAL CO₂ LIMIT (4.0T)
                </Text>
                <mesh position={[0, -0.05, 0]}>
                  <planeGeometry args={[2.0, 0.08]} />
                  <meshBasicMaterial color="#13281b" />
                </mesh>
                <mesh position={[-0.7, -0.05, 0.01]}>
                  <planeGeometry args={[0.6, 0.08]} />
                  <meshBasicMaterial color="#00d4ff" />
                </mesh>
              </group>
            </GlassPanel>
          </group>
        </group>

        {/* ================= SECTION 3: AI ANALYSIS (y=-6.4) ================= */}
        <group position={[0, -6.4, 0]}>
          <GlassPanel width={3.8} height={1.4} glowColor="#00ff87">
            
            {/* Custom 3D Trend Arrow (Pointing down = good, pointing up = bad) */}
            <group position={[-1.3, 0, 0.05]} rotation={[0, 0, Math.PI]}>
              {/* Stem cylinder */}
              <mesh castShadow>
                <cylinderGeometry args={[0.06, 0.06, 0.4, 16]} />
                <meshStandardMaterial color="#00ff87" emissive="#00ff87" emissiveIntensity={0.6} />
              </mesh>
              {/* Cone arrow tip */}
              <mesh position={[0, -0.28, 0]} castShadow>
                <coneGeometry args={[0.16, 0.25, 16]} />
                <meshStandardMaterial color="#00ff87" emissive="#00ff87" emissiveIntensity={0.8} />
              </mesh>
            </group>

            <Text
              position={[-0.8, 0.45, 0.05]}
              fontSize={0.12}
              color="#00ff87"
              anchorX="left"
              anchorY="top"
            >
              COSMIC TREND: DECREASING
            </Text>

            <Text
              position={[-0.8, 0.15, 0.05]}
              fontSize={0.08}
              color="#ffffff"
              maxWidth={2.6}
              anchorX="left"
              anchorY="top"
            >
              Your footprint fell 16.2% since last month, driven primarily by reduction in high-emission car usage. Vegetable-focused meal selections logged recently provided an additional offset. Maintain this trajectory to reach Seedling Level 2.
            </Text>
          </GlassPanel>
        </group>
      </group>
    </group>
  );
}

export default InsightsScene;
