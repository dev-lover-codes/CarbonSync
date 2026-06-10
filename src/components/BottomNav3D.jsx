import React from 'react';
import { useStore } from '../store/useStore';

export function BottomNav3D() {
  const { currentPage, navigate } = useStore();

  const navItems = [
    {
      id: 'dashboard',
      label: 'Dash',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
        </svg>
      )
    },
    {
      id: 'tracker',
      label: 'Track',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'insights',
      label: 'Insights',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'goals',
      label: 'Goals',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 'coach',
      label: 'Coach',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-3">
      {/* Outer glow ring */}
      <div
        style={{
          background: 'rgba(2,11,6,0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(0,255,135,0.15)',
          borderRadius: '20px',
          boxShadow: '0 -4px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,255,135,0.06) inset',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '68px',
          padding: '0 4px',
        }}
      >
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                background: isActive
                  ? 'linear-gradient(135deg, rgba(0,255,135,0.15), rgba(0,255,135,0.06))'
                  : 'transparent',
                color: isActive ? '#00ff87' : 'rgba(107,143,120,0.7)',
                boxShadow: isActive
                  ? '0 0 16px rgba(0,255,135,0.2), 0 0 0 1px rgba(0,255,135,0.25) inset'
                  : 'none',
                transform: isActive ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {/* Icon */}
              <div style={{ 
                filter: isActive ? 'drop-shadow(0 0 6px rgba(0,255,135,0.6))' : 'none',
                transition: 'filter 0.25s ease',
              }}>
                {item.icon}
              </div>
              {/* Label */}
              <span style={{
                fontSize: '9px',
                fontWeight: isActive ? '700' : '500',
                marginTop: '3px',
                fontFamily: "'Space Grotesk', monospace",
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                {item.label}
              </span>
              {/* Active dot */}
              {isActive && (
                <div style={{
                  position: 'absolute',
                  bottom: '6px',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: '#00ff87',
                  boxShadow: '0 0 6px #00ff87',
                }} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BottomNav3D;
