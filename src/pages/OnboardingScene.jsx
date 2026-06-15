import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Stars, Sparkles, Html } from '@react-three/drei';
import { Car, Bus, Bike, Footprints, Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useStore } from '../store/useStore';
// Removed direct firestore update profile import
import Button3D from '../components/Button3D';
import GlassPanel from '../components/GlassPanel';
import FloatingCard from '../components/FloatingCard';
import ProgressRing3D from '../components/ProgressRing3D';
import * as THREE from 'three';

export function OnboardingScene() {
  const { currentUser, updateProfile } = useAuth();
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
      await updateProfile(onboardData);
      navigate('dashboard');
    } catch (e) {
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
        <Html center transform distanceFactor={1.5} position={[0, 0, 0]}>
          <div className="flex items-center justify-between w-[400px] max-w-md mx-auto mb-8 pointer-events-none">
            {[0, 1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <div className={`w-4 h-4 rounded-full flex-shrink-0 transition-all duration-300 ${
                  i < step - 1
                    ? 'bg-primary-light shadow-[0_0_10px_rgba(82,183,136,0.8)]'
                    : i === step - 1
                    ? 'bg-primary-light shadow-[0_0_10px_rgba(82,183,136,0.8)] ring-2 ring-primary-light/30'
                    : 'bg-white/20'
                }`} />
                {i < 3 && (
                  <div className={`flex-1 h-0.5 mx-1 rounded-full transition-all duration-500 ${
                    i < step - 1 ? 'bg-primary-light' : 'bg-white/10'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </Html>
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
          <Html center transform distanceFactor={1.2}>
            <div 
              onClick={() => setTransport('car')}
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center w-36 h-48 p-6 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:bg-white/10 hover:border-white/20 gap-3 ${transport === 'car' ? 'border-primary-light bg-white/10 shadow-[0_0_20px_rgba(82,183,136,0.2)]' : ''}`}
            >
              <Car className="w-14 h-14 text-primary-light drop-shadow-[0_0_12px_rgba(82,183,136,0.6)]" />
              <span className="text-white font-bold text-xs tracking-wider">CAR</span>
              {transport === 'car' && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary-light flex items-center justify-center">
                  <Check className="w-3 h-3 text-black" />
                </div>
              )}
            </div>
          </Html>
        </group>

        <group position={[-0.8, 0.1, 0]}>
          <Html center transform distanceFactor={1.2}>
            <div 
              onClick={() => setTransport('bus')}
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center w-36 h-48 p-6 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:bg-white/10 hover:border-white/20 gap-3 ${transport === 'bus' ? 'border-primary-light bg-white/10 shadow-[0_0_20px_rgba(82,183,136,0.2)]' : ''}`}
            >
              <Bus className="w-14 h-14 text-primary-light drop-shadow-[0_0_12px_rgba(82,183,136,0.6)]" />
              <span className="text-white font-bold text-xs tracking-wider">BUS</span>
              {transport === 'bus' && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary-light flex items-center justify-center">
                  <Check className="w-3 h-3 text-black" />
                </div>
              )}
            </div>
          </Html>
        </group>

        <group position={[0.8, 0.1, 0]}>
          <Html center transform distanceFactor={1.2}>
            <div 
              onClick={() => setTransport('cycle')}
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center w-36 h-48 p-6 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:bg-white/10 hover:border-white/20 gap-3 ${transport === 'cycle' ? 'border-primary-light bg-white/10 shadow-[0_0_20px_rgba(82,183,136,0.2)]' : ''}`}
            >
              <Bike className="w-14 h-14 text-primary-light drop-shadow-[0_0_12px_rgba(82,183,136,0.6)]" />
              <span className="text-white font-bold text-xs tracking-wider">BIKE</span>
              {transport === 'cycle' && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary-light flex items-center justify-center">
                  <Check className="w-3 h-3 text-black" />
                </div>
              )}
            </div>
          </Html>
        </group>

        <group position={[2.4, 0.1, 0]}>
          <Html center transform distanceFactor={1.2}>
            <div 
              onClick={() => setTransport('walk')}
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center w-36 h-48 p-6 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:bg-white/10 hover:border-white/20 gap-3 ${transport === 'walk' ? 'border-primary-light bg-white/10 shadow-[0_0_20px_rgba(82,183,136,0.2)]' : ''}`}
            >
              <Footprints className="w-14 h-14 text-primary-light drop-shadow-[0_0_12px_rgba(82,183,136,0.6)]" />
              <span className="text-white font-bold text-xs tracking-wider">WALK</span>
              {transport === 'walk' && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary-light flex items-center justify-center">
                  <Check className="w-3 h-3 text-black" />
                </div>
              )}
            </div>
          </Html>
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
        <Html center transform distanceFactor={1.2}>
          <div className="flex flex-col items-center gap-12 w-[800px]">
            <h2 className="text-3xl font-bold text-white tracking-[0.2em] text-center mb-4">
              ESTABLISH WEEKLY CO<sub className="text-[0.6em] align-sub">2</sub> GOAL
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center w-full max-w-4xl mx-auto">
              {/* Gauge Column */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-black text-primary-light drop-shadow-[0_0_15px_rgba(82,183,136,0.5)]">
                    {Math.round((footprintTarget / 200) * 100)}%
                  </span>
                </div>
                <svg className="w-full h-full -rotate-90 transform">
                  <circle
                    cx="128"
                    cy="128"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    className="text-white/5"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={628}
                    strokeDashoffset={628 - (628 * (footprintTarget / 200))}
                    className="text-primary-light transition-all duration-500 ease-out"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Slider Column */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 w-full shadow-2xl">
                <div className="text-center mb-10">
                  <p className="text-xs text-white/40 tracking-[0.3em] uppercase mb-2">Weekly Budget</p>
                  <p className="text-4xl font-bold text-white">
                    {footprintTarget} <span className="text-primary-light">KG</span>
                  </p>
                </div>
                
                <div className="space-y-6">
                  <input 
                    type="range"
                    min="20"
                    max="200"
                    step="1"
                    value={footprintTarget}
                    onChange={(e) => setFootprintTarget(parseInt(e.target.value))}
                    className="accent-primary-light w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-white/30 tracking-widest uppercase">
                    <span>Low Impact</span>
                    <span>High Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Html>

        <group position={[0, -1.5, 0]}>
          <Button3D width={1.2} position={[-1.1, 0, 0]} label="← BACK" color="#1a2a20" onClick={handleBack} />
          <Button3D width={2.2} position={[0.9, 0, 0]} label="START TRACKING →" color="#00ff87" onClick={handleNext} />
        </group>
      </group>
    </group>
  );
}

export default OnboardingScene;
