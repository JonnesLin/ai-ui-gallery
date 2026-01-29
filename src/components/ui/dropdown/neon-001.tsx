'use client';

import { useState, useRef, useEffect } from 'react';

export default function NeonDropdown() {
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
    { label: 'Night Mode', icon: '🌙', color: 'text-purple-400' },
    { label: 'Party Zone', icon: '🎵', color: 'text-pink-400' },
    { label: 'Gallery', icon: '🎨', color: 'text-cyan-400' },
    { divider: true },
    { label: 'Power Off', icon: '⚡', color: 'text-yellow-400' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-8 py-3 bg-gray-950 text-pink-400 text-sm font-bold uppercase tracking-wider border-2 border-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.5),inset_0_0_20px_rgba(244,114,182,0.1)] hover:shadow-[0_0_30px_rgba(244,114,182,0.8),inset_0_0_30px_rgba(244,114,182,0.2)] transition-all"
        >
          NEON MENU
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-72 bg-gray-950 border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] overflow-hidden">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="relative h-px my-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                </div>
              ) : (
                <button
                  key={index}
                  className={`w-full px-6 py-4 text-left text-sm font-bold uppercase ${item.color} hover:bg-gray-900 transition-all flex items-center gap-4 group relative overflow-hidden`}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]">
                    {item.icon}
                  </span>
                  <span className="drop-shadow-[0_0_8px_currentColor] group-hover:translate-x-1 transition-transform">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
