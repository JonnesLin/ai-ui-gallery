import { useState } from 'react';
import { Calendar } from './Calendar';

export default function FlatCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-teal-500 p-8 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="flat"
          className="bg-white"
        />

        <div className="bg-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-400 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium">Selected</p>
                <p className="text-gray-800 font-bold">
                  {selectedDate
                    ? selectedDate.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric'
                      })
                    : 'None'
                  }
                </p>
              </div>
            </div>
            {selectedDate && (
              <button
                onClick={() => setSelectedDate(null)}
                className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold uppercase hover:bg-gray-300 transition-colors"
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
