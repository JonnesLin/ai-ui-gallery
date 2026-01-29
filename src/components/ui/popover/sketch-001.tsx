'use client';

import { useState, useRef, useEffect } from 'react';

export default function SketchPopover() {
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
    <div className="min-h-screen bg-amber-50 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-12" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          Sketch Popover
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-6 py-3 text-sm font-bold text-gray-800 bg-white hover:bg-gray-50 transition-colors border-2 border-gray-800 rounded-lg"
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                  boxShadow: '2px 2px 0 rgba(0,0,0,0.3)'
                }}
              >
                Top Popover
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72">
                  <div
                    className="bg-white border-2 border-gray-800 p-5"
                    style={{
                      borderRadius: '225px 15px 255px 20px/20px 255px 15px 225px',
                      boxShadow: '3px 3px 0 rgba(0,0,0,0.3)'
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                        Hand Drawn
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Playful irregular borders mimicking hand-drawn sketches.
                    </p>
                  </div>
                  <div
                    className="w-4 h-4 bg-white border-r-2 border-b-2 border-gray-800 absolute top-full left-1/2 -translate-x-1/2 -mt-[9px] rotate-45"
                    style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}
                  ></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-6 py-3 text-sm font-bold text-gray-800 bg-blue-100 hover:bg-blue-200 transition-colors border-2 border-gray-800 rounded-lg"
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px',
                  boxShadow: '2px 2px 0 rgba(0,0,0,0.3)'
                }}
              >
                Bottom Popover
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72">
                  <div
                    className="w-4 h-4 bg-blue-100 border-l-2 border-t-2 border-gray-800 absolute bottom-full left-1/2 -translate-x-1/2 mb-[9px] rotate-45"
                    style={{ boxShadow: '-1px -1px 0 rgba(0,0,0,0.2)' }}
                  ></div>
                  <div
                    className="bg-blue-100 border-2 border-gray-800 p-5"
                    style={{
                      borderRadius: '20px 255px 15px 225px/15px 225px 255px 20px',
                      boxShadow: '3px 3px 0 rgba(0,0,0,0.3)'
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                        Doodle Style
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Whimsical design with organic shapes and playful colors.
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
                className="px-6 py-3 text-sm font-bold text-gray-800 bg-pink-100 hover:bg-pink-200 transition-colors border-2 border-gray-800 rounded-lg"
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  borderRadius: '255px 20px 225px 15px/15px 225px 20px 255px',
                  boxShadow: '2px 2px 0 rgba(0,0,0,0.3)'
                }}
              >
                Left Popover
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-72">
                  <div
                    className="bg-pink-100 border-2 border-gray-800 p-5"
                    style={{
                      borderRadius: '225px 20px 255px 15px/15px 255px 20px 225px',
                      boxShadow: '3px 3px 0 rgba(0,0,0,0.3)'
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                        Sketchy
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Imperfect curves and casual typography create friendly feel.
                    </p>
                  </div>
                  <div
                    className="w-4 h-4 bg-pink-100 border-r-2 border-b-2 border-gray-800 absolute left-full top-1/2 -translate-y-1/2 -ml-[9px] rotate-45"
                    style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}
                  ></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-6 py-3 text-sm font-bold text-gray-800 bg-green-100 hover:bg-green-200 transition-colors border-2 border-gray-800 rounded-lg"
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  borderRadius: '20px 225px 15px 255px/255px 15px 225px 20px',
                  boxShadow: '2px 2px 0 rgba(0,0,0,0.3)'
                }}
              >
                Right Popover
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-72">
                  <div
                    className="w-4 h-4 bg-green-100 border-l-2 border-t-2 border-gray-800 absolute right-full top-1/2 -translate-y-1/2 mr-[9px] rotate-45"
                    style={{ boxShadow: '-1px -1px 0 rgba(0,0,0,0.2)' }}
                  ></div>
                  <div
                    className="bg-green-100 border-2 border-gray-800 p-5"
                    style={{
                      borderRadius: '15px 225px 20px 255px/255px 20px 225px 15px',
                      boxShadow: '3px 3px 0 rgba(0,0,0,0.3)'
                    }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                        Organic
                      </h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Human touch with irregular shapes and soft pastel backgrounds.
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
