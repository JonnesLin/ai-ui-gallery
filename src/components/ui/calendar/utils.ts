import type { CalendarDate, CalendarGrid, WeekStartsOn } from './types';

export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function isToday(date: Date): boolean {
  return isSameDay(date, new Date());
}

export function isDateDisabled(
  date: Date,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: Date[] | ((date: Date) => boolean)
): boolean {
  if (minDate && date < minDate) return true;
  if (maxDate && date > maxDate) return true;

  if (!disabledDates) return false;

  if (typeof disabledDates === 'function') {
    return disabledDates(date);
  }

  return disabledDates.some(disabledDate => isSameDay(date, disabledDate));
}

export function isDateSelected(
  date: Date,
  selectedDates: Date[]
): boolean {
  return selectedDates.some(selected => isSameDay(date, selected));
}

export function isDateInRange(
  date: Date,
  rangeStart?: Date,
  rangeEnd?: Date
): boolean {
  if (!rangeStart || !rangeEnd) return false;
  return date >= rangeStart && date <= rangeEnd;
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number, weekStartsOn: WeekStartsOn): number {
  const firstDay = new Date(year, month, 1).getDay();
  if (weekStartsOn === 1) {
    return firstDay === 0 ? 6 : firstDay - 1;
  }
  return firstDay;
}

export function buildCalendarGrid(
  year: number,
  month: number,
  selectedDates: Date[],
  weekStartsOn: WeekStartsOn,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: Date[] | ((date: Date) => boolean)
): CalendarGrid {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month, weekStartsOn);

  const dates: CalendarDate[] = [];

  // Previous month padding
  const prevMonthDays = getDaysInMonth(year, month - 1);
  for (let i = firstDay - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, prevMonthDays - i);
    dates.push({
      date,
      day: date.getDate(),
      isCurrentMonth: false,
      isToday: isToday(date),
      isSelected: isDateSelected(date, selectedDates),
      isDisabled: isDateDisabled(date, minDate, maxDate, disabledDates),
    });
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    dates.push({
      date,
      day,
      isCurrentMonth: true,
      isToday: isToday(date),
      isSelected: isDateSelected(date, selectedDates),
      isDisabled: isDateDisabled(date, minDate, maxDate, disabledDates),
    });
  }

  // Next month padding to complete the last week
  const remainingDays = 7 - (dates.length % 7);
  if (remainingDays < 7) {
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day);
      dates.push({
        date,
        day,
        isCurrentMonth: false,
        isToday: isToday(date),
        isSelected: isDateSelected(date, selectedDates),
        isDisabled: isDateDisabled(date, minDate, maxDate, disabledDates),
      });
    }
  }

  // Convert to weeks
  const weeks: CalendarDate[][] = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }

  return { year, month, weeks };
}

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const DAY_NAMES_SUNDAY_START = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const DAY_NAMES_MONDAY_START = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function getDayNames(weekStartsOn: WeekStartsOn): string[] {
  return weekStartsOn === 1 ? DAY_NAMES_MONDAY_START : DAY_NAMES_SUNDAY_START;
}
