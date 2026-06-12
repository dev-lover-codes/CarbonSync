import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { CameraShake, Preload, ScrollControls } from '@react-three/drei';

import { useStore } from '../store/useStore';
import * as THREE from 'three';

// Import components
import Particles from './Particles';
import LoadingScreen3D from './LoadingScreen3D';
import Portal3D from './Portal3D';
import NavBar3D from './NavBar3D';
import BottomNav3D from './BottomNav3D';

// Lazy load all 3D page scenes
const LandingScene = React.lazy(() => import('../pages/LandingScene'));
const AuthScene = React.lazy(() => import('../pages/AuthScene'));
const OnboardingScene = React.lazy(() => import('../pages/OnboardingScene'));
const DashboardScene = React.lazy(() => import('../pages/DashboardScene'));
const TrackerScene = React.lazy(() => import('../pages/TrackerScene'));
const InsightsScene = React.lazy(() => import('../pages/InsightsScene'));
const GoalsScene = React.lazy(() => import('../pages/GoalsScene'));
const LeaderboardScene = React.lazy(() => import('../pages/LeaderboardScene'));
const AICoachScene = React.lazy(() => import('../pages/AICoachScene'));

function CameraReset() {
  const { camera } = useThree();
  const currentPage = useStore((state) => state.currentPage);

  useEffect(() => {
    // Reset camera position and target whenever page changes
    // This fixes the issue where LandingScene's ScrollControls leaves the camera out of view
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [currentPage, camera]);

  return null;
}

function CurrentScene({ page }) {
  switch (page) {
    case 'landing':
      return (
        <ScrollControls pages={8} damping={0.15}>
          <LandingScene />
        </ScrollControls>
      );
    case 'auth':
      return <AuthScene />;
    case 'onboarding':
      return <OnboardingScene />;
    case 'dashboard':
      return (
        <ScrollControls pages={3} damping={0.15}>
          <DashboardScene />
        </ScrollControls>
      );
    case 'tracker':
      return <TrackerScene />;
    case 'insights':
      return (
        <ScrollControls pages={2.2} damping={0.15}>
          <InsightsScene />
        </ScrollControls>
      );
    case 'goals':
      return (
        <ScrollControls pages={2.4} damping={0.15}>
          <GoalsScene />
        </ScrollControls>
      );
    case 'leaderboard':
      return <LeaderboardScene />;
    case 'coach':
      return <AICoachScene />;
    default:
      return (
        <ScrollControls pages={8} damping={0.15}>
          <LandingScene />
        </ScrollControls>
      );
  }
}

export function Scene() {
  const currentPage = useStore((state) => state.currentPage);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className="relative w-full h-full select-none" 
      style={{ 
        background: 'var(--c-bg)', 
        overflow: 'hidden',
        isolation: 'isolate'
      }}
    >
      <Canvas
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          alpha: false,
        }}
        shadows
        camera={{ fov: 55, near: 0.1, far: 500, position: [0, 0, 8] }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={<LoadingScreen3D />}>
          <CameraReset />
          {/* ═══════════════════ LIGHTING RIG ═══════════════════ */}

          {/* Ambient — prevents pitch-black shadows */}
          <ambientLight color="#0d2e1a" intensity={1.8} />

          {/* Key light — neon green from above-front */}
          <pointLight position={[0, 7, 5]} color="#00ff87" intensity={5.0} castShadow shadow-mapSize={[2048, 2048]} />

          {/* Fill light — deep green counter from below */}
          <pointLight position={[0, -5, 3]} color="#004422" intensity={2.5} />

          {/* Rim lights — cyan sides for depth and volumetric look */}
          <pointLight position={[-9, 3, 1]} color="#00d4ff" intensity={2.5} />
          <pointLight position={[9, 3, 1]} color="#00d4ff" intensity={2.5} />

          {/* Front white — ensures text panels stay readable */}
          <pointLight position={[0, 0, 7]} color="#ffffff" intensity={1.0} />

          {/* Warm accent — amber for depth variation */}
          <pointLight position={[5, -2, -3]} color="#ffb347" intensity={1.0} />

          {/* Directional shadow caster */}
          <directionalLight position={[5, 12, 4]} color="#ffffff" intensity={1.2} castShadow />

          {/* Floating dust particles */}
          <Particles count={2000} />

          {/* Subtle HUD camera shake */}
          <CameraShake
            intensity={0.05}
            decay={false}
            maxYaw={0.012}
            maxPitch={0.012}
            maxRoll={0.010}
            yawFrequency={0.07}
            pitchFrequency={0.07}
            rollFrequency={0.07}
          />

          {/* HUD Navigation overlay — desktop */}
          {currentPage !== 'landing' && currentPage !== 'auth' && currentPage !== 'onboarding' && !isMobile && (
            <NavBar3D />
          )}

          {/* Swirling transition vortex */}
          <Portal3D />

          {/* Dynamic 3D Scene */}
          <CurrentScene page={currentPage} />

          <Preload all />
        </Suspense>
      </Canvas>

      {/* DOM Overlay Mobile Navigation Bar */}
      {currentPage !== 'landing' && currentPage !== 'auth' && currentPage !== 'onboarding' && (
        <BottomNav3D />
      )}
    </div>
  );
}

export default Scene;
