import { cn } from '../_shared/utils';
import type { RatingStarProps, RatingSize } from './types';

const sizeStyles: Record<RatingSize, string> = {
  sm: 'w-5 h-5',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

export function RatingStar({
  index,
  fillPercentage,
  size,
  color,
  emptyColor,
  icon,
  emptyIcon,
  onClick,
  onMouseMove,
  onMouseLeave,
  disabled,
  readOnly,
}: RatingStarProps) {
  const gradientId = `rating-gradient-${index}-${Math.random().toString(36).slice(2, 9)}`;
  const isInteractive = !disabled && !readOnly;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      disabled={disabled || readOnly}
      className={cn(
        'relative transition-transform duration-200',
        sizeStyles[size],
        isInteractive && 'hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2',
        disabled && 'opacity-50 cursor-not-allowed',
        readOnly && 'cursor-default'
      )}
      aria-label={`Rate ${index}`}
    >
      {icon || emptyIcon ? (
        <div className={cn('w-full h-full', fillPercentage > 0 ? '' : 'opacity-30')}>
          {fillPercentage > 0 ? icon : emptyIcon || icon}
        </div>
      ) : (
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <defs>
            <linearGradient id={gradientId}>
              <stop offset={`${fillPercentage}%`} stopColor={color} />
              <stop offset={`${fillPercentage}%`} stopColor={emptyColor} />
            </linearGradient>
          </defs>
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill={`url(#${gradientId})`}
            stroke={fillPercentage > 0 ? color : emptyColor}
          />
        </svg>
      )}
    </button>
  );
}
