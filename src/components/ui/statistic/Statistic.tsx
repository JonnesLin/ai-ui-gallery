import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import type { StatisticProps } from './Statistic.types';

const sizeStyles = {
  xs: {
    title: 'text-xs',
    value: 'text-2xl',
    trend: 'text-xs',
  },
  sm: {
    title: 'text-sm',
    value: 'text-3xl',
    trend: 'text-sm',
  },
  md: {
    title: 'text-base',
    value: 'text-4xl',
    trend: 'text-sm',
  },
  lg: {
    title: 'text-lg',
    value: 'text-5xl',
    trend: 'text-base',
  },
  xl: {
    title: 'text-xl',
    value: 'text-6xl',
    trend: 'text-lg',
  },
};

const trendIcons = {
  up: '↑',
  down: '↓',
};

export function Statistic({
  title,
  value,
  prefix,
  suffix,
  precision,
  theme = 'minimalist',
  size = 'md',
  trend,
  trendValue,
  icon,
  loading = false,
  layout = 'vertical',
  className,
}: StatisticProps) {
  const themeConfig = getTheme(theme);
  const sizeStyle = sizeStyles[size];

  const formattedValue = typeof value === 'number' && precision !== undefined
    ? value.toFixed(precision)
    : value;

  if (loading) {
    return (
      <div
        className={cn(
          themeConfig.base.background,
          themeConfig.base.radius,
          themeConfig.base.border,
          themeConfig.base.shadow,
          themeConfig.states.loading,
          'p-6 animate-pulse',
          className
        )}
      >
        <div className={cn('h-4 bg-current/10 rounded mb-4', sizeStyle.title)} />
        <div className={cn('h-8 bg-current/10 rounded mb-2', sizeStyle.value)} />
        {trend && <div className={cn('h-3 bg-current/10 rounded w-1/2', sizeStyle.trend)} />}
      </div>
    );
  }

  const contentSection = (
    <div className={cn(layout === 'horizontal' && 'flex-1')}>
      {icon && layout === 'vertical' && (
        <div className="mb-4">
          {icon}
        </div>
      )}

      <div className={cn('font-medium opacity-70 mb-2', sizeStyle.title)}>
        {title}
      </div>

      <div className={cn('font-bold flex items-baseline gap-1', sizeStyle.value)}>
        {prefix && <span className="opacity-80">{prefix}</span>}
        <span>{formattedValue}</span>
        {suffix && <span className="opacity-80">{suffix}</span>}
      </div>

      {trend && trendValue && (
        <div className={cn('flex items-center gap-2 mt-2', sizeStyle.trend)}>
          <span
            className={cn(
              'font-bold',
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            )}
          >
            {trendIcons[trend]}
          </span>
          <span className="opacity-70">{trendValue}</span>
        </div>
      )}
    </div>
  );

  return (
    <div
      className={cn(
        themeConfig.base.background,
        themeConfig.base.text,
        themeConfig.base.radius,
        themeConfig.base.border,
        themeConfig.base.shadow,
        'p-6',
        layout === 'horizontal' && 'flex items-center justify-between',
        className
      )}
    >
      {contentSection}
      {icon && layout === 'horizontal' && (
        <div className="ml-4">
          {icon}
        </div>
      )}
    </div>
  );
}
