import type { ThemeName, ComponentSize } from '../_themes/types';
import type { ReactNode } from 'react';

export type PageItem = number | 'ellipsis';

export interface PaginationProps {
  total: number;
  pageSize: number;
  current: number;
  onChange: (page: number) => void;
  theme: ThemeName;
  size?: ComponentSize;
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  showTotal?: boolean | ((total: number, range: [number, number]) => ReactNode);
  disabled?: boolean;
  siblingCount?: number;
  className?: string;
}

export interface UsePaginationParams {
  total: number;
  pageSize: number;
  current: number;
  siblingCount: number;
}

export interface UsePaginationResult {
  pages: PageItem[];
  totalPages: number;
  canGoToPrev: boolean;
  canGoToNext: boolean;
  goToPage: (page: number) => void;
  goToPrev: () => void;
  goToNext: () => void;
  goToFirst: () => void;
  goToLast: () => void;
}
