import type { ThemeName } from '../_themes/types';
import type { ReactNode } from 'react';

export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export interface PopoverProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: PopoverPlacement;
  theme?: ThemeName;
  arrow?: boolean;
  offset?: number;
}

export interface PopoverTriggerProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface PopoverContentProps {
  children: ReactNode;
  className?: string;
  closeOnClickOutside?: boolean;
  arrowClassName?: string;
  arrowStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

export interface PopoverContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  placement: PopoverPlacement;
  theme: ThemeName;
  arrow: boolean;
  offset: number;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
}
