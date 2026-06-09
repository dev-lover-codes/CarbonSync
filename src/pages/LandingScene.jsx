import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Stars, Text, Sparkles, Html } from '@react-three/drei';
import { useStore } from '../store/useStore';
import EarthGlobe from '../components/EarthGlobe';
import LeafParticle from '../components/LeafParticle';
import Button3D from '../components/Button3D';
import GlassPanel from '../components/GlassPanel';
import FloatingCard from '../components/FloatingCard';

// ── Sections are 20 units apart on Z ──────────────────────────────────────────
// Hero:     z =   0
// Stats:    z = -20
// Features: z = -40
// Workflow: z = -60
// CTA:      z = -80
// fog: near=18, far=36  → only one section visible at a time
// ScrollControls pages=8 → camera z moves 0 → -85 across full scroll

function ScrollHandler() {
  const scroll = useScroll();
  useFrame((state) => {
    // Camera starts at z=10 and travels to z=-85
    state.camera.position.z = 10 - scroll.offset * 95;
    state.camera.position.y = Math.sin(scroll.offset * Math.PI) * 0.35;
  });
  return null;
}

// Simple 3-bar chart for features section (no labels, just coloured bars)
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
          <meshStandardMaterial color={b.color} emissive={b.color} emissiveIntensity={0.4} roughness={0.1} metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// 3-sphere workflow visual for features section
function MiniWorkflow() {
  const spheres = [
    { x: -0.7, color: '#00ff87' },
    { x:  0.0, color: '#00d4ff' },
    { x:  0.7, color: '#ffb347' },
  ];
  return (
    <group>
      {/* Connecting lines */}
      <mesh position={[-0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.015, 0.015, 0.7]} />
        <meshBasicMaterial color="#00ff87" transparent opacity={0.5} />
      </mesh>
      <mesh position={[0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.015, 0.015, 0.7]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.5} />
      </mesh>
      {spheres.map((s, i) => (
        <mesh key={i} position={[s.x, 0, 0]}>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.35} roughness={0.1} metalness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

// Spinning icosahedron wireframe for Gemini AI features panel
function SpinningAI() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += 0.5 * delta;
      ref.current.rotation.x += 0.2 * delta;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.45, 2]} />
      <meshStandardMaterial color="#00ff87" wireframe emissive="#00ff87" emissiveIntensity={0.6} />
    </mesh>
  );
}

