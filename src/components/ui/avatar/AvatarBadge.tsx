import { cn } from '../_shared/utils';
import type { AvatarBadgeProps } from './Avatar.types';

const statusColors = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  away: 'bg-yellow-400',
  busy: 'bg-red-500',
};

const badgeSizeClasses = {
  xs: 'w-2 h-2',
  sm: 'w-2.5 h-2.5',
  md: 'w-2.5 h-2.5',
  lg: 'w-3.5 h-3.5',
  xl: 'w-4 h-4',
  '2xl': 'w-5 h-5',
};

export function AvatarBadge({
  status,
  size = 'md',
  theme,
  className,
}: AvatarBadgeProps) {
  const isDarkTheme = theme === 'dark' || theme === 'cyberpunk';
  const borderColor = isDarkTheme ? 'border-gray-950' : 'border-white';

  return (
    <span
      className={cn(
        'absolute bottom-0 right-0 rounded-full border-2',
        statusColors[status],
        badgeSizeClasses[size],
        borderColor,
        className
      )}
    />
  );
}
