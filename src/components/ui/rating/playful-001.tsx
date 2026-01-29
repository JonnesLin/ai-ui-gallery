'use client';

import { useState } from 'react';

export default function PlayfulRating() {
  const [rating, setRating] = useState(3);
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-400 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-6xl font-black text-white drop-shadow-lg transform -rotate-2">
            Playful Rating!
          </h1>
          <p className="text-2xl text-white font-bold transform rotate-1">Fun & Friendly</p>
        </div>

        {/* Main Rating */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl transform hover:rotate-1 transition-transform">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= displayRating;
                const isHovered = index === hoverRating;
                const rotations = ['-rotate-12', '-rotate-6', 'rotate-0', 'rotate-6', 'rotate-12'];

                return (
                  <button
                    key={index}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHoverRating(index)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`w-16 h-16 rounded-2xl transition-all duration-300 focus:outline-none ${
                      isFilled
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg'
                        : 'bg-gray-200'
                    } ${isHovered ? 'scale-125 rotate-12' : rotations[index - 1]}`}
                  >
                    <svg
                      className={`w-full h-full p-3 ${isFilled ? 'text-white' : 'text-gray-400'}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </button>
                );
              })}
            </div>

            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-6 shadow-xl transform -rotate-2">
                <span className="text-6xl font-black text-white">{displayRating}.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Smiley Face Rating */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl transform -rotate-1">
          <h3 className="text-3xl font-black text-gray-800 mb-6 text-center transform rotate-1">
            How do you feel?
          </h3>
          <div className="flex items-center justify-center gap-4">
            {[
              { emoji: '😭', color: 'from-red-400 to-red-500', label: 'Terrible' },
              { emoji: '😟', color: 'from-orange-400 to-orange-500', label: 'Bad' },
              { emoji: '😐', color: 'from-yellow-400 to-yellow-500', label: 'Okay' },
              { emoji: '😊', color: 'from-green-400 to-green-500', label: 'Good' },
              { emoji: '🤩', color: 'from-blue-400 to-purple-500', label: 'Amazing' },
            ].map((item, index) => {
              const isActive = index + 1 === 4;
              return (
                <button
                  key={index}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all transform ${
                    isActive
                      ? `bg-gradient-to-br ${item.color} scale-110 shadow-xl rotate-6`
                      : 'bg-gray-100 hover:scale-105'
                  }`}
                >
                  <span className="text-4xl">{item.emoji}</span>
                  <span className={`text-xs font-bold ${isActive ? 'text-white' : 'text-gray-600'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bouncy Stars */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-1">
          <h3 className="text-3xl font-black text-gray-800 mb-6 text-center transform -rotate-1">
            Bouncy Stars!
          </h3>
          <div className="flex items-center justify-center gap-3">
            {[1, 2, 3, 4, 5].map((index) => {
              const isFilled = index <= 5;
              const delays = ['delay-0', 'delay-75', 'delay-150', 'delay-300', 'delay-500'];
              return (
                <div
                  key={index}
                  className={`w-16 h-16 rounded-full ${
                    isFilled
                      ? 'bg-gradient-to-br from-pink-400 to-purple-500'
                      : 'bg-gray-200'
                  } flex items-center justify-center shadow-lg animate-bounce ${delays[index - 1]}`}
                >
                  <svg
                    className={`w-10 h-10 ${isFilled ? 'text-white' : 'text-gray-400'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>

        {/* Colorful Hearts */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl transform -rotate-1">
          <h3 className="text-3xl font-black text-gray-800 mb-6 text-center transform rotate-1">
            Love Meter!
          </h3>
          <div className="flex items-center justify-center gap-3">
            {[
              'from-red-400 to-pink-400',
              'from-pink-400 to-rose-400',
              'from-rose-400 to-red-500',
              'from-purple-400 to-pink-500',
              'from-pink-500 to-rose-500',
            ].map((gradient, index) => {
              const isFilled = index + 1 <= 3;
              return (
                <button
                  key={index}
                  className={`w-14 h-14 rounded-xl transition-all transform ${
                    isFilled
                      ? `bg-gradient-to-br ${gradient} scale-110 shadow-xl rotate-12 hover:rotate-0`
                      : 'bg-gray-200 hover:scale-105'
                  }`}
                >
                  <svg
                    className={`w-full h-full p-2 ${isFilled ? 'text-white' : 'text-gray-400'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sticker Style */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { rating: '3.5', color: 'from-yellow-400 to-orange-500', sticker: '⭐' },
            { rating: '4.0', color: 'from-green-400 to-teal-500', sticker: '✨' },
            { rating: '5.0', color: 'from-purple-400 to-pink-500', sticker: '🌟' },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all ${
                idx === 0 ? 'rotate-3' : idx === 1 ? '-rotate-2' : 'rotate-2'
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-2">{item.sticker}</div>
                <div className="text-4xl font-black text-white">{item.rating}</div>
                <div className="text-sm font-bold text-white/80 mt-1">AWESOME!</div>
              </div>
            </div>
          ))}
        </div>

        {/* Doodle Style */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-black transform rotate-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full border-4 border-black ${
                    index <= 4 ? 'bg-yellow-400' : 'bg-white'
                  } flex items-center justify-center font-black text-2xl transform -rotate-6`}
                >
                  {index <= 4 ? '★' : '☆'}
                </div>
              ))}
            </div>
            <div className="bg-purple-400 border-4 border-black px-6 py-2 transform rotate-6">
              <span className="text-3xl font-black text-white">4.0!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
