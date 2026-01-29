'use client';

import { useState } from 'react';

export default function CyberpunkDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen transition-all duration-500" style={{
      backgroundColor: isDark ? '#0a0e27' : '#1a1e37',
      backgroundImage: isDark
        ? 'linear-gradient(rgba(255, 0, 128, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)'
        : 'linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 105, 180, 0.1) 1px, transparent 1px)',
      backgroundSize: '20px 20px'
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative group"
        aria-label="Toggle dark mode"
      >
        <div
          className="w-32 h-16 transition-all duration-500 hover:scale-105"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #ff0080 0%, #7928ca 100%)'
              : 'linear-gradient(135deg, #ffd700 0%, #ff69b4 100%)',
            clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
            boxShadow: isDark
              ? '0 0 20px rgba(255, 0, 128, 0.8), inset 0 0 20px rgba(121, 40, 202, 0.4)'
              : '0 0 20px rgba(255, 215, 0, 0.8), inset 0 0 20px rgba(255, 105, 180, 0.4)'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2">
              {isDark ? (
                <>
                  <svg className="w-8 h-8 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <span className="font-black text-xs text-cyan-300 tracking-widest">CYBER</span>
                </>
              ) : (
                <>
                  <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <span className="font-black text-xs text-pink-600 tracking-widest">PUNK</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div
          className="absolute -inset-1 transition-opacity duration-500"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #ff0080 0%, #7928ca 100%)'
              : 'linear-gradient(135deg, #ffd700 0%, #ff69b4 100%)',
            opacity: 0.2,
            filter: 'blur(10px)',
            zIndex: -1
          }}
        />
      </button>
    </div>
  );
}
