import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export function EarthGlobe({ position = [0, 0, 0], scale = 1 }) {
  const globeGroupRef = useRef();
  const earthRef = useRef();
  const atmosphereRef = useRef();

  // Convert lat/lng to 3D Cartesian coordinates
  const getCoordinates = (lat, lng, radius = 1.55) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.sin(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.cos(theta);
    return [x, y, z];
  };

  // Define 5 key CO2 hotspots (e.g., Delhi, Beijing, New York, London, Tokyo)
  const hotspots = useMemo(() => [
    { name: 'Delhi', pos: getCoordinates(28.6, 77.2), size: 0.08 },
    { name: 'Beijing', pos: getCoordinates(39.9, 116.4), size: 0.09 },
    { name: 'New York', pos: getCoordinates(40.7, -74.0), size: 0.075 },
    { name: 'London', pos: getCoordinates(51.5, -0.12), size: 0.06 },
    { name: 'Tokyo', pos: getCoordinates(35.67, 139.65), size: 0.085 },
  ], []);

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.15 * delta;
    }
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += 0.05 * delta;
    }
  });

  return (
    <group ref={globeGroupRef} position={position} scale={[scale, scale, scale]}>
      {/* Base Earth Sphere */}
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[1.5, 64, 64]} />
        {/* Procedural eco-futuristic style using metalness/roughness maps and colors */}
        <meshStandardMaterial
          color="#0d2818" // Deep forest/ocean backdrop
          roughness={0.4}
          metalness={0.7}
          emissive="#021408"
        />
        
        {/* Low-poly wireframe landmass overlay for holographic tech look */}
        <mesh>
          <icosahedronGeometry args={[1.51, 3]} />
          <meshStandardMaterial 
            color="#00ff87" 
            wireframe 
            transparent 
            opacity={0.3} 
            emissive="#00ff87"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Render CO2 hotspots */}
        {hotspots.map((spot, index) => (
          <group key={index} position={spot.pos}>
            <mesh>
              <sphereGeometry args={[spot.size, 16, 16]} />
              <meshBasicMaterial color="#ffb347" />
            </mesh>
            {/* Hotspot pulse indicator */}
            <mesh scale={[1.5, 1.5, 1.5]}>
              <sphereGeometry args={[spot.size, 16, 16]} />
              <meshBasicMaterial color="#ffb347" transparent opacity={0.3} />
            </mesh>
          </group>
        ))}
      </mesh>

      {/* Atmospheric Glow (Outer translucent shell) */}
      <mesh ref={atmosphereRef} scale={[1.08, 1.08, 1.08]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial 
          color="#00d4ff" 
          transparent 
          opacity={0.08} 
          side={THREE.BackSide} 
        />
      </mesh>

      {/* Equator Green Sparkles */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <Sparkles count={25} scale={3.4} size={3} speed={0.4} color="#00ff87" />
      </group>
    </group>
  );
}

export default EarthGlobe;
