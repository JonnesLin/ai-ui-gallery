import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes/types';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  theme: ThemeName;
  size?: ModalSize;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  centered?: boolean;
  children: ReactNode;
}

export interface ModalHeaderProps {
  theme: ThemeName;
  onClose?: () => void;
  children: ReactNode;
}

export interface ModalContentProps {
  theme: ThemeName;
  children: ReactNode;
}

export interface ModalFooterProps {
  theme: ThemeName;
  children: ReactNode;
}
