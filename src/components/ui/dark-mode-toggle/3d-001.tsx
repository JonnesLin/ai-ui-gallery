'use client';

import { useState } from 'react';

export default function ThreeDDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen transition-colors duration-500" style={{
      background: isDark
        ? 'linear-gradient(135deg, #1e1e2e 0%, #2a2a40 100%)'
        : 'linear-gradient(135deg, #e0e7ff 0%, #f3f4f6 100%)'
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative group"
        aria-label="Toggle dark mode"
        style={{ perspective: '1000px' }}
      >
        <div
          className="w-36 h-36 rounded-2xl transition-all duration-700 hover:rotate-y-12"
          style={{
            background: isDark
              ? 'linear-gradient(145deg, #2a2a40, #23233a)'
              : 'linear-gradient(145deg, #ffffff, #e6e8f0)',
            boxShadow: isDark
              ? '12px 12px 24px #1a1a28, -12px -12px 24px #3a3a58'
              : '12px 12px 24px #c5c7d1, -12px -12px 24px #ffffff',
            transform: 'rotateX(10deg) rotateY(-10deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute inset-4 rounded-xl transition-all duration-700" style={{
            background: isDark
              ? 'linear-gradient(145deg, #23233a, #2a2a40)'
              : 'linear-gradient(145deg, #e6e8f0, #ffffff)',
            boxShadow: isDark
              ? 'inset 4px 4px 8px #1a1a28, inset -4px -4px 8px #3a3a58'
              : 'inset 4px 4px 8px #c5c7d1, inset -4px -4px 8px #ffffff',
            transform: 'translateZ(20px)'
          }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {isDark ? (
                <div className="relative" style={{ transform: 'translateZ(30px)' }}>
                  <svg className="w-16 h-16 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full" style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(129, 140, 248, 0.3), transparent)',
                      filter: 'blur(8px)'
                    }} />
                  </div>
                </div>
              ) : (
                <div className="relative" style={{ transform: 'translateZ(30px)' }}>
                  <svg className="w-16 h-16 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full" style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(245, 158, 11, 0.3), transparent)',
                      filter: 'blur(8px)'
                    }} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full transition-all duration-700"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(42, 42, 64, 0.8) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(0, 0, 0, 0.15) 0%, transparent 70%)',
            filter: 'blur(8px)'
          }}
        />
      </button>
    </div>
  );
}
