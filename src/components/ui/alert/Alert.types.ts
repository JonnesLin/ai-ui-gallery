import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps {
  type: AlertType;
  theme: ThemeName;
  title: string;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

export interface AlertStyleConfig {
  container: string;
  iconWrapper: string;
  icon: string;
  title: string;
  description: string;
  closeButton: string;
}
