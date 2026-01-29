"use client";

import React, { useState } from "react";

export default function MaterialBreadcrumb() {
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
      <h2 className="text-xs font-medium text-gray-500 uppercase tracking-widest">Material Design Breadcrumbs</h2>

      {/* Basic Material breadcrumb */}
      <nav className="inline-flex items-center gap-1 text-sm bg-white rounded-lg shadow-sm px-4 py-3">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-1">
            {i > 0 && (
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            {path.current ? (
              <span className="text-blue-600 font-medium px-2 py-1">{path.label}</span>
            ) : (
              <a
                href={path.href}
                className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md hover:bg-blue-50 transition-all duration-200"
              >
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* With ripple effect simulation */}
      <nav className="inline-flex items-center gap-2 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && (
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            <a
              href={path.href}
              className={`relative overflow-hidden px-4 py-2 rounded-lg transition-all duration-200 ${
                path.current
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
              }`}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Elevated Material cards */}
      <nav className="inline-flex items-center gap-3 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            <a
              href={path.href}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                path.current
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {path.icon && i === 0 && (
                <svg className="w-4 h-4 inline-block mr-1.5 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              )}
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Compact Material */}
      <nav className="inline-flex items-center bg-white rounded-full shadow-md text-sm overflow-hidden">
        {paths.map((path, i) => (
          <a
            key={i}
            href={path.href}
            className={`px-5 py-2.5 transition-all duration-200 ${
              path.current
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            } ${i > 0 ? 'border-l border-gray-200' : ''}`}
          >
            {path.label}
          </a>
        ))}
      </nav>

      {/* Colored Material */}
      <nav className="inline-flex items-center gap-2 bg-white rounded-xl shadow-lg p-4 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-gray-300">/</span>}
            <a
              href={path.href}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                path.current
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* With dropdown menu */}
      <nav className="inline-flex items-center gap-2 bg-white rounded-lg shadow-md px-4 py-3 text-sm">
        <a href="#" className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md hover:bg-blue-50 transition-all duration-200 flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Home
        </a>
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <a href="#" className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md hover:bg-blue-50 transition-all duration-200">
          Products
        </a>
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <div className="relative">
          <button
            onClick={() => setActiveDropdown(!activeDropdown)}
            className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md hover:bg-blue-50 transition-all duration-200 flex items-center gap-1"
          >
            Electronics
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl z-10 min-w-[160px] py-1 border border-gray-100">
              {dropdownItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Responsive Material */}
      <nav className="inline-flex items-center gap-2 bg-white rounded-lg shadow-md px-4 py-3 text-sm">
        <a href="#" className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md hover:bg-blue-50 transition-all duration-200 flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span className="hidden sm:inline">Home</span>
        </a>
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-400 sm:hidden">...</span>
        <div className="hidden sm:flex items-center gap-2">
          <a href="#" className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md hover:bg-blue-50 transition-all duration-200">
            Products
          </a>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <a href="#" className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md hover:bg-blue-50 transition-all duration-200">
            Electronics
          </a>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <span className="text-blue-600 font-medium px-2 py-1">Smartphones</span>
      </nav>
    </div>
  );
}
