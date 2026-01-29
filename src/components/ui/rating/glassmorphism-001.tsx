'use client';

import { useState } from 'react';

export default function GlassmorphismRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full space-y-8">
        {/* Main Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">Glassmorphism Rating</h1>
            <p className="text-white/80">Frosted glass effect with vibrant colors</p>

            {/* Large Rating */}
            <div className="py-8">
              <div className="flex items-center justify-center gap-3">
                {[1, 2, 3, 4, 5].map((index) => {
                  const fillPercentage = Math.max(0, Math.min(100, (displayRating - index + 1) * 100));
                  const isFilled = index <= Math.floor(displayRating);
                  const isHalf = index === Math.ceil(displayRating) && displayRating % 1 !== 0;

                  return (
                    <button
                      key={index}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHoverRating(index)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="relative w-16 h-16 focus:outline-none focus:scale-110 transition-transform duration-200"
                    >
                      <svg
                        className="w-full h-full drop-shadow-lg"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <defs>
                          <linearGradient id={`glass-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset={`${fillPercentage}%`} stopColor="#FFD700" stopOpacity="1" />
                            <stop offset={`${fillPercentage}%`} stopColor="#FFFFFF" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill={`url(#glass-gradient-${index})`}
                          stroke="white"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl px-6 py-3 inline-block">
                <p className="text-3xl font-bold text-white">{displayRating}.0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4">Medium Size</h3>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => {
                const fillPercentage = Math.max(0, Math.min(100, (3.5 - index + 1) * 100));
                return (
                  <div key={index} className="w-10 h-10">
                    <svg className="w-full h-full drop-shadow" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id={`glass-md-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset={`${fillPercentage}%`} stopColor="#FFD700" />
                          <stop offset={`${fillPercentage}%`} stopColor="#FFFFFF" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill={`url(#glass-md-${index})`}
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                );
              })}
              <span className="ml-2 text-white font-medium">3.5</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4">Small Size</h3>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((index) => {
                const fillPercentage = Math.max(0, Math.min(100, (4.8 - index + 1) * 100));
                return (
                  <div key={index} className="w-6 h-6">
                    <svg className="w-full h-full drop-shadow" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id={`glass-sm-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset={`${fillPercentage}%`} stopColor="#FFD700" />
                          <stop offset={`${fillPercentage}%`} stopColor="#FFFFFF" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill={`url(#glass-sm-${index})`}
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                );
              })}
              <span className="ml-2 text-white text-sm">4.8</span>
            </div>
          </div>
        </div>

        {/* Heart Variant */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4 text-center">Heart Variant</h3>
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((index) => {
              const isFilled = index <= 3;
              return (
                <button
                  key={index}
                  className="w-12 h-12 focus:outline-none hover:scale-110 transition-transform"
                >
                  <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill={isFilled ? '#FF69B4' : 'rgba(255, 255, 255, 0.2)'}
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
