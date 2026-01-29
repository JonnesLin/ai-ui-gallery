import { useState } from 'react';
import { Calendar } from './Calendar';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function PastelCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-purple-100/50">
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="pastel"
        />

        <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-purple-400">Selected Date</p>
              <p className="text-purple-600 font-medium">
                {selectedDate
                  ? `${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
                  : 'Pick a date'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
