'use client';

import { useState } from 'react';

export default function FlatSearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = ['Popular searches', 'Recent items', 'Trending topics', 'Quick links'];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Large Size - Primary Color */}
        <div className="relative space-y-2">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Flat Search
          </label>
          <div className="relative bg-white rounded-lg overflow-hidden">
            <div className="flex items-center px-5 py-4">
              <div className="mr-4 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="What are you looking for?"
                className="flex-1 text-lg bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
              />
              {searchValue && (
                <button
                  onClick={() => setSearchValue('')}
                  className="ml-4 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {showSuggestions && (
            <div className="absolute top-full mt-2 w-full bg-white rounded-lg overflow-hidden z-10">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full px-5 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Medium Size - Colorful */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Colorful Search
          </label>
          <div className="flex items-center bg-white rounded-lg overflow-hidden">
            <div className="px-4 py-3 bg-green-500">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Type to search..."
              className="flex-1 px-4 py-3 text-base bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
            />
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Small Size - Minimal */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Compact Search
          </label>
          <div className="flex items-center bg-white rounded-md overflow-hidden">
            <div className="px-3 py-2 bg-purple-500">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Quick search..."
              className="flex-1 px-3 py-2 text-sm bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Extra - Rounded Pills */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Pill Search
          </label>
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center bg-white rounded-full overflow-hidden">
              <div className="pl-5 pr-3 py-3">
                <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search here..."
                className="flex-1 pr-5 py-3 text-base bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
              />
            </div>
            <button className="w-12 h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
