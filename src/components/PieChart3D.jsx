import React, { useState, useMemo } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { Text } from '@react-three/drei';

function Slice({ label, value, color, thetaStart, thetaLength, total }) {
  const [hovered, setHovered] = useState(false);

  // Compute bisector angle of the slice sector for exploding displacement direction
  const midAngle = useMemo(() => thetaStart + thetaLength / 2, [thetaStart, thetaLength]);

  const { pos, emissiveIntensity } = useSpring({
    pos: hovered
      ? [Math.cos(midAngle) * 0.15, 0.06, -Math.sin(midAngle) * 0.15]
      : [0, 0, 0],
    emissiveIntensity: hovered ? 1.4 : 0.25,
    config: { mass: 1, tension: 240, friction: 14 }
  });

  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;

  return (
    <group>
      <animated.mesh
        position={pos}
        rotation={[Math.PI / 2, 0, 0]} // Lay flat on XZ plane
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[1.0, 1.0, 0.22, 32, 1, false, thetaStart, thetaLength]} />
        <animated.meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          roughness={0.1}
          metalness={0.9}
        />
      </animated.mesh>

      {/* Floating percentage tag above active slice */}
      {hovered && (
        <animated.group position={[Math.cos(midAngle) * 1.3, 0.3, -Math.sin(midAngle) * 1.3]}>
          <Text
            fontSize={0.11}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {`${label || ''}: ${percentage}%`}
          </Text>
        </animated.group>
      )}
    </group>
  );
}

export function PieChart3D({
  data = [
    { label: 'Transport', value: 40, color: '#00ff87' },
    { label: 'Food', value: 25, color: '#00d4ff' },
    { label: 'Energy', value: 20, color: '#ffb347' },
    { label: 'Shopping', value: 15, color: '#ff5e62' },
  ],
  title = 'Category Share',
  position = [0, 0, 0],
  ...props
}) {
  const total = useMemo(() => data.reduce((sum, item) => sum + item.value, 0), [data]);

  const sectors = useMemo(() => {
    let currentTheta = 0;
    return data.map((item) => {
      const thetaLength = total > 0 ? (item.value / total) * Math.PI * 2 : 0;
      const thetaStart = currentTheta;
      currentTheta += thetaLength;
      return {
        ...item,
        thetaStart,
        thetaLength
      };
    });
  }, [data, total]);

  return (
    <group position={position} {...props}>
      {/* Title */}
      <Text
        position={[0, 1.6, 0.05]}
        fontSize={0.16}
        color="#ffffff"
        anchorX="center"
        anchorY="bottom"
      >
        {title || ''}
      </Text>

      {/* Slices Ring */}
      <group position={[0, 0, 0]}>
        {sectors.map((sector, idx) => (
          <Slice
            key={idx}
            label={sector.label}
            value={sector.value}
            color={sector.color}
            thetaStart={sector.thetaStart}
            thetaLength={sector.thetaLength}
            total={total}
          />
        ))}
      </group>

      {/* Muted legend labels on sides */}
      <group position={[1.8, 0, 0.05]}>
        {data.map((item, idx) => (
          <group key={idx} position={[0, 0.4 - idx * 0.3, 0]}>
            {/* Color block */}
            <mesh position={[-0.2, 0, 0]}>
              <boxGeometry args={[0.1, 0.1, 0.02]} />
              <meshBasicMaterial color={item.color} />
            </mesh>
            <Text
              position={[0, 0, 0]}
              fontSize={0.1}
              color="#b3c6bc"
              anchorX="left"
              anchorY="middle"
            >
              {item.label || ''}
            </Text>
          </group>
        ))}
      </group>
    </group>
  );
}

export default PieChart3D;
