'use client';

import { useState } from 'react';

export default function LuxuryMenu() {
  const [activeItem, setActiveItem] = useState('concierge');
  const [expandedItems, setExpandedItems] = useState<string[]>(['services']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-80 h-screen bg-gradient-to-br from-slate-900 via-neutral-900 to-zinc-900 p-8 border-r border-amber-900/30">
      <div className="mb-10">
        <div className="border-2 border-amber-600 bg-black p-6 relative">
          <div className="absolute top-0 left-0 w-3 h-3 bg-amber-600"></div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-amber-600"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 bg-amber-600"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-amber-600"></div>
          <h1 className="text-2xl font-serif text-amber-500 tracking-widest text-center mb-2">PRESTIGE</h1>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          <p className="text-xs text-amber-300 text-center mt-2 tracking-wider">ELITE MEMBERS</p>
        </div>
      </div>

      <nav className="space-y-2">
        <button
          onClick={() => setActiveItem('concierge')}
          className={`w-full flex items-center gap-4 px-5 py-4 border text-sm font-serif tracking-wide transition-all ${
            activeItem === 'concierge'
              ? 'bg-gradient-to-r from-amber-900/50 to-amber-800/50 text-amber-300 border-amber-600 shadow-[0_0_20px_rgba(217,119,6,0.3)]'
              : 'bg-black/40 text-amber-100 border-amber-900/50 hover:border-amber-700 hover:bg-black/60'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
          <span className="uppercase">Concierge</span>
        </button>

        <div>
          <button
            onClick={() => toggleExpand('services')}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 border bg-black/40 text-amber-100 border-amber-900/50 hover:border-amber-700 hover:bg-black/60 text-sm font-serif tracking-wide transition-all"
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="uppercase">Services</span>
            </div>
            <svg
              className={`w-4 h-4 text-amber-600 transition-transform ${expandedItems.includes('services') ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {expandedItems.includes('services') && (
            <div className="ml-8 mt-2 space-y-1.5 border-l border-amber-900/50 pl-5">
              <button
                onClick={() => setActiveItem('private-jet')}
                className={`w-full text-left px-4 py-3 border text-xs font-serif tracking-widest transition-all ${
                  activeItem === 'private-jet'
                    ? 'bg-amber-950/70 text-amber-300 border-amber-700'
                    : 'bg-black/30 text-amber-200 border-amber-900/30 hover:border-amber-800 hover:bg-black/50'
                }`}
              >
                PRIVATE JET
              </button>
              <button
                onClick={() => setActiveItem('yacht')}
                className={`w-full text-left px-4 py-3 border text-xs font-serif tracking-widest transition-all ${
                  activeItem === 'yacht'
                    ? 'bg-amber-950/70 text-amber-300 border-amber-700'
                    : 'bg-black/30 text-amber-200 border-amber-900/30 hover:border-amber-800 hover:bg-black/50'
                }`}
              >
                YACHT CHARTER
              </button>
              <button
                onClick={() => setActiveItem('estate')}
                className={`w-full text-left px-4 py-3 border text-xs font-serif tracking-widest transition-all ${
                  activeItem === 'estate'
                    ? 'bg-amber-950/70 text-amber-300 border-amber-700'
                    : 'bg-black/30 text-amber-200 border-amber-900/30 hover:border-amber-800 hover:bg-black/50'
                }`}
              >
                ESTATE ACCESS
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveItem('portfolio')}
          className={`w-full flex items-center gap-4 px-5 py-4 border text-sm font-serif tracking-wide transition-all ${
            activeItem === 'portfolio'
              ? 'bg-gradient-to-r from-amber-900/50 to-amber-800/50 text-amber-300 border-amber-600 shadow-[0_0_20px_rgba(217,119,6,0.3)]'
              : 'bg-black/40 text-amber-100 border-amber-900/50 hover:border-amber-700 hover:bg-black/60'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <span className="uppercase">Portfolio</span>
        </button>

        <div className="h-px bg-gradient-to-r from-transparent via-amber-800 to-transparent my-5"></div>

        <button
          onClick={() => setActiveItem('membership')}
          className={`w-full flex items-center gap-4 px-5 py-4 border text-sm font-serif tracking-wide transition-all ${
            activeItem === 'membership'
              ? 'bg-gradient-to-r from-amber-900/50 to-amber-800/50 text-amber-300 border-amber-600 shadow-[0_0_20px_rgba(217,119,6,0.3)]'
              : 'bg-black/40 text-amber-100 border-amber-900/50 hover:border-amber-700 hover:bg-black/60'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <span className="uppercase">Membership</span>
        </button>
      </nav>
    </div>
  );
}
