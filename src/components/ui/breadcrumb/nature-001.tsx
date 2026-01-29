"use client";

import React, { useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const NatureBreadcrumb = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Explore", href: "/explore" },
    { label: "Forest", href: "/explore/forest" },
    { label: "Wildlife" },
  ];

  const dropdownItems = [
    { label: "Birds", href: "/explore/forest/birds" },
    { label: "Mammals", href: "/explore/forest/mammals" },
    { label: "Plants", href: "/explore/forest/plants" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50 min-h-screen">
      {/* Organic Leaf Style */}
      <nav className="mb-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-6 shadow-xl border-2 border-green-200">
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-6 h-6 mx-3 text-green-600"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-sm font-semibold text-green-800 px-6 py-3 bg-green-200 rounded-full shadow-md">
                  🌿 {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className="text-sm font-medium text-green-700 hover:text-green-900 px-6 py-3 bg-white hover:bg-green-50 rounded-full shadow-sm hover:shadow-md transition-all"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Wood Texture Style */}
      <nav className="mb-12 bg-gradient-to-br from-amber-100 via-yellow-100 to-amber-100 rounded-2xl p-6 shadow-xl border-4 border-amber-300">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-amber-300/50">
          <span className="text-2xl">🌳</span>
          <span className="text-sm font-semibold text-amber-900">
            Trail Path
          </span>
        </div>
        <ol className="flex flex-wrap items-center gap-0">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-3 text-amber-600 font-bold">/</span>
              )}
              <a
                href={crumb.href}
                className={`text-sm font-medium px-5 py-2 rounded-lg transition-all ${
                  index === breadcrumbs.length - 1
                    ? "text-white bg-amber-700 shadow-md"
                    : "text-amber-800 hover:text-amber-900 hover:bg-amber-200"
                }`}
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Garden Style */}
      <nav className="mb-12 relative bg-white rounded-[2rem] p-8 shadow-2xl border-4 border-green-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-200/40 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-200/40 to-transparent rounded-tr-full"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xl">🍃</span>
            <span className="text-xl">🌺</span>
            <span className="text-xl">🦋</span>
          </div>
          <ol className="flex flex-wrap items-center gap-3">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <div className="mx-3 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  </div>
                )}
                <a
                  href={crumb.href}
                  className="text-sm font-semibold text-green-800 hover:text-green-600 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 rounded-2xl shadow-md hover:shadow-lg transition-all"
                >
                  {crumb.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* With Dropdown - Forest Trail */}
      <nav className="mb-12 bg-gradient-to-br from-green-800 via-emerald-800 to-teal-800 rounded-xl p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xl">🌲</span>
          </div>
          <span className="text-base font-semibold text-green-100">
            Nature Path
          </span>
        </div>
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.slice(0, 2).map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-5 h-5 mx-3 text-green-400"
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
                className="text-sm font-medium text-green-100 hover:text-white px-5 py-2 bg-green-700/50 hover:bg-green-600/50 rounded-lg transition-all"
              >
                {crumb.label}
              </a>
            </li>
          ))}
          <svg
            className="w-5 h-5 mx-3 text-green-400"
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
          <li className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 0 ? null : 0)}
              className="flex items-center gap-2 text-sm font-medium text-white px-5 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-lg transition-all"
            >
              <span>Discover More</span>
              <span className="text-lg">🔍</span>
            </button>
            {activeDropdown === 0 && (
              <div className="absolute top-full left-0 mt-3 bg-white rounded-xl shadow-2xl z-10 min-w-[220px] overflow-hidden border-2 border-green-200">
                {dropdownItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 text-sm font-medium text-green-800 hover:text-green-600 hover:bg-green-50 px-5 py-3 transition-all"
                  >
                    <span className="text-lg">🌿</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            )}
          </li>
        </ol>
      </nav>

      {/* Botanical Style */}
      <nav className="bg-white rounded-3xl p-8 shadow-2xl border-8 border-green-200">
        <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-green-200">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-base font-bold text-green-900">
              Botanical Navigation
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-2xl">🌸</span>
            <span className="text-2xl">🍀</span>
          </div>
        </div>
        <ol className="flex flex-wrap items-center gap-3">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <div className="mx-3 w-12 h-0.5 bg-gradient-to-r from-green-300 via-emerald-400 to-green-300"></div>
              )}
              <a
                href={crumb.href}
                className={`text-sm font-semibold px-7 py-3 rounded-2xl transition-all shadow-md ${
                  index === breadcrumbs.length - 1
                    ? "text-white bg-gradient-to-r from-green-500 to-emerald-600 shadow-green-300"
                    : "text-green-800 bg-green-100 hover:bg-green-200 hover:shadow-lg"
                }`}
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex gap-3">
          <div className="flex-1 h-1 bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 rounded-full"></div>
        </div>
      </nav>
    </div>
  );
};

export default NatureBreadcrumb;
