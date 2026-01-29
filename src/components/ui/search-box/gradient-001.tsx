'use client';

import { useState } from 'react';

export default function GradientSearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Large Size */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-white/80 uppercase tracking-wide">Large</label>
          <div className="relative p-[2px] bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-2xl">
            <div className="bg-white rounded-2xl">
              <div className="flex items-center px-6 py-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Search with gradient magic..."
                  className="flex-1 px-4 text-lg bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
                />
                {searchValue && (
                  <button
                    onClick={() => setSearchValue('')}
                    className="p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white text-gray-400 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Medium Size - Filled Gradient */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-white/80 uppercase tracking-wide">Medium</label>
          <div className="relative flex items-center px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-xl">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 text-base bg-transparent text-white placeholder:text-white/60 outline-none"
            />
            <button className="p-2 rounded-lg hover:bg-white/20 text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Small Size - Animated Gradient */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-white/80 uppercase tracking-wide">Small</label>
          <div className="relative p-[1px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg animate-gradient bg-[length:200%_200%]">
            <div className="bg-white rounded-lg">
              <div className="flex items-center px-4 py-2">
                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 px-2 text-sm bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
