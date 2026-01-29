'use client';

import { useState } from 'react';

export default function NeonRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-gray-950 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1
            className="text-6xl font-black text-pink-500"
            style={{
              textShadow: '0 0 10px #EC4899, 0 0 20px #EC4899, 0 0 30px #EC4899, 0 0 40px #EC4899'
            }}
          >
            NEON RATING
          </h1>
          <p
            className="text-cyan-400 tracking-widest"
            style={{
              textShadow: '0 0 5px #22D3EE, 0 0 10px #22D3EE'
            }}
          >
            ELECTRIFYING GLOW EFFECTS
          </p>
        </div>

        {/* Main Rating */}
        <div className="bg-black border-2 border-pink-500 rounded-lg p-10 relative overflow-hidden"
          style={{
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), inset 0 0 20px rgba(236, 72, 153, 0.1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-500/10"></div>

          <div className="relative space-y-8">
            <div className="flex items-center justify-center gap-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHoverRating(index)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="relative w-16 h-16 focus:outline-none transition-all hover:scale-110"
                >
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                    <defs>
                      <filter id={`neon-glow-${index}`}>
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill={index <= displayRating ? '#EC4899' : 'none'}
                      stroke={index <= displayRating ? '#EC4899' : '#4B5563'}
                      strokeWidth="2"
                      filter={index <= displayRating ? `url(#neon-glow-${index})` : ''}
                      style={{
                        filter: index <= displayRating
                          ? 'drop-shadow(0 0 5px #EC4899) drop-shadow(0 0 10px #EC4899)'
                          : 'none'
                      }}
                    />
                  </svg>
                </button>
              ))}
            </div>

            <div className="text-center">
              <div
                className="inline-block border-2 border-cyan-400 bg-black px-8 py-4"
                style={{
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.6), inset 0 0 10px rgba(34, 211, 238, 0.2)'
                }}
              >
                <span
                  className="text-4xl font-black text-cyan-400"
                  style={{
                    textShadow: '0 0 10px #22D3EE, 0 0 20px #22D3EE'
                  }}
                >
                  {displayRating}.0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Variant Displays */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Heart Neon */}
          <div
            className="bg-black border-2 border-pink-500 rounded-lg p-6"
            style={{
              boxShadow: '0 0 15px rgba(236, 72, 153, 0.4)'
            }}
          >
            <h3
              className="text-pink-400 font-bold mb-4 text-center"
              style={{
                textShadow: '0 0 5px #F472B6'
              }}
            >
              HEART RATING
            </h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="w-10 h-10">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill={index <= 3 ? '#EC4899' : 'none'}
                      stroke={index <= 3 ? '#EC4899' : '#4B5563'}
                      strokeWidth="2"
                      style={{
                        filter: index <= 3 ? 'drop-shadow(0 0 5px #EC4899) drop-shadow(0 0 10px #EC4899)' : 'none'
                      }}
                    />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-center text-pink-400 mt-3 font-bold">3 / 5</p>
          </div>

          {/* Circle Progress */}
          <div
            className="bg-black border-2 border-purple-500 rounded-lg p-6"
            style={{
              boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)'
            }}
          >
            <h3
              className="text-purple-400 font-bold mb-4 text-center"
              style={{
                textShadow: '0 0 5px #A855F7'
              }}
            >
              CIRCLE PROGRESS
            </h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => {
                const percentage = index <= 4 ? 100 : 0;
                const circumference = 2 * Math.PI * 16;
                const strokeDashoffset = circumference - (percentage / 100) * circumference;

                return (
                  <div key={index} className="relative w-12 h-12">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        stroke="#374151"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        stroke={index <= 4 ? '#A855F7' : '#374151'}
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{
                          filter: index <= 4 ? 'drop-shadow(0 0 3px #A855F7)' : 'none'
                        }}
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-purple-400 mt-3 font-bold">4 / 5</p>
          </div>

          {/* Bar Meter */}
          <div
            className="bg-black border-2 border-green-500 rounded-lg p-6"
            style={{
              boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)'
            }}
          >
            <h3
              className="text-green-400 font-bold mb-4 text-center"
              style={{
                textShadow: '0 0 5px #22C55E'
              }}
            >
              POWER METER
            </h3>
            <div className="space-y-3">
              <div className="h-6 bg-gray-900 border border-green-500/30 relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-green-500"
                  style={{
                    width: '87%',
                    boxShadow: '0 0 10px #22C55E, inset 0 0 10px rgba(34, 197, 94, 0.5)'
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-sm">
                <span
                  className="text-green-400"
                  style={{
                    textShadow: '0 0 5px #22C55E'
                  }}
                >
                  87%
                </span>
                <span className="text-gray-500">CHARGED</span>
              </div>
            </div>
          </div>

          {/* Number Rating */}
          <div
            className="bg-black border-2 border-yellow-500 rounded-lg p-6"
            style={{
              boxShadow: '0 0 15px rgba(234, 179, 8, 0.4)'
            }}
          >
            <h3
              className="text-yellow-400 font-bold mb-4 text-center"
              style={{
                textShadow: '0 0 5px #EAB308'
              }}
            >
              NUMBER RATING
            </h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`w-10 h-10 border-2 flex items-center justify-center font-black ${
                    index <= 5 ? 'border-yellow-500 text-yellow-400' : 'border-gray-700 text-gray-600'
                  }`}
                  style={
                    index <= 5
                      ? {
                          boxShadow: '0 0 10px rgba(234, 179, 8, 0.5)',
                          textShadow: '0 0 5px #EAB308'
                        }
                      : {}
                  }
                >
                  {index}
                </div>
              ))}
            </div>
            <p
              className="text-center text-yellow-400 mt-3 font-bold"
              style={{
                textShadow: '0 0 5px #EAB308'
              }}
            >
              PERFECT
            </p>
          </div>
        </div>

        {/* Multi-color Bar */}
        <div
          className="bg-black border-2 border-white/20 rounded-lg p-8"
          style={{
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
          }}
        >
          <h3
            className="text-white font-bold mb-6 text-center text-xl"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
            }}
          >
            SPECTRUM RATING
          </h3>
          <div className="space-y-4">
            {[
              { label: 'EXCELLENT', value: 95, color: '#EC4899', glow: 'rgba(236, 72, 153, 0.5)' },
              { label: 'GREAT', value: 82, color: '#A855F7', glow: 'rgba(168, 85, 247, 0.5)' },
              { label: 'GOOD', value: 68, color: '#22D3EE', glow: 'rgba(34, 211, 238, 0.5)' },
              { label: 'FAIR', value: 45, color: '#22C55E', glow: 'rgba(34, 197, 94, 0.5)' },
              { label: 'POOR', value: 15, color: '#EAB308', glow: 'rgba(234, 179, 8, 0.5)' },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span
                    style={{
                      color: item.color,
                      textShadow: `0 0 5px ${item.color}`
                    }}
                    className="font-bold"
                  >
                    {item.label}
                  </span>
                  <span style={{ color: item.color }}>{item.value}%</span>
                </div>
                <div className="h-2 bg-gray-900 border border-white/10">
                  <div
                    className="h-full"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: item.color,
                      boxShadow: `0 0 10px ${item.glow}, inset 0 0 5px ${item.glow}`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p
            className="text-pink-500 font-black tracking-widest text-sm"
            style={{
              textShadow: '0 0 5px #EC4899, 0 0 10px #EC4899'
            }}
          >
            ⚡ POWERED BY NEON ⚡
          </p>
        </div>
      </div>
    </div>
  );
}
