'use client';

import { SearchBox } from './SearchBox';

export default function CyberpunkSearchBox() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <SearchBox
          theme="cyberpunk"
          size="lg"
          placeholder="SEARCH DATABASE..."
        />

        <SearchBox
          theme="cyberpunk"
          size="md"
          placeholder="QUERY..."
        />

        <SearchBox
          theme="cyberpunk"
          size="sm"
          placeholder="FIND..."
        />
      </div>
    </div>
  );
}
