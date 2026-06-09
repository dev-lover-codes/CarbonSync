import React, { useState, useMemo } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { RoundedBox, Text } from '@react-three/drei';

// Safely convert any color string (including rgba) to a plain hex/rgb color
// THREE.Color does not support the alpha channel in rgba() — this strips it.
function parseColorAndOpacity(colorStr) {
  if (!colorStr) return { solidColor: '#ffffff', opacity: 1 };
  const rgbaMatch = colorStr.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);
  if (rgbaMatch) {
    const r = parseInt(rgbaMatch[1], 10).toString(16).padStart(2, '0');
    const g = parseInt(rgbaMatch[2], 10).toString(16).padStart(2, '0');
    const b = parseInt(rgbaMatch[3], 10).toString(16).padStart(2, '0');
    const opacity = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1;
    return { solidColor: `#${r}${g}${b}`, opacity };
  }
  return { solidColor: colorStr, opacity: 1 };
}

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

  // Memoize parsed color so it doesn't reparse every render
  const { solidColor, opacity } = useMemo(() => parseColorAndOpacity(color), [color]);

  const { scale, emissiveIntensity } = useSpring({
    scale: clicked ? 0.92 : hovered ? 1.08 : 1.0,
    emissiveIntensity: hovered ? 1.5 : opacity * 0.3,
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
          color={solidColor}
          emissive={solidColor}
          emissiveIntensity={emissiveIntensity}
          roughness={0.1}
          metalness={0.9}
          transparent={opacity < 1}
          opacity={opacity}
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
