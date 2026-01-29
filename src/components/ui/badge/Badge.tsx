import type { BadgeProps } from './Badge.types';
import { getBadgeStyles } from './Badge.config';
import { cn } from '../_shared/utils';

export function Badge({
  variant = 'outlined',
  color = 'default',
  size = 'sm',
  theme,
  rounded = 'md',
  removable = false,
  onRemove,
  icon,
  dot = false,
  dotColor,
  dotAnimate = false,
  children,
  className,
}: BadgeProps) {
  const styles = getBadgeStyles(theme, variant, color, size, rounded);

  const containerClasses = cn(
    'inline-flex items-center gap-1.5 font-medium transition-colors',
    styles.container,
    styles.text,
    styles.size,
    styles.rounded,
    className
  );

  const dotClasses = cn(
    'w-1.5 h-1.5 rounded-full',
    dotColor || styles.dot,
    dotAnimate && 'animate-pulse'
  );

  const removeButtonClasses = cn(
    'transition-colors',
    styles.removeButton
  );

  const iconSize = size === 'xs' ? 'w-3 h-3' : size === 'sm' ? 'w-3.5 h-3.5' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <span className={containerClasses}>
      {dot && <span className={dotClasses} />}
      {icon && <span className={iconSize}>{icon}</span>}
      {children}
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className={removeButtonClasses}
          aria-label="Remove"
        >
          <svg className={iconSize} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
}
