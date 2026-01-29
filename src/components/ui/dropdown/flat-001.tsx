'use client';

import { useState, useRef, useEffect } from 'react';

export default function FlatDropdown() {
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
    { label: 'Home', icon: '🏠', color: 'bg-blue-500' },
    { label: 'Profile', icon: '👤', color: 'bg-green-500' },
    { label: 'Settings', icon: '⚙️', color: 'bg-orange-500' },
    { divider: true },
    { label: 'Logout', icon: '🚪', color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors"
        >
          Menu
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-60 bg-white rounded-md overflow-hidden">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-px bg-gray-200 my-1" />
              ) : (
                <button
                  key={index}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                >
                  <div className={`w-8 h-8 ${item.color} rounded-md flex items-center justify-center text-base`}>
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-700">
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
