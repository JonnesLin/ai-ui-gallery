'use client';

import React, { useState, useEffect } from 'react';

export default function ThreeDProgress() {
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

  const dimensions = [
    { label: 'Depth Layer', value: 92, color: 'from-blue-600 to-blue-400' },
    { label: 'Height Layer', value: 78, color: 'from-purple-600 to-purple-400' },
    { label: 'Width Layer', value: 85, color: 'from-pink-600 to-pink-400' },
    { label: 'Time Layer', value: 67, color: 'from-orange-600 to-orange-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center mb-16 perspective-1000">
          <h1 className="text-7xl font-black text-white mb-4 transform hover:scale-110 transition-transform duration-300"
              style={{
                textShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 20px 60px rgba(139, 92, 246, 0.3)',
                transform: 'perspective(500px) rotateX(10deg)',
              }}
          >
            3D PROGRESS
          </h1>
          <p className="text-purple-300 tracking-widest text-sm">DIMENSIONAL LOADING INDICATORS</p>
        </div>

        {/* Extruded Progress Bar */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-10 shadow-2xl"
             style={{
               boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
             }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Extruded Bar</h3>
            <span className="text-5xl font-black text-white">{progress1}%</span>
          </div>
          <div className="relative h-16 perspective-500">
            <div className="absolute inset-0 bg-slate-700 rounded-lg"
                 style={{
                   transform: 'translateY(8px)',
                   boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                 }}
            ></div>
            <div className="relative h-full bg-slate-900 rounded-lg overflow-hidden"
                 style={{
                   boxShadow: 'inset 0 -4px 8px rgba(0, 0, 0, 0.3)',
                 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-700/50 to-transparent"></div>
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg transition-all duration-300 ease-out relative"
                style={{
                  width: `${progress1}%`,
                  boxShadow: '0 0 30px rgba(139, 92, 246, 0.6), inset 0 -4px 8px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Layered Depth Progress */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-10 shadow-2xl"
             style={{
               boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
             }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Layered Depth</h3>
            <span className="text-5xl font-black text-white">{progress2}%</span>
          </div>
          <div className="relative h-20 perspective-1000">
            {[0, 1, 2].map((layer) => (
              <div
                key={layer}
                className="absolute inset-0 rounded-lg overflow-hidden"
                style={{
                  transform: `translateY(${layer * 6}px) translateZ(${layer * -20}px)`,
                  opacity: 1 - layer * 0.2,
                  zIndex: 3 - layer,
                }}
              >
                <div className="h-full bg-slate-900 rounded-lg">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-lg transition-all duration-300 ease-out"
                    style={{
                      width: `${Math.max(0, progress2 - layer * 5)}%`,
                      boxShadow: `0 ${10 - layer * 3}px ${20 - layer * 5}px rgba(59, 130, 246, ${0.5 - layer * 0.1})`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Circular 3D Progress */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-10 shadow-2xl"
             style={{
               boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
             }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Spherical Progress</h3>
          <div className="flex justify-center items-center">
            <div className="relative w-72 h-72 perspective-1000">
              {/* Shadow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/40 rounded-full blur-xl"></div>

              {/* Outer Ring */}
              <div className="absolute inset-8 rounded-full border-2 border-purple-500/30"
                   style={{
                     transform: 'rotateX(60deg)',
                     boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
                   }}
              ></div>

              <svg className="w-full h-full -rotate-90">
                <defs>
                  <linearGradient id="3dGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <filter id="shadow3d">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.5" />
                  </filter>
                </defs>
                <circle
                  cx="144"
                  cy="144"
                  r={radius}
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="16"
                  fill="none"
                />
                <circle
                  cx="144"
                  cy="144"
                  r={radius}
                  stroke="url(#3dGradient)"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-300 ease-out"
                  filter="url(#shadow3d)"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))',
                  }}
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center"
                   style={{
                     transform: 'translateZ(50px)',
                   }}
              >
                <span className="text-7xl font-black text-white mb-2"
                      style={{
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                      }}
                >
                  {circularProgress}
                </span>
                <span className="text-sm text-purple-300 tracking-wider">PERCENT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Dimensional Bars */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-10 shadow-2xl"
             style={{
               boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
             }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Dimensional Layers</h3>
          <div className="space-y-8">
            {dimensions.map((dim, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-white">{dim.label}</span>
                  <span className="text-2xl font-black text-white">{dim.value}%</span>
                </div>
                <div className="relative h-10 perspective-500">
                  <div className="absolute inset-0 bg-slate-700 rounded-lg"
                       style={{
                         transform: 'translateY(4px)',
                         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                       }}
                  ></div>
                  <div className="relative h-full bg-slate-900 rounded-lg overflow-hidden"
                       style={{
                         boxShadow: 'inset 0 -2px 4px rgba(0, 0, 0, 0.3)',
                       }}
                  >
                    <div
                      className={`h-full bg-gradient-to-r ${dim.color} rounded-lg transition-all duration-700 ease-out relative`}
                      style={{
                        width: `${dim.value}%`,
                        boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cubic Progress */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-10 shadow-2xl"
             style={{
               boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
             }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Cubic Segments</h3>
          <div className="flex gap-3 perspective-1000">
            {[...Array(10)].map((_, index) => {
              const isActive = index < Math.floor(progress1 / 10);
              return (
                <div key={index} className="flex-1 perspective-500">
                  <div
                    className="h-20 rounded transition-all duration-300 relative"
                    style={{
                      transform: isActive ? 'rotateY(0deg) translateZ(0)' : 'rotateY(-15deg) translateZ(-10px)',
                      backgroundColor: isActive ? '#8b5cf6' : '#1e293b',
                      boxShadow: isActive
                        ? '0 10px 30px rgba(139, 92, 246, 0.5), inset 0 -4px 8px rgba(0, 0, 0, 0.3)'
                        : '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent rounded"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded"></div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <span className="text-4xl font-black text-white"
                  style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
            >
              {progress1}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
