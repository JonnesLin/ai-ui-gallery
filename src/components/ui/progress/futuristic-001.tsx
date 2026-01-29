'use client';

import React, { useState, useEffect } from 'react';

export default function FuturisticProgress() {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [circularProgress, setCircularProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress1((prev) => (prev >= 100 ? 0 : prev + 1));
      setProgress2((prev) => (prev >= 100 ? 0 : prev + 2));
      setCircularProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const radius = 75;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circularProgress / 100) * circumference;

  const systems = [
    { label: 'QUANTUM CORE', value: 92, status: 'OPTIMAL' },
    { label: 'NEURAL LINK', value: 78, status: 'STABLE' },
    { label: 'POWER GRID', value: 85, status: 'ACTIVE' },
    { label: 'SHIELD ARRAY', value: 67, status: 'CHARGING' },
  ];

  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0"
             style={{
               backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
               backgroundSize: '50px 50px',
               animation: 'grid-move 20s linear infinite',
             }}
        ></div>
      </div>
      <style>{`
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes scan {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.5); }
          50% { box-shadow: 0 0 40px rgba(0, 255, 255, 1); }
        }
        @keyframes data-flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          <h1 className="text-6xl font-black text-cyan-400 tracking-wider mb-4 font-mono">
            FUTURISTIC
          </h1>
          <p className="text-cyan-300/70 font-mono tracking-widest text-sm">ADVANCED PROGRESS SYSTEMS</p>
        </div>

        {/* Holographic Progress */}
        <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 backdrop-blur-sm rounded-none p-8 border border-cyan-400/30 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
               style={{ animation: 'scan 3s ease-in-out infinite' }}
          ></div>
          <div className="flex items-center justify-between mb-6 relative z-10">
            <h3 className="text-xl font-bold text-cyan-400 tracking-wider font-mono flex items-center gap-3">
              <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
              HOLOGRAPHIC SCAN
            </h3>
            <span className="text-4xl font-black text-cyan-400 font-mono">{progress1}%</span>
          </div>
          <div className="relative h-4 bg-cyan-950/50 rounded-none overflow-hidden border border-cyan-400/50">
            <div
              className="h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-blue-400 transition-all duration-300 ease-out relative"
              style={{ width: `${progress1}%`, animation: 'pulse-glow 2s ease-in-out infinite' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
              <div className="absolute inset-0 opacity-50"
                   style={{
                     background: 'repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.2) 2px, transparent 4px)',
                   }}
              ></div>
            </div>
          </div>
          <div className="mt-4 flex justify-between text-xs text-cyan-400/70 font-mono">
            <span>[INIT]</span>
            <span>[PROCESSING]</span>
            <span>[COMPLETE]</span>
          </div>
        </div>

        {/* Data Stream Progress */}
        <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 backdrop-blur-sm rounded-none p-8 border border-cyan-400/30 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-cyan-400 tracking-wider font-mono">DATA STREAM</h3>
            <span className="text-4xl font-black text-cyan-400 font-mono">{progress2}%</span>
          </div>
          <div className="relative h-6 bg-cyan-950/50 rounded-none overflow-hidden border border-cyan-400/50">
            <div
              className="h-full transition-all duration-300 ease-out relative"
              style={{
                width: `${progress2}%`,
                background: 'linear-gradient(90deg, #0891b2, #06b6d4, #22d3ee, #67e8f9)',
                backgroundSize: '200% 100%',
                animation: 'data-flow 2s linear infinite',
              }}
            >
              <div className="absolute inset-0"
                   style={{
                     background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                   }}
              ></div>
              <div className="absolute right-0 top-0 w-1 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
            </div>
          </div>
        </div>

        {/* Circular Quantum Progress */}
        <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 backdrop-blur-sm rounded-none p-8 border border-cyan-400/30 shadow-2xl">
          <h3 className="text-xl font-bold text-cyan-400 tracking-wider font-mono mb-8 text-center">QUANTUM PROCESSING</h3>
          <div className="flex justify-center items-center">
            <div className="relative w-72 h-72">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
              <div className="absolute inset-4 border border-cyan-400/10 rounded-full animate-spin" style={{ animationDuration: '7s', animationDirection: 'reverse' }}></div>

              <svg className="w-full h-full -rotate-90">
                {/* Background Circle */}
                <circle
                  cx="144"
                  cy="144"
                  r={radius}
                  stroke="rgba(6, 182, 212, 0.2)"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Progress Circle */}
                <circle
                  cx="144"
                  cy="144"
                  r={radius}
                  stroke="url(#futuristicGradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-300 ease-out"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))' }}
                />
                <defs>
                  <linearGradient id="futuristicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#67e8f9" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-6xl font-black text-cyan-400 font-mono mb-2">{circularProgress}</div>
                <div className="text-xs text-cyan-400/70 tracking-[0.3em] font-mono">PERCENT</div>
                <div className="w-16 h-px bg-cyan-400/40 mt-4"></div>
                <div className="text-xs text-cyan-400/50 mt-2 font-mono">ACTIVE</div>
              </div>
            </div>
          </div>
        </div>

        {/* System Status Bars */}
        <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 backdrop-blur-sm rounded-none p-8 border border-cyan-400/30 shadow-2xl">
          <h3 className="text-xl font-bold text-cyan-400 tracking-wider font-mono mb-8">SYSTEM STATUS</h3>
          <div className="space-y-6">
            {systems.map((system, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-cyan-400 font-mono tracking-wider">{system.label}</span>
                    <span className="text-xs text-cyan-400/60 font-mono">[{system.status}]</span>
                  </div>
                  <span className="text-2xl font-black text-cyan-400 font-mono">{system.value}%</span>
                </div>
                <div className="relative h-3 bg-cyan-950/50 rounded-none overflow-hidden border border-cyan-400/30">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 transition-all duration-700 ease-out relative"
                    style={{ width: `${system.value}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    <div className="absolute inset-0"
                         style={{
                           background: 'repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.1) 2px, transparent 4px)',
                         }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Layer Progress */}
        <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 backdrop-blur-sm rounded-none p-8 border border-cyan-400/30 shadow-2xl">
          <h3 className="text-xl font-bold text-cyan-400 tracking-wider font-mono mb-6">MULTI-LAYER SCAN</h3>
          <div className="space-y-4">
            {[
              { layer: 'LAYER 01', value: 100, color: 'from-cyan-500 to-cyan-400' },
              { layer: 'LAYER 02', value: 85, color: 'from-blue-500 to-cyan-400' },
              { layer: 'LAYER 03', value: 60, color: 'from-blue-600 to-blue-400' },
              { layer: 'LAYER 04', value: 40, color: 'from-indigo-600 to-blue-500' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-cyan-400 font-mono tracking-wider">{item.layer}</span>
                  <span className="text-lg font-black text-cyan-400 font-mono">{item.value}%</span>
                </div>
                <div className="h-2 bg-cyan-950/50 rounded-none overflow-hidden border border-cyan-400/30">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} transition-all duration-700 ease-out`}
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
