'use client';

import { useState } from 'react';

export default function LuxuryRating() {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block">
            <h1 className="text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200">
              Luxury Rating
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-2"></div>
          </div>
          <p className="text-amber-100/60 text-sm tracking-[0.3em] uppercase">Excellence Personified</p>
        </div>

        {/* Main Rating */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>

          <div className="relative space-y-8">
            <div className="flex items-center justify-center gap-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHoverRating(index)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="relative w-20 h-20 focus:outline-none group transition-transform hover:scale-110"
                >
                  <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" viewBox="0 0 24 24" fill="none">
                    <defs>
                      <linearGradient id={`luxury-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FDE68A" />
                        <stop offset="50%" stopColor="#FBBF24" />
                        <stop offset="100%" stopColor="#D97706" />
                      </linearGradient>
                      <filter id={`glow-${index}`}>
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill={index <= displayRating ? `url(#luxury-gradient-${index})` : 'rgba(75, 85, 99, 0.3)'}
                      stroke={index <= displayRating ? '#FBBF24' : '#4B5563'}
                      strokeWidth="0.5"
                      filter={index <= displayRating ? `url(#glow-${index})` : ''}
                    />
                  </svg>
                </button>
              ))}
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-950/50 via-amber-900/30 to-amber-950/50 border border-amber-500/30">
                <span className="text-5xl font-serif font-bold text-amber-400">{displayRating}</span>
                <div className="w-px h-8 bg-amber-500/30"></div>
                <span className="text-xl text-amber-400/60">5</span>
              </div>
              <p className="text-amber-100/40 text-xs tracking-widest uppercase">Rating Score</p>
            </div>
          </div>
        </div>

        {/* Secondary Ratings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Diamond Rating */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/30"></div>
                <h3 className="text-amber-400 font-serif text-sm tracking-widest">DIAMOND</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/30"></div>
              </div>
              <div className="flex items-center justify-center gap-3">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rotate-45 ${
                      index <= 4
                        ? 'bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                        : 'bg-gray-700/30'
                    }`}
                  ></div>
                ))}
              </div>
              <p className="text-center text-amber-400 font-serif">4 / 5</p>
            </div>
          </div>

          {/* Crown Rating */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/30"></div>
                <h3 className="text-amber-400 font-serif text-sm tracking-widest">CROWN</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/30"></div>
              </div>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="w-10 h-10">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2L14 8L18 6L16 12H20V18H4V12H8L6 6L10 8L12 2Z"
                        fill={index <= 5 ? 'url(#crown-gradient)' : 'rgba(75, 85, 99, 0.3)'}
                        stroke={index <= 5 ? '#FBBF24' : '#4B5563'}
                        strokeWidth="0.5"
                      />
                      <defs>
                        <linearGradient id="crown-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FDE68A" />
                          <stop offset="100%" stopColor="#D97706" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-center text-amber-400 font-serif">Perfect</p>
            </div>
          </div>

          {/* Percentage Bar */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/30"></div>
                <h3 className="text-amber-400 font-serif text-sm tracking-widest">PRESTIGE</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/30"></div>
              </div>
              <div className="space-y-3">
                <div className="relative h-2 bg-gray-800 border border-amber-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600" style={{ width: '92%' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent animate-pulse"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400/60 text-xs font-serif">Exceptional</span>
                  <span className="text-amber-400 font-serif font-bold">4.6 / 5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Stars */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/30"></div>
                <h3 className="text-amber-400 font-serif text-sm tracking-widest">COMPACT</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/30"></div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="w-6 h-6">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill={index <= 3 ? '#FBBF24' : 'rgba(75, 85, 99, 0.3)'}
                        />
                      </svg>
                    </div>
                  ))}
                  <span className="ml-2 text-amber-400 text-sm font-serif">3.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-amber-400/40 text-xs tracking-widest">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-500/30"></div>
            <span>LUXURY COLLECTION</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-500/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
