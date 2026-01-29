import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import { useTimelineContext } from './Timeline.context';
import { TimelineDot } from './TimelineDot';
import type { TimelineItemProps } from './Timeline.types';
import { Children, isValidElement } from 'react';

export function TimelineItem({
  dot,
  color = 'primary',
  label,
  className,
  children,
  isLast = false,
}: TimelineItemProps & { isLast?: boolean }) {
  const { theme, mode } = useTimelineContext();
  const themeConfig = getTheme(theme);

  const isRight = mode === 'right';
  const dotSize = 10;
  const spacing = dotSize + 6;

  let dotElement: React.ReactNode = null;
  let contentElements: React.ReactNode[] = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === TimelineDot) {
        dotElement = child;
      } else {
        contentElements.push(child);
      }
    }
  });

  if (!dotElement && !dot) {
    dotElement = <TimelineDot color={color} />;
  } else if (dot) {
    dotElement = dot;
  }

  return (
    <li
      className={cn(
        'relative pb-8',
        isRight ? `pr-${spacing} text-right` : `pl-${spacing}`,
        'group',
        isLast && 'pb-0',
        className
      )}
      style={{
        paddingLeft: isRight ? undefined : `${spacing * 4}px`,
        paddingRight: isRight ? `${spacing * 4}px` : undefined,
      }}
    >
      {!isLast && (
        <div
          className={cn(
            'absolute w-0.5 bg-gray-200 dark:bg-gray-700',
            isRight ? 'right-5' : 'left-5'
          )}
          style={{
            top: `${dotSize + 8}px`,
            height: 'calc(100% - 8px)',
          }}
          aria-hidden="true"
        />
      )}

      {label && (
        <div
          className={cn(
            'text-xs font-medium uppercase tracking-wider mb-2',
            themeConfig.base.text,
            'opacity-70'
          )}
        >
          {label}
        </div>
      )}

      {dotElement}

      <div className={cn('space-y-2', isRight && 'flex flex-col items-end')}>
        {contentElements.length > 0 ? contentElements : children}
      </div>
    </li>
  );
}
