'use client';

import { useState, useRef, useEffect } from 'react';

export default function ThreeDPopover() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4" style={{
          textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.3)'
        }}>
          3D Elevated Popover
        </h1>
        <p className="text-slate-400 mb-12">Multi-layered shadows with depth perception</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg transition-all duration-300"
                style={{
                  boxShadow: '0 2px 4px rgba(59,130,246,0.5), 0 4px 8px rgba(59,130,246,0.3), 0 8px 16px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)'
                }}
              >
                Top Popover
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72">
                  <div className="bg-slate-800 rounded-xl p-5 border border-slate-700/50"
                    style={{
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-bold text-slate-100">3D Elevation</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Experience depth through multi-layered shadows and realistic lighting effects.
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-slate-800 absolute top-full left-1/2 -translate-x-1/2 -mt-2 rotate-45 border-r border-b border-slate-700/50"
                    style={{
                      boxShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg transition-all duration-300"
                style={{
                  boxShadow: '0 2px 4px rgba(16,185,129,0.5), 0 4px 8px rgba(16,185,129,0.3), 0 8px 16px rgba(16,185,129,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)'
                }}
              >
                Bottom Popover
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72">
                  <div className="w-4 h-4 bg-slate-800 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 rotate-45 border-l border-t border-slate-700/50"
                    style={{
                      boxShadow: '-2px -2px 4px rgba(0,0,0,0.3)'
                    }}></div>
                  <div className="bg-slate-800 rounded-xl p-5 border border-slate-700/50"
                    style={{
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-bold text-slate-100">Depth Perception</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Layered shadows create visual hierarchy and realistic depth.
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
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg transition-all duration-300"
                style={{
                  boxShadow: '0 2px 4px rgba(168,85,247,0.5), 0 4px 8px rgba(168,85,247,0.3), 0 8px 16px rgba(168,85,247,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)'
                }}
              >
                Left Popover
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 w-72">
                  <div className="bg-slate-800 rounded-xl p-5 border border-slate-700/50"
                    style={{
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-bold text-slate-100">Elevated UI</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Components float above the surface with realistic shadow projection.
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-slate-800 absolute left-full top-1/2 -translate-y-1/2 -ml-2 rotate-45 border-r border-t border-slate-700/50"
                    style={{
                      boxShadow: '2px -2px 4px rgba(0,0,0,0.3)'
                    }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg transition-all duration-300"
                style={{
                  boxShadow: '0 2px 4px rgba(245,158,11,0.5), 0 4px 8px rgba(245,158,11,0.3), 0 8px 16px rgba(245,158,11,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)'
                }}
              >
                Right Popover
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-72">
                  <div className="w-4 h-4 bg-slate-800 absolute right-full top-1/2 -translate-y-1/2 mr-2 rotate-45 border-l border-b border-slate-700/50"
                    style={{
                      boxShadow: '-2px 2px 4px rgba(0,0,0,0.3)'
                    }}></div>
                  <div className="bg-slate-800 rounded-xl p-5 border border-slate-700/50"
                    style={{
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-bold text-slate-100">Material Depth</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Physical metaphors bring digital interfaces to life with tangible depth.
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
