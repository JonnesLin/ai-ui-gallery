'use client';

import { useState, useRef, useEffect } from 'react';

export default function LuxuryDropdown() {
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
    { label: 'Collections', icon: '💎' },
    { label: 'Exclusive Access', icon: '👑' },
    { label: 'Concierge', icon: '🎩' },
    { divider: true },
    { label: 'My Account', icon: '✨' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-gray-900 text-sm font-semibold uppercase tracking-widest rounded-sm shadow-[0_0_30px_rgba(217,119,6,0.3)] hover:shadow-[0_0_40px_rgba(217,119,6,0.5)] transition-all border border-yellow-400"
        >
          Menu
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-72 bg-gradient-to-b from-gray-900 to-black rounded-sm shadow-[0_0_50px_rgba(217,119,6,0.2)] overflow-hidden border border-amber-700/30">
            <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent my-3 mx-6" />
              ) : (
                <button
                  key={index}
                  className="w-full px-6 py-4 text-left text-sm text-amber-100 hover:bg-gradient-to-r hover:from-amber-900/30 hover:to-transparent transition-all flex items-center gap-4 group border-l-2 border-transparent hover:border-amber-500"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-light tracking-wide uppercase text-xs group-hover:text-amber-300 transition-colors">
                    {item.label}
                  </span>
                </button>
              )
            )}
            <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </div>
        )}
      </div>
    </div>
  );
}
