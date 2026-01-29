'use client';

import { useState, useRef, useEffect } from 'react';

export default function GlassmorphismDropdown() {
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
    { label: 'Dashboard', icon: '📊' },
    { label: 'Analytics', icon: '📈' },
    { label: 'Reports', icon: '📄' },
    { divider: true },
    { label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-3 bg-white/20 backdrop-blur-lg text-white text-sm font-medium rounded-2xl border border-white/30 shadow-lg hover:bg-white/30 transition-all"
        >
          Options
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-60 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl overflow-hidden">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-px bg-white/20 my-2" />
              ) : (
                <button
                  key={index}
                  className="w-full px-5 py-3 text-left text-sm text-white hover:bg-white/20 transition-all flex items-center gap-3"
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
