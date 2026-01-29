'use client';

import { useState } from 'react';

export default function PlayfulSearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-300 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Large Size - Bouncy */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-purple-700 uppercase tracking-wide flex items-center gap-2">
            <span className="animate-bounce">🔍</span>
            Super Fun Search
          </label>
          <div
            className={`relative bg-white rounded-3xl shadow-2xl transform transition-all duration-300 ${
              isHovered ? 'scale-105 rotate-1' : 'scale-100'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center px-6 py-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-md animate-pulse" />
                <div className="relative p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="What are we looking for today? 🎉"
                className="flex-1 px-4 text-lg bg-transparent text-gray-800 placeholder:text-gray-400 outline-none font-medium"
              />
              {searchValue && (
                <button
                  onClick={() => setSearchValue('')}
                  className="p-2 rounded-full bg-red-400 hover:bg-red-500 text-white transform hover:rotate-90 transition-all duration-300"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Medium Size - Colorful */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-blue-700 uppercase tracking-wide">
            Rainbow Search 🌈
          </label>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 rounded-2xl blur opacity-75 animate-pulse" />
            <div className="relative bg-white rounded-2xl shadow-lg">
              <div className="flex items-center px-5 py-3">
                <span className="text-2xl mr-3 animate-spin-slow">🎯</span>
                <input
                  type="text"
                  placeholder="Find something amazing..."
                  className="flex-1 text-base bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white rounded-full font-bold text-sm transform hover:scale-110 transition-all duration-200 shadow-lg">
                  Go! 🚀
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Small Size - Cute */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-green-700 uppercase tracking-wide">
            Tiny Explorer 🐛
          </label>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-white rounded-full shadow-md border-4 border-green-300 hover:border-green-400 transition-colors">
              <div className="flex items-center px-4 py-2">
                <span className="text-lg mr-2">🔎</span>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="flex-1 text-sm bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
                />
              </div>
            </div>
            <button className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 rounded-full shadow-lg transform hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-xl">
              ⚡
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
