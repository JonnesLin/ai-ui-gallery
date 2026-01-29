'use client';

import { useState, useRef, useEffect } from 'react';

export default function BrutalistDropdown() {
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
    { label: 'HOME', icon: '▲' },
    { label: 'WORK', icon: '■' },
    { label: 'ABOUT', icon: '●' },
    { divider: true },
    { label: 'CONTACT', icon: '◆' },
  ];

  return (
    <div className="min-h-screen bg-yellow-300 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-8 py-4 bg-black text-yellow-300 text-base font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          MENU
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-4 w-72 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-1 bg-black my-0" />
              ) : (
                <button
                  key={index}
                  className="w-full px-6 py-4 text-left text-base font-black uppercase text-black hover:bg-yellow-300 transition-colors flex items-center gap-4 border-b-2 border-black last:border-b-0"
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
