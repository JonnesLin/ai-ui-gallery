'use client';

import React, { useState, useEffect } from 'react';

export default function SketchProgress() {
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

  const tasks = [
    { label: 'Sketching Ideas', value: 88, icon: '✎' },
    { label: 'Drawing Wireframes', value: 72, icon: '▢' },
    { label: 'Adding Details', value: 55, icon: '✏' },
    { label: 'Final Touches', value: 91, icon: '✓' },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdf8] p-8 relative">
      {/* Paper Texture Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none"
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)',
           }}
      ></div>

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6 relative">
            <h1 className="text-6xl font-bold text-gray-800 relative"
                style={{
                  fontFamily: 'Georgia, serif',
                  transform: 'rotate(-1deg)',
                }}
            >
              Sketch Progress
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-800"
                 style={{
                   clipPath: 'polygon(0 50%, 2% 40%, 4% 60%, 6% 45%, 8% 55%, 10% 50%, 12% 40%, 14% 60%, 16% 45%, 18% 55%, 20% 50%, 22% 40%, 24% 60%, 26% 45%, 28% 55%, 30% 50%, 32% 40%, 34% 60%, 36% 45%, 38% 55%, 40% 50%, 42% 40%, 44% 60%, 46% 45%, 48% 55%, 50% 50%, 52% 40%, 54% 60%, 56% 45%, 58% 55%, 60% 50%, 62% 40%, 64% 60%, 66% 45%, 68% 55%, 70% 50%, 72% 40%, 74% 60%, 76% 45%, 78% 55%, 80% 50%, 82% 40%, 84% 60%, 86% 45%, 88% 55%, 90% 50%, 92% 40%, 94% 60%, 96% 45%, 98% 55%, 100% 50%)',
                 }}
            ></div>
          </div>
          <p className="text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>Hand-drawn Style Indicators</p>
        </div>

        {/* Pencil Sketch Progress */}
        <div className="bg-white p-8 relative border-2 border-gray-800 shadow-lg"
             style={{
               borderRadius: '2% 98% 2% 98% / 95% 2% 95% 3%',
               transform: 'rotate(-0.5deg)',
             }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            ✎ Pencil Sketch
          </h3>
          <div className="relative h-12 bg-gray-50 overflow-hidden border-2 border-gray-800"
               style={{
                 borderRadius: '95% 4% 97% 5% / 4% 94% 3% 95%',
               }}
          >
            <div
              className="h-full bg-gray-700 transition-all duration-500 ease-out relative"
              style={{
                width: `${progress1}%`,
                clipPath: 'polygon(0 10%, 2% 5%, 4% 15%, 6% 8%, 8% 12%, 10% 10%, 12% 5%, 14% 15%, 16% 8%, 18% 12%, 20% 10%, 22% 5%, 24% 15%, 26% 8%, 28% 12%, 30% 10%, 32% 5%, 34% 15%, 36% 8%, 38% 12%, 40% 10%, 42% 5%, 44% 15%, 46% 8%, 48% 12%, 50% 10%, 52% 5%, 54% 15%, 56% 8%, 58% 12%, 60% 10%, 62% 5%, 64% 15%, 66% 8%, 68% 12%, 70% 10%, 72% 5%, 74% 15%, 76% 8%, 78% 12%, 80% 10%, 82% 5%, 84% 15%, 86% 8%, 88% 12%, 90% 10%, 92% 5%, 94% 15%, 96% 8%, 98% 12%, 100% 10%, 100% 90%, 98% 95%, 96% 85%, 94% 92%, 92% 88%, 90% 90%, 88% 95%, 86% 85%, 84% 92%, 82% 88%, 80% 90%, 78% 95%, 76% 85%, 74% 92%, 72% 88%, 70% 90%, 68% 95%, 66% 85%, 64% 92%, 62% 88%, 60% 90%, 58% 95%, 56% 85%, 54% 92%, 52% 88%, 50% 90%, 48% 95%, 46% 85%, 44% 92%, 42% 88%, 40% 90%, 38% 95%, 36% 85%, 34% 92%, 32% 88%, 30% 90%, 28% 95%, 26% 85%, 24% 92%, 22% 88%, 20% 90%, 18% 95%, 16% 85%, 14% 92%, 12% 88%, 10% 90%, 8% 95%, 6% 85%, 4% 92%, 2% 88%, 0 90%)',
              }}
            >
              <div className="absolute inset-0 opacity-30"
                   style={{
                     backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)',
                   }}
              ></div>
            </div>
          </div>
          <div className="mt-4 text-right">
            <span className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
              {progress1}%
            </span>
          </div>
        </div>

        {/* Hatched Progress Bar */}
        <div className="bg-white p-8 relative border-2 border-gray-800 shadow-lg"
             style={{
               borderRadius: '98% 2% 98% 2% / 2% 95% 3% 95%',
               transform: 'rotate(0.5deg)',
             }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            ▢ Hatched Drawing
          </h3>
          <div className="relative h-16 bg-gray-50 overflow-hidden border-2 border-gray-800"
               style={{
                 borderRadius: '4% 95% 5% 97% / 94% 4% 95% 3%',
               }}
          >
            <div
              className="h-full bg-gray-800 transition-all duration-500 ease-out relative overflow-hidden"
              style={{
                width: `${progress2}%`,
                clipPath: 'polygon(0 8%, 5% 12%, 10% 5%, 15% 10%, 20% 7%, 25% 11%, 30% 6%, 35% 9%, 40% 8%, 45% 12%, 50% 5%, 55% 10%, 60% 7%, 65% 11%, 70% 6%, 75% 9%, 80% 8%, 85% 12%, 90% 5%, 95% 10%, 100% 7%, 100% 92%, 95% 88%, 90% 95%, 85% 90%, 80% 93%, 75% 89%, 70% 94%, 65% 91%, 60% 92%, 55% 88%, 50% 95%, 45% 90%, 40% 93%, 35% 89%, 30% 94%, 25% 91%, 20% 92%, 15% 88%, 10% 95%, 5% 90%, 0 93%)',
              }}
            >
              <div className="absolute inset-0"
                   style={{
                     backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(255,255,255,0.4) 3px, rgba(255,255,255,0.4) 6px)',
                   }}
              ></div>
              <div className="absolute inset-0"
                   style={{
                     backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.2) 3px, rgba(255,255,255,0.2) 6px)',
                   }}
              ></div>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>In Progress</span>
            <span className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
              {progress2}%
            </span>
          </div>
        </div>

        {/* Circular Sketch Progress */}
        <div className="bg-white p-8 relative border-2 border-gray-800 shadow-lg"
             style={{
               borderRadius: '2% 98% 3% 97% / 97% 3% 98% 2%',
               transform: 'rotate(-0.3deg)',
             }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            ◯ Circular Sketch
          </h3>
          <div className="flex justify-center items-center">
            <div className="relative w-56 h-56">
              <svg className="w-full h-full -rotate-90">
                {/* Background Circle - Sketchy */}
                <circle
                  cx="112"
                  cy="112"
                  r={radius}
                  stroke="#d1d5db"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="2 3"
                />
                {/* Progress Circle - Sketchy */}
                <circle
                  cx="112"
                  cy="112"
                  r={radius}
                  stroke="#1f2937"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${circumference * 0.98} ${circumference * 0.02}`}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-500 ease-out"
                  style={{
                    filter: 'url(#sketch-filter)',
                  }}
                />
                <defs>
                  <filter id="sketch-filter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="1" />
                    <feDisplacementMap in="SourceGraphic" scale="2" />
                  </filter>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  {circularProgress}
                </span>
                <span className="text-sm text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>percent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Task Progress List */}
        <div className="bg-white p-8 relative border-2 border-gray-800 shadow-lg"
             style={{
               borderRadius: '97% 3% 98% 2% / 3% 97% 2% 98%',
               transform: 'rotate(0.4deg)',
             }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            ✓ Task List
          </h3>
          <div className="space-y-5">
            {tasks.map((task, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                    {task.icon} {task.label}
                  </span>
                  <span className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
                    {task.value}%
                  </span>
                </div>
                <div className="h-6 bg-gray-50 overflow-hidden border-2 border-gray-800"
                     style={{
                       borderRadius: '95% 4% 97% 5% / 4% 94% 3% 95%',
                     }}
                >
                  <div
                    className="h-full bg-gray-700 transition-all duration-700 ease-out relative"
                    style={{
                      width: `${task.value}%`,
                      clipPath: 'polygon(0 15%, 5% 10%, 10% 18%, 15% 12%, 20% 16%, 25% 11%, 30% 17%, 35% 13%, 40% 15%, 45% 10%, 50% 18%, 55% 12%, 60% 16%, 65% 11%, 70% 17%, 75% 13%, 80% 15%, 85% 10%, 90% 18%, 95% 12%, 100% 16%, 100% 85%, 95% 90%, 90% 82%, 85% 88%, 80% 84%, 75% 89%, 70% 83%, 65% 87%, 60% 85%, 55% 90%, 50% 82%, 45% 88%, 40% 84%, 35% 89%, 30% 83%, 25% 87%, 20% 85%, 15% 90%, 10% 82%, 5% 88%, 0 84%)',
                    }}
                  >
                    <div className="absolute inset-0 opacity-20"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.5) 4px, rgba(255,255,255,0.5) 8px)',
                         }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doodle Progress */}
        <div className="bg-white p-8 relative border-2 border-gray-800 shadow-lg"
             style={{
               borderRadius: '3% 97% 2% 98% / 98% 2% 97% 3%',
               transform: 'rotate(-0.6deg)',
             }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            ✏ Doodle Style
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Outline', value: 95 },
              { label: 'Shading', value: 68 },
              { label: 'Details', value: 42 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>{item.label}</span>
                  <span className="font-bold text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>{item.value}%</span>
                </div>
                <div className="h-4 bg-gray-100 overflow-hidden border border-gray-800"
                     style={{
                       borderRadius: '4% 96% 5% 95% / 95% 5% 96% 4%',
                     }}
                >
                  <div
                    className="h-full bg-gray-600 transition-all duration-700 ease-out"
                    style={{
                      width: `${item.value}%`,
                      clipPath: 'polygon(0 20%, 10% 15%, 20% 22%, 30% 18%, 40% 20%, 50% 15%, 60% 22%, 70% 18%, 80% 20%, 90% 15%, 100% 22%, 100% 80%, 90% 85%, 80% 78%, 70% 82%, 60% 80%, 50% 85%, 40% 78%, 30% 82%, 20% 80%, 10% 85%, 0 78%)',
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
