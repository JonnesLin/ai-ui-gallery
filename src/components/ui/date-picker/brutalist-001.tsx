'use client';

import { useState } from 'react';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

export default function BrutalistDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const formatDate = (date: Date): string => {
    return `${MONTH_NAMES[date.getMonth()].slice(0, 3).toUpperCase()} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
    setIsOpen(false);
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedDate(undefined);
  };

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-400 p-4">
      <div className="relative w-full max-w-sm">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 text-left flex items-center justify-between bg-white border-4 border-black font-black uppercase tracking-wide hover:bg-yellow-100 transition-colors"
        >
          <span className={selectedDate ? 'text-black' : 'text-gray-500'}>
            {selectedDate ? formatDate(selectedDate) : 'SELECT DATE'}
          </span>
          <div className="flex items-center gap-2">
            {selectedDate && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1 hover:bg-black hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth={3} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-2 w-full bg-white border-4 border-black p-4">
            <div className="flex items-center justify-between mb-4 border-b-4 border-black pb-4">
              <button
                type="button"
                onClick={previousMonth}
                className="p-2 bg-black text-white font-black hover:bg-yellow-400 hover:text-black transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="text-lg font-black uppercase tracking-wider">
                {MONTH_NAMES[month]} {year}
              </div>

              <button
                type="button"
                onClick={nextMonth}
                className="p-2 bg-black text-white font-black hover:bg-yellow-400 hover:text-black transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {DAY_NAMES.map(day => (
                <div
                  key={day}
                  className="flex items-center justify-center h-10 text-xs font-black uppercase"
                >
                  {day}
                </div>
              ))}

              {emptyDays.map(i => (
                <div key={`empty-${i}`} className="h-10" />
              ))}

              {days.map(day => {
                const isSelected = selectedDate &&
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === month &&
                  selectedDate.getFullYear() === year;

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDateSelect(day)}
                    className={`
                      flex items-center justify-center h-10 font-black transition-colors border-2
                      ${isSelected
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-transparent hover:bg-yellow-400 hover:border-black'
                      }
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
