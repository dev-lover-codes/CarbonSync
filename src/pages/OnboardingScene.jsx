import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Stars, Sparkles } from '@react-three/drei';
import { useAuth } from '../contexts/AuthContext';
import { useStore } from '../store/useStore';
import { updateUserProfile } from '../lib/firestore';
import Button3D from '../components/Button3D';
import GlassPanel from '../components/GlassPanel';
import FloatingCard from '../components/FloatingCard';
import ProgressRing3D from '../components/ProgressRing3D';
import * as THREE from 'three';

export function OnboardingScene() {
  const { currentUser } = useAuth();
  const { navigate } = useStore();
  const [step, setStep] = useState(1);
  const hudRef = useRef();

  // Selection states
  const [transport, setTransport] = useState('walk');
  const [diet, setDiet] = useState('vegan');
  const [homeType, setHomeType] = useState('apartment');
  const [energySource, setEnergySource] = useState('solar');
  const [footprintTarget, setFootprintTarget] = useState(80); // weekly kg CO2 target

  // Camera lerping to active step section
  useFrame((state, delta) => {
    let targetX = 0;
    if (step === 1) targetX = 0;
    else if (step === 2) targetX = -12;
    else if (step === 3) targetX = -24;
    else if (step === 4) targetX = -36;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 4.0 * delta);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 0, 4.0 * delta);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 5.5, 4.0 * delta);
  });

  // HUD progress indicator tracking
  useFrame(({ camera }) => {
    if (hudRef.current) {
      hudRef.current.position.copy(camera.position);
      hudRef.current.rotation.copy(camera.rotation);
      hudRef.current.translateZ(-4);
      hudRef.current.translateY(1.35);
    }
  });

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleComplete = async () => {
    if (!currentUser) return;
    try {
      const onboardData = {
        onboardingComplete: true,
        transportPreference: transport,
        dietPreference: diet,
        homeTypePreference: homeType,
        energySourcePreference: energySource,
        weeklyLimit: footprintTarget,
        totalSaved: 0,
        level: 'Seedling',
        streak: 1,
        joinedAt: new Date().toISOString()
      };
      await updateUserProfile(currentUser.uid, onboardData);
      navigate('dashboard');
    } catch (e) {
      console.error('Failed to complete onboarding:', e);
      navigate('dashboard'); // fallback
    }
  };

  // Interactive slider calculation
  const handleSliderClick = (e) => {
    e.stopPropagation();
    // Raycast hit x coordinate mapped between [-1.2, 1.2]
    const localX = e.point.x - (-36.0); // center is at x = -36
    const pct = (localX + 1.2) / 2.4;
    const value = Math.round(20 + Math.max(0, Math.min(1, pct)) * 180);
    setFootprintTarget(value);
  };

  return (
    <group>
      <Stars radius={50} depth={40} count={2000} factor={3} saturation={0.5} fade />

      {/* ================= STEP HUD PROGRESS BAR ================= */}
      <group ref={hudRef}>
        <mesh position={[0, 0, -0.05]}>
          <planeGeometry args={[2.5, 0.015]} />
          <meshBasicMaterial color="#13281b" />
        </mesh>
        <mesh position={[-1.25 + (step - 1) * 0.41, 0, -0.04]}>
          <planeGeometry args={[step * 0.83, 0.018]} />
          <meshBasicMaterial color="#00ff87" />
        </mesh>
        {[1, 2, 3, 4].map((s) => (
          <group key={s} position={[(s - 2.5) * 0.6, 0, 0]}>
            <mesh>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color={step >= s ? '#00ff87' : '#13281b'} />
            </mesh>
          </group>
        ))}
      </group>

      {/* ================= STEP 1: TRANSPORT (x=0) ================= */}
      <group position={[0, 0, 0]}>
        <Text
          position={[0, 1.6, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
        >
          HOW DO YOU GET AROUND?
        </Text>

        <group position={[-2.4, 0.1, 0]}>
          <FloatingCard width={1.4} height={1.7} glowColor={transport === 'car' ? '#00ff87' : 'transparent'} onClick={() => setTransport('car')}>
            <group position={[0, 0.3, 0.05]}>
              <mesh castShadow>
                <boxGeometry args={[0.4, 0.2, 0.3]} />
                <meshStandardMaterial color={transport === 'car' ? '#00ff87' : '#555555'} />
              </mesh>
            </group>
            <Text position={[0, -0.3, 0.05]} fontSize={0.11} color="#ffffff">CAR</Text>
          </FloatingCard>
        </group>

        <group position={[-0.8, 0.1, 0]}>
          <FloatingCard width={1.4} height={1.7} glowColor={transport === 'bus' ? '#00ff87' : 'transparent'} onClick={() => setTransport('bus')} speed={1.3}>
            <group position={[0, 0.3, 0.05]}>
              <mesh castShadow>
                <boxGeometry args={[0.5, 0.25, 0.25]} />
                <meshStandardMaterial color={transport === 'bus' ? '#00ff87' : '#555555'} />
              </mesh>
            </group>
            <Text position={[0, -0.3, 0.05]} fontSize={0.11} color="#ffffff">BUS</Text>
          </FloatingCard>
        </group>

        <group position={[0.8, 0.1, 0]}>
          <FloatingCard width={1.4} height={1.7} glowColor={transport === 'cycle' ? '#00ff87' : 'transparent'} onClick={() => setTransport('cycle')} speed={1.6}>
            <group position={[0, 0.35, 0.05]} rotation={[0, 0, Math.PI / 4]}>
              <mesh castShadow>
                <torusGeometry args={[0.16, 0.02, 8, 32]} />
                <meshStandardMaterial color={transport === 'cycle' ? '#00ff87' : '#555555'} />
              </mesh>
            </group>
            <Text position={[0, -0.3, 0.05]} fontSize={0.11} color="#ffffff">BIKE</Text>
          </FloatingCard>
        </group>

        <group position={[2.4, 0.1, 0]}>
          <FloatingCard width={1.4} height={1.7} glowColor={transport === 'walk' ? '#00ff87' : 'transparent'} onClick={() => setTransport('walk')} speed={1.2}>
            <group position={[0, 0.3, 0.05]}>
              <mesh castShadow>
                <boxGeometry args={[0.18, 0.3, 0.18]} />
                <meshStandardMaterial color={transport === 'walk' ? '#00ff87' : '#555555'} />
              </mesh>
            </group>
            <Text position={[0, -0.3, 0.05]} fontSize={0.11} color="#ffffff">WALK</Text>
          </FloatingCard>
        </group>

        <Button3D width={1.2} position={[0, -1.3, 0]} label="NEXT →" color="#00ff87" onClick={handleNext} />
      </group>

      {/* ================= STEP 2: DIET (x=-12) ================= */}
      <group position={[-12, 0, 0]}>
        <Text
          position={[0, 1.6, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
        >
          CHOOSE YOUR DIET PATTERN
        </Text>

        <group position={[-2.4, 0.1, 0]}>
          <FloatingCard width={1.4} height={1.7} glowColor={diet === 'vegan' ? '#00ff87' : 'transparent'} onClick={() => setDiet('vegan')}>
            <Text position={[0, 0.3, 0.05]} fontSize={0.25}>🌱</Text>
            <Text position={[0, -0.3, 0.05]} fontSize={0.11} color="#ffffff">VEGAN</Text>
          </FloatingCard>
        </group>

        <group position={[-0.8, 0.1, 0]}>
          <FloatingCard width={1.4} height={1.7} glowColor={diet === 'vegetarian' ? '#00ff87' : 'transparent'} onClick={() => setDiet('vegetarian')} speed={1.3}>
            <Text position={[0, 0.3, 0.05]} fontSize={0.25}>🥗</Text>
            <Text position={[0, -0.3, 0.05]} fontSize={0.11} color="#ffffff">VEGETARIAN</Text>
          </FloatingCard>
        </group>

        <group position={[0.8, 0.1, 0]}>
          <FloatingCard width={1.4} height={1.7} glowColor={diet === 'flexitarian' ? '#00ff87' : 'transparent'} onClick={() => setDiet('flexitarian')} speed={1.6}>
            <Text position={[0, 0.3, 0.05]} fontSize={0.25}>🍳</Text>
            <Text position={[0, -0.3, 0.05]} fontSize={0.11} color="#ffffff">FLEXITARIAN</Text>
          </FloatingCard>
        </group>

        <group position={[2.4, 0.1, 0]}>
          <FloatingCard width={1.4} height={1.7} glowColor={diet === 'meat' ? '#00ff87' : 'transparent'} onClick={() => setDiet('meat')} speed={1.2}>
            <Text position={[0, 0.3, 0.05]} fontSize={0.25}>🥩</Text>
            <Text position={[0, -0.3, 0.05]} fontSize={0.11} color="#ffffff">MEAT LOVER</Text>
          </FloatingCard>
        </group>

        <group position={[0, -1.3, 0]}>
          <Button3D width={1.0} position={[-0.7, 0, 0]} label="← BACK" color="#1a2a20" onClick={handleBack} />
          <Button3D width={1.0} position={[0.7, 0, 0]} label="NEXT →" color="#00ff87" onClick={handleNext} />
        </group>
      </group>

      {/* ================= STEP 3: HOME & ENERGY (x=-24) ================= */}
      <group position={[-24, 0, 0]}>
        <Text
          position={[0, 1.6, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
        >
          HOUSE TYPE & ENERGY BASE
        </Text>

        {/* House type selections */}
        <group position={[-1.2, 0.2, 0]}>
          <GlassPanel width={1.8} height={1.4} glowColor={homeType === 'apartment' ? '#00ff87' : 'transparent'} onClick={() => setHomeType('apartment')}>
            <group position={[0, 0.2, 0.05]}>
              <mesh castShadow>
                <boxGeometry args={[0.3, 0.6, 0.3]} />
                <meshStandardMaterial color={homeType === 'apartment' ? '#00ff87' : '#444444'} roughness={0.1} />
              </mesh>
            </group>
            <Text position={[0, -0.35, 0.05]} fontSize={0.11} color="#ffffff">APARTMENT</Text>
          </GlassPanel>
        </group>

        <group position={[1.2, 0.2, 0]}>
          <GlassPanel width={1.8} height={1.4} glowColor={homeType === 'house' ? '#00ff87' : 'transparent'} onClick={() => setHomeType('house')}>
            <group position={[0, 0.2, 0.05]}>
              <mesh castShadow>
                <boxGeometry args={[0.5, 0.4, 0.4]} />
                <meshStandardMaterial color={homeType === 'house' ? '#00ff87' : '#444444'} roughness={0.1} />
              </mesh>
            </group>
            <Text position={[0, -0.35, 0.05]} fontSize={0.11} color="#ffffff">HOUSE</Text>
          </GlassPanel>
        </group>

        {/* Energy source sub selection row */}
        <group position={[0, -0.7, 0.05]}>
          <Button3D width={0.9} position={[-1.1, 0, 0]} height={0.25} label="SOLAR 🌱" color={energySource === 'solar' ? '#00ff87' : 'rgba(255,255,255,0.1)'} fontSize={0.08} onClick={() => setEnergySource('solar')} />
          <Button3D width={0.9} position={[0, 0, 0]} height={0.25} label="GRID ⚡" color={energySource === 'grid' ? '#00ff87' : 'rgba(255,255,255,0.1)'} fontSize={0.08} onClick={() => setEnergySource('grid')} />
          <Button3D width={0.9} position={[1.1, 0, 0]} height={0.25} label="MIXED 🔋" color={energySource === 'mixed' ? '#00ff87' : 'rgba(255,255,255,0.1)'} fontSize={0.08} onClick={() => setEnergySource('mixed')} />
        </group>

        <group position={[0, -1.4, 0]}>
          <Button3D width={1.0} position={[-0.7, 0, 0]} label="← BACK" color="#1a2a20" onClick={handleBack} />
          <Button3D width={1.0} position={[0.7, 0, 0]} label="NEXT →" color="#00ff87" onClick={handleNext} />
        </group>
      </group>

      {/* ================= STEP 4: TARGET LIMIT (x=-36) ================= */}
      <group position={[-36, 0, 0]}>
        <Text
          position={[0, 1.6, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
        >
          ESTABLISH WEEKLY CO₂ GOAL
        </Text>

        <group position={[-1.5, 0.1, 0]}>
          <ProgressRing3D progress={footprintTarget / 200} size={1.1} color="#00ff87" />
        </group>

        {/* Slider Controls Panel */}
        <group position={[1.2, 0.2, 0]}>
          <GlassPanel width={2.4} height={1.3} glowColor="#00d4ff">
            <Text position={[0, 0.4, 0.05]} fontSize={0.12} color="#ffffff">
              BUDGET TARGET
            </Text>
            <Text position={[0, 0.1, 0.05]} fontSize={0.2} color="#00ff87">
              {`${footprintTarget} KG / WK`}
            </Text>

            {/* Slider track */}
            <mesh position={[0, -0.3, 0.05]} onPointerDown={handleSliderClick}>
              <planeGeometry args={[1.8, 0.08]} />
              <meshBasicMaterial color="#13281b" />
            </mesh>
            {/* Draggable indicator ball */}
            <mesh position={[((footprintTarget - 20) / 180) * 1.8 - 0.9, -0.3, 0.06]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#00ff87" emissive="#00ff87" emissiveIntensity={0.8} />
            </mesh>
          </GlassPanel>
        </group>

        <Sparkles count={20} scale={2} size={3} speed={0.4} color="#00ff87" position={[-1.5, 0.1, 0]} />

        <group position={[0, -1.3, 0]}>
          <Button3D width={1.0} position={[-1.1, 0, 0]} label="← BACK" color="#1a2a20" onClick={handleBack} />
          <Button3D width={1.8} position={[0.7, 0, 0]} label="START TRACKING →" color="#00ff87" onClick={handleNext} />
        </group>
      </group>
    </group>
  );
}

export default OnboardingScene;
