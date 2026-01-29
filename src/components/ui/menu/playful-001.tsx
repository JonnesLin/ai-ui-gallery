'use client';

import { useState } from 'react';

export default function PlayfulMenu() {
  const [activeItem, setActiveItem] = useState('playground');
  const [expandedItems, setExpandedItems] = useState<string[]>(['games']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-80 h-screen bg-gradient-to-br from-orange-200 via-yellow-100 to-lime-200 p-6">
      <div className="mb-8 bg-white rounded-3xl p-5 shadow-xl transform rotate-1 border-4 border-orange-400">
        <h1 className="text-3xl font-black text-orange-500 transform -rotate-2">Fun Zone!</h1>
        <p className="text-sm text-orange-600 font-bold mt-1 transform rotate-1">Let's play</p>
      </div>

      <nav className="space-y-3">
        <button
          onClick={() => setActiveItem('playground')}
          className={`w-full flex items-center gap-3 px-5 py-4 rounded-3xl text-sm font-bold transition-all transform hover:scale-105 ${
            activeItem === 'playground'
              ? 'bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-2xl shadow-orange-400/50 -rotate-1'
              : 'bg-white text-orange-600 shadow-lg hover:shadow-xl rotate-1'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center">
            <span className="text-lg">🎪</span>
          </div>
          <span className="text-base">Playground</span>
        </button>

        <div>
          <button
            onClick={() => toggleExpand('games')}
            className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-3xl text-sm font-bold bg-white text-orange-600 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 -rotate-1"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-lime-300 flex items-center justify-center">
                <span className="text-lg">🎮</span>
              </div>
              <span className="text-base">Games</span>
            </div>
            <div className={`w-6 h-6 rounded-full bg-pink-300 flex items-center justify-center transition-transform ${expandedItems.includes('games') ? 'rotate-180' : ''}`}>
              <span className="text-xs">▼</span>
            </div>
          </button>

          {expandedItems.includes('games') && (
            <div className="ml-8 mt-3 space-y-2 border-l-4 border-dashed border-orange-300 pl-4">
              <button
                onClick={() => setActiveItem('puzzle')}
                className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-bold transition-all transform hover:scale-105 ${
                  activeItem === 'puzzle'
                    ? 'bg-gradient-to-r from-purple-300 to-pink-300 text-purple-900 shadow-lg'
                    : 'bg-white text-orange-600 shadow hover:shadow-md'
                }`}
              >
                🧩 Puzzle Games
              </button>
              <button
                onClick={() => setActiveItem('racing')}
                className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-bold transition-all transform hover:scale-105 ${
                  activeItem === 'racing'
                    ? 'bg-gradient-to-r from-purple-300 to-pink-300 text-purple-900 shadow-lg'
                    : 'bg-white text-orange-600 shadow hover:shadow-md'
                }`}
              >
                🏎️ Racing Games
              </button>
              <button
                onClick={() => setActiveItem('adventure')}
                className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-bold transition-all transform hover:scale-105 ${
                  activeItem === 'adventure'
                    ? 'bg-gradient-to-r from-purple-300 to-pink-300 text-purple-900 shadow-lg'
                    : 'bg-white text-orange-600 shadow hover:shadow-md'
                }`}
              >
                🗺️ Adventure Games
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveItem('leaderboard')}
          className={`w-full flex items-center gap-3 px-5 py-4 rounded-3xl text-sm font-bold transition-all transform hover:scale-105 ${
            activeItem === 'leaderboard'
              ? 'bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-2xl shadow-orange-400/50 rotate-1'
              : 'bg-white text-orange-600 shadow-lg hover:shadow-xl -rotate-1'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center">
            <span className="text-lg">🏆</span>
          </div>
          <span className="text-base">Leaderboard</span>
        </button>

        <button
          onClick={() => setActiveItem('rewards')}
          className={`w-full flex items-center gap-3 px-5 py-4 rounded-3xl text-sm font-bold transition-all transform hover:scale-105 ${
            activeItem === 'rewards'
              ? 'bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-2xl shadow-orange-400/50 -rotate-1'
              : 'bg-white text-orange-600 shadow-lg hover:shadow-xl rotate-1'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-lime-300 flex items-center justify-center">
            <span className="text-lg">🎁</span>
          </div>
          <span className="text-base">Rewards</span>
          <span className="ml-auto bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full animate-pulse">
            NEW
          </span>
        </button>

        <div className="h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-lime-400 rounded-full my-4"></div>

        <button
          onClick={() => setActiveItem('profile')}
          className={`w-full flex items-center gap-3 px-5 py-4 rounded-3xl text-sm font-bold transition-all transform hover:scale-105 ${
            activeItem === 'profile'
              ? 'bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-2xl shadow-orange-400/50 rotate-1'
              : 'bg-white text-orange-600 shadow-lg hover:shadow-xl -rotate-1'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <span className="text-lg">😎</span>
          </div>
          <span className="text-base">My Profile</span>
        </button>
      </nav>
    </div>
  );
}
