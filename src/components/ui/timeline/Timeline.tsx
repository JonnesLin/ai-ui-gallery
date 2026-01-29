import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import { TimelineProvider } from './Timeline.context';
import type { TimelineProps } from './Timeline.types';

export function Timeline({
  theme = 'minimalist',
  mode = 'left',
  pending = false,
  pendingDot,
  className,
  children,
}: TimelineProps) {
  const themeConfig = getTheme(theme);

  return (
    <TimelineProvider value={{ theme, mode }}>
      <ol
        className={cn('relative', className)}
        role="list"
        aria-label="Timeline"
      >
        {children}

        {pending && pendingDot && (
          <li className={cn('relative', mode === 'left' ? 'pl-16' : 'pr-16', 'mt-8')}>
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 opacity-60">
              {pendingDot}
            </div>
            <div className={cn('text-sm', themeConfig.base.text, 'opacity-60')}>
              Pending...
            </div>
          </li>
        )}
      </ol>
    </TimelineProvider>
  );
}
