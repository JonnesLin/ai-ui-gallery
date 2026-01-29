'use client';

import { useState, useRef, useEffect } from 'react';

export default function PastelPopover() {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-purple-400 mb-12">Pastel Popover</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-7 py-3 text-sm font-medium text-pink-600 bg-pink-100 border-2 border-pink-200 rounded-full hover:bg-pink-200 transition-all shadow-lg"
              >
                Top Popover
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-3xl p-5 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-pink-500">Soft & Sweet</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-pink-300 hover:text-pink-500 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-purple-400 leading-relaxed">
                      Gentle pastel hues create a calming and approachable interface.
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-gradient-to-br from-pink-50 to-purple-50 border-r-2 border-b-2 border-pink-200 absolute top-full left-1/2 -translate-x-1/2 -mt-[7px] rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-7 py-3 text-sm font-medium text-blue-600 bg-blue-100 border-2 border-blue-200 rounded-full hover:bg-blue-200 transition-all shadow-lg"
              >
                Bottom Popover
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-50 to-teal-50 border-l-2 border-t-2 border-blue-200 absolute bottom-full left-1/2 -translate-x-1/2 mb-[7px] rotate-45"></div>
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-3xl p-5 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-blue-500">Light Touch</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-blue-300 hover:text-blue-500 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-teal-400 leading-relaxed">
                      Muted tones reduce visual stress and promote relaxation.
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
                className="px-7 py-3 text-sm font-medium text-purple-600 bg-purple-100 border-2 border-purple-200 rounded-full hover:bg-purple-200 transition-all shadow-lg"
              >
                Left Popover
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-72">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-3xl p-5 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-purple-500">Dreamy</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-purple-300 hover:text-purple-500 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-pink-400 leading-relaxed">
                      Whimsical color combinations evoke warmth and friendliness.
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-gradient-to-br from-purple-50 to-pink-50 border-r-2 border-b-2 border-purple-200 absolute left-full top-1/2 -translate-y-1/2 -ml-[7px] rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-7 py-3 text-sm font-medium text-teal-600 bg-teal-100 border-2 border-teal-200 rounded-full hover:bg-teal-200 transition-all shadow-lg"
              >
                Right Popover
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-72">
                  <div className="w-3 h-3 bg-gradient-to-br from-teal-50 to-blue-50 border-l-2 border-t-2 border-teal-200 absolute right-full top-1/2 -translate-y-1/2 mr-[7px] rotate-45"></div>
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 rounded-3xl p-5 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-teal-500">Delicate</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-teal-300 hover:text-teal-500 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-blue-400 leading-relaxed">
                      Soft rounded corners and subtle gradients feel gentle and inviting.
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
