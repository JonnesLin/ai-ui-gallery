'use client';

import { useState } from 'react';

export default function MaterialSearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = ['Material Design', 'Component Library', 'UI Patterns', 'Design System'];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Large Size - Outlined */}
        <div className="relative space-y-2">
          <div className="relative">
            <div className={`relative bg-white rounded border-2 transition-all ${
              isFocused ? 'border-blue-600' : 'border-gray-300'
            }`}>
              <div className="flex items-center px-4 py-3">
                <svg className={`w-6 h-6 mr-3 transition-colors ${isFocused ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => {
                    setIsFocused(true);
                    setShowSuggestions(true);
                  }}
                  onBlur={() => {
                    setIsFocused(false);
                    setTimeout(() => setShowSuggestions(false), 200);
                  }}
                  placeholder=" "
                  className="flex-1 text-lg bg-transparent text-gray-900 outline-none peer"
                />
                <label className={`absolute left-14 px-1 bg-white transition-all pointer-events-none ${
                  isFocused || searchValue ? '-top-3 text-xs text-blue-600' : 'top-3 text-base text-gray-400'
                }`}>
                  Search
                </label>
                {searchValue && (
                  <button
                    onClick={() => setSearchValue('')}
                    className="ml-2 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            {isFocused && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
          </div>

          {showSuggestions && (
            <div className="absolute top-full mt-2 w-full bg-white rounded shadow-lg border border-gray-200 overflow-hidden z-10">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Medium Size - Filled */}
        <div className="space-y-2">
          <div className="relative bg-gray-100 rounded-t">
            <div className="flex items-center px-4 pt-4 pb-2">
              <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <div className="flex-1">
                <label className="block text-xs text-gray-600 mb-1">Search</label>
                <input
                  type="text"
                  placeholder="Type to search..."
                  className="w-full text-base bg-transparent text-gray-900 placeholder:text-gray-500 outline-none"
                />
              </div>
            </div>
            <div className="h-0.5 bg-gray-900" />
          </div>
        </div>

        {/* Small Size - Standard */}
        <div className="space-y-2">
          <div className="relative bg-white rounded border border-gray-300 focus-within:border-blue-600 transition-colors">
            <div className="flex items-center px-3 py-2">
              <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 text-sm bg-transparent text-gray-900 placeholder:text-gray-400 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Extra - Elevated */}
        <div className="space-y-2">
          <div className="relative bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center px-6 py-3">
              <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search with Material Design..."
                className="flex-1 text-base bg-transparent text-gray-900 placeholder:text-gray-400 outline-none"
              />
              <button className="ml-3 w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
