import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ProductGalleryProps } from './types';

export function ProductGallery({ theme, images }: ProductGalleryProps) {
  const themeConfig = getTheme(theme);

  return (
    <div
      className={cn(
        'aspect-square',
        themeConfig.base.background,
        themeConfig.base.shadow,
        themeConfig.base.radius
      )}
    >
      {images && images.length > 0 ? (
        <img
          src={images[0]}
          alt="Product"
          className="w-full h-full object-cover"
        />
      ) : null}
    </div>
  );
}
