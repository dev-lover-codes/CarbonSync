import React from 'react';
import { Float, Text } from '@react-three/drei';
import GlassPanel from './GlassPanel';

export function ChatBubble3D({
  message = '',
  isBot = true,
  position = [0, 0, 0],
  ...props
}) {
  const panelWidth = 3.8;
  const panelHeight = 0.85;
  const avatarX = isBot ? -panelWidth / 2 - 0.3 : panelWidth / 2 + 0.3;
  const glowColor = isBot ? '#00ff87' : '#00d4ff';

  return (
    <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.2}>
      <group position={position} {...props}>
        {/* Avatar Representation */}
        <mesh position={[avatarX, 0, 0]} castShadow>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial 
            color={isBot ? '#00ff87' : '#00d4ff'} 
            emissive={isBot ? '#00ff87' : '#00d4ff'} 
            emissiveIntensity={0.5} 
            roughness={0.1}
            metalness={0.8}
          />
          {/* Wireframe outer ring */}
          <mesh scale={[1.15, 1.15, 1.15]}>
            <sphereGeometry args={[0.18, 8, 8]} />
            <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.3} />
          </mesh>
        </mesh>

        {/* Message bubble card */}
        <GlassPanel
          width={panelWidth}
          height={panelHeight}
          depth={0.04}
          glowColor={glowColor}
        >
          <Text
            position={[0, 0, 0.035]}
            fontSize={0.11}
            color="#ffffff"
            maxWidth={panelWidth - 0.4}
            lineHeight={1.3}
            anchorX="center"
            anchorY="middle"
          >
            {message}
          </Text>
        </GlassPanel>
      </group>
    </Float>
  );
}

export default ChatBubble3D;
