'use client';

import { SearchBox } from './SearchBox';

export default function BrutalistSearchBox() {
  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8 [&_input]:!border-4 [&_input]:!border-black [&_input]:!rounded-none [&_input]:!font-black [&_input]:!uppercase [&_button]:!border-4 [&_button]:!border-black [&_button]:!rounded-none [&_button]:hover:!bg-black [&_button]:hover:!text-white">
        <SearchBox
          theme="flat"
          size="lg"
          placeholder="SEARCH NOW..."
        />

        <SearchBox
          theme="flat"
          size="md"
          placeholder="SEARCH..."
        />

        <SearchBox
          theme="flat"
          size="sm"
          placeholder="FIND..."
        />
      </div>
    </div>
  );
}
