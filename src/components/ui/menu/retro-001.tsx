'use client';

import { useState } from 'react';

export default function RetroMenu() {
  const [activeItem, setActiveItem] = useState('mailbox');
  const [expandedItems, setExpandedItems] = useState<string[]>(['folders']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-72 h-screen bg-amber-50 border-4 border-amber-900 p-5" style={{
      fontFamily: 'Courier, monospace'
    }}>
      <div className="mb-6 border-2 border-amber-900 bg-amber-100 p-3 shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]">
        <h1 className="text-xl font-bold text-amber-900">RETRO MENU</h1>
        <div className="h-0.5 bg-amber-900 mt-1 mb-1"></div>
        <p className="text-xs text-amber-700">Classic Computing</p>
      </div>

      <nav className="space-y-2">
        <button
          onClick={() => setActiveItem('mailbox')}
          className={`w-full flex items-center gap-3 px-4 py-3 border-2 font-bold text-sm transition-all ${
            activeItem === 'mailbox'
              ? 'bg-amber-900 text-amber-50 border-amber-900 shadow-[3px_3px_0px_0px_rgba(120,53,15,1)]'
              : 'bg-amber-100 text-amber-900 border-amber-900 hover:shadow-[2px_2px_0px_0px_rgba(120,53,15,1)]'
          }`}
        >
          <span className="text-base">&#9993;</span>
          <span>MAILBOX</span>
        </button>

        <div>
          <button
            onClick={() => toggleExpand('folders')}
            className="w-full flex items-center justify-between gap-3 px-4 py-3 border-2 bg-amber-100 text-amber-900 border-amber-900 font-bold text-sm hover:shadow-[2px_2px_0px_0px_rgba(120,53,15,1)] transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-base">&#128193;</span>
              <span>FOLDERS</span>
            </div>
            <span className="text-xs">{expandedItems.includes('folders') ? '[-]' : '[+]'}</span>
          </button>

          {expandedItems.includes('folders') && (
            <div className="ml-6 mt-2 space-y-1.5 border-l-2 border-amber-900 pl-3">
              <button
                onClick={() => setActiveItem('inbox')}
                className={`w-full text-left px-3 py-2 border border-amber-900 font-bold text-xs transition-all ${
                  activeItem === 'inbox'
                    ? 'bg-amber-800 text-amber-50'
                    : 'bg-amber-50 text-amber-900 hover:bg-amber-200'
                }`}
              >
                &gt; INBOX
              </button>
              <button
                onClick={() => setActiveItem('sent')}
                className={`w-full text-left px-3 py-2 border border-amber-900 font-bold text-xs transition-all ${
                  activeItem === 'sent'
                    ? 'bg-amber-800 text-amber-50'
                    : 'bg-amber-50 text-amber-900 hover:bg-amber-200'
                }`}
              >
                &gt; SENT
              </button>
              <button
                onClick={() => setActiveItem('drafts')}
                className={`w-full text-left px-3 py-2 border border-amber-900 font-bold text-xs transition-all ${
                  activeItem === 'drafts'
                    ? 'bg-amber-800 text-amber-50'
                    : 'bg-amber-50 text-amber-900 hover:bg-amber-200'
                }`}
              >
                &gt; DRAFTS
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveItem('contacts')}
          className={`w-full flex items-center gap-3 px-4 py-3 border-2 font-bold text-sm transition-all ${
            activeItem === 'contacts'
              ? 'bg-amber-900 text-amber-50 border-amber-900 shadow-[3px_3px_0px_0px_rgba(120,53,15,1)]'
              : 'bg-amber-100 text-amber-900 border-amber-900 hover:shadow-[2px_2px_0px_0px_rgba(120,53,15,1)]'
          }`}
        >
          <span className="text-base">&#128101;</span>
          <span>CONTACTS</span>
        </button>

        <button
          onClick={() => setActiveItem('calendar')}
          className={`w-full flex items-center gap-3 px-4 py-3 border-2 font-bold text-sm transition-all ${
            activeItem === 'calendar'
              ? 'bg-amber-900 text-amber-50 border-amber-900 shadow-[3px_3px_0px_0px_rgba(120,53,15,1)]'
              : 'bg-amber-100 text-amber-900 border-amber-900 hover:shadow-[2px_2px_0px_0px_rgba(120,53,15,1)]'
          }`}
        >
          <span className="text-base">&#128197;</span>
          <span>CALENDAR</span>
        </button>

        <div className="border-t-2 border-dashed border-amber-900 my-4"></div>

        <button
          onClick={() => setActiveItem('settings')}
          className={`w-full flex items-center gap-3 px-4 py-3 border-2 font-bold text-sm transition-all ${
            activeItem === 'settings'
              ? 'bg-amber-900 text-amber-50 border-amber-900 shadow-[3px_3px_0px_0px_rgba(120,53,15,1)]'
              : 'bg-amber-100 text-amber-900 border-amber-900 hover:shadow-[2px_2px_0px_0px_rgba(120,53,15,1)]'
          }`}
        >
          <span className="text-base">&#9881;</span>
          <span>SETTINGS</span>
        </button>
      </nav>

      <div className="mt-8 border-2 border-amber-900 bg-amber-100 p-2">
        <p className="text-xs text-amber-700 text-center font-bold">v1.0.0</p>
      </div>
    </div>
  );
}
