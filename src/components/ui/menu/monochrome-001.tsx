'use client';

import { useState } from 'react';

export default function MonochromeMenu() {
  const [activeItem, setActiveItem] = useState('workspace');
  const [expandedItems, setExpandedItems] = useState<string[]>(['projects']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-72 h-screen bg-black border-r-2 border-white p-6">
      <div className="mb-8 border-2 border-white p-4">
        <h1 className="text-2xl font-bold text-white tracking-tight">MONO</h1>
        <div className="h-px bg-white mt-2"></div>
        <p className="text-xs text-white mt-2 tracking-widest">BLACK & WHITE</p>
      </div>

      <nav className="space-y-1">
        <button
          onClick={() => setActiveItem('workspace')}
          className={`w-full flex items-center gap-3 px-4 py-3.5 border-2 text-sm font-bold transition-all ${
            activeItem === 'workspace'
              ? 'bg-white text-black border-white'
              : 'bg-black text-white border-white hover:bg-white hover:text-black'
          }`}
        >
          <div className={`w-5 h-5 border-2 ${activeItem === 'workspace' ? 'border-black bg-black' : 'border-white'}`}></div>
          <span className="uppercase tracking-wide">Workspace</span>
        </button>

        <div>
          <button
            onClick={() => toggleExpand('projects')}
            className="w-full flex items-center justify-between gap-3 px-4 py-3.5 border-2 bg-black text-white border-white hover:bg-white hover:text-black text-sm font-bold transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-white"></div>
              <span className="uppercase tracking-wide">Projects</span>
            </div>
            <span className="text-xs">{expandedItems.includes('projects') ? '−' : '+'}</span>
          </button>

          {expandedItems.includes('projects') && (
            <div className="border-l-2 border-white ml-6 mt-1">
              <button
                onClick={() => setActiveItem('active')}
                className={`w-full text-left px-4 py-3 border-b border-white text-xs font-bold uppercase tracking-wider transition-all ${
                  activeItem === 'active'
                    ? 'bg-white text-black'
                    : 'bg-black text-white hover:bg-white hover:text-black'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setActiveItem('archive')}
                className={`w-full text-left px-4 py-3 border-b border-white text-xs font-bold uppercase tracking-wider transition-all ${
                  activeItem === 'archive'
                    ? 'bg-white text-black'
                    : 'bg-black text-white hover:bg-white hover:text-black'
                }`}
              >
                Archive
              </button>
              <button
                onClick={() => setActiveItem('templates')}
                className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                  activeItem === 'templates'
                    ? 'bg-white text-black'
                    : 'bg-black text-white hover:bg-white hover:text-black'
                }`}
              >
                Templates
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveItem('tasks')}
          className={`w-full flex items-center gap-3 px-4 py-3.5 border-2 text-sm font-bold transition-all ${
            activeItem === 'tasks'
              ? 'bg-white text-black border-white'
              : 'bg-black text-white border-white hover:bg-white hover:text-black'
          }`}
        >
          <div className={`w-5 h-5 border-2 ${activeItem === 'tasks' ? 'border-black bg-black' : 'border-white'}`}></div>
          <span className="uppercase tracking-wide">Tasks</span>
        </button>

        <button
          onClick={() => setActiveItem('calendar')}
          className={`w-full flex items-center gap-3 px-4 py-3.5 border-2 text-sm font-bold transition-all ${
            activeItem === 'calendar'
              ? 'bg-white text-black border-white'
              : 'bg-black text-white border-white hover:bg-white hover:text-black'
          }`}
        >
          <div className={`w-5 h-5 border-2 ${activeItem === 'calendar' ? 'border-black bg-black' : 'border-white'}`}></div>
          <span className="uppercase tracking-wide">Calendar</span>
        </button>

        <div className="h-px bg-white my-4"></div>

        <div className="space-y-1">
          <div className="px-4 py-2 border-b-2 border-white">
            <p className="text-xs font-bold text-white uppercase tracking-widest">System</p>
          </div>

          <button
            onClick={() => setActiveItem('team')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 border-2 text-sm font-bold transition-all ${
              activeItem === 'team'
                ? 'bg-white text-black border-white'
                : 'bg-black text-white border-white hover:bg-white hover:text-black'
            }`}
          >
            <div className={`w-5 h-5 border-2 ${activeItem === 'team' ? 'border-black bg-black' : 'border-white'}`}></div>
            <span className="uppercase tracking-wide">Team</span>
          </button>

          <button
            onClick={() => setActiveItem('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 border-2 text-sm font-bold transition-all ${
              activeItem === 'settings'
                ? 'bg-white text-black border-white'
                : 'bg-black text-white border-white hover:bg-white hover:text-black'
            }`}
          >
            <div className={`w-5 h-5 border-2 ${activeItem === 'settings' ? 'border-black bg-black' : 'border-white'}`}></div>
            <span className="uppercase tracking-wide">Settings</span>
          </button>
        </div>
      </nav>

      <div className="mt-8 border-2 border-white p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-white"></div>
          <span className="text-xs font-bold text-white uppercase tracking-wider">Status</span>
        </div>
        <div className="text-xs text-white font-mono">ACTIVE</div>
      </div>
    </div>
  );
}
