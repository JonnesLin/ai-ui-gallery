'use client';

import { SearchBox } from './SearchBox';

export default function LuxurySearchBox() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 to-yellow-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <SearchBox
          theme="luxury"
          size="lg"
          placeholder="Search exclusive items..."
        />

        <SearchBox
          theme="luxury"
          size="md"
          placeholder="Search..."
        />

        <SearchBox
          theme="luxury"
          size="sm"
          placeholder="Find..."
        />
      </div>
    </div>
  );
}
