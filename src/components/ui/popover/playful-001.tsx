'use client';

import { useState, useRef, useEffect } from 'react';

export default function PlayfulPopover() {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-orange-600 mb-12 transform -rotate-2">Playful Popover</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-7 py-3 text-base font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:scale-110 transition-transform shadow-lg transform rotate-1"
              >
                Click Me!
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 animate-bounce-in">
                  <div className="bg-white rounded-3xl p-6 shadow-2xl transform -rotate-1" style={{ border: '4px solid #ec4899' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-black text-pink-600">Yay!</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="w-8 h-8 flex items-center justify-center font-bold text-white bg-pink-500 rounded-full hover:rotate-90 transition-transform"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Fun, bouncy design with vibrant colors and playful animations!
                    </p>
                  </div>
                  <div className="w-5 h-5 bg-white absolute top-full left-1/2 -translate-x-1/2 -mt-3 rotate-45" style={{ border: '4px solid #ec4899', borderLeft: 'none', borderTop: 'none' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-7 py-3 text-base font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:scale-110 transition-transform shadow-lg transform -rotate-1"
              >
                Tap Here!
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 animate-bounce-in">
                  <div className="w-5 h-5 bg-white absolute bottom-full left-1/2 -translate-x-1/2 mb-3 rotate-45" style={{ border: '4px solid #06b6d4', borderRight: 'none', borderBottom: 'none' }}></div>
                  <div className="bg-white rounded-3xl p-6 shadow-2xl transform rotate-1" style={{ border: '4px solid #06b6d4' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-black text-cyan-600">Woohoo!</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="w-8 h-8 flex items-center justify-center font-bold text-white bg-cyan-500 rounded-full hover:rotate-90 transition-transform"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Energetic style that brings joy to everyday interactions!
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
                className="px-7 py-3 text-base font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full hover:scale-110 transition-transform shadow-lg transform rotate-2"
              >
                Press Now!
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 w-72 animate-bounce-in">
                  <div className="bg-white rounded-3xl p-6 shadow-2xl transform rotate-2" style={{ border: '4px solid #8b5cf6' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-black text-purple-600">Awesome!</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="w-8 h-8 flex items-center justify-center font-bold text-white bg-purple-500 rounded-full hover:rotate-90 transition-transform"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Cheerful rotations and bold borders make everything exciting!
                    </p>
                  </div>
                  <div className="w-5 h-5 bg-white absolute left-full top-1/2 -translate-y-1/2 -ml-3 rotate-45" style={{ border: '4px solid #8b5cf6', borderLeft: 'none', borderTop: 'none' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-7 py-3 text-base font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-full hover:scale-110 transition-transform shadow-lg transform -rotate-2"
              >
                Hit It!
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-72 animate-bounce-in">
                  <div className="w-5 h-5 bg-white absolute right-full top-1/2 -translate-y-1/2 mr-3 rotate-45" style={{ border: '4px solid #10b981', borderRight: 'none', borderBottom: 'none' }}></div>
                  <div className="bg-white rounded-3xl p-6 shadow-2xl transform -rotate-2" style={{ border: '4px solid #10b981' }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-black text-emerald-600">Yeah!</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="w-8 h-8 flex items-center justify-center font-bold text-white bg-emerald-500 rounded-full hover:rotate-90 transition-transform"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      Friendly interfaces that make users smile and engage happily!
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
