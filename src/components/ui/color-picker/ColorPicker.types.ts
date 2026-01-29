import type { ThemeName } from '../_themes/types';
import type { HTMLAttributes } from 'react';

export interface ColorPickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Theme name - required, no default value */
  theme: ThemeName;
  /** Current color value in hex format */
  value?: string;
  /** Callback when color changes */
  onChange?: (color: string) => void;
  /** Preset color swatches */
  presetColors?: string[];
  /** Show opacity slider */
  showOpacity?: boolean;
  /** Show RGB inputs */
  showRgbInputs?: boolean;
  /** Show preset swatches */
  showSwatches?: boolean;
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
}

export interface RgbaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface HsvaColor {
  h: number;
  s: number;
  v: number;
  a: number;
}
