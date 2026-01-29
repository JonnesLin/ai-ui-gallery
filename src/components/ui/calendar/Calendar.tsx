import { useState, useEffect, useRef } from 'react';
import type { CalendarProps, CalendarDate } from './types';
import { buildCalendarGrid, MONTH_NAMES, getDayNames, isSameDay } from './utils';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

export function Calendar({
  value,
  defaultValue,
  onChange,
  mode = 'single',
  theme = 'minimalist',
  minDate,
  maxDate,
  disabledDates,
  weekStartsOn = 0,
  showWeekNumbers = false,
  className,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    if (value && !Array.isArray(value)) return new Date(value.getFullYear(), value.getMonth(), 1);
    if (defaultValue && !Array.isArray(defaultValue)) return new Date(defaultValue.getFullYear(), defaultValue.getMonth(), 1);
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  });

  const [selectedDates, setSelectedDates] = useState<Date[]>(() => {
    const initialValue = value ?? defaultValue;
    if (!initialValue) return [];
    return Array.isArray(initialValue) ? initialValue : [initialValue];
  });

  const [focusedDate, setFocusedDate] = useState<Date>(() => {
    if (value && !Array.isArray(value)) return value;
    if (defaultValue && !Array.isArray(defaultValue)) return defaultValue;
    return new Date();
  });

  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedDates(Array.isArray(value) ? value : value ? [value] : []);
      if (!Array.isArray(value) && value) {
        setFocusedDate(value);
      }
    }
  }, [value]);

  const themeConfig = getTheme(theme);
  const grid = buildCalendarGrid(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    selectedDates,
    weekStartsOn,
    minDate,
    maxDate,
    disabledDates
  );

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (calendarDate: CalendarDate) => {
    if (calendarDate.isDisabled) return;

    const clickedDate = calendarDate.date;

    if (mode === 'single') {
      const newDates = [clickedDate];
      setSelectedDates(newDates);
      onChange?.(clickedDate);
    } else if (mode === 'multiple') {
      const isAlreadySelected = selectedDates.some(d => isSameDay(d, clickedDate));
      const newDates = isAlreadySelected
        ? selectedDates.filter(d => !isSameDay(d, clickedDate))
        : [...selectedDates, clickedDate];
      setSelectedDates(newDates);
      onChange?.(newDates);
    } else if (mode === 'range') {
      if (selectedDates.length === 0 || selectedDates.length === 2) {
        const newDates = [clickedDate];
        setSelectedDates(newDates);
        onChange?.(newDates);
      } else if (selectedDates.length === 1) {
        const [start] = selectedDates;
        const newDates = clickedDate < start ? [clickedDate, start] : [start, clickedDate];
        setSelectedDates(newDates);
        onChange?.(newDates);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const moveDate = (daysOffset: number) => {
      const newDate = new Date(focusedDate);
      newDate.setDate(newDate.getDate() + daysOffset);

      if (newDate.getMonth() !== currentMonth.getMonth()) {
        setCurrentMonth(new Date(newDate.getFullYear(), newDate.getMonth(), 1));
      }

      setFocusedDate(newDate);
    };

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        moveDate(-1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        moveDate(1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        moveDate(-7);
        break;
      case 'ArrowDown':
        e.preventDefault();
        moveDate(7);
        break;
      case 'PageUp':
        e.preventDefault();
        handlePrevMonth();
        break;
      case 'PageDown':
        e.preventDefault();
        handleNextMonth();
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        const calendarDate = grid.weeks
          .flat()
          .find(d => isSameDay(d.date, focusedDate));
        if (calendarDate) {
          handleDateClick(calendarDate);
        }
        break;
      case 'Home':
        e.preventDefault();
        setFocusedDate(new Date(focusedDate.getFullYear(), focusedDate.getMonth(), 1));
        break;
      case 'End':
        e.preventDefault();
        setFocusedDate(new Date(focusedDate.getFullYear(), focusedDate.getMonth() + 1, 0));
        break;
    }
  };

  const getDayClassName = (calendarDate: CalendarDate): string => {
    const isFocused = isSameDay(calendarDate.date, focusedDate);
    const base = cn(
      'aspect-square flex items-center justify-center text-sm transition-all cursor-pointer',
      themeConfig.base.radius,
      isFocused && 'ring-2 ring-offset-1 ring-current'
    );

    if (calendarDate.isDisabled) {
      return cn(base, themeConfig.states.disabled, 'cursor-not-allowed');
    }

    if (calendarDate.isSelected) {
      return cn(base, themeConfig.variants.primary.background, themeConfig.variants.primary.text);
    }

    if (calendarDate.isToday) {
      return cn(base, themeConfig.variants.secondary.background, themeConfig.variants.secondary.text);
    }

    if (!calendarDate.isCurrentMonth) {
      return cn(base, 'opacity-40', themeConfig.states.hover);
    }

    return cn(base, themeConfig.base.text, themeConfig.states.hover);
  };

  return (
    <div
      ref={calendarRef}
      className={cn('w-full max-w-md', themeConfig.base.background, className)}
      onKeyDown={handleKeyDown}
      role="application"
      aria-label="Calendar"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className={cn(
            'p-2 rounded-lg transition-colors',
            themeConfig.states.hover
          )}
          aria-label="Previous month"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="text-center">
          <h2 className={cn('text-lg font-semibold', themeConfig.base.text)}>
            {MONTH_NAMES[currentMonth.getMonth()]}
          </h2>
          <p className={cn('text-sm opacity-60', themeConfig.base.text)}>
            {currentMonth.getFullYear()}
          </p>
        </div>

        <button
          onClick={handleNextMonth}
          className={cn(
            'p-2 rounded-lg transition-colors',
            themeConfig.states.hover
          )}
          aria-label="Next month"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {getDayNames(weekStartsOn).map((dayName) => (
          <div
            key={dayName}
            className={cn(
              'text-center text-xs font-medium py-2',
              themeConfig.base.text,
              'opacity-60'
            )}
          >
            {dayName}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="space-y-1">
        {grid.weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1">
            {week.map((calendarDate, dayIndex) => (
              <button
                key={dayIndex}
                onClick={() => handleDateClick(calendarDate)}
                disabled={calendarDate.isDisabled}
                className={getDayClassName(calendarDate)}
                aria-label={`${calendarDate.date.toLocaleDateString()}${calendarDate.isDisabled ? ', not available' : ''}${calendarDate.isSelected ? ', selected' : ''}${calendarDate.isToday ? ', today' : ''}`}
                aria-disabled={calendarDate.isDisabled}
                aria-selected={calendarDate.isSelected}
                tabIndex={isSameDay(calendarDate.date, focusedDate) ? 0 : -1}
              >
                {calendarDate.day}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
