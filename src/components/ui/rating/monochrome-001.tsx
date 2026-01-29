'use client';

import { useState } from 'react';

export default function MonochromeRating() {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = hoverRating || rating;

  return (
    <div className="min-h-screen bg-white p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 border-b-4 border-black pb-8">
          <h1 className="text-6xl font-black text-black">MONOCHROME</h1>
          <p className="text-gray-600 tracking-widest uppercase text-sm">Rating System</p>
        </div>

        {/* Main Rating */}
        <div className="border-4 border-black p-12 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHoverRating(index)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="relative w-16 h-16 focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-4 transition-transform hover:scale-110 active:scale-95"
                >
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill={index <= displayRating ? '#000000' : '#FFFFFF'}
                      stroke="#000000"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <div className="border-4 border-black bg-black text-white px-8 py-4">
                <span className="text-4xl font-black">{displayRating}.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Striped Rating */}
          <div className="border-4 border-black p-6 bg-white">
            <h3 className="text-lg font-black text-black mb-4 border-b-2 border-black pb-2">STRIPED</h3>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`w-12 h-12 border-2 border-black ${
                    index <= 3 ? 'bg-black' : 'bg-white'
                  }`}
                  style={
                    index <= 3
                      ? {
                          backgroundImage:
                            'repeating-linear-gradient(45deg, #000 0, #000 2px, #fff 2px, #fff 4px)',
                        }
                      : {}
                  }
                ></div>
              ))}
            </div>
            <p className="mt-4 text-black font-bold">3 / 5</p>
          </div>

          {/* Circle Rating */}
          <div className="border-4 border-black p-6 bg-black text-white">
            <h3 className="text-lg font-black mb-4 border-b-2 border-white pb-2">CIRCLES</h3>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full border-2 ${
                    index <= 4 ? 'bg-white border-white' : 'bg-black border-white'
                  }`}
                ></div>
              ))}
            </div>
            <p className="mt-4 font-bold">4 / 5</p>
          </div>

          {/* Bar Rating */}
          <div className="border-4 border-black p-6 bg-white">
            <h3 className="text-lg font-black text-black mb-4 border-b-2 border-black pb-2">BARS</h3>
            <div className="space-y-3">
              {[
                { label: '5 STARS', value: 75 },
                { label: '4 STARS', value: 15 },
                { label: '3 STARS', value: 7 },
                { label: '2 STARS', value: 2 },
                { label: '1 STAR', value: 1 },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-4 border-2 border-black bg-white">
                    <div className="h-full bg-black" style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Number Rating */}
          <div className="border-4 border-black p-6 bg-white">
            <h3 className="text-lg font-black text-black mb-4 border-b-2 border-black pb-2">NUMBERS</h3>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  className={`w-12 h-12 border-2 border-black flex items-center justify-center text-xl font-black transition-all ${
                    index <= 5
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {index}
                </button>
              ))}
            </div>
            <p className="mt-4 text-center font-bold text-black">PERFECT</p>
          </div>
        </div>

        {/* Minimal Rating */}
        <div className="border-4 border-black p-8 bg-white">
          <h3 className="text-lg font-black text-black mb-6 text-center border-b-2 border-black pb-2">
            MINIMAL VARIANTS
          </h3>
          <div className="space-y-6">
            {/* Tiny */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-xs font-black w-16">TINY:</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 ${index <= 4 ? 'bg-black' : 'bg-white border border-black'}`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Small */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-xs font-black w-16">SMALL:</span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 border-2 border-black ${
                      index <= 3 ? 'bg-black' : 'bg-white'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Medium */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-xs font-black w-16">MEDIUM:</span>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 border-2 border-black ${
                      index <= 2 ? 'bg-black' : 'bg-white'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-black pt-8 text-center">
          <p className="text-black font-black tracking-widest">100% PURE BLACK & WHITE</p>
        </div>
      </div>
    </div>
  );
}
