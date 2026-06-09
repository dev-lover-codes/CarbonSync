import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Text, Sparkles } from '@react-three/drei';
import { useAuth } from '../contexts/AuthContext';
import { useStore } from '../store/useStore';
import FloatingCard from '../components/FloatingCard';
import GlassPanel from '../components/GlassPanel';
import Button3D from '../components/Button3D';
import AreaChart3D from '../components/AreaChart3D';
import ProgressRing3D from '../components/ProgressRing3D';
import * as THREE from 'three';

function DashboardScrollHandler({ layoutRef }) {
  const scroll = useScroll();
  
  useFrame(() => {
    if (layoutRef.current) {
      // Slide tilted panel layout up and back on scroll
      const offset = scroll.offset;
      layoutRef.current.position.y = offset * 6.5;
      layoutRef.current.position.z = -offset * 8.5;
    }
  });

  return null;
}

export function DashboardScene() {
  const { currentUser, userProfile } = useAuth();
  const { userStats, navigate } = useStore();
  const layoutRef = useRef();

  // Typewriter effect greeting
  const [greeting, setGreeting] = useState('');
  const name = userProfile?.name || currentUser?.displayName || 'Eco-Traveler';
  const fullGreeting = `GOOD MORNING, ${name.toUpperCase()}`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setGreeting(fullGreeting.substring(0, index));
      index++;
      if (index > fullGreeting.length) {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [fullGreeting]);

  // Staggered scales for grid cards
  const [scale1, setScale1] = useState(0);
  const [scale2, setScale2] = useState(0);
  const [scale3, setScale3] = useState(0);
  const [scale4, setScale4] = useState(0);

  // Count up value animations
  const [totalSavedCount, setTotalSavedCount] = useState(0);
  const [dailyFootprintCount, setDailyFootprintCount] = useState(0);

  useEffect(() => {
    // Trigger entrance scales
    setTimeout(() => setScale1(1), 150);
    setTimeout(() => setScale2(1), 300);
    setTimeout(() => setScale3(1), 450);
    setTimeout(() => setScale4(1), 600);

    // Count up animations
    const targetSaved = userProfile?.totalSaved || userStats.totalSaved;
    const targetDaily = userStats.dailyFootprint;

    let saved = 0;
    const intervalSaved = setInterval(() => {
      saved += targetSaved / 20;
      if (saved >= targetSaved) {
        setTotalSavedCount(targetSaved);
        clearInterval(intervalSaved);
      } else {
        setTotalSavedCount(saved);
      }
    }, 40);

    let daily = 0;
    const intervalDaily = setInterval(() => {
      daily += targetDaily / 20;
      if (daily >= targetDaily) {
        setDailyFootprintCount(targetDaily);
        clearInterval(intervalDaily);
      } else {
        setDailyFootprintCount(daily);
      }
    }, 40);

    return () => {
      clearInterval(intervalSaved);
      clearInterval(intervalDaily);
    };
  }, [userProfile, userStats]);

  return (
    <group>
      <DashboardScrollHandler layoutRef={layoutRef} />

      {/* Main container plane tilted forward */}
      <group ref={layoutRef} rotation={[-0.1, 0, 0]}>
        
        {/* ================= HEADER AREA (y=1.8, z=0) ================= */}
        <group position={[0, 1.9, 0]}>
          {/* Greeting text with typewriter slice */}
          <Text
            position={[-2.8, 0.2, 0.05]}
            fontSize={0.2}
            color="#ffffff"
            anchorX="left"
            anchorY="middle"
          >
            {greeting}
          </Text>

          {/* Streak Badge */}
          <group position={[1.4, 0.2, 0.05]}>
            <mesh>
              <torusGeometry args={[0.16, 0.03, 16, 32]} />
              <meshStandardMaterial color="#ffb347" emissive="#ffb347" emissiveIntensity={0.8} />
            </mesh>
            <Text
              position={[0.26, 0, 0]}
              fontSize={0.11}
              color="#ffffff"
              anchorX="left"
              anchorY="middle"
            >
              {`${userProfile?.streak || userStats.streak} DAY STREAK 🔥`}
            </Text>
          </group>

          {/* Level Gem Badge */}
          <group position={[2.6, 0.2, 0.05]}>
            <mesh rotation={[0.4, 0.4, 0]}>
              <icosahedronGeometry args={[0.15, 0]} />
              <meshStandardMaterial color="#00d4ff" roughness={0.1} metalness={0.9} emissive="#00d4ff" emissiveIntensity={0.5} />
            </mesh>
            <Text
              position={[0.22, 0, 0]}
              fontSize={0.11}
              color="#ffffff"
              anchorX="left"
              anchorY="middle"
            >
              {`LVL ${userStats.level} ${userProfile?.level || 'SEED'}`}
            </Text>
          </group>
        </group>

        {/* ================= SCROLL SECTION 1: GRID METRICS (y=0.4) ================= */}
        <group position={[0, 0.4, 0]}>
          <group position={[-1.75, 0.4, 0]} scale={[scale1, scale1, scale1]}>
            <FloatingCard width={1.5} height={1.1} glowColor="#00ff87">
              <Text position={[0, 0.25, 0.05]} fontSize={0.18} color="#00ff87">
                {`${dailyFootprintCount.toFixed(1)} KG`}
              </Text>
              <Text position={[0, -0.25, 0.05]} fontSize={0.09} color="rgba(255,255,255,0.6)" maxWidth={1.2} textAlign="center">
                TODAY EMISSIONS
              </Text>
            </FloatingCard>
          </group>

          <group position={[0, 0.4, 0]} scale={[scale2, scale2, scale2]}>
            <FloatingCard width={1.5} height={1.1} glowColor="#00d4ff" speed={1.3}>
              <Text position={[0, 0.25, 0.05]} fontSize={0.18} color="#00d4ff">
                {`${totalSavedCount.toFixed(1)} KG`}
              </Text>
              <Text position={[0, -0.25, 0.05]} fontSize={0.09} color="rgba(255,255,255,0.6)" maxWidth={1.2} textAlign="center">
                TOTAL CO₂ SAVED
              </Text>
            </FloatingCard>
          </group>

          <group position={[1.75, 0.4, 0]} scale={[scale3, scale3, scale3]}>
            <FloatingCard width={1.5} height={1.1} glowColor="#ffb347" speed={1.7}>
              <Text position={[0, 0.25, 0.05]} fontSize={0.18} color="#ffb347">
                {`${(userProfile?.weeklyLimit || 80)} KG`}
              </Text>
              <Text position={[0, -0.25, 0.05]} fontSize={0.09} color="rgba(255,255,255,0.6)" maxWidth={1.2} textAlign="center">
                WEEKLY TARGET
              </Text>
            </FloatingCard>
          </group>

          <group position={[0, -0.8, 0.05]} scale={[scale4, scale4, scale4]}>
            <Button3D
              width={2.8}
              height={0.34}
              label="+ LOG ACTIVITY"
              color="#00ff87"
              onClick={() => navigate('tracker')}
            />
          </group>
        </group>

        {/* ================= SCROLL SECTION 2: WEEKLY CHART (y=-1.8, z=-2.5) ================= */}
        <group position={[0, -1.8, -2.5]}>
          <AreaChart3D data={userStats.weeklyFootprint} title="THIS WEEK'S CO₂ PROFILE" />
        </group>

        {/* ================= SCROLL SECTION 3: RECENT ACTIVITIES (y=-4.0, z=-5.0) ================= */}
        <group position={[0, -4.0, -5.0]}>
          <Text
            position={[0, 0.9, 0.05]}
            fontSize={0.15}
            color="#ffffff"
            anchorX="center"
          >
            TODAY'S LOGGED ACTIVITIES
          </Text>

          {/* Activity rows */}
          <group position={[0, 0.3, 0]}>
            <GlassPanel width={3.2} height={0.36} glowColor="#00ff87">
              <Text position={[-1.3, 0, 0.05]} fontSize={0.1} color="#ffffff" anchorX="left" anchorY="middle">
                🚗 CAR TRAVEL
              </Text>
              <Text position={[1.3, 0, 0.05]} fontSize={0.1} color="#ffb347" anchorX="right" anchorY="middle">
                +4.2 KG CO₂
              </Text>
            </GlassPanel>
          </group>

          <group position={[0, -0.15, 0]}>
            <GlassPanel width={3.2} height={0.36} glowColor="#00d4ff">
              <Text position={[-1.3, 0, 0.05]} fontSize={0.1} color="#ffffff" anchorX="left" anchorY="middle">
                🥗 VEGAN MEALS
              </Text>
              <Text position={[1.3, 0, 0.05]} fontSize={0.1} color="#00ff87" anchorX="right" anchorY="middle">
                SAVED 1.5 KG
              </Text>
            </GlassPanel>
          </group>

          <group position={[0, -0.6, 0]}>
            <GlassPanel width={3.2} height={0.36} glowColor="#00d4ff">
              <Text position={[-1.3, 0, 0.05]} fontSize={0.1} color="#ffffff" anchorX="left" anchorY="middle">
                🔌 HOME APPLIANCES
              </Text>
              <Text position={[1.3, 0, 0.05]} fontSize={0.1} color="#ffb347" anchorX="right" anchorY="middle">
                +2.8 KG CO₂
              </Text>
            </GlassPanel>
          </group>
        </group>

        {/* ================= SCROLL SECTION 4: AI INSIGHT (y=-6.2, z=-7.5) ================= */}
        <group position={[0, -6.2, -7.5]}>
          <GlassPanel width={3.2} height={1.2} glowColor="#00ff87">
            {/* EcoBot wireframe helper shape */}
            <group position={[-1.1, 0, 0.05]} rotation={[0.4, 0.4, 0]}>
              <mesh>
                <icosahedronGeometry args={[0.22, 1]} />
                <meshStandardMaterial color="#00ff87" wireframe emissive="#00ff87" emissiveIntensity={0.6} />
              </mesh>
            </group>

            {/* Tip content from Gemini */}
            <Text
              position={[-0.7, 0.35, 0.05]}
              fontSize={0.095}
              color="#00ff87"
              anchorX="left"
              anchorY="top"
            >
              ECOBOT TIP OF THE DAY
            </Text>

            <Text
              position={[-0.7, 0.1, 0.05]}
              fontSize={0.08}
              color="#ffffff"
              maxWidth={2.0}
              anchorX="left"
              anchorY="top"
            >
              Your transport is the largest emission contributor. Commuting by bus or bicycle just twice a week will reduce your weekly budget footprint by 8.4 kg CO2!
            </Text>
          </GlassPanel>

          <Sparkles count={15} scale={2} size={3} speed={0.4} color="#00ff87" position={[0, 0, 0.1]} />
        </group>
      </group>
    </group>
  );
}

export default DashboardScene;
