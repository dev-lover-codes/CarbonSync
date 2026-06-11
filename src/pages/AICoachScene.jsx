import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sparkles } from '@react-three/drei';
import { useAuth } from '../contexts/AuthContext';
import { useStore } from '../store/useStore';
import { getChatResponse } from '../services/geminiService';
import GlassPanel from '../components/GlassPanel';
import Button3D from '../components/Button3D';
import ChatBubble3D from '../components/ChatBubble3D';
import InputField3D from '../components/InputField3D';
import ProgressRing3D from '../components/ProgressRing3D';
import * as THREE from 'three';

export function AICoachScene() {
  const { userProfile } = useAuth();
  const { chatHistory, addChatMessage, userStats } = useStore();

  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const botRef = useRef();

  // Spin the EcoBot wireframe sphere
  useFrame((state, delta) => {
    if (botRef.current) {
      botRef.current.rotation.y += 0.8 * delta;
      botRef.current.rotation.x += 0.3 * delta;
    }
  });

  const suggestions = [
    { text: 'Reduce transport emissions →', q: 'How can I reduce my daily transport emissions in India?' },
    { text: 'My worst CO₂ category →', q: 'What is typically the worst CO₂ category for home energy, and how can I fix it?' },
    { text: 'Give me a 7-day challenge →', q: 'Give me a concrete 7-day challenge to reduce my carbon footprint.' },
    { text: 'Compare to Indian average →', q: 'How does a weekly carbon footprint of 80kg compare to the Indian average?' },
  ];

  const handleSend = async (messageText) => {
    const textToSend = messageText || inputMessage;
    if (!textToSend.trim() || loading) return;

    // 1. Add User Message to store
    addChatMessage({ sender: 'user', text: textToSend });
    setInputMessage('');
    setLoading(true);

    try {
      // 2. Format history for Gemini API
      const formattedHistory = chatHistory.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        content: m.text,
      }));

      // 3. Request Gemini AI response
      const response = await getChatResponse(textToSend, userStats, formattedHistory);

      // 4. Add Bot Message response to store
      addChatMessage({ sender: 'bot', text: response });
    } catch (e) {
      addChatMessage({ sender: 'bot', text: 'Apologies, I encountered a communication error with my core network.' });
    } finally {
      setLoading(false);
    }
  };

  // Get last 3 messages to display cleanly in WebGL space
  const visibleMessages = chatHistory.slice(-3);

  return (
    <group>
      <Sparkles count={40} scale={5} size={2} speed={0.4} color="#00ff87" />

      {/* ================= LEFT SIDE: STATS POD (x=-2.2) ================= */}
      <group position={[-2.1, -0.1, 0]} rotation={[-0.1, 0.05, 0]}>
        <GlassPanel width={2.4} height={2.8} depth={0.05} glowColor="#00ff87">
          
          {/* Rotating EcoBot shape */}
          <group ref={botRef} position={[0, 0.82, 0.05]}>
            <mesh castShadow>
              <icosahedronGeometry args={[0.22, 1]} />
              <meshStandardMaterial color="#00ff87" wireframe emissive="#00ff87" emissiveIntensity={0.5} />
            </mesh>
            <mesh scale={[0.85, 0.85, 0.85]}>
              <icosahedronGeometry args={[0.22, 1]} />
              <meshStandardMaterial color="#020b06" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>

          <Text
            position={[0, 0.42, 0.05]}
            fontSize={0.12}
            color="#ffffff"
          >
            ECOBOT CORE V1.5
          </Text>

          {/* Mini progress stats */}
          <group position={[0, 0.08, 0.05]}>
            <ProgressRing3D progress={0.65} size={0.18} color="#00ff87" />
            <Text position={[0.42, 0, 0]} fontSize={0.095} color="#ffffff" anchorX="left" anchorY="middle">
              STREAK SYNC
            </Text>
          </group>

          {/* Quick-choice suggestions */}
          <group position={[0, -0.22, 0.05]}>
            {suggestions.map((s, idx) => (
              <group key={idx} position={[0, -idx * 0.26, 0]}>
                <Button3D
                  width={2.0}
                  height={0.2}
                  label={s.text}
                  color="#001f0d"
                  textColor="#00ff87"
                  fontSize={0.055}
                  onClick={() => handleSend(s.q)}
                />
              </group>
            ))}
          </group>
        </GlassPanel>
      </group>

      {/* ================= RIGHT SIDE: HOLOGRAPHIC CHAT WINDOW (x=1.3) ================= */}
      <group position={[1.2, -0.1, -0.1]} rotation={[-0.1, -0.05, 0]}>
        <GlassPanel width={3.8} height={2.8} depth={0.05} glowColor="#00d4ff">
          
          <Text
            position={[0, 1.22, 0.05]}
            fontSize={0.13}
            color="#ffffff"
          >
            HOLOGRAM COMMUNICATION LINK
          </Text>

          {/* Message Stack list */}
          <group position={[0, 0.35, 0.05]}>
            {visibleMessages.map((msg, idx) => {
              const isBot = msg.sender === 'bot';
              // Calculate Y position in the stack
              const yPos = 0.45 - idx * 0.76;
              return (
                <ChatBubble3D
                  key={idx}
                  message={msg.text.substring(0, 100) + (msg.text.length > 100 ? '...' : '')}
                  isBot={isBot}
                  position={[0, yPos, 0.02]}
                />
              );
            })}

            {/* Pulsing bot typing spheres */}
            {loading && (
              <group position={[-0.4, -0.42, 0.02]}>
                <mesh position={[0, 0, 0]}>
                  <sphereGeometry args={[0.04, 8, 8]} />
                  <meshBasicMaterial color="#00ff87" />
                </mesh>
                <mesh position={[0.12, 0, 0]}>
                  <sphereGeometry args={[0.04, 8, 8]} />
                  <meshBasicMaterial color="#00ff87" />
                </mesh>
                <mesh position={[0.24, 0, 0]}>
                  <sphereGeometry args={[0.04, 8, 8]} />
                  <meshBasicMaterial color="#00ff87" />
                </mesh>
              </group>
            )}
          </group>

          {/* Interactive input + send dispatcher */}
          <group position={[-0.5, -1.02, 0.05]}>
            <InputField3D
              width={2.4}
              height={0.34}
              placeholder="ASK ECOBOT..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
          </group>

          <group position={[1.1, -1.02, 0.05]}>
            <Button3D
              width={0.65}
              height={0.34}
              label="SEND"
              color={inputMessage.trim() ? '#00ff87' : 'rgba(0,255,135,0.2)'}
              textColor={inputMessage.trim() ? '#020b06' : '#00ff87'}
              fontSize={0.08}
              onClick={() => handleSend()}
            />
          </group>
        </GlassPanel>
      </group>
    </group>
  );
}

export default AICoachScene;
