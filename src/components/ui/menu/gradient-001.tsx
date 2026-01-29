'use client';

import { useState } from 'react';

export default function GradientMenu() {
  const [activeItem, setActiveItem] = useState('explore');
  const [expandedItems, setExpandedItems] = useState<string[]>(['content']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-80 h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-6">
      <div className="mb-10">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
          <h1 className="text-2xl font-bold text-white mb-1">Gradient UI</h1>
          <p className="text-white/80 text-sm">Colorful navigation</p>
        </div>
      </div>

      <nav className="space-y-2">
        <button
          onClick={() => setActiveItem('explore')}
          className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all ${
            activeItem === 'explore'
              ? 'bg-white text-purple-600 shadow-xl shadow-purple-900/30'
              : 'text-white hover:bg-white/20 backdrop-blur-sm'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>Explore</span>
        </button>

        <div>
          <button
            onClick={() => toggleExpand('content')}
            className="w-full flex items-center justify-between gap-3 px-5 py-3.5 rounded-xl text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-sm transition-all"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Content</span>
            </div>
            <svg
              className={`w-4 h-4 transition-transform ${expandedItems.includes('content') ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {expandedItems.includes('content') && (
            <div className="ml-8 mt-2 space-y-1.5 border-l-2 border-white/30 pl-4">
              <button
                onClick={() => setActiveItem('articles')}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeItem === 'articles'
                    ? 'bg-white/30 backdrop-blur-sm text-white shadow-lg'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                Articles
              </button>
              <button
                onClick={() => setActiveItem('videos')}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeItem === 'videos'
                    ? 'bg-white/30 backdrop-blur-sm text-white shadow-lg'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                Videos
              </button>
              <button
                onClick={() => setActiveItem('podcasts')}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeItem === 'podcasts'
                    ? 'bg-white/30 backdrop-blur-sm text-white shadow-lg'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                Podcasts
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveItem('community')}
          className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all ${
            activeItem === 'community'
              ? 'bg-white text-purple-600 shadow-xl shadow-purple-900/30'
              : 'text-white hover:bg-white/20 backdrop-blur-sm'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Community</span>
        </button>

        <button
          onClick={() => setActiveItem('favorites')}
          className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all ${
            activeItem === 'favorites'
              ? 'bg-white text-purple-600 shadow-xl shadow-purple-900/30'
              : 'text-white hover:bg-white/20 backdrop-blur-sm'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>Favorites</span>
        </button>

        <div className="h-px bg-white/30 my-4"></div>

        <button
          onClick={() => setActiveItem('account')}
          className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all ${
            activeItem === 'account'
              ? 'bg-white text-purple-600 shadow-xl shadow-purple-900/30'
              : 'text-white hover:bg-white/20 backdrop-blur-sm'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Account</span>
        </button>
      </nav>
    </div>
  );
}
