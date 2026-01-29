import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes/types';

export type FeatureLayout = 'horizontal' | 'vertical' | 'centered';

export type FeatureGridColumns = 2 | 3 | 4;

export type FeatureGridGap = 'sm' | 'md' | 'lg';

export interface FeatureLink {
  href: string;
  label: string;
}

export interface FeatureProps {
  theme: ThemeName;
  layout: FeatureLayout;
  icon: ReactNode;
  title: string;
  description: string;
  link?: FeatureLink;
  className?: string;
}

export interface FeatureIconProps {
  theme: ThemeName;
  children: ReactNode;
  className?: string;
}

export interface FeatureGridProps {
  children: ReactNode;
  columns: FeatureGridColumns;
  gap: FeatureGridGap;
  className?: string;
}
