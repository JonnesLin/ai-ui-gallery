'use client';

import { useState, useRef, useEffect } from 'react';

export default function ThreeDDropdown() {
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
    { label: 'Profile', icon: '👤' },
    { label: 'Settings', icon: '⚙️' },
    { label: 'Messages', icon: '💬' },
    { divider: true },
    { label: 'Logout', icon: '🚪' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef} style={{ perspective: '1000px' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-8 py-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-bold rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all transform hover:scale-105"
          style={{
            transform: 'rotateX(5deg) rotateY(-5deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <span style={{ transform: 'translateZ(20px)', display: 'block' }}>
            3D Menu
          </span>
        </button>

        {isOpen && (
          <div
            className="absolute right-0 mt-4 w-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden border border-slate-700"
            style={{
              transform: 'rotateX(10deg) rotateY(-5deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {menuItems.map((item, index) =>
              item.divider ? (
                <div
                  key={index}
                  className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-2"
                  style={{ transform: 'translateZ(5px)' }}
                />
              ) : (
                <button
                  key={index}
                  className="w-full px-5 py-4 text-left text-sm text-white hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all flex items-center gap-3 group"
                  style={{
                    transform: 'translateZ(10px)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <span
                    className="text-xl group-hover:scale-110 transition-transform"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="group-hover:translate-x-2 transition-transform"
                    style={{ transform: 'translateZ(10px)' }}
                  >
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
