import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToastProps {
  id: string;
  type: ToastType;
  theme: ThemeName;
  title: string;
  description?: string;
  duration?: number;
  closable?: boolean;
  action?: ReactNode;
  position?: ToastPosition;
  onClose?: () => void;
}

export interface ToastContainerProps {
  position: ToastPosition;
  toasts: ToastProps[];
  onClose: (id: string) => void;
}

export interface ToastThemeStyles {
  container: string;
  icon: string;
  iconBackground: string;
  title: string;
  description: string;
  closeButton: string;
}

export interface ToastThemeConfig {
  info: ToastThemeStyles;
  success: ToastThemeStyles;
  warning: ToastThemeStyles;
  error: ToastThemeStyles;
  animation: string;
}
