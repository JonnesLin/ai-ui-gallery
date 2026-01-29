'use client';

import { useState } from 'react';

export default function NeonSearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Large Size - Pink Neon */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-pink-500 uppercase tracking-widest" style={{
            textShadow: '0 0 10px rgba(236, 72, 153, 0.8), 0 0 20px rgba(236, 72, 153, 0.5)'
          }}>
            Neon Search
          </label>
          <div className="relative">
            <div className="absolute -inset-1 bg-pink-500 rounded-lg blur-xl opacity-30 animate-pulse" />
            <div className={`relative bg-gray-950 rounded-lg transition-all ${
              isActive
                ? 'shadow-[0_0_20px_rgba(236,72,153,0.6),0_0_40px_rgba(236,72,153,0.4),inset_0_0_20px_rgba(236,72,153,0.1)]'
                : 'shadow-[0_0_10px_rgba(236,72,153,0.4),0_0_20px_rgba(236,72,153,0.2)]'
            }`} style={{
              border: '2px solid rgb(236, 72, 153)',
              boxShadow: isActive
                ? '0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.4), inset 0 0 20px rgba(236, 72, 153, 0.1)'
                : '0 0 10px rgba(236, 72, 153, 0.4), 0 0 20px rgba(236, 72, 153, 0.2)'
            }}>
              <div className="flex items-center px-6 py-5">
                <div className="mr-4 relative">
                  <div className="absolute inset-0 bg-pink-500 rounded-full blur-md" />
                  <div className="relative w-12 h-12 bg-gray-950 border-2 border-pink-500 rounded-full flex items-center justify-center" style={{
                    boxShadow: '0 0 15px rgba(236, 72, 153, 0.8), inset 0 0 10px rgba(236, 72, 153, 0.2)'
                  }}>
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setIsActive(true)}
                  onBlur={() => setIsActive(false)}
                  placeholder="Enter the neon world..."
                  className="flex-1 text-lg bg-transparent text-pink-400 placeholder:text-pink-900 outline-none font-mono"
                  style={{ textShadow: '0 0 5px rgba(236, 72, 153, 0.5)' }}
                />
                {searchValue && (
                  <button
                    onClick={() => setSearchValue('')}
                    className="ml-4 px-5 py-2 bg-gray-950 border-2 border-pink-500 text-pink-500 font-mono text-sm uppercase tracking-wider transition-all hover:bg-pink-500 hover:text-gray-950"
                    style={{ boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)' }}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Medium Size - Cyan Neon */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-cyan-400 uppercase tracking-widest" style={{
            textShadow: '0 0 10px rgba(34, 211, 238, 0.8), 0 0 20px rgba(34, 211, 238, 0.5)'
          }}>
            Cyber Search
          </label>
          <div className="relative bg-gray-950 rounded-md px-5 py-4" style={{
            border: '2px solid rgb(34, 211, 238)',
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.5), 0 0 30px rgba(34, 211, 238, 0.2)'
          }}>
            <div className="absolute -inset-1 bg-cyan-400 rounded-md blur-lg opacity-20 animate-pulse" />
            <div className="relative flex items-center">
              <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{
                filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.8))'
              }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search the matrix..."
                className="flex-1 text-base bg-transparent text-cyan-300 placeholder:text-cyan-900 outline-none font-mono"
                style={{ textShadow: '0 0 5px rgba(34, 211, 238, 0.5)' }}
              />
            </div>
          </div>
        </div>

        {/* Small Size - Purple Neon */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-purple-400 uppercase tracking-widest" style={{
            textShadow: '0 0 10px rgba(168, 85, 247, 0.8)'
          }}>
            Glow Search
          </label>
          <div className="flex items-center bg-gray-950 rounded px-4 py-3" style={{
            border: '1px solid rgb(168, 85, 247)',
            boxShadow: '0 0 10px rgba(168, 85, 247, 0.4), 0 0 20px rgba(168, 85, 247, 0.2)'
          }}>
            <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{
              filter: 'drop-shadow(0 0 6px rgba(168, 85, 247, 0.8))'
            }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Find..."
              className="flex-1 text-sm bg-transparent text-purple-300 placeholder:text-purple-900 outline-none font-mono"
              style={{ textShadow: '0 0 3px rgba(168, 85, 247, 0.5)' }}
            />
          </div>
        </div>

        {/* Extra - Multi-color Neon */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-white uppercase tracking-widest" style={{
            background: 'linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.5))'
          }}>
            Rainbow Neon
          </label>
          <div className="relative bg-gray-950 rounded-lg px-5 py-3.5" style={{
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(gray-950, gray-950), linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6, #06b6d4)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.3), 0 0 20px rgba(139, 92, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.3)'
          }}>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="url(#gradient)" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ec4899' }} />
                    <stop offset="50%" style={{ stopColor: '#8b5cf6' }} />
                    <stop offset="100%" style={{ stopColor: '#06b6d4' }} />
                  </linearGradient>
                </defs>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Rainbow search..."
                className="flex-1 text-base bg-transparent text-white placeholder:text-gray-600 outline-none font-mono"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
