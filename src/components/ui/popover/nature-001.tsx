'use client';

import { useState, useRef, useEffect } from 'react';

export default function NaturePopover() {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-green-800 mb-12">Nature-Inspired Popover</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-7 py-3 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-md"
              >
                Forest Popover
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-80">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-6 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-green-700 flex items-center gap-2">
                        <span className="text-lg">🌿</span>
                        Fresh & Organic
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-green-400 hover:text-green-600 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-green-600 leading-relaxed">
                      Earthy tones and organic shapes bring the tranquility of nature indoors.
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-br from-green-50 to-emerald-50 border-r-2 border-b-2 border-green-200 absolute top-full left-1/2 -translate-x-1/2 -mt-2 rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-7 py-3 text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl hover:from-teal-700 hover:to-cyan-700 transition-all shadow-md"
              >
                Ocean Popover
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80">
                  <div className="w-4 h-4 bg-gradient-to-br from-teal-50 to-cyan-50 border-l-2 border-t-2 border-teal-200 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 rotate-45"></div>
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-3xl p-6 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-teal-700 flex items-center gap-2">
                        <span className="text-lg">🌊</span>
                        Calm Waters
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-teal-400 hover:text-teal-600 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-teal-600 leading-relaxed">
                      Cool blue-green hues evoke the serenity of flowing water and clear skies.
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
                className="px-7 py-3 text-sm font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl hover:from-amber-700 hover:to-orange-700 transition-all shadow-md"
              >
                Earth Popover
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-80">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl p-6 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-amber-700 flex items-center gap-2">
                        <span className="text-lg">🍂</span>
                        Grounded
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-amber-400 hover:text-amber-600 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-amber-600 leading-relaxed">
                      Warm earth tones and natural textures create a comforting atmosphere.
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-br from-amber-50 to-orange-50 border-r-2 border-b-2 border-amber-200 absolute left-full top-1/2 -translate-y-1/2 -ml-2 rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-7 py-3 text-sm font-medium text-white bg-gradient-to-r from-lime-600 to-green-600 rounded-2xl hover:from-lime-700 hover:to-green-700 transition-all shadow-md"
              >
                Garden Popover
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-80">
                  <div className="w-4 h-4 bg-gradient-to-br from-lime-50 to-green-50 border-l-2 border-t-2 border-lime-200 absolute right-full top-1/2 -translate-y-1/2 mr-2 rotate-45"></div>
                  <div className="bg-gradient-to-br from-lime-50 to-green-50 border-2 border-lime-200 rounded-3xl p-6 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-lime-700 flex items-center gap-2">
                        <span className="text-lg">🌱</span>
                        Growth
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-lime-400 hover:text-lime-600 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-lime-600 leading-relaxed">
                      Fresh greens and botanical elements inspire renewal and vitality.
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
