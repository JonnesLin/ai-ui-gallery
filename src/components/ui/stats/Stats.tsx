import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { StatItem } from './StatItem';
import type { StatsProps } from './types';

export function Stats({
  theme,
  layout,
  columns = 4,
  items,
  className,
}: StatsProps) {
  const themeConfig = getTheme(theme);

  const layoutClasses = {
    horizontal: 'flex flex-row overflow-x-auto gap-6',
    vertical: 'flex flex-col gap-6',
    grid: cn(
      'grid gap-6',
      columns === 2 && 'grid-cols-1 md:grid-cols-2',
      columns === 3 && 'grid-cols-1 md:grid-cols-3',
      columns === 4 && 'grid-cols-2 md:grid-cols-4'
    ),
  };

  return (
    <section className={cn('py-20', themeConfig.pageBackground)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(layoutClasses[layout], className)}>
          {items.map((item, index) => (
            <StatItem key={index} theme={theme} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
