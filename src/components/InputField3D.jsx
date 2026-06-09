import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import GlassPanel from './GlassPanel';

export function InputField3D({
  width = 2.5,
  height = 0.45,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  position = [0, 0, 0],
  ...props
}) {
  const [focused, setFocused] = useState(false);

  return (
    <group position={position} {...props}>
      <GlassPanel
        width={width}
        height={height}
        depth={0.03}
        glowColor={focused ? '#00ff87' : '#00d4ff'}
        transmission={0.95}
      >
        <Html
          position={[0, 0, 0.02]}
          transform
          occlude="blending"
          pointerEvents="auto"
          style={{
            width: `${width * 110}px`,
            height: `${height * 110}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <input
            type={type}
            placeholder={placeholder}
            value={value || ''}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full h-full bg-transparent text-white font-mono text-center outline-none border-none placeholder-emerald-500/40 text-xs px-2"
            style={{
              caretColor: '#00ff87',
            }}
          />
        </Html>
      </GlassPanel>
    </group>
  );
}

export default InputField3D;
