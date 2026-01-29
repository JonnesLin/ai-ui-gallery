'use client';

import { useState, useRef, useEffect } from 'react';

export default function NeumorphismDropdown() {
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
    { label: 'My Account', icon: '👤' },
    { label: 'Preferences', icon: '🎨' },
    { label: 'Notifications', icon: '🔔' },
    { divider: true },
    { label: 'Sign Out', icon: '🚪' },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-8 py-3 bg-gray-200 text-gray-700 text-sm font-medium rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] transition-all active:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]"
        >
          Account
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-4 w-64 bg-gray-200 rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] overflow-hidden">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-px bg-gray-300 my-2 mx-4 shadow-sm" />
              ) : (
                <button
                  key={index}
                  className="w-full px-6 py-3 text-left text-sm text-gray-700 hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all flex items-center gap-3"
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
