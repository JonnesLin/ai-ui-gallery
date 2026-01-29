'use client';

import { SearchBox } from './SearchBox';

export default function NatureSearchBox() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <SearchBox
          theme="pastel"
          size="lg"
          placeholder="Search naturally..."
        />

        <SearchBox
          theme="pastel"
          size="md"
          placeholder="Search..."
        />

        <SearchBox
          theme="pastel"
          size="sm"
          placeholder="Find..."
        />
      </div>
    </div>
  );
}
