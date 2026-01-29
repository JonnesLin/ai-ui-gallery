'use client';

import { Popover, PopoverTrigger, PopoverContent } from './index';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export default function NeumorphismPopover() {
  const theme = getTheme('neumorphism');

  return (
    <div className={cn('min-h-screen p-12', theme.pageBackground)}>
      <div className="max-w-6xl mx-auto">
        <h1
          className={cn('text-3xl font-bold mb-12', theme.base.text)}
          style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.8), -2px -2px 4px rgba(163,177,198,0.6)' }}
        >
          Neumorphism Popover
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="top" theme="neumorphism" offset={16}>
              <PopoverTrigger
                className={cn(
                  'px-7 py-3 text-sm font-semibold',
                  theme.variants.primary.text,
                  theme.variants.primary.background,
                  theme.base.radius,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
                style={{ boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
              >
                Top Popover
              </PopoverTrigger>
              <PopoverContent
                className="w-72"
                arrowClassName="w-4 h-4"
                arrowStyle={{ boxShadow: '4px 4px 8px #bec3c9' }}
                contentStyle={{ boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-[#4a5568]">Soft UI</h3>
                </div>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  Soft shadows create an embossed appearance that seems to extrude from the background.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="bottom" theme="neumorphism" offset={16}>
              <PopoverTrigger
                className={cn(
                  'px-7 py-3 text-sm font-semibold',
                  theme.variants.primary.text,
                  theme.variants.primary.background,
                  theme.base.radius,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
                style={{ boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
              >
                Bottom Popover
              </PopoverTrigger>
              <PopoverContent
                className="w-72"
                arrowClassName="w-4 h-4"
                arrowStyle={{ boxShadow: '-4px -4px 8px #ffffff' }}
                contentStyle={{ boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-[#4a5568]">Elevated</h3>
                </div>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  Dual-tone shadows provide depth and tactile realism to flat surfaces.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="left" theme="neumorphism" offset={16}>
              <PopoverTrigger
                className={cn(
                  'px-7 py-3 text-sm font-semibold',
                  theme.variants.primary.text,
                  theme.variants.primary.background,
                  theme.base.radius,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
                style={{ boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
              >
                Left Popover
              </PopoverTrigger>
              <PopoverContent
                className="w-72"
                arrowClassName="w-4 h-4"
                arrowStyle={{ boxShadow: '4px 4px 8px #bec3c9' }}
                contentStyle={{ boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-[#4a5568]">Extruded</h3>
                </div>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  Elements appear to rise from the background with subtle lighting effects.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center justify-center h-64">
            <Popover placement="right" theme="neumorphism" offset={16}>
              <PopoverTrigger
                className={cn(
                  'px-7 py-3 text-sm font-semibold',
                  theme.variants.primary.text,
                  theme.variants.primary.background,
                  theme.base.radius,
                  theme.variants.primary.hover,
                  theme.states.hover
                )}
                style={{ boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff' }}
              >
                Right Popover
              </PopoverTrigger>
              <PopoverContent
                className="w-72"
                arrowClassName="w-4 h-4"
                arrowStyle={{ boxShadow: '-4px -4px 8px #ffffff' }}
                contentStyle={{ boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-[#4a5568]">Sculptural</h3>
                </div>
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  Monochromatic palette emphasizes the three-dimensional effect.
                </p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
