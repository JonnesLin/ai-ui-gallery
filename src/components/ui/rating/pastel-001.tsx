'use client';

import { useState } from 'react';

export default function PastelRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-6xl font-bold text-purple-300">Pastel Rating</h1>
          <p className="text-purple-400 text-lg">Soft, dreamy colors</p>
        </div>

        {/* Main Rating */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 shadow-lg">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-5">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= displayRating;
                const isHovered = index === hoverRating;
                const colors = ['bg-pink-200', 'bg-purple-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200'];

                return (
                  <button
                    key={index}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHoverRating(index)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`w-16 h-16 rounded-2xl ${
                      isFilled ? colors[index - 1] : 'bg-gray-100'
                    } transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-200 ${
                      isHovered ? 'scale-110 shadow-xl' : 'shadow-md'
                    }`}
                  >
                    <svg
                      className="w-full h-full p-3"
                      viewBox="0 0 24 24"
                      fill={isFilled ? 'white' : '#e5e7eb'}
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </button>
                );
              })}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-purple-100 rounded-2xl px-8 py-4">
                <span className="text-5xl font-bold text-purple-400">{displayRating}.0</span>
                <span className="text-xl text-purple-300">out of 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Heart Rating Variant */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-pink-300 mb-6 text-center">Heart Rating</h3>
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, 4, 5].map((index) => {
              const isFilled = index <= 4;
              const colors = ['fill-pink-200', 'fill-rose-200', 'fill-red-200', 'fill-pink-300', 'fill-rose-300'];

              return (
                <button
                  key={index}
                  className={`w-14 h-14 rounded-full ${
                    isFilled ? 'bg-pink-100' : 'bg-gray-100'
                  } flex items-center justify-center hover:scale-110 transition-all shadow-md`}
                >
                  <svg
                    className={`w-10 h-10 ${isFilled ? colors[index - 1] : 'fill-gray-200'}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              );
            })}
          </div>
          <p className="text-center mt-4 text-2xl font-bold text-pink-300">4.0</p>
        </div>

        {/* Size Variants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-blue-300 mb-4 text-center">Large</h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= 5;
                return (
                  <div
                    key={index}
                    className={`w-12 h-12 rounded-xl ${
                      isFilled ? 'bg-blue-200' : 'bg-gray-100'
                    } flex items-center justify-center shadow-sm`}
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill={isFilled ? 'white' : '#e5e7eb'}
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                );
              })}
            </div>
            <p className="text-center mt-3 text-xl font-bold text-blue-300">5.0</p>
          </div>

          {/* Medium */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-green-300 mb-4 text-center">Medium</h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => {
                const fillPercentage = Math.max(0, Math.min(100, (3.5 - index + 1) * 100));
                return (
                  <div key={index} className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shadow-sm">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id={`pastel-md-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset={`${fillPercentage}%`} stopColor="#86efac" />
                          <stop offset={`${fillPercentage}%`} stopColor="#e5e7eb" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill={`url(#pastel-md-${index})`}
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
            <p className="text-center mt-3 text-xl font-bold text-green-300">3.5</p>
          </div>

          {/* Small */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-yellow-300 mb-4 text-center">Small</h3>
            <div className="flex items-center justify-center gap-1.5">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= 4;
                return (
                  <div
                    key={index}
                    className={`w-7 h-7 rounded-lg ${
                      isFilled ? 'bg-yellow-200' : 'bg-gray-100'
                    } flex items-center justify-center shadow-sm`}
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill={isFilled ? 'white' : '#e5e7eb'}
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                );
              })}
            </div>
            <p className="text-center mt-3 text-lg font-bold text-yellow-300">4.0</p>
          </div>
        </div>

        {/* Emoji Style */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">Emoji Rating</h3>
          <div className="flex items-center justify-center gap-4">
            {[
              { emoji: '😢', label: 'Terrible', color: 'bg-red-100' },
              { emoji: '😕', label: 'Bad', color: 'bg-orange-100' },
              { emoji: '😐', label: 'Okay', color: 'bg-yellow-100' },
              { emoji: '😊', label: 'Good', color: 'bg-green-100' },
              { emoji: '😍', label: 'Amazing', color: 'bg-blue-100' },
            ].map((item, index) => {
              const isActive = index + 1 <= 4;
              return (
                <button
                  key={index}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${
                    isActive ? `${item.color} scale-110 shadow-lg` : 'bg-gray-100 shadow-md'
                  }`}
                >
                  <span className="text-4xl">{item.emoji}</span>
                  <span className={`text-xs font-semibold ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Review Summary */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-lg ${
                      index <= 4 ? 'bg-purple-200' : 'bg-gray-100'
                    } flex items-center justify-center`}
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill={index <= 4 ? 'white' : '#e5e7eb'}
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-4xl font-bold text-purple-400">4.0</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">Based on</p>
              <p className="text-2xl font-bold text-purple-400">2,847 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
