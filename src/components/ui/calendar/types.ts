import type { ThemeName } from '../_themes/types';

export type CalendarMode = 'single' | 'range' | 'multiple';
export type WeekStartsOn = 0 | 1;

export interface CalendarDate {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  isInRange?: boolean;
}

export interface CalendarGrid {
  year: number;
  month: number;
  weeks: CalendarDate[][];
}

export interface CalendarProps {
  value?: Date | Date[];
  defaultValue?: Date | Date[];
  onChange?: (date: Date | Date[]) => void;
  mode?: CalendarMode;
  theme?: ThemeName;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[] | ((date: Date) => boolean);
  weekStartsOn?: WeekStartsOn;
  showWeekNumbers?: boolean;
  className?: string;
}

export interface CalendarState {
  currentMonth: Date;
  selectedDates: Date[];
}
