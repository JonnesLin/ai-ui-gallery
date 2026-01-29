'use client';

import { useState, useRef, useEffect } from 'react';

export default function FuturisticPopover() {
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const popoverRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openPopover && popoverRefs.current[openPopover]) {
        const popoverElement = popoverRefs.current[openPopover];
        if (popoverElement && !popoverElement.contains(event.target as Node)) {
          setOpenPopover(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openPopover]);

  const togglePopover = (id: string) => {
    setOpenPopover(openPopover === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-cyan-400 mb-12" style={{ fontFamily: 'monospace', letterSpacing: '0.15em' }}>
          FUTURISTIC POPOVER
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-6 py-3 text-sm font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400 hover:bg-cyan-400/20 transition-all uppercase tracking-wider"
                style={{ fontFamily: 'monospace', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
              >
                Initialize
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72">
                  <div className="bg-gray-900 border border-cyan-400 p-5" style={{ boxShadow: '0 0 20px rgba(34,211,238,0.5), inset 0 0 20px rgba(34,211,238,0.1)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider" style={{ fontFamily: 'monospace' }}>
                        System Alert
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-cyan-400/70 hover:text-cyan-400"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-cyan-300/80 leading-relaxed" style={{ fontFamily: 'monospace' }}>
                      Advanced interface with geometric shapes and glowing borders.
                    </p>
                    <div className="mt-3 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                  </div>
                  <div className="w-3 h-3 bg-gray-900 border-r border-b border-cyan-400 absolute top-full left-1/2 -translate-x-1/2 -mt-[7px] rotate-45" style={{ boxShadow: '2px 2px 8px rgba(34,211,238,0.5)' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-6 py-3 text-sm font-bold text-blue-400 bg-blue-400/10 border border-blue-400 hover:bg-blue-400/20 transition-all uppercase tracking-wider"
                style={{ fontFamily: 'monospace', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
              >
                Activate
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72">
                  <div className="w-3 h-3 bg-gray-900 border-l border-t border-blue-400 absolute bottom-full left-1/2 -translate-x-1/2 mb-[7px] rotate-45" style={{ boxShadow: '-2px -2px 8px rgba(96,165,250,0.5)' }}></div>
                  <div className="bg-gray-900 border border-blue-400 p-5" style={{ boxShadow: '0 0 20px rgba(96,165,250,0.5), inset 0 0 20px rgba(96,165,250,0.1)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider" style={{ fontFamily: 'monospace' }}>
                        Data Stream
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-blue-400/70 hover:text-blue-400"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-blue-300/80 leading-relaxed" style={{ fontFamily: 'monospace' }}>
                      Sci-fi inspired design with holographic light effects.
                    </p>
                    <div className="mt-3 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Left Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['left'] = el; }}>
              <button
                onClick={() => togglePopover('left')}
                className="px-6 py-3 text-sm font-bold text-purple-400 bg-purple-400/10 border border-purple-400 hover:bg-purple-400/20 transition-all uppercase tracking-wider"
                style={{ fontFamily: 'monospace', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
              >
                Execute
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-72">
                  <div className="bg-gray-900 border border-purple-400 p-5" style={{ boxShadow: '0 0 20px rgba(192,132,252,0.5), inset 0 0 20px rgba(192,132,252,0.1)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider" style={{ fontFamily: 'monospace' }}>
                        Neural Link
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-purple-400/70 hover:text-purple-400"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-purple-300/80 leading-relaxed" style={{ fontFamily: 'monospace' }}>
                      Monospace fonts and angular cuts create tech-forward aesthetic.
                    </p>
                    <div className="mt-3 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                  </div>
                  <div className="w-3 h-3 bg-gray-900 border-r border-b border-purple-400 absolute left-full top-1/2 -translate-y-1/2 -ml-[7px] rotate-45" style={{ boxShadow: '2px 2px 8px rgba(192,132,252,0.5)' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-6 py-3 text-sm font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400 hover:bg-emerald-400/20 transition-all uppercase tracking-wider"
                style={{ fontFamily: 'monospace', clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
              >
                Connect
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-72">
                  <div className="w-3 h-3 bg-gray-900 border-l border-t border-emerald-400 absolute right-full top-1/2 -translate-y-1/2 mr-[7px] rotate-45" style={{ boxShadow: '-2px -2px 8px rgba(52,211,153,0.5)' }}></div>
                  <div className="bg-gray-900 border border-emerald-400 p-5" style={{ boxShadow: '0 0 20px rgba(52,211,153,0.5), inset 0 0 20px rgba(52,211,153,0.1)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider" style={{ fontFamily: 'monospace' }}>
                        Quantum Core
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-emerald-400/70 hover:text-emerald-400"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-emerald-300/80 leading-relaxed" style={{ fontFamily: 'monospace' }}>
                      Vibrant neon colors against dark backgrounds define the future.
                    </p>
                    <div className="mt-3 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
