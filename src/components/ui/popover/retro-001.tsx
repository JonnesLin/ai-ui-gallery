'use client';

import { useState, useRef, useEffect } from 'react';

export default function RetroPopover() {
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
    <div className="min-h-screen bg-[#f5deb3] p-12" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#8b4513] mb-12" style={{ fontFamily: 'Georgia, serif', textShadow: '3px 3px 0px rgba(139,69,19,0.2)' }}>
          Retro Popover
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-8 py-3 text-sm font-bold text-white bg-[#d2691e] rounded-md border-4 border-[#8b4513] hover:bg-[#cd853f] transition-colors"
                style={{ boxShadow: '4px 4px 0px #8b4513' }}
              >
                Top Popover
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72">
                  <div className="bg-[#faf0e6] border-4 border-[#8b4513] rounded-lg p-5" style={{ boxShadow: '6px 6px 0px #8b4513' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-[#8b4513]" style={{ fontFamily: 'Georgia, serif' }}>Vintage Vibes</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="w-7 h-7 flex items-center justify-center font-bold text-white bg-[#d2691e] rounded border-2 border-[#8b4513] hover:bg-[#cd853f]"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-[#654321] leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                      Warm colors and classic typography evoke nostalgia for simpler times.
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-[#faf0e6] border-r-4 border-b-4 border-[#8b4513] absolute top-full left-1/2 -translate-x-1/2 -mt-2 rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-8 py-3 text-sm font-bold text-white bg-[#dc143c] rounded-md border-4 border-[#8b0000] hover:bg-[#e9967a] transition-colors"
                style={{ boxShadow: '4px 4px 0px #8b0000' }}
              >
                Bottom Popover
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72">
                  <div className="w-4 h-4 bg-[#fffaf0] border-l-4 border-t-4 border-[#8b0000] absolute bottom-full left-1/2 -translate-x-1/2 mb-2 rotate-45"></div>
                  <div className="bg-[#fffaf0] border-4 border-[#8b0000] rounded-lg p-5" style={{ boxShadow: '6px 6px 0px #8b0000' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-[#8b0000]" style={{ fontFamily: 'Georgia, serif' }}>Old School</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="w-7 h-7 flex items-center justify-center font-bold text-white bg-[#dc143c] rounded border-2 border-[#8b0000] hover:bg-[#e9967a]"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-[#654321] leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                      Thick borders and drop shadows recall early web design aesthetics.
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
                className="px-8 py-3 text-sm font-bold text-white bg-[#20b2aa] rounded-md border-4 border-[#2f4f4f] hover:bg-[#48d1cc] transition-colors"
                style={{ boxShadow: '4px 4px 0px #2f4f4f' }}
              >
                Left Popover
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-72">
                  <div className="bg-[#f0fff0] border-4 border-[#2f4f4f] rounded-lg p-5" style={{ boxShadow: '6px 6px 0px #2f4f4f' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-[#2f4f4f]" style={{ fontFamily: 'Georgia, serif' }}>Classic</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="w-7 h-7 flex items-center justify-center font-bold text-white bg-[#20b2aa] rounded border-2 border-[#2f4f4f] hover:bg-[#48d1cc]"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-[#654321] leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                      Serif fonts and muted earth tones bring vintage charm.
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-[#f0fff0] border-r-4 border-b-4 border-[#2f4f4f] absolute left-full top-1/2 -translate-y-1/2 -ml-2 rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-8 py-3 text-sm font-bold text-white bg-[#daa520] rounded-md border-4 border-[#b8860b] hover:bg-[#f0e68c] transition-colors"
                style={{ boxShadow: '4px 4px 0px #b8860b' }}
              >
                Right Popover
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-72">
                  <div className="w-4 h-4 bg-[#fffacd] border-l-4 border-t-4 border-[#b8860b] absolute right-full top-1/2 -translate-y-1/2 mr-2 rotate-45"></div>
                  <div className="bg-[#fffacd] border-4 border-[#b8860b] rounded-lg p-5" style={{ boxShadow: '6px 6px 0px #b8860b' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-[#b8860b]" style={{ fontFamily: 'Georgia, serif' }}>Timeless</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="w-7 h-7 flex items-center justify-center font-bold text-white bg-[#daa520] rounded border-2 border-[#b8860b] hover:bg-[#f0e68c]"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-[#654321] leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                      Retro design celebrates the golden age of print and analog media.
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
