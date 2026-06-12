import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Stars, Text, Sparkles, Html } from '@react-three/drei';
import { useStore } from '../store/useStore';
import EarthGlobe from '../components/EarthGlobe';
import LeafParticle from '../components/LeafParticle';
import Button3D from '../components/Button3D';
import GlassPanel from '../components/GlassPanel';
import FloatingCard from '../components/FloatingCard';

function ScrollHandler() {
  const scroll = useScroll();
  const elementsRef = useRef({ sec1: null, sec2: null, sec3: null, sec4: null, sec5: null });

  useFrame((state) => {
    const cameraZ = 10 - scroll.offset * 95;
    state.camera.position.z = cameraZ;
    state.camera.position.y = Math.sin(scroll.offset * Math.PI) * 0.35;

    // Cache lookup on the fly
    if (!elementsRef.current.sec1) {
      elementsRef.current.sec1 = document.querySelectorAll('.landing-sec1');
      elementsRef.current.sec2 = document.querySelectorAll('.landing-sec2');
      elementsRef.current.sec3 = document.querySelectorAll('.landing-sec3');
      elementsRef.current.sec4 = document.querySelectorAll('.landing-sec4');
      elementsRef.current.sec5 = document.querySelectorAll('.landing-sec5');
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

    // Calculate opacities based on physical distance to match WebGL fog
    const getOpacity = (elementZ) => {
      const distance = cameraZ - elementZ;
      if (distance > 38) return 0; // Beyond fog
      if (distance > 18) return Math.max(0, (38 - distance) / 20); // Fade in with fog
      if (distance > 2) return 1; // Fully visible
      if (distance > -2) return Math.max(0, (distance - (-2)) / 4); // Smooth fade out as we pass it
      return 0; // Behind camera
    };

    const opacity1 = getOpacity(0);
    const opacity2 = getOpacity(-20);
    const opacity3 = getOpacity(-40);
    const opacity4 = getOpacity(-60);
    const opacity5 = getOpacity(-80);

    // Apply opacities
    updateSectionOpacity(elementsRef.current.sec1, opacity1, true);
    updateSectionOpacity(elementsRef.current.sec2, opacity2, false);
    updateSectionOpacity(elementsRef.current.sec3, opacity3, false);
    updateSectionOpacity(elementsRef.current.sec4, opacity4, false);
    updateSectionOpacity(elementsRef.current.sec5, opacity5, true);
  });
  return null;
}

function MiniBarChart() {
  const bars = [
    { x: -0.4, height: 0.7, color: '#00ff87' },
    { x:  0.0, height: 1.1, color: '#00d4ff' },
    { x:  0.4, height: 0.85, color: '#ffb347' },
  ];
  return (
    <group position={[0, -0.1, 0]}>
      {bars.map((b, i) => (
        <mesh key={i} position={[b.x, b.height / 2 - 0.6, 0]}>
          <boxGeometry args={[0.22, b.height, 0.22]} />
          <meshStandardMaterial color={b.color} emissive={b.color} emissiveIntensity={0.6} roughness={0.05} metalness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function MiniWorkflow() {
  const spheres = [
    { x: -0.7, color: '#00ff87' },
    { x:  0.0, color: '#00d4ff' },
    { x:  0.7, color: '#ffb347' },
  ];
  return (
    <group>
      <mesh position={[-0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.018, 0.018, 0.7]} />
        <meshBasicMaterial color="#00ff87" transparent opacity={0.6} />
      </mesh>
      <mesh position={[0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.018, 0.018, 0.7]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.6} />
      </mesh>
      {spheres.map((s, i) => (
        <mesh key={i} position={[s.x, 0, 0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.5} roughness={0.05} metalness={0.95} />
        </mesh>
      ))}
    </group>
  );
}

function SpinningAI() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += 0.6 * delta;
      ref.current.rotation.x += 0.25 * delta;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.48, 2]} />
      <meshStandardMaterial color="#00ff87" wireframe emissive="#00ff87" emissiveIntensity={0.8} />
    </mesh>
  );
}

// Animated rotating ring around earth
function OrbitRing() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += 0.3 * delta;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 3, 0, 0]}>
      <torusGeometry args={[1.8, 0.012, 16, 80]} />
      <meshBasicMaterial color="#00d4ff" transparent opacity={0.5} />
    </mesh>
  );
}

