'use client';

import React, { useState, useEffect } from 'react';

export default function MonochromeProgress() {
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

  const metrics = [
    { label: 'Performance', value: 92 },
    { label: 'Reliability', value: 78 },
    { label: 'Efficiency', value: 85 },
    { label: 'Quality', value: 67 },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-black mb-2 tracking-tight">
            MONOCHROME
          </h1>
          <p className="text-gray-600 tracking-wider text-sm">BLACK & WHITE PROGRESS</p>
        </div>

        {/* Solid Black Progress */}
        <div className="bg-white p-8 border-2 border-black">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-black tracking-tight">STANDARD</h3>
            <span className="text-4xl font-bold text-black">{progress1}%</span>
          </div>
          <div className="relative h-8 bg-white border-2 border-black overflow-hidden">
            <div
              className="h-full bg-black transition-all duration-300 ease-out"
              style={{ width: `${progress1}%` }}
            ></div>
          </div>
        </div>

        {/* Striped Progress */}
        <div className="bg-black p-8 border-2 border-black">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">STRIPED</h3>
            <span className="text-4xl font-bold text-white">{progress2}%</span>
          </div>
          <div className="relative h-10 bg-white border-2 border-white overflow-hidden">
            <div
              className="h-full bg-black transition-all duration-300 ease-out relative"
              style={{ width: `${progress2}%` }}
            >
              <div className="absolute inset-0"
                   style={{
                     backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px)',
                   }}
              ></div>
            </div>
          </div>
        </div>

        {/* Dotted Progress */}
        <div className="bg-white p-8 border-2 border-black">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-black tracking-tight">DOTTED</h3>
            <span className="text-4xl font-bold text-black">{progress1}%</span>
          </div>
          <div className="relative h-12 bg-white border-2 border-black overflow-hidden">
            <div
              className="h-full transition-all duration-300 ease-out relative"
              style={{
                width: `${progress1}%`,
                backgroundImage: 'radial-gradient(circle, black 40%, transparent 40%)',
                backgroundSize: '16px 16px',
                backgroundPosition: '0 0',
              }}
            ></div>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="bg-white p-8 border-2 border-black">
          <h3 className="text-2xl font-bold text-black tracking-tight mb-8 text-center">CIRCULAR</h3>
          <div className="flex justify-center items-center">
            <div className="relative w-56 h-56">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="112"
                  cy="112"
                  r={radius}
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="112"
                  cy="112"
                  r={radius}
                  stroke="black"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="square"
                  className="transition-all duration-300 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-black">{circularProgress}</span>
                <span className="text-sm text-gray-600 mt-2 tracking-wider">PERCENT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Progress Bars */}
        <div className="bg-white p-8 border-2 border-black">
          <h3 className="text-2xl font-bold text-black tracking-tight mb-8">METRICS</h3>
          <div className="space-y-6">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-black">{metric.label}</span>
                  <span className="text-2xl font-bold text-black">{metric.value}%</span>
                </div>
                <div className="relative h-4 bg-white border-2 border-black overflow-hidden">
                  <div
                    className="h-full bg-black transition-all duration-700 ease-out"
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Shades Progress */}
        <div className="bg-white p-8 border-2 border-black">
          <h3 className="text-2xl font-bold text-black tracking-tight mb-6">GRADIENT</h3>
          <div className="space-y-4">
            {[
              { label: 'Dark', value: 90, from: 'from-gray-900', to: 'to-gray-700' },
              { label: 'Medium', value: 70, from: 'from-gray-700', to: 'to-gray-500' },
              { label: 'Light', value: 50, from: 'from-gray-500', to: 'to-gray-300' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-black">{item.label}</span>
                  <span className="font-bold text-black">{item.value}%</span>
                </div>
                <div className="h-6 bg-gray-100 border border-black overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.from} ${item.to} transition-all duration-700 ease-out`}
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Double Progress */}
        <div className="bg-black p-8 border-2 border-black">
          <h3 className="text-2xl font-bold text-white tracking-tight mb-6">DOUBLE</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2 text-white">
                <span className="font-medium">Primary</span>
                <span className="font-bold">{progress1}%</span>
              </div>
              <div className="h-3 bg-white overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-300 ease-out"
                  style={{ width: `${progress1}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2 text-white">
                <span className="font-medium">Secondary</span>
                <span className="font-bold">{progress2}%</span>
              </div>
              <div className="h-3 bg-white overflow-hidden">
                <div
                  className="h-full bg-gray-400 transition-all duration-300 ease-out"
                  style={{ width: `${progress2}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Progress */}
        <div className="bg-white p-8 border-2 border-black">
          <h3 className="text-2xl font-bold text-black tracking-tight mb-6">MINIMAL</h3>
          <div className="space-y-5">
            {[88, 64, 42].map((value, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs text-gray-500 tracking-wider">ITEM {index + 1}</span>
                  <span className="text-lg font-bold text-black">{value}%</span>
                </div>
                <div className="h-1 bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-black transition-all duration-700 ease-out"
                    style={{ width: `${value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Square Segments Progress */}
        <div className="bg-white p-8 border-2 border-black">
          <h3 className="text-2xl font-bold text-black tracking-tight mb-6">SEGMENTS</h3>
          <div className="flex gap-2">
            {[...Array(20)].map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-12 border-2 border-black transition-all duration-300 ${
                  index < Math.floor(progress1 / 5) ? 'bg-black' : 'bg-white'
                }`}
              ></div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <span className="text-3xl font-bold text-black">{progress1}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
