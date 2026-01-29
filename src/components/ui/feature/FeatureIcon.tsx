import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { FeatureIconProps } from './types';

export function FeatureIcon({ theme, children, className }: FeatureIconProps) {
  const themeConfig = getTheme(theme);

  return (
    <div
      className={cn(
        'flex items-center justify-center mb-4',
        themeConfig.base.background,
        themeConfig.base.border,
        themeConfig.base.radius,
        themeConfig.base.shadow,
        className
      )}
    >
      {children}
    </div>
  );
}
