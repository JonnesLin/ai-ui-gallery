import { useState } from 'react';
import { Calendar } from './Calendar';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function MonochromeCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-neutral-100 p-8 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 md:p-8 shadow-sm">
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="monochrome"
        />

        <div className="mt-8 pt-6 border-t border-neutral-100">
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500">
              {selectedDate
                ? `${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}`
                : 'No selection'
              }
            </p>
            {selectedDate && (
              <button
                onClick={() => setSelectedDate(null)}
                className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
