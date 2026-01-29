'use client';

import { useState } from 'react';

export default function BrutalistRating() {
  const [rating, setRating] = useState(3);
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="border-8 border-white p-8 bg-yellow-400">
          <h1 className="text-6xl font-black text-black uppercase tracking-tight">
            BRUTALIST RATING
          </h1>
          <p className="text-xl font-bold text-black mt-2">RAW. BOLD. UNAPOLOGETIC.</p>
        </div>

        {/* Main Rating */}
        <div className="border-8 border-white bg-red-600 p-10">
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
                  className={`w-20 h-20 border-4 border-black font-black text-4xl transition-all ${
                    isFilled ? 'bg-yellow-400 text-black' : 'bg-white text-black'
                  } ${isHovered ? 'scale-110 rotate-6' : ''} hover:rotate-6 focus:outline-none`}
                >
                  {index}
                </button>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block border-4 border-black bg-white px-8 py-4">
              <span className="text-6xl font-black text-black">{displayRating}</span>
              <span className="text-4xl font-black text-black">/5</span>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-4">
          {/* Star Style */}
          <div className="border-8 border-white bg-blue-600 p-6">
            <div className="border-4 border-black bg-yellow-400 p-3 mb-4">
              <h3 className="text-xl font-black text-black uppercase">STARS</h3>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= 4;
                return (
                  <div
                    key={index}
                    className={`w-12 h-12 border-4 border-black ${
                      isFilled ? 'bg-yellow-400' : 'bg-white'
                    }`}
                  >
                    <svg className="w-full h-full p-1 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 border-4 border-black bg-white px-3 py-2 inline-block">
              <span className="text-2xl font-black text-black">4.0</span>
            </div>
          </div>

          {/* Block Style */}
          <div className="border-8 border-white bg-green-600 p-6">
            <div className="border-4 border-black bg-yellow-400 p-3 mb-4">
              <h3 className="text-xl font-black text-black uppercase">BLOCKS</h3>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => {
                const isFilled = index <= 3;
                return (
                  <div
                    key={index}
                    className={`w-12 h-12 border-4 border-black flex items-center justify-center font-black text-2xl ${
                      isFilled ? 'bg-black text-yellow-400' : 'bg-white text-black'
                    }`}
                  >
                    {index}
                  </div>
                );
              })}
            </div>
            <div className="mt-3 border-4 border-black bg-white px-3 py-2 inline-block">
              <span className="text-2xl font-black text-black">3.0</span>
            </div>
          </div>
        </div>

        {/* Bar Chart Style */}
        <div className="border-8 border-white bg-purple-600 p-8">
          <div className="border-4 border-black bg-yellow-400 p-3 mb-6">
            <h3 className="text-2xl font-black text-black uppercase text-center">DISTRIBUTION</h3>
          </div>
          <div className="space-y-3">
            {[
              { stars: 5, count: 250, color: 'bg-green-500' },
              { stars: 4, count: 180, color: 'bg-lime-500' },
              { stars: 3, count: 90, color: 'bg-yellow-400' },
              { stars: 2, count: 30, color: 'bg-orange-500' },
              { stars: 1, count: 10, color: 'bg-red-500' },
            ].map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <div className="w-16 border-4 border-black bg-white px-2 py-1">
                  <span className="text-xl font-black text-black">{item.stars}★</span>
                </div>
                <div className="flex-1 h-10 border-4 border-black bg-white">
                  <div
                    className={`h-full ${item.color} border-r-4 border-black`}
                    style={{ width: `${(item.count / 250) * 100}%` }}
                  />
                </div>
                <div className="w-20 border-4 border-black bg-white px-2 py-1">
                  <span className="text-lg font-black text-black">{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Variations */}
        <div className="grid grid-cols-3 gap-4">
          <div className="border-4 border-white bg-yellow-400 p-4">
            <div className="text-center">
              <div className="text-4xl font-black text-black mb-2">5.0</div>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-6 h-6 bg-black" />
                ))}
              </div>
            </div>
          </div>

          <div className="border-4 border-white bg-red-500 p-4">
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">3.5</div>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 border-2 border-white ${i <= 3 ? 'bg-white' : 'bg-transparent'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="border-4 border-white bg-blue-500 p-4">
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">4.8</div>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 ${i <= 4 ? 'bg-yellow-400' : 'bg-white'} border-2 border-black`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
