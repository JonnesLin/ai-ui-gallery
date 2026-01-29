import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export type BadgeVariant = 'solid' | 'soft' | 'outlined' | 'dot';
export type BadgeColor = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';
export type BadgeRounded = 'sm' | 'md' | 'lg' | 'full';

export interface BadgeProps {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  theme: ThemeName;
  rounded?: BadgeRounded;
  removable?: boolean;
  onRemove?: () => void;
  icon?: ReactNode;
  dot?: boolean;
  dotColor?: string;
  dotAnimate?: boolean;
  children: ReactNode;
  className?: string;
}

export interface BadgeStyleConfig {
  container: string;
  text: string;
  dot?: string;
  removeButton?: string;
}
