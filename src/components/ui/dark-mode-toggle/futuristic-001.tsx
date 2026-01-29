'use client';

import { useState } from 'react';

export default function FuturisticDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen transition-all duration-500" style={{
      backgroundColor: isDark ? '#000000' : '#0a0a0a'
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative group"
        aria-label="Toggle dark mode"
      >
        <div
          className="relative w-48 h-24 transition-all duration-500 hover:scale-105"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #00f5ff 0%, #0066ff 100%)'
              : 'linear-gradient(135deg, #ff006e 0%, #ffbe0b 100%)',
            clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
            boxShadow: isDark
              ? '0 0 30px rgba(0, 245, 255, 0.6), 0 0 60px rgba(0, 102, 255, 0.4)'
              : '0 0 30px rgba(255, 0, 110, 0.6), 0 0 60px rgba(255, 190, 11, 0.4)'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <div className="relative">
              {isDark ? (
                <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </div>

            <div className="flex flex-col items-start">
              <span className="text-xs font-black tracking-widest text-black opacity-80">MODE</span>
              <span className="text-lg font-black tracking-wider text-black">
                {isDark ? 'CYBER' : 'SOLAR'}
              </span>
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: isDark
                ? 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)'
                : 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.2) 2px, rgba(0, 0, 0, 0.2) 4px)'
            }}
          />
        </div>

        <div
          className="absolute -inset-1 transition-all duration-500 -z-10"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #00f5ff 0%, #0066ff 100%)'
              : 'linear-gradient(135deg, #ff006e 0%, #ffbe0b 100%)',
            filter: 'blur(20px)',
            opacity: 0.5,
            clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)'
          }}
        />

        <div className="absolute -top-2 -right-2 flex gap-1">
          <div className="w-2 h-2 transition-all duration-500" style={{
            backgroundColor: isDark ? '#00f5ff' : '#ff006e',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }} />
          <div className="w-2 h-2 transition-all duration-500" style={{
            backgroundColor: isDark ? '#0066ff' : '#ffbe0b',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }} />
        </div>
      </button>
    </div>
  );
}
