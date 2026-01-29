import { useState } from 'react';
import { Calendar } from './Calendar';

const MONTH_NAMES = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

export default function NeonCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-black p-8 md:p-12 flex items-center justify-center">
      <div
        className="w-full max-w-md p-6 md:p-8 bg-gray-950 rounded-lg"
        style={{
          boxShadow: '0 0 30px rgba(236, 72, 153, 0.3), inset 0 0 30px rgba(34, 211, 238, 0.1)',
          border: '1px solid rgba(236, 72, 153, 0.5)'
        }}
      >
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="cyberpunk"
        />

        <div
          className="mt-6 p-4 rounded"
          style={{
            background: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.5)',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
          }}
        >
          <p
            className="text-center font-bold"
            style={{
              color: '#a855f7',
              textShadow: '0 0 10px #a855f7'
            }}
          >
            {selectedDate
              ? `${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
              : 'SELECT A DATE'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
