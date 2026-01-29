import type { ThemeConfig } from '../../_themes/types';
import type { DarkMode, DarkModeSize } from '../types';

export interface VariantProps {
  theme: ThemeConfig;
  mode: DarkMode;
  effectiveMode: 'light' | 'dark';
  onChange: (mode: DarkMode) => void;
  size: DarkModeSize;
  showLabel: boolean;
  className?: string;
}
