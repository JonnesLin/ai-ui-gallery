'use client';

import { useState, useRef, useEffect } from 'react';

export default function SketchDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { label: 'Pencil', icon: '✏️' },
    { label: 'Brush', icon: '🖌️' },
    { label: 'Eraser', icon: '🧹' },
    { divider: true },
    { label: 'Save', icon: '💾' },
  ];

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-3 bg-white text-gray-800 text-sm font-handwriting border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all transform rotate-[-1deg]"
          style={{ fontFamily: 'Comic Sans MS, cursive' }}
        >
          Tools
        </button>

        {isOpen && (
          <div
            className="absolute right-0 mt-3 w-64 bg-white border-2 border-gray-800 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden transform rotate-[1deg]"
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="relative h-4 my-2">
                  <svg className="w-full h-full" viewBox="0 0 200 20">
                    <path
                      d="M 0 10 Q 50 5, 100 10 T 200 10"
                      stroke="#000"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              ) : (
                <button
                  key={index}
                  className="w-full px-5 py-3 text-left text-sm text-gray-800 hover:bg-yellow-50 transition-all flex items-center gap-3 border-b-2 border-gray-300 border-dashed last:border-b-0 transform hover:translate-x-1"
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
