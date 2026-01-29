"use client";

import React, { useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const PlayfulBreadcrumb = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Games", href: "/games" },
    { label: "Adventure", href: "/games/adventure" },
    { label: "Quest" },
  ];

  const dropdownItems = [
    { label: "Puzzle", href: "/games/adventure/puzzle" },
    { label: "Action", href: "/games/adventure/action" },
    { label: "Story", href: "/games/adventure/story" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 min-h-screen">
      {/* Bouncy Fun Style */}
      <nav className="mb-12 bg-white rounded-3xl p-6 shadow-2xl border-4 border-yellow-300 transform hover:rotate-1 transition-transform">
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-3xl animate-bounce">🎯</span>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-base font-black text-white px-6 py-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-lg transform hover:scale-110 transition-transform">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className="text-base font-bold text-orange-600 px-6 py-3 bg-yellow-200 hover:bg-yellow-300 rounded-full shadow-md hover:shadow-xl transform hover:scale-110 hover:-rotate-3 transition-all"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Cartoon Style */}
      <nav className="mb-12 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 rounded-[2rem] p-8 shadow-2xl border-6 border-white transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl animate-spin">⭐</span>
          <span className="text-lg font-black text-white drop-shadow-lg">
            Your Journey
          </span>
        </div>
        <ol className="flex flex-wrap items-center gap-3">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <div className="mx-2 flex flex-col gap-1">
                  <div className="w-6 h-1 bg-white rounded-full"></div>
                  <div className="w-6 h-1 bg-white rounded-full"></div>
                  <div className="w-6 h-1 bg-white rounded-full"></div>
                </div>
              )}
              <a
                href={crumb.href}
                className="text-base font-black text-purple-900 px-7 py-3 bg-white hover:bg-yellow-200 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all border-4 border-purple-400"
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Sticker Style */}
      <nav className="mb-12 bg-white rounded-2xl p-6 shadow-xl border-4 border-dashed border-pink-400">
        <ol className="flex flex-wrap items-center gap-4">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-8 h-8 mx-2 text-pink-400 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <a
                href={crumb.href}
                className={`relative text-base font-bold px-8 py-4 rounded-xl shadow-lg transform transition-all ${
                  index === breadcrumbs.length - 1
                    ? "bg-gradient-to-br from-pink-400 to-purple-500 text-white rotate-2 scale-110"
                    : "bg-gradient-to-br from-yellow-300 to-orange-300 text-orange-900 hover:rotate-3 hover:scale-105"
                }`}
              >
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-3 border-white flex items-center justify-center text-xs text-white font-black">
                  {index + 1}
                </div>
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* With Dropdown - Game Level Style */}
      <nav className="mb-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-8 shadow-2xl border-6 border-green-600">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-3xl">🎮</span>
          <span className="text-xl font-black text-white">Level Path</span>
          <div className="ml-auto flex gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg rotate-45 animate-pulse"></div>
            <div className="w-8 h-8 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="w-8 h-8 bg-blue-400 rounded-lg -rotate-12 animate-pulse"></div>
          </div>
        </div>
        <ol className="flex flex-wrap items-center gap-3">
          {breadcrumbs.slice(0, 2).map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-3 text-3xl text-white">➜</span>
              )}
              <a
                href={crumb.href}
                className="text-base font-black text-green-900 px-7 py-3 bg-white hover:bg-yellow-200 rounded-2xl shadow-xl transform hover:scale-110 hover:rotate-6 transition-all"
              >
                {crumb.label}
              </a>
            </li>
          ))}
          <span className="mx-3 text-3xl text-white">➜</span>
          <li className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 0 ? null : 0)}
              className="flex items-center gap-3 text-base font-black text-white px-7 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-2xl shadow-xl transform hover:scale-110 transition-all"
            >
              <span>More Fun!</span>
              <span className="text-2xl animate-bounce">⬇</span>
            </button>
            {activeDropdown === 0 && (
              <div className="absolute top-full left-0 mt-4 bg-white rounded-2xl shadow-2xl z-10 min-w-[220px] overflow-hidden border-6 border-orange-400">
                {dropdownItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 text-base font-bold text-orange-900 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 px-6 py-4 transition-all"
                  >
                    <span className="text-2xl">🎯</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            )}
          </li>
        </ol>
      </nav>

      {/* Doodle Style */}
      <nav className="relative bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-black overflow-hidden">
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="w-4 h-4 bg-red-400 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
        </div>
        <div className="mb-6">
          <span className="text-2xl font-black text-gray-800 underline decoration-wavy decoration-pink-400 decoration-4">
            Where You Are
          </span>
        </div>
        <ol className="flex flex-wrap items-center gap-4">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <div className="mx-3 relative">
                  <svg
                    className="w-12 h-12 text-purple-400"
                    fill="none"
                    strokeWidth="3"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              )}
              <a
                href={crumb.href}
                className={`relative text-base font-black px-8 py-4 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform transition-all ${
                  index === breadcrumbs.length - 1
                    ? "bg-yellow-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white hover:bg-pink-200 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                } hover:-translate-y-1`}
              >
                {crumb.label}
                {index === breadcrumbs.length - 1 && (
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full border-3 border-black flex items-center justify-center text-white font-black transform rotate-12">
                    !
                  </div>
                )}
              </a>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex gap-2">
          <div className="h-2 flex-1 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"></div>
        </div>
      </nav>
    </div>
  );
};

export default PlayfulBreadcrumb;
