'use client';

import React, { useState, useEffect } from 'react';

export default function NeonProgress() {
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

  const channels = [
    { label: 'PINK CHANNEL', value: 88, color: 'rgb(236, 72, 153)', shadow: '0 0 20px rgb(236, 72, 153)' },
    { label: 'CYAN CHANNEL', value: 72, color: 'rgb(34, 211, 238)', shadow: '0 0 20px rgb(34, 211, 238)' },
    { label: 'LIME CHANNEL', value: 95, color: 'rgb(163, 230, 53)', shadow: '0 0 20px rgb(163, 230, 53)' },
    { label: 'PURPLE CHANNEL', value: 65, color: 'rgb(168, 85, 247)', shadow: '0 0 20px rgb(168, 85, 247)' },
  ];

  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0"
             style={{
               backgroundImage: 'linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)',
               backgroundSize: '40px 40px',
             }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-lime-400 mb-4"
              style={{
                textShadow: '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(34, 211, 238, 0.5)',
              }}
          >
            NEON
          </h1>
          <p className="text-cyan-400 tracking-[0.3em] text-sm font-bold"
             style={{ textShadow: '0 0 10px rgb(34, 211, 238)' }}
          >
            PROGRESS INDICATORS
          </p>
        </div>

        {/* Pink Neon Progress */}
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 border-2 border-pink-500 rounded-lg"
             style={{ boxShadow: '0 0 30px rgba(236, 72, 153, 0.3)' }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-pink-500 tracking-wider"
                style={{ textShadow: '0 0 15px rgb(236, 72, 153)' }}
            >
              NEON PINK
            </h3>
            <span className="text-5xl font-black text-pink-400"
                  style={{ textShadow: '0 0 20px rgb(236, 72, 153)' }}
            >
              {progress1}%
            </span>
          </div>
          <div className="relative h-6 bg-gray-950 rounded-full overflow-hidden border-2 border-pink-500"
               style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.8)' }}
          >
            <div
              className="h-full bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 rounded-full transition-all duration-300 ease-out relative"
              style={{
                width: `${progress1}%`,
                boxShadow: '0 0 30px rgb(236, 72, 153)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Cyan Neon Progress */}
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 border-2 border-cyan-400 rounded-lg"
             style={{ boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)' }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-cyan-400 tracking-wider"
                style={{ textShadow: '0 0 15px rgb(34, 211, 238)' }}
            >
              NEON CYAN
            </h3>
            <span className="text-5xl font-black text-cyan-400"
                  style={{ textShadow: '0 0 20px rgb(34, 211, 238)' }}
            >
              {progress2}%
            </span>
          </div>
          <div className="relative h-8 bg-gray-950 rounded-full overflow-hidden border-2 border-cyan-400"
               style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.8)' }}
          >
            <div
              className="h-full rounded-full transition-all duration-300 ease-out relative"
              style={{
                width: `${progress2}%`,
                background: 'linear-gradient(90deg, rgb(6, 182, 212), rgb(34, 211, 238), rgb(103, 232, 249))',
                boxShadow: '0 0 40px rgb(34, 211, 238)',
              }}
            >
              <div className="absolute inset-0 opacity-60"
                   style={{
                     background: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)',
                     animation: 'slide 1s linear infinite',
                   }}
              ></div>
            </div>
          </div>
          <style>{`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(20px); }
            }
          `}</style>
        </div>

        {/* Circular Neon Progress */}
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 border-2 border-lime-400 rounded-lg"
             style={{ boxShadow: '0 0 30px rgba(163, 230, 53, 0.3)' }}
        >
          <h3 className="text-2xl font-black text-lime-400 tracking-wider mb-8 text-center"
              style={{ textShadow: '0 0 15px rgb(163, 230, 53)' }}
          >
            CIRCULAR GLOW
          </h3>
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-lime-400/30 animate-ping"
                   style={{ animationDuration: '3s' }}
              ></div>

              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="128"
                  cy="128"
                  r={radius}
                  stroke="rgba(163, 230, 53, 0.2)"
                  strokeWidth="14"
                  fill="none"
                />
                <circle
                  cx="128"
                  cy="128"
                  r={radius}
                  stroke="url(#neonGradient)"
                  strokeWidth="14"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-300 ease-out"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgb(163, 230, 53)) drop-shadow(0 0 40px rgb(163, 230, 53))',
                  }}
                />
                <defs>
                  <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a3e635" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-black text-lime-400 mb-2"
                      style={{ textShadow: '0 0 30px rgb(163, 230, 53)' }}
                >
                  {circularProgress}
                </span>
                <span className="text-xs text-lime-400/70 tracking-widest"
                      style={{ textShadow: '0 0 10px rgb(163, 230, 53)' }}
                >
                  PERCENT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Channel Progress */}
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 border-2 border-purple-500 rounded-lg"
             style={{ boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
        >
          <h3 className="text-2xl font-black text-purple-400 tracking-wider mb-8"
              style={{ textShadow: '0 0 15px rgb(168, 85, 247)' }}
          >
            MULTI-CHANNEL
          </h3>
          <div className="space-y-6">
            {channels.map((channel, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-black tracking-wider"
                        style={{ color: channel.color, textShadow: channel.shadow }}
                  >
                    {channel.label}
                  </span>
                  <span className="text-2xl font-black"
                        style={{ color: channel.color, textShadow: channel.shadow }}
                  >
                    {channel.value}%
                  </span>
                </div>
                <div className="relative h-3 bg-gray-950 rounded-full overflow-hidden"
                     style={{ boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)' }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${channel.value}%`,
                      backgroundColor: channel.color,
                      boxShadow: channel.shadow,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pulse Progress */}
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 border-2 border-pink-500 rounded-lg"
             style={{ boxShadow: '0 0 30px rgba(236, 72, 153, 0.3)' }}
        >
          <h3 className="text-2xl font-black text-pink-400 tracking-wider mb-6"
              style={{ textShadow: '0 0 15px rgb(236, 72, 153)' }}
          >
            PULSE WAVE
          </h3>
          <div className="space-y-4">
            {[
              { label: 'ALPHA', value: 92, gradient: 'from-pink-500 via-purple-500 to-blue-500' },
              { label: 'BETA', value: 76, gradient: 'from-cyan-500 via-teal-500 to-green-500' },
              { label: 'GAMMA', value: 58, gradient: 'from-yellow-500 via-orange-500 to-red-500' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-black text-gray-400 tracking-widest">{item.label}</span>
                  <span className="text-xl font-black text-white">{item.value}%</span>
                </div>
                <div className="h-2 bg-gray-950 rounded-full overflow-hidden"
                     style={{ boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)' }}
                >
                  <div
                    className={`h-full bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-700 ease-out animate-pulse`}
                    style={{
                      width: `${item.value}%`,
                      boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segmented Neon Progress */}
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 border-2 border-cyan-400 rounded-lg"
             style={{ boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)' }}
        >
          <h3 className="text-2xl font-black text-cyan-400 tracking-wider mb-6"
              style={{ textShadow: '0 0 15px rgb(34, 211, 238)' }}
          >
            SEGMENTS
          </h3>
          <div className="flex gap-2">
            {[...Array(10)].map((_, index) => {
              const threshold = (index + 1) * 10;
              const isActive = progress1 >= threshold;
              return (
                <div
                  key={index}
                  className="flex-1 h-16 bg-gray-950 rounded transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? 'rgb(34, 211, 238)' : 'rgb(17, 24, 39)',
                    boxShadow: isActive ? '0 0 20px rgb(34, 211, 238), inset 0 0 10px rgb(34, 211, 238)' : 'inset 0 0 5px rgba(0, 0, 0, 0.5)',
                  }}
                ></div>
              );
            })}
          </div>
          <div className="mt-4 text-center">
            <span className="text-4xl font-black text-cyan-400"
                  style={{ textShadow: '0 0 20px rgb(34, 211, 238)' }}
            >
              {progress1}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
