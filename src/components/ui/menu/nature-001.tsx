'use client';

import { useState } from 'react';

export default function NatureMenu() {
  const [activeItem, setActiveItem] = useState('garden');
  const [expandedItems, setExpandedItems] = useState<string[]>(['plants']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-72 h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6">
      <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-3xl p-5 shadow-lg border-2 border-green-200">
        <h1 className="text-2xl font-bold text-green-700">Nature Hub</h1>
        <p className="text-sm text-green-600 mt-1">Embrace the wild</p>
      </div>

      <nav className="space-y-2">
        <button
          onClick={() => setActiveItem('garden')}
          className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
            activeItem === 'garden'
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30'
              : 'bg-white/60 text-green-700 hover:bg-white/90 border border-green-100'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Garden</span>
        </button>

        <div>
          <button
            onClick={() => toggleExpand('plants')}
            className="w-full flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl text-sm font-semibold bg-white/60 text-green-700 hover:bg-white/90 border border-green-100 transition-all"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>Plants</span>
            </div>
            <svg
              className={`w-4 h-4 text-green-500 transition-transform ${expandedItems.includes('plants') ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {expandedItems.includes('plants') && (
            <div className="ml-8 mt-2 space-y-1.5 border-l-2 border-green-200 pl-4">
              <button
                onClick={() => setActiveItem('flowers')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeItem === 'flowers'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-white/50 text-green-600 hover:bg-white/80'
                }`}
              >
                🌸 Flowers
              </button>
              <button
                onClick={() => setActiveItem('trees')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeItem === 'trees'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-white/50 text-green-600 hover:bg-white/80'
                }`}
              >
                🌳 Trees
              </button>
              <button
                onClick={() => setActiveItem('herbs')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeItem === 'herbs'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-white/50 text-green-600 hover:bg-white/80'
                }`}
              >
                🌿 Herbs
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveItem('wildlife')}
          className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
            activeItem === 'wildlife'
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30'
              : 'bg-white/60 text-green-700 hover:bg-white/90 border border-green-100'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Wildlife</span>
        </button>

        <button
          onClick={() => setActiveItem('seasons')}
          className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
            activeItem === 'seasons'
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30'
              : 'bg-white/60 text-green-700 hover:bg-white/90 border border-green-100'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span>Seasons</span>
        </button>

        <div className="h-0.5 bg-gradient-to-r from-green-200 via-emerald-300 to-teal-200 rounded-full my-4"></div>

        <button
          onClick={() => setActiveItem('conservation')}
          className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
            activeItem === 'conservation'
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30'
              : 'bg-white/60 text-green-700 hover:bg-white/90 border border-green-100'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>Conservation</span>
        </button>
      </nav>

      <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-4 border-2 border-green-200">
        <p className="text-xs text-green-700 font-semibold">Tip of the day</p>
        <p className="text-sm text-green-600 mt-1">Water your plants in the morning for best results.</p>
      </div>
    </div>
  );
}
