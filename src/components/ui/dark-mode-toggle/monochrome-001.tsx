'use client';

import { useState } from 'react';

export default function MonochromeDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen transition-colors duration-500" style={{
      backgroundColor: isDark ? '#000000' : '#ffffff'
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative overflow-hidden transition-all duration-500 hover:scale-105"
        aria-label="Toggle dark mode"
      >
        <div
          className="w-40 h-20 transition-all duration-500"
          style={{
            backgroundColor: isDark ? '#ffffff' : '#000000'
          }}
        >
          <div className="absolute inset-0 flex">
            <div
              className="flex-1 flex items-center justify-center transition-all duration-500"
              style={{
                backgroundColor: isDark ? '#000000' : '#ffffff',
                transform: isDark ? 'translateX(100%)' : 'translateX(0%)'
              }}
            >
              <svg className="w-10 h-10 transition-colors duration-500" style={{ color: isDark ? '#ffffff' : '#000000' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            </div>

            <div
              className="flex-1 flex items-center justify-center transition-all duration-500"
              style={{
                backgroundColor: isDark ? '#ffffff' : '#000000',
                transform: isDark ? 'translateX(0%)' : 'translateX(-100%)'
              }}
            >
              <svg className="w-10 h-10 transition-colors duration-500" style={{ color: isDark ? '#000000' : '#ffffff' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full border-4 transition-colors duration-500" style={{
            borderColor: isDark ? '#000000' : '#ffffff'
          }} />
        </div>
      </button>
    </div>
  );
}
