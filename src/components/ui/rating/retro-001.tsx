'use client';

import { useState } from 'react';

export default function RetroRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-[#f4e4c1] p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-10">
        {/* Header with Retro Border */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#d4a574] translate-x-2 translate-y-2" />
          <div className="relative bg-[#8b4513] border-4 border-[#654321] p-8 text-center">
            <h1 className="text-5xl font-black text-[#f4e4c1] tracking-wider" style={{ textShadow: '3px 3px 0px #654321' }}>
              RETRO RATING
            </h1>
            <p className="text-[#f4e4c1] mt-2 text-lg font-bold">Vintage vibes from the 70s</p>
          </div>
        </div>

        {/* Main Rating Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#d4a574] translate-x-3 translate-y-3" />
          <div className="relative bg-gradient-to-br from-[#ff6b35] to-[#f7931e] border-4 border-[#8b4513] p-10">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                {[1, 2, 3, 4, 5].map((index) => {
                  const isFilled = index <= displayRating;
                  const isHovered = index === hoverRating;

                  return (
                    <button
                      key={index}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHoverRating(index)}
                      onMouseLeave={() => setHoverRating(0)}
                      className={`relative w-16 h-16 transition-all duration-200 ${
                        isHovered ? 'scale-110' : ''
                      }`}
                    >
                      <div className={`absolute inset-0 bg-[#654321] translate-x-1 translate-y-1 ${isFilled ? 'opacity-100' : 'opacity-50'}`} />
                      <div className={`relative w-full h-full border-4 border-[#654321] flex items-center justify-center ${
                        isFilled ? 'bg-[#ffd700]' : 'bg-[#f4e4c1]'
                      }`}>
                        <svg
                          className="w-10 h-10"
                          viewBox="0 0 24 24"
                          fill={isFilled ? '#8b4513' : '#d4a574'}
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
                  <div className="absolute inset-0 bg-[#654321] translate-x-2 translate-y-2" />
                  <div className="relative bg-[#f4e4c1] border-4 border-[#654321] px-8 py-4">
                    <span className="text-5xl font-black text-[#8b4513]">{displayRating}.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vintage TV Style */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#654321] translate-x-3 translate-y-3" />
          <div className="relative bg-[#8b4513] border-8 border-[#654321] rounded-3xl p-8">
            <div className="bg-[#2a2a2a] border-4 border-[#1a1a1a] rounded-2xl p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-lg border-2"
                    style={{
                      borderColor: index <= 3 ? '#ffd700' : '#555',
                      backgroundColor: index <= 3 ? '#ffd700' : '#333',
                      boxShadow: index <= 3 ? '0 0 20px #ffd700' : 'none',
                    }}
                  >
                    <svg
                      className="w-full h-full p-2"
                      viewBox="0 0 24 24"
                      fill={index <= 3 ? '#8b4513' : '#555'}
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div
                  className="inline-block px-6 py-2 rounded-lg font-mono text-3xl font-bold"
                  style={{
                    backgroundColor: '#ffd700',
                    color: '#8b4513',
                    textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
                  }}
                >
                  3.0 STARS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Retro Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#d4a574] translate-x-2 translate-y-2" />
            <div className="relative bg-[#4ecdc4] border-4 border-[#2a9d8f] p-6">
              <h3 className="text-2xl font-black text-white mb-4 text-center">HALF STARS</h3>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((index) => {
                  const fillPercentage = Math.max(0, Math.min(100, (4.5 - index + 1) * 100));
                  return (
                    <div key={index} className="relative w-10 h-10">
                      <div className="absolute inset-0 bg-[#2a9d8f] translate-x-0.5 translate-y-0.5" />
                      <div className="relative w-full h-full bg-[#f4e4c1] border-2 border-[#2a9d8f]">
                        <svg className="w-full h-full p-1" viewBox="0 0 24 24" fill="none">
                          <defs>
                            <linearGradient id={`retro-half-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset={`${fillPercentage}%`} stopColor="#8b4513" />
                              <stop offset={`${fillPercentage}%`} stopColor="#d4a574" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                            fill={`url(#retro-half-${index})`}
                          />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-center mt-3 text-2xl font-black text-white">4.5</p>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#d4a574] translate-x-2 translate-y-2" />
            <div className="relative bg-[#e76f51] border-4 border-[#c44536] p-6">
              <h3 className="text-2xl font-black text-white mb-4 text-center">COMPACT</h3>
              <div className="flex items-center justify-center gap-1.5">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 border-2 border-[#c44536] ${
                      index <= 5 ? 'bg-[#ffd700]' : 'bg-[#f4e4c1]'
                    }`}
                  >
                    <svg
                      className="w-full h-full p-1"
                      viewBox="0 0 24 24"
                      fill={index <= 5 ? '#c44536' : '#d4a574'}
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-center mt-3 text-2xl font-black text-white">5.0</p>
            </div>
          </div>
        </div>

        {/* Circular Badges */}
        <div className="flex items-center justify-center gap-6">
          {[
            { rating: '2.5', color: 'bg-[#e76f51]', border: 'border-[#c44536]' },
            { rating: '3.0', color: 'bg-[#f7931e]', border: 'border-[#d4a574]' },
            { rating: '4.5', color: 'bg-[#4ecdc4]', border: 'border-[#2a9d8f]' },
            { rating: '5.0', color: 'bg-[#ffd700]', border: 'border-[#8b4513]' },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute inset-0 bg-[#654321] rounded-full translate-x-2 translate-y-2" />
              <div className={`relative w-24 h-24 rounded-full ${item.color} border-4 ${item.border} flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#654321]">{item.rating}</div>
                  <div className="text-xs font-bold text-[#654321]">STARS</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
