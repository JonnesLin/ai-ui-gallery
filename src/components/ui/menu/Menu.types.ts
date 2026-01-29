import type { ReactNode, HTMLAttributes } from 'react';
import type { ThemeName } from '../_themes/types';

export type MenuMode = 'vertical' | 'horizontal' | 'inline';

export interface MenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  mode?: MenuMode;
  theme: ThemeName;
  collapsed?: boolean;
  selectedKeys?: string[];
  openKeys?: string[];
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  onSelect?: (key: string) => void;
  onOpenChange?: (openKeys: string[]) => void;
  children: ReactNode;
}

export interface MenuItemProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  itemKey?: string;
  icon?: ReactNode;
  disabled?: boolean;
  danger?: boolean;
  children: ReactNode;
}

export interface MenuGroupProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
}

export interface SubMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  itemKey?: string;
  title: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  children: ReactNode;
}

export interface MenuContextValue {
  mode: MenuMode;
  theme: ThemeName;
  collapsed: boolean;
  selectedKeys: string[];
  openKeys: string[];
  onSelect: (key: string) => void;
  onOpenChange: (key: string) => void;
}
