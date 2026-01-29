'use client';

import { useState } from 'react';

export default function BrutalistDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen transition-colors duration-300" style={{ backgroundColor: isDark ? '#000000' : '#ffffff' }}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative w-40 h-20 transition-all duration-300 hover:translate-x-1 hover:translate-y-1"
        style={{
          backgroundColor: isDark ? '#ffffff' : '#000000',
          border: `6px solid ${isDark ? '#000000' : '#ffffff'}`,
          boxShadow: isDark
            ? '8px 8px 0 0 #000000'
            : '8px 8px 0 0 #000000'
        }}
        aria-label="Toggle dark mode"
      >
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <span className="font-black text-2xl" style={{ color: isDark ? '#000000' : '#ffffff' }}>
            {isDark ? 'DARK' : 'LIGHT'}
          </span>
          <div className="w-8 h-8 border-4 transition-all duration-300" style={{
            borderColor: isDark ? '#000000' : '#ffffff',
            backgroundColor: isDark ? '#000000' : '#ffffff'
          }}>
            {isDark && (
              <div className="w-full h-full" style={{ backgroundColor: '#ffffff' }} />
            )}
          </div>
        </div>
      </button>
    </div>
  );
}
