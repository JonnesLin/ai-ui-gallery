'use client';

import { useState } from 'react';

export default function SketchSearchBox() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Large Size - Hand-drawn */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wide" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Sketchy Search
          </label>
          <div className="relative">
            <div className="relative bg-white border-2 border-black rounded-lg" style={{
              borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
              borderStyle: 'solid'
            }}>
              <div className="flex items-center px-6 py-4">
                <div className="mr-4 p-2 border-2 border-black bg-yellow-100 rounded-full" style={{
                  borderRadius: '50% 47% 52% 48%/48% 51% 49% 52%'
                }}>
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Draw your search here..."
                  className="flex-1 text-lg bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                />
                {searchValue && (
                  <button
                    onClick={() => setSearchValue('')}
                    className="p-2 border-2 border-black bg-red-100 hover:bg-red-200 rounded-full transition-colors"
                    style={{ borderRadius: '50% 48% 52% 50%/50% 52% 48% 50%' }}
                  >
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gray-300" style={{
                transform: 'rotate(-0.5deg)'
              }} />
            </div>
            {/* Hand-drawn shadow */}
            <div className="absolute -bottom-1 left-2 right-0 h-2 bg-gray-200 blur-sm -z-10" style={{
              borderRadius: '50%',
              transform: 'scaleY(0.3)'
            }} />
          </div>
        </div>

        {/* Medium Size - Doodle */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wide" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Doodle Search
          </label>
          <div className="relative bg-blue-50 border-2 border-black px-5 py-3" style={{
            borderRadius: '235px 15px 215px 15px/15px 215px 15px 235px'
          }}>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Scribble to search..."
                className="flex-1 text-base bg-transparent text-gray-800 placeholder:text-gray-500 outline-none"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              />
              <div className="ml-3 px-3 py-1 border-2 border-black bg-green-200" style={{
                borderRadius: '12px 15px 14px 13px/13px 14px 15px 12px'
              }}>
                <span className="text-sm font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Go!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Size - Notebook */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-700 uppercase tracking-wide" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Note Search
          </label>
          <div className="relative bg-yellow-50 border-2 border-black px-4 py-2.5" style={{
            borderRadius: '215px 12px 205px 12px/12px 205px 12px 215px',
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 24px, #fbbf24 24px, #fbbf24 25px)'
          }}>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search notes..."
                className="flex-1 text-sm bg-transparent text-gray-800 placeholder:text-gray-500 outline-none"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
