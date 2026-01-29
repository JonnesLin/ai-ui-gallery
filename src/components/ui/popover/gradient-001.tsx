'use client';

import { useState, useRef, useEffect } from 'react';

export default function GradientPopover() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-12 drop-shadow-lg">Gradient Popover</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Top Popover
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72">
                  <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl p-5 shadow-2xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-white">Vibrant</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-white/80 hover:text-white text-lg transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-white/90 leading-relaxed">
                      Rich color transitions create eye-catching visual interest and depth.
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-gradient-to-br from-violet-600 to-fuchsia-600 absolute top-full left-1/2 -translate-x-1/2 -mt-[7px] rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Bottom Popover
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72">
                  <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-red-500 absolute bottom-full left-1/2 -translate-x-1/2 mb-[7px] rotate-45"></div>
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-5 shadow-2xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-white">Dynamic</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-white/80 hover:text-white text-lg transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-white/90 leading-relaxed">
                      Smooth color blends add energy and modern appeal to interfaces.
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
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Left Popover
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-72">
                  <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-5 shadow-2xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-white">Colorful</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-white/80 hover:text-white text-lg transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-white/90 leading-relaxed">
                      Gradient backgrounds draw attention and highlight important content.
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-gradient-to-br from-indigo-600 to-blue-600 absolute left-full top-1/2 -translate-y-1/2 -ml-[7px] rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Right Popover
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-72">
                  <div className="w-3 h-3 bg-gradient-to-br from-purple-600 to-pink-600 absolute right-full top-1/2 -translate-y-1/2 mr-[7px] rotate-45"></div>
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-5 shadow-2xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-white">Radiant</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-white/80 hover:text-white text-lg transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-white/90 leading-relaxed">
                      Multi-directional gradients provide dimension and visual flow.
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
