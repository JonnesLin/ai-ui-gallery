'use client';

import { useState, useRef, useEffect } from 'react';

export default function MonochromeDropdown() {
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
    { label: 'Overview', icon: '●' },
    { label: 'Details', icon: '○' },
    { label: 'Archive', icon: '◐' },
    { divider: true },
    { label: 'Exit', icon: '◯' },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-8 py-3 bg-black text-white text-sm font-light uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
        >
          Menu
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-px bg-black my-2" />
              ) : (
                <button
                  key={index}
                  className="w-full px-6 py-3 text-left text-sm font-light uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all flex items-center gap-4"
                >
                  <span className="text-base">{item.icon}</span>
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
