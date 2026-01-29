'use client';

import { useState } from 'react';

export default function PlayfulDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen transition-all duration-700" style={{
      backgroundColor: isDark ? '#2d1b69' : '#87ceeb'
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative group"
        aria-label="Toggle dark mode"
      >
        <div
          className="w-40 h-40 rounded-full transition-all duration-700 hover:rotate-12 hover:scale-110"
          style={{
            background: isDark
              ? 'radial-gradient(circle at 30% 30%, #4a3080, #2d1b69)'
              : 'radial-gradient(circle at 30% 30%, #ffeb3b, #ffc107)',
            boxShadow: isDark
              ? '0 10px 40px rgba(74, 48, 128, 0.6), inset -5px -5px 20px rgba(0, 0, 0, 0.3)'
              : '0 10px 40px rgba(255, 193, 7, 0.6), inset -5px -5px 20px rgba(255, 152, 0, 0.3)'
          }}
        >
          {isDark ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <svg className="w-20 h-20 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <div className="absolute top-8 left-6 w-2 h-2 rounded-full bg-indigo-900" />
                <div className="absolute top-12 left-10 w-2 h-2 rounded-full bg-indigo-900" />
                <div className="absolute top-10 left-8 w-3 h-1 rounded-full bg-indigo-900" style={{ transform: 'rotate(20deg)' }} />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-orange-500" />
                <div className="absolute top-6 left-5 w-3 h-3 rounded-full bg-orange-900" />
                <div className="absolute top-6 right-5 w-3 h-3 rounded-full bg-orange-900" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-orange-900" />
              </div>
            </div>
          )}
        </div>

        {isDark && (
          <>
            <div className="absolute top-4 right-8 w-1 h-1 rounded-full bg-yellow-200 animate-pulse" />
            <div className="absolute top-12 right-4 w-1.5 h-1.5 rounded-full bg-yellow-200 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="absolute bottom-12 right-6 w-1 h-1 rounded-full bg-yellow-200 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </>
        )}
      </button>
    </div>
  );
}
