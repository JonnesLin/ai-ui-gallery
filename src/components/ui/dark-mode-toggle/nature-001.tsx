'use client';

import { useState } from 'react';

export default function NatureDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen transition-all duration-700" style={{
      background: isDark
        ? 'linear-gradient(to bottom, #1a2332 0%, #2d4059 100%)'
        : 'linear-gradient(to bottom, #a8dadc 0%, #f1faee 100%)'
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative group"
        aria-label="Toggle dark mode"
      >
        <div
          className="w-36 h-36 rounded-full transition-all duration-700 hover:scale-105"
          style={{
            background: isDark
              ? 'radial-gradient(circle at 40% 40%, #457b9d 0%, #1d3557 100%)'
              : 'radial-gradient(circle at 40% 40%, #ffd700 0%, #ffb700 100%)',
            boxShadow: isDark
              ? '0 10px 40px rgba(29, 53, 87, 0.5), inset -8px -8px 20px rgba(0, 0, 0, 0.3)'
              : '0 10px 40px rgba(255, 183, 0, 0.4), inset -8px -8px 20px rgba(255, 165, 0, 0.3)'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {isDark ? (
              <div className="relative">
                <svg className="w-16 h-16 text-sky-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold text-sky-300 tracking-wider">NIGHT</div>
              </div>
            ) : (
              <div className="relative">
                <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold text-orange-800 tracking-wider">DAY</div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute -top-12 left-1/2 -translate-x-1/2 transition-all duration-700">
          {isDark ? (
            <div className="flex gap-2">
              <div className="w-1 h-1 rounded-full bg-white opacity-80" />
              <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60" />
              <div className="w-1 h-1 rounded-full bg-white opacity-90" />
            </div>
          ) : (
            <div className="flex gap-1">
              <div className="w-8 h-4 rounded-full bg-white opacity-70" />
              <div className="w-6 h-4 rounded-full bg-white opacity-60" />
            </div>
          )}
        </div>
      </button>
    </div>
  );
}
