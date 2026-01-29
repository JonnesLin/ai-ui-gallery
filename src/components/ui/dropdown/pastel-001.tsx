'use client';

import { useState, useRef, useEffect } from 'react';

export default function PastelDropdown() {
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
    { label: 'Profile', icon: '🌸', color: 'hover:bg-pink-100' },
    { label: 'Gallery', icon: '🎨', color: 'hover:bg-purple-100' },
    { label: 'Messages', icon: '💌', color: 'hover:bg-blue-100' },
    { divider: true },
    { label: 'Logout', icon: '🌙', color: 'hover:bg-indigo-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-7 py-3 bg-white text-purple-500 text-sm font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all border-2 border-purple-200"
        >
          ✨ Options
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-60 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border-2 border-purple-200">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-px bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 my-2 mx-4" />
              ) : (
                <button
                  key={index}
                  className={`w-full px-5 py-3 text-left text-sm text-gray-700 ${item.color} transition-all flex items-center gap-3 rounded-2xl mx-2 my-1`}
                >
                  <span className="text-lg">{item.icon}</span>
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
