import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes/types';

export type NavbarPosition = 'static' | 'fixed' | 'sticky';
export type NavbarMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export type NavbarContentPosition = 'left' | 'center' | 'right';

export interface NavbarProps {
  children: ReactNode;
  theme: ThemeName;
  position?: NavbarPosition;
  maxWidth?: NavbarMaxWidth;
  bordered?: boolean;
  blurred?: boolean;
  height?: string;
  className?: string;
}

export interface NavbarBrandProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export interface NavbarContentProps {
  children: ReactNode;
  position?: NavbarContentPosition;
  hideOnMobile?: boolean;
  className?: string;
}

export interface NavbarItemProps {
  children: ReactNode;
  href?: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface NavbarMenuProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

export interface NavbarMenuToggleProps {
  isOpen: boolean;
  onChange: (isOpen: boolean) => void;
  className?: string;
}
