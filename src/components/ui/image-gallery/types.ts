import type { ThemeName } from '../_themes';

export interface ImageData {
  src: string;
  alt: string;
  thumbnail?: string;
}

export type GalleryColumns = 2 | 3 | 4 | 5;
export type GalleryGap = 'sm' | 'md' | 'lg';
export type GalleryAspectRatio = 'square' | '4/3' | '16/9' | 'auto';

export interface ImageGalleryProps {
  images: ImageData[];
  theme: ThemeName;
  columns?: GalleryColumns;
  gap?: GalleryGap;
  aspectRatio?: GalleryAspectRatio;
  lightbox?: boolean;
  masonry?: boolean;
  className?: string;
}

export interface ImageGalleryItemProps {
  image: ImageData;
  index: number;
  theme: ThemeName;
  aspectRatio: GalleryAspectRatio;
  onClick: () => void;
}

export interface ImageGalleryLightboxProps {
  image: ImageData;
  currentIndex: number;
  totalImages: number;
  theme: ThemeName;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}
