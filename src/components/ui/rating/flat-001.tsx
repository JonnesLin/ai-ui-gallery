'use client';

import { useState } from 'react';

export default function FlatRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);
  const [emojiRating, setEmojiRating] = useState(3);

  const displayRating = hoverRating || rating;

  const emojis = ['😡', '😟', '😐', '😊', '😍'];

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Flat Rating</h1>
          <p className="text-gray-600">Pure color blocks, no shadows</p>
        </div>

        {/* Star Rating Large */}
        <div className="bg-white p-8 space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 text-center">Star Rating</h3>
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHoverRating(index)}
                onMouseLeave={() => setHoverRating(0)}
                className="w-14 h-14 focus:outline-none"
              >
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill={index <= displayRating ? '#3B82F6' : '#E5E7EB'}
                  />
                </svg>
              </button>
            ))}
          </div>
          <div className="text-center">
            <span className="inline-block bg-blue-500 text-white px-6 py-2 text-xl font-bold">
              {displayRating}.0
            </span>
          </div>
        </div>

        {/* Multiple Rating Styles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Half Stars */}
          <div className="bg-white p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Half Star Rating</h3>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((index) => {
                const fillPercentage = Math.max(0, Math.min(100, (3.5 - index + 1) * 100));
                return (
                  <div key={index} className="w-8 h-8">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id={`flat-half-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset={`${fillPercentage}%`} stopColor="#F59E0B" />
                          <stop offset={`${fillPercentage}%`} stopColor="#E5E7EB" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill={`url(#flat-half-${index})`}
                      />
                    </svg>
                  </div>
                );
              })}
              <span className="ml-2 text-sm font-bold text-amber-500">3.5</span>
            </div>
          </div>

          {/* Number Rating */}
          <div className="bg-white p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Number Rating</h3>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center font-bold text-sm ${
                    index <= 4 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index}
                </button>
              ))}
            </div>
          </div>

          {/* Emoji Rating */}
          <div className="bg-white p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Emoji Rating</h3>
            <div className="flex items-center justify-center gap-2">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => setEmojiRating(index + 1)}
                  className={`w-12 h-12 text-2xl flex items-center justify-center transition-all ${
                    index + 1 === emojiRating ? 'scale-125' : 'scale-100 opacity-50'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Progress Bar Rating */}
          <div className="bg-white p-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">Progress Rating</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
              <div className="h-3 bg-gray-200">
                <div className="h-full bg-purple-500" style={{ width: '85%' }}></div>
              </div>
              <div className="text-center">
                <span className="text-sm font-bold text-purple-500">4.25/5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Sizes */}
        <div className="bg-white p-6 space-y-6">
          <h3 className="text-sm font-semibold text-gray-700 text-center">Various Sizes</h3>
          <div className="flex flex-col items-center gap-4">
            {/* Small */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="w-5 h-5">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill={index <= 5 ? '#EF4444' : '#E5E7EB'}
                    />
                  </svg>
                </div>
              ))}
              <span className="ml-2 text-xs text-gray-600">5.0</span>
            </div>

            {/* Medium */}
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="w-7 h-7">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill={index <= 3 ? '#10B981' : '#E5E7EB'}
                    />
                  </svg>
                </div>
              ))}
              <span className="ml-2 text-sm text-gray-600">3.0</span>
            </div>

            {/* Large */}
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="w-10 h-10">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill={index <= 4 ? '#F59E0B' : '#E5E7EB'}
                    />
                  </svg>
                </div>
              ))}
              <span className="ml-2 text-base text-gray-600">4.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
