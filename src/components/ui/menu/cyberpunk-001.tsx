'use client';

import { useState } from 'react';

export default function CyberpunkMenu() {
  const [activeItem, setActiveItem] = useState('neural');
  const [expandedItems, setExpandedItems] = useState<string[]>(['systems']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-80 h-screen bg-black border-r-2 border-cyan-500 p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-transparent to-fuchsia-500"></div>
      </div>

      <div className="relative z-10">
        <div className="mb-8 border-2 border-cyan-400 bg-black p-4 relative">
          <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-fuchsia-500"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-fuchsia-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400"></div>
          <h1 className="text-2xl font-bold text-cyan-400 font-mono tracking-wider">
            CYBERSPACE
          </h1>
          <div className="h-px bg-gradient-to-r from-cyan-500 to-fuchsia-500 mt-2"></div>
          <p className="text-xs text-cyan-300 mt-1 font-mono">NEURAL.INTERFACE.v2.0</p>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveItem('neural')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 border font-mono font-bold text-sm transition-all relative overflow-hidden group ${
              activeItem === 'neural'
                ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                : 'bg-black text-cyan-400 border-cyan-800 hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]'
            }`}
          >
            <span className="text-base">&gt;&gt;</span>
            <span className="uppercase tracking-wide">Neural Link</span>
          </button>

          <div>
            <button
              onClick={() => toggleExpand('systems')}
              className="w-full flex items-center justify-between gap-3 px-4 py-3.5 border bg-black text-cyan-400 border-cyan-800 hover:border-cyan-500 font-mono font-bold text-sm hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-base">&gt;&gt;</span>
                <span className="uppercase tracking-wide">Systems</span>
              </div>
              <span className="text-fuchsia-400">[{expandedItems.includes('systems') ? '-' : '+'}]</span>
            </button>

            {expandedItems.includes('systems') && (
              <div className="ml-6 mt-2 space-y-1.5 border-l-2 border-cyan-900 pl-4">
                <button
                  onClick={() => setActiveItem('core')}
                  className={`w-full text-left px-3 py-2.5 border font-mono text-xs font-bold transition-all ${
                    activeItem === 'core'
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-600'
                      : 'bg-black text-cyan-600 border-cyan-900 hover:text-cyan-400 hover:border-cyan-700'
                  }`}
                >
                  &gt; CORE_MODULE
                </button>
                <button
                  onClick={() => setActiveItem('firewall')}
                  className={`w-full text-left px-3 py-2.5 border font-mono text-xs font-bold transition-all ${
                    activeItem === 'firewall'
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-600'
                      : 'bg-black text-cyan-600 border-cyan-900 hover:text-cyan-400 hover:border-cyan-700'
                  }`}
                >
                  &gt; FIREWALL_ICE
                </button>
                <button
                  onClick={() => setActiveItem('crypto')}
                  className={`w-full text-left px-3 py-2.5 border font-mono text-xs font-bold transition-all ${
                    activeItem === 'crypto'
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-600'
                      : 'bg-black text-cyan-600 border-cyan-900 hover:text-cyan-400 hover:border-cyan-700'
                  }`}
                >
                  &gt; CRYPTO_ENGINE
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setActiveItem('network')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 border font-mono font-bold text-sm transition-all ${
              activeItem === 'network'
                ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                : 'bg-black text-cyan-400 border-cyan-800 hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]'
            }`}
          >
            <span className="text-base">&gt;&gt;</span>
            <span className="uppercase tracking-wide">Network Grid</span>
          </button>

          <div className="h-px bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 my-4"></div>

          <button
            onClick={() => setActiveItem('data')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 border font-mono font-bold text-sm transition-all ${
              activeItem === 'data'
                ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                : 'bg-black text-cyan-400 border-cyan-800 hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]'
            }`}
          >
            <span className="text-base">&gt;&gt;</span>
            <span className="uppercase tracking-wide">Data Vault</span>
            <span className="ml-auto text-xs text-fuchsia-400">[SECURED]</span>
          </button>
        </nav>

        <div className="mt-8 border border-cyan-900 bg-black p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-cyan-500">STATUS: ONLINE</span>
          </div>
          <div className="text-xs font-mono text-cyan-700">
            UPTIME: 99.9% | PING: 12ms
          </div>
        </div>
      </div>
    </div>
  );
}
