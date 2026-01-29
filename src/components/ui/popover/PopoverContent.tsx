'use client';

import type { PopoverContentProps } from './Popover.types';
import { usePopoverContext } from './Popover';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';

const placementStyles = {
  top: 'bottom-full left-1/2 -translate-x-1/2',
  'top-start': 'bottom-full left-0',
  'top-end': 'bottom-full right-0',
  bottom: 'top-full left-1/2 -translate-x-1/2',
  'bottom-start': 'top-full left-0',
  'bottom-end': 'top-full right-0',
  left: 'right-full top-1/2 -translate-y-1/2',
  'left-start': 'right-full top-0',
  'left-end': 'right-full bottom-0',
  right: 'left-full top-1/2 -translate-y-1/2',
  'right-start': 'left-full top-0',
  'right-end': 'left-full bottom-0',
};

const arrowStyles = {
  top: 'top-full left-1/2 -translate-x-1/2 -mt-[5px] rotate-45 border-r border-b',
  'top-start': 'top-full left-4 -mt-[5px] rotate-45 border-r border-b',
  'top-end': 'top-full right-4 -mt-[5px] rotate-45 border-r border-b',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 mb-[5px] rotate-45 border-l border-t',
  'bottom-start': 'bottom-full left-4 mb-[5px] rotate-45 border-l border-t',
  'bottom-end': 'bottom-full right-4 mb-[5px] rotate-45 border-l border-t',
  left: 'left-full top-1/2 -translate-y-1/2 -ml-[5px] rotate-45 border-r border-b',
  'left-start': 'left-full top-4 -ml-[5px] rotate-45 border-r border-b',
  'left-end': 'left-full bottom-4 -ml-[5px] rotate-45 border-r border-b',
  right: 'right-full top-1/2 -translate-y-1/2 mr-[5px] rotate-45 border-l border-t',
  'right-start': 'right-full top-4 mr-[5px] rotate-45 border-l border-t',
  'right-end': 'right-full bottom-4 mr-[5px] rotate-45 border-l border-t',
};

function getOffsetStyle(placement: string, offset: number): React.CSSProperties {
  const isTop = placement.startsWith('top');
  const isBottom = placement.startsWith('bottom');
  const isLeft = placement.startsWith('left');
  const isRight = placement.startsWith('right');

  if (isTop) return { marginBottom: `${offset}px` };
  if (isBottom) return { marginTop: `${offset}px` };
  if (isLeft) return { marginRight: `${offset}px` };
  if (isRight) return { marginLeft: `${offset}px` };

  return {};
}

export function PopoverContent({
  children,
  className,
  arrowClassName,
  arrowStyle,
  contentStyle,
}: PopoverContentProps) {
  const { open, placement, theme, arrow, offset, contentRef } = usePopoverContext();

  if (!open) return null;

  const themeConfig = getTheme(theme);
  const positionClass = placementStyles[placement];
  const arrowClass = arrow ? arrowStyles[placement] : '';
  const offsetStyle = getOffsetStyle(placement, offset);

  return (
    <div
      ref={contentRef}
      style={offsetStyle}
      className={cn(
        'absolute z-50',
        positionClass,
        className
      )}
    >
      {arrow && (
        <div
          style={arrowStyle}
          className={cn(
            'absolute w-2 h-2',
            arrowClass,
            themeConfig.base.background,
            themeConfig.base.border,
            arrowClassName
          )}
        />
      )}
      <div
        style={contentStyle}
        className={cn(
          'relative',
          themeConfig.base.background,
          themeConfig.base.border,
          themeConfig.base.shadow,
          themeConfig.base.radius,
          'p-4'
        )}
      >
        {children}
      </div>
    </div>
  );
}
