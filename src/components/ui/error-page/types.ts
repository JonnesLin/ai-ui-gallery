import type { ReactNode } from 'react';

export type ErrorCode = '404' | '500' | '403' | string;

export interface ErrorPageBaseProps {
  code: ErrorCode;
  title: string;
  description: string;
  illustration?: ReactNode;
  actions?: ReactNode;
  showHomeButton?: boolean;
  showBackButton?: boolean;
  className?: string;
  onHomeClick?: () => void;
  onBackClick?: () => void;
}
