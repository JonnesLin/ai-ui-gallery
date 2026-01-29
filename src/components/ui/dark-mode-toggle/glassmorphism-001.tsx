'use client';

import { useState } from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import type { DarkMode } from './types';

export default function GlassmorphismDarkModeToggle() {
  const [mode, setMode] = useState<DarkMode>('light');

  return (
    <div
      className="flex items-center justify-center min-h-screen transition-colors duration-500"
      style={{
        background:
          mode === 'dark'
            ? 'linear-gradient(135deg, #1e1e2e 0%, #2a2a3e 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <DarkModeToggle
        theme="glassmorphism"
        mode={mode}
        onChange={setMode}
        variant="button"
        size="lg"
      />
    </div>
  );
}
