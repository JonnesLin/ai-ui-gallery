'use client';

import { useState, useRef, useEffect } from 'react';

export default function PlayfulDropdown() {
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
    { label: 'Home', icon: '🏠', color: 'bg-red-100 text-red-600' },
    { label: 'Games', icon: '🎮', color: 'bg-blue-100 text-blue-600' },
    { label: 'Friends', icon: '👫', color: 'bg-green-100 text-green-600' },
    { divider: true },
    { label: 'Settings', icon: '⚙️', color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-200 to-pink-200 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-8 py-4 bg-gradient-to-r from-orange-400 to-pink-400 text-white text-base font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-2 transition-all transform"
        >
          🎉 Click Me!
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-4 w-64 bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-1 border-4 border-yellow-300">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-2 bg-gradient-to-r from-orange-300 via-yellow-300 to-pink-300 my-2" />
              ) : (
                <button
                  key={index}
                  className="w-full px-5 py-4 text-left hover:scale-105 transition-all flex items-center gap-4 group"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-xl transform group-hover:rotate-12 transition-transform shadow-md`}>
                    {item.icon}
                  </div>
                  <span className="text-base font-semibold text-gray-700 group-hover:translate-x-1 transition-transform">
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
