"use client";

import React, { useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const PastelBreadcrumb = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Accessories", href: "/shop/accessories" },
    { label: "Jewelry" },
  ];

  const dropdownItems = [
    { label: "Necklaces", href: "/shop/accessories/necklaces" },
    { label: "Bracelets", href: "/shop/accessories/bracelets" },
    { label: "Earrings", href: "/shop/accessories/earrings" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen">
      {/* Soft Rounded Style */}
      <nav className="mb-12 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg shadow-purple-100/50">
        <ol className="flex flex-wrap items-center gap-3">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-5 h-5 mx-2 text-purple-300"
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
              {index === breadcrumbs.length - 1 ? (
                <span className="text-sm font-medium text-purple-600 px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full shadow-sm">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className="text-sm font-medium text-purple-500 hover:text-purple-700 px-5 py-2 bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-full shadow-sm hover:shadow-md transition-all"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Candy Colors */}
      <nav className="mb-12 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-2xl p-6 shadow-lg">
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-purple-400 text-xl">•</span>
              )}
              <a
                href={crumb.href}
                className={`text-sm font-semibold px-6 py-2 rounded-full transition-all ${
                  index === breadcrumbs.length - 1
                    ? "bg-gradient-to-r from-purple-300 to-pink-300 text-white shadow-md"
                    : "bg-white text-purple-600 hover:bg-purple-50 hover:shadow-md"
                }`}
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Cloud Style */}
      <nav className="mb-12 bg-white/70 backdrop-blur-md rounded-[2rem] p-6 shadow-2xl shadow-blue-100/50 border border-white/50">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-300 to-pink-400"></div>
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-300 to-purple-400"></div>
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-300 to-blue-400"></div>
        </div>
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-purple-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              )}
              <a
                href={crumb.href}
                className="text-sm font-medium text-purple-600 hover:text-purple-800 px-5 py-2.5 bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-2xl shadow-sm hover:shadow-lg transition-all"
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* With Dropdown - Kawaii Style */}
      <nav className="mb-12 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🏠</span>
          <span className="text-sm font-semibold text-purple-600">
            You are here:
          </span>
        </div>
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.slice(0, 2).map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-2xl">→</span>
              )}
              <a
                href={crumb.href}
                className="text-sm font-semibold text-purple-700 px-6 py-2.5 bg-white hover:bg-purple-50 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                {crumb.label}
              </a>
            </li>
          ))}
          <span className="mx-2 text-2xl">→</span>
          <li className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 0 ? null : 0)}
              className="flex items-center gap-2 text-sm font-semibold text-white px-6 py-2.5 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>More</span>
              <span className="text-xs">♥</span>
            </button>
            {activeDropdown === 0 && (
              <div className="absolute top-full left-0 mt-3 bg-white rounded-2xl shadow-2xl z-10 min-w-[200px] overflow-hidden border-4 border-purple-100">
                {dropdownItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="block text-sm font-medium text-purple-600 hover:text-purple-800 px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ol>
      </nav>

      {/* Bubble Style */}
      <nav className="bg-white/60 backdrop-blur-lg rounded-[2.5rem] p-8 shadow-2xl border-4 border-white/80">
        <ol className="flex flex-wrap items-center gap-3">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <div className="mx-3 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-pink-300"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                </div>
              )}
              <a
                href={crumb.href}
                className={`text-sm font-bold px-6 py-3 rounded-full transition-all shadow-lg ${
                  index === breadcrumbs.length - 1
                    ? "bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white shadow-purple-200"
                    : "bg-white text-purple-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 shadow-purple-100 hover:shadow-purple-200"
                }`}
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default PastelBreadcrumb;
