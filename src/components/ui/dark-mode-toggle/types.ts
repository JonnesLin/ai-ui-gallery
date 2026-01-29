import type { ThemeName } from '../_themes/types';

export type DarkMode = 'light' | 'dark' | 'system';

export type DarkModeVariant = 'switch' | 'button' | 'dropdown';

export type DarkModeSize = 'sm' | 'md' | 'lg';

export interface DarkModeToggleProps {
  theme: ThemeName;
  mode: DarkMode;
  onChange: (mode: DarkMode) => void;
  variant?: DarkModeVariant;
  size?: DarkModeSize;
  showLabel?: boolean;
  className?: string;
}
