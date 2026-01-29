import { useState } from 'react';
import { Calendar } from './Calendar';
import { MONTH_NAMES, DAY_NAMES_SUNDAY_START } from './utils';

export default function MaterialCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));
  const currentYear = selectedDate?.getFullYear() ?? new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-100 p-8 md:p-12 flex items-center justify-center">
      <div
        className="w-full max-w-sm bg-white rounded-lg overflow-hidden"
        style={{
          boxShadow: '0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)'
        }}
      >
        <div className="bg-indigo-600 p-5">
          <p className="text-indigo-200 text-sm">{currentYear}</p>
          <h2 className="text-2xl font-normal text-white mt-1">
            {selectedDate
              ? `${DAY_NAMES_SUNDAY_START[selectedDate.getDay()]}, ${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}`
              : MONTH_NAMES[new Date().getMonth()]
            }
          </h2>
        </div>

        <div className="p-4">
          <Calendar
            value={selectedDate ?? undefined}
            onChange={(date) => setSelectedDate(date as Date)}
            mode="single"
            theme="material"
          />

          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end gap-2">
            <button
              onClick={() => setSelectedDate(null)}
              className="px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded transition-colors"
            >
              CANCEL
            </button>
            <button
              onClick={() => selectedDate && alert(`Selected: ${selectedDate.toLocaleDateString()}`)}
              className="px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
