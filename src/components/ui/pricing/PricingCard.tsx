import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { PricingCardProps } from './types';

export function PricingCard({
  theme,
  featured = false,
  popular = false,
  disabled = false,
  className,
  children
}: PricingCardProps) {
  const themeConfig = getTheme(theme);

  const baseStyles = cn(
    'relative p-8',
    themeConfig.base.background,
    themeConfig.base.border,
    themeConfig.base.shadow,
    themeConfig.base.radius,
    themeConfig.states.hover
  );

  const featuredStyles = featured ? 'ring-2 ring-offset-2 ring-current' : '';
  const popularStyles = popular ? 'scale-105 z-10' : '';
  const disabledStyles = disabled ? themeConfig.states.disabled : '';

  return (
    <div className={cn(baseStyles, featuredStyles, popularStyles, disabledStyles, className)}>
      {children}
    </div>
  );
}
