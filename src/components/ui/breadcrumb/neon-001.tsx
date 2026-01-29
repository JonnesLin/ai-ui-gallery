"use client";

import React, { useState } from "react";

export default function NeonBreadcrumb() {
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
    <div className="min-h-screen bg-black p-8 space-y-12">
      <h2 className="text-xs font-medium text-cyan-400 uppercase tracking-widest">Neon Breadcrumbs</h2>

      {/* Pink neon glow */}
      <nav className="flex items-center gap-3 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <svg
                className="w-4 h-4 text-pink-500"
                style={{ filter: 'drop-shadow(0 0 4px rgb(236, 72, 153))' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            {path.current ? (
              <span
                className="text-pink-500 font-medium px-4 py-2 border border-pink-500 rounded"
                style={{
                  textShadow: '0 0 10px rgb(236, 72, 153), 0 0 20px rgb(236, 72, 153)',
                  boxShadow: '0 0 10px rgb(236, 72, 153), 0 0 20px rgb(236, 72, 153)'
                }}
              >
                {path.label}
              </span>
            ) : (
              <a
                href={path.href}
                className="text-pink-500 hover:text-pink-400 px-4 py-2 border border-pink-500/50 rounded transition-all"
                style={{
                  textShadow: '0 0 8px rgb(236, 72, 153)',
                  boxShadow: '0 0 8px rgb(236, 72, 153)'
                }}
              >
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* Cyan neon tubes */}
      <nav className="inline-flex items-center gap-0 text-sm overflow-hidden rounded-lg">
        {paths.map((path, i) => (
          <a
            key={i}
            href={path.href}
            className={`px-6 py-3 border-r border-cyan-500/30 last:border-r-0 transition-all ${
              path.current
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'text-cyan-500 hover:bg-cyan-500/10'
            }`}
            style={path.current ? {
              textShadow: '0 0 10px rgb(6, 182, 212), 0 0 20px rgb(6, 182, 212)',
              boxShadow: 'inset 0 0 20px rgb(6, 182, 212)'
            } : {
              textShadow: '0 0 8px rgb(6, 182, 212)'
            }}
          >
            {path.label}
          </a>
        ))}
      </nav>

      {/* Multi-color neon */}
      <nav className="flex items-center gap-4 text-sm">
        {paths.map((path, i) => {
          const colors = [
            { text: 'text-blue-500', border: 'border-blue-500', rgb: 'rgb(59, 130, 246)' },
            { text: 'text-purple-500', border: 'border-purple-500', rgb: 'rgb(168, 85, 247)' },
            { text: 'text-pink-500', border: 'border-pink-500', rgb: 'rgb(236, 72, 153)' },
            { text: 'text-cyan-500', border: 'border-cyan-500', rgb: 'rgb(6, 182, 212)' },
          ];
          const color = colors[i % colors.length];

          return (
            <div key={i} className="flex items-center gap-4">
              {i > 0 && (
                <svg
                  className={`w-4 h-4 ${color.text}`}
                  style={{ filter: `drop-shadow(0 0 4px ${color.rgb})` }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
              <a
                href={path.href}
                className={`${color.text} px-4 py-2 border ${color.border} rounded-lg transition-all hover:scale-105 ${
                  path.current ? 'font-bold' : ''
                }`}
                style={{
                  textShadow: `0 0 10px ${color.rgb}, 0 0 20px ${color.rgb}`,
                  boxShadow: `0 0 15px ${color.rgb}${path.current ? ', inset 0 0 15px ' + color.rgb : ''}`
                }}
              >
                {path.label}
              </a>
            </div>
          );
        })}
      </nav>

      {/* Purple neon bars */}
      <nav className="inline-flex items-center gap-2 px-6 py-4 bg-purple-950/30 border border-purple-500 rounded-xl text-sm"
        style={{ boxShadow: '0 0 30px rgb(168, 85, 247)' }}
      >
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-purple-500">/</span>}
            {path.current ? (
              <span
                className="text-purple-400 font-semibold"
                style={{ textShadow: '0 0 10px rgb(168, 85, 247)' }}
              >
                {path.label}
              </span>
            ) : (
              <a
                href={path.href}
                className="text-purple-500 hover:text-purple-400 transition-colors"
                style={{ textShadow: '0 0 8px rgb(168, 85, 247)' }}
              >
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* Green matrix style */}
      <nav className="flex items-center gap-3 text-sm font-mono">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <span
                className="text-green-500"
                style={{ textShadow: '0 0 8px rgb(34, 197, 94)' }}
              >
                {'>>'}
              </span>
            )}
            <a
              href={path.href}
              className={`px-4 py-2 border rounded transition-all ${
                path.current
                  ? 'border-green-500 text-green-400 bg-green-500/20'
                  : 'border-green-500/50 text-green-500 hover:border-green-400 hover:bg-green-500/10'
              }`}
              style={path.current ? {
                textShadow: '0 0 10px rgb(34, 197, 94)',
                boxShadow: '0 0 20px rgb(34, 197, 94), inset 0 0 10px rgb(34, 197, 94)'
              } : {
                textShadow: '0 0 8px rgb(34, 197, 94)',
                boxShadow: '0 0 10px rgb(34, 197, 94)'
              }}
            >
              [{path.label}]
            </a>
          </div>
        ))}
      </nav>

      {/* With dropdown */}
      <nav className="inline-flex items-center gap-3 px-6 py-4 bg-cyan-950/30 border border-cyan-500 rounded-xl text-sm"
        style={{ boxShadow: '0 0 30px rgb(6, 182, 212)' }}
      >
        <a
          href="#"
          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          style={{ textShadow: '0 0 10px rgb(6, 182, 212)' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Home
        </a>
        <span className="text-cyan-500">/</span>
        <a
          href="#"
          className="text-cyan-500 hover:text-cyan-400 transition-colors"
          style={{ textShadow: '0 0 8px rgb(6, 182, 212)' }}
        >
          Products
        </a>
        <span className="text-cyan-500">/</span>
        <div className="relative">
          <button
            onClick={() => setActiveDropdown(!activeDropdown)}
            className="text-cyan-500 hover:text-cyan-400 transition-colors flex items-center gap-1"
            style={{ textShadow: '0 0 8px rgb(6, 182, 212)' }}
          >
            Electronics
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown && (
            <div
              className="absolute top-full left-0 mt-2 bg-black border border-cyan-500 rounded-lg z-10 min-w-[160px]"
              style={{ boxShadow: '0 0 20px rgb(6, 182, 212)' }}
            >
              {dropdownItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="block px-4 py-3 text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all border-b border-cyan-500/30 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                  style={{ textShadow: '0 0 8px rgb(6, 182, 212)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Responsive neon */}
      <nav className="inline-flex items-center gap-3 px-5 py-3 border border-pink-500 rounded-lg text-sm"
        style={{ boxShadow: '0 0 25px rgb(236, 72, 153)' }}
      >
        <a
          href="#"
          className="text-pink-500 hover:text-pink-400 transition-colors flex items-center gap-1.5"
          style={{ textShadow: '0 0 10px rgb(236, 72, 153)' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span className="hidden md:inline">Home</span>
        </a>
        <span className="text-pink-500">/</span>
        <span className="text-pink-500/60 md:hidden">...</span>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-pink-500 hover:text-pink-400 transition-colors"
            style={{ textShadow: '0 0 8px rgb(236, 72, 153)' }}
          >
            Products
          </a>
          <span className="text-pink-500">/</span>
          <a
            href="#"
            className="text-pink-500 hover:text-pink-400 transition-colors"
            style={{ textShadow: '0 0 8px rgb(236, 72, 153)' }}
          >
            Electronics
          </a>
          <span className="text-pink-500">/</span>
        </div>
        <span
          className="text-pink-400 font-semibold"
          style={{ textShadow: '0 0 10px rgb(236, 72, 153)' }}
        >
          Smartphones
        </span>
      </nav>
    </div>
  );
}
