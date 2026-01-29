'use client';

import { useState } from 'react';

export default function CorporateRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <h1 className="text-4xl font-semibold text-gray-900 text-center">Corporate Rating System</h1>
          <p className="text-gray-600 text-center mt-2">Professional feedback collection</p>
        </div>

        {/* Main Rating */}
        <div className="bg-white border border-gray-200 rounded-lg p-10 shadow-sm">
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
                    className={`w-14 h-14 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      isFilled
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-200 hover:bg-gray-300'
                    } ${isHovered ? 'scale-110' : ''}`}
                  >
                    <svg
                      className="w-full h-full p-2.5"
                      viewBox="0 0 24 24"
                      fill={isFilled ? 'white' : '#9ca3af'}
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </button>
                );
              })}
            </div>

            <div className="text-center">
              <div className="inline-flex items-baseline gap-2 bg-gray-50 border border-gray-200 rounded px-6 py-3">
                <span className="text-5xl font-semibold text-gray-900">{displayRating}.0</span>
                <span className="text-xl text-gray-500">/ 5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Rating Distribution</h3>
          <div className="space-y-4">
            {[
              { stars: 5, count: 420, percentage: 70 },
              { stars: 4, count: 120, percentage: 20 },
              { stars: 3, count: 36, percentage: 6 },
              { stars: 2, count: 18, percentage: 3 },
              { stars: 1, count: 6, percentage: 1 },
            ].map((item) => (
              <div key={item.stars} className="flex items-center gap-4">
                <div className="w-16 flex items-center gap-1">
                  <span className="text-sm font-medium text-gray-700">{item.stars}</span>
                  <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <div className="w-20 text-right">
                  <span className="text-sm font-medium text-gray-700">{item.count}</span>
                  <span className="text-xs text-gray-500 ml-1">({item.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Size Variants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Large</h3>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className={`w-10 h-10 rounded ${index <= 5 ? 'bg-blue-600' : 'bg-gray-200'}`}>
                  <svg
                    className="w-full h-full p-2"
                    viewBox="0 0 24 24"
                    fill={index <= 5 ? 'white' : '#9ca3af'}
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="mt-3 text-2xl font-semibold text-gray-900">5.0</p>
          </div>

          {/* Medium */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Medium</h3>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((index) => {
                const fillPercentage = Math.max(0, Math.min(100, (3.5 - index + 1) * 100));
                return (
                  <div key={index} className="w-8 h-8">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id={`corp-md-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset={`${fillPercentage}%`} stopColor="#2563eb" />
                          <stop offset={`${fillPercentage}%`} stopColor="#e5e7eb" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill={`url(#corp-md-${index})`}
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-xl font-semibold text-gray-900">3.5</p>
          </div>

          {/* Small */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Small</h3>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className={`w-6 h-6 rounded ${index <= 4 ? 'bg-blue-600' : 'bg-gray-200'}`}>
                  <svg
                    className="w-full h-full p-1"
                    viewBox="0 0 24 24"
                    fill={index <= 4 ? 'white' : '#9ca3af'}
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="mt-3 text-lg font-semibold text-gray-900">4.0</p>
          </div>
        </div>

        {/* Detailed Review Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <svg
                      key={index}
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill={index <= 4 ? '#2563eb' : '#e5e7eb'}
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
                <span className="text-2xl font-semibold text-gray-900">4.0</span>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-900">Overall Customer Rating</p>
                <p className="mt-1">Based on 600 reviews from verified customers</p>
              </div>
            </div>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-colors">
              Write Review
            </button>
          </div>
        </div>

        {/* Compact Inline Style */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((index) => (
                  <svg
                    key={index}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill={index <= 4 ? '#2563eb' : '#e5e7eb'}
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">4.0</span>
              <span className="text-sm text-gray-500">(600 reviews)</span>
            </div>
            <span className="text-sm text-gray-600">Last updated: Jan 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
