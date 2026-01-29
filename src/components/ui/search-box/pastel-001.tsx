'use client';

import { SearchBox } from './SearchBox';

export default function PastelSearchBox() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <SearchBox
          theme="pastel"
          size="lg"
          placeholder="Search sweetly..."
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
