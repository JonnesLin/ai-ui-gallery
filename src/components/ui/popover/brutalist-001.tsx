'use client';

import { useState, useRef, useEffect } from 'react';

export default function BrutalistPopover() {
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
    <div className="min-h-screen bg-yellow-400 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-black mb-12 uppercase tracking-tight border-8 border-black inline-block px-6 py-3 bg-white transform -rotate-1">
          Brutalist Popover
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-8 py-4 text-base font-black text-black bg-white border-4 border-black uppercase hover:bg-black hover:text-white transition-colors transform hover:translate-x-1 hover:translate-y-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                TOP
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-80">
                  <div className="bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-black text-black uppercase">RAW</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="w-8 h-8 flex items-center justify-center font-black text-black bg-yellow-400 border-2 border-black hover:bg-black hover:text-yellow-400"
                      >
                        X
                      </button>
                    </div>
                    <p className="text-sm text-black font-bold uppercase leading-tight">
                      BOLD BORDERS. SHARP CORNERS. NO COMPROMISE.
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-white border-r-4 border-b-4 border-black absolute top-full left-1/2 -translate-x-1/2 -mt-2 rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-8 py-4 text-base font-black text-white bg-black border-4 border-black uppercase hover:bg-white hover:text-black transition-colors transform hover:translate-x-1 hover:translate-y-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                BOTTOM
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80">
                  <div className="w-4 h-4 bg-black border-l-4 border-t-4 border-black absolute bottom-full left-1/2 -translate-x-1/2 mb-2 rotate-45"></div>
                  <div className="bg-black border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(255,215,0,1)]">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-black text-yellow-400 uppercase">HARSH</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="w-8 h-8 flex items-center justify-center font-black text-black bg-yellow-400 border-2 border-yellow-400 hover:bg-white hover:text-black hover:border-white"
                      >
                        X
                      </button>
                    </div>
                    <p className="text-sm text-white font-bold uppercase leading-tight">
                      FUNCTION OVER FORM. TRUTH IN MATERIALS.
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
                className="px-8 py-4 text-base font-black text-black bg-red-500 border-4 border-black uppercase hover:bg-black hover:text-red-500 transition-colors transform hover:translate-x-1 hover:translate-y-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                LEFT
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 w-80">
                  <div className="bg-red-500 border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-black text-black uppercase">STARK</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="w-8 h-8 flex items-center justify-center font-black text-white bg-black border-2 border-black hover:bg-white hover:text-black"
                      >
                        X
                      </button>
                    </div>
                    <p className="text-sm text-black font-bold uppercase leading-tight">
                      UNAPOLOGETIC DESIGN. CONCRETE AESTHETICS.
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-red-500 border-r-4 border-b-4 border-black absolute left-full top-1/2 -translate-y-1/2 -ml-2 rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-8 py-4 text-base font-black text-white bg-blue-600 border-4 border-black uppercase hover:bg-black hover:text-blue-600 transition-colors transform hover:translate-x-1 hover:translate-y-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                RIGHT
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-80">
                  <div className="w-4 h-4 bg-blue-600 border-l-4 border-t-4 border-black absolute right-full top-1/2 -translate-y-1/2 mr-2 rotate-45"></div>
                  <div className="bg-blue-600 border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-black text-white uppercase">BOLD</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="w-8 h-8 flex items-center justify-center font-black text-blue-600 bg-yellow-400 border-2 border-black hover:bg-black hover:text-yellow-400"
                      >
                        X
                      </button>
                    </div>
                    <p className="text-sm text-white font-bold uppercase leading-tight">
                      NO SUBTLETY. MAXIMUM IMPACT. PURE EXPRESSION.
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
