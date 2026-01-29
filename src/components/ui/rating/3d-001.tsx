'use client';

import { useState } from 'react';

export default function ThreeDRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);
  const [emojiRating, setEmojiRating] = useState(3);
  const [numberRating, setNumberRating] = useState(7);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1
            className="text-5xl font-bold text-white"
            style={{
              textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2), 0 16px 32px rgba(0,0,0,0.1)'
            }}
          >
            3D Rating
          </h1>
          <p className="text-slate-300 text-lg">Elevated depth & multi-layered shadows</p>
        </div>

        {/* Main Interactive Star Rating */}
        <div
          className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-10 transform perspective-1000"
          style={{
            boxShadow: '0 10px 20px rgba(0,0,0,0.3), 0 20px 40px rgba(0,0,0,0.2), 0 40px 80px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.5)'
          }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          >
            Rate Your Experience
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3, 4, 5].map((index) => {
              const isFilled = index <= displayRating;
              const isHovered = index === hoverRating;

              return (
                <button
                  key={index}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHoverRating(index)}
                  onMouseLeave={() => setHoverRating(0)}
                  className={`relative w-20 h-20 rounded-xl transition-all duration-200 focus:outline-none ${
                    isHovered ? 'scale-110' : 'scale-100'
                  }`}
                  style={{
                    background: isFilled
                      ? 'linear-gradient(145deg, #fbbf24, #f59e0b)'
                      : 'linear-gradient(145deg, #e5e7eb, #d1d5db)',
                    boxShadow: isFilled
                      ? '0 4px 8px rgba(251,191,36,0.3), 0 8px 16px rgba(245,158,11,0.2), 0 16px 32px rgba(217,119,6,0.1), inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)'
                      : '0 4px 8px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.1)',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  <svg
                    className={`w-full h-full p-4 ${isFilled ? 'text-white' : 'text-slate-400'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{
                      filter: isFilled
                        ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                        : 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))'
                    }}
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </button>
              );
            })}
          </div>

          <div className="flex justify-center">
            <div
              className="px-8 py-4 rounded-xl"
              style={{
                background: 'linear-gradient(145deg, #3b82f6, #2563eb)',
                boxShadow: '0 6px 12px rgba(59,130,246,0.3), 0 12px 24px rgba(37,99,235,0.2), 0 24px 48px rgba(29,78,216,0.1), inset 0 2px 4px rgba(255,255,255,0.2)',
              }}
            >
              <span className="text-4xl font-bold text-white"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                {displayRating}.0
              </span>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Half Star Rating */}
          <div
            className="bg-gradient-to-br from-white to-slate-100 rounded-xl p-6"
            style={{
              boxShadow: '0 8px 16px rgba(0,0,0,0.2), 0 16px 32px rgba(0,0,0,0.15), 0 32px 64px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.5)'
            }}
          >
            <h3 className="text-lg font-bold text-slate-800 mb-4"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            >
              Half Star Rating
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((index) => {
                  const fillPercentage = Math.max(0, Math.min(100, (3.5 - index + 1) * 100));
                  return (
                    <div key={index} className="w-8 h-8">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                        <defs>
                          <linearGradient id={`3d-half-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset={`${fillPercentage}%`} stopColor="#10b981" />
                            <stop offset={`${fillPercentage}%`} stopColor="#cbd5e1" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill={`url(#3d-half-${index})`}
                          style={{
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2)) drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                          }}
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
              <span className="text-sm font-semibold text-slate-700 ml-2">3.5 / 5.0</span>
            </div>
          </div>

          {/* Emoji Rating */}
          <div
            className="bg-gradient-to-br from-white to-slate-100 rounded-xl p-6"
            style={{
              boxShadow: '0 8px 16px rgba(0,0,0,0.2), 0 16px 32px rgba(0,0,0,0.15), 0 32px 64px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.5)'
            }}
          >
            <h3 className="text-lg font-bold text-slate-800 mb-4"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            >
              Emoji Rating
            </h3>
            <div className="flex items-center justify-between gap-2">
              {[
                { emoji: '😢', color: '#ef4444' },
                { emoji: '😕', color: '#f97316' },
                { emoji: '😐', color: '#eab308' },
                { emoji: '😊', color: '#84cc16' },
                { emoji: '😍', color: '#10b981' },
              ].map((item, index) => {
                const isActive = index + 1 === emojiRating;
                return (
                  <button
                    key={index}
                    onClick={() => setEmojiRating(index + 1)}
                    className={`w-12 h-12 rounded-lg transition-all duration-200 flex items-center justify-center ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}
                    style={{
                      background: isActive
                        ? `linear-gradient(145deg, ${item.color}, ${item.color}dd)`
                        : 'linear-gradient(145deg, #f1f5f9, #e2e8f0)',
                      boxShadow: isActive
                        ? `0 4px 8px ${item.color}40, 0 8px 16px ${item.color}30, 0 16px 32px ${item.color}20, inset 0 1px 2px rgba(255,255,255,0.3)`
                        : '0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05), inset 0 1px 2px rgba(255,255,255,0.5)',
                    }}
                  >
                    <span className="text-2xl"
                      style={{
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                      }}
                    >
                      {item.emoji}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Number Rating */}
          <div
            className="bg-gradient-to-br from-white to-slate-100 rounded-xl p-6"
            style={{
              boxShadow: '0 8px 16px rgba(0,0,0,0.2), 0 16px 32px rgba(0,0,0,0.15), 0 32px 64px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.5)'
            }}
          >
            <h3 className="text-lg font-bold text-slate-800 mb-4"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            >
              Number Rating (1-10)
            </h3>
            <div className="flex items-center justify-between gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                const isActive = num === numberRating;
                return (
                  <button
                    key={num}
                    onClick={() => setNumberRating(num)}
                    className={`w-9 h-9 rounded-lg text-sm font-bold transition-all duration-200 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(145deg, #8b5cf6, #7c3aed)'
                        : 'linear-gradient(145deg, #f1f5f9, #e2e8f0)',
                      color: isActive ? '#fff' : '#64748b',
                      boxShadow: isActive
                        ? '0 4px 8px rgba(139,92,246,0.3), 0 8px 16px rgba(124,58,237,0.2), 0 16px 32px rgba(109,40,217,0.1), inset 0 1px 2px rgba(255,255,255,0.2)'
                        : '0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05), inset 0 1px 2px rgba(255,255,255,0.5)',
                      textShadow: isActive ? '0 1px 2px rgba(0,0,0,0.3)' : 'none',
                    }}
                  >
                    {num}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Progress Bar Rating */}
          <div
            className="bg-gradient-to-br from-white to-slate-100 rounded-xl p-6"
            style={{
              boxShadow: '0 8px 16px rgba(0,0,0,0.2), 0 16px 32px rgba(0,0,0,0.15), 0 32px 64px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.5)'
            }}
          >
            <h3 className="text-lg font-bold text-slate-800 mb-4"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            >
              Progress Rating
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Quality', value: 85, color: '#3b82f6' },
                { label: 'Service', value: 72, color: '#10b981' },
                { label: 'Value', value: 90, color: '#8b5cf6' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-slate-700">{item.label}</span>
                    <span className="font-bold text-slate-800">{item.value}%</span>
                  </div>
                  <div
                    className="h-3 rounded-full overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, #e2e8f0, #cbd5e1)',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2), inset 0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.value}%`,
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}dd)`,
                        boxShadow: `0 2px 4px ${item.color}60, 0 4px 8px ${item.color}40, inset 0 1px 2px rgba(255,255,255,0.3)`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Size Variations */}
        <div
          className="bg-gradient-to-br from-white to-slate-100 rounded-xl p-8"
          style={{
            boxShadow: '0 8px 16px rgba(0,0,0,0.2), 0 16px 32px rgba(0,0,0,0.15), 0 32px 64px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.5)'
          }}
        >
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
          >
            Size Variations
          </h3>

          <div className="space-y-8">
            {/* Large */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm font-semibold text-slate-600 w-20">Large</span>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: index <= 4
                        ? 'linear-gradient(145deg, #ec4899, #db2777)'
                        : 'linear-gradient(145deg, #e2e8f0, #cbd5e1)',
                      boxShadow: index <= 4
                        ? '0 4px 8px rgba(236,72,153,0.3), 0 8px 16px rgba(219,39,119,0.2), inset 0 1px 2px rgba(255,255,255,0.2)'
                        : '0 2px 4px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.5)',
                    }}
                  >
                    <svg
                      className={`w-8 h-8 ${index <= 4 ? 'text-white' : 'text-slate-400'}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Medium */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm font-semibold text-slate-600 w-20">Medium</span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: index <= 3
                        ? 'linear-gradient(145deg, #06b6d4, #0891b2)'
                        : 'linear-gradient(145deg, #e2e8f0, #cbd5e1)',
                      boxShadow: index <= 3
                        ? '0 3px 6px rgba(6,182,212,0.3), 0 6px 12px rgba(8,145,178,0.2), inset 0 1px 2px rgba(255,255,255,0.2)'
                        : '0 2px 4px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.5)',
                    }}
                  >
                    <svg
                      className={`w-6 h-6 ${index <= 3 ? 'text-white' : 'text-slate-400'}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Small */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm font-semibold text-slate-600 w-20">Small</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className="w-7 h-7 rounded flex items-center justify-center"
                    style={{
                      background: index <= 5
                        ? 'linear-gradient(145deg, #f59e0b, #d97706)'
                        : 'linear-gradient(145deg, #e2e8f0, #cbd5e1)',
                      boxShadow: index <= 5
                        ? '0 2px 4px rgba(245,158,11,0.3), 0 4px 8px rgba(217,119,6,0.2), inset 0 1px 2px rgba(255,255,255,0.2)'
                        : '0 1px 2px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.5)',
                    }}
                  >
                    <svg
                      className={`w-4 h-4 ${index <= 5 ? 'text-white' : 'text-slate-400'}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))' }}
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
