'use client';

import { useState, useRef, useEffect } from 'react';

export default function GradientDropdown() {
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
    { label: 'Profile', icon: '👤', gradient: 'from-blue-500 to-cyan-500' },
    { label: 'Messages', icon: '💬', gradient: 'from-purple-500 to-pink-500' },
    { label: 'Favorites', icon: '⭐', gradient: 'from-yellow-500 to-orange-500' },
    { divider: true },
    { label: 'Logout', icon: '🚪', gradient: 'from-red-500 to-rose-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          My Menu
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-64 bg-slate-800/95 backdrop-blur-sm rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-2" />
              ) : (
                <button
                  key={index}
                  className="w-full px-5 py-3 text-left text-sm text-white hover:bg-gradient-to-r hover:from-violet-600/20 hover:to-fuchsia-600/20 transition-all flex items-center gap-3 group"
                >
                  <span className={`text-lg bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
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
