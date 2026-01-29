'use client';

import { useState } from 'react';
import { SearchBox } from './SearchBox';

export default function GlassmorphismSearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const suggestions = ['React Components', 'Tailwind CSS', 'Next.js', 'TypeScript'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <SearchBox
          theme="glassmorphism"
          size="lg"
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Search anything..."
          suggestions={suggestions}
          clearable
        />

        <SearchBox
          theme="glassmorphism"
          size="md"
          placeholder="Search..."
        />

        <SearchBox
          theme="glassmorphism"
          size="sm"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
