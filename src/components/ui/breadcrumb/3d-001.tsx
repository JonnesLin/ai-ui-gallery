"use client";

import React, { useState } from "react";

export default function ThreeDimensionalBreadcrumb() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8 space-y-12">
      <h2 className="text-xs font-medium text-gray-600 uppercase tracking-widest">3D Breadcrumbs</h2>

      {/* Raised 3D buttons */}
      <nav className="flex items-center gap-3 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            <a
              href={path.href}
              className={`px-5 py-3 rounded-lg font-medium transition-all ${
                path.current
                  ? 'bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0_6px_0_rgb(29,78,216),0_10px_15px_rgba(0,0,0,0.3)]'
                  : 'bg-gradient-to-b from-white to-gray-100 text-gray-700 shadow-[0_4px_0_rgb(209,213,219),0_6px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_2px_0_rgb(209,213,219),0_4px_8px_rgba(0,0,0,0.15)] hover:translate-y-0.5'
              }`}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Extruded blocks */}
      <nav className="flex items-center gap-4 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-4">
            {i > 0 && (
              <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            <a
              href={path.href}
              className={`relative px-6 py-3 font-semibold rounded-md transition-all ${
                path.current
                  ? 'bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-[4px_4px_0_rgb(107,33,168),8px_8px_20px_rgba(0,0,0,0.3)]'
                  : 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800 shadow-[3px_3px_0_rgb(156,163,175),6px_6px_15px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_rgb(156,163,175),4px_4px_12px_rgba(0,0,0,0.2)] hover:translate-x-0.5 hover:translate-y-0.5'
              }`}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Layered cards */}
      <nav className="flex items-center gap-5 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-5">
            {i > 0 && (
              <div className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 shadow-md"></div>
            )}
            <a
              href={path.href}
              className={`relative px-5 py-3 rounded-xl font-medium transition-all ${
                path.current
                  ? 'bg-gradient-to-t from-green-600 via-green-500 to-green-400 text-white shadow-[0_8px_0_rgb(22,101,52),0_12px_20px_rgba(0,0,0,0.3)]'
                  : 'bg-gradient-to-t from-gray-300 via-gray-200 to-white text-gray-700 shadow-[0_5px_0_rgb(209,213,219),0_8px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_3px_0_rgb(209,213,219),0_6px_12px_rgba(0,0,0,0.2)] hover:translate-y-1'
              }`}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Embossed style */}
      <nav className="inline-flex items-center gap-0 overflow-hidden rounded-2xl shadow-2xl text-sm">
        {paths.map((path, i) => (
          <a
            key={i}
            href={path.href}
            className={`px-6 py-4 border-r border-gray-300 last:border-r-0 font-medium transition-all ${
              path.current
                ? 'bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-inner'
                : 'bg-gradient-to-b from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300'
            }`}
            style={{
              textShadow: path.current ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 0 rgba(255,255,255,0.8)'
            }}
          >
            {path.label}
          </a>
        ))}
      </nav>

      {/* Neumorphic 3D */}
      <nav className="inline-flex items-center gap-4 px-6 py-5 bg-gray-200 rounded-3xl shadow-[inset_8px_8px_15px_rgba(0,0,0,0.1),inset_-8px_-8px_15px_rgba(255,255,255,0.7)] text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-4">
            {i > 0 && (
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            <a
              href={path.href}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                path.current
                  ? 'bg-gray-200 text-blue-600 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]'
                  : 'bg-gray-200 text-gray-700 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.7)]'
              }`}
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
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            {path.current ? (
              <span
                className="px-5 py-3 rounded-lg font-semibold bg-gradient-to-b from-orange-400 to-orange-600 text-white shadow-[0_6px_0_rgb(194,65,12),0_10px_15px_rgba(0,0,0,0.3)]"
              >
                {path.label}
              </span>
            ) : (
              <a
                href={path.href}
                className="px-5 py-3 rounded-lg font-medium bg-gradient-to-b from-white to-gray-100 text-gray-700 shadow-[0_4px_0_rgb(209,213,219),0_6px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_2px_0_rgb(209,213,219),0_4px_8px_rgba(0,0,0,0.15)] hover:translate-y-0.5 transition-all flex items-center gap-2"
              >
                {i === 0 && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                )}
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* With dropdown */}
      <nav className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-[0_8px_0_rgb(209,213,219),0_12px_20px_rgba(0,0,0,0.2)] text-sm">
        <a
          href="#"
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Home
        </a>
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
          Products
        </a>
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <div className="relative">
          <button
            onClick={() => setActiveDropdown(!activeDropdown)}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1"
          >
            Electronics
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown && (
            <div className="absolute top-full left-0 mt-3 bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-[0_8px_0_rgb(209,213,219),0_12px_20px_rgba(0,0,0,0.25)] z-10 min-w-[180px] overflow-hidden">
              {dropdownItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium border-b border-gray-200 last:border-b-0"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Responsive 3D */}
      <nav className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-[0_6px_0_rgb(209,213,219),0_10px_15px_rgba(0,0,0,0.2)] text-sm">
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span className="hidden md:inline">Home</span>
        </a>
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-500 md:hidden">...</span>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Products
          </a>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Electronics
          </a>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <span className="text-blue-600 font-semibold">Smartphones</span>
      </nav>
    </div>
  );
}
