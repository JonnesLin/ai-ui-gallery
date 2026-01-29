'use client';

import { useState } from 'react';

export default function NeonMenu() {
  const [activeItem, setActiveItem] = useState('arcade');
  const [expandedItems, setExpandedItems] = useState<string[]>(['games']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-80 h-screen bg-gray-950 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-blue-900/20"></div>

      <div className="relative z-10">
        <div className="mb-8 border-2 border-pink-500 bg-black p-5 relative" style={{
          boxShadow: '0 0 20px rgba(236, 72, 153, 0.6), inset 0 0 20px rgba(236, 72, 153, 0.1)'
        }}>
          <h1 className="text-3xl font-black text-pink-500 tracking-wider" style={{
            textShadow: '0 0 10px rgba(236, 72, 153, 0.8), 0 0 20px rgba(236, 72, 153, 0.6), 0 0 30px rgba(236, 72, 153, 0.4)'
          }}>
            NEON
          </h1>
          <div className="h-px bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mt-2" style={{
            boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)'
          }}></div>
          <p className="text-xs text-cyan-400 mt-2 tracking-widest" style={{
            textShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
          }}>
            ELECTRIC DREAMS
          </p>
        </div>

        <nav className="space-y-3">
          <button
            onClick={() => setActiveItem('arcade')}
            className={`w-full flex items-center gap-3 px-5 py-4 border-2 text-sm font-bold transition-all ${
              activeItem === 'arcade'
                ? 'border-pink-500 bg-pink-500/10 text-pink-400'
                : 'border-purple-700/50 bg-black text-purple-400 hover:border-purple-500'
            }`}
            style={activeItem === 'arcade' ? {
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.6), inset 0 0 10px rgba(236, 72, 153, 0.1)',
              textShadow: '0 0 10px rgba(236, 72, 153, 0.8)'
            } : {}}
          >
            <div className={`w-6 h-6 border-2 rounded ${activeItem === 'arcade' ? 'border-pink-400 bg-pink-500' : 'border-purple-500'}`} style={activeItem === 'arcade' ? {
              boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)'
            } : {}}></div>
            <span className="uppercase tracking-wider">Arcade</span>
          </button>

          <div>
            <button
              onClick={() => toggleExpand('games')}
              className="w-full flex items-center justify-between gap-3 px-5 py-4 border-2 border-purple-700/50 bg-black text-purple-400 hover:border-purple-500 text-sm font-bold transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-purple-500 rounded"></div>
                <span className="uppercase tracking-wider">Games</span>
              </div>
              <span className={`text-cyan-400 transition-transform ${expandedItems.includes('games') ? 'rotate-180' : ''}`} style={{
                textShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
              }}>▼</span>
            </button>

            {expandedItems.includes('games') && (
              <div className="ml-6 mt-2 space-y-2 border-l-2 border-purple-700/50 pl-4">
                <button
                  onClick={() => setActiveItem('retro')}
                  className={`w-full text-left px-4 py-3 border text-xs font-bold uppercase tracking-widest transition-all ${
                    activeItem === 'retro'
                      ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                      : 'border-blue-800/50 bg-black text-blue-400 hover:border-blue-600'
                  }`}
                  style={activeItem === 'retro' ? {
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)',
                    textShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
                  } : {}}
                >
                  Retro
                </button>
                <button
                  onClick={() => setActiveItem('modern')}
                  className={`w-full text-left px-4 py-3 border text-xs font-bold uppercase tracking-widest transition-all ${
                    activeItem === 'modern'
                      ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                      : 'border-blue-800/50 bg-black text-blue-400 hover:border-blue-600'
                  }`}
                  style={activeItem === 'modern' ? {
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)',
                    textShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
                  } : {}}
                >
                  Modern
                </button>
                <button
                  onClick={() => setActiveItem('vr')}
                  className={`w-full text-left px-4 py-3 border text-xs font-bold uppercase tracking-widest transition-all ${
                    activeItem === 'vr'
                      ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                      : 'border-blue-800/50 bg-black text-blue-400 hover:border-blue-600'
                  }`}
                  style={activeItem === 'vr' ? {
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)',
                    textShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
                  } : {}}
                >
                  VR Games
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setActiveItem('highscore')}
            className={`w-full flex items-center gap-3 px-5 py-4 border-2 text-sm font-bold transition-all ${
              activeItem === 'highscore'
                ? 'border-pink-500 bg-pink-500/10 text-pink-400'
                : 'border-purple-700/50 bg-black text-purple-400 hover:border-purple-500'
            }`}
            style={activeItem === 'highscore' ? {
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.6), inset 0 0 10px rgba(236, 72, 153, 0.1)',
              textShadow: '0 0 10px rgba(236, 72, 153, 0.8)'
            } : {}}
          >
            <div className={`w-6 h-6 border-2 rounded ${activeItem === 'highscore' ? 'border-pink-400 bg-pink-500' : 'border-purple-500'}`} style={activeItem === 'highscore' ? {
              boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)'
            } : {}}></div>
            <span className="uppercase tracking-wider">High Score</span>
            <span className="ml-auto text-xs text-yellow-400" style={{
              textShadow: '0 0 10px rgba(250, 204, 21, 0.8)'
            }}>999,999</span>
          </button>

          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4" style={{
            boxShadow: '0 0 10px rgba(168, 85, 247, 0.6)'
          }}></div>

          <button
            onClick={() => setActiveItem('profile')}
            className={`w-full flex items-center gap-3 px-5 py-4 border-2 text-sm font-bold transition-all ${
              activeItem === 'profile'
                ? 'border-pink-500 bg-pink-500/10 text-pink-400'
                : 'border-purple-700/50 bg-black text-purple-400 hover:border-purple-500'
            }`}
            style={activeItem === 'profile' ? {
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.6), inset 0 0 10px rgba(236, 72, 153, 0.1)',
              textShadow: '0 0 10px rgba(236, 72, 153, 0.8)'
            } : {}}
          >
            <div className={`w-6 h-6 border-2 rounded ${activeItem === 'profile' ? 'border-pink-400 bg-pink-500' : 'border-purple-500'}`} style={activeItem === 'profile' ? {
              boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)'
            } : {}}></div>
            <span className="uppercase tracking-wider">Profile</span>
          </button>
        </nav>

        <div className="mt-8 border-2 border-cyan-500 bg-black p-4" style={{
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.6), inset 0 0 10px rgba(34, 211, 238, 0.1)'
        }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)'
            }}></div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider" style={{
              textShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
            }}>
              Online
            </span>
          </div>
          <div className="text-xs text-purple-400 font-mono">CREDITS: ∞</div>
        </div>
      </div>
    </div>
  );
}
