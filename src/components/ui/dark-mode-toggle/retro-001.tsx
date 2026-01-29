'use client';

import { useState } from 'react';

export default function RetroDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen transition-colors duration-500" style={{
      backgroundColor: isDark ? '#1a1a2e' : '#f9f7f3',
      backgroundImage: isDark
        ? 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.02) 10px, rgba(255,255,255,.02) 20px)'
        : 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.02) 10px, rgba(0,0,0,.02) 20px)'
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative w-36 h-20 rounded-lg transition-all duration-500 hover:scale-105"
        style={{
          backgroundColor: isDark ? '#ff6b6b' : '#ffd93d',
          border: `4px solid ${isDark ? '#c92a2a' : '#fab005'}`,
          boxShadow: isDark
            ? '0 6px 0 #a61e1e, 0 10px 20px rgba(0,0,0,0.4)'
            : '0 6px 0 #e67700, 0 10px 20px rgba(0,0,0,0.2)'
        }}
        aria-label="Toggle dark mode"
      >
        <div className="absolute inset-0 flex items-center justify-center gap-3">
          {isDark ? (
            <>
              <svg className="w-10 h-10 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <span className="font-black text-sm text-white tracking-wider">NIGHT</span>
            </>
          ) : (
            <>
              <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
              <span className="font-black text-sm text-orange-900 tracking-wider">DAY</span>
            </>
          )}
        </div>
      </button>
    </div>
  );
}
