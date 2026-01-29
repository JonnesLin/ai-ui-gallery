import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { PricingHeaderProps } from './types';

export function PricingHeader({
  theme,
  name,
  description,
  popular = false,
  featured = false,
  className
}: PricingHeaderProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn('space-y-2', className)}>
      {(popular || featured) && (
        <span className={cn(
          'inline-block text-xs font-semibold uppercase tracking-wider',
          themeConfig.variants.primary.text
        )}>
          {popular ? 'Most Popular' : 'Featured'}
        </span>
      )}
      <h3 className={cn('text-xl font-semibold', themeConfig.base.text)}>
        {name}
      </h3>
      {description && (
        <p className={cn('text-sm opacity-70', themeConfig.base.text)}>
          {description}
        </p>
      )}
    </div>
  );
}
