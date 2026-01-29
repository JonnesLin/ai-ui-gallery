import { useState } from 'react';
import { cn } from '../_shared/utils';
import type { AvatarProps } from './Avatar.types';
import { AvatarBadge } from './AvatarBadge';

const sizeClasses = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-base',
  xl: 'w-20 h-20 text-lg',
  '2xl': 'w-28 h-28 text-2xl',
};

const variantClasses = {
  circle: 'rounded-full',
  square: 'rounded-none',
  rounded: 'rounded-md',
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) {
    throw new Error('Name cannot be empty');
  }
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 65%, 50%)`;
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  variant = 'circle',
  theme,
  status,
  showBorder = false,
  color,
  className,
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const showInitials = (!src || imageError) && name;
  const initials = showInitials ? getInitials(name) : null;
  const backgroundColor = color || (name ? stringToColor(name) : undefined);

  const baseClasses = cn(
    'relative inline-flex items-center justify-center font-medium overflow-hidden',
    sizeClasses[size],
    variantClasses[variant],
    showBorder && 'ring-2 ring-white',
    className
  );

  return (
    <div className="relative inline-block">
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          className={baseClasses}
          onError={() => setImageError(true)}
        />
      ) : showInitials ? (
        <div
          className={cn(baseClasses, 'text-white')}
          style={{ backgroundColor }}
        >
          {initials}
        </div>
      ) : (
        <div className={cn(baseClasses, 'bg-gray-200 text-gray-500')}>
          <svg
            className="w-1/2 h-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      )}
      {status && <AvatarBadge status={status} size={size} theme={theme} />}
    </div>
  );
}
