'use client';

import { useState } from 'react';

export default function MonochromeSearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Large Size - High Contrast */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-black uppercase tracking-widest">
            Monochrome Search
          </label>
          <div className={`relative bg-white border-2 transition-all ${isFocused ? 'border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]'}`}>
            <div className="flex items-center px-6 py-5">
              <div className="mr-4 p-3 bg-black">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Enter search terms..."
                className="flex-1 text-lg bg-transparent text-black placeholder:text-gray-400 outline-none font-mono"
              />
              {searchValue && (
                <button
                  onClick={() => setSearchValue('')}
                  className="ml-4 px-5 py-2 bg-black hover:bg-gray-800 text-white font-bold uppercase text-sm transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Medium Size - Striped Pattern */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-black uppercase tracking-widest">
            Striped Search
          </label>
          <div className="relative bg-white border border-black">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, black 0px, black 2px, transparent 2px, transparent 10px)'
            }} />
            <div className="relative flex items-center px-5 py-4">
              <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 text-base bg-transparent text-black placeholder:text-gray-500 outline-none font-mono"
              />
              <div className="w-8 h-8 border-2 border-black flex items-center justify-center">
                <span className="text-black font-bold">→</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Size - Minimal */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-black uppercase tracking-widest">
            Simple Search
          </label>
          <div className="flex items-center bg-gray-100 border-b-2 border-black focus-within:bg-white transition-colors">
            <div className="px-3 py-3">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Type here..."
              className="flex-1 py-3 pr-3 text-sm bg-transparent text-black placeholder:text-gray-500 outline-none font-mono uppercase tracking-wide"
            />
          </div>
        </div>

        {/* Extra - Inverted */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-white bg-black px-3 py-1 inline-block uppercase tracking-widest">
            Inverted Search
          </label>
          <div className="relative bg-black border-2 border-black">
            <div className="flex items-center px-6 py-4">
              <svg className="w-5 h-5 text-white mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search in dark mode..."
                className="flex-1 text-base bg-transparent text-white placeholder:text-gray-500 outline-none font-mono"
              />
              <div className="w-px h-8 bg-gray-600 mx-4" />
              <button className="px-4 py-2 border border-white hover:bg-white hover:text-black text-white font-mono text-sm transition-colors">
                GO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
