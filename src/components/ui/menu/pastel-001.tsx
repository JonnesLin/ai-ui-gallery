'use client';

import { useState } from 'react';

export default function PastelMenu() {
  const [activeItem, setActiveItem] = useState('feed');
  const [expandedItems, setExpandedItems] = useState<string[]>(['collections']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-72 h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-6">
      <div className="mb-8 bg-white/70 backdrop-blur-sm rounded-3xl p-5 shadow-lg">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Sweet Menu
        </h1>
        <p className="text-sm text-purple-400 mt-1">Pastel delight</p>
      </div>

      <nav className="space-y-2.5">
        <button
          onClick={() => setActiveItem('feed')}
          className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-medium transition-all ${
            activeItem === 'feed'
              ? 'bg-pink-300 text-pink-900 shadow-lg shadow-pink-300/50'
              : 'bg-white/50 text-purple-600 hover:bg-white/80'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span>Feed</span>
        </button>

        <div>
          <button
            onClick={() => toggleExpand('collections')}
            className="w-full flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl text-sm font-medium bg-white/50 text-purple-600 hover:bg-white/80 transition-all"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span>Collections</span>
            </div>
            <svg
              className={`w-4 h-4 transition-transform ${expandedItems.includes('collections') ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {expandedItems.includes('collections') && (
            <div className="ml-8 mt-2 space-y-2 border-l-2 border-purple-200 pl-4">
              <button
                onClick={() => setActiveItem('photos')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeItem === 'photos'
                    ? 'bg-purple-300 text-purple-900'
                    : 'bg-white/40 text-purple-600 hover:bg-white/70'
                }`}
              >
                Photos
              </button>
              <button
                onClick={() => setActiveItem('music')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeItem === 'music'
                    ? 'bg-purple-300 text-purple-900'
                    : 'bg-white/40 text-purple-600 hover:bg-white/70'
                }`}
              >
                Music
              </button>
              <button
                onClick={() => setActiveItem('bookmarks')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeItem === 'bookmarks'
                    ? 'bg-purple-300 text-purple-900'
                    : 'bg-white/40 text-purple-600 hover:bg-white/70'
                }`}
              >
                Bookmarks
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveItem('messages')}
          className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-medium transition-all ${
            activeItem === 'messages'
              ? 'bg-pink-300 text-pink-900 shadow-lg shadow-pink-300/50'
              : 'bg-white/50 text-purple-600 hover:bg-white/80'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span>Messages</span>
          <span className="ml-auto bg-pink-400 text-white text-xs font-bold px-2.5 py-1 rounded-full">5</span>
        </button>

        <button
          onClick={() => setActiveItem('profile')}
          className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-medium transition-all ${
            activeItem === 'profile'
              ? 'bg-pink-300 text-pink-900 shadow-lg shadow-pink-300/50'
              : 'bg-white/50 text-purple-600 hover:bg-white/80'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Profile</span>
        </button>

        <div className="h-px bg-purple-200 my-4"></div>

        <button
          onClick={() => setActiveItem('settings')}
          className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-medium transition-all ${
            activeItem === 'settings'
              ? 'bg-pink-300 text-pink-900 shadow-lg shadow-pink-300/50'
              : 'bg-white/50 text-purple-600 hover:bg-white/80'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
}
