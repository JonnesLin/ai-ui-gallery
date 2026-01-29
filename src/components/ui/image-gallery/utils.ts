import type { GalleryColumns, GalleryGap, GalleryAspectRatio } from './types';

export function getColumnsClass(columns: GalleryColumns): string {
  const map: Record<GalleryColumns, string> = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
  };
  return map[columns];
}

export function getGapClass(gap: GalleryGap): string {
  const map: Record<GalleryGap, string> = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };
  return map[gap];
}

export function getAspectRatioClass(aspectRatio: GalleryAspectRatio): string {
  const map: Record<GalleryAspectRatio, string> = {
    square: 'aspect-square',
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-video',
    auto: '',
  };
  return map[aspectRatio];
}
