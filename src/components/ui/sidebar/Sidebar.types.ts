import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes/types';

export interface SidebarContextValue {
  collapsed: boolean;
  theme: ThemeName;
}

export interface SidebarProps {
  children: ReactNode;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  theme?: ThemeName;
  width?: string;
  collapsedWidth?: string;
  position?: 'left' | 'right';
  className?: string;
}

export interface SidebarHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface SidebarContentProps {
  children: ReactNode;
  className?: string;
}

export interface SidebarFooterProps {
  children: ReactNode;
  className?: string;
}

export interface SidebarItemProps {
  icon?: ReactNode;
  children?: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface SidebarGroupProps {
  title?: string;
  children: ReactNode;
  className?: string;
}
