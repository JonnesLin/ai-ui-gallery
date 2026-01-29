'use client';

import { useState } from 'react';
import { SearchBox } from './SearchBox';

export default function MinimalistSearchBox() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Large</label>
          <SearchBox
            theme="minimalist"
            size="lg"
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search..."
            clearable
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Medium</label>
          <SearchBox
            theme="minimalist"
            size="md"
            placeholder="Search..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Small</label>
          <SearchBox
            theme="minimalist"
            size="sm"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}
