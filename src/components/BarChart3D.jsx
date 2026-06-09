import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { Text } from '@react-three/drei';

function Bar({ label, value, color, targetHeight, x }) {
  const [hovered, setHovered] = useState(false);

  const { animatedHeight, yOffset, emissiveIntensity } = useSpring({
    animatedHeight: hovered ? targetHeight * 1.05 : targetHeight,
    yOffset: hovered ? 0.08 : 0.0,
    emissiveIntensity: hovered ? 1.6 : 0.25,
    config: { mass: 1, tension: 220, friction: 16 }
  });

  return (
    <group position={[x, 0, 0]}>
      {/* Pivot aligned scaling group */}
      <animated.group scale-y={animatedHeight} position-y={yOffset}>
        <mesh 
          position={[0, 0.5, 0]}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={() => setHovered(false)}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.26, 1.0, 0.26]} />
          <animated.meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={emissiveIntensity}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </animated.group>

      {/* Floating numerical value above the bar */}
      <animated.group position-y={animatedHeight}>
        <Text
          position={[0, 0.12, 0.15]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="bottom"
        >
          {value !== undefined && value !== null ? value.toFixed(1) : '0.0'}
        </Text>
      </animated.group>

      {/* X-axis label below the bar */}
      <Text
        position={[0, -0.25, 0.05]}
        fontSize={0.09}
        color="#99b0a0"
        anchorX="center"
        anchorY="top"
      >
        {label || ''}
      </Text>
    </group>
  );
}

export function BarChart3D({
  data = [
    { label: 'Mon', value: 8.2, color: '#00ff87' },
    { label: 'Tue', value: 9.5, color: '#00ff87' },
    { label: 'Wed', value: 7.1, color: '#00d4ff' },
    { label: 'Thu', value: 6.4, color: '#00d4ff' },
    { label: 'Fri', value: 11.2, color: '#ffb347' },
    { label: 'Sat', value: 5.3, color: '#00ff87' },
    { label: 'Sun', value: 4.8, color: '#00ff87' },
  ],
  title = 'Weekly Emissions',
  position = [0, 0, 0],
  ...props
}) {
  const maxVal = Math.max(...data.map(d => d.value), 1.0);
  const maxBarHeight = 1.6;
  const barSpacing = 0.5;

  return (
    <group position={position} {...props}>
      {/* Title */}
      <Text
        position={[0, maxBarHeight + 0.35, 0.05]}
        fontSize={0.16}
        color="#ffffff"
        anchorX="center"
        anchorY="bottom"
      >
        {title || ''}
      </Text>

      {/* Bars Container */}
      <group position={[-(data.length - 1) * barSpacing / 2, 0, 0]}>
        {data.map((item, idx) => {
          const targetHeight = (item.value / maxVal) * maxBarHeight;
          return (
            <Bar
              key={idx}
              label={item.label}
              value={item.value}
              color={item.color || '#00ff87'}
              targetHeight={targetHeight}
              x={idx * barSpacing}
            />
          );
        })}
      </group>

      {/* Muted grid backdrop plane */}
      <mesh position={[0, maxBarHeight / 2, -0.1]} receiveShadow>
        <planeGeometry args={[data.length * barSpacing + 0.3, maxBarHeight + 0.1]} />
        <meshStandardMaterial 
          color="#03140a" 
          transparent 
          opacity={0.35} 
          roughness={0.8}
        />
      </mesh>
    </group>
  );
}

export default BarChart3D;
