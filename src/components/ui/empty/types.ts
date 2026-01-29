import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export type EmptySize = 'sm' | 'md' | 'lg';

export interface EmptyProps {
  theme: ThemeName;
  image?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  size?: EmptySize;
  className?: string;
}

export interface EmptyThemeStyles {
  container: string;
  imageWrapper: string;
  imageSize: string;
  title: string;
  description: string;
}
