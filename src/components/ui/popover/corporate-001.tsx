'use client';

import { useState, useRef, useEffect } from 'react';

export default function CorporatePopover() {
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
    <div className="min-h-screen bg-slate-50 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-800 mb-12">Corporate Popover</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Top Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['top'] = el; }}>
              <button
                onClick={() => togglePopover('top')}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors shadow-md"
              >
                Top Popover
              </button>
              {openPopover === 'top' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80">
                  <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-slate-800">Professional Interface</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Clean, trustworthy design that conveys professionalism and reliability.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-1.5 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                        Learn More
                      </button>
                      <button className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 transition-colors">
                        Dismiss
                      </button>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-white border-r border-b border-slate-200 absolute top-full left-1/2 -translate-x-1/2 -mt-[7px] rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['bottom'] = el; }}>
              <button
                onClick={() => togglePopover('bottom')}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors shadow-md"
              >
                Bottom Popover
              </button>
              {openPopover === 'bottom' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80">
                  <div className="w-3 h-3 bg-white border-l border-t border-slate-200 absolute bottom-full left-1/2 -translate-x-1/2 mb-[7px] rotate-45"></div>
                  <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-slate-800">Business Standard</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Formal aesthetics designed for enterprise applications and B2B platforms.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-1.5 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                        Accept
                      </button>
                      <button className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 transition-colors">
                        Cancel
                      </button>
                    </div>
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
                className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors shadow-md"
              >
                Left Popover
              </button>
              {openPopover === 'left' && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 w-80">
                  <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-slate-800">Enterprise Ready</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Conservative color scheme and structured layout inspire confidence.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-1.5 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                        Proceed
                      </button>
                      <button className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 transition-colors">
                        Close
                      </button>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-white border-r border-b border-slate-200 absolute left-full top-1/2 -translate-y-1/2 -ml-[7px] rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Right Popover */}
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative" ref={(el) => { popoverRefs.current['right'] = el; }}>
              <button
                onClick={() => togglePopover('right')}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors shadow-md"
              >
                Right Popover
              </button>
              {openPopover === 'right' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-80">
                  <div className="w-3 h-3 bg-white border-l border-t border-slate-200 absolute right-full top-1/2 -translate-y-1/2 mr-[7px] rotate-45"></div>
                  <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-slate-800">Executive Suite</h3>
                      <button
                        onClick={() => setOpenPopover(null)}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Polished interface elements suitable for high-stakes business contexts.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-1.5 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                        Confirm
                      </button>
                      <button className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 transition-colors">
                        Decline
                      </button>
                    </div>
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
