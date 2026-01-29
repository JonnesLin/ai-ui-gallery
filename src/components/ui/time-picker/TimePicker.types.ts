import type { ThemeName } from '../_themes/types';

export type TimeFormat = '12h' | '24h';
export type Period = 'AM' | 'PM';

export interface TimeValue {
  hour: number;
  minute: number;
  period?: Period;
}

export interface TimePickerProps {
  theme: ThemeName;
  value?: TimeValue;
  onChange?: (value: TimeValue) => void;
  format?: TimeFormat;
  minuteStep?: number;
  disabled?: boolean;
  className?: string;
}
