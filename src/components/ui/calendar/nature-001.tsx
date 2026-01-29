import { useState } from 'react';
import { Calendar } from './Calendar';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function NatureCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 p-8 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl shadow-green-200/50 border border-green-100">
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="pastel"
        />

        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-green-500">Selected Date</p>
              <p className="text-green-800 font-medium">
                {selectedDate
                  ? `${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
                  : 'Pick a sunny day'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
