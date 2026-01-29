import { useState } from 'react';
import { Calendar } from './Calendar';

export default function DarkCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-gray-950 p-8 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800">
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="dark"
        />

        <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Selected</p>
            <p className="text-sm text-gray-300 mt-1">
              {selectedDate
                ? selectedDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })
                : 'None'
              }
            </p>
          </div>
          {selectedDate && (
            <button
              onClick={() => setSelectedDate(null)}
              className="px-4 py-2 bg-gray-800 text-gray-400 text-xs rounded-lg hover:bg-gray-700 transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
