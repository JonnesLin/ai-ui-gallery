'use client';

import { useState } from 'react';
import { SearchBox } from './SearchBox';

export default function FuturisticSearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Large Size - Holographic */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Neural Interface v3.0
          </label>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-lg blur-lg opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg border border-cyan-500/30 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.15)_0%,transparent_50%)]" />
              <div className="relative flex items-center px-6 py-5">
                <div className="relative mr-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg ${isActive ? 'animate-spin' : ''}`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  {isActive && (
                    <>
                      <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg animate-ping opacity-20" />
                      <div className="absolute -inset-2 border border-cyan-500/30 rounded-lg animate-pulse" />
                    </>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                    placeholder="Initialize quantum search..."
                    className="w-full text-lg bg-transparent text-cyan-100 placeholder:text-slate-600 outline-none font-mono"
                  />
                </div>
                {searchValue && (
                  <button
                    onClick={() => setSearchValue('')}
                    className="ml-4 px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white rounded font-mono text-sm uppercase tracking-wider transition-all shadow-lg shadow-red-500/20"
                  >
                    Abort
                  </button>
                )}
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            </div>
          </div>
        </div>

        {/* Medium Size - Sci-Fi */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-purple-400 uppercase tracking-widest">
            System Query
          </label>
          <div className="relative bg-slate-900 rounded-md border border-purple-500/30 shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
            <div className="relative flex items-center px-5 py-3.5">
              <div className="flex items-center gap-2 mr-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75" />
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150" />
              </div>
              <input
                type="text"
                placeholder="query.execute()"
                className="flex-1 text-base bg-transparent text-purple-200 placeholder:text-slate-600 outline-none font-mono"
              />
              <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono rounded">
                CTRL+K
              </div>
            </div>
          </div>
        </div>

        {/* Small Size - Compact Tech */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Quick Search
          </label>
          <div className="flex items-center bg-slate-900 rounded border border-emerald-500/30 shadow-lg">
            <div className="px-3 py-2.5 border-r border-emerald-500/30">
              <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-2.5 text-sm bg-transparent text-emerald-100 placeholder:text-slate-600 outline-none font-mono"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
