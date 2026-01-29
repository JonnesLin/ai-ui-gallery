'use client';

import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { SocialShareButton } from './SocialShareButton';
import type { SocialShareProps } from './types';

export function SocialShare({
  url,
  title,
  description,
  platforms,
  theme: themeName,
  variant = 'icon',
  size = 'md',
  showCount = false,
  className,
}: SocialShareProps) {
  const theme = getTheme(themeName);

  if (platforms.length === 0) {
    throw new Error('SocialShare: platforms array cannot be empty');
  }

  if (!url) {
    throw new Error('SocialShare: url is required');
  }

  if (!title) {
    throw new Error('SocialShare: title is required');
  }

  if (!description) {
    throw new Error('SocialShare: description is required');
  }

  const gapClasses: Record<typeof size, string> = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4',
  };

  return (
    <div className={cn('flex items-center', gapClasses[size], className)}>
      {platforms.map((platform) => (
        <SocialShareButton
          key={platform}
          platform={platform}
          url={url}
          title={title}
          description={description}
          theme={themeName}
          variant={variant}
          size={size}
          showCount={showCount}
        />
      ))}
    </div>
  );
}
