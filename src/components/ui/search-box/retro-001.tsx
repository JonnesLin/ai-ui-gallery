'use client';

import { SearchBox } from './SearchBox';

export default function RetroSearchBox() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-pink-200 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <SearchBox
          theme="material"
          size="lg"
          placeholder="Search the groovy way..."
        />

        <SearchBox
          theme="material"
          size="md"
          placeholder="Search..."
        />

        <SearchBox
          theme="material"
          size="sm"
          placeholder="Find..."
        />
      </div>
    </div>
  );
}
