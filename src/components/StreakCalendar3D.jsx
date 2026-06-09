import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { Html } from '@react-three/drei';

function CalendarCube({ index, active, today, position }) {
  const [hovered, setHovered] = useState(false);

  const { pos, scale, emissiveIntensity } = useSpring({
    pos: hovered ? [position[0], position[1], position[2] + 0.15] : position,
    scale: hovered ? 1.25 : today ? 1.08 : 1.0,
    emissiveIntensity: active ? 1.2 : 0.15,
    config: { mass: 1, tension: 240, friction: 14 }
  });

  const activeColor = '#00ff87';
  const inactiveColor = '#13281b';

  return (
    <animated.mesh
      position={pos}
      scale={scale}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[0.32, 0.32, 0.32]} />
      <animated.meshStandardMaterial
        color={active ? activeColor : inactiveColor}
        emissive={active ? activeColor : inactiveColor}
        emissiveIntensity={emissiveIntensity}
        roughness={0.15}
        metalness={0.8}
      />
      {hovered && (
        <Html distanceFactor={4} position={[0, 0, 0.22]} center pointerEvents="none">
          <div className="bg-[#020b06] border border-[#00ff87] text-[#00ff87] font-mono text-[9px] px-2 py-0.5 rounded shadow-xl whitespace-nowrap">
            Day {index + 1}: {active ? 'COMPLETED' : 'NO RECORD'}
          </div>
        </Html>
      )}
    </animated.mesh>
  );
}

export function StreakCalendar3D({ position = [0, 0, 0], ...props }) {
  const activeDays = [2, 3, 5, 6, 9, 10, 11, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28];
  
  const columns = 6;
  const rows = 5;
  const spacingX = 0.45;
  const spacingY = 0.45;

  const cubes = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const index = r * columns + c;
      const x = (c - (columns - 1) / 2) * spacingX;
      const y = ((rows - 1) / 2 - r) * spacingY;
      cubes.push({
        index,
        active: activeDays.includes(index),
        today: index === 28,
        position: [x, y, 0]
      });
    }
  }

  return (
    <group position={position} {...props}>
      {cubes.map((cube) => (
        <CalendarCube
          key={cube.index}
          index={cube.index}
          active={cube.active}
          today={cube.today}
          position={cube.position}
        />
      ))}
    </group>
  );
}

export default StreakCalendar3D;
