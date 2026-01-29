import { useState } from 'react';
import { Calendar } from './Calendar';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function PlayfulCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 p-8 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-[2rem] p-6 md:p-8 shadow-2xl">
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="pastel"
        />

        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-purple-400 font-medium">Your Pick</p>
              <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                {selectedDate
                  ? `${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}`
                  : 'Choose a day!'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
