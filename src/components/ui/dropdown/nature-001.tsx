'use client';

import { useState, useRef, useEffect } from 'react';

export default function NatureDropdown() {
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
    { label: 'Garden', icon: '🌻' },
    { label: 'Forest', icon: '🌲' },
    { label: 'Ocean', icon: '🌊' },
    { divider: true },
    { label: 'Settings', icon: '🍃' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-7 py-3 bg-gradient-to-br from-green-600 to-emerald-700 text-white text-sm font-medium rounded-2xl shadow-lg hover:shadow-xl hover:from-green-500 hover:to-emerald-600 transition-all"
        >
          🌿 Explore
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-64 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl overflow-hidden border-2 border-green-200">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent my-2 relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
                    🌸
                  </div>
                </div>
              ) : (
                <button
                  key={index}
                  className="w-full px-5 py-3 text-left text-sm text-green-900 hover:bg-green-100 transition-all flex items-center gap-3 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {item.label}
                  </span>
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
