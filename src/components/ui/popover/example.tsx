'use client';

import { Popover, PopoverTrigger, PopoverContent } from './index';

export default function PopoverExample() {
  return (
    <div className="min-h-screen bg-gray-50 p-12 flex items-center justify-center">
      <div className="space-x-8 flex">
        <Popover placement="top" theme="minimalist">
          <PopoverTrigger className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Top
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <h3 className="font-semibold mb-2">Top Popover</h3>
            <p className="text-sm text-gray-600">This popover appears above the trigger</p>
          </PopoverContent>
        </Popover>

        <Popover placement="bottom" theme="dark">
          <PopoverTrigger className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">
            Bottom
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <h3 className="font-semibold mb-2 text-white">Bottom Popover</h3>
            <p className="text-sm text-gray-400">This popover appears below the trigger</p>
          </PopoverContent>
        </Popover>

        <Popover placement="left" theme="glassmorphism">
          <PopoverTrigger className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Left
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <h3 className="font-semibold mb-2 text-white">Left Popover</h3>
            <p className="text-sm text-white/80">This popover appears to the left</p>
          </PopoverContent>
        </Popover>

        <Popover placement="right" theme="neumorphism" offset={16}>
          <PopoverTrigger
            className="px-4 py-2 bg-[#e0e5ec] text-[#4a5568] rounded-xl hover:shadow-inner"
            style={{ boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
          >
            Right
          </PopoverTrigger>
          <PopoverContent
            className="w-64"
            arrowClassName="w-4 h-4"
            arrowStyle={{ boxShadow: '4px 4px 8px #bec3c9' }}
            contentStyle={{ boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff' }}
          >
            <h3 className="font-semibold mb-2 text-[#4a5568]">Right Popover</h3>
            <p className="text-sm text-[#6b7280]">This popover appears to the right</p>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
