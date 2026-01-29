'use client';

import { useState } from 'react';
import { SearchBox } from './SearchBox';

export default function DarkSearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const recentSearches = ['React patterns', 'TypeScript tips', 'CSS animations', 'Performance optimization'];

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Large with Suggestions</label>
          <SearchBox
            theme="dark"
            size="lg"
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search documentation..."
            suggestions={recentSearches}
            clearable
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Medium</label>
          <SearchBox
            theme="dark"
            size="md"
            placeholder="Search..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Small</label>
          <SearchBox
            theme="dark"
            size="sm"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}
