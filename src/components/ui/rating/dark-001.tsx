'use client';

import { useState } from 'react';
import { Rating } from './Rating';

export default function DarkRating() {
  const [rating, setRating] = useState(4);

  return (
    <div className="min-h-screen bg-gray-950 p-8 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-bold text-white">Dark Mode Rating</h1>
          <p className="text-gray-400">Sleek and modern dark theme</p>
        </div>

        {/* Main Rating */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10">
          <div className="space-y-6">
            <div className="flex justify-center">
              <Rating
                value={rating}
                onChange={setRating}
                size="lg"
                precision={1}
                color="#fbbf24"
                emptyColor="#4b5563"
                className="gap-4"
              />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-xl px-6 py-3">
                <span className="text-4xl font-bold text-yellow-400">{rating}.0</span>
                <span className="text-gray-400">/ 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Half Star */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Half Star</h3>
            <Rating
              value={3.5}
              readOnly={true}
              size="md"
              precision={0.5}
              color="#fbbf24"
              emptyColor="#4b5563"
              showValue={true}
            />
          </div>

          {/* Filled */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Full Stars</h3>
            <Rating
              value={5}
              readOnly={true}
              size="md"
              precision={1}
              color="#fbbf24"
              emptyColor="#4b5563"
              showValue={true}
            />
          </div>

          {/* Small */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Compact</h3>
            <Rating
              value={4}
              readOnly={true}
              size="sm"
              precision={1}
              color="#fbbf24"
              emptyColor="#4b5563"
              showValue={true}
            />
          </div>
        </div>

        {/* Heart Variant */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h3 className="text-lg font-semibold text-gray-300 mb-6 text-center">Heart Rating</h3>
          <div className="flex justify-center">
            <Rating
              value={4}
              size="lg"
              precision={1}
              color="#ef4444"
              emptyColor="#4b5563"
              icon={
                <svg className="w-full h-full p-1.5" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              }
              emptyIcon={
                <svg className="w-full h-full p-1.5" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              }
              className="gap-3"
            />
          </div>
        </div>

        {/* With Review Count */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Rating
                value={4}
                readOnly={true}
                size="md"
                precision={1}
                color="#fbbf24"
                emptyColor="#4b5563"
                showValue={true}
              />
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Based on</p>
              <p className="text-white text-lg font-semibold">1,234 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
