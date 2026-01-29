'use client';

import { Popover, PopoverTrigger, PopoverContent } from './index';

export default function FlatPopover() {
  return (
    <div className="min-h-screen bg-gray-100 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-12">Flat Popover</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="top" theme="minimalist" arrow={true}>
              <PopoverTrigger className="px-6 py-3 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors">
                Top Popover
              </PopoverTrigger>
              <PopoverContent
                className="w-64"
                arrowClassName="w-3 h-3"
                contentStyle={{}}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-gray-800">Simple Title</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Pure solid colors with no gradients or shadows. Clean and direct.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="bottom" theme="minimalist" arrow={true}>
              <PopoverTrigger className="px-6 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors">
                Bottom Popover
              </PopoverTrigger>
              <PopoverContent className="w-64" arrowClassName="w-3 h-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-gray-800">Flat Design</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  No shadows, no bevels. Just flat surfaces and bold colors.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="left" theme="minimalist" arrow={true}>
              <PopoverTrigger className="px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors">
                Left Popover
              </PopoverTrigger>
              <PopoverContent className="w-64" arrowClassName="w-3 h-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-gray-800">Minimalism</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Inspired by Metro UI and modern design principles.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="right" theme="minimalist" arrow={true}>
              <PopoverTrigger className="px-6 py-3 text-sm font-semibold text-white bg-purple-500 hover:bg-purple-600 transition-colors">
                Right Popover
              </PopoverTrigger>
              <PopoverContent className="w-64" arrowClassName="w-3 h-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-gray-800">Bold Colors</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Emphasis on color and typography over decorative elements.
                </p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
