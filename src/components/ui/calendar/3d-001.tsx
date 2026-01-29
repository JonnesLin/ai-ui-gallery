import { useState } from 'react';
import { Calendar } from './Calendar';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function ThreeDCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8 md:p-12 flex items-center justify-center">
      <div
        className="w-full max-w-md bg-white rounded-2xl p-6 md:p-8"
        style={{
          boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)',
          transform: 'perspective(1000px) rotateX(2deg)'
        }}
      >
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="neumorphism"
        />

        <div
          className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl"
          style={{
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 bg-white rounded-lg flex items-center justify-center"
              style={{
                boxShadow: '0 4px 8px rgba(99,102,241,0.2), 0 2px 4px rgba(99,102,241,0.1)'
              }}
            >
              <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400">Selected Date</p>
              <p className="text-slate-700 font-semibold">
                {selectedDate
                  ? `${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
                  : 'None selected'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
