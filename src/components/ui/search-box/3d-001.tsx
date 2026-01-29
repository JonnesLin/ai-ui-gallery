'use client';

import { useState } from 'react';

export default function ThreeDSearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6" style={{ perspective: '1000px' }}>
      <div className="w-full max-w-2xl space-y-8">
        {/* Large Size - Floating 3D */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-indigo-700 uppercase tracking-wide">
            3D Search Interface
          </label>
          <div
            className="relative transition-transform duration-300"
            style={{
              transform: isHovered ? 'translateY(-10px) rotateX(5deg)' : 'translateY(0) rotateX(0deg)',
              transformStyle: 'preserve-3d'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Shadow */}
            <div className="absolute -bottom-6 left-0 right-0 h-4 bg-black/10 blur-xl rounded-full" style={{
              transform: isHovered ? 'scale(0.9)' : 'scale(1)',
              transition: 'transform 0.3s'
            }} />

            {/* Main 3D Box */}
            <div className="relative bg-white rounded-xl shadow-2xl" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)'
            }}>
              {/* Top face */}
              <div className="absolute -top-3 left-0 right-0 h-3 bg-gradient-to-b from-indigo-200 to-indigo-100 rounded-t-xl" style={{
                transform: 'rotateX(90deg)',
                transformOrigin: 'top',
                opacity: 0.8
              }} />

              {/* Front face */}
              <div className="relative flex items-center px-6 py-5 z-10">
                <div className="relative mr-4" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute inset-0 bg-indigo-300 blur-md rounded-full" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg" style={{
                    transform: 'translateZ(20px)'
                  }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search in 3D space..."
                  className="flex-1 text-lg bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
                />
                {searchValue && (
                  <button
                    onClick={() => setSearchValue('')}
                    className="px-5 py-2.5 bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-lg shadow-lg font-medium transition-all"
                    style={{ transform: 'translateZ(10px)' }}
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Bottom edge */}
              <div className="absolute -bottom-2 left-2 right-2 h-2 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-lg" />
            </div>
          </div>
        </div>

        {/* Medium Size - Extruded */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-purple-700 uppercase tracking-wide">
            Extruded Search
          </label>
          <div className="relative">
            <div className="relative bg-white rounded-lg shadow-xl" style={{
              boxShadow: '6px 6px 0px rgba(139, 92, 246, 0.3), 12px 12px 0px rgba(168, 85, 247, 0.2)'
            }}>
              <div className="flex items-center px-5 py-4">
                <div className="mr-3 p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md" style={{
                  boxShadow: '3px 3px 0px rgba(168, 85, 247, 0.4)'
                }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Find something..."
                  className="flex-1 text-base bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Small Size - Embossed */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-blue-700 uppercase tracking-wide">
            Embossed Search
          </label>
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-1">
            <div className="bg-white rounded-lg shadow-inner">
              <div className="flex items-center px-4 py-3">
                <div className="mr-2 p-2 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-md shadow-md">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 text-sm bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Extra - Isometric */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-pink-700 uppercase tracking-wide">
            Isometric Search
          </label>
          <div className="relative" style={{ perspective: '1000px' }}>
            <div className="relative bg-white rounded-lg" style={{
              transform: 'rotateX(10deg) rotateY(-10deg)',
              boxShadow: '20px 20px 40px rgba(0, 0, 0, 0.15), -5px -5px 20px rgba(255, 255, 255, 0.5)'
            }}>
              <div className="flex items-center px-5 py-3.5">
                <svg className="w-5 h-5 text-pink-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Isometric search..."
                  className="flex-1 text-base bg-transparent text-gray-800 placeholder:text-gray-400 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
