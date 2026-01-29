import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import type { DashboardHeaderProps } from './types';

export function DashboardHeader({
  theme,
  title,
  actions,
}: DashboardHeaderProps) {
  const themeConfig = getTheme(theme);

  return (
    <header
      className={cn(
        'flex items-center justify-between mb-6 pb-4',
        themeConfig.base.border,
        'border-b'
      )}
    >
      <h2 className={cn('text-2xl font-bold', themeConfig.base.text)}>
        {title}
      </h2>
      {actions && (
        <div className="flex items-center gap-3">
          {actions}
        </div>
      )}
    </header>
  );
}
