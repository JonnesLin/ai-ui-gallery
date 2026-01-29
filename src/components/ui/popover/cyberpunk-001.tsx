'use client';

import { useState, useRef, useEffect } from 'react';

export default function CyberpunkPopover() {
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
    <div className="min-h-screen bg-black p-12" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,255,255,0.05) 0%, transparent 50%)' }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-cyan-400 mb-12 uppercase tracking-wider" style={{ textShadow: '0 0 20px rgba(0,255,255,0.8), 0 0 40px rgba(0,255,255,0.4)' }}>
          Cyberpunk Popover
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-6 py-3 text-sm font-bold text-cyan-400 bg-black border-2 border-cyan-400 uppercase tracking-wide hover:bg-cyan-400 hover:text-black transition-all"
                style={{ boxShadow: '0 0 20px rgba(0,255,255,0.5), inset 0 0 20px rgba(0,255,255,0.1)' }}
              >
                Top Interface
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-80">
                  <div className="bg-black/95 border-2 border-cyan-400 p-5 backdrop-blur-sm" style={{ boxShadow: '0 0 30px rgba(0,255,255,0.6), inset 0 0 30px rgba(0,255,255,0.1)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-black text-cyan-400 uppercase tracking-wide" style={{ textShadow: '0 0 10px rgba(0,255,255,0.8)' }}>
                        Neural Link
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-cyan-400 hover:text-fuchsia-500 font-bold transition-colors"
                        style={{ textShadow: '0 0 10px currentColor' }}
                      >
                        [X]
                      </button>
                    </div>
                    <p className="text-sm text-cyan-300 leading-relaxed font-mono">
                      High-tech dystopian aesthetics with neon glows and digital edges.
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-black border-r-2 border-b-2 border-cyan-400 absolute top-full left-1/2 -translate-x-1/2 -mt-[7px] rotate-45" style={{ boxShadow: '0 0 15px rgba(0,255,255,0.6)' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-6 py-3 text-sm font-bold text-fuchsia-500 bg-black border-2 border-fuchsia-500 uppercase tracking-wide hover:bg-fuchsia-500 hover:text-black transition-all"
                style={{ boxShadow: '0 0 20px rgba(255,0,255,0.5), inset 0 0 20px rgba(255,0,255,0.1)' }}
              >
                Bottom Interface
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80">
                  <div className="w-3 h-3 bg-black border-l-2 border-t-2 border-fuchsia-500 absolute bottom-full left-1/2 -translate-x-1/2 mb-[7px] rotate-45" style={{ boxShadow: '0 0 15px rgba(255,0,255,0.6)' }}></div>
                  <div className="bg-black/95 border-2 border-fuchsia-500 p-5 backdrop-blur-sm" style={{ boxShadow: '0 0 30px rgba(255,0,255,0.6), inset 0 0 30px rgba(255,0,255,0.1)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-black text-fuchsia-500 uppercase tracking-wide" style={{ textShadow: '0 0 10px rgba(255,0,255,0.8)' }}>
                        Synth Wave
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-fuchsia-500 hover:text-cyan-400 font-bold transition-colors"
                        style={{ textShadow: '0 0 10px currentColor' }}
                      >
                        [X]
                      </button>
                    </div>
                    <p className="text-sm text-fuchsia-300 leading-relaxed font-mono">
                      Retro-futuristic design with vibrant neon accents and grid patterns.
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
                className="px-6 py-3 text-sm font-bold text-lime-400 bg-black border-2 border-lime-400 uppercase tracking-wide hover:bg-lime-400 hover:text-black transition-all"
                style={{ boxShadow: '0 0 20px rgba(0,255,0,0.5), inset 0 0 20px rgba(0,255,0,0.1)' }}
              >
                Left Interface
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-80">
                  <div className="bg-black/95 border-2 border-lime-400 p-5 backdrop-blur-sm" style={{ boxShadow: '0 0 30px rgba(0,255,0,0.6), inset 0 0 30px rgba(0,255,0,0.1)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-black text-lime-400 uppercase tracking-wide" style={{ textShadow: '0 0 10px rgba(0,255,0,0.8)' }}>
                        Data Stream
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-lime-400 hover:text-cyan-400 font-bold transition-colors"
                        style={{ textShadow: '0 0 10px currentColor' }}
                      >
                        [X]
                      </button>
                    </div>
                    <p className="text-sm text-lime-300 leading-relaxed font-mono">
                      Matrix-inspired glowing elements suggest digital consciousness.
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-black border-r-2 border-b-2 border-lime-400 absolute left-full top-1/2 -translate-y-1/2 -ml-[7px] rotate-45" style={{ boxShadow: '0 0 15px rgba(0,255,0,0.6)' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-6 py-3 text-sm font-bold text-yellow-400 bg-black border-2 border-yellow-400 uppercase tracking-wide hover:bg-yellow-400 hover:text-black transition-all"
                style={{ boxShadow: '0 0 20px rgba(255,255,0,0.5), inset 0 0 20px rgba(255,255,0,0.1)' }}
              >
                Right Interface
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-80">
                  <div className="w-3 h-3 bg-black border-l-2 border-t-2 border-yellow-400 absolute right-full top-1/2 -translate-y-1/2 mr-[7px] rotate-45" style={{ boxShadow: '0 0 15px rgba(255,255,0,0.6)' }}></div>
                  <div className="bg-black/95 border-2 border-yellow-400 p-5 backdrop-blur-sm" style={{ boxShadow: '0 0 30px rgba(255,255,0,0.6), inset 0 0 30px rgba(255,255,0,0.1)' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-black text-yellow-400 uppercase tracking-wide" style={{ textShadow: '0 0 10px rgba(255,255,0,0.8)' }}>
                        Neon Grid
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-yellow-400 hover:text-fuchsia-500 font-bold transition-colors"
                        style={{ textShadow: '0 0 10px currentColor' }}
                      >
                        [X]
                      </button>
                    </div>
                    <p className="text-sm text-yellow-300 leading-relaxed font-mono">
                      Urban tech noir with electric glows and shadowy contrasts.
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
