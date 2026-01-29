import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export interface CarouselSlide {
  id: string | number;
  content: ReactNode;
}

export interface CarouselProps {
  slides: CarouselSlide[];
  theme: ThemeName;
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
  showIndicators?: boolean;
  showControls?: boolean;
  slidesPerView?: number;
  gap?: number;
  className?: string;
}

export interface CarouselControlsProps {
  theme: ThemeName;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  className?: string;
}

export interface CarouselIndicatorsProps {
  theme: ThemeName;
  total: number;
  current: number;
  onChange: (index: number) => void;
  className?: string;
}

export interface CarouselSlideProps {
  theme: ThemeName;
  isActive: boolean;
  children: ReactNode;
  className?: string;
}
