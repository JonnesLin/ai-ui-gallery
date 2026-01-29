import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export interface DashboardLayoutProps {
  theme: ThemeName;
  sidebarCollapsed: boolean;
  onSidebarCollapse: (collapsed: boolean) => void;
  children: ReactNode;
  sidebar?: ReactNode;
  header?: ReactNode;
}

export interface DashboardHeaderProps {
  theme: ThemeName;
  title: string;
  actions?: ReactNode;
}

export interface DashboardSidebarProps {
  theme: ThemeName;
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  title?: string;
  children: ReactNode;
}

export interface DashboardContentProps {
  theme: ThemeName;
  children: ReactNode;
}

export type TrendDirection = 'up' | 'down';

export interface DashboardCardProps {
  theme: ThemeName;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  value: string | number;
  trend?: TrendDirection;
  trendValue?: string;
}
