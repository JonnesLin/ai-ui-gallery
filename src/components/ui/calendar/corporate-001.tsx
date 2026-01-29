import { useState } from 'react';
import { Calendar } from './Calendar';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function CorporateCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-slate-100 p-8 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="corporate"
          className="p-4"
        />

        <div className="mt-0 pt-4 border-t border-slate-200 p-4 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400">Selected</p>
                <p className="text-sm text-slate-700 font-medium">
                  {selectedDate
                    ? `${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
                    : 'No date selected'
                  }
                </p>
              </div>
            </div>
            {selectedDate && (
              <button
                onClick={() => setSelectedDate(null)}
                className="px-3 py-1.5 text-xs text-blue-600 hover:bg-blue-50 rounded transition-colors"
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
