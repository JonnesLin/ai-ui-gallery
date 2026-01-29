'use client';

import { Popover, PopoverTrigger, PopoverContent } from './index';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export default function MinimalistPopover() {
  const theme = getTheme('minimalist');

  return (
    <div className={cn('min-h-screen p-12', theme.pageBackground)}>
      <div className="max-w-6xl mx-auto">
        <h1 className={cn('text-3xl font-light mb-12', theme.base.text)}>
          Minimalist Popover
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="top" theme="minimalist">
              <PopoverTrigger
                className={cn(
                  'px-6 py-2 text-sm font-medium',
                  theme.variants.primary.text,
                  theme.variants.primary.background,
                  theme.variants.primary.border,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
              >
                Top Popover
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium text-gray-900">Information</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  This is a minimalist popover with clean lines and subtle styling.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="bottom" theme="minimalist">
              <PopoverTrigger
                className={cn(
                  'px-6 py-2 text-sm font-medium',
                  theme.variants.primary.text,
                  theme.variants.primary.background,
                  theme.variants.primary.border,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
              >
                Bottom Popover
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium text-gray-900">Details</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Simple, functional design focused on content clarity.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="left" theme="minimalist">
              <PopoverTrigger
                className={cn(
                  'px-6 py-2 text-sm font-medium',
                  theme.variants.primary.text,
                  theme.variants.primary.background,
                  theme.variants.primary.border,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
              >
                Left Popover
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium text-gray-900">Context</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every element serves a purpose. Nothing more, nothing less.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="right" theme="minimalist">
              <PopoverTrigger
                className={cn(
                  'px-6 py-2 text-sm font-medium',
                  theme.variants.primary.text,
                  theme.variants.primary.background,
                  theme.variants.primary.border,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
              >
                Right Popover
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-medium text-gray-900">Note</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Clean typography and generous whitespace define this aesthetic.
                </p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
