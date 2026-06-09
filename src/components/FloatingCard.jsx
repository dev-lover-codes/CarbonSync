import React from 'react';
import { Float } from '@react-three/drei';
import GlassPanel from './GlassPanel';

export function FloatingCard({
  width = 3,
  height = 2,
  depth = 0.05,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  glowColor = "#00ff87",
  speed = 1.5,
  rotationIntensity = 0.2,
  floatIntensity = 0.4,
  children,
  ...props
}) {
  return (
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
      floatingRange={[-0.1, 0.1]}
    >
      <GlassPanel
        width={width}
        height={height}
        depth={depth}
        position={position}
        rotation={rotation}
        glowColor={glowColor}
        {...props}
      >
        {children}
      </GlassPanel>
    </Float>
  );
}

export default FloatingCard;
