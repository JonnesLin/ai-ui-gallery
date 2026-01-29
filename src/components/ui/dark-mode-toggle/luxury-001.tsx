'use client';

import { useState } from 'react';

export default function LuxuryDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen transition-colors duration-700" style={{
      backgroundColor: isDark ? '#0f0f0f' : '#faf8f5'
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative group"
        aria-label="Toggle dark mode"
      >
        <div
          className="w-32 h-16 rounded-full transition-all duration-700 hover:scale-105"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #d4af37 0%, #f9d342 50%, #d4af37 100%)'
              : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
            boxShadow: isDark
              ? '0 8px 32px rgba(212, 175, 55, 0.4), inset 0 2px 8px rgba(249, 211, 66, 0.6)'
              : '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.1)',
            border: `2px solid ${isDark ? '#f9d342' : '#404040'}`
          }}
        >
          <div
            className="absolute top-1 w-12 h-12 rounded-full transition-all duration-700 flex items-center justify-center"
            style={{
              left: isDark ? '76px' : '4px',
              background: isDark
                ? 'radial-gradient(circle at 30% 30%, #1a1a1a, #0a0a0a)'
                : 'radial-gradient(circle at 30% 30%, #ffffff, #e5e5e5)',
              boxShadow: isDark
                ? '0 4px 16px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(212, 175, 55, 0.2)'
                : '0 4px 16px rgba(212, 175, 55, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            {isDark ? (
              <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>

        <div
          className="absolute -inset-2 rounded-full transition-opacity duration-700 -z-10"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, transparent 70%)',
            filter: 'blur(20px)'
          }}
        />
      </button>
    </div>
  );
}
