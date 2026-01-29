'use client';

import { Popover, PopoverTrigger, PopoverContent } from './index';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export default function DarkPopover() {
  const theme = getTheme('dark');

  return (
    <div className={cn('min-h-screen p-12', theme.pageBackground)}>
      <div className="max-w-6xl mx-auto">
        <h1 className={cn('text-3xl font-bold mb-12', theme.base.text)}>
          Dark Mode Popover
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="top" theme="dark">
              <PopoverTrigger
                className={cn(
                  'px-6 py-3 text-sm font-medium',
                  theme.variants.primary.text,
                  theme.variants.primary.background,
                  theme.variants.primary.border,
                  theme.variants.primary.shadow,
                  theme.base.radius,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
              >
                Top Popover
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-semibold text-white">Dark Theme</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Reduced eye strain with carefully balanced contrast and subdued colors.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="bottom" theme="dark">
              <PopoverTrigger
                className={cn(
                  'px-6 py-3 text-sm font-medium',
                  theme.variants.primary.text,
                  theme.variants.primary.background,
                  theme.variants.primary.border,
                  theme.variants.primary.shadow,
                  theme.base.radius,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
              >
                Bottom Popover
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-semibold text-white">Night Mode</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Perfect for low-light environments and extended usage sessions.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="left" theme="dark">
              <PopoverTrigger
                className={cn(
                  'px-6 py-3 text-sm font-medium',
                  theme.variants.primary.text,
                  theme.variants.primary.background,
                  theme.variants.primary.border,
                  theme.variants.primary.shadow,
                  theme.base.radius,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
              >
                Left Popover
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-semibold text-white">Contrast</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  High contrast ratios ensure readability without brightness overload.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="right" theme="dark">
              <PopoverTrigger
                className={cn(
                  'px-6 py-3 text-sm font-medium',
                  theme.variants.primary.text,
                  theme.variants.primary.background,
                  theme.variants.primary.border,
                  theme.variants.primary.shadow,
                  theme.base.radius,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
              >
                Right Popover
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-semibold text-white">Sleek</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Professional appearance with sophisticated monochromatic palette.
                </p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
