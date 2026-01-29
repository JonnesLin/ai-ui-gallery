'use client';

import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { getAspectRatioClass } from './utils';
import type { ImageGalleryItemProps } from './types';

export function ImageGalleryItem({
  image,
  index,
  theme,
  aspectRatio,
  onClick,
}: ImageGalleryItemProps) {
  const themeConfig = getTheme(theme);
  const imageSrc = image.thumbnail || image.src;

  return (
    <div
      onClick={onClick}
      className={cn(
        'group cursor-pointer',
        themeConfig.states.hover
      )}
    >
      <div
        className={cn(
          'overflow-hidden',
          getAspectRatioClass(aspectRatio),
          themeConfig.base.radius,
          themeConfig.base.border,
          themeConfig.states.hover
        )}
      >
        <img
          src={imageSrc}
          alt={image.alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  );
}
