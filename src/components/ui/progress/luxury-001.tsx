'use client';

import React, { useState, useEffect } from 'react';

export default function LuxuryProgress() {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [circularProgress, setCircularProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress1((prev) => (prev >= 100 ? 0 : prev + 1));
      setProgress2((prev) => (prev >= 100 ? 0 : prev + 2));
      setCircularProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const radius = 75;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circularProgress / 100) * circumference;

  const segments = [
    { label: 'Discovery', value: 100, icon: '◆' },
    { label: 'Refinement', value: 75, icon: '◇' },
    { label: 'Excellence', value: 50, icon: '◈' },
    { label: 'Mastery', value: 85, icon: '◉' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-900 to-black p-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 mx-auto mb-6"></div>
          </div>
          <h1 className="text-6xl font-light text-white tracking-widest mb-4">
            LUXURY
          </h1>
          <p className="text-amber-400/80 font-light tracking-[0.3em] text-sm">PROGRESS INDICATORS</p>
        </div>

        {/* Golden Elegant Progress */}
        <div className="bg-gradient-to-br from-zinc-800/50 to-neutral-900/50 backdrop-blur-sm rounded-sm p-10 border border-amber-400/20 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-light text-white tracking-wider">PREMIER LOADING</h3>
            <span className="text-3xl font-light text-amber-400">{progress1}%</span>
          </div>
          <div className="relative h-2 bg-zinc-800 rounded-none overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent animate-pulse"></div>
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 transition-all duration-500 ease-out relative"
              style={{ width: `${progress1}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              <div className="absolute inset-0 shadow-[0_0_20px_rgba(251,191,36,0.5)]"></div>
            </div>
          </div>
          <div className="mt-4 flex justify-between text-xs text-amber-400/60 font-light tracking-widest">
            <span>INITIATING</span>
            <span>PROCESSING</span>
            <span>COMPLETING</span>
          </div>
        </div>

        {/* Diamond Progress */}
        <div className="bg-gradient-to-br from-zinc-800/50 to-neutral-900/50 backdrop-blur-sm rounded-sm p-10 border border-amber-400/20 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-light text-white tracking-wider flex items-center gap-3">
              <span className="text-amber-400">◆</span>
              DIAMOND TIER
            </h3>
            <span className="text-3xl font-light text-amber-400">{progress2}%</span>
          </div>
          <div className="relative h-3 bg-zinc-800 rounded-none overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-800 via-amber-400 to-yellow-200 transition-all duration-500 ease-out relative"
              style={{ width: `${progress2}%` }}
            >
              <div className="absolute inset-0 opacity-50"
                   style={{
                     background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                   }}
              ></div>
              <div className="absolute right-0 top-0 w-1 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            </div>
          </div>
        </div>

        {/* Circular Prestige Progress */}
        <div className="bg-gradient-to-br from-zinc-800/50 to-neutral-900/50 backdrop-blur-sm rounded-sm p-10 border border-amber-400/20 shadow-2xl">
          <h3 className="text-xl font-light text-white tracking-wider mb-8 text-center">PRESTIGE LEVEL</h3>
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64">
              <svg className="w-full h-full -rotate-90">
                {/* Outer Decorative Ring */}
                <circle
                  cx="128"
                  cy="128"
                  r="95"
                  stroke="rgba(251, 191, 36, 0.1)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                />
                {/* Background Circle */}
                <circle
                  cx="128"
                  cy="128"
                  r={radius}
                  stroke="#27272a"
                  strokeWidth="8"
                  fill="none"
                />
                {/* Progress Circle */}
                <circle
                  cx="128"
                  cy="128"
                  r={radius}
                  stroke="url(#luxuryGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="square"
                  className="transition-all duration-500 ease-out"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))' }}
                />
                <defs>
                  <linearGradient id="luxuryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="50%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#fef3c7" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl font-light text-amber-400 mb-2">{circularProgress}</div>
                <div className="text-xs text-amber-400/60 tracking-[0.3em]">PERCENT</div>
                <div className="w-12 h-px bg-amber-400/40 mt-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Segment Luxury Progress */}
        <div className="bg-gradient-to-br from-zinc-800/50 to-neutral-900/50 backdrop-blur-sm rounded-sm p-10 border border-amber-400/20 shadow-2xl">
          <h3 className="text-xl font-light text-white tracking-wider mb-8">EXCELLENCE METRICS</h3>
          <div className="space-y-6">
            {segments.map((segment, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 text-xl">{segment.icon}</span>
                    <span className="text-sm font-light text-white tracking-wider">{segment.label.toUpperCase()}</span>
                  </div>
                  <span className="text-2xl font-light text-amber-400">{segment.value}%</span>
                </div>
                <div className="relative h-1.5 bg-zinc-800 rounded-none overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-700 via-amber-400 to-amber-200 transition-all duration-700 ease-out"
                    style={{ width: `${segment.value}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimalist Luxury Bar */}
        <div className="bg-gradient-to-br from-zinc-800/50 to-neutral-900/50 backdrop-blur-sm rounded-sm p-10 border border-amber-400/20 shadow-2xl">
          <h3 className="text-xl font-light text-white tracking-wider mb-6">REFINED ELEGANCE</h3>
          <div className="space-y-5">
            {[
              { label: 'Gold', value: 88, gradient: 'from-yellow-700 via-amber-400 to-yellow-200' },
              { label: 'Platinum', value: 92, gradient: 'from-zinc-400 via-slate-200 to-zinc-300' },
              { label: 'Rose Gold', value: 76, gradient: 'from-rose-700 via-rose-400 to-rose-200' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-light text-white/80 tracking-widest">{item.label.toUpperCase()}</span>
                  <span className="text-lg font-light text-white">{item.value}%</span>
                </div>
                <div className="h-1 bg-zinc-800 rounded-none overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.gradient} transition-all duration-700 ease-out`}
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
