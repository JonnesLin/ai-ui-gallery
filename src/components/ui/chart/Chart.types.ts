import type { ThemeName } from '../_themes/types';
import type { HTMLAttributes } from 'react';

export type ChartType = 'bar' | 'line' | 'pie' | 'donut' | 'horizontalBar';

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface ChartProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  theme: ThemeName;
  type: ChartType;
  data: ChartDataPoint[];
  title?: string;
  subtitle?: string;
  showLegend?: boolean;
  showGrid?: boolean;
  showLabels?: boolean;
  height?: number;
}
