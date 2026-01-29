import type { ThemeName } from '../_themes';

export type SliderValue = number | [number, number];

export type SliderSize = 'sm' | 'md' | 'lg';

export type SliderColor = 'primary' | 'success' | 'warning' | 'error';

export type SliderOrientation = 'horizontal' | 'vertical';

export interface SliderMark {
  value: number;
  label?: string;
}

export interface SliderProps {
  value?: SliderValue;
  defaultValue?: SliderValue;
  onChange?: (value: SliderValue) => void;
  min?: number;
  max?: number;
  step?: number;
  size?: SliderSize;
  theme?: ThemeName;
  color?: SliderColor;
  disabled?: boolean;
  showValue?: boolean;
  marks?: SliderMark[];
  orientation?: SliderOrientation;
  className?: string;
  label?: string;
}
