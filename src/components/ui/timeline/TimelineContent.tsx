import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import { useTimelineContext } from './Timeline.context';
import type { TimelineContentProps } from './Timeline.types';

export function TimelineContent({ className, children }: TimelineContentProps) {
  const { theme } = useTimelineContext();
  const themeConfig = getTheme(theme);

  return (
    <div
      className={cn(
        'flex-1',
        themeConfig.base.background,
        themeConfig.base.text,
        themeConfig.base.border,
        themeConfig.base.radius,
        themeConfig.base.shadow,
        'p-6',
        'border',
        className
      )}
    >
      {children}
    </div>
  );
}
