'use client';

import { useState, useRef, useEffect } from 'react';

export default function DarkDropdown() {
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
    { label: 'New File', icon: '📄', shortcut: '⌘N' },
    { label: 'Open', icon: '📂', shortcut: '⌘O' },
    { label: 'Save', icon: '💾', shortcut: '⌘S' },
    { divider: true },
    { label: 'Export', icon: '📤', shortcut: '⌘E' },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-2.5 bg-zinc-800 text-zinc-100 text-sm font-medium rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all"
        >
          File
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-72 bg-zinc-800 rounded-lg border border-zinc-700 shadow-2xl overflow-hidden">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="h-px bg-zinc-700 my-1.5" />
              ) : (
                <button
                  key={index}
                  className="w-full px-4 py-2.5 text-left text-sm text-zinc-200 hover:bg-zinc-700 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                  </div>
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-400">
                    {item.shortcut}
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
