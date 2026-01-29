'use client';

import { useState } from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import type { DarkMode } from './types';

export default function FlatDarkModeToggle() {
  const [mode, setMode] = useState<DarkMode>('light');

  return (
    <div
      className="flex items-center justify-center min-h-screen transition-colors duration-500"
      style={{ backgroundColor: mode === 'dark' ? '#2c3e50' : '#ecf0f1' }}
    >
      <DarkModeToggle
        theme="flat"
        mode={mode}
        onChange={setMode}
        variant="button"
        size="lg"
        showLabel
      />
    </div>
  );
}
