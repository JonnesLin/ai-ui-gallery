'use client';

import { useState } from 'react';

export default function MaterialRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);
  const [thumbRating, setThumbRating] = useState<'up' | 'down' | null>('up');

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-medium text-gray-900">Material Rating</h1>
          <p className="text-gray-600">Google Material Design style</p>
        </div>

        {/* Main Rating Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-xl font-medium text-gray-800 text-center">Rate Your Experience</h2>

          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHoverRating(index)}
                onMouseLeave={() => setHoverRating(0)}
                className="relative w-16 h-16 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all hover:scale-110 active:scale-95"
              >
                <div className={`absolute inset-0 rounded-full transition-all ${
                  index <= displayRating ? 'bg-amber-500/10' : ''
                }`}></div>
                <svg className="relative w-full h-full p-3" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill={index <= displayRating ? '#FFC107' : '#E0E0E0'}
                    className="transition-all duration-200"
                  />
                </svg>
              </button>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-6 py-2">
              <span className="text-2xl font-medium text-gray-900">{displayRating}.0</span>
              <span className="text-gray-500">/ 5</span>
            </div>
          </div>
        </div>

        {/* Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Compact Rating */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Compact Rating</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="w-6 h-6">
                    <svg className="w-full h-full" viewBox="0 0 24 24">
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill={index <= 4 ? '#2196F3' : '#E0E0E0'}
                      />
                    </svg>
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-1">4.0</span>
              <span className="text-xs text-gray-400">(1,234)</span>
            </div>
          </div>

          {/* Half Star Rating */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Half Stars</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((index) => {
                  const fillPercentage = Math.max(0, Math.min(100, (3.5 - index + 1) * 100));
                  return (
                    <div key={index} className="w-6 h-6">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                        <defs>
                          <linearGradient id={`material-half-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset={`${fillPercentage}%`} stopColor="#4CAF50" />
                            <stop offset={`${fillPercentage}%`} stopColor="#E0E0E0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill={`url(#material-half-${index})`}
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
              <span className="text-sm text-gray-600 ml-1">3.5</span>
            </div>
          </div>

          {/* Thumb Rating */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Thumb Rating</h3>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setThumbRating('up')}
                className={`p-4 rounded-full transition-all ${
                  thumbRating === 'up'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
              </button>
              <button
                onClick={() => setThumbRating('down')}
                className={`p-4 rounded-full transition-all ${
                  thumbRating === 'down'
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <svg className="w-6 h-6 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Linear Progress */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Progress Rating</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Quality</span>
                <span>4.5/5.0</span>
              </div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-lg font-medium text-gray-800 mb-6">Rating Breakdown</h3>
          <div className="space-y-4">
            {[
              { stars: 5, count: 847, percentage: 68 },
              { stars: 4, count: 234, percentage: 19 },
              { stars: 3, count: 98, percentage: 8 },
              { stars: 2, count: 34, percentage: 3 },
              { stars: 1, count: 21, percentage: 2 },
            ].map((item) => (
              <div key={item.stars} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-20">
                  <span className="text-sm text-gray-700">{item.stars}</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#FFC107"
                    />
                  </svg>
                </div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95">
            Submit Rating
          </button>
        </div>
      </div>
    </div>
  );
}
