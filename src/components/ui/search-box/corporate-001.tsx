'use client';

import { SearchBox } from './SearchBox';

export default function CorporateSearchBox() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <SearchBox
          theme="corporate"
          size="lg"
          placeholder="Search documentation..."
        />

        <SearchBox
          theme="corporate"
          size="md"
          placeholder="Search..."
        />

        <SearchBox
          theme="corporate"
          size="sm"
          placeholder="Find..."
        />
      </div>
    </div>
  );
}
