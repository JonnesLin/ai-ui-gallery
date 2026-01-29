import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes/types';

export type StatisticSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type StatisticTrend = 'up' | 'down';
export type StatisticLayout = 'vertical' | 'horizontal';

export interface StatisticProps {
  title: string;
  value: number | string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  precision?: number;
  theme?: ThemeName;
  size?: StatisticSize;
  trend?: StatisticTrend;
  trendValue?: string;
  icon?: ReactNode;
  loading?: boolean;
  layout?: StatisticLayout;
  className?: string;
}
