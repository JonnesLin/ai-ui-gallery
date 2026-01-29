import type { ReactNode, HTMLAttributes } from 'react';
import type { ThemeName } from '../_themes';

export type TagVariant = 'solid' | 'soft' | 'outlined';
export type TagColor = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type TagSize = 'xs' | 'sm' | 'md' | 'lg';
export type TagRounded = 'sm' | 'md' | 'lg' | 'full';

export interface TagProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  variant?: TagVariant;
  color?: TagColor;
  size?: TagSize;
  theme: ThemeName;
  rounded?: TagRounded;
  closable?: boolean;
  onClose?: () => void;
  icon?: ReactNode;
  clickable?: boolean;
  children: ReactNode;
}
