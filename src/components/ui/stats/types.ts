import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes/types';

export type StatsLayout = 'horizontal' | 'vertical' | 'grid';
export type StatsColumns = 2 | 3 | 4;

export interface StatItemData {
  label: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  trend?: 'up' | 'down';
  trendValue?: string;
}

export interface StatItemProps extends StatItemData {
  theme: ThemeName;
}

export interface StatsProps {
  theme: ThemeName;
  layout: StatsLayout;
  columns?: StatsColumns;
  items: StatItemData[];
  className?: string;
}
