import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { StatItemProps } from './types';

export function StatItem({
  theme,
  label,
  value,
  description,
  icon,
  trend,
  trendValue,
}: StatItemProps) {
  const themeConfig = getTheme(theme);

  const trendIcon = trend === 'up' ? '↑' : trend === 'down' ? '↓' : null;
  const trendColorClass = trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : '';

  return (
    <div
      className={cn(
        'p-6 text-center transition-all duration-300',
        themeConfig.base.background,
        themeConfig.base.border,
        themeConfig.base.shadow,
        themeConfig.base.radius,
        themeConfig.states.hover
      )}
    >
      {icon && <div className="text-4xl mb-3">{icon}</div>}

      <div className={cn('text-4xl md:text-5xl font-bold mb-2', themeConfig.base.text)}>
        {value}
      </div>

      <div className={cn('text-sm uppercase tracking-wider', themeConfig.base.text, 'opacity-70')}>
        {label}
      </div>

      {description && (
        <div className={cn('text-xs mt-2', themeConfig.base.text, 'opacity-60')}>
          {description}
        </div>
      )}

      {trend && trendValue && (
        <div className={cn('text-sm font-semibold mt-2', trendColorClass)}>
          {trendIcon} {trendValue}
        </div>
      )}
    </div>
  );
}
