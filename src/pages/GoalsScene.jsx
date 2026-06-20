import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Text, Sparkles, Grid } from '@react-three/drei';
import GlassPanel from '../components/GlassPanel';
import Button3D from '../components/Button3D';
import ProgressRing3D from '../components/ProgressRing3D';
import AchievementBadge3D from '../components/AchievementBadge3D';
import StreakCalendar3D from '../components/StreakCalendar3D';
import * as THREE from 'three';

function GoalsScrollHandler({ layoutRef }) {
  const scroll = useScroll();
  useFrame(() => {
    if (layoutRef.current) {
      // Slide tilted garden plane up
      layoutRef.current.position.y = scroll.offset * 6.6;
      layoutRef.current.position.z = -scroll.offset * 4.5;
    }
  });
  return null;
}

function GoalPlant3D({ progress = 0.5 }) {
  // Render different geometries representing plant growth stages
  return (
    <group position={[0, -0.4, 0]}>
      {/* Stage 1: Seed */}
      {progress < 0.25 && (
        <mesh position={[0, 0.05, 0]} castShadow>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#8b5a2b" roughness={0.9} />
        </mesh>
      )}

      {/* Stage 2: Sprout */}
      {progress >= 0.25 && progress < 0.5 && (
        <group>
          {/* Stem */}
          <mesh position={[0, 0.2, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.03, 0.4]} />
            <meshStandardMaterial color="#00ff87" />
          </mesh>
          {/* Sprout leaf */}
          <mesh position={[0.08, 0.35, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[0.12, 0.02, 0.08]} />
            <meshStandardMaterial color="#00ff87" />
          </mesh>
        </group>
      )}

      {/* Stage 3: Bush */}
      {progress >= 0.5 && progress < 0.75 && (
        <group>
          <mesh position={[0, 0.3, 0]} castShadow>
            <cylinderGeometry args={[0.04, 0.05, 0.6]} />
            <meshStandardMaterial color="#5c4033" />
          </mesh>
          <mesh position={[0, 0.65, 0]} castShadow>
            <sphereGeometry args={[0.26, 16, 16]} />
            <meshStandardMaterial color="#00ff87" roughness={0.3} />
          </mesh>
        </group>
      )}

      {/* Stage 4: Mature Tree */}
      {progress >= 0.75 && (
        <group>
          {/* Trunk */}
          <mesh position={[0, 0.45, 0]} castShadow>
            <cylinderGeometry args={[0.07, 0.12, 0.9]} />
            <meshStandardMaterial color="#5c4033" roughness={0.8} />
          </mesh>
          {/* Canopy (low poly cone style) */}
          <mesh position={[0, 1.1, 0]} castShadow>
            <coneGeometry args={[0.45, 0.7, 5]} />
            <meshStandardMaterial color="#00ff87" roughness={0.5} flatShading />
          </mesh>
        </group>
      )}
    </group>
  );
}

export function GoalsScene() {
  const layoutRef = useRef();

  const goals = [
    { id: 1, title: 'Reduce Car Travel', progress: 0.85, deadline: '3 days left' },
    { id: 2, title: 'Eat Vegan Meals', progress: 0.45, deadline: '5 days left' },
    { id: 3, title: 'Limit Electricity', progress: 0.1, deadline: '7 days left' },
  ];

  const badges = [
    { id: 1, earned: true, label: 'Eco Seed', icon: '🌱' },
    { id: 2, earned: true, label: 'Bike Knight', icon: '🚲' },
    { id: 3, earned: true, label: 'Zero waste', icon: '🗑️' },
    { id: 4, earned: false, label: 'Solar Power', icon: '☀️' },
    { id: 5, earned: false, label: 'Forest Guard', icon: '🌲' },
    { id: 6, earned: false, label: 'CO2 Slayer', icon: '⚔️' },
  ];

  return (
    <group>
      <GoalsScrollHandler layoutRef={layoutRef} />
      <Sparkles count={45} scale={5} size={2.5} speed={0.3} color="#00ff87" />

      {/* Tilted scroll layout */}
      <group ref={layoutRef} position={[0, 0, 0]}>
        
        {/* ================= SECTION 1: GARDEN OF ACTIVE GOALS (y=0) ================= */}
        <group position={[0, 0, 0]}>
          <Text
            position={[0, 1.5, 0.05]}
            fontSize={0.2}
            color="#ffffff"
            anchorX="center"
          >
            ACTIVE TARGETS GARDEN
          </Text>

          {/* Grid lines floor for the garden */}
          <group position={[0, -0.52, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <Grid position={[0, 0, -0.01]} args={[6, 6]} cellSize={0.5} cellThickness={0.5} cellColor="#13281b" sectionThickness={1} sectionColor="#00ff87" fadeDistance={3.5} />
          </group>

          {/* Render goals plants + side panels */}
          {goals.map((goal, idx) => {
            const xOffset = -1.9 + idx * 1.9;
            return (
              <group key={goal.id} position={[xOffset, 0, 0]}>
                {/* 3D Plant Model */}
                <group position={[0, 0, 0.2]}>
                  <GoalPlant3D progress={goal.progress} />
                </group>

                {/* Floating details card */}
                <group position={[0, 0.65, 0.1]}>
                  <GlassPanel width={1.4} height={0.9} glowColor="#00ff87">
                    <Text position={[0, 0.3, 0.05]} fontSize={0.08} color="#ffffff" maxWidth={1.2} textAlign="center">
                      {goal.title.toUpperCase()}
                    </Text>
                    <Text position={[0, 0.05, 0.05]} fontSize={0.07} color="#808080">
                      {goal.deadline}
                    </Text>
                    <group position={[0, -0.22, 0.05]}>
                      <ProgressRing3D progress={goal.progress} size={0.16} color="#00ff87" />
                    </group>
                  </GlassPanel>
                </group>
              </group>
            );
          })}
        </group>

        {/* ================= SECTION 2: ACHIEVEMENTS MEDALS (y=-3.2) ================= */}
        <group position={[0, -3.2, 0]}>
          <Text
            position={[0, 1.4, 0.05]}
            fontSize={0.2}
            color="#ffffff"
            anchorX="center"
          >
            ECO COSMOS MEDALS
          </Text>

          {/* Hexagonal grid of badges */}
          <group position={[0, 0.2, 0]}>
            {badges.map((badge, idx) => {
              const row = Math.floor(idx / 3);
              const col = idx % 3;
              const x = -1.6 + col * 1.6 + (row % 2) * 0.8 - 0.4;
              const y = 0.3 - row * 1.1;
              return (
                <AchievementBadge3D
                  key={badge.id}
                  earned={badge.earned}
                  label={badge.label}
                  icon={badge.icon}
                  position={[x, y, 0]}
                  scale={0.7}
                />
              );
            })}
          </group>
        </group>

        {/* ================= SECTION 3: STREAK CALENDAR (y=-6.4) ================= */}
        <group position={[0, -6.4, 0]}>
          <Text
            position={[0, 1.3, 0.05]}
            fontSize={0.2}
            color="#ffffff"
            anchorX="center"
          >
            STREAK CALENDAR GRID
          </Text>

          <group position={[0, 0, 0]}>
            <StreakCalendar3D scale={1.1} />
          </group>
        </group>
      </group>
    </group>
  );
}

export default GoalsScene;
