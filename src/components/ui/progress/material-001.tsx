'use client';

import React, { useState, useEffect } from 'react';
import { Progress } from './Progress';
import { CircularProgress } from './CircularProgress';

export default function MaterialProgress() {
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

  const processes = [
    { label: 'Uploading files', value: 92, color: 'primary' as const },
    { label: 'Processing data', value: 78, color: 'primary' as const },
    { label: 'Analyzing results', value: 65, color: 'primary' as const },
    { label: 'Generating report', value: 45, color: 'warning' as const },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-medium text-gray-900 mb-2">
            Material Design
          </h1>
          <p className="text-gray-600 text-lg">Material You Progress Components</p>
        </div>

        {/* Linear Determinate */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="mb-4 text-center">
            <span className="text-3xl font-medium text-blue-600">{progress1}%</span>
          </div>
          <Progress value={progress1} color="primary" size="xs" />
          <div className="mt-2 text-center">
            <h3 className="text-xl font-medium text-gray-900">Linear Determinate</h3>
          </div>
        </div>

        {/* Linear Indeterminate */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="mb-4">
            <h3 className="text-xl font-medium text-gray-900">Linear Indeterminate</h3>
            <p className="text-sm text-gray-600 mt-1">Loading without specific progress</p>
          </div>
          <Progress color="primary" size="xs" />
        </div>

        {/* Buffer Progress */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-medium text-gray-900">Buffer Progress</h3>
            <span className="text-3xl font-medium text-teal-600">{progress2}%</span>
          </div>
          <Progress value={progress2} color="success" size="xs" />
          <div className="mt-2 text-sm text-gray-600">
            Buffered: {Math.min(100, progress2 + 15)}%
          </div>
        </div>

        {/* Circular Determinate */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">Circular Determinate</h3>
          <div className="flex justify-center items-center">
            <CircularProgress value={circularProgress} size={192} strokeWidth={8} color="primary" showValue />
          </div>
        </div>

        {/* Circular Indeterminate */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">Circular Indeterminate</h3>
          <div className="flex justify-center items-center">
            <CircularProgress size={128} strokeWidth={8} color="primary" />
          </div>
        </div>

        {/* Process List */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-6">Process List</h3>
          <div className="space-y-6">
            {processes.map((process, index) => (
              <Progress
                key={index}
                value={process.value}
                color={process.color}
                size="xs"
                label={process.label}
                showValue
              />
            ))}
          </div>
        </div>

        {/* Elevated Progress */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-medium text-gray-900">Elevated Progress</h3>
              <p className="text-sm text-gray-600 mt-1">With Material elevation</p>
            </div>
            <span className="text-3xl font-medium text-blue-600">{progress1}%</span>
          </div>
          <Progress value={progress1} color="primary" size="sm" />
        </div>

        {/* Thin Progress Bars */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-6">Multiple Processes</h3>
          <div className="space-y-5">
            {[
              { label: 'CPU', value: 88, color: 'error' as const },
              { label: 'Memory', value: 64, color: 'warning' as const },
              { label: 'Storage', value: 42, color: 'success' as const },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700 w-20">{item.label}</span>
                <Progress value={item.value} color={item.color} size="xs" className="flex-1" />
                <span className="text-sm font-medium text-gray-900 w-12 text-right">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Segmented Progress */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-4">Segmented Progress</h3>
          <div className="flex gap-1">
            {[...Array(20)].map((_, index) => {
              const isActive = index < Math.floor(progress1 / 5);
              return (
                <div
                  key={index}
                  className={`flex-1 h-8 rounded-sm transition-all duration-300 ${
                    isActive ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}
                ></div>
              );
            })}
          </div>
          <div className="mt-4 text-center">
            <span className="text-2xl font-medium text-gray-900">{progress1}%</span>
          </div>
        </div>

        {/* Compact Progress */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-6">Compact Style</h3>
          <div className="space-y-3">
            {[95, 78, 62, 45, 28].map((value, index) => (
              <Progress key={index} value={value} color="primary" size="xs" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
