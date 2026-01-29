import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { CardProps, CardVariant } from './Card.types';

function getVariantStyles(variant: CardVariant, themeName: string): string {
  const theme = getTheme(themeName as any);

  switch (variant) {
    case 'elevated':
      return cn(
        theme.base.background,
        theme.base.shadow,
        theme.base.radius
      );
    case 'outlined':
      return cn(
        'bg-transparent',
        theme.base.border,
        theme.base.radius
      );
    case 'filled':
      return cn(
        theme.variants.secondary.background,
        theme.base.radius
      );
  }
}

function getPaddingClass(padding: string): string {
  switch (padding) {
    case 'none':
      return '';
    case 'sm':
      return 'p-4';
    case 'md':
      return 'p-6';
    case 'lg':
      return 'p-8';
    default:
      return '';
  }
}

export function Card({
  theme = 'minimalist',
  variant = 'elevated',
  padding = 'none',
  hoverable = false,
  clickable = false,
  onClick,
  className,
  children,
}: CardProps) {
  const themeConfig = getTheme(theme as any);

  const baseStyles = cn(
    getVariantStyles(variant, theme),
    getPaddingClass(padding),
    themeConfig.base.text,
    themeConfig.states.hover,
    hoverable && 'hover:scale-[1.02]',
    clickable && 'cursor-pointer',
    className
  );

  return (
    <div className={baseStyles} onClick={onClick}>
      {children}
    </div>
  );
}
