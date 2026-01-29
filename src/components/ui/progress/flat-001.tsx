'use client';

import React, { useState, useEffect } from 'react';

export default function FlatProgress() {
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
    { label: 'Download', value: 88, color: '#3498db' },
    { label: 'Install', value: 72, color: '#9b59b6' },
    { label: 'Configure', value: 55, color: '#e74c3c' },
    { label: 'Complete', value: 91, color: '#2ecc71' },
  ];

  return (
    <div className="min-h-screen bg-[#ecf0f1] p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-[#2c3e50] mb-2">
            Flat Design
          </h1>
          <p className="text-[#7f8c8d] text-lg">Clean & Simple Progress Indicators</p>
        </div>

        {/* Basic Flat Progress */}
        <div className="bg-white p-8 rounded-none">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold text-[#2c3e50]">Primary Progress</h3>
            <span className="text-4xl font-bold text-[#3498db]">{progress1}%</span>
          </div>
          <div className="h-10 bg-[#bdc3c7] rounded-none overflow-hidden">
            <div
              className="h-full bg-[#3498db] transition-all duration-300 ease-out"
              style={{ width: `${progress1}%` }}
            ></div>
          </div>
        </div>

        {/* Colorful Flat Progress */}
        <div className="bg-white p-8 rounded-none">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold text-[#2c3e50]">Colorful Progress</h3>
            <span className="text-4xl font-bold text-[#9b59b6]">{progress2}%</span>
          </div>
          <div className="h-12 bg-[#ecf0f1] rounded-none overflow-hidden">
            <div
              className="h-full transition-all duration-300 ease-out"
              style={{
                width: `${progress2}%`,
                backgroundColor: progress2 > 75 ? '#2ecc71' : progress2 > 50 ? '#f39c12' : progress2 > 25 ? '#e67e22' : '#e74c3c',
              }}
            ></div>
          </div>
          <div className="mt-4 flex justify-between text-sm text-[#7f8c8d]">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
            <span>Complete</span>
          </div>
        </div>

        {/* Circular Flat Progress */}
        <div className="bg-white p-8 rounded-none">
          <h3 className="text-2xl font-semibold text-[#2c3e50] mb-6 text-center">Circular Progress</h3>
          <div className="flex justify-center items-center">
            <div className="relative w-56 h-56">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="112"
                  cy="112"
                  r={radius}
                  stroke="#ecf0f1"
                  strokeWidth="16"
                  fill="none"
                />
                <circle
                  cx="112"
                  cy="112"
                  r={radius}
                  stroke="#3498db"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="butt"
                  className="transition-all duration-300 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-[#2c3e50]">{circularProgress}%</span>
                <span className="text-sm text-[#7f8c8d] mt-2">Loading</span>
              </div>
            </div>
          </div>
        </div>

        {/* Task Progress List */}
        <div className="bg-white p-8 rounded-none">
          <h3 className="text-2xl font-semibold text-[#2c3e50] mb-6">Task Progress</h3>
          <div className="space-y-6">
            {tasks.map((task, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-[#2c3e50]">{task.label}</span>
                  <span className="text-xl font-bold" style={{ color: task.color }}>
                    {task.value}%
                  </span>
                </div>
                <div className="h-8 bg-[#ecf0f1] rounded-none overflow-hidden">
                  <div
                    className="h-full transition-all duration-700 ease-out"
                    style={{
                      width: `${task.value}%`,
                      backgroundColor: task.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Flat Progress */}
        <div className="bg-white p-8 rounded-none">
          <h3 className="text-2xl font-semibold text-[#2c3e50] mb-6">Minimal Style</h3>
          <div className="space-y-5">
            {[
              { label: 'Success', value: 95, color: '#2ecc71' },
              { label: 'Warning', value: 68, color: '#f39c12' },
              { label: 'Danger', value: 42, color: '#e74c3c' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-[#7f8c8d]">{item.label}</span>
                  <span className="text-lg font-bold text-[#2c3e50]">{item.value}%</span>
                </div>
                <div className="h-4 bg-[#ecf0f1] rounded-none overflow-hidden">
                  <div
                    className="h-full transition-all duration-700 ease-out"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stacked Progress */}
        <div className="bg-white p-8 rounded-none">
          <h3 className="text-2xl font-semibold text-[#2c3e50] mb-6">Stacked Progress</h3>
          <div className="h-16 bg-[#ecf0f1] rounded-none overflow-hidden flex">
            <div
              className="bg-[#3498db] transition-all duration-500 ease-out flex items-center justify-center text-white font-bold"
              style={{ width: '30%' }}
            >
              30%
            </div>
            <div
              className="bg-[#9b59b6] transition-all duration-500 ease-out flex items-center justify-center text-white font-bold"
              style={{ width: '25%' }}
            >
              25%
            </div>
            <div
              className="bg-[#e74c3c] transition-all duration-500 ease-out flex items-center justify-center text-white font-bold"
              style={{ width: '20%' }}
            >
              20%
            </div>
            <div
              className="bg-[#2ecc71] transition-all duration-500 ease-out flex items-center justify-center text-white font-bold"
              style={{ width: '25%' }}
            >
              25%
            </div>
          </div>
          <div className="mt-4 flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#3498db] rounded-none"></div>
              <span className="text-[#7f8c8d]">Blue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#9b59b6] rounded-none"></div>
              <span className="text-[#7f8c8d]">Purple</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#e74c3c] rounded-none"></div>
              <span className="text-[#7f8c8d]">Red</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#2ecc71] rounded-none"></div>
              <span className="text-[#7f8c8d]">Green</span>
            </div>
          </div>
        </div>

        {/* Simple Bars */}
        <div className="bg-white p-8 rounded-none">
          <h3 className="text-2xl font-semibold text-[#2c3e50] mb-6">Simple Bars</h3>
          <div className="space-y-4">
            {[
              { value: 100, color: '#1abc9c' },
              { value: 85, color: '#3498db' },
              { value: 70, color: '#9b59b6' },
              { value: 55, color: '#f39c12' },
              { value: 40, color: '#e74c3c' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-lg font-bold text-[#2c3e50] w-16">{item.value}%</span>
                <div className="flex-1 h-6 bg-[#ecf0f1] rounded-none overflow-hidden">
                  <div
                    className="h-full transition-all duration-700 ease-out"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segment Progress */}
        <div className="bg-white p-8 rounded-none">
          <h3 className="text-2xl font-semibold text-[#2c3e50] mb-6">Segment Progress</h3>
          <div className="flex gap-2">
            {[...Array(10)].map((_, index) => {
              const isActive = index < Math.floor(progress1 / 10);
              return (
                <div
                  key={index}
                  className="flex-1 h-20 transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? '#3498db' : '#ecf0f1',
                  }}
                ></div>
              );
            })}
          </div>
          <div className="mt-4 text-center">
            <span className="text-4xl font-bold text-[#3498db]">{progress1}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
