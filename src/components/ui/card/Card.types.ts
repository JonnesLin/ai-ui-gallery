import type { ThemeName } from '../_themes/types';
import type { ReactNode } from 'react';

export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardBaseProps {
  theme?: ThemeName;
  variant?: CardVariant;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

export interface CardProps extends CardBaseProps {
  padding?: CardPadding;
}

export interface CardSectionProps {
  className?: string;
  children?: ReactNode;
}

export interface CardImageProps extends CardSectionProps {
  src: string;
  alt: string;
  aspectRatio?: '1/1' | '3/2' | '4/3' | '16/9' | '4/5';
}
