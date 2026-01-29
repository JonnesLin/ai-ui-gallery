'use client';

import { useState } from 'react';
import { Rating } from './Rating';

export default function GradientRating() {
  const [rating, setRating] = useState(4);

  const gradients = [
    'from-red-500 to-orange-500',
    'from-orange-500 to-yellow-500',
    'from-yellow-500 to-green-500',
    'from-green-500 to-teal-500',
    'from-teal-500 to-blue-500',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg">Gradient Rating</h1>
          <p className="text-white/90 text-lg">Vibrant color transitions</p>
        </div>

        {/* Main Rating */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
          <div className="space-y-8">
            <div className="flex items-center justify-center">
              <div className="flex gap-6">
                {[1, 2, 3, 4, 5].map((index) => {
                  const isFilled = index <= rating;
                  return (
                    <button
                      key={index}
                      onClick={() => setRating(index)}
                      className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${
                        gradients[index - 1]
                      } transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 hover:scale-110 shadow-lg hover:shadow-2xl ${
                        !isFilled ? 'opacity-30' : 'opacity-100'
                      }`}
                    >
                      <svg
                        className="w-full h-full p-4 text-white drop-shadow-lg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {rating}.0
                </span>
                <span className="text-2xl text-white/70">/ 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Size Variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Medium */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <h3 className="text-white font-bold text-lg mb-6 text-center">Medium Size</h3>
            <div className="flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= 3.5;
                return (
                  <div
                    key={index}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[index - 1]} ${
                      isFilled ? 'opacity-100' : 'opacity-30'
                    } shadow-lg`}
                  >
                    <svg
                      className="w-full h-full p-3 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                );
              })}
            </div>
            <p className="text-center mt-4 text-2xl font-bold text-white">3.5</p>
          </div>

          {/* Small */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <h3 className="text-white font-bold text-lg mb-6 text-center">Small Size</h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= 5;
                return (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradients[index - 1]} ${
                      isFilled ? 'opacity-100' : 'opacity-30'
                    } shadow-md`}
                  >
                    <svg
                      className="w-full h-full p-2 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                );
              })}
            </div>
            <p className="text-center mt-4 text-xl font-bold text-white">5.0</p>
          </div>
        </div>

        {/* Progress Bar Style */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
          <h3 className="text-white font-bold text-lg mb-6 text-center">Progress Bar Style</h3>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = [250, 180, 90, 30, 10][5 - stars];
              const total = 560;
              const percentage = (count / total) * 100;

              return (
                <div key={stars} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-20">
                    <span className="text-white font-semibold">{stars}</span>
                    <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${gradients[stars - 1]} rounded-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-white/80 text-sm w-12 text-right">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Circle Variant */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
          <h3 className="text-white font-bold text-lg mb-6 text-center">Circle Variant</h3>
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, 4, 5].map((index) => {
              const isFilled = index <= 4;
              return (
                <button
                  key={index}
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                    gradients[index - 1]
                  } flex items-center justify-center text-white font-bold text-xl shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-white/50 ${
                    isFilled ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  {index}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
