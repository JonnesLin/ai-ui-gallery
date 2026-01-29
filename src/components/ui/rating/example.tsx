'use client';

import { useState } from 'react';
import { Rating } from './Rating';

/**
 * Example usage of the Rating component
 * This file demonstrates all major features and use cases
 */
export default function RatingExample() {
  const [controlledRating, setControlledRating] = useState(3.5);
  const [heartRating, setHeartRating] = useState(4);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Rating Component Examples</h1>
          <p className="text-gray-600">Comprehensive demonstrations of all features</p>
        </div>

        {/* Controlled Rating */}
        <section className="bg-white rounded-lg shadow p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Controlled Rating</h2>
          <p className="text-gray-600">
            Value: <span className="font-mono text-blue-600">{controlledRating.toFixed(1)}</span>
          </p>
          <Rating
            value={controlledRating}
            onChange={setControlledRating}
            precision={0.5}
            size="lg"
            showValue={true}
          />
        </section>

        {/* Read-only Ratings */}
        <section className="bg-white rounded-lg shadow p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Read-only Displays</h2>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">Large - 4.5 stars</p>
            <Rating value={4.5} readOnly={true} size="lg" precision={0.5} showValue={true} />
          </div>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">Medium - 3.5 stars</p>
            <Rating value={3.5} readOnly={true} size="md" precision={0.5} showValue={true} />
          </div>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">Small - 5 stars</p>
            <Rating value={5} readOnly={true} size="sm" precision={1} showValue={true} />
          </div>
        </section>

        {/* Precision Modes */}
        <section className="bg-white rounded-lg shadow p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Precision Modes</h2>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">Half-star precision (0.5)</p>
            <Rating defaultValue={3.5} precision={0.5} size="md" showValue={true} />
          </div>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">Whole-star precision (1.0)</p>
            <Rating defaultValue={3} precision={1} size="md" showValue={true} />
          </div>
        </section>

        {/* Custom Colors */}
        <section className="bg-white rounded-lg shadow p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Custom Colors</h2>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">Red theme</p>
            <Rating defaultValue={4} color="#ef4444" emptyColor="#fee2e2" size="md" />
          </div>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">Green theme</p>
            <Rating defaultValue={4} color="#10b981" emptyColor="#d1fae5" size="md" />
          </div>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">Purple theme</p>
            <Rating defaultValue={4} color="#8b5cf6" emptyColor="#ede9fe" size="md" />
          </div>
        </section>

        {/* Custom Icons */}
        <section className="bg-white rounded-lg shadow p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Custom Icons</h2>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">Heart icons</p>
            <Rating
              value={heartRating}
              onChange={setHeartRating}
              size="lg"
              color="#ef4444"
              emptyColor="#fee2e2"
              icon={
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              }
              emptyIcon={
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#fee2e2" strokeWidth="2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              }
            />
          </div>
        </section>

        {/* Disabled State */}
        <section className="bg-white rounded-lg shadow p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">States</h2>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">Disabled</p>
            <Rating defaultValue={3} disabled={true} size="md" />
          </div>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">Read-only</p>
            <Rating value={3} readOnly={true} size="md" />
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white rounded-lg shadow p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Common Use Cases</h2>

          {/* Product Rating */}
          <div className="border-l-4 border-blue-500 pl-4 space-y-2">
            <h3 className="font-semibold text-gray-900">Product Rating</h3>
            <div className="flex items-center gap-3">
              <Rating value={4.5} readOnly={true} precision={0.5} size="sm" />
              <span className="text-sm text-gray-600">(1,234 reviews)</span>
            </div>
          </div>

          {/* User Feedback */}
          <div className="border-l-4 border-green-500 pl-4 space-y-2">
            <h3 className="font-semibold text-gray-900">User Feedback</h3>
            <p className="text-sm text-gray-600">How would you rate this article?</p>
            <Rating
              defaultValue={0}
              onChange={(value) => console.log('User rated:', value)}
              size="md"
            />
          </div>

          {/* Skill Level */}
          <div className="border-l-4 border-purple-500 pl-4 space-y-2">
            <h3 className="font-semibold text-gray-900">Skill Level Indicator</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">JavaScript</p>
                <Rating value={5} readOnly={true} size="sm" color="#f59e0b" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">TypeScript</p>
                <Rating value={4} readOnly={true} size="sm" color="#f59e0b" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">React</p>
                <Rating value={4.5} readOnly={true} size="sm" precision={0.5} color="#f59e0b" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
