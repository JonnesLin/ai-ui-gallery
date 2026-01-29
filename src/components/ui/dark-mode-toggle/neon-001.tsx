'use client';

import { useState } from 'react';

export default function NeonDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen" style={{
      backgroundColor: '#0a0a0a'
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative group"
        aria-label="Toggle dark mode"
      >
        <div
          className="w-32 h-16 rounded-full transition-all duration-500 hover:scale-110"
          style={{
            backgroundColor: '#1a1a1a',
            border: `3px solid ${isDark ? '#00ffff' : '#ff00ff'}`,
            boxShadow: isDark
              ? '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, inset 0 0 10px rgba(0, 255, 255, 0.2)'
              : '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, inset 0 0 10px rgba(255, 0, 255, 0.2)'
          }}
        >
          <div
            className="absolute top-1 w-12 h-12 rounded-full transition-all duration-500 flex items-center justify-center"
            style={{
              left: isDark ? '72px' : '4px',
              backgroundColor: '#0a0a0a',
              border: `2px solid ${isDark ? '#00ffff' : '#ff00ff'}`,
              boxShadow: isDark
                ? '0 0 15px #00ffff, 0 0 30px #00ffff'
                : '0 0 15px #ff00ff, 0 0 30px #ff00ff'
            }}
          >
            {isDark ? (
              <svg className="w-6 h-6" style={{ color: '#00ffff' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" style={{ color: '#ff00ff' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-full transition-all duration-500 -z-10"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(255, 0, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(20px)',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </button>
    </div>
  );
}
