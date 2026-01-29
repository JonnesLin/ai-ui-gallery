'use client';

import { useState } from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import type { DarkMode } from './types';

export default function MinimalistDarkModeToggle() {
  const [mode, setMode] = useState<DarkMode>('light');

  return (
    <div
      className="flex items-center justify-center min-h-screen transition-colors duration-500"
      style={{ backgroundColor: mode === 'dark' ? '#0a0a0a' : '#ffffff' }}
    >
      <DarkModeToggle
        theme="minimalist"
        mode={mode}
        onChange={setMode}
        variant="switch"
        size="md"
      />
    </div>
  );
}
