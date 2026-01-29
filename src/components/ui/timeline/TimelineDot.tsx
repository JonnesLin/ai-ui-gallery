import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import { useTimelineContext } from './Timeline.context';
import type { TimelineDotProps } from './Timeline.types';

function getDotColors(color: string, themeName: string) {
  const theme = getTheme(themeName as any);

  const colorMap: Record<string, string> = {
    primary: theme.variants.primary.background,
    success: theme.variants.success.background,
    warning: theme.variants.warning.background,
    error: theme.variants.danger.background,
    gray: 'bg-gray-400',
  };

  return colorMap[color];
}

export function TimelineDot({
  color = 'primary',
  className,
  children,
}: TimelineDotProps) {
  const { theme } = useTimelineContext();
  const bgColor = getDotColors(color, theme);

  if (children) {
    return (
      <div
        className={cn(
          'absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center',
          bgColor,
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center',
        bgColor,
        className
      )}
    >
      <div className="w-3 h-3 rounded-full bg-white" />
    </div>
  );
}
