import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Text, Sparkles, Html } from '@react-three/drei';
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
      const offset = scroll.offset;
      layoutRef.current.position.y = offset * 6.5;
      layoutRef.current.position.z = -offset * 8.5;
    }
  });

  return null;
}

// Spinning gem for level badge
function SpinningGem({ color = '#00d4ff' }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += 0.8 * delta;
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.12, 0]} />
      <meshStandardMaterial color={color} roughness={0.05} metalness={0.95} emissive={color} emissiveIntensity={0.6} />
    </mesh>
  );
}

export function DashboardScene() {
  const { currentUser, userProfile } = useAuth();
  const { userStats, navigate } = useStore();
  const layoutRef = useRef();

  const [greeting, setGreeting] = useState('');
  const name = userProfile?.name || currentUser?.displayName || 'Eco-Traveler';

  // Time-based greeting
  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'GOOD MORNING';
    if (hour < 17) return 'GOOD AFTERNOON';
    return 'GOOD EVENING';
  };

  const fullGreeting = `${getTimeGreeting()}, ${name.toUpperCase()}`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setGreeting(fullGreeting.substring(0, index));
      index++;
      if (index > fullGreeting.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [fullGreeting]);

  const [scale1, setScale1] = useState(0);
  const [scale2, setScale2] = useState(0);
  const [scale3, setScale3] = useState(0);
  const [scale4, setScale4] = useState(0);
  const [totalSavedCount, setTotalSavedCount] = useState(0);
  const [dailyFootprintCount, setDailyFootprintCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setScale1(1), 150);
    setTimeout(() => setScale2(1), 280);
    setTimeout(() => setScale3(1), 410);
    setTimeout(() => setScale4(1), 540);

    const targetSaved = userProfile?.totalSaved || userStats.totalSaved;
    const targetDaily = userStats.dailyFootprint;

    let saved = 0;
    const intervalSaved = setInterval(() => {
      saved += targetSaved / 25;
      if (saved >= targetSaved) { setTotalSavedCount(targetSaved); clearInterval(intervalSaved); }
      else setTotalSavedCount(saved);
    }, 32);

    let daily = 0;
    const intervalDaily = setInterval(() => {
      daily += targetDaily / 25;
      if (daily >= targetDaily) { setDailyFootprintCount(targetDaily); clearInterval(intervalDaily); }
      else setDailyFootprintCount(daily);
    }, 32);

    return () => { clearInterval(intervalSaved); clearInterval(intervalDaily); };
  }, [userProfile, userStats]);

  const streakCount = userProfile?.streak || userStats.streak || 0;
  const levelName = userProfile?.level || 'Seed';
  const weeklyLimit = userProfile?.weeklyLimit || 80;

  return (
    <group>
      <DashboardScrollHandler layoutRef={layoutRef} />

      <group ref={layoutRef} rotation={[-0.08, 0, 0]}>

        {/* ═══════════════════════════════ HEADER ═══════════════════════════════ */}
        <group position={[0, 2.0, 0]}>
          {/* Greeting typewriter */}
          <Text
            position={[-2.8, 0.18, 0.05]}
            fontSize={0.18}
            color="#ffffff"
            anchorX="left"
            anchorY="middle"
            font={undefined}
          >
            {greeting}
          </Text>

          {/* Subtitle line */}
          <Html position={[-2.8, -0.12, 0.05]} distanceFactor={5} transform style={{ pointerEvents: 'none' }}>
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '11px', color: 'rgba(153,176,160,0.6)', letterSpacing: '0.06em' }}>
              Your carbon dashboard · Live tracking enabled
            </div>
          </Html>

          {/* Streak Badge */}
          <group position={[1.8, 0.18, 0.05]}>
            <Html center distanceFactor={5} transform style={{ pointerEvents: 'none' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '5px 12px',
                background: 'rgba(255,179,71,0.1)',
                border: '1px solid rgba(255,179,71,0.3)',
                borderRadius: '20px',
                fontSize: '11px',
                color: '#ffb347',
                fontWeight: '700',
                fontFamily: "'Space Grotesk', monospace",
                letterSpacing: '0.08em',
                boxShadow: '0 0 12px rgba(255,179,71,0.15)',
              }}>
                🔥 {streakCount} DAY STREAK
              </div>
            </Html>
          </group>

          {/* Level Badge */}
          <group position={[3.0, 0.18, 0.05]}>
            <SpinningGem color="#00d4ff" />
            <Html position={[0.22, 0, 0]} distanceFactor={5} transform style={{ pointerEvents: 'none' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '5px 12px',
                background: 'rgba(0,212,255,0.08)',
                border: '1px solid rgba(0,212,255,0.25)',
                borderRadius: '20px',
                fontSize: '11px',
                color: '#00d4ff',
                fontWeight: '700',
                fontFamily: "'Space Grotesk', monospace",
                letterSpacing: '0.06em',
                boxShadow: '0 0 12px rgba(0,212,255,0.15)',
              }}>
                {levelName.toUpperCase()}
              </div>
            </Html>
          </group>
        </group>

        {/* ═══════════════════════════════ METRIC GRID ═══════════════════════════════ */}
        <group position={[0, 0.5, 0]}>

          {/* Card 1 — Today's Emissions */}
          <group position={[-1.75, 0.65, 0]} scale={[scale1, scale1, scale1]}>
            <FloatingCard width={1.55} height={1.15} glowColor="#00ff87">
              <Html position={[0, 0, 0.06]} center distanceFactor={4} transform style={{ width: '120px', textAlign: 'center', pointerEvents: 'none' }}>
                <div style={{ fontFamily: "'Space Grotesk', monospace" }}>
                  <div style={{ fontSize: '8px', color: 'rgba(0,255,135,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>TODAY</div>
                  <div style={{ fontSize: '26px', fontWeight: '800', color: '#00ff87', textShadow: '0 0 15px rgba(0,255,135,0.5)', lineHeight: 1, letterSpacing: '-1px' }}>
                    {dailyFootprintCount.toFixed(1)}
                  </div>
                  <div style={{ fontSize: '9px', color: 'rgba(153,176,160,0.6)', letterSpacing: '0.1em', marginTop: '4px' }}>KG CO₂</div>
                </div>
              </Html>
            </FloatingCard>
          </group>

          {/* Card 2 — Total Saved */}
          <group position={[1.75, 0.65, 0]} scale={[scale2, scale2, scale2]}>
            <FloatingCard width={1.55} height={1.15} glowColor="#00d4ff" speed={1.3}>
              <Html position={[0, 0, 0.06]} center distanceFactor={4} transform style={{ width: '120px', textAlign: 'center', pointerEvents: 'none' }}>
                <div style={{ fontFamily: "'Space Grotesk', monospace" }}>
                  <div style={{ fontSize: '8px', color: 'rgba(0,212,255,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>SAVED</div>
                  <div style={{ fontSize: '26px', fontWeight: '800', color: '#00d4ff', textShadow: '0 0 15px rgba(0,212,255,0.5)', lineHeight: 1, letterSpacing: '-1px' }}>
                    {totalSavedCount.toFixed(1)}
                  </div>
                  <div style={{ fontSize: '9px', color: 'rgba(153,176,160,0.6)', letterSpacing: '0.1em', marginTop: '4px' }}>KG TOTAL</div>
                </div>
              </Html>
            </FloatingCard>
          </group>

          {/* Card 3 — Weekly Target */}
          <group position={[-1.75, -0.65, 0]} scale={[scale3, scale3, scale3]}>
            <FloatingCard width={1.55} height={1.15} glowColor="#ffb347" speed={1.7}>
              <Html position={[0, 0, 0.06]} center distanceFactor={4} transform style={{ width: '120px', textAlign: 'center', pointerEvents: 'none' }}>
                <div style={{ fontFamily: "'Space Grotesk', monospace" }}>
                  <div style={{ fontSize: '8px', color: 'rgba(255,179,71,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>TARGET</div>
                  <div style={{ fontSize: '26px', fontWeight: '800', color: '#ffb347', textShadow: '0 0 15px rgba(255,179,71,0.5)', lineHeight: 1, letterSpacing: '-1px' }}>
                    {weeklyLimit}
                  </div>
                  <div style={{ fontSize: '9px', color: 'rgba(153,176,160,0.6)', letterSpacing: '0.1em', marginTop: '4px' }}>KG/WEEK</div>
                </div>
              </Html>
            </FloatingCard>
          </group>

          {/* Card 4 — Streak */}
          <group position={[1.75, -0.65, 0]} scale={[scale4, scale4, scale4]}>
            <FloatingCard width={1.55} height={1.15} glowColor="#ff5e62" speed={2.0}>
              <Html position={[0, 0, 0.06]} center distanceFactor={4} transform style={{ width: '120px', textAlign: 'center', pointerEvents: 'none' }}>
                <div style={{ fontFamily: "'Space Grotesk', monospace" }}>
                  <div style={{ fontSize: '8px', color: 'rgba(255,94,98,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>STREAK</div>
                  <div style={{ fontSize: '26px', fontWeight: '800', color: '#ff5e62', textShadow: '0 0 15px rgba(255,94,98,0.5)', lineHeight: 1, letterSpacing: '-1px' }}>
                    {streakCount}
                  </div>
                  <div style={{ fontSize: '9px', color: 'rgba(153,176,160,0.6)', letterSpacing: '0.1em', marginTop: '4px' }}>🔥 DAYS</div>
                </div>
              </Html>
            </FloatingCard>
          </group>

          {/* Log Activity Button */}
          <group position={[0, -1.55, 0.05]}>
            <Button3D
              width={3.2}
              height={0.38}
              label="+ LOG ACTIVITY"
              color="#00ff87"
              onClick={() => navigate('tracker')}
            />
          </group>
        </group>

        {/* ═══════════════════════════════ WEEKLY CHART ═══════════════════════════════ */}
        <group position={[0, -1.8, -2.5]}>
          <AreaChart3D data={userStats.weeklyFootprint} title="THIS WEEK'S CO₂ PROFILE" />
        </group>

        {/* ═══════════════════════════════ RECENT ACTIVITIES ═══════════════════════════════ */}
        <group position={[0, -4.0, -5.0]}>
          <Html position={[0, 1.0, 0.05]} center distanceFactor={5} transform style={{ pointerEvents: 'none' }}>
            <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              ◆ TODAY'S ACTIVITIES
            </div>
          </Html>

          {/* Activity rows with colored left borders */}
          {[
            { emoji: '🚗', label: 'CAR TRAVEL', value: '+4.2 KG', color: '#3B82F6', positive: true },
            { emoji: '🥗', label: 'VEGAN MEALS', value: '-1.5 KG', color: '#00ff87', positive: false },
            { emoji: '🔌', label: 'HOME ENERGY', value: '+2.8 KG', color: '#ffb347', positive: true },
          ].map((item, i) => (
            <group key={i} position={[0, 0.3 - i * 0.48, 0]}>
              <GlassPanel width={3.4} height={0.38} glowColor={item.color}>
                <Html position={[0, 0, 0.06]} center distanceFactor={5} transform style={{ width: '270px', pointerEvents: 'none' }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    fontFamily: "'Space Grotesk', monospace",
                    padding: '0 8px',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '14px' }}>{item.emoji}</span>
                      <span style={{ fontSize: '11px', fontWeight: '600', color: 'white', letterSpacing: '0.06em' }}>{item.label}</span>
                    </div>
                    <span style={{
                      fontSize: '11px', fontWeight: '700',
                      color: item.positive ? '#ff5e62' : '#00ff87',
                      letterSpacing: '0.04em',
                    }}>{item.value} CO₂</span>
                  </div>
                </Html>
              </GlassPanel>
            </group>
          ))}
        </group>

        {/* ═══════════════════════════════ AI INSIGHT ═══════════════════════════════ */}
        <group position={[0, -6.5, -7.5]}>
          <GlassPanel width={3.8} height={1.4} glowColor="#00ff87">
            <group position={[-1.5, 0, 0.05]}>
              <mesh rotation={[0.3, 0.4, 0]}>
                <icosahedronGeometry args={[0.2, 1]} />
                <meshStandardMaterial color="#00ff87" wireframe emissive="#00ff87" emissiveIntensity={0.8} />
              </mesh>
              <Sparkles count={8} scale={0.8} size={2} speed={0.5} color="#00ff87" position={[0, 0, 0.1]} />
            </group>

            <Html position={[0.2, 0, 0.06]} distanceFactor={5} transform style={{ width: '240px', pointerEvents: 'none' }}>
              <div style={{ fontFamily: "'Space Grotesk', monospace" }}>
                <div style={{ fontSize: '9px', color: '#00ff87', letterSpacing: '0.15em', fontWeight: '700', marginBottom: '6px', textTransform: 'uppercase' }}>
                  🤖 EcoBot AI Tip
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(232,245,238,0.8)', lineHeight: 1.6 }}>
                  Your transport is the top emission contributor. Commuting by bus twice a week reduces your weekly budget by{' '}
                  <span style={{ color: '#00ff87', fontWeight: '700' }}>8.4 kg CO₂</span>!
                </div>
              </div>
            </Html>
          </GlassPanel>

          <Sparkles count={12} scale={2} size={2.5} speed={0.4} color="#00ff87" position={[0, 0, 0.2]} />
        </group>
      </group>
    </group>
  );
}

export default DashboardScene;
