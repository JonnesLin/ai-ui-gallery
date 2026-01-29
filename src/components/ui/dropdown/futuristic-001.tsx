'use client';

import { useState, useRef, useEffect } from 'react';

export default function FuturisticDropdown() {
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
    { label: 'Neural Interface', icon: '🧬', status: '99%' },
    { label: 'Quantum Core', icon: '⚛️', status: '87%' },
    { label: 'AI Assistant', icon: '🤖', status: '100%' },
    { divider: true },
    { label: 'System Exit', icon: '🔋', status: 'READY' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold uppercase tracking-wider rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all relative overflow-hidden group"
        >
          <span className="relative z-10">INTERFACE</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-80 bg-slate-950/90 backdrop-blur-xl rounded-lg shadow-[0_0_40px_rgba(6,182,212,0.2)] overflow-hidden border border-cyan-500/30">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="relative h-px my-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm" />
                </div>
              ) : (
                <button
                  key={index}
                  className="w-full px-5 py-4 text-left hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all flex items-center justify-between group relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-cyan-100">
                        {item.label}
                      </div>
                      <div className="text-xs text-cyan-500 font-mono mt-0.5">
                        STATUS: {item.status}
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
