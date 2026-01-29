'use client';

import { useState } from 'react';

export default function FuturisticMenu() {
  const [activeItem, setActiveItem] = useState('quantum');
  const [expandedItems, setExpandedItems] = useState<string[]>(['tech']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-80 h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 p-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="mb-8 border border-blue-500/30 bg-gradient-to-r from-blue-950/50 to-purple-950/50 backdrop-blur-sm p-5 clip-path-polygon">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl font-bold text-blue-400 tracking-widest font-mono">NEXUS</h1>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-transparent"></div>
          <p className="text-xs text-blue-300/70 mt-2 font-mono">INTERFACE v3.7.2</p>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveItem('quantum')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-mono font-semibold transition-all relative overflow-hidden group ${
              activeItem === 'quantum'
                ? 'bg-gradient-to-r from-blue-600/40 to-purple-600/40 text-blue-200 border-l-4 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'text-blue-300/70 hover:text-blue-200 hover:bg-blue-950/30 border-l-4 border-transparent'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="uppercase tracking-wider">Quantum Core</span>
          </button>

          <div>
            <button
              onClick={() => toggleExpand('tech')}
              className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-sm font-mono font-semibold text-blue-300/70 hover:text-blue-200 hover:bg-blue-950/30 transition-all border-l-4 border-transparent"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <span className="uppercase tracking-wider">Technology</span>
              </div>
              <div className={`transition-transform ${expandedItems.includes('tech') ? 'rotate-90' : ''}`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {expandedItems.includes('tech') && (
              <div className="ml-6 mt-1 space-y-1 border-l-2 border-blue-900/50 pl-4">
                <button
                  onClick={() => setActiveItem('ai')}
                  className={`w-full text-left px-3 py-2.5 text-xs font-mono font-semibold transition-all ${
                    activeItem === 'ai'
                      ? 'bg-purple-950/50 text-purple-300 border-l-2 border-purple-500'
                      : 'text-blue-400/60 hover:text-blue-300 hover:bg-blue-950/20 border-l-2 border-transparent'
                  }`}
                >
                  &gt; AI_SYSTEMS
                </button>
                <button
                  onClick={() => setActiveItem('neural')}
                  className={`w-full text-left px-3 py-2.5 text-xs font-mono font-semibold transition-all ${
                    activeItem === 'neural'
                      ? 'bg-purple-950/50 text-purple-300 border-l-2 border-purple-500'
                      : 'text-blue-400/60 hover:text-blue-300 hover:bg-blue-950/20 border-l-2 border-transparent'
                  }`}
                >
                  &gt; NEURAL_NETS
                </button>
                <button
                  onClick={() => setActiveItem('biotech')}
                  className={`w-full text-left px-3 py-2.5 text-xs font-mono font-semibold transition-all ${
                    activeItem === 'biotech'
                      ? 'bg-purple-950/50 text-purple-300 border-l-2 border-purple-500'
                      : 'text-blue-400/60 hover:text-blue-300 hover:bg-blue-950/20 border-l-2 border-transparent'
                  }`}
                >
                  &gt; BIO_TECH
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setActiveItem('hologram')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-mono font-semibold transition-all relative overflow-hidden group ${
              activeItem === 'hologram'
                ? 'bg-gradient-to-r from-blue-600/40 to-purple-600/40 text-blue-200 border-l-4 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'text-blue-300/70 hover:text-blue-200 hover:bg-blue-950/30 border-l-4 border-transparent'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <span className="uppercase tracking-wider">Hologram</span>
          </button>

          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-4"></div>

          <button
            onClick={() => setActiveItem('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm font-mono font-semibold transition-all relative overflow-hidden group ${
              activeItem === 'settings'
                ? 'bg-gradient-to-r from-blue-600/40 to-purple-600/40 text-blue-200 border-l-4 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'text-blue-300/70 hover:text-blue-200 hover:bg-blue-950/30 border-l-4 border-transparent'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="uppercase tracking-wider">Config</span>
          </button>
        </nav>

        <div className="mt-8 border border-blue-500/20 bg-blue-950/20 backdrop-blur-sm p-3 rounded">
          <div className="flex items-center justify-between text-xs font-mono mb-1">
            <span className="text-blue-400">SYSTEM</span>
            <span className="text-green-400">ONLINE</span>
          </div>
          <div className="w-full bg-blue-950/50 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-3/4 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
