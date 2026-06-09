import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
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
        <ScrollControls pages={5} damping={0.15}>
          <LandingScene />
        </ScrollControls>
      );
  }
}

export function Scene() {
  const currentPage = useStore((state) => state.currentPage);

  return (
    <div className="relative w-full h-full bg-[#020b06] overflow-hidden select-none">
      <Canvas
        gl={{ 
          antialias: true, 
          toneMapping: THREE.ACESFilmicToneMapping, 
          toneMappingExposure: 1.15 
        }}
        shadows
        camera={{ fov: 55, near: 0.1, far: 500, position: [0, 0, 8] }}
        dpr={[1, 1.5]} // Cap at 1.5 on mobile/retina for WebGL performance
      >
        <Suspense fallback={<LoadingScreen3D />}>
          {/* === LIGHTING RIG — bright enough to read all glass panels === */}
          {/* Main fill — raised ambient so nothing is pitch black */}
          <ambientLight color="#0a2e1a" intensity={1.5} />

          {/* Key light — above and in front */}
          <pointLight position={[0, 6, 4]} color="#00ff87" intensity={4} castShadow shadow-mapSize={[1024, 1024]} />

          {/* Fill light — below, warm counter */}
          <pointLight position={[0, -4, 2]} color="#004422" intensity={2} />

          {/* Rim lights — sides for depth */}
          <pointLight position={[-8, 2, 0]} color="#00d4ff" intensity={2} />
          <pointLight position={[8, 2, 0]} color="#00d4ff" intensity={2} />

          {/* Panel glow — directly forward of panels */}
          <pointLight position={[0, 0, 6]} color="#ffffff" intensity={0.8} />

          {/* Directional for shadow quality */}
          <directionalLight position={[5, 10, 3]} color="#ffffff" intensity={1.0} castShadow />
          
          {/* Floating dust particles */}
          <Particles count={1500} />

          {/* Gentle HUD camera shake */}
          <CameraShake 
            intensity={0.06} 
            decay={false}
            maxYaw={0.015} 
            maxPitch={0.015} 
            maxRoll={0.015} 
            yawFrequency={0.08} 
            pitchFrequency={0.08} 
            rollFrequency={0.08} 
          />

          {/* HUD Navigation overlay */}
          {currentPage !== 'landing' && currentPage !== 'auth' && currentPage !== 'onboarding' && (
            <NavBar3D />
          )}

          {/* Swirling transition vortex */}
          <Portal3D />

          {/* Dynamic 3D Scene */}
          <CurrentScene page={currentPage} />

          <Preload all />

          {/* Post-processing removed for WebGL stability */}
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
