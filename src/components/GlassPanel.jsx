import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { RoundedBox, MeshTransmissionMaterial, Edges } from '@react-three/drei';

export function GlassPanel({ 
  width = 3, 
  height = 2, 
  depth = 0.05, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  children, 
  glowColor = "#00ff87",
  transmission = 0.92,
  roughness = 0.0,
  thickness = 0.3,
  chromaticAberration = 0.03,
  ...props 
}) {
  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? 1.03 : 1.0,
    config: { mass: 1, tension: 280, friction: 18 }
  });

  return (
    <animated.group 
      position={position} 
      rotation={rotation} 
      scale={scale}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      {...props}
    >
      <RoundedBox args={[width, height, depth]} radius={0.08} smoothness={4} castShadow receiveShadow>
        <MeshTransmissionMaterial
          transmission={transmission}
          roughness={roughness}
          thickness={thickness}
          chromaticAberration={chromaticAberration}
          backside={true}
          backsideThickness={0.3}
          envMapIntensity={2}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.0}
        />
        {/* Glow border segment utilizing Bloom post-processing */}
        <Edges 
          threshold={15}
          color={glowColor}
          lineWidth={2}
        />
      </RoundedBox>
      <group position={[0, 0, depth / 2 + 0.01]}>
        {children}
      </group>
    </animated.group>
  );
}

export default GlassPanel;
