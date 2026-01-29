'use client';

import { useState, useRef, useEffect } from 'react';

export default function MaterialDropdown() {
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
    { label: 'Inbox', icon: '📥', badge: '12' },
    { label: 'Starred', icon: '⭐', badge: '' },
    { label: 'Sent', icon: '📤', badge: '' },
    { divider: true },
    { label: 'Settings', icon: '⚙️', badge: '' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded shadow-md hover:shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2"
        >
          Menu
          <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded shadow-lg overflow-hidden">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-px bg-gray-200 my-2" />
              ) : (
                <button
                  key={index}
                  className="w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-gray-600 group-hover:text-indigo-600 transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item.label}
                    </span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
