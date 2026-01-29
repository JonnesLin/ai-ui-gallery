'use client';

import { Popover, PopoverTrigger, PopoverContent } from './index';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export default function GlassmorphismPopover() {
  const theme = getTheme('glassmorphism');

  return (
    <div className={cn('min-h-screen p-12', theme.pageBackground)}>
      <div className="max-w-6xl mx-auto">
        <h1 className={cn('text-3xl font-bold mb-12 drop-shadow-lg', theme.base.text)}>
          Glassmorphism Popover
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="top" theme="glassmorphism" offset={12}>
              <PopoverTrigger
                className={cn(
                  'px-6 py-3 text-sm font-semibold',
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
                  <h3 className="text-base font-bold text-white">Glass Effect</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Frosted glass aesthetic with translucent layers and soft shadows.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="bottom" theme="glassmorphism" offset={12}>
              <PopoverTrigger
                className={cn(
                  'px-6 py-3 text-sm font-semibold',
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
                  <h3 className="text-base font-bold text-white">Transparency</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Blurred backgrounds create depth and visual interest.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="left" theme="glassmorphism" offset={12}>
              <PopoverTrigger
                className={cn(
                  'px-6 py-3 text-sm font-semibold',
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
                  <h3 className="text-base font-bold text-white">Frosted</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Modern UI trend combining blur effects with vibrant backgrounds.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="right" theme="glassmorphism" offset={12}>
              <PopoverTrigger
                className={cn(
                  'px-6 py-3 text-sm font-semibold',
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
                  <h3 className="text-base font-bold text-white">Luminous</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Soft borders and subtle reflections enhance the glass illusion.
                </p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
