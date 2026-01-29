import type { ThemeName } from '../_themes/types';
import type { ReactNode } from 'react';

export type CTALayout = 'centered' | 'left' | 'split';
export type CTAVariant = 'simple' | 'card' | 'banner';

export interface CTAProps {
  theme: ThemeName;
  layout?: CTALayout;
  variant?: CTAVariant;
  backgroundImage?: string;
  className?: string;
  children: ReactNode;
}

export interface CTATitleProps {
  children: ReactNode;
  className?: string;
}

export interface CTADescriptionProps {
  children: ReactNode;
  className?: string;
}

export interface CTAActionsProps {
  children: ReactNode;
  className?: string;
}
