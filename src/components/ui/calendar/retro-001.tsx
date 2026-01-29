import { useState } from 'react';
import { Calendar } from './Calendar';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function RetroCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-amber-100 p-8 md:p-12 flex items-center justify-center">
      <div
        className="w-full max-w-md bg-orange-200 p-6 md:p-8 rounded-lg"
        style={{
          boxShadow: '8px 8px 0px #92400e',
          border: '4px solid #92400e'
        }}
      >
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="material"
        />

        <div
          className="mt-6 p-4 bg-amber-50 rounded"
          style={{
            boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)',
            border: '2px solid #92400e'
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p
              className="text-amber-900 font-medium"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {selectedDate
                ? `${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
                : 'Select a date'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
