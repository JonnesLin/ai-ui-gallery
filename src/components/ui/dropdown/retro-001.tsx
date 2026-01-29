'use client';

import { useState, useRef, useEffect } from 'react';

export default function RetroDropdown() {
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
    { label: 'Play Game', icon: '🎮' },
    { label: 'High Scores', icon: '🏆' },
    { label: 'Options', icon: '⚙️' },
    { divider: true },
    { label: 'Quit', icon: '❌' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-8 py-3 bg-gradient-to-b from-pink-500 to-purple-600 text-yellow-300 text-sm font-bold uppercase rounded-md border-2 border-yellow-400 shadow-[0_4px_0_0_rgba(168,85,247,1)] hover:shadow-[0_2px_0_0_rgba(168,85,247,1)] hover:translate-y-0.5 transition-all"
          style={{ fontFamily: 'monospace' }}
        >
          ▶ START
        </button>

        {isOpen && (
          <div
            className="absolute right-0 mt-3 w-64 bg-gradient-to-b from-blue-500 to-purple-600 border-4 border-yellow-400 shadow-[0_8px_0_0_rgba(168,85,247,1)] overflow-hidden"
            style={{ fontFamily: 'monospace' }}
          >
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-1 bg-yellow-400 my-1" />
              ) : (
                <button
                  key={index}
                  className="w-full px-5 py-3 text-left text-sm font-bold uppercase text-yellow-300 hover:bg-pink-500 transition-all flex items-center gap-3 border-b-2 border-purple-700 last:border-b-0"
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
