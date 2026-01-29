'use client';

import React, { useState, useEffect } from 'react';

export default function PlayfulProgress() {
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

  const multiStepProgress = [
    { label: 'Start', value: 100, color: 'bg-pink-400' },
    { label: 'Middle', value: 75, color: 'bg-purple-400' },
    { label: 'Almost', value: 50, color: 'bg-blue-400' },
    { label: 'Done', value: 25, color: 'bg-green-400' },
  ];

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circularProgress / 100) * circumference;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-2">
            Playful Progress
          </h1>
          <p className="text-gray-600 font-medium">Fun & Colorful Loading Indicators</p>
        </div>

        {/* Basic Progress with Bounce Animation */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-pink-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🎈</span>
            Bouncy Progress
          </h3>
          <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden border-4 border-pink-300">
            <div
              className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress1}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg animate-bounce"></div>
            </div>
          </div>
          <div className="mt-3 text-right">
            <span className="text-2xl font-black text-purple-600">{progress1}%</span>
          </div>
        </div>

        {/* Rainbow Striped Progress */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-purple-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🌈</span>
            Rainbow Stripes
          </h3>
          <div className="relative h-10 bg-gray-100 rounded-full overflow-hidden border-4 border-purple-300">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out relative"
              style={{
                width: `${progress2}%`,
                background: 'repeating-linear-gradient(45deg, #ec4899, #ec4899 10px, #a855f7 10px, #a855f7 20px, #3b82f6 20px, #3b82f6 30px, #10b981 30px, #10b981 40px, #f59e0b 40px, #f59e0b 50px)',
                backgroundSize: '200% 100%',
                animation: 'slide 2s linear infinite',
              }}
            >
              <style>{`
                @keyframes slide {
                  0% { background-position: 0% 0%; }
                  100% { background-position: 100% 0%; }
                }
              `}</style>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-sm font-bold text-gray-500">Loading...</span>
            <span className="text-2xl font-black text-purple-600">{progress2}%</span>
          </div>
        </div>

        {/* Circular Progress with Emoji */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🎪</span>
            Circular Fun
          </h3>
          <div className="flex justify-center items-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full -rotate-90">
                {/* Background Circle */}
                <circle
                  cx="96"
                  cy="96"
                  r={radius}
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Progress Circle */}
                <circle
                  cx="96"
                  cy="96"
                  r={radius}
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-300 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl mb-2 animate-bounce">🎉</span>
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                  {circularProgress}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Step Progress */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-green-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🎯</span>
            Step by Step
          </h3>
          <div className="space-y-4">
            {multiStepProgress.map((step, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center text-white font-black`}>
                      {index + 1}
                    </span>
                    {step.label}
                  </span>
                  <span className="text-xl font-black text-gray-700">{step.value}%</span>
                </div>
                <div className="h-6 bg-gray-100 rounded-full overflow-hidden border-3 border-gray-200">
                  <div
                    className={`h-full ${step.color} rounded-full transition-all duration-500 ease-out relative`}
                    style={{ width: `${step.value}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Candy Bar Progress */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-yellow-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🍭</span>
            Candy Colors
          </h3>
          <div className="space-y-3">
            {[
              { value: 90, color1: '#ff6b9d', color2: '#ffc371', label: 'Sweet' },
              { value: 70, color1: '#a8e063', color2: '#56ab2f', label: 'Mint' },
              { value: 50, color1: '#c94b4b', color2: '#4b134f', label: 'Berry' },
              { value: 30, color1: '#f7971e', color2: '#ffd200', label: 'Honey' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-gray-700">{item.label}</span>
                  <span className="font-black text-gray-700">{item.value}%</span>
                </div>
                <div className="h-5 bg-gray-100 rounded-full overflow-hidden border-2 border-gray-200">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${item.value}%`,
                      background: `linear-gradient(90deg, ${item.color1}, ${item.color2})`,
                    }}
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
