import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'right';

export type TooltipTrigger = 'hover' | 'click' | 'focus';

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  placement?: TooltipPlacement;
  theme?: ThemeName;
  delay?: number;
  arrow?: boolean;
  trigger?: TooltipTrigger;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export interface TooltipContentProps {
  content: ReactNode;
  placement: TooltipPlacement;
  theme: ThemeName;
  arrow: boolean;
  isOpen: boolean;
}
