'use client';

import { useState } from 'react';

export default function NatureRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);
  const [leafRating, setLeafRating] = useState(3);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-bold text-green-800">Nature Rating</h1>
          <p className="text-green-600">Organic shapes and natural colors</p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Main Rating Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-green-200">
          <div className="space-y-8">
            <h2 className="text-xl text-green-700 font-semibold text-center">Flower Rating</h2>
            <div className="flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHoverRating(index)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="relative w-16 h-16 focus:outline-none transition-transform hover:scale-110 group"
                >
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                    <defs>
                      <radialGradient id={`flower-${index}`} cx="50%" cy="50%">
                        <stop offset="0%" stopColor={index <= displayRating ? '#FCD34D' : '#D1D5DB'} />
                        <stop offset="50%" stopColor={index <= displayRating ? '#F59E0B' : '#9CA3AF'} />
                        <stop offset="100%" stopColor={index <= displayRating ? '#D97706' : '#6B7280'} />
                      </radialGradient>
                    </defs>
                    {/* Petals */}
                    <circle cx="12" cy="6" r="3" fill={`url(#flower-${index})`} opacity="0.9" />
                    <circle cx="18" cy="12" r="3" fill={`url(#flower-${index})`} opacity="0.9" />
                    <circle cx="12" cy="18" r="3" fill={`url(#flower-${index})`} opacity="0.9" />
                    <circle cx="6" cy="12" r="3" fill={`url(#flower-${index})`} opacity="0.9" />
                    {/* Center */}
                    <circle cx="12" cy="12" r="3.5" fill={index <= displayRating ? '#15803D' : '#6B7280'} />
                  </svg>
                </button>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-8 py-4 border-2 border-green-300">
                <span className="text-3xl font-bold text-green-800">{displayRating}.0</span>
                <div className="w-px h-6 bg-green-400"></div>
                <span className="text-green-600">out of 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Leaf Rating */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 shadow-lg">
            <h3 className="text-green-700 font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl">🍃</span>
              Leaf Rating
            </h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setLeafRating(index)}
                  className="w-10 h-10 transition-transform hover:scale-110"
                >
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C12 2 6 6 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 6 12 2 12 2Z"
                      fill={index <= leafRating ? '#22C55E' : '#D1D5DB'}
                      stroke={index <= leafRating ? '#15803D' : '#9CA3AF'}
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 2C12 2 12 8 12 12"
                      stroke={index <= leafRating ? '#15803D' : '#9CA3AF'}
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              ))}
            </div>
            <p className="text-center text-green-600 mt-3 font-medium">{leafRating} / 5</p>
          </div>

          {/* Tree Growth */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 shadow-lg">
            <h3 className="text-green-700 font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl">🌳</span>
              Growth Rating
            </h3>
            <div className="flex items-end justify-center gap-3">
              {[1, 2, 3, 4, 5].map((index) => {
                const height = index * 12;
                return (
                  <div
                    key={index}
                    className={`w-8 rounded-t-full transition-all ${
                      index <= 4 ? 'bg-gradient-to-t from-green-600 to-green-400' : 'bg-gray-300'
                    }`}
                    style={{ height: `${height}px` }}
                  ></div>
                );
              })}
            </div>
            <p className="text-center text-green-600 mt-4 font-medium">4 / 5 Growth</p>
          </div>

          {/* Sunshine Rating */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 shadow-lg">
            <h3 className="text-green-700 font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl">☀️</span>
              Sunshine Rating
            </h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="relative w-12 h-12">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      fill={index <= 5 ? '#FCD34D' : '#D1D5DB'}
                    />
                    {index <= 5 && (
                      <>
                        <path d="M12 2v2M12 20v2M22 12h-2M4 12H2M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M19.07 19.07l-1.41-1.41M6.34 6.34L4.93 4.93"
                          stroke="#F59E0B"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </>
                    )}
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-center text-amber-600 mt-3 font-medium">Perfect!</p>
          </div>

          {/* Water Drops */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 shadow-lg">
            <h3 className="text-green-700 font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl">💧</span>
              Water Rating
            </h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="w-10 h-12">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2.69L17.66 9.88C18.54 11.06 19 12.49 19 14C19 18.42 15.42 22 11 22C6.58 22 3 18.42 3 14C3 12.49 3.46 11.06 4.34 9.88L12 2.69Z"
                      fill={index <= 3 ? '#3B82F6' : '#D1D5DB'}
                      stroke={index <= 3 ? '#1E40AF' : '#9CA3AF'}
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-center text-blue-600 mt-3 font-medium">3 / 5 Hydration</p>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg">
          <h3 className="text-green-700 font-semibold mb-6 text-center">Ecosystem Health</h3>
          <div className="space-y-4">
            {[
              { label: 'Biodiversity', value: 92, color: 'from-green-400 to-green-600' },
              { label: 'Air Quality', value: 88, color: 'from-blue-400 to-blue-600' },
              { label: 'Water Purity', value: 95, color: 'from-cyan-400 to-cyan-600' },
              { label: 'Soil Health', value: 85, color: 'from-amber-400 to-amber-600' },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between text-sm text-green-700">
                  <span className="font-medium">{item.label}</span>
                  <span className="font-bold">{item.value}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="text-green-600 font-medium">Sustainable Rating System</span>
            <span className="text-2xl">🌿</span>
          </div>
        </div>
      </div>
    </div>
  );
}
