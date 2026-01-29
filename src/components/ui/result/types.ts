import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500';

export interface ResultProps {
  theme: ThemeName;
  status: ResultStatus;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  extra?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export interface ResultIconProps {
  status: ResultStatus;
  className?: string;
}
