import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import type { DashboardCardProps } from './types';

export function DashboardCard({
  theme,
  title,
  subtitle,
  icon,
  value,
  trend,
  trendValue,
}: DashboardCardProps) {
  const themeConfig = getTheme(theme);

  const trendColor = trend === 'up'
    ? 'text-green-600 dark:text-green-400'
    : 'text-red-600 dark:text-red-400';

  return (
    <div
      className={cn(
        'p-6',
        themeConfig.base.background,
        themeConfig.base.border,
        themeConfig.base.shadow,
        themeConfig.base.radius,
        themeConfig.states.hover
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className={cn('text-sm mb-1', themeConfig.base.text)}>
            {title}
          </p>
          {subtitle && (
            <p className="text-xs opacity-60">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className="ml-3">
            {icon}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <p className={cn('text-3xl font-bold', themeConfig.base.text)}>
          {value}
        </p>

        {trend && trendValue && (
          <div className="flex items-center gap-2">
            <span className={cn('text-sm font-medium', trendColor)}>
              {trend === 'up' ? '↑' : '↓'} {trendValue}
            </span>
            <span className="text-xs opacity-60">vs last period</span>
          </div>
        )}
      </div>
    </div>
  );
}
