'use client';

import { useState, useRef, useEffect } from 'react';

export default function MonochromePopover() {
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
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-12">Monochrome Popover</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-6 py-3 text-sm font-bold text-white bg-black hover:bg-gray-800 transition-colors border-2 border-black"
              >
                Top Popover
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64">
                  <div className="bg-white border-2 border-black p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-bold text-black">Black & White</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-gray-600 hover:text-black font-bold"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      Pure grayscale palette. No colors, just shades of gray.
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-white border-r-2 border-b-2 border-black absolute top-full left-1/2 -translate-x-1/2 -mt-[7px] rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-6 py-3 text-sm font-bold text-black bg-white hover:bg-gray-100 transition-colors border-2 border-black"
              >
                Bottom Popover
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64">
                  <div className="w-3 h-3 bg-white border-l-2 border-t-2 border-black absolute bottom-full left-1/2 -translate-x-1/2 mb-[7px] rotate-45"></div>
                  <div className="bg-white border-2 border-black p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-bold text-black">Grayscale</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-gray-600 hover:text-black font-bold"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      Timeless aesthetic focusing on contrast and clarity.
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
                className="px-6 py-3 text-sm font-bold text-white bg-gray-800 hover:bg-gray-700 transition-colors border-2 border-gray-800"
              >
                Left Popover
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 w-64">
                  <div className="bg-white border-2 border-black p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-bold text-black">Minimal</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-gray-600 hover:text-black font-bold"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      Distraction-free design using only black, white, and grays.
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-white border-r-2 border-b-2 border-black absolute left-full top-1/2 -translate-y-1/2 -ml-[7px] rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-6 py-3 text-sm font-bold text-black bg-gray-200 hover:bg-gray-300 transition-colors border-2 border-black"
              >
                Right Popover
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-64">
                  <div className="w-3 h-3 bg-white border-l-2 border-t-2 border-black absolute right-full top-1/2 -translate-y-1/2 mr-[7px] rotate-45"></div>
                  <div className="bg-white border-2 border-black p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-bold text-black">Classic</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-gray-600 hover:text-black font-bold"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      High contrast between elements creates visual hierarchy.
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
