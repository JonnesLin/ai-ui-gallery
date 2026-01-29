'use client';

import { useState } from 'react';

export default function BrutalistMenu() {
  const [activeItem, setActiveItem] = useState('home');
  const [expandedItems, setExpandedItems] = useState<string[]>(['resources']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-80 h-screen bg-yellow-400 border-8 border-black p-6">
      <div className="mb-8 border-4 border-black bg-white p-4 transform -rotate-1">
        <h1 className="text-3xl font-black text-black uppercase tracking-tight">MENU</h1>
      </div>

      <nav className="space-y-3">
        <button
          onClick={() => setActiveItem('home')}
          className={`w-full flex items-center gap-3 px-4 py-4 border-4 border-black font-black uppercase text-sm transition-all transform hover:translate-x-1 hover:-translate-y-1 ${
            activeItem === 'home'
              ? 'bg-black text-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              : 'bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
          }`}
        >
          <div className="w-6 h-6 border-2 border-current flex items-center justify-center">
            <div className="w-2 h-2 bg-current"></div>
          </div>
          <span>HOME</span>
        </button>

        <div>
          <button
            onClick={() => toggleExpand('resources')}
            className="w-full flex items-center justify-between gap-3 px-4 py-4 border-4 border-black bg-white text-black font-black uppercase text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:translate-x-1 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-current">
                <div className="grid grid-cols-2 gap-0.5 p-0.5 h-full">
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                </div>
              </div>
              <span>RESOURCES</span>
            </div>
            <div className={`w-5 h-5 border-2 border-black flex items-center justify-center transition-transform ${expandedItems.includes('resources') ? 'rotate-180' : ''}`}>
              <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-black"></div>
            </div>
          </button>

          {expandedItems.includes('resources') && (
            <div className="ml-6 mt-2 space-y-2 border-l-4 border-black pl-3">
              <button
                onClick={() => setActiveItem('docs')}
                className={`w-full text-left px-4 py-3 border-3 border-black font-bold uppercase text-xs transition-all ${
                  activeItem === 'docs'
                    ? 'bg-black text-yellow-400'
                    : 'bg-white text-black hover:bg-yellow-200'
                }`}
              >
                DOCS
              </button>
              <button
                onClick={() => setActiveItem('guides')}
                className={`w-full text-left px-4 py-3 border-3 border-black font-bold uppercase text-xs transition-all ${
                  activeItem === 'guides'
                    ? 'bg-black text-yellow-400'
                    : 'bg-white text-black hover:bg-yellow-200'
                }`}
              >
                GUIDES
              </button>
              <button
                onClick={() => setActiveItem('tutorials')}
                className={`w-full text-left px-4 py-3 border-3 border-black font-bold uppercase text-xs transition-all ${
                  activeItem === 'tutorials'
                    ? 'bg-black text-yellow-400'
                    : 'bg-white text-black hover:bg-yellow-200'
                }`}
              >
                TUTORIALS
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveItem('about')}
          className={`w-full flex items-center gap-3 px-4 py-4 border-4 border-black font-black uppercase text-sm transition-all transform hover:translate-x-1 hover:-translate-y-1 ${
            activeItem === 'about'
              ? 'bg-black text-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              : 'bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
          }`}
        >
          <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center">
            <span className="text-xs">i</span>
          </div>
          <span>ABOUT</span>
        </button>

        <div className="h-1 bg-black my-4"></div>

        <button
          onClick={() => setActiveItem('contact')}
          className={`w-full flex items-center gap-3 px-4 py-4 border-4 border-black font-black uppercase text-sm transition-all transform hover:translate-x-1 hover:-translate-y-1 ${
            activeItem === 'contact'
              ? 'bg-black text-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              : 'bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
          }`}
        >
          <div className="w-6 h-6 border-2 border-current flex items-center justify-center">
            <div className="w-1 h-3 bg-current"></div>
          </div>
          <span>CONTACT</span>
        </button>
      </nav>
    </div>
  );
}