function OrbitRing2() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += 0.2 * delta;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 6, 0, 0]}>
      <torusGeometry args={[2.1, 0.008, 16, 80]} />
      <meshBasicMaterial color="#00ff87" transparent opacity={0.3} />
    </mesh>
  );
}

// Orbiting particle dot
function OrbitDot({ radius = 2, speed = 0.5, color = '#00ff87', offset = 0 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed + offset;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius * 0.4;
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

export function LandingScene() {
  const { navigate } = useStore();

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

  const leaves = useMemo(() => {
    return Array.from({ length: 22 }, () => ({
      pos: [(Math.random() - 0.5) * 12, -3 + Math.random() * 7, -0.5 - Math.random() * 5],
      scale: 0.12 + Math.random() * 0.2,
      speed: 0.4 + Math.random() * 0.8,
    }));
  }, []);

  return (
    <group>
      <ScrollHandler />

      {/* Depth fog */}
      <fog attach="fog" args={['#020b06', 18, 38]} />

      {/* Stars */}
      <Stars radius={90} depth={70} count={6000} factor={4.5} saturation={0.7} fade speed={0.8} />

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — HERO (z = 0)
          ══════════════════════════════════════════════════════════ */}
      <group position={[0, 0, 0]}>
        
        {/* ── Glowing backdrop plane ── */}
        <mesh position={[0, 0, -2]}>
          <planeGeometry args={[30, 16]} />
          <meshBasicMaterial color="#020b06" transparent opacity={0.0} />
        </mesh>

        {/* ── HTML Hero Overlay ── */}
        <Html portal={{ current: document.body }}
          position={isMobile ? [0, -1.1, 0] : isTablet ? [-2.0, 0.4, 0] : [-3.2, 0.4, 0]}
          distanceFactor={5}
          transform
          zIndexRange={[100, 0]}
          style={{ width: isMobile ? '320px' : isTablet ? '420px' : '540px', pointerEvents: 'none' }}
        >
          <div 
            className="landing-sec1"
            style={{
              ...htmlContainerStyle,
              fontFamily: "'Inter', 'Space Grotesk', sans-serif",
              color: 'white',
              pointerEvents: 'auto',
              width: '100%',
            }}
          >
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px',
              background: 'linear-gradient(135deg, rgba(0,255,135,0.1), rgba(0,212,255,0.06))',
              border: '1px solid rgba(0,255,135,0.28)',
              borderRadius: '100px',
              fontSize: '10px',
              fontWeight: '700',
              color: '#00ff87',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              fontFamily: "'Space Grotesk', monospace",
              boxShadow: '0 0 20px rgba(0,255,135,0.1), inset 0 1px 0 rgba(0,255,135,0.15)',
            }}>
              <span style={{
                width: '6px', height: '6px', background: '#00ff87',
                borderRadius: '50%', boxShadow: '0 0 10px #00ff87, 0 0 20px rgba(0,255,135,0.5)',
                display: 'inline-block',
                animation: 'pulse 1.8s ease-in-out infinite',
              }} />
              <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
              Powered by Gemini AI · Hack2skill PromptWars
            </div>

            {/* Main Heading */}
            <h1 style={{
              fontSize: isMobile ? '36px' : isTablet ? '46px' : '58px',
              fontWeight: '900',
              lineHeight: '1.05',
              letterSpacing: '-0.035em',
              marginBottom: '22px',
              fontFamily: "'Syne', 'Inter', sans-serif",
            }}>
              <span style={{
                display: 'block',
                color: 'rgba(255,255,255,0.95)',
              }}>
                Know Your
              </span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #00ff87 0%, #00d4ff 55%, #00ffd1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(0,255,135,0.35))',
              }}>
                Carbon Footprint.
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '15px',
              color: 'rgba(232, 245, 238, 0.6)',
              lineHeight: '1.75',
              maxWidth: '430px',
              marginBottom: '36px',
              fontWeight: '400',
              letterSpacing: '0.01em',
            }}>
              An immersive 3D platform that tracks, analyzes, and gamifies your carbon reductions using real-time AI insights. Join the movement.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={() => navigate('auth')}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '15px 32px',
                  background: 'linear-gradient(135deg, #00ff87 0%, #00c46b 100%)',
                  color: '#020b06',
                  fontWeight: '800',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  fontFamily: "'Space Grotesk', monospace",
                  border: 'none',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 0 35px rgba(0,255,135,0.4), 0 4px 24px rgba(0,0,0,0.35)',
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  textTransform: 'uppercase',
                  pointerEvents: 'auto',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 0 55px rgba(0,255,135,0.65), 0 8px 35px rgba(0,0,0,0.45)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 35px rgba(0,255,135,0.4), 0 4px 24px rgba(0,0,0,0.35)';
                }}
              >
                ⚡ Get Started — Free
              </button>
              <button
                onClick={() => navigate('dashboard')}
                style={{
                  padding: '15px 28px',
                  background: 'rgba(0,212,255,0.07)',
                  color: '#00d4ff',
                  fontWeight: '600',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  fontFamily: "'Space Grotesk', monospace",
                  border: '1px solid rgba(0,212,255,0.3)',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(0,212,255,0.08)',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(10px)',
                  pointerEvents: 'auto',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0,212,255,0.14)';
                  e.currentTarget.style.borderColor = 'rgba(0,212,255,0.55)';
                  e.currentTarget.style.boxShadow = '0 0 35px rgba(0,212,255,0.25), inset 0 0 20px rgba(0,212,255,0.04)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(0,212,255,0.07)';
                  e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                View Demo →
              </button>
            </div>

            {/* Social proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '32px' }}>
              <div style={{ display: 'flex' }}>
                {['#00ff87','#00d4ff','#ffb347','#ff5e62', '#8b5cf6'].map((c, i) => (
                  <div key={i} style={{
                    width: '30px', height: '30px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${c}44, ${c}18)`,
                    border: `2px solid ${c}`,
                    marginLeft: i > 0 ? '-9px' : '0',
                    boxShadow: `0 0 12px ${c}44`,
                    backdropFilter: 'blur(4px)',
                  }} />
                ))}
              </div>
              <div style={{
                display: 'flex', flexDirection: 'column', gap: '2px',
              }}>
                <div style={{
                  fontSize: '13px', fontWeight: '700',
                  color: '#00ff87',
                  textShadow: '0 0 10px rgba(0,255,135,0.4)',
                  fontFamily: "'Space Grotesk', monospace",
                }}>
                  2,300+ eco-warriors
                </div>
                <div style={{
                  fontSize: '10px',
                  color: 'rgba(153, 176, 160, 0.65)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: "'Space Grotesk', monospace",
                }}>
                  already tracking
                </div>
              </div>
              
              {/* Verified badge */}
              <div style={{
                marginLeft: '8px',
                padding: '4px 10px',
                background: 'rgba(0,255,135,0.07)',
                border: '1px solid rgba(0,255,135,0.2)',
                borderRadius: '8px',
                fontSize: '9px',
                fontWeight: '700',
                color: '#00ff87',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: "'Space Grotesk', monospace",
              }}>
                ✓ Verified
              </div>
            </div>
          </div>
        </Html>

        {/* Earth Globe — right side with orbit rings */}
        <group 
          position={isMobile ? [0, 1.7, -1.5] : isTablet ? [2.2, 0.5, -1] : [4.2, 0, -1]}
          scale={isMobile ? 0.75 : isTablet ? 1.05 : 1.2}
        >
          <EarthGlobe scale={1.5} />
          <OrbitRing />
          <OrbitRing2 />
          <OrbitDot radius={2.2} speed={0.4} color="#00ff87" offset={0} />
          <OrbitDot radius={2.2} speed={0.4} color="#00d4ff" offset={Math.PI} />
          <OrbitDot radius={2.5} speed={0.25} color="#ffb347" offset={Math.PI / 2} />
          <Sparkles count={30} scale={4} size={2.5} speed={0.4} color="#00ff87" />
        </group>

        {/* Leaf particles */}
        {leaves.map((leaf, idx) => (
          <LeafParticle
            key={idx}
            position={leaf.pos}
            scale={leaf.scale}
            speed={leaf.speed}
          />
        ))}
      </group>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — STATS (z = -20)
          ══════════════════════════════════════════════════════════ */}
      <group position={[0, 0, -20]}>
        <Html portal={{ current: document.body }}
          position={[0, isMobile ? 3.3 : 3.0, 0]} center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: isMobile ? '320px' : '500px' }}>
          <div className="landing-sec2" style={{ ...htmlContainerStyle, textAlign: 'center', fontFamily: "'Space Grotesk', monospace" }}>
            <div style={{
              fontSize: '10px',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}>
              ◆ THE CARBON CRISIS IN NUMBERS ◆
            </div>
            <div style={{
              fontSize: '22px',
              fontWeight: '800',
              color: 'white',
              letterSpacing: '-0.02em',
              fontFamily: "'Syne', 'Inter', sans-serif",
            }}>
              Why It Matters
            </div>
          </div>
        </Html>

        <group 
          position={isMobile ? [0, 1.8, 0] : isTablet ? [-2.8, 0, 0] : [-4, 0, 0]}
          scale={isMobile ? 0.72 : isTablet ? 0.9 : 1.0}
        >
          <FloatingCard width={2.5} height={2.6} glowColor="#00ff87">
            <Html portal={{ current: document.body }}
          position={[0, 0, 0.05]} center distanceFactor={3} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: '190px', textAlign: 'center' }}>
              <div className="landing-sec2" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", color: 'white', width: '100%' }}>
                <div style={{
                  fontSize: '48px', fontWeight: '800',
                  color: '#00ff87',
                  textShadow: '0 0 25px rgba(0,255,135,0.6)',
                  lineHeight: 1, letterSpacing: '-2px',
                  fontFamily: "'Syne', sans-serif",
                }}>10kg</div>
                <div style={{
                  width: '40px', height: '2px',
                  background: 'linear-gradient(90deg, transparent, #00ff87, transparent)',
                  margin: '10px auto',
                  borderRadius: '2px',
                }} />
                <div style={{ fontSize: '10px', color: 'rgba(153,176,160,0.8)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>Avg Daily Footprint</div>
              </div>
            </Html>
          </FloatingCard>
        </group>

        <group 
          position={isMobile ? [0, 0, 0] : isTablet ? [0, 0, 0] : [0, 0, 0]}
          scale={isMobile ? 0.72 : isTablet ? 0.9 : 1.0}
        >
          <FloatingCard width={2.5} height={2.6} glowColor="#00d4ff" speed={1.8}>
            <Html portal={{ current: document.body }}
          position={[0, 0, 0.05]} center distanceFactor={3} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: '190px', textAlign: 'center' }}>
              <div className="landing-sec2" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", color: 'white', width: '100%' }}>
                <div style={{
                  fontSize: '48px', fontWeight: '800',
                  color: '#00d4ff',
                  textShadow: '0 0 25px rgba(0,212,255,0.6)',
                  lineHeight: 1, letterSpacing: '-2px',
                  fontFamily: "'Syne', sans-serif",
                }}>40%</div>
                <div style={{
                  width: '40px', height: '2px',
                  background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
                  margin: '10px auto',
                  borderRadius: '2px',
                }} />
                <div style={{ fontSize: '10px', color: 'rgba(153,176,160,0.8)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>Reducible with Simple Changes</div>
              </div>
            </Html>
          </FloatingCard>
        </group>

        <group 
          position={isMobile ? [0, -1.8, 0] : isTablet ? [2.8, 0, 0] : [4, 0, 0]}
          scale={isMobile ? 0.72 : isTablet ? 0.9 : 1.0}
        >
          <FloatingCard width={2.5} height={2.6} glowColor="#ffb347" speed={1.3}>
            <Html portal={{ current: document.body }}
          position={[0, 0, 0.05]} center distanceFactor={3} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: '190px', textAlign: 'center' }}>
              <div className="landing-sec2" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", color: 'white', width: '100%' }}>
                <div style={{
                  fontSize: '48px', fontWeight: '800',
                  color: '#ffb347',
                  textShadow: '0 0 25px rgba(255,179,71,0.6)',
                  lineHeight: 1, letterSpacing: '-2px',
                  fontFamily: "'Syne', sans-serif",
                }}>1.8T</div>
                <div style={{
                  width: '40px', height: '2px',
                  background: 'linear-gradient(90deg, transparent, #ffb347, transparent)',
                  margin: '10px auto',
                  borderRadius: '2px',
                }} />
                <div style={{ fontSize: '10px', color: 'rgba(153,176,160,0.8)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>Tons CO₂ Per Person / Year</div>
              </div>
            </Html>
          </FloatingCard>
        </group>
      </group>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — FEATURES (z = -40)
          ══════════════════════════════════════════════════════════ */}
      <group position={[0, 0, -40]}>
        <Html portal={{ current: document.body }}
          position={[0, isMobile ? 3.3 : 2.8, 0]} center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: isMobile ? '320px' : '500px' }}>
          <div className="landing-sec3" style={{ ...htmlContainerStyle, textAlign: 'center', fontFamily: "'Space Grotesk', monospace" }}>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '10px' }}>◆ CORE FEATURES ◆</div>
            <div style={{
              fontSize: '26px', fontWeight: '800', color: 'white', letterSpacing: '-0.02em',
              fontFamily: "'Syne', 'Inter', sans-serif",
            }}>
              Designed to Change Habits
            </div>
          </div>
        </Html>

        {/* Panel 1 */}
        <group 
          position={isMobile ? [0, 2.2, 0] : isTablet ? [-3.8, 0, 0] : [-5.5, 0, 0]}
          scale={isMobile ? 0.75 : isTablet ? 0.9 : 1.0}
        >
          <GlassPanel width={3.2} height={3.8} glowColor="#00ff87">
            <MiniBarChart />
          </GlassPanel>
          <Html portal={{ current: document.body }}
          position={[0, -2.4, 0.06]} center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: '260px', textAlign: 'center' }}>
            <div className="landing-sec3" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace" }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#00ff87', letterSpacing: '0.1em', textTransform: 'uppercase' }}>3D Emissions Profiler</div>
              <div style={{ fontSize: '10px', color: 'rgba(153,176,160,0.65)', marginTop: '6px', letterSpacing: '0.04em', lineHeight: 1.5 }}>Real-time carbon breakdown across all activities</div>
            </div>
          </Html>
        </group>

        {/* Panel 2 */}
        <group 
          position={[0, 0, 0]}
          scale={isMobile ? 0.75 : isTablet ? 0.9 : 1.0}
        >
          <GlassPanel width={3.2} height={3.8} glowColor="#00d4ff">
            <MiniWorkflow />
          </GlassPanel>
          <Html portal={{ current: document.body }}
          position={[0, -2.4, 0.06]} center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: '260px', textAlign: 'center' }}>
            <div className="landing-sec3" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace" }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#00d4ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Smart Sync Workflow</div>
              <div style={{ fontSize: '10px', color: 'rgba(153,176,160,0.65)', marginTop: '6px', letterSpacing: '0.04em', lineHeight: 1.5 }}>Log, analyze, and reduce — seamlessly connected</div>
            </div>
          </Html>
        </group>

        {/* Panel 3 */}
        <group 
          position={isMobile ? [0, -2.2, 0] : isTablet ? [3.8, 0, 0] : [5.5, 0, 0]}
          scale={isMobile ? 0.75 : isTablet ? 0.9 : 1.0}
        >
          <GlassPanel width={3.2} height={3.8} glowColor="#ffb347">
            <SpinningAI />
          </GlassPanel>
          <Html portal={{ current: document.body }}
          position={[0, -2.4, 0.06]} center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: '260px', textAlign: 'center' }}>
            <div className="landing-sec3" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace" }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#ffb347', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Gemini AI Advisor</div>
              <div style={{ fontSize: '10px', color: 'rgba(153,176,160,0.65)', marginTop: '6px', letterSpacing: '0.04em', lineHeight: 1.5 }}>Personalized eco-coaching powered by Google AI</div>
            </div>
          </Html>
        </group>
      </group>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — HOW IT WORKS (z = -60)
          ══════════════════════════════════════════════════════════ */}
      <group position={[0, 0, -60]}>
        <Html portal={{ current: document.body }}
          position={[0, isMobile ? 3.3 : 3.0, 0]} center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: isMobile ? '320px' : '500px' }}>
          <div className="landing-sec4" style={{ ...htmlContainerStyle, textAlign: 'center', fontFamily: "'Space Grotesk', monospace" }}>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '10px' }}>◆ HOW IT WORKS ◆</div>
            <div style={{
              fontSize: '26px', fontWeight: '800', color: 'white', letterSpacing: '-0.02em',
              fontFamily: "'Syne', 'Inter', sans-serif",
            }}>
              Three Steps to Impact
            </div>
          </div>
        </Html>

        {/* Connectors */}
        <mesh 
          position={isMobile ? [0, 0.95, -0.05] : isTablet ? [-1.4, 0, -0.05] : [-2.0, 0, -0.05]} 
          rotation={isMobile ? [0, 0, 0] : [0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.018, 0.018, isMobile ? 1.9 : isTablet ? 2.8 : 4.0]} />
          <meshBasicMaterial color="#00ff87" transparent opacity={0.35} />
        </mesh>
        <mesh 
          position={isMobile ? [0, -0.95, -0.05] : isTablet ? [1.4, 0, -0.05] : [2.0, 0, -0.05]} 
          rotation={isMobile ? [0, 0, 0] : [0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.018, 0.018, isMobile ? 1.9 : isTablet ? 2.8 : 4.0]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.35} />
        </mesh>

        {/* Step 1 */}
        <group 
          position={isMobile ? [0, 1.9, 0] : isTablet ? [-2.8, 0, 0] : [-4, 0, 0]}
          scale={isMobile ? 0.85 : isTablet ? 0.95 : 1.0}
        >
          <mesh castShadow>
            <sphereGeometry args={[0.52, 32, 32]} />
            <meshStandardMaterial color="#00ff87" roughness={0.05} metalness={0.95} emissive="#00ff87" emissiveIntensity={0.35} />
          </mesh>
          <Sparkles count={8} scale={1.5} size={2} speed={0.3} color="#00ff87" />
          <Html portal={{ current: document.body }}
          position={[0, -1.1, 0]} center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: '220px', textAlign: 'center' }}>
            <div className="landing-sec4" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", width: '100%' }}>
              <div style={{
                display: 'inline-block',
                padding: '2px 10px',
                background: 'rgba(0,255,135,0.1)',
                border: '1px solid rgba(0,255,135,0.3)',
                borderRadius: '6px',
                fontSize: '9px',
                fontWeight: '700',
                color: '#00ff87',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}>Step 01</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '6px', fontFamily: "'Syne', sans-serif" }}>Log</div>
              <div style={{ fontSize: '11px', color: 'rgba(153,176,160,0.65)', lineHeight: 1.6 }}>Input transport, diet, and electricity data</div>
            </div>
          </Html>
        </group>

        {/* Step 2 */}
        <group 
          position={[0, 0, 0]}
          scale={isMobile ? 0.85 : isTablet ? 0.95 : 1.0}
        >
          <mesh castShadow>
            <sphereGeometry args={[0.52, 32, 32]} />
            <meshStandardMaterial color="#00d4ff" roughness={0.05} metalness={0.95} emissive="#00d4ff" emissiveIntensity={0.35} />
          </mesh>
          <Sparkles count={8} scale={1.5} size={2} speed={0.3} color="#00d4ff" />
          <Html portal={{ current: document.body }}
          position={[0, -1.1, 0]} center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: '220px', textAlign: 'center' }}>
            <div className="landing-sec4" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", width: '100%' }}>
              <div style={{
                display: 'inline-block',
                padding: '2px 10px',
                background: 'rgba(0,212,255,0.1)',
                border: '1px solid rgba(0,212,255,0.3)',
                borderRadius: '6px',
                fontSize: '9px',
                fontWeight: '700',
                color: '#00d4ff',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}>Step 02</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '6px', fontFamily: "'Syne', sans-serif" }}>Analyze</div>
              <div style={{ fontSize: '11px', color: 'rgba(153,176,160,0.65)', lineHeight: 1.6 }}>Gemini AI compiles your personalized breakdown</div>
            </div>
          </Html>
        </group>

        {/* Step 3 */}
        <group 
          position={isMobile ? [0, -1.9, 0] : isTablet ? [2.8, 0, 0] : [4, 0, 0]}
          scale={isMobile ? 0.85 : isTablet ? 0.95 : 1.0}
        >
          <mesh castShadow>
            <sphereGeometry args={[0.52, 32, 32]} />
            <meshStandardMaterial color="#ffb347" roughness={0.05} metalness={0.95} emissive="#ffb347" emissiveIntensity={0.35} />
          </mesh>
          <Sparkles count={8} scale={1.5} size={2} speed={0.3} color="#ffb347" />
          <Html portal={{ current: document.body }}
          position={[0, -1.1, 0]} center distanceFactor={5} transform zIndexRange={[100, 0]} style={{ pointerEvents: 'none', width: '220px', textAlign: 'center' }}>
            <div className="landing-sec4" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", width: '100%' }}>
              <div style={{
                display: 'inline-block',
                padding: '2px 10px',
                background: 'rgba(255,179,71,0.1)',
                border: '1px solid rgba(255,179,71,0.3)',
                borderRadius: '6px',
                fontSize: '9px',
                fontWeight: '700',
                color: '#ffb347',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}>Step 03</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '6px', fontFamily: "'Syne', sans-serif" }}>Reduce</div>
              <div style={{ fontSize: '11px', color: 'rgba(153,176,160,0.65)', lineHeight: 1.6 }}>Claim goals, earn streaks, watch your score rise</div>
            </div>
          </Html>
        </group>
      </group>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5 — CTA (z = -80)
          ══════════════════════════════════════════════════════════ */}
      <group position={[0, 0, -80]}>
        <GlassPanel width={isMobile ? 3.4 : isTablet ? 5.2 : 6.5} height={isMobile ? 4.8 : isTablet ? 4.2 : 4.0} glowColor="#00ff87">
          <Html portal={{ current: document.body }}
          center distanceFactor={5} position={[0, 0, 0.1]} transform zIndexRange={[100, 0]} style={{ width: isMobile ? '280px' : isTablet ? '420px' : '520px', pointerEvents: 'none', textAlign: 'center' }}>
            <div className="landing-sec5" style={{ ...htmlContainerStyle, fontFamily: "'Space Grotesk', monospace", color: 'white', padding: '10px 0', width: '100%' }}>
              {/* Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '5px 14px',
                background: 'rgba(0,255,135,0.1)',
                border: '1px solid rgba(0,255,135,0.28)',
                borderRadius: '100px',
                fontSize: '10px', letterSpacing: '0.15em',
                color: '#00ff87', textTransform: 'uppercase', marginBottom: '20px', fontWeight: '700',
              }}>
                <span style={{ width: '5px', height: '5px', background: '#00ff87', borderRadius: '50%', boxShadow: '0 0 8px #00ff87' }} />
                Start for free — No credit card
              </div>

              {/* Title */}
              <div style={{
                fontSize: isMobile ? '22px' : '32px', fontWeight: '900',
                marginBottom: '14px', letterSpacing: '-0.025em', lineHeight: 1.15,
                fontFamily: "'Syne', 'Inter', sans-serif",
              }}>
                Ready to Own Your
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #00ff87, #00d4ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Carbon Impact?
                </span>
              </div>

              <div style={{
                fontSize: '13px', color: 'rgba(153,176,160,0.7)',
                marginBottom: isMobile ? '18px' : '30px', lineHeight: '1.65', maxWidth: '380px', margin: '0 auto 20px',
              }}>
                Join thousands tracking their footprint. Build a sustainable future one log at a time.
              </div>

              {/* Stats row */}
              <div style={{
                display: 'flex', justifyContent: 'center', gap: isMobile ? '16px' : '28px',
                marginBottom: '28px',
              }}>
                {[
                  { num: '2.3K+', label: 'Users' },
                  { num: '12T', label: 'CO₂ Saved' },
                  { num: '98%', label: 'Satisfaction' },
                ].map(({ num, label }) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: isMobile ? '16px' : '20px', fontWeight: '800',
                      color: '#00ff87',
                      textShadow: '0 0 12px rgba(0,255,135,0.4)',
                      fontFamily: "'Syne', sans-serif",
                    }}>{num}</div>
                    <div style={{
                      fontSize: '9px',
                      color: 'rgba(153,176,160,0.6)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => navigate('auth')}
                style={{
                  padding: isMobile ? '12px 24px' : '16px 42px',
                  background: 'linear-gradient(135deg, #00ff87 0%, #00c46b 100%)',
                  color: '#020b06',
                  fontWeight: '800',
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  border: 'none',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 0 40px rgba(0,255,135,0.45), 0 4px 24px rgba(0,0,0,0.35)',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  pointerEvents: 'auto',
                }}
                onMouseEnter={e => {
                  e.target.style.transform = 'translateY(-3px) scale(1.03)';
                  e.target.style.boxShadow = '0 0 65px rgba(0,255,135,0.7), 0 8px 35px rgba(0,0,0,0.45)';
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 0 40px rgba(0,255,135,0.45), 0 4px 24px rgba(0,0,0,0.35)';
                }}
              >
                ⚡ Create Free Account →
              </button>
            </div>
          </Html>
        </GlassPanel>

        <Sparkles count={55} scale={7} size={3.5} speed={0.3} color="#00ff87" position={[0, 0, 0.5]} />
        <Sparkles count={25} scale={5} size={2} speed={0.5} color="#00d4ff" position={[0, 0, 0.5]} />
      </group>
    </group>
  );
}

export default LandingScene;
