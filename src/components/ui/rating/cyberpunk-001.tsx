'use client';

import { useState } from 'react';

export default function CyberpunkRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-4xl w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-50" />
          <div className="relative bg-black border-2 border-cyan-400 p-8 text-center shadow-[0_0_30px_rgba(0,255,255,0.3)]">
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 uppercase tracking-wider">
              Cyberpunk Rating
            </h1>
            <div className="mt-2 text-cyan-400 font-mono text-sm tracking-widest">
              &gt; NEURAL_INTERFACE_ACTIVE
            </div>
          </div>
        </div>

        {/* Main Rating */}
        <div className="relative bg-black border-2 border-purple-500 p-10 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-6">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= displayRating;
                const isHovered = index === hoverRating;

                return (
                  <button
                    key={index}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHoverRating(index)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`relative w-16 h-16 transition-all duration-300 focus:outline-none ${
                      isHovered ? 'scale-125' : ''
                    }`}
                  >
                    <div
                      className={`absolute inset-0 blur-md ${
                        isFilled ? 'bg-cyan-400' : 'bg-gray-700'
                      }`}
                    />
                    <div
                      className={`relative w-full h-full border-2 ${
                        isFilled ? 'border-cyan-400 bg-cyan-500/20' : 'border-gray-700 bg-gray-900'
                      } clip-polygon flex items-center justify-center`}
                    >
                      <svg
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                        fill={isFilled ? '#22d3ee' : 'none'}
                        stroke={isFilled ? '#22d3ee' : '#4b5563'}
                        strokeWidth="2"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-lg" />
                <div className="relative bg-black border-2 border-cyan-400 px-10 py-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-cyan-400 font-mono">{displayRating}.0</span>
                    <span className="text-xl text-purple-400 font-mono">/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Hexagon Style */}
          <div className="relative bg-black border-2 border-pink-500 p-6 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
            <div className="text-pink-500 font-mono text-xs mb-3 tracking-wider">&gt; HEXAGON_MODE</div>
            <div className="flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= 3;
                return (
                  <div
                    key={index}
                    className="relative w-12 h-14"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <div
                      className={`w-full h-full ${
                        isFilled ? 'bg-pink-500' : 'bg-gray-800'
                      } border-2 ${
                        isFilled ? 'border-pink-400' : 'border-gray-700'
                      }`}
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    />
                    {isFilled && (
                      <div className="absolute inset-0 bg-pink-400 blur-md opacity-50" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 text-center">
              <span className="text-2xl font-black text-pink-400 font-mono">3.0</span>
            </div>
          </div>

          {/* Digital Display */}
          <div className="relative bg-black border-2 border-cyan-500 p-6 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <div className="text-cyan-500 font-mono text-xs mb-3 tracking-wider">&gt; DIGITAL_DISPLAY</div>
            <div className="bg-gray-950 border border-cyan-500/30 p-4">
              <div className="flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((index) => {
                  const isFilled = index <= 5;
                  return (
                    <div
                      key={index}
                      className={`w-8 h-8 font-mono text-xl font-black flex items-center justify-center ${
                        isFilled
                          ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                          : 'text-gray-700 border border-gray-800'
                      }`}
                    >
                      {index}
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 text-center">
                <span className="text-xl font-black text-cyan-400 font-mono tracking-wider">5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="relative bg-black border-2 border-purple-500 p-8 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          <div className="text-purple-500 font-mono text-xs mb-4 tracking-wider">&gt; RATING_DISTRIBUTION</div>
          <div className="space-y-4">
            {[
              { stars: 5, value: 85, color: 'from-cyan-500 to-cyan-400' },
              { stars: 4, value: 65, color: 'from-purple-500 to-purple-400' },
              { stars: 3, value: 45, color: 'from-pink-500 to-pink-400' },
              { stars: 2, value: 25, color: 'from-yellow-500 to-yellow-400' },
              { stars: 1, value: 10, color: 'from-red-500 to-red-400' },
            ].map((item) => (
              <div key={item.stars} className="flex items-center gap-4">
                <div className="w-16 text-cyan-400 font-mono font-bold">{item.stars} ★</div>
                <div className="flex-1 h-6 bg-gray-900 border border-gray-700 relative overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} transition-all duration-500 relative`}
                    style={{ width: `${item.value}%` }}
                  >
                    <div className="absolute inset-0 animate-pulse opacity-50 bg-white" />
                  </div>
                </div>
                <div className="w-16 text-right text-cyan-400 font-mono text-sm">{item.value}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Glitch Effect Rating */}
        <div className="relative bg-black border-2 border-pink-500 p-6 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
          <div className="text-pink-500 font-mono text-xs mb-4 tracking-wider">&gt; GLITCH_INTERFACE</div>
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, 4, 5].map((index) => {
              const isFilled = index <= 4;
              return (
                <button
                  key={index}
                  className="relative w-14 h-14 group"
                >
                  <div
                    className={`absolute inset-0 border-2 ${
                      isFilled ? 'border-pink-400 bg-pink-500/20' : 'border-gray-700 bg-gray-900'
                    } transition-all group-hover:scale-110`}
                    style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span
                        className={`text-2xl font-black font-mono ${
                          isFilled ? 'text-pink-400' : 'text-gray-600'
                        }`}
                      >
                        {index}
                      </span>
                    </div>
                  </div>
                  {isFilled && (
                    <div className="absolute inset-0 bg-pink-400 blur-lg opacity-30" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