export function LandingScene() {
  const { navigate } = useStore();

  const leaves = useMemo(() => {
    return Array.from({ length: 18 }, () => ({
      pos: [(Math.random() - 0.5) * 10, -3 + Math.random() * 6, -0.5 - Math.random() * 4],
      scale: 0.14 + Math.random() * 0.22,
      speed: 0.5 + Math.random() * 0.9,
    }));
  }, []);

  return (
    <group>
      <ScrollHandler />

      {/* Fog — isolates one section at a time. Near=18, Far=38 */}
      <fog attach="fog" args={['#020b06', 18, 38]} />

      {/* Background stars */}
      <Stars radius={80} depth={60} count={3500} factor={4} saturation={0.5} fade speed={1.2} />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — HERO (z = 0)
          ══════════════════════════════════════════════════════════════ */}
      <group position={[0, 0, 0]}>
        {/* Brand title — large and dominant */}
        <Text
          position={[-3.5, 1.5, 0]}
          fontSize={1.0}
          color="#ffffff"
          anchorX="left"
          anchorY="middle"
          fontWeight="700"
        >
          CarbonSync
        </Text>

        {/* Tagline */}
        <Text
          position={[-3.5, 0.3, 0]}
          fontSize={0.38}
          color="#00ff87"
          anchorX="left"
          anchorY="middle"
          letterSpacing={0.02}
        >
          KNOW YOUR FOOTPRINT.
        </Text>

        {/* Subtitle paragraph */}
        <Text
          position={[-3.5, -0.5, 0]}
          fontSize={0.17}
          color="#b3c6bc"
          maxWidth={5}
          anchorX="left"
          anchorY="top"
          lineHeight={1.5}
        >
          A fully immersive 3D dashboard built to calculate, monitor, and gamify your carbon reductions using Gemini AI.
        </Text>

        {/* Action Buttons */}
        <group position={[-3.5, -1.55, 0]}>
          <Button3D
            width={1.4}
            label="GET STARTED →"
            color="#00ff87"
            onClick={() => navigate('auth')}
          />
          <Button3D
            width={1.2}
            position={[1.6, 0, 0]}
            label="SEE DEMO"
            color="#003344"
            textColor="#00d4ff"
            onClick={() => navigate('dashboard')}
          />
        </group>

        {/* Earth Globe — right side only */}
        <group position={[4.5, 0, -1]}>
          <EarthGlobe scale={1.4} />
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

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — STATS (z = -20)
          ══════════════════════════════════════════════════════════════ */}
      <group position={[0, 0, -20]}>
        {/* Section heading */}
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.32}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.06}
        >
          THE CARBON PROBLEM IN NUMBERS
        </Text>

        {/* Stat cards — 4 units apart */}
        <group position={[-4, 0, 0]}>
          <FloatingCard width={2.2} height={2.2} glowColor="#00ff87">
            <Text position={[0, 0.4, 0.05]} fontSize={0.6} color="#ffffff" anchorX="center" fontWeight="800">
              10 KG
            </Text>
            <Text position={[0, -0.35, 0.05]} fontSize={0.14} color="#99b0a0" maxWidth={1.8} textAlign="center">
              Average personal footprint per day
            </Text>
          </FloatingCard>
        </group>

        <group position={[0, 0, 0]}>
          <FloatingCard width={2.2} height={2.2} glowColor="#00d4ff" speed={1.8}>
            <Text position={[0, 0.4, 0.05]} fontSize={0.6} color="#ffffff" anchorX="center" fontWeight="800">
              40%
            </Text>
            <Text position={[0, -0.35, 0.05]} fontSize={0.14} color="#99b0a0" maxWidth={1.8} textAlign="center">
              Reducible with simple lifestyle choices
            </Text>
          </FloatingCard>
        </group>

        <group position={[4, 0, 0]}>
          <FloatingCard width={2.2} height={2.2} glowColor="#ffb347" speed={1.3}>
            <Text position={[0, 0.4, 0.05]} fontSize={0.6} color="#ffffff" anchorX="center" fontWeight="800">
              1.8 T
            </Text>
            <Text position={[0, -0.35, 0.05]} fontSize={0.14} color="#99b0a0" maxWidth={1.8} textAlign="center">
              CO₂ emitted yearly per person in India
            </Text>
          </FloatingCard>
        </group>
      </group>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — FEATURES (z = -40)
          ══════════════════════════════════════════════════════════════ */}
      <group position={[0, 0, -40]}>
        {/* Section heading */}
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.32}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.06}
        >
          FEATURES DESIGNED TO CHANGE HABITS
        </Text>

        {/* Panel 1 — 3D Emissions Profiler — x = -5.5 */}
        <group position={[-5.5, 0, 0]}>
          <GlassPanel width={3.2} height={3.8} glowColor="#00ff87">
            {/* Only 3 bar columns — clean, no text inside */}
            <MiniBarChart />
          </GlassPanel>
          {/* Title below panel */}
          <Text
            position={[0, -2.2, 0.06]}
            fontSize={0.16}
            color="#00ff87"
            anchorX="center"
            anchorY="top"
            letterSpacing={0.04}
          >
            3D EMISSIONS PROFILER
          </Text>
        </group>

        {/* Panel 2 — Cosmos Sync Workflow — x = 0 */}
        <group position={[0, 0, 0]}>
          <GlassPanel width={3.2} height={3.8} glowColor="#00d4ff">
            {/* 3 spheres + connecting line — no text inside */}
            <MiniWorkflow />
          </GlassPanel>
          <Text
            position={[0, -2.2, 0.06]}
            fontSize={0.16}
            color="#00d4ff"
            anchorX="center"
            anchorY="top"
            letterSpacing={0.04}
          >
            COSMOS SYNC WORKFLOW
          </Text>
        </group>

        {/* Panel 3 — Gemini AI Advisor — x = 5.5 */}
        <group position={[5.5, 0, 0]}>
          <GlassPanel width={3.2} height={3.8} glowColor="#ffb347">
            {/* Slowly rotating icosahedron — no text inside */}
            <SpinningAI />
          </GlassPanel>
          <Text
            position={[0, -2.2, 0.06]}
            fontSize={0.16}
            color="#ffb347"
            anchorX="center"
            anchorY="top"
            letterSpacing={0.04}
          >
            GEMINI AI ADVISOR
          </Text>
        </group>
      </group>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — WORKFLOW (z = -60)
          ══════════════════════════════════════════════════════════════ */}
      <group position={[0, 0, -60]}>
        {/* Section heading */}
        <Text
          position={[0, 2.8, 0]}
          fontSize={0.32}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.06}
        >
          COSMOS SYNC WORKFLOW
        </Text>

        {/* Connecting lines */}
        <mesh position={[-2.0, 0, -0.05]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.025, 0.025, 4.0]} />
          <meshBasicMaterial color="#00ff87" transparent opacity={0.55} />
        </mesh>
        <mesh position={[2.0, 0, -0.05]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.025, 0.025, 4.0]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.55} />
        </mesh>

        {/* Step 1 — LOG */}
        <group position={[-4, 0, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.42, 32, 32]} />
            <meshStandardMaterial color="#00ff87" roughness={0.1} metalness={0.9} emissive="#00ff87" emissiveIntensity={0.25} />
          </mesh>
          <Text position={[0, 0, 0.43]} fontSize={0.28} color="#020b06" anchorX="center" anchorY="middle">1</Text>
          <Text position={[0, -0.7, 0]} fontSize={0.18} color="#ffffff" anchorX="center" letterSpacing={0.06}>LOG</Text>
          <Text position={[0, -1.05, 0]} fontSize={0.13} color="#99b0a0" maxWidth={1.8} textAlign="center">
            Input transport, diet, or electricity logs
          </Text>
        </group>

        {/* Step 2 — ANALYZE */}
        <group position={[0, 0, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.42, 32, 32]} />
            <meshStandardMaterial color="#00d4ff" roughness={0.1} metalness={0.9} emissive="#00d4ff" emissiveIntensity={0.25} />
          </mesh>
          <Text position={[0, 0, 0.43]} fontSize={0.28} color="#020b06" anchorX="center" anchorY="middle">2</Text>
          <Text position={[0, -0.7, 0]} fontSize={0.18} color="#ffffff" anchorX="center" letterSpacing={0.06}>ANALYZE</Text>
          <Text position={[0, -1.05, 0]} fontSize={0.13} color="#99b0a0" maxWidth={1.8} textAlign="center">
            Gemini compiles personalized breakdowns
          </Text>
        </group>

        {/* Step 3 — REDUCE */}
        <group position={[4, 0, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.42, 32, 32]} />
            <meshStandardMaterial color="#ffb347" roughness={0.1} metalness={0.9} emissive="#ffb347" emissiveIntensity={0.25} />
          </mesh>
          <Text position={[0, 0, 0.43]} fontSize={0.28} color="#020b06" anchorX="center" anchorY="middle">3</Text>
          <Text position={[0, -0.7, 0]} fontSize={0.18} color="#ffffff" anchorX="center" letterSpacing={0.06}>REDUCE</Text>
          <Text position={[0, -1.05, 0]} fontSize={0.13} color="#99b0a0" maxWidth={1.8} textAlign="center">
            Complete daily goals and claim streaks
          </Text>
        </group>
      </group>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — CTA (z = -80)
          ══════════════════════════════════════════════════════════════ */}
      <group position={[0, 0, -80]}>
        <GlassPanel width={5.0} height={3.2} glowColor="#00ff87">
          {/* Html overlay inside the glass panel */}
          <Html
            center
            distanceFactor={5}
            position={[0, 0.4, 0.1]}
            transform
            style={{ width: '360px', pointerEvents: 'none' }}
          >
            <div style={{
              textAlign: 'center',
              fontFamily: "'Space Grotesk', monospace",
              color: 'white',
              pointerEvents: 'none',
            }}>
              <div style={{ color: '#00ff87', fontSize: '11px', letterSpacing: '4px', marginBottom: '8px', fontWeight: '600' }}>
                ◆ READY TO JOIN THE COSMOS? ◆
              </div>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '11px', letterSpacing: '3px', lineHeight: '2' }}>
                <div>Track · Understand · Reduce</div>
                <div style={{ marginTop: '6px' }}>Powered by Gemini AI</div>
              </div>
            </div>
          </Html>

          {/* Main CTA heading as 3D Text */}
          <Text
            position={[0, 0.85, 0.05]}
            fontSize={0.32}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.03}
          >
            READY TO JOIN THE COSMOS?
          </Text>

          <Text
            position={[0, 0.38, 0.05]}
            fontSize={0.16}
            color="#b3c6bc"
            anchorX="center"
          >
            Create an account and initialize your footprint target.
          </Text>

          <Button3D
            width={2.4}
            position={[0, -0.45, 0.05]}
            label="CREATE FREE ACCOUNT →"
            color="#00ff87"
            onClick={() => navigate('auth')}
          />
        </GlassPanel>

        <Sparkles count={35} scale={5} size={3} speed={0.4} color="#00ff87" position={[0, 0, 0.5]} />
      </group>
    </group>
  );
}

export default LandingScene;
