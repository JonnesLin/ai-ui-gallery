"use client";

import React, { useState } from "react";

export default function FlatBreadcrumb() {
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
    <div className="min-h-screen bg-gray-50 p-8 space-y-12">
      <h2 className="text-xs font-medium text-gray-500 uppercase tracking-widest">Flat Breadcrumbs</h2>

      {/* Pure flat colors */}
      <nav className="flex items-center gap-2 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-gray-400">/</span>}
            {path.current ? (
              <span className="px-4 py-2 bg-blue-500 text-white font-medium">{path.label}</span>
            ) : (
              <a href={path.href} className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors font-medium">
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* Colorful flat blocks */}
      <nav className="inline-flex items-center gap-0 overflow-hidden text-sm">
        {paths.map((path, i) => {
          const colors = [
            { bg: 'bg-red-500', hover: 'hover:bg-red-600', text: 'text-white' },
            { bg: 'bg-orange-500', hover: 'hover:bg-orange-600', text: 'text-white' },
            { bg: 'bg-yellow-500', hover: 'hover:bg-yellow-600', text: 'text-white' },
            { bg: 'bg-green-500', hover: 'hover:bg-green-600', text: 'text-white' },
          ];
          const color = colors[i % colors.length];

          return (
            <a
              key={i}
              href={path.href}
              className={`px-6 py-3 ${color.bg} ${color.text} ${color.hover} transition-colors font-medium ${
                path.current ? 'opacity-100' : 'opacity-90'
              }`}
            >
              {path.label}
            </a>
          );
        })}
      </nav>

      {/* Minimal flat */}
      <nav className="flex items-center gap-3 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            <a
              href={path.href}
              className={`px-5 py-2 transition-colors font-medium ${
                path.current
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-purple-100'
              }`}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Pastel flat */}
      <nav className="inline-flex items-center gap-2 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && (
              <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            <a
              href={path.href}
              className={`px-5 py-2.5 transition-colors font-medium ${
                path.current
                  ? 'bg-pink-400 text-white'
                  : 'bg-pink-100 text-pink-900 hover:bg-pink-200'
              }`}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Bordered flat */}
      <nav className="inline-flex items-center gap-0 overflow-hidden border-2 border-gray-800 text-sm">
        {paths.map((path, i) => (
          <a
            key={i}
            href={path.href}
            className={`px-6 py-3 border-r-2 border-gray-800 last:border-r-0 font-medium transition-colors ${
              path.current
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
          >
            {path.label}
          </a>
        ))}
      </nav>

      {/* Vibrant flat */}
      <nav className="flex items-center gap-3 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && <span className="w-2 h-2 bg-gray-400"></span>}
            <a
              href={path.href}
              className={`px-6 py-2.5 font-semibold transition-colors ${
                path.current
                  ? 'bg-teal-500 text-white'
                  : 'bg-teal-100 text-teal-900 hover:bg-teal-200'
              }`}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Metro style flat */}
      <nav className="inline-flex items-center gap-0 text-sm">
        {paths.map((path, i) => (
          <a
            key={i}
            href={path.href}
            className={`px-8 py-4 font-bold transition-colors ${
              path.current
                ? 'bg-blue-600 text-white'
                : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
            }`}
          >
            {path.label}
          </a>
        ))}
      </nav>

      {/* With home icon */}
      <nav className="flex items-center gap-2 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-gray-400">/</span>}
            {path.current ? (
              <span className="px-4 py-2 bg-indigo-600 text-white font-medium flex items-center gap-2">
                {path.label}
              </span>
            ) : (
              <a
                href={path.href}
                className="px-4 py-2 bg-indigo-100 text-indigo-900 hover:bg-indigo-200 transition-colors font-medium flex items-center gap-2"
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
      <nav className="inline-flex items-center gap-3 px-6 py-4 bg-white text-sm">
        <a href="#" className="px-4 py-2 bg-emerald-500 text-white hover:bg-emerald-600 transition-colors font-medium flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Home
        </a>
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <a href="#" className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors font-medium">
          Products
        </a>
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <div className="relative">
          <button
            onClick={() => setActiveDropdown(!activeDropdown)}
            className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors font-medium flex items-center gap-1"
          >
            Electronics
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-white border-2 border-gray-200 z-10 min-w-[160px]">
              {dropdownItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="block px-5 py-3 text-gray-700 hover:bg-emerald-500 hover:text-white transition-colors font-medium border-b border-gray-200 last:border-b-0"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Responsive flat */}
      <nav className="inline-flex items-center gap-2 px-5 py-3 bg-white text-sm">
        <a href="#" className="px-4 py-2 bg-cyan-500 text-white hover:bg-cyan-600 transition-colors font-medium flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span className="hidden md:inline">Home</span>
        </a>
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-500 md:hidden">...</span>
        <div className="hidden md:flex items-center gap-2">
          <a href="#" className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors font-medium">
            Products
          </a>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <a href="#" className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors font-medium">
            Electronics
          </a>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <span className="px-4 py-2 bg-cyan-600 text-white font-semibold">Smartphones</span>
      </nav>
    </div>
  );
}
