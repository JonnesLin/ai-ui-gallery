"use client";

import React, { useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const FuturisticBreadcrumb = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "SYSTEM", href: "/" },
    { label: "PORTAL", href: "/portal" },
    { label: "QUANTUM", href: "/portal/quantum" },
    { label: "NEXUS" },
  ];

  const dropdownItems = [
    { label: "ALPHA", href: "/portal/quantum/alpha" },
    { label: "BETA", href: "/portal/quantum/beta" },
    { label: "GAMMA", href: "/portal/quantum/gamma" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 min-h-screen">
      {/* Holographic UI Style */}
      <nav className="mb-12 relative bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-6 shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-blue-500/30 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse"></div>
        <ol className="relative flex flex-wrap items-center gap-0">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <div className="mx-4 flex flex-col gap-1">
                  <div className="w-8 h-px bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                  <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-purple-400"></div>
                </div>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-sm font-mono uppercase text-blue-400 px-6 py-3 bg-blue-500/20 border border-blue-400/50 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  className="text-sm font-mono uppercase text-blue-300 hover:text-blue-200 px-6 py-3 border border-blue-500/30 hover:border-blue-400/60 rounded-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Quantum Interface Style */}
      <nav className="mb-12 bg-black rounded-xl p-8 shadow-[0_0_60px_rgba(168,85,247,0.4)] border-2 border-purple-500/40">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-md animate-pulse"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">
            QUANTUM_PATH
          </span>
          <div className="ml-auto flex gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping delay-100"></div>
          </div>
        </div>
        <ol className="flex flex-wrap items-center gap-3">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-6 h-6 mx-3 text-purple-500"
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
              <a
                href={crumb.href}
                className="relative text-sm font-mono uppercase text-purple-300 hover:text-purple-100 px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/50 hover:border-purple-400 rounded transition-all group"
              >
                <span className="relative z-10">{crumb.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Neural Network Style */}
      <nav className="mb-12 relative bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-teal-900/20 rounded-2xl p-8 shadow-2xl border border-cyan-500/30 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-teal-500 to-transparent"></div>
        </div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
              <div className="w-3 h-3 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,1)]"></div>
            </div>
            <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase">
              NEURAL_NAV
            </span>
          </div>
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <div className="mx-3 relative w-6 h-6">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur"></div>
                    <svg
                      className="relative w-6 h-6 text-cyan-400"
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
                  </div>
                )}
                <a
                  href={crumb.href}
                  className="text-sm font-mono uppercase text-cyan-300 hover:text-cyan-100 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-xl border border-cyan-500/40 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all"
                >
                  {crumb.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* With Dropdown - Space Station UI */}
      <nav className="mb-12 bg-gradient-to-r from-indigo-950 via-purple-950 to-indigo-950 rounded-2xl p-8 shadow-[0_0_70px_rgba(99,102,241,0.3)] border-2 border-indigo-500/30">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-indigo-500/30">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-lg blur-md"></div>
              <div className="relative w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
            </div>
            <span className="text-sm font-mono tracking-widest text-indigo-400 uppercase">
              NAVIGATION_MATRIX
            </span>
          </div>
          <span className="text-xs font-mono text-indigo-500">v4.7.2</span>
        </div>
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.slice(0, 2).map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-3 text-indigo-500 text-xl">›</span>
              )}
              <a
                href={crumb.href}
                className="text-sm font-mono uppercase text-indigo-300 hover:text-indigo-100 px-5 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/40 hover:border-indigo-400 rounded-lg transition-all"
              >
                {crumb.label}
              </a>
            </li>
          ))}
          <span className="mx-3 text-indigo-500 text-xl">›</span>
          <li className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 0 ? null : 0)}
              className="flex items-center gap-3 text-sm font-mono uppercase text-indigo-200 hover:text-white px-5 py-2 bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-400/50 hover:border-indigo-300 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all"
            >
              <span>ACCESS</span>
              <svg
                className={`w-4 h-4 transition-transform ${activeDropdown === 0 ? 'rotate-180' : ''}`}
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
              <div className="absolute top-full left-0 mt-3 bg-black/95 backdrop-blur-xl rounded-xl shadow-[0_0_40px_rgba(99,102,241,0.5)] border-2 border-indigo-500/50 z-10 min-w-[240px] overflow-hidden">
                {dropdownItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-between text-sm font-mono uppercase text-indigo-300 hover:text-indigo-100 hover:bg-indigo-500/20 px-6 py-4 border-b border-indigo-800/50 last:border-b-0 transition-all group"
                  >
                    <span>{item.label}</span>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full group-hover:shadow-[0_0_10px_rgba(99,102,241,1)] transition-shadow"></div>
                  </a>
                ))}
              </div>
            )}
          </li>
        </ol>
      </nav>

      {/* AR/VR Interface Style */}
      <nav className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-10 shadow-[0_0_80px_rgba(59,130,246,0.4)] border-2 border-blue-500/40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
        </div>
        <div className="relative">
          <div className="mb-8">
            <span className="text-sm font-mono tracking-[0.3em] text-blue-400 uppercase">
              AUGMENTED REALITY NAV
            </span>
          </div>
          <ol className="flex flex-wrap items-center gap-4">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <div className="mx-4 relative">
                    <div className="absolute inset-0 bg-blue-500/30 blur-xl"></div>
                    <div className="relative w-10 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"></div>
                  </div>
                )}
                <a
                  href={crumb.href}
                  className={`relative text-sm font-mono uppercase px-8 py-4 rounded-xl transition-all ${
                    index === breadcrumbs.length - 1
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                      : "text-blue-300 bg-blue-500/10 border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  }`}
                >
                  {crumb.label}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0 opacity-0 hover:opacity-100 blur transition-opacity rounded-xl"></div>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default FuturisticBreadcrumb;
