import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ListProps, ListVariant, ListSize } from './types';

const variantStyles: Record<ListVariant, string> = {
  simple: '',
  bordered: 'border rounded-lg overflow-hidden',
  divided: 'divide-y',
};

const sizeStyles: Record<ListSize, string> = {
  sm: 'space-y-1',
  md: 'space-y-2',
  lg: 'space-y-3',
};

export function List({
  theme,
  variant = 'simple',
  size = 'md',
  hoverable = false,
  className,
  children,
}: ListProps) {
  const themeConfig = getTheme(theme);

  const baseStyles = cn(
    'list-none',
    themeConfig.base.background,
    variantStyles[variant],
    variant !== 'divided' && sizeStyles[size]
  );

  return (
    <ul className={cn(baseStyles, className)} data-hoverable={hoverable}>
      {children}
    </ul>
  );
}
