"use client";

import React, { useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const LuxuryBreadcrumb = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "Haute Couture", href: "/collections/haute-couture" },
    { label: "Evening Wear" },
  ];

  const dropdownItems = [
    { label: "Jewelry", href: "/collections/haute-couture/jewelry" },
    { label: "Accessories", href: "/collections/haute-couture/accessories" },
    { label: "Footwear", href: "/collections/haute-couture/footwear" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gradient-to-b from-slate-900 via-gray-900 to-black min-h-screen">
      {/* Gold Elegance Style */}
      <nav className="mb-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-lg p-8 shadow-2xl border border-yellow-600/30">
        <ol className="flex flex-wrap items-center gap-0">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-4 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-sm font-light tracking-wider text-yellow-600 px-6 py-2 border-b-2 border-yellow-600">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className="text-sm font-light tracking-wider text-gray-400 hover:text-yellow-600 px-6 py-2 border-b border-transparent hover:border-yellow-600/50 transition-all"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Diamond Border Style */}
      <nav className="mb-12 relative bg-black rounded p-8 shadow-2xl border-2 border-gray-700">
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
        <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <span className="text-xs font-light tracking-[0.2em] text-gray-400 uppercase">
            Navigation
          </span>
        </div>
        <ol className="flex flex-wrap items-center gap-0">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-5 text-gray-700">|</span>
              )}
              <a
                href={crumb.href}
                className={`text-sm font-light tracking-wide px-5 py-2 transition-all ${
                  index === breadcrumbs.length - 1
                    ? "text-yellow-600"
                    : "text-gray-500 hover:text-yellow-600"
                }`}
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Platinum Style */}
      <nav className="mb-12 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-gray-600/50">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700/50">
          <span className="text-xs font-light tracking-[0.3em] text-gray-400 uppercase">
            Current Path
          </span>
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <ol className="flex flex-wrap items-center gap-3">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <div className="mx-3 w-8 h-px bg-gradient-to-r from-gray-700 to-gray-600"></div>
              )}
              <a
                href={crumb.href}
                className={`text-sm font-light tracking-wide px-6 py-3 rounded transition-all ${
                  index === breadcrumbs.length - 1
                    ? "text-yellow-600 bg-yellow-600/10 border border-yellow-600/30"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                }`}
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* With Dropdown - Elite Style */}
      <nav className="mb-12 bg-gradient-to-r from-amber-900/20 via-yellow-900/20 to-amber-900/20 rounded-lg p-8 shadow-2xl border-2 border-yellow-600/20 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-6">
          <svg
            className="w-6 h-6 text-yellow-600"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <span className="text-sm font-light tracking-[0.25em] text-yellow-600 uppercase">
            Prestige Collection
          </span>
        </div>
        <ol className="flex flex-wrap items-center gap-0">
          {breadcrumbs.slice(0, 2).map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-4 text-yellow-600/40 text-sm">•</span>
              )}
              <a
                href={crumb.href}
                className="text-sm font-light tracking-wide text-gray-400 hover:text-yellow-600 px-5 py-2 transition-all"
              >
                {crumb.label}
              </a>
            </li>
          ))}
          <span className="mx-4 text-yellow-600/40 text-sm">•</span>
          <li className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 0 ? null : 0)}
              className="flex items-center gap-3 text-sm font-light tracking-wide text-gray-300 hover:text-yellow-600 px-5 py-2 transition-all"
            >
              <span>Explore More</span>
              <svg
                className="w-4 h-4"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeDropdown === 0 && (
              <div className="absolute top-full left-0 mt-3 bg-black/95 backdrop-blur-lg rounded-lg shadow-2xl border border-yellow-600/30 z-10 min-w-[260px] overflow-hidden">
                <div className="p-2">
                  {dropdownItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block text-sm font-light tracking-wide text-gray-400 hover:text-yellow-600 hover:bg-yellow-600/5 px-5 py-3 rounded transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ol>
      </nav>

      {/* Royal Style */}
      <nav className="relative bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-950 rounded-2xl p-10 shadow-[0_25px_80px_rgba(0,0,0,0.9)] border-2 border-purple-700/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-purple-800/50">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-5 h-5 text-purple-950"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm font-light tracking-[0.3em] text-purple-300 uppercase">
              Royal Navigation
            </span>
          </div>
          <ol className="flex flex-wrap items-center gap-3">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="w-5 h-5 mx-4 text-purple-600"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                <a
                  href={crumb.href}
                  className={`text-sm font-light tracking-wider px-7 py-3 rounded-lg transition-all ${
                    index === breadcrumbs.length - 1
                      ? "text-yellow-600 bg-yellow-600/10 border border-yellow-600/40 shadow-lg shadow-yellow-600/20"
                      : "text-purple-300 hover:text-purple-100 hover:bg-purple-800/30"
                  }`}
                >
                  {crumb.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default LuxuryBreadcrumb;
