import type { CSSProperties, ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export type TabsOrientation = 'horizontal' | 'vertical';

export type TabsVariant =
  | 'underline'
  | 'pills'
  | 'enclosed'
  | 'soft';

export interface TabsContextValue {
  value: string;
  onChange: (value: string) => void;
  orientation: TabsOrientation;
}

export interface TabsProps {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  variant?: TabsVariant;
  theme?: ThemeName;
  orientation?: TabsOrientation;
  className?: string;
  children: ReactNode;
}

export interface TabListProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export interface TabProps {
  value: string;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  children: ReactNode;
}

export interface TabPanelsProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export interface TabPanelProps {
  value: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}
