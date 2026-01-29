import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export type HeroLayout = 'centered' | 'left' | 'right' | 'split';
export type HeroHeight = 'auto' | 'screen' | 'half';

export interface HeroProps {
  theme: ThemeName;
  layout?: HeroLayout;
  height?: HeroHeight;
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children: ReactNode;
  className?: string;
}

export interface HeroTitleProps {
  children: ReactNode;
  className?: string;
}

export interface HeroSubtitleProps {
  children: ReactNode;
  className?: string;
}

export interface HeroActionsProps {
  children: ReactNode;
  className?: string;
}

export interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}
