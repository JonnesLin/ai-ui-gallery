'use client';

import { useState } from 'react';

export default function FuturisticRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);
  const [scanProgress, setScanProgress] = useState(4.3);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-gray-950 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 relative">
            FUTURISTIC RATING
          </h1>
          <p className="text-cyan-400 text-sm tracking-widest relative">ADVANCED RATING SYSTEM v2.0</p>
        </div>

        {/* Main Rating Display */}
        <div className="relative border border-cyan-500/30 bg-gradient-to-br from-gray-900 via-gray-950 to-black p-8 overflow-hidden">
          <div className="absolute inset-0 bg-grid-cyan-500/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

          <div className="relative space-y-8">
            <div className="flex items-center justify-center gap-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHoverRating(index)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="relative w-16 h-16 focus:outline-none group"
                >
                  <div className={`absolute inset-0 rounded-sm transition-all duration-300 ${
                    index <= displayRating
                      ? 'bg-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                      : 'bg-gray-800/30'
                  }`}>
                    <div className="absolute inset-0 border border-cyan-500/40"></div>
                    {index <= displayRating && (
                      <>
                        <div className="absolute inset-0 border border-cyan-400 animate-pulse"></div>
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                      </>
                    )}
                  </div>
                  <svg className="relative w-full h-full p-3" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      stroke={index <= displayRating ? '#06B6D4' : '#374151'}
                      strokeWidth="1.5"
                      fill={index <= displayRating ? 'rgba(6, 182, 212, 0.3)' : 'transparent'}
                    />
                  </svg>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                <span className="text-3xl font-mono font-bold text-cyan-400">{displayRating}.0</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
              <span className="text-cyan-400/60 text-sm font-mono">RATING LOCKED</span>
            </div>
          </div>
        </div>

        {/* Secondary Displays */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hexagon Rating */}
          <div className="border border-purple-500/30 bg-gray-900/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-purple-400 font-mono text-sm">HEX_RATING</h3>
              <div className="h-px flex-1 ml-4 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
            </div>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`w-10 h-12 relative ${
                    index <= 3 ? 'opacity-100' : 'opacity-30'
                  }`}
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  <div className={`absolute inset-0 ${
                    index <= 3 ? 'bg-purple-500' : 'bg-gray-700'
                  }`}></div>
                  {index <= 3 && (
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-400 to-purple-600"></div>
                  )}
                </div>
              ))}
              <span className="ml-3 text-purple-400 font-mono text-sm">3/5</span>
            </div>
          </div>

          {/* Scan Line Rating */}
          <div className="border border-blue-500/30 bg-gray-900/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-blue-400 font-mono text-sm">SCAN_RATING</h3>
              <div className="h-px flex-1 ml-4 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-blue-400/60">
                <span>0.0</span>
                <span>5.0</span>
              </div>
              <div className="relative h-4 bg-gray-800 border border-blue-500/30">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-cyan-500"
                  style={{ width: `${(scanProgress / 5) * 100}%` }}
                ></div>
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"
                  style={{ width: '20%', left: `${(scanProgress / 5) * 100 - 10}%` }}
                ></div>
              </div>
              <div className="text-center">
                <span className="text-blue-400 font-mono font-bold">{scanProgress.toFixed(1)}</span>
              </div>
            </div>
          </div>

          {/* Digital Counter */}
          <div className="border border-green-500/30 bg-gray-900/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-green-400 font-mono text-sm">DIGITAL_COUNT</h3>
              <div className="h-px flex-1 ml-4 bg-gradient-to-r from-green-500/50 to-transparent"></div>
            </div>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`w-10 h-10 border flex items-center justify-center font-mono font-bold ${
                    index <= 4
                      ? 'border-green-500 bg-green-500/20 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]'
                      : 'border-gray-700 bg-gray-800/50 text-gray-600'
                  }`}
                >
                  {index}
                </div>
              ))}
            </div>
          </div>

          {/* Circle Progress */}
          <div className="border border-cyan-500/30 bg-gray-900/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-cyan-400 font-mono text-sm">CIRCLE_PROGRESS</h3>
              <div className="h-px flex-1 ml-4 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
            </div>
            <div className="flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((index) => {
                const percentage = index <= 4 ? 100 : 0;
                const circumference = 2 * Math.PI * 14;
                const strokeDashoffset = circumference - (percentage / 100) * circumference;

                return (
                  <div key={index} className="relative w-10 h-10">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 32 32">
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        stroke="#1F2937"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        stroke={index <= 4 ? '#06B6D4' : '#374151'}
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-xs font-mono ${index <= 4 ? 'text-cyan-400' : 'text-gray-600'}`}>
                        {index}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="border border-cyan-500/30 bg-gray-900/50 p-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-4">
              <span className="text-green-400">● SYSTEM ONLINE</span>
              <span className="text-cyan-400">RATING: {displayRating}.0</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">[</span>
              <span className="text-cyan-400 animate-pulse">_</span>
              <span className="text-gray-500">]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
