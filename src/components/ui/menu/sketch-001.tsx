'use client';

import { useState } from 'react';

export default function SketchMenu() {
  const [activeItem, setActiveItem] = useState('draw');
  const [expandedItems, setExpandedItems] = useState<string[]>(['tools']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-72 h-screen bg-gray-50 p-6 relative" style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.03) 19px, rgba(0,0,0,0.03) 20px)`
    }}>
      <div className="mb-8 border-4 border-black p-4 bg-white transform rotate-1 relative" style={{
        boxShadow: '4px 4px 0 rgba(0,0,0,0.1)'
      }}>
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-gray-700 rounded-full"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-700 rounded-full"></div>
        <h1 className="text-2xl font-bold text-gray-900 relative" style={{
          fontFamily: 'Comic Sans MS, cursive'
        }}>
          Sketch Menu
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
        </h1>
      </div>

      <nav className="space-y-3">
        <button
          onClick={() => setActiveItem('draw')}
          className={`w-full flex items-center gap-3 px-4 py-3 border-3 border-black bg-white text-sm font-bold transition-all transform hover:-translate-y-0.5 ${
            activeItem === 'draw'
              ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1'
              : 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-1'
          }`}
          style={{ fontFamily: 'Comic Sans MS, cursive' }}
        >
          <div className="w-6 h-6 border-2 border-black rounded-sm flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <span>Draw</span>
        </button>

        <div>
          <button
            onClick={() => toggleExpand('tools')}
            className="w-full flex items-center justify-between gap-3 px-4 py-3 border-3 border-black bg-white text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-y-0.5 -rotate-1"
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-black rounded-sm flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <span>Tools</span>
            </div>
            <span className="text-xs">{expandedItems.includes('tools') ? '▼' : '▶'}</span>
          </button>

          {expandedItems.includes('tools') && (
            <div className="ml-6 mt-2 space-y-2 border-l-4 border-dashed border-black pl-3">
              <button
                onClick={() => setActiveItem('pencil')}
                className={`w-full text-left px-3 py-2.5 border-2 border-black bg-white text-xs font-bold transition-all transform hover:-translate-y-0.5 ${
                  activeItem === 'pencil'
                    ? 'shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                    : 'shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                }`}
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                ✏️ Pencil
              </button>
              <button
                onClick={() => setActiveItem('brush')}
                className={`w-full text-left px-3 py-2.5 border-2 border-black bg-white text-xs font-bold transition-all transform hover:-translate-y-0.5 ${
                  activeItem === 'brush'
                    ? 'shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                    : 'shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                }`}
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                🖌️ Brush
              </button>
              <button
                onClick={() => setActiveItem('eraser')}
                className={`w-full text-left px-3 py-2.5 border-2 border-black bg-white text-xs font-bold transition-all transform hover:-translate-y-0.5 ${
                  activeItem === 'eraser'
                    ? 'shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                    : 'shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                }`}
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                🧹 Eraser
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveItem('colors')}
          className={`w-full flex items-center gap-3 px-4 py-3 border-3 border-black bg-white text-sm font-bold transition-all transform hover:-translate-y-0.5 ${
            activeItem === 'colors'
              ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1'
              : 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1'
          }`}
          style={{ fontFamily: 'Comic Sans MS, cursive' }}
        >
          <div className="w-6 h-6 border-2 border-black rounded-sm flex items-center justify-center bg-gradient-to-br from-red-400 via-yellow-400 to-blue-400"></div>
          <span>Colors</span>
        </button>

        <button
          onClick={() => setActiveItem('layers')}
          className={`w-full flex items-center gap-3 px-4 py-3 border-3 border-black bg-white text-sm font-bold transition-all transform hover:-translate-y-0.5 ${
            activeItem === 'layers'
              ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1'
              : 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-1'
          }`}
          style={{ fontFamily: 'Comic Sans MS, cursive' }}
        >
          <div className="w-6 h-6 border-2 border-black rounded-sm flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <span>Layers</span>
        </button>

        <div className="h-0.5 bg-black my-4 border-dashed border-t-2 border-black"></div>

        <button
          onClick={() => setActiveItem('export')}
          className={`w-full flex items-center gap-3 px-4 py-3 border-3 border-black bg-white text-sm font-bold transition-all transform hover:-translate-y-0.5 ${
            activeItem === 'export'
              ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1'
              : 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1'
          }`}
          style={{ fontFamily: 'Comic Sans MS, cursive' }}
        >
          <div className="w-6 h-6 border-2 border-black rounded-sm flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
          <span>Export</span>
        </button>
      </nav>

      <div className="mt-8 border-2 border-black bg-yellow-100 p-3 transform -rotate-1" style={{
        boxShadow: '3px 3px 0 rgba(0,0,0,0.2)'
      }}>
        <p className="text-xs font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          💡 Tip: Double-click to add text!
        </p>
      </div>
    </div>
  );
}
