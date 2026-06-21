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
import { getDailyTip } from '../services/geminiService';
import * as THREE from 'three';

function DashboardScrollHandler({ layoutRef }) {
  const scroll = useScroll();
  const elementsRef = useRef({ sec1: null, sec2: null, sec3: null });
  
  useFrame(() => {
    if (layoutRef.current) {
      const offset = scroll.offset;
      layoutRef.current.position.y = offset * 6.5;
      layoutRef.current.position.z = -offset * 8.5;

      // Cache lookup on the fly
      if (!elementsRef.current.sec1) {
        elementsRef.current.sec1 = document.querySelectorAll('.dash-sec1');
        elementsRef.current.sec2 = document.querySelectorAll('.dash-sec2');
        elementsRef.current.sec3 = document.querySelectorAll('.dash-sec3');
      }

      const updateSectionOpacity = (elements, opacity, pointerEventsAuto = false) => {
        if (elements) {
          // Quantize opacity to prevent microscopic layout shifts
          const roundedOpacity = Math.round(opacity * 1000) / 1000;
          const visibilityVal = roundedOpacity > 0 ? 'visible' : 'hidden';
          const pointerVal = (roundedOpacity > 0.15 && pointerEventsAuto) ? 'auto' : 'none';

          for (let i = 0; i < elements.length; i++) {
            const el = elements[i];
            if (el.style.opacity !== roundedOpacity.toString()) {
              el.style.opacity = roundedOpacity.toString();
            }
            if (el.style.visibility !== visibilityVal) {
              el.style.visibility = visibilityVal;
            }
            if (el.style.pointerEvents !== pointerVal) {
              el.style.pointerEvents = pointerVal;
            }
          }
        }
      };

      // Calculate opacities smoothly based on offset
      // sec1: Header & Metric Cards (starts visible, fades out)
      let opacity1 = 0;
      if (offset < 0.15) {
        opacity1 = 1.0;
      } else if (offset < 0.45) {
        opacity1 = 1.0 - (offset - 0.15) / 0.30;
      }

      // sec2: Recent Activities (fades in, stays visible, fades out)
      let opacity2 = 0;
      if (offset >= 0.12 && offset < 0.35) {
        opacity2 = (offset - 0.12) / 0.23;
      } else if (offset >= 0.35 && offset < 0.65) {
        opacity2 = 1.0;
      } else if (offset >= 0.65 && offset < 0.85) {
        opacity2 = 1.0 - (offset - 0.65) / 0.20;
      }

      // sec3: AI Insight tip (fades in near bottom)
      let opacity3 = 0;
      if (offset >= 0.5 && offset < 0.8) {
        opacity3 = (offset - 0.5) / 0.3;
      } else if (offset >= 0.8) {
        opacity3 = 1.0;
      }

      // Apply opacities
      updateSectionOpacity(elementsRef.current.sec1, opacity1, true);
      updateSectionOpacity(elementsRef.current.sec2, opacity2, false);
      updateSectionOpacity(elementsRef.current.sec3, opacity3, false);
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
  const { user, fetchUserStats, subscribeToLogs, userStats, navigate, isLoading, error } = useStore();
  const layoutRef = useRef();

  useEffect(() => {
    if (!user?.uid) return;
    
    // Fetch initial stats
    fetchUserStats(user.uid);
    
    // Subscribe to real-time log updates
    const unsubscribe = subscribeToLogs(user.uid);
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [user?.uid]);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Dynamic AI tip fetched from Gemini
  const [aiTip, setAiTip] = useState('Loading your personalized eco tip...');

  useEffect(() => {
    if (!currentUser || !userProfile) return;
    getDailyTip(userProfile, []).then(res => {
      if (res?.tip) setAiTip(res.tip);
    }).catch(err => console.error("Failed to fetch daily tip:", err));
  }, [currentUser, userProfile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const htmlContainerStyle = {
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    WebkitFontSmoothing: 'antialiased',
  };

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

    const targetSaved = userStats?.totalSaved || 0;
    const targetDaily = userStats?.dailyFootprint || 0;

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

  const streakCount = userStats?.streak || 0;
  const levelName = userStats?.level || 'Seed';
  const weeklyLimit = userStats?.weeklyLimit || 80;

  if (isLoading) return (
    <Html portal={{ current: document.body }}
           center>
      <div className="flex items-center justify-center min-w-[300px]">
        <div style={{ color: '#00ff87', fontSize: '14px', letterSpacing: '0.1em', fontFamily: "'Space Grotesk', monospace" }}>
          LOADING YOUR CARBON DATA...
        </div>
      </div>
    </Html>
  );

  if (error) return (
    <Html portal={{ current: document.body }}
           center>
      <div className="flex items-center justify-center min-w-[300px]">
        <div style={{ color: '#ff5e62', fontSize: '14px', fontFamily: "'Space Grotesk', monospace" }}>
          Error loading data. Please refresh.
        </div>
      </div>
    </Html>
  );

  return (
    <group>
      <DashboardScrollHandler layoutRef={layoutRef} />

      <group ref={layoutRef} rotation={[-0.08, 0, 0]}>

        {/* ═══════════════════════════════ HEADER ═══════════════════════════════ */}
        <group position={[0, isMobile ? 2.3 : 2.0, 0]}>
          {/* Greeting typewriter */}
          <Text
            position={isMobile ? [0, 0.7, 0.05] : isTablet ? [-2.0, 0.18, 0.05] : [-2.8, 0.18, 0.05]}
            fontSize={isMobile ? 0.14 : isTablet ? 0.16 : 0.18}
            color="#ffffff"
            anchorX={isMobile ? "center" : "left"}
            anchorY="middle"
            font={undefined}
          >
            {greeting}
          </Text>

          {/* Subtitle line */}
          <Html portal={{ current: document.body }}
           
            position={isMobile ? [0, 0.45, 0.05] : isTablet ? [-2.0, -0.12, 0.05] : [-2.8, -0.12, 0.05]} 
            center={isMobile}
            distanceFactor={5} 
            transform zIndexRange={[100, 0]}
            style={{ pointerEvents: 'none', width: isMobile ? '280px' : '320px' }}
          >
            <div className="dash-sec1" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", fontSize: '11px', color: 'rgba(153,176,160,0.6)', letterSpacing: '0.06em', textAlign: isMobile ? 'center' : 'left' }}>
              Your carbon dashboard · Live tracking enabled
            </div>
          </Html>

          {/* Streak Badge */}
          <group position={isMobile ? [-0.75, 0.1, 0.05] : isTablet ? [1.0, 0.18, 0.05] : [1.8, 0.18, 0.05]}>
            <Html portal={{ current: document.body }}
           center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: '160px' }}>
              <div className="dash-sec1" style={{
                ...htmlContainerStyle,
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
                margin: '0 auto',
              }}>
                🔥 {streakCount} DAY STREAK
              </div>
            </Html>
          </group>

          {/* Level Badge */}
          <group position={isMobile ? [0.75, 0.1, 0.05] : isTablet ? [2.1, 0.18, 0.05] : [3.0, 0.18, 0.05]}>
            <SpinningGem color="#00d4ff" />
            <Html portal={{ current: document.body }}
           position={[0.22, 0, 0]} distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: '140px' }}>
              <div className="dash-sec1" style={{
                ...htmlContainerStyle,
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
        <group position={[0, isMobile ? 0.8 : 0.5, 0]}>

          {/* Card 1 — Today's Emissions */}
          <group 
            position={isMobile ? [-0.95, -0.7, 0] : isTablet ? [-1.2, 0.65, 0] : [-1.75, 0.65, 0]} 
            scale={isMobile ? [scale1 * 0.85, scale1 * 0.85, scale1 * 0.85] : [scale1, scale1, scale1]}
          >
            <FloatingCard width={1.55} height={1.15} glowColor="#00ff87">
              <Html portal={{ current: document.body }}
           position={[0, 0, 0.06]} center distanceFactor={4} transform zIndexRange={[100, 0]} style={{ width: '120px', textAlign: 'center', pointerEvents: 'none' }}>
                <div className="dash-sec1" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", width: '100%' }}>
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
          <group 
            position={isMobile ? [0.95, -0.7, 0] : isTablet ? [1.2, 0.65, 0] : [1.75, 0.65, 0]} 
            scale={isMobile ? [scale2 * 0.85, scale2 * 0.85, scale2 * 0.85] : [scale2, scale2, scale2]}
          >
            <FloatingCard width={1.55} height={1.15} glowColor="#00d4ff" speed={1.3}>
              <Html portal={{ current: document.body }}
           position={[0, 0, 0.06]} center distanceFactor={4} transform zIndexRange={[100, 0]} style={{ width: '120px', textAlign: 'center', pointerEvents: 'none' }}>
                <div className="dash-sec1" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", width: '100%' }}>
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
          <group 
            position={isMobile ? [-0.95, -1.9, 0] : isTablet ? [-1.2, -0.65, 0] : [-1.75, -0.65, 0]} 
            scale={isMobile ? [scale3 * 0.85, scale3 * 0.85, scale3 * 0.85] : [scale3, scale3, scale3]}
          >
            <FloatingCard width={1.55} height={1.15} glowColor="#ffb347" speed={1.7}>
              <Html portal={{ current: document.body }}
           position={[0, 0, 0.06]} center distanceFactor={4} transform zIndexRange={[100, 0]} style={{ width: '120px', textAlign: 'center', pointerEvents: 'none' }}>
                <div className="dash-sec1" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", width: '100%' }}>
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
          <group 
            position={isMobile ? [0.95, -1.9, 0] : isTablet ? [1.2, -0.65, 0] : [1.75, -0.65, 0]} 
            scale={isMobile ? [scale4 * 0.85, scale4 * 0.85, scale4 * 0.85] : [scale4, scale4, scale4]}
          >
            <FloatingCard width={1.55} height={1.15} glowColor="#ff5e62" speed={2.0}>
              <Html portal={{ current: document.body }}
           position={[0, 0, 0.06]} center distanceFactor={4} transform zIndexRange={[100, 0]} style={{ width: '120px', textAlign: 'center', pointerEvents: 'none' }}>
                <div className="dash-sec1" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", width: '100%' }}>
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
          <group position={[0, isMobile ? -2.7 : -1.55, 0.05]} scale={isMobile ? 0.85 : 1.0}>
            <Html portal={{ current: document.body }} center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none' }}>
              <div aria-label="Log a new carbon activity" style={{ width: 0, height: 0, overflow: 'hidden' }} />
            </Html>
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
          <Html portal={{ current: document.body }}
           position={[0, 1.0, 0.05]} center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: '240px' }}>
            <div className="dash-sec2" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center' }}>
              ◆ TODAY'S ACTIVITIES
            </div>
          </Html>

          {/* Activity rows — mapped from real logged data */}
          {(() => {
            // Lookup tables: map carbonLog category/type → display values
            const EMOJI_MAP = {
              transport: '🚗', car: '🚗', flight: '✈️', bus: '🚌', bike: '🚲',
              food: '🥗', meat: '🍖', vegan: '🥗', vegetarian: '🥗',
              energy: '🔌', electricity: '⚡', heating: '🔥',
              shopping: '🛍️', waste: '♻️',
            };
            const COLOR_MAP = {
              transport: '#3B82F6', car: '#3B82F6', flight: '#818CF8', bus: '#60A5FA', bike: '#00ff87',
              food: '#00ff87', meat: '#f97316', vegan: '#00ff87', vegetarian: '#4ade80',
              energy: '#ffb347', electricity: '#fbbf24', heating: '#fb923c',
              shopping: '#a855f7', waste: '#2dd4bf',
            };

            const getEmoji  = (item) => EMOJI_MAP[item.type] || EMOJI_MAP[item.category] || '🌿';
            const getColor  = (item) => COLOR_MAP[item.type] || COLOR_MAP[item.category] || '#99b0a0';
            const getLabel  = (item) => {
              const raw = item.type || item.category || 'activity';
              return raw.replace(/_/g, ' ').toUpperCase();
            };
            const getValue  = (item) => {
              const kg = item.carbon_kg ?? item.co2 ?? 0;
              const sign = kg < 0 ? '' : '+';
              return `${sign}${Number(kg).toFixed(1)} KG`;
            };
            const isPositive = (item) => (item.carbon_kg ?? item.co2 ?? 0) >= 0;

            const recent = (userStats?.recentActivities || []).slice(0, 3);

            if (recent.length === 0) {
              return (
                <Html portal={{ current: document.body }}
                  position={[0, 0, 0.06]} center distanceFactor={5} transform zIndexRange={[100, 0]}
                  style={{ width: isMobile ? '230px' : '270px', pointerEvents: 'none' }}>
                  <div className="dash-sec2" style={{
                    ...htmlContainerStyle,
                    fontFamily: "'Space Grotesk', monospace",
                    textAlign: 'center',
                    padding: '12px 8px',
                  }}>
                    <div style={{ fontSize: '22px', marginBottom: '6px' }}>🌱</div>
                    <div style={{ fontSize: isMobile ? '9px' : '10px', color: 'rgba(153,176,160,0.7)', letterSpacing: '0.06em', lineHeight: 1.5 }}>
                      No activities logged yet.<br />Head to the Tracker!
                    </div>
                  </div>
                </Html>
              );
            }

            return recent.map((item, i) => (
              <group key={item.id || i} position={[0, 0.3 - i * 0.48, 0]}>
                <GlassPanel width={isMobile ? 3.0 : 3.4} height={0.38} glowColor={getColor(item)}>
                  <Html portal={{ current: document.body }}
                    position={[0, 0, 0.06]} center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ width: isMobile ? '230px' : '270px', pointerEvents: 'none' }}>
                    <div className="dash-sec2" style={{
                      ...htmlContainerStyle,
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      fontFamily: "'Space Grotesk', monospace",
                      padding: '0 4px',
                      width: '100%',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '14px' }}>{getEmoji(item)}</span>
                        <span style={{ fontSize: isMobile ? '9px' : '11px', fontWeight: '600', color: 'white', letterSpacing: '0.06em' }}>{getLabel(item)}</span>
                      </div>
                      <span style={{
                        fontSize: isMobile ? '9px' : '11px', fontWeight: '700',
                        color: isPositive(item) ? '#ff5e62' : '#00ff87',
                        letterSpacing: '0.04em',
                      }}>{getValue(item)} CO₂</span>
                    </div>
                  </Html>
                </GlassPanel>
              </group>
            ));
          })()}
        </group>

        {/* ═══════════════════════════════ AI INSIGHT ═══════════════════════════════ */}
        <group position={[0, -6.5, -7.5]}>
          <GlassPanel width={isMobile ? 3.0 : 3.8} height={1.4} glowColor="#00ff87">
            <group position={isMobile ? [-1.1, 0, 0.05] : [-1.5, 0, 0.05]} scale={isMobile ? 0.75 : 1.0}>
              <mesh rotation={[0.3, 0.4, 0]}>
                <icosahedronGeometry args={[0.2, 1]} />
                <meshStandardMaterial color="#00ff87" wireframe emissive="#00ff87" emissiveIntensity={0.8} />
              </mesh>
              <Sparkles count={8} scale={0.8} size={2} speed={0.5} color="#00ff87" position={[0, 0, 0.1]} />
            </group>

            <Html portal={{ current: document.body }}
           position={isMobile ? [0.35, 0, 0.06] : [0.2, 0, 0.06]} distanceFactor={5} transform zIndexRange={[100, 0]} style={{ width: isMobile ? '170px' : '240px', pointerEvents: 'none' }}>
              <div className="dash-sec3" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", width: '100%' }}>
                <div style={{ fontSize: '9px', color: '#00ff87', letterSpacing: '0.15em', fontWeight: '700', marginBottom: '6px', textTransform: 'uppercase' }}>
                  🤖 EcoBot AI Tip
                </div>
                <div style={{ fontSize: isMobile ? '9.5px' : '11px', color: 'rgba(232,245,238,0.8)', lineHeight: 1.6 }}>
                  {aiTip}
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
