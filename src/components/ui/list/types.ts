import type { ThemeName } from '../_themes/types';
import type { ReactNode } from 'react';

export type ListVariant = 'simple' | 'bordered' | 'divided';
export type ListSize = 'sm' | 'md' | 'lg';

export interface ListProps {
  theme: ThemeName;
  variant?: ListVariant;
  size?: ListSize;
  hoverable?: boolean;
  className?: string;
  children: ReactNode;
}

export interface ListItemProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export interface ListItemIconProps {
  className?: string;
  children: ReactNode;
}

export interface ListItemTextProps {
  className?: string;
  children?: ReactNode;
  primary?: string;
  secondary?: string;
}

export interface ListItemActionProps {
  className?: string;
  children: ReactNode;
}
