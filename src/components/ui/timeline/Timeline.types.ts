import type { ThemeName } from '../_themes/types';
import type { ReactNode } from 'react';

export type TimelineMode = 'left' | 'right' | 'alternate';
export type TimelineColor = 'primary' | 'success' | 'warning' | 'error' | 'gray';

export interface TimelineProps {
  theme?: ThemeName;
  mode?: TimelineMode;
  pending?: boolean;
  pendingDot?: ReactNode;
  className?: string;
  children: ReactNode;
}

export interface TimelineItemProps {
  dot?: ReactNode;
  color?: TimelineColor;
  label?: ReactNode;
  className?: string;
  children: ReactNode;
}

export interface TimelineDotProps {
  color?: TimelineColor;
  className?: string;
  children?: ReactNode;
}

export interface TimelineContentProps {
  className?: string;
  children: ReactNode;
}

export interface TimelineContextValue {
  theme: ThemeName;
  mode: TimelineMode;
}
