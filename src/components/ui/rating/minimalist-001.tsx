'use client';

import { useState } from 'react';
import { Rating } from './Rating';

export default function MinimalistRating() {
  const [rating, setRating] = useState(3.5);
  const [readonly, setReadonly] = useState(false);

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center justify-center gap-12">
      <div className="max-w-2xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-light text-gray-900">Minimalist Rating</h1>
          <p className="text-sm text-gray-500">Clean and simple star rating</p>
        </div>

        {/* Interactive Mode Toggle */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm text-gray-600">Mode:</span>
          <button
            onClick={() => setReadonly(!readonly)}
            className="px-4 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            {readonly ? 'Read-only' : 'Interactive'}
          </button>
        </div>

        {/* Large Interactive Rating */}
        <div className="space-y-4">
          <div className="text-center">
            <Rating
              value={rating}
              onChange={setRating}
              size="lg"
              precision={0.5}
              readOnly={readonly}
              color="#111827"
              emptyColor="#d1d5db"
              showValue={true}
              className="justify-center"
            />
          </div>
        </div>

        {/* Medium Size */}
        <div className="space-y-3 border-t pt-12">
          <h3 className="text-sm font-medium text-gray-700 text-center">Medium Size</h3>
          <div className="flex justify-center">
            <Rating
              value={3.5}
              readOnly={true}
              size="md"
              precision={0.5}
              color="#111827"
              emptyColor="#d1d5db"
              showValue={true}
            />
          </div>
        </div>

        {/* Small Size */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700 text-center">Small Size</h3>
          <div className="flex justify-center">
            <Rating
              value={4.8}
              readOnly={true}
              size="sm"
              precision={0.5}
              color="#111827"
              emptyColor="#d1d5db"
              showValue={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
