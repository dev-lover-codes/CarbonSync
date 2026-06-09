import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { RoundedBox, Text } from '@react-three/drei';

export function Button3D({
  width = 1.2,
  height = 0.35,
  depth = 0.08,
  label = 'Button',
  color = '#00ff87',
  onClick,
  position = [0, 0, 0],
  fontSize = 0.13,
  textColor = '#ffffff',
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const { scale, emissiveIntensity } = useSpring({
    scale: clicked ? 0.92 : hovered ? 1.08 : 1.0,
    emissiveIntensity: hovered ? 1.5 : 0.3,
    config: { mass: 1, tension: 350, friction: 12 }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
      if (onClick) onClick();
    }, 120);
  };

  return (
    <animated.group
      position={position}
      scale={scale}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
        setClicked(false);
      }}
      onPointerDown={handleClick}
      {...props}
    >
      <RoundedBox args={[width, height, depth]} radius={0.05} smoothness={4} castShadow>
        <animated.meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          roughness={0.1}
          metalness={0.9}
        />
      </RoundedBox>
      <Text
        position={[0, 0, depth / 2 + 0.01]}
        fontSize={fontSize}
        color={textColor}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </animated.group>
  );
}

export default Button3D;
