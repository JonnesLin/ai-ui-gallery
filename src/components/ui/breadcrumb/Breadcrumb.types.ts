import type { ThemeName } from '../_themes/types';
import type { HTMLAttributes, ReactNode } from 'react';

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  theme: ThemeName;
  separator?: ReactNode;
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
}

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  icon?: ReactNode;
  current?: boolean;
}

export interface BreadcrumbSeparatorProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}
