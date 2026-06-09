import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Stars, Text, Sparkles } from '@react-three/drei';
import { useStore } from '../store/useStore';
import EarthGlobe from '../components/EarthGlobe';
import LeafParticle from '../components/LeafParticle';
import Button3D from '../components/Button3D';
import GlassPanel from '../components/GlassPanel';
import FloatingCard from '../components/FloatingCard';
import BarChart3D from '../components/BarChart3D';
import * as THREE from 'three';

function ScrollHandler() {
  const scroll = useScroll();
  
  useFrame((state) => {
    // Fly camera forward on scroll from z=8 to z=-32
    state.camera.position.z = 8 - scroll.offset * 40;
    // Tilted camera effect
    state.camera.position.y = Math.sin(scroll.offset * Math.PI) * 0.4;
  });

  return null;
}

export function LandingScene() {
  const { navigate } = useStore();
  const featuresRef = useRef();

  // Create 20 leaf particles with randomized positions
  const leaves = useMemo(() => {
    const list = [];
    for (let i = 0; i < 20; i++) {
      list.push({
        pos: [(Math.random() - 0.5) * 8, -4 + Math.random() * 8, -1 - Math.random() * 5],
        scale: 0.15 + Math.random() * 0.25,
        speed: 0.5 + Math.random() * 1.0,
      });
    }
    return list;
  }, []);

  useFrame((state, delta) => {
    if (featuresRef.current) {
      // Gently orbit features around center
      featuresRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <group>
      <ScrollHandler />

      {/* Ambient background stars */}
      <Stars radius={60} depth={50} count={3000} factor={4} saturation={0.5} fade speed={1.2} />

      {/* ================= SECTION 1: HERO (z=0) ================= */}
      <group position={[0, 0, 0]}>
        {/* Title */}
        <Text
          position={[-1.8, 0.8, 0]}
          fontSize={0.65}
          color="#ffffff"
          anchorX="left"
          anchorY="middle"
        >
          CarbonSync
        </Text>

        <Text
          position={[-1.8, 0.1, 0]}
          fontSize={0.16}
          color="#00ff87"
          anchorX="left"
          anchorY="middle"
        >
          KNOW YOUR FOOTPRINT. OWN YOUR IMPACT.
        </Text>

        <Text
          position={[-1.8, -0.3, 0]}
          fontSize={0.11}
          color="#b3c6bc"
          maxWidth={2.8}
          anchorX="left"
          anchorY="top"
        >
          A fully immersive 3D dashboard built to calculate, monitor, and gamify your carbon reductions using Gemini AI.
        </Text>

        {/* Action Buttons */}
        <group position={[-1.8, -1.2, 0]}>
          <Button3D
            width={1.2}
            label="GET STARTED →"
            color="#00ff87"
            onClick={() => navigate('auth')}
          />
          <Button3D
            width={1.0}
            position={[1.4, 0, 0]}
            label="SEE DEMO"
            color="#003344"
            textColor="#00d4ff"
            onClick={() => navigate('dashboard')}
          />
        </group>

        {/* Earth Model */}
        <group position={[2.0, 0.2, -1.5]}>
          <EarthGlobe scale={1.2} />
        </group>

        {/* Wind-blown leaf particles */}
        {leaves.map((leaf, idx) => (
          <LeafParticle
            key={idx}
            position={leaf.pos}
            scale={leaf.scale}
            speed={leaf.speed}
          />
        ))}
      </group>

      {/* ================= SECTION 2: STATS (z=-8) ================= */}
      <group position={[0, 0, -8]}>
        <Text
          position={[0, 1.6, 0]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          THE CARBON PROBLEM IN NUMBERS
        </Text>

        {/* Cards container */}
        <group position={[-2.4, 0, 0]}>
          <FloatingCard width={1.8} height={1.8} glowColor="#00ff87">
            <Text position={[0, 0.3, 0.05]} fontSize={0.3} color="#ffffff">
              10 KG
            </Text>
            <Text position={[0, -0.3, 0.05]} fontSize={0.1} color="#99b0a0" maxWidth={1.4} textAlign="center">
              Average personal footprint per day
            </Text>
          </FloatingCard>
        </group>

        <group position={[0, 0, 0]}>
          <FloatingCard width={1.8} height={1.8} glowColor="#00d4ff" speed={1.8}>
            <Text position={[0, 0.3, 0.05]} fontSize={0.3} color="#ffffff">
              40%
            </Text>
            <Text position={[0, -0.3, 0.05]} fontSize={0.1} color="#99b0a0" maxWidth={1.4} textAlign="center">
              Reducible with simple lifestyle choices
            </Text>
          </FloatingCard>
        </group>

        <group position={[2.4, 0, 0]}>
          <FloatingCard width={1.8} height={1.8} glowColor="#ffb347" speed={1.3}>
            <Text position={[0, 0.3, 0.05]} fontSize={0.3} color="#ffffff">
              1.8 T
            </Text>
            <Text position={[0, -0.3, 0.05]} fontSize={0.1} color="#99b0a0" maxWidth={1.4} textAlign="center">
              CO₂ emitted yearly per person in India
            </Text>
          </FloatingCard>
        </group>
      </group>

      {/* ================= SECTION 3: FEATURES (z=-16) ================= */}
      <group position={[0, 0, -16]}>
        <Text
          position={[0, 1.8, 0]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          FEATURES DESIGNED TO CHANGE HABITS
        </Text>

        <group ref={featuresRef} position={[0, -0.2, 0]}>
          {/* Feature Card 1 */}
          <group position={[0, 0, 1.8]}>
            <GlassPanel width={1.8} height={1.5} glowColor="#00ff87">
              <group position={[0, 0.2, 0.05]}>
                <BarChart3D data={[{label: 'T', value: 5, color: '#00ff87'}, {label: 'F', value: 9, color: '#00d4ff'}, {label: 'E', value: 7, color: '#ffb347'}]} title="" scale={0.4} />
              </group>
              <Text position={[0, -0.5, 0.05]} fontSize={0.09} color="#ffffff">
                3D Emissions Profiler
              </Text>
            </GlassPanel>
          </group>

          {/* Feature Card 2 */}
          <group position={[1.5, 0, -1.0]}>
            <GlassPanel width={1.8} height={1.5} glowColor="#00d4ff">
              <group position={[0, 0.25, 0.05]}>
                <mesh castShadow>
                  <icosahedronGeometry args={[0.26, 2]} />
                  <meshStandardMaterial color="#00ff87" wireframe emissive="#00ff87" emissiveIntensity={0.5} />
                </mesh>
              </group>
              <Text position={[0, -0.4, 0.05]} fontSize={0.09} color="#ffffff">
                Gemini AI Advisor
              </Text>
            </GlassPanel>
          </group>

          {/* Feature Card 3 */}
          <group position={[-1.5, 0, -1.0]}>
            <GlassPanel width={1.8} height={1.5} glowColor="#ffb347">
              <group position={[0, 0.25, 0.05]} rotation={[0.4, 0.5, 0]}>
                <mesh>
                  <sphereGeometry args={[0.2, 16, 16]} />
                  <meshBasicMaterial color="#ffb347" wireframe />
                </mesh>
              </group>
              <Text position={[0, -0.4, 0.05]} fontSize={0.09} color="#ffffff">
                Podium & Leaderboard
              </Text>
            </GlassPanel>
          </group>
        </group>
      </group>

      {/* ================= SECTION 4: HOW IT WORKS (z=-24) ================= */}
      <group position={[0, 0, -24]}>
        <Text
          position={[0, 1.8, 0]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          COSMOS SYNC WORKFLOW
        </Text>

        {/* Glowing Path Cylinder segments */}
        <mesh position={[-1.25, 0, -0.05]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 2.5]} />
          <meshBasicMaterial color="#00ff87" transparent opacity={0.6} />
        </mesh>
        <mesh position={[1.25, 0, -0.05]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 2.5]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.6} />
        </mesh>

        {/* Workflow Spheres */}
        <group position={[-2.5, 0, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.35, 32, 32]} />
            <meshStandardMaterial color="#00ff87" roughness={0.1} metalness={0.9} emissive="#00ff87" emissiveIntensity={0.2} />
          </mesh>
          <Text position={[0, 0, 0.36]} fontSize={0.25} color="#020b06" anchorX="center" anchorY="middle">1</Text>
          <Text position={[0, -0.6, 0]} fontSize={0.12} color="#ffffff" anchorX="center">LOG</Text>
          <Text position={[0, -0.85, 0]} fontSize={0.09} color="#99b0a0" maxWidth={1.2} textAlign="center">Input transport, diet, or electricity logs</Text>
        </group>

        <group position={[0, 0, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.35, 32, 32]} />
            <meshStandardMaterial color="#00d4ff" roughness={0.1} metalness={0.9} emissive="#00d4ff" emissiveIntensity={0.2} />
          </mesh>
          <Text position={[0, 0, 0.36]} fontSize={0.25} color="#020b06" anchorX="center" anchorY="middle">2</Text>
          <Text position={[0, -0.6, 0]} fontSize={0.12} color="#ffffff" anchorX="center">ANALYZE</Text>
          <Text position={[0, -0.85, 0]} fontSize={0.09} color="#99b0a0" maxWidth={1.2} textAlign="center">Gemini compiles personalized breakdowns</Text>
        </group>

        <group position={[2.5, 0, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.35, 32, 32]} />
            <meshStandardMaterial color="#ffb347" roughness={0.1} metalness={0.9} emissive="#ffb347" emissiveIntensity={0.2} />
          </mesh>
          <Text position={[0, 0, 0.36]} fontSize={0.25} color="#020b06" anchorX="center" anchorY="middle">3</Text>
          <Text position={[0, -0.6, 0]} fontSize={0.12} color="#ffffff" anchorX="center">REDUCE</Text>
          <Text position={[0, -0.85, 0]} fontSize={0.09} color="#99b0a0" maxWidth={1.2} textAlign="center">Complete daily goals and claim streaks</Text>
        </group>
      </group>

      {/* ================= SECTION 5: CTA (z=-32) ================= */}
      <group position={[0, 0, -32]}>
        <GlassPanel width={4.2} height={2.2} glowColor="#00ff87">
          <Text position={[0, 0.5, 0.05]} fontSize={0.24} color="#ffffff" anchorX="center">
            READY TO JOIN THE COSMOS?
          </Text>
          <Text position={[0, 0.1, 0.05]} fontSize={0.12} color="#b3c6bc" anchorX="center">
            Create an account and initialize your footprint target.
          </Text>
          
          <Button3D
            width={2.0}
            position={[0, -0.5, 0.05]}
            label="CREATE FREE ACCOUNT"
            color="#00ff87"
            onClick={() => navigate('auth')}
          />
        </GlassPanel>
        
        <Sparkles count={30} scale={4} size={3} speed={0.4} color="#00ff87" position={[0, 0, 0.5]} />
      </group>
    </group>
  );
}

export default LandingScene;
