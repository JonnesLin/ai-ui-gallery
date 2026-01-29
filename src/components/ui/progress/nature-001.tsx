'use client';

import React, { useState, useEffect } from 'react';

export default function NatureProgress() {
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

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circularProgress / 100) * circumference;

  const ecosystems = [
    { label: 'Forest Growth', value: 85, color: 'from-green-700 to-green-500', icon: '🌲' },
    { label: 'Ocean Depth', value: 65, color: 'from-blue-700 to-blue-400', icon: '🌊' },
    { label: 'Mountain Peak', value: 45, color: 'from-stone-600 to-stone-400', icon: '⛰️' },
    { label: 'Desert Heat', value: 90, color: 'from-amber-600 to-yellow-400', icon: '🏜️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-800 mb-2 flex items-center justify-center gap-3">
            <span>🌿</span>
            Nature Progress
            <span>🍃</span>
          </h1>
          <p className="text-green-700">Organic & Earth-Inspired Indicators</p>
        </div>

        {/* Growth Progress - Tree Style */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-green-200">
          <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
            <span>🌱</span>
            Growth Progress
          </h3>
          <div className="relative h-12 bg-gradient-to-r from-amber-100 to-green-100 rounded-full overflow-hidden border-2 border-green-300">
            <div
              className="h-full bg-gradient-to-r from-green-600 via-green-500 to-emerald-400 rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${progress1}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30"></div>
              <div className="absolute inset-0 opacity-30"
                   style={{
                     backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                   }}
              ></div>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl animate-bounce">
              {progress1 > 75 ? '🌳' : progress1 > 50 ? '🌿' : progress1 > 25 ? '🌱' : '🌾'}
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center text-green-700">
            <span className="text-sm font-medium">
              {progress1 > 75 ? 'Mature' : progress1 > 50 ? 'Growing' : progress1 > 25 ? 'Sprouting' : 'Seeding'}
            </span>
            <span className="text-2xl font-bold">{progress1}%</span>
          </div>
        </div>

        {/* Wave Progress - Ocean Style */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-blue-200">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <span>🌊</span>
            Ocean Waves
          </h3>
          <div className="relative h-16 bg-gradient-to-b from-sky-100 to-blue-200 rounded-2xl overflow-hidden border-2 border-blue-300">
            <div
              className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 via-cyan-400 to-blue-300 transition-all duration-500 ease-out"
              style={{ height: `${progress2}%` }}
            >
              <div className="absolute inset-0 opacity-40"
                   style={{
                     background: 'repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.3) 20px, transparent 40px)',
                     animation: 'wave 3s linear infinite',
                   }}
              ></div>
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/40 to-transparent rounded-t-full"
                   style={{ animation: 'wave 2s ease-in-out infinite' }}
              ></div>
            </div>
            <style>{`
              @keyframes wave {
                0%, 100% { transform: translateX(0) translateY(0); }
                50% { transform: translateX(-20px) translateY(-5px); }
              }
            `}</style>
          </div>
          <div className="mt-3 text-right">
            <span className="text-2xl font-bold text-blue-700">{progress2}%</span>
          </div>
        </div>

        {/* Circular Sun Progress */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-amber-200">
          <h3 className="text-2xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
            <span>☀️</span>
            Sun Energy
          </h3>
          <div className="flex justify-center items-center">
            <div className="relative w-56 h-56">
              <svg className="w-full h-full -rotate-90">
                {/* Background Circle */}
                <circle
                  cx="112"
                  cy="112"
                  r={radius}
                  stroke="#fef3c7"
                  strokeWidth="16"
                  fill="none"
                />
                {/* Progress Circle */}
                <circle
                  cx="112"
                  cy="112"
                  r={radius}
                  stroke="url(#sunGradient)"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-500 ease-out"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))' }}
                />
                <defs>
                  <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="50%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#fde047" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl mb-2 animate-pulse">☀️</span>
                <span className="text-3xl font-bold text-amber-600">{circularProgress}%</span>
                <span className="text-sm text-amber-700 mt-1">Energy</span>
              </div>
              {/* Sunrays */}
              <div className="absolute inset-0" style={{ animation: 'rotate 10s linear infinite' }}>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-4 bg-amber-400/60 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                      transform: `rotate(${i * 45}deg) translateY(-90px)`,
                    }}
                  ></div>
                ))}
              </div>
              <style>{`
                @keyframes rotate {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Ecosystem Progress Bars */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-green-200">
          <h3 className="text-2xl font-semibold text-green-800 mb-6 flex items-center gap-2">
            <span>🌍</span>
            Ecosystem Health
          </h3>
          <div className="space-y-5">
            {ecosystems.map((eco, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-700 flex items-center gap-2">
                    <span className="text-2xl">{eco.icon}</span>
                    {eco.label}
                  </span>
                  <span className="text-xl font-bold text-gray-700">{eco.value}%</span>
                </div>
                <div className="h-6 bg-gradient-to-r from-stone-100 to-stone-200 rounded-full overflow-hidden border-2 border-stone-300">
                  <div
                    className={`h-full bg-gradient-to-r ${eco.color} rounded-full transition-all duration-700 ease-out relative`}
                    style={{ width: `${eco.value}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30"></div>
                    <div className="absolute inset-0 animate-pulse bg-white/10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaf Progress */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-emerald-200">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4 flex items-center gap-2">
            <span>🍂</span>
            Seasonal Change
          </h3>
          <div className="space-y-4">
            {[
              { season: 'Spring', value: 95, color: 'from-green-400 to-lime-300', icon: '🌸' },
              { season: 'Summer', value: 75, color: 'from-yellow-400 to-green-400', icon: '🌻' },
              { season: 'Autumn', value: 55, color: 'from-orange-500 to-red-400', icon: '🍁' },
              { season: 'Winter', value: 35, color: 'from-blue-300 to-cyan-200', icon: '❄️' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span>
                    {item.season}
                  </span>
                  <span className="font-bold text-gray-700">{item.value}%</span>
                </div>
                <div className="h-4 bg-stone-200 rounded-full overflow-hidden border border-stone-300">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-700 ease-out relative`}
                    style={{ width: `${item.value}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
