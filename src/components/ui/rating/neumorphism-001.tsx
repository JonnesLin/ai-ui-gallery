'use client';

import { useState } from 'react';

export default function NeumorphismRating() {
  const [rating, setRating] = useState(3);
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-[#e0e5ec] p-8 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-700">Neumorphism Rating</h1>
          <p className="text-gray-500">Soft UI with subtle shadows</p>
        </div>

        {/* Main Rating Card */}
        <div className="rounded-3xl bg-[#e0e5ec] shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff] p-12">
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-4">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= displayRating;
                const isActive = index === hoverRating;

                return (
                  <button
                    key={index}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHoverRating(index)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`w-16 h-16 rounded-full transition-all duration-300 focus:outline-none ${
                      isFilled
                        ? 'shadow-[inset_8px_8px_16px_#bec3c9,inset_-8px_-8px_16px_#ffffff]'
                        : 'shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff]'
                    } ${isActive ? 'scale-110' : ''}`}
                  >
                    <svg
                      className="w-full h-full p-3"
                      viewBox="0 0 24 24"
                      fill={isFilled ? '#fbbf24' : 'none'}
                      stroke={isFilled ? '#f59e0b' : '#9ca3af'}
                      strokeWidth="2"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </button>
                );
              })}
            </div>

            {/* Rating Display */}
            <div className="flex justify-center">
              <div className="rounded-2xl bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] px-8 py-4">
                <p className="text-4xl font-bold text-gray-700">{displayRating}.0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Size Variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Medium */}
          <div className="rounded-2xl bg-[#e0e5ec] shadow-[15px_15px_30px_#bec3c9,-15px_-15px_30px_#ffffff] p-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-6 text-center">Medium Size</h3>
            <div className="flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= 4;
                return (
                  <div
                    key={index}
                    className={`w-12 h-12 rounded-full ${
                      isFilled
                        ? 'shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff]'
                        : 'shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff]'
                    }`}
                  >
                    <svg
                      className="w-full h-full p-2"
                      viewBox="0 0 24 24"
                      fill={isFilled ? '#fbbf24' : 'none'}
                      stroke={isFilled ? '#f59e0b' : '#9ca3af'}
                      strokeWidth="2"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                );
              })}
            </div>
            <p className="text-center mt-4 text-2xl font-semibold text-gray-600">4.0</p>
          </div>

          {/* Small */}
          <div className="rounded-2xl bg-[#e0e5ec] shadow-[15px_15px_30px_#bec3c9,-15px_-15px_30px_#ffffff] p-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-6 text-center">Small Size</h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= 5;
                return (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full ${
                      isFilled
                        ? 'shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff]'
                        : 'shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff]'
                    }`}
                  >
                    <svg
                      className="w-full h-full p-1.5"
                      viewBox="0 0 24 24"
                      fill={isFilled ? '#fbbf24' : 'none'}
                      stroke={isFilled ? '#f59e0b' : '#9ca3af'}
                      strokeWidth="2"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                );
              })}
            </div>
            <p className="text-center mt-4 text-xl font-semibold text-gray-600">5.0</p>
          </div>
        </div>

        {/* Emoji Variant */}
        <div className="rounded-2xl bg-[#e0e5ec] shadow-[15px_15px_30px_#bec3c9,-15px_-15px_30px_#ffffff] p-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-6 text-center">Emoji Variant</h3>
          <div className="flex items-center justify-center gap-3">
            {['😢', '😕', '😐', '😊', '😍'].map((emoji, index) => {
              const isActive = index + 1 <= 3;
              return (
                <button
                  key={index}
                  className={`w-14 h-14 rounded-full text-2xl transition-all ${
                    isActive
                      ? 'shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] scale-110'
                      : 'shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff]'
                  }`}
                >
                  {emoji}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
