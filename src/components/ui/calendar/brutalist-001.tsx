import { useState } from 'react';
import { Calendar } from './Calendar';

const MONTH_NAMES = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

export default function BrutalistCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-yellow-300 p-8 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-md bg-white border-4 border-black">
        <div className="p-4">
          <Calendar
            value={selectedDate ?? undefined}
            onChange={(date) => setSelectedDate(date as Date)}
            mode="single"
            theme="flat"
            className="[&_button]:font-black [&_button]:border-2 [&_button]:border-transparent [&_button:hover]:border-black [&_button:hover]:bg-yellow-300"
          />
        </div>

        <div className="border-t-4 border-black p-4 bg-yellow-300">
          <div className="flex items-center justify-between">
            <p className="font-black text-sm uppercase">
              {selectedDate
                ? `${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
                : 'NO DATE SELECTED'
              }
            </p>
            {selectedDate && (
              <button
                onClick={() => setSelectedDate(null)}
                className="px-4 py-2 bg-black text-white font-black text-xs hover:bg-gray-800 transition-colors"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
