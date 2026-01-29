'use client';

import { useState } from 'react';

export default function SketchDarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen transition-colors duration-500" style={{
      backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
      backgroundImage: isDark
        ? 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255, 255, 255, 0.03) 20px, rgba(255, 255, 255, 0.03) 40px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255, 255, 255, 0.03) 20px, rgba(255, 255, 255, 0.03) 40px)'
        : 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0, 0, 0, 0.02) 20px, rgba(0, 0, 0, 0.02) 40px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0, 0, 0, 0.02) 20px, rgba(0, 0, 0, 0.02) 40px)'
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative group"
        aria-label="Toggle dark mode"
      >
        <div
          className="w-32 h-32 rounded-full transition-all duration-500 hover:rotate-6"
          style={{
            backgroundColor: isDark ? '#2a2a2a' : '#f5f5f5',
            border: `3px dashed ${isDark ? '#666' : '#999'}`,
            boxShadow: isDark
              ? '4px 4px 0 0 #404040, 8px 8px 0 0 #333'
              : '4px 4px 0 0 #ddd, 8px 8px 0 0 #ccc'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {isDark ? (
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-dashed border-slate-400 flex items-center justify-center">
                  <svg className="w-10 h-10 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-1 bg-slate-400 transform rotate-45" />
                <div className="absolute -bottom-2 -left-2 w-8 h-1 bg-slate-400 transform -rotate-45" />
              </div>
            ) : (
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-dashed border-slate-600 flex items-center justify-center">
                  <svg className="w-10 h-10 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-1 bg-slate-600 transform rotate-45" />
                <div className="absolute -bottom-2 -left-2 w-8 h-1 bg-slate-600 transform -rotate-45" />
              </div>
            )}
          </div>
        </div>

        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center">
          <div className="text-sm font-bold transition-colors duration-500" style={{
            color: isDark ? '#888' : '#555',
            textDecoration: 'underline wavy'
          }}>
            {isDark ? 'Dark' : 'Light'}
          </div>
        </div>
      </button>
    </div>
  );
}
