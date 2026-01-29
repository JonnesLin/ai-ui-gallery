'use client';

import { useState, useRef, useEffect } from 'react';

export default function LuxuryPopover() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light text-amber-300 mb-12 tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
          Luxury Popover
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-8 py-3 text-sm font-medium text-amber-300 bg-transparent border border-amber-300 hover:bg-amber-300 hover:text-slate-900 transition-all"
                style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.1em' }}
              >
                DISCOVER
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-80">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-300/30 p-6 backdrop-blur-md" style={{ boxShadow: '0 0 40px rgba(251,191,36,0.2)' }}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-light text-amber-300 tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                        Elegance
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-amber-300/60 hover:text-amber-300 transition-colors text-sm"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      Refined aesthetics with metallic accents and sophisticated color palettes.
                    </p>
                    <div className="h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"></div>
                  </div>
                  <div className="w-3 h-3 bg-gradient-to-br from-slate-800 to-slate-900 border-r border-b border-amber-300/30 absolute top-full left-1/2 -translate-x-1/2 -mt-[7px] rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-8 py-3 text-sm font-medium text-rose-400 bg-transparent border border-rose-400 hover:bg-rose-400 hover:text-slate-900 transition-all"
                style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.1em' }}
              >
                EXPLORE
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80">
                  <div className="w-3 h-3 bg-gradient-to-br from-slate-800 to-slate-900 border-l border-t border-rose-400/30 absolute bottom-full left-1/2 -translate-x-1/2 mb-[7px] rotate-45"></div>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-rose-400/30 p-6 backdrop-blur-md" style={{ boxShadow: '0 0 40px rgba(251,113,133,0.2)' }}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-light text-rose-400 tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                        Prestige
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-rose-400/60 hover:text-rose-400 transition-colors text-sm"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      Premium materials and careful attention to every detail define luxury.
                    </p>
                    <div className="h-px bg-gradient-to-r from-transparent via-rose-400/50 to-transparent"></div>
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
                className="px-8 py-3 text-sm font-medium text-emerald-400 bg-transparent border border-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all"
                style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.1em' }}
              >
                EXCLUSIVE
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-80">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-400/30 p-6 backdrop-blur-md" style={{ boxShadow: '0 0 40px rgba(52,211,153,0.2)' }}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-light text-emerald-400 tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                        Opulence
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-emerald-400/60 hover:text-emerald-400 transition-colors text-sm"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      Dark backgrounds and golden highlights evoke timeless sophistication.
                    </p>
                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
                  </div>
                  <div className="w-3 h-3 bg-gradient-to-br from-slate-800 to-slate-900 border-r border-b border-emerald-400/30 absolute left-full top-1/2 -translate-y-1/2 -ml-[7px] rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-8 py-3 text-sm font-medium text-violet-400 bg-transparent border border-violet-400 hover:bg-violet-400 hover:text-slate-900 transition-all"
                style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.1em' }}
              >
                PREMIUM
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-80">
                  <div className="w-3 h-3 bg-gradient-to-br from-slate-800 to-slate-900 border-l border-t border-violet-400/30 absolute right-full top-1/2 -translate-y-1/2 mr-[7px] rotate-45"></div>
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-violet-400/30 p-6 backdrop-blur-md" style={{ boxShadow: '0 0 40px rgba(167,139,250,0.2)' }}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-light text-violet-400 tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                        Refinement
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-violet-400/60 hover:text-violet-400 transition-colors text-sm"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                      Subtle gradients and serif typography communicate exclusivity.
                    </p>
                    <div className="h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"></div>
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
