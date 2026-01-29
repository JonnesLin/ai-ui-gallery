'use client';

import { useState, useRef, useEffect } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { buildCalendarGrid, getDayNames, MONTH_NAMES } from '../calendar/utils';
import type { DatePickerProps, DatePickerSize } from './types';
import { formatDate } from './utils';

const SIZE_STYLES: Record<DatePickerSize, { input: string; calendar: string; day: string }> = {
  sm: {
    input: 'px-3 py-1.5 text-sm',
    calendar: 'p-3',
    day: 'h-8 text-xs',
  },
  md: {
    input: 'px-4 py-2 text-base',
    calendar: 'p-4',
    day: 'h-10 text-sm',
  },
  lg: {
    input: 'px-5 py-3 text-lg',
    calendar: 'p-5',
    day: 'h-12 text-base',
  },
};

export function DatePicker({
  value,
  onChange,
  theme = 'flat',
  format = 'MMM dd, yyyy',
  placeholder = 'Select date',
  minDate,
  maxDate,
  disabled = false,
  clearable = true,
  size = 'md',
  className,
}: DatePickerProps) {
  const themeConfig = getTheme(theme);
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(value || new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  const sizeStyle = SIZE_STYLES[size];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleDateSelect = (date: Date) => {
    onChange?.(date);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(undefined);
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const selectedDates = value ? [value] : [];
  const grid = buildCalendarGrid(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    selectedDates,
    0,
    minDate,
    maxDate
  );

  const dayNames = getDayNames(0);
  const displayValue = value ? formatDate(value, format) : placeholder;
  const hasValue = !!value;

  return (
    <div ref={containerRef} className={cn('relative w-full max-w-sm', className)}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          'w-full text-left flex items-center justify-between',
          themeConfig.base.background,
          themeConfig.base.text,
          themeConfig.base.border,
          themeConfig.base.radius,
          sizeStyle.input,
          themeConfig.states.hover,
          themeConfig.states.focus,
          disabled && themeConfig.states.disabled,
          !hasValue && 'text-opacity-50'
        )}
      >
        <span>{displayValue}</span>
        <div className="flex items-center gap-1">
          {clearable && hasValue && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className={cn(
                'p-1 rounded transition-colors',
                'hover:bg-black hover:bg-opacity-10'
              )}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute z-50 mt-2 w-full',
            themeConfig.base.background,
            themeConfig.base.border,
            themeConfig.base.radius,
            themeConfig.base.shadow,
            sizeStyle.calendar
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={previousMonth}
              className={cn(
                'p-2 rounded transition-colors',
                themeConfig.variants.ghost.background,
                themeConfig.variants.ghost.text,
                themeConfig.variants.ghost.hover
              )}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className={cn('text-sm font-semibold', themeConfig.base.text)}>
              {MONTH_NAMES[grid.month]} {grid.year}
            </div>

            <button
              type="button"
              onClick={nextMonth}
              className={cn(
                'p-2 rounded transition-colors',
                themeConfig.variants.ghost.background,
                themeConfig.variants.ghost.text,
                themeConfig.variants.ghost.hover
              )}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {dayNames.map(day => (
              <div
                key={day}
                className={cn(
                  'flex items-center justify-center text-xs font-medium',
                  sizeStyle.day,
                  themeConfig.base.text,
                  'opacity-50'
                )}
              >
                {day}
              </div>
            ))}

            {grid.weeks.flat().map((dateInfo, index) => {
              const isSelected = dateInfo.isSelected;
              const isDisabled = dateInfo.isDisabled || !dateInfo.isCurrentMonth;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => !isDisabled && handleDateSelect(dateInfo.date)}
                  disabled={isDisabled}
                  className={cn(
                    'flex items-center justify-center font-medium rounded transition-colors',
                    sizeStyle.day,
                    isSelected && themeConfig.variants.primary.background,
                    isSelected && themeConfig.variants.primary.text,
                    !isSelected && !isDisabled && themeConfig.base.text,
                    !isSelected && !isDisabled && themeConfig.variants.ghost.hover,
                    isDisabled && 'opacity-25 cursor-not-allowed',
                    !dateInfo.isCurrentMonth && 'opacity-50'
                  )}
                >
                  {dateInfo.day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
