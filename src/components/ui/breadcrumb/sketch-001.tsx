"use client";

import React, { useState } from "react";

export default function SketchBreadcrumb() {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const paths = [
    { label: 'Home', href: '#', icon: true },
    { label: 'Products', href: '#' },
    { label: 'Electronics', href: '#' },
    { label: 'Smartphones', href: '#', current: true },
  ];

  const dropdownItems = [
    { label: 'Tablets', href: '#' },
    { label: 'Laptops', href: '#' },
    { label: 'Cameras', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-amber-50 p-8 space-y-12" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
      <h2 className="text-xs font-medium text-gray-600 uppercase tracking-widest">Sketch Breadcrumbs</h2>

      {/* Hand-drawn boxes */}
      <nav className="flex items-center gap-3 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            <a
              href={path.href}
              className={`px-4 py-2 rounded-lg border-2 transition-all ${
                path.current
                  ? 'bg-yellow-200 border-gray-800 text-gray-900 font-bold'
                  : 'bg-white border-gray-700 text-gray-700 hover:bg-yellow-100'
              }`}
              style={{
                borderRadius: '8px 10px 9px 11px / 11px 8px 10px 9px',
                transform: `rotate(${i % 2 === 0 ? '-1' : '1'}deg)`
              }}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Crayon style */}
      <nav className="flex items-center gap-2 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && (
              <span className="text-gray-600 text-xl font-bold">~</span>
            )}
            {path.current ? (
              <span
                className="px-4 py-2 bg-blue-300 text-blue-900 font-bold border-2 border-blue-900"
                style={{
                  borderRadius: '15px 8px 12px 10px / 10px 12px 8px 15px',
                  transform: 'rotate(1deg)'
                }}
              >
                {path.label}
              </span>
            ) : (
              <a
                href={path.href}
                className="px-4 py-2 bg-white text-gray-700 font-medium border-2 border-gray-600 hover:bg-orange-100 transition-colors"
                style={{
                  borderRadius: '12px 10px 11px 9px / 9px 11px 10px 12px',
                  transform: `rotate(${i % 2 === 0 ? '-0.5' : '0.5'}deg)`
                }}
              >
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* Doodle arrows */}
      <nav className="flex items-center gap-4 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-4">
            {i > 0 && (
              <svg className="w-8 h-8 text-gray-700" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10 Q 15 8, 25 10 L 30 10 M 30 10 L 26 7 M 30 10 L 26 13"
                />
              </svg>
            )}
            <a
              href={path.href}
              className={`px-5 py-2 border-2 transition-all ${
                path.current
                  ? 'bg-pink-200 border-pink-800 text-pink-900 font-bold'
                  : 'bg-white border-gray-600 text-gray-700 hover:bg-green-100'
              }`}
              style={{
                borderRadius: '20px 15px 18px 16px / 16px 18px 15px 20px'
              }}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Scribbled underlines */}
      <nav className="flex items-center gap-3 text-base">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && <span className="text-gray-500 text-2xl">/</span>}
            <a
              href={path.href}
              className={`relative px-2 py-1 transition-colors ${
                path.current
                  ? 'text-red-700 font-bold'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              {path.label}
              {path.current && (
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                  <path
                    d="M0 3 Q 10 1, 20 3 T 40 3 T 60 3 T 80 3 T 100 3"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    className="text-red-700"
                  />
                </svg>
              )}
            </a>
          </div>
        ))}
      </nav>

      {/* Cloud bubbles */}
      <nav className="flex items-center gap-4 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-4">
            {i > 0 && (
              <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                <circle cx="8" cy="12" r="1.5" fill="currentColor" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                <circle cx="16" cy="12" r="1.5" fill="currentColor" />
              </svg>
            )}
            <a
              href={path.href}
              className={`relative px-5 py-3 border-3 font-medium transition-all ${
                path.current
                  ? 'bg-purple-200 border-purple-800 text-purple-900 font-bold'
                  : 'bg-white border-gray-700 text-gray-800 hover:bg-yellow-100'
              }`}
              style={{
                borderWidth: '3px',
                borderRadius: '50% 40% 45% 50% / 45% 50% 40% 50%',
                transform: `rotate(${-2 + i}deg)`
              }}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* With home icon */}
      <nav className="flex items-center gap-3 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" d="M8 10 L 12 10 M 10 8 L 12 10 L 10 12" />
              </svg>
            )}
            {path.current ? (
              <span
                className="px-4 py-2 bg-green-200 border-2 border-green-800 text-green-900 font-bold"
                style={{
                  borderRadius: '10px 12px 9px 13px / 13px 9px 12px 10px'
                }}
              >
                {path.label}
              </span>
            ) : (
              <a
                href={path.href}
                className="px-4 py-2 bg-white border-2 border-gray-700 text-gray-700 hover:bg-blue-100 transition-colors flex items-center gap-2"
                style={{
                  borderRadius: '12px 10px 11px 9px / 9px 11px 10px 12px',
                  transform: `rotate(${i % 2 === 0 ? '-0.5' : '0.5'}deg)`
                }}
              >
                {i === 0 && (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12 L 12 4 L 21 12 M 5 10 L 5 20 L 10 20 L 10 15 L 14 15 L 14 20 L 19 20 L 19 10" />
                  </svg>
                )}
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* With dropdown */}
      <nav className="inline-flex items-center gap-3 px-6 py-4 bg-white border-3 border-gray-800 text-sm"
        style={{
          borderWidth: '3px',
          borderRadius: '15px 20px 18px 22px / 22px 18px 20px 15px'
        }}
      >
        <a
          href="#"
          className="text-gray-800 hover:text-blue-700 transition-colors font-medium flex items-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12 L 12 4 L 21 12 M 5 10 L 5 20 L 10 20 L 10 15 L 14 15 L 14 20 L 19 20 L 19 10" />
          </svg>
          Home
        </a>
        <span className="text-gray-600 text-xl">/</span>
        <a href="#" className="text-gray-800 hover:text-blue-700 transition-colors font-medium">
          Products
        </a>
        <span className="text-gray-600 text-xl">/</span>
        <div className="relative">
          <button
            onClick={() => setActiveDropdown(!activeDropdown)}
            className="text-gray-800 hover:text-blue-700 transition-colors font-medium flex items-center gap-1"
          >
            Electronics
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown && (
            <div
              className="absolute top-full left-0 mt-2 bg-white border-3 border-gray-800 z-10 min-w-[180px]"
              style={{
                borderWidth: '3px',
                borderRadius: '12px 15px 14px 16px / 16px 14px 15px 12px'
              }}
            >
              {dropdownItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="block px-5 py-3 text-gray-800 hover:bg-orange-100 transition-colors font-medium border-b-2 border-gray-300 last:border-b-0"
                  style={{
                    ...(idx === 0 && { borderRadius: '10px 13px 0 0 / 13px 10px 0 0' }),
                    ...(idx === dropdownItems.length - 1 && { borderRadius: '0 0 10px 13px / 0 0 13px 10px' })
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Responsive sketch */}
      <nav className="inline-flex items-center gap-3 px-5 py-3 bg-white border-3 border-gray-800 text-sm"
        style={{
          borderWidth: '3px',
          borderRadius: '18px 16px 20px 17px / 17px 20px 16px 18px'
        }}
      >
        <a href="#" className="text-gray-800 hover:text-blue-700 transition-colors font-medium flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12 L 12 4 L 21 12 M 5 10 L 5 20 L 10 20 L 10 15 L 14 15 L 14 20 L 19 20 L 19 10" />
          </svg>
          <span className="hidden md:inline">Home</span>
        </a>
        <span className="text-gray-600 text-xl">/</span>
        <span className="text-gray-600 md:hidden">...</span>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-gray-800 hover:text-blue-700 transition-colors font-medium">
            Products
          </a>
          <span className="text-gray-600 text-xl">/</span>
          <a href="#" className="text-gray-800 hover:text-blue-700 transition-colors font-medium">
            Electronics
          </a>
          <span className="text-gray-600 text-xl">/</span>
        </div>
        <span className="text-red-700 font-bold">Smartphones</span>
      </nav>
    </div>
  );
}
