'use client';

import { useState } from 'react';

export default function MaterialDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen transition-colors duration-500" style={{
      backgroundColor: isDark ? '#121212' : '#fafafa'
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative group"
        aria-label="Toggle dark mode"
      >
        <div
          className="w-20 h-20 rounded-full transition-all duration-500 hover:scale-110"
          style={{
            backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
            boxShadow: isDark
              ? '0 4px 8px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2)'
              : '0 4px 8px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08)'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
            <div
              className="absolute inset-0 transition-all duration-500"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, transparent 50%, rgba(187, 134, 252, 0.1) 50%)'
                  : 'linear-gradient(135deg, transparent 50%, rgba(255, 193, 7, 0.1) 50%)',
                transform: isDark ? 'rotate(0deg)' : 'rotate(180deg)'
              }}
            />

            {isDark ? (
              <svg className="w-10 h-10 text-indigo-400 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-10 h-10 text-amber-500 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </div>

          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: isDark
                ? 'radial-gradient(circle at center, rgba(187, 134, 252, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle at center, rgba(255, 193, 7, 0.1) 0%, transparent 70%)'
            }}
          />
        </div>

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs font-medium transition-colors duration-500" style={{
            color: isDark ? '#bb86fc' : '#f57c00'
          }}>
            {isDark ? 'DARK MODE' : 'LIGHT MODE'}
          </span>
        </div>
      </button>
    </div>
  );
}
