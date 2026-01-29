import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

export interface DropdownContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  theme: ThemeName;
  placement: DropdownPlacement;
  triggerId: string;
  menuId: string;
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
  itemsCount: number;
  registerItem: () => number;
  unregisterItem: (index: number) => void;
}

export interface DropdownProps {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  theme?: ThemeName;
  placement?: DropdownPlacement;
}

export interface DropdownTriggerProps {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export interface DropdownMenuProps {
  children: ReactNode;
  className?: string;
}

export interface DropdownItemProps {
  children: ReactNode;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface DropdownDividerProps {
  className?: string;
}
