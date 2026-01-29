import type { ThemeName } from '../_themes/types';

export type DatePickerSize = 'sm' | 'md' | 'lg';

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  theme?: ThemeName;
  format?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  clearable?: boolean;
  size?: DatePickerSize;
  className?: string;
}
