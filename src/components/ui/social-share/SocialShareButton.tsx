'use client';

import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { buildShareUrl, platformIcons, platformLabels, platformColors } from './constants.tsx';
import type { SocialShareButtonProps } from './types';

export function SocialShareButton({
  platform,
  url,
  title,
  description,
  theme: themeName,
  variant,
  size,
  className,
}: SocialShareButtonProps) {
  const theme = getTheme(themeName);
  const Icon = platformIcons[platform];
  const label = platformLabels[platform];
  const colors = platformColors[platform];
  const shareUrl = buildShareUrl(platform, { url, title, description });

  const sizeClasses: Record<typeof size, string> = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const iconSizes: Record<typeof size, string> = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const variantClasses: Record<typeof variant, string> = {
    icon: cn(
      'inline-flex items-center justify-center',
      'rounded-full',
      'text-white',
      colors.bg,
      colors.hover,
      'transition-colors duration-200',
      sizeClasses[size]
    ),
    button: cn(
      'inline-flex items-center gap-2 px-4 py-2',
      theme.base.radius,
      'text-white font-semibold',
      colors.bg,
      colors.hover,
      'transition-colors duration-200'
    ),
    text: cn(
      'inline-flex items-center gap-2',
      'text-gray-600 hover:text-gray-900',
      'transition-colors duration-200'
    ),
  };

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(variantClasses[variant], className)}
      aria-label={`Share on ${label}`}
      title={`Share on ${label}`}
    >
      <Icon className={iconSizes[size]} />
      {(variant === 'button' || variant === 'text') && <span>{label}</span>}
    </a>
  );
}
