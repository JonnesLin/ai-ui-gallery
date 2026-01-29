'use client';

import { Popover, PopoverTrigger, PopoverContent } from './index';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export default function MaterialPopover() {
  const theme = getTheme('material');

  return (
    <div className="min-h-screen bg-gray-50 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-medium text-gray-900 mb-12">Material Popover</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="top" theme="material" offset={12}>
              <PopoverTrigger
                className={cn(
                  'px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700',
                  theme.base.radius,
                  'shadow-md hover:shadow-lg transition-all'
                )}
              >
                Top Popover
              </PopoverTrigger>
              <PopoverContent
                className="w-72"
                arrowClassName="w-3 h-3 shadow-md"
                contentStyle={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-semibold text-gray-900">Material Design</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Google's design language emphasizing elevation and paper-like surfaces.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="bottom" theme="material" offset={12}>
              <PopoverTrigger
                className={cn(
                  'px-6 py-3 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700',
                  theme.base.radius,
                  'shadow-md hover:shadow-lg transition-all'
                )}
              >
                Bottom Popover
              </PopoverTrigger>
              <PopoverContent
                className="w-72"
                arrowClassName="w-3 h-3 shadow-md"
                contentStyle={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-semibold text-gray-900">Elevation</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Layered shadows create depth and hierarchy in the interface.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="left" theme="material" offset={12}>
              <PopoverTrigger
                className={cn(
                  'px-6 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700',
                  theme.base.radius,
                  'shadow-md hover:shadow-lg transition-all'
                )}
              >
                Left Popover
              </PopoverTrigger>
              <PopoverContent
                className="w-72"
                arrowClassName="w-3 h-3 shadow-md"
                contentStyle={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-semibold text-gray-900">Paper Surfaces</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Rounded corners and subtle shadows mimic physical materials.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="right" theme="material" offset={12}>
              <PopoverTrigger
                className={cn(
                  'px-6 py-3 text-sm font-medium text-white bg-pink-600 hover:bg-pink-700',
                  theme.base.radius,
                  'shadow-md hover:shadow-lg transition-all'
                )}
              >
                Right Popover
              </PopoverTrigger>
              <PopoverContent
                className="w-72"
                arrowClassName="w-3 h-3 shadow-md"
                contentStyle={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-semibold text-gray-900">Bold Colors</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Vibrant accent colors paired with clean typography and spacing.
                </p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
