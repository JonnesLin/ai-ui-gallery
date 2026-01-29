'use client';

import { useState, useRef, useEffect } from 'react';

export default function NeonPopover() {
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
    <div className="min-h-screen bg-gray-950 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-pink-500 mb-12" style={{ textShadow: '0 0 20px rgba(236,72,153,0.8)' }}>
          Neon Popover
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-6 py-3 text-sm font-bold text-pink-500 bg-gray-950 border-2 border-pink-500 hover:bg-pink-500/10 transition-all"
                style={{ boxShadow: '0 0 15px rgba(236,72,153,0.6), inset 0 0 15px rgba(236,72,153,0.1)' }}
              >
                Top Popover
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72">
                  <div className="bg-gray-950 border-2 border-pink-500 p-5" style={{ boxShadow: '0 0 25px rgba(236,72,153,0.8), inset 0 0 25px rgba(236,72,153,0.1)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-pink-500" style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>
                        Neon Glow
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-pink-500/70 hover:text-pink-500"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Vibrant glowing borders against dark backgrounds create electric atmosphere.
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-gray-950 border-r-2 border-b-2 border-pink-500 absolute top-full left-1/2 -translate-x-1/2 -mt-[7px] rotate-45" style={{ boxShadow: '2px 2px 10px rgba(236,72,153,0.8)' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-6 py-3 text-sm font-bold text-cyan-400 bg-gray-950 border-2 border-cyan-400 hover:bg-cyan-400/10 transition-all"
                style={{ boxShadow: '0 0 15px rgba(34,211,238,0.6), inset 0 0 15px rgba(34,211,238,0.1)' }}
              >
                Bottom Popover
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72">
                  <div className="w-3 h-3 bg-gray-950 border-l-2 border-t-2 border-cyan-400 absolute bottom-full left-1/2 -translate-x-1/2 mb-[7px] rotate-45" style={{ boxShadow: '-2px -2px 10px rgba(34,211,238,0.8)' }}></div>
                  <div className="bg-gray-950 border-2 border-cyan-400 p-5" style={{ boxShadow: '0 0 25px rgba(34,211,238,0.8), inset 0 0 25px rgba(34,211,238,0.1)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-cyan-400" style={{ textShadow: '0 0 10px rgba(34,211,238,0.8)' }}>
                        Electric Blue
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-cyan-400/70 hover:text-cyan-400"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Inspired by neon signs and retro arcade aesthetics.
                    </p>
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
                className="px-6 py-3 text-sm font-bold text-purple-500 bg-gray-950 border-2 border-purple-500 hover:bg-purple-500/10 transition-all"
                style={{ boxShadow: '0 0 15px rgba(168,85,247,0.6), inset 0 0 15px rgba(168,85,247,0.1)' }}
              >
                Left Popover
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-72">
                  <div className="bg-gray-950 border-2 border-purple-500 p-5" style={{ boxShadow: '0 0 25px rgba(168,85,247,0.8), inset 0 0 25px rgba(168,85,247,0.1)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-purple-500" style={{ textShadow: '0 0 10px rgba(168,85,247,0.8)' }}>
                        Neon Purple
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-purple-500/70 hover:text-purple-500"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Luminous text and borders create a futuristic nightlife vibe.
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-gray-950 border-r-2 border-b-2 border-purple-500 absolute left-full top-1/2 -translate-y-1/2 -ml-[7px] rotate-45" style={{ boxShadow: '2px 2px 10px rgba(168,85,247,0.8)' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-6 py-3 text-sm font-bold text-green-400 bg-gray-950 border-2 border-green-400 hover:bg-green-400/10 transition-all"
                style={{ boxShadow: '0 0 15px rgba(74,222,128,0.6), inset 0 0 15px rgba(74,222,128,0.1)' }}
              >
                Right Popover
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-72">
                  <div className="w-3 h-3 bg-gray-950 border-l-2 border-t-2 border-green-400 absolute right-full top-1/2 -translate-y-1/2 mr-[7px] rotate-45" style={{ boxShadow: '-2px -2px 10px rgba(74,222,128,0.8)' }}></div>
                  <div className="bg-gray-950 border-2 border-green-400 p-5" style={{ boxShadow: '0 0 25px rgba(74,222,128,0.8), inset 0 0 25px rgba(74,222,128,0.1)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-green-400" style={{ textShadow: '0 0 10px rgba(74,222,128,0.8)' }}>
                        Neon Green
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-green-400/70 hover:text-green-400"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      High contrast and glowing effects demand attention in the dark.
                    </p>
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
