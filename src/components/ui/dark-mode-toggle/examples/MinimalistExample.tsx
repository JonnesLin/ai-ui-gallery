'use client';

import { useState } from 'react';
import { DarkModeToggle } from '../DarkModeToggle';
import type { DarkMode } from '../types';

export default function MinimalistExample() {
  const [mode, setMode] = useState<DarkMode>('light');

  return (
    <div
      className="flex items-center justify-center min-h-screen transition-colors duration-500"
      style={{ backgroundColor: mode === 'dark' ? '#0a0a0a' : '#ffffff' }}
    >
      <div className="flex flex-col gap-8">
        <DarkModeToggle
          theme="minimalist"
          mode={mode}
          onChange={setMode}
          variant="switch"
          size="md"
          showLabel
        />

        <DarkModeToggle
          theme="minimalist"
          mode={mode}
          onChange={setMode}
          variant="button"
          size="md"
          showLabel
        />

        <DarkModeToggle
          theme="minimalist"
          mode={mode}
          onChange={setMode}
          variant="dropdown"
          size="md"
          showLabel
        />
      </div>
    </div>
  );
}
