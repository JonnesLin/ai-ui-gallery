'use client';

import { useState } from 'react';
import { DarkModeToggle } from '../DarkModeToggle';
import type { DarkMode } from '../types';

export default function AllVariantsExample() {
  const [mode, setMode] = useState<DarkMode>('light');

  return (
    <div
      className="min-h-screen p-8 transition-colors duration-500"
      style={{ backgroundColor: mode === 'dark' ? '#1a1a1a' : '#f5f5f5' }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: mode === 'dark' ? '#ffffff' : '#000000' }}
          >
            Dark Mode Toggle Examples
          </h1>
          <p
            className="text-lg"
            style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
          >
            All variants and sizes
          </p>
        </div>

        {/* Switch Variants */}
        <section>
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: mode === 'dark' ? '#ffffff' : '#000000' }}
          >
            Switch Variant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <h3
                className="text-sm font-medium mb-4"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Small
              </h3>
              <DarkModeToggle
                theme="minimalist"
                mode={mode}
                onChange={setMode}
                variant="switch"
                size="sm"
              />
            </div>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <h3
                className="text-sm font-medium mb-4"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Medium
              </h3>
              <DarkModeToggle
                theme="minimalist"
                mode={mode}
                onChange={setMode}
                variant="switch"
                size="md"
              />
            </div>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <h3
                className="text-sm font-medium mb-4"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Large
              </h3>
              <DarkModeToggle
                theme="minimalist"
                mode={mode}
                onChange={setMode}
                variant="switch"
                size="lg"
              />
            </div>
          </div>
        </section>

        {/* Button Variants */}
        <section>
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: mode === 'dark' ? '#ffffff' : '#000000' }}
          >
            Button Variant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <h3
                className="text-sm font-medium mb-4"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Small
              </h3>
              <DarkModeToggle
                theme="flat"
                mode={mode}
                onChange={setMode}
                variant="button"
                size="sm"
                showLabel
              />
            </div>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <h3
                className="text-sm font-medium mb-4"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Medium
              </h3>
              <DarkModeToggle
                theme="flat"
                mode={mode}
                onChange={setMode}
                variant="button"
                size="md"
                showLabel
              />
            </div>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <h3
                className="text-sm font-medium mb-4"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Large
              </h3>
              <DarkModeToggle
                theme="flat"
                mode={mode}
                onChange={setMode}
                variant="button"
                size="lg"
                showLabel
              />
            </div>
          </div>
        </section>

        {/* Dropdown Variants */}
        <section>
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: mode === 'dark' ? '#ffffff' : '#000000' }}
          >
            Dropdown Variant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <h3
                className="text-sm font-medium mb-4"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Small
              </h3>
              <DarkModeToggle
                theme="glassmorphism"
                mode={mode}
                onChange={setMode}
                variant="dropdown"
                size="sm"
                showLabel
              />
            </div>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <h3
                className="text-sm font-medium mb-4"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Medium
              </h3>
              <DarkModeToggle
                theme="glassmorphism"
                mode={mode}
                onChange={setMode}
                variant="dropdown"
                size="md"
                showLabel
              />
            </div>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <h3
                className="text-sm font-medium mb-4"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Large
              </h3>
              <DarkModeToggle
                theme="glassmorphism"
                mode={mode}
                onChange={setMode}
                variant="dropdown"
                size="lg"
                showLabel
              />
            </div>
          </div>
        </section>

        {/* Different Themes */}
        <section>
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: mode === 'dark' ? '#ffffff' : '#000000' }}
          >
            Different Themes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className="p-4 rounded-lg flex flex-col items-center gap-3"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <span
                className="text-sm"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Minimalist
              </span>
              <DarkModeToggle
                theme="minimalist"
                mode={mode}
                onChange={setMode}
                variant="switch"
                size="md"
              />
            </div>
            <div
              className="p-4 rounded-lg flex flex-col items-center gap-3"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <span
                className="text-sm"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Flat
              </span>
              <DarkModeToggle
                theme="flat"
                mode={mode}
                onChange={setMode}
                variant="switch"
                size="md"
              />
            </div>
            <div
              className="p-4 rounded-lg flex flex-col items-center gap-3"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <span
                className="text-sm"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Glassmorphism
              </span>
              <DarkModeToggle
                theme="glassmorphism"
                mode={mode}
                onChange={setMode}
                variant="switch"
                size="md"
              />
            </div>
            <div
              className="p-4 rounded-lg flex flex-col items-center gap-3"
              style={{
                backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',
              }}
            >
              <span
                className="text-sm"
                style={{ color: mode === 'dark' ? '#a0a0a0' : '#666666' }}
              >
                Material
              </span>
              <DarkModeToggle
                theme="material"
                mode={mode}
                onChange={setMode}
                variant="switch"
                size="md"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
