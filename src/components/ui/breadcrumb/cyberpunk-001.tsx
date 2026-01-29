"use client";

import React, { useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const CyberpunkBreadcrumb = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "ROOT", href: "/" },
    { label: "SYSTEM", href: "/system" },
    { label: "NETWORK", href: "/system/network" },
    { label: "ACTIVE" },
  ];

  const dropdownItems = [
    { label: "FIREWALL", href: "/system/network/firewall" },
    { label: "VPN", href: "/system/network/vpn" },
    { label: "PROXY", href: "/system/network/proxy" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-black min-h-screen">
      {/* Neon Glow Style */}
      <nav className="mb-12 bg-black/80 border border-cyan-500 rounded-lg p-6 shadow-[0_0_30px_rgba(6,182,212,0.4)] backdrop-blur-sm">
        <ol className="flex flex-wrap items-center gap-0">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-6 h-6 mx-3 text-cyan-500"
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
                <span className="text-sm font-mono uppercase text-cyan-400 px-5 py-2 bg-cyan-500/20 border border-cyan-500 rounded shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className="text-sm font-mono uppercase text-cyan-500 px-5 py-2 border border-cyan-700 rounded hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Matrix Code Style */}
      <nav className="mb-12 bg-black border-2 border-green-500 rounded p-6 font-mono shadow-[0_0_40px_rgba(34,197,94,0.3)]">
        <div className="flex items-center gap-3 mb-4 text-green-500 text-xs">
          <span className="animate-pulse">●</span>
          <span>NAVIGATION_MATRIX</span>
          <span className="ml-auto">v2.0.77</span>
        </div>
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-green-500/60 text-xs">{"//"}</span>
              )}
              <a
                href={crumb.href}
                className="text-sm text-green-500 hover:text-green-400 px-4 py-2 bg-green-950/30 hover:bg-green-900/40 border border-green-500/40 hover:border-green-400 rounded-sm transition-all hover:shadow-[0_0_10px_rgba(34,197,94,0.5)]"
              >
                <span className="opacity-60">[</span>
                {crumb.label}
                <span className="opacity-60">]</span>
              </a>
            </li>
          ))}
        </ol>
        <div className="mt-4 flex items-center gap-2 text-green-500/50 text-xs">
          <span>{">"}</span>
          <span className="animate-pulse">_</span>
        </div>
      </nav>

      {/* Glitch Effect Style */}
      <nav className="mb-12 relative bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 border-2 border-purple-500 rounded-lg p-6 overflow-hidden shadow-[0_0_35px_rgba(168,85,247,0.4)]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
        <ol className="relative flex flex-wrap items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-3 text-purple-400 font-bold text-xl">
                  ›
                </span>
              )}
              <a
                href={crumb.href}
                className="relative text-sm font-bold uppercase text-purple-400 px-5 py-2 bg-black/60 border border-purple-600 rounded hover:text-pink-400 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all group"
              >
                <span className="relative z-10">{crumb.label}</span>
                <span className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded"></span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* With Dropdown - Hacker Terminal */}
      <nav className="mb-12 bg-black border-2 border-yellow-500 rounded-lg p-6 shadow-[0_0_30px_rgba(234,179,8,0.3)] font-mono">
        <div className="flex items-center gap-2 mb-4 text-yellow-500 text-xs">
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
          <span>SECURE_PATH</span>
        </div>
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.slice(0, 2).map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-yellow-500/60">→</span>
              )}
              <a
                href={crumb.href}
                className="text-sm text-yellow-500 hover:text-yellow-400 px-4 py-2 bg-yellow-900/20 hover:bg-yellow-800/30 border border-yellow-600/50 hover:border-yellow-500 rounded transition-all"
              >
                {crumb.label}
              </a>
            </li>
          ))}
          <span className="mx-2 text-yellow-500/60">→</span>
          <li className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 0 ? null : 0)}
              className="flex items-center gap-2 text-sm text-yellow-500 hover:text-yellow-400 px-4 py-2 bg-yellow-900/20 hover:bg-yellow-800/30 border border-yellow-600/50 hover:border-yellow-500 rounded transition-all"
            >
              <span>{"[MORE]"}</span>
              <span className="text-xs">▼</span>
            </button>
            {activeDropdown === 0 && (
              <div className="absolute top-full left-0 mt-2 bg-black border-2 border-yellow-500 rounded shadow-[0_0_20px_rgba(234,179,8,0.4)] z-10 min-w-[200px]">
                {dropdownItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="block text-sm text-yellow-500 hover:text-yellow-400 hover:bg-yellow-900/30 px-4 py-3 border-b border-yellow-800/50 last:border-b-0 transition-all first:rounded-t last:rounded-b"
                  >
                    {">"} {item.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ol>
      </nav>

      {/* Holographic Style */}
      <nav className="relative bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 border border-blue-400 rounded-xl p-6 overflow-hidden shadow-[0_0_50px_rgba(96,165,250,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)]"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)]"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_10px_rgba(236,72,153,1)]"></div>
            <span className="ml-3 text-blue-300 text-xs font-mono">
              HOLOGRAPHIC_NAV
            </span>
          </div>
          <ol className="flex flex-wrap items-center gap-3">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <div className="mx-3 flex flex-col gap-0.5">
                    <div className="w-4 h-px bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    <div className="w-4 h-px bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  </div>
                )}
                <a
                  href={crumb.href}
                  className="text-sm font-mono uppercase text-blue-300 hover:text-blue-200 px-5 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-blue-400/50 hover:border-blue-300 rounded-lg shadow-[0_0_15px_rgba(96,165,250,0.2)] hover:shadow-[0_0_25px_rgba(96,165,250,0.4)] transition-all"
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

export default CyberpunkBreadcrumb;
