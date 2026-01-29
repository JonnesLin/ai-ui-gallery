'use client';

import { useState, useRef, useEffect } from 'react';

export default function CyberpunkDropdown() {
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
    { label: 'Neural Link', icon: '🧠', status: 'ACTIVE' },
    { label: 'Cyber Deck', icon: '💾', status: 'ONLINE' },
    { label: 'Implants', icon: '⚡', status: 'SYNCED' },
    { divider: true },
    { label: 'Jack Out', icon: '🔌', status: 'EXIT' },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-3 bg-cyan-500 text-black text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all border-2 border-cyan-400 clip-corner relative overflow-hidden group"
          style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
        >
          <span className="relative z-10">MENU_SYS</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </button>

        {isOpen && (
          <div
            className="absolute right-0 mt-3 w-80 bg-black/95 border-2 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)] overflow-hidden"
            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
          >
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-2 relative">
                  <div className="absolute inset-0 bg-cyan-500 blur-sm opacity-50" />
                </div>
              ) : (
                <button
                  key={index}
                  className="w-full px-5 py-3 text-left text-sm font-bold uppercase text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all flex items-center justify-between group border-l-4 border-transparent hover:border-cyan-500"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                  </div>
                  <span className="text-xs text-cyan-600 group-hover:text-cyan-400 font-mono">
                    [{item.status}]
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
