'use client';

import { useState } from 'react';

export default function CorporateDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen transition-colors duration-500" style={{
      backgroundColor: isDark ? '#1e293b' : '#f8fafc'
    }}>
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className="relative w-16 h-16 rounded-lg transition-all duration-500 hover:scale-105"
          style={{
            backgroundColor: isDark ? '#334155' : '#ffffff',
            border: `2px solid ${isDark ? '#475569' : '#e2e8f0'}`,
            boxShadow: isDark
              ? '0 4px 12px rgba(0, 0, 0, 0.3)'
              : '0 4px 12px rgba(0, 0, 0, 0.08)'
          }}
          aria-label="Toggle dark mode"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {isDark ? (
              <svg className="w-8 h-8 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </button>

        <div className="text-center">
          <p className="text-sm font-semibold transition-colors duration-500" style={{
            color: isDark ? '#e2e8f0' : '#334155'
          }}>
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </p>
          <p className="text-xs transition-colors duration-500" style={{
            color: isDark ? '#94a3b8' : '#64748b'
          }}>
            Click to toggle
          </p>
        </div>
      </div>
    </div>
  );
}
