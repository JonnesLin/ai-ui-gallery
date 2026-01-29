'use client';

import { useState } from 'react';
import { SearchBox } from './SearchBox';

export default function NeumorphismSearchBox() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wide">Large</label>
          <SearchBox
            theme="neumorphism"
            size="lg"
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search..."
            clearable
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wide">Medium</label>
          <SearchBox
            theme="neumorphism"
            size="md"
            placeholder="Search..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-600 uppercase tracking-wide">Small</label>
          <SearchBox
            theme="neumorphism"
            size="sm"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}
