"use client";

import React, { useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const RetroBreadcrumb = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "Laptops" },
  ];

  const dropdownItems = [
    { label: "Desktops", href: "/products/electronics/desktops" },
    { label: "Tablets", href: "/products/electronics/tablets" },
    { label: "Phones", href: "/products/electronics/phones" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Classic 80s Style */}
      <nav className="mb-12 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 border-4 border-amber-800 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(120,53,15,0.5)]">
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-3 text-amber-900 text-2xl font-bold">
                  ▶
                </span>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-lg font-bold bg-amber-900 text-amber-50 px-6 py-2 rounded-md border-2 border-amber-950 shadow-inner">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className="text-lg font-bold bg-amber-50 text-amber-900 px-6 py-2 rounded-md border-2 border-amber-800 hover:bg-amber-100 hover:shadow-[2px_2px_0px_0px_rgba(120,53,15,1)] transition-all"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Vintage Terminal Style */}
      <nav className="mb-12 bg-black border-4 border-green-500 rounded p-6 shadow-[0_0_20px_rgba(34,197,94,0.3)] font-mono">
        <div className="mb-2 text-green-500 text-sm">
          C:\USERS\GUEST\
        </div>
        <ol className="flex flex-wrap items-center gap-0">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-green-500 text-xl">\\</span>
              )}
              <a
                href={crumb.href}
                className="text-base text-green-500 hover:text-green-400 hover:bg-green-900/30 px-3 py-1 rounded transition-colors uppercase tracking-wider"
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-green-500">{">"}</span>
          <span className="text-green-500 animate-pulse">█</span>
        </div>
      </nav>

      {/* 90s Web Style */}
      <nav className="mb-12 bg-gradient-to-b from-purple-200 to-pink-200 border-4 border-purple-800 p-6 shadow-[6px_6px_0px_0px_rgba(107,33,168,0.4)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-red-700"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-yellow-700"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-green-700"></div>
          <span className="ml-4 text-purple-900 font-bold text-sm">
            Current Location:
          </span>
        </div>
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-purple-700 font-bold">»</span>
              )}
              <a
                href={crumb.href}
                className={`text-base font-bold px-5 py-2 rounded-full border-3 shadow-md ${
                  index === breadcrumbs.length - 1
                    ? "bg-purple-600 text-white border-purple-800"
                    : "bg-white text-purple-900 border-purple-400 hover:bg-purple-100"
                } transition-colors`}
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* With Dropdown - Retro Button Style */}
      <nav className="mb-12 bg-gradient-to-br from-teal-300 to-cyan-400 border-4 border-teal-800 rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(17,94,89,0.6)]">
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.slice(0, 2).map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-3 text-teal-900 text-xl">→</span>
              )}
              <a
                href={crumb.href}
                className="text-base font-bold bg-white text-teal-900 px-5 py-2 rounded-md border-3 border-teal-700 shadow-[2px_2px_0px_0px_rgba(17,94,89,1)] hover:shadow-[1px_1px_0px_0px_rgba(17,94,89,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                {crumb.label}
              </a>
            </li>
          ))}
          <span className="mx-3 text-teal-900 text-xl">→</span>
          <li className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 0 ? null : 0)}
              className="flex items-center gap-2 text-base font-bold bg-teal-900 text-white px-5 py-2 rounded-md border-3 border-teal-950 shadow-[2px_2px_0px_0px_rgba(17,94,89,1)] hover:shadow-[1px_1px_0px_0px_rgba(17,94,89,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>More Options</span>
              <span className="text-sm">▼</span>
            </button>
            {activeDropdown === 0 && (
              <div className="absolute top-full left-0 mt-3 bg-white border-4 border-teal-800 rounded-lg shadow-[4px_4px_0px_0px_rgba(17,94,89,0.6)] z-10 min-w-[220px]">
                {dropdownItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="block text-base font-bold text-teal-900 px-5 py-3 hover:bg-teal-100 first:rounded-t-md last:rounded-b-md border-b-2 border-teal-300 last:border-b-0 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ol>
      </nav>

      {/* Cassette Tape Style */}
      <nav className="bg-gradient-to-b from-gray-800 to-gray-900 border-4 border-gray-700 rounded-xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-500 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-500 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            </div>
          </div>
          <span className="text-orange-400 text-xs font-mono tracking-wider">
            SIDE A
          </span>
        </div>
        <ol className="flex flex-wrap items-center gap-2 bg-gray-700/50 p-4 rounded">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-orange-400">•</span>
              )}
              <a
                href={crumb.href}
                className="text-sm font-mono text-orange-400 hover:text-orange-300 px-3 py-1 hover:bg-gray-600/50 rounded transition-all tracking-wide"
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default RetroBreadcrumb;
