import { useState } from 'react';
import { Calendar } from './Calendar';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function SketchCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-amber-50 p-8 md:p-12 flex items-center justify-center">
      <div
        className="w-full max-w-md bg-white p-6 md:p-8 relative"
        style={{
          boxShadow: '4px 4px 0 #374151',
          border: '2px solid #374151',
          borderRadius: '4px',
          transform: 'rotate(-0.5deg)'
        }}
      >
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-200"
          style={{ border: '1px solid #374151', transform: 'rotate(1deg)' }}
        />

        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="minimalist"
        />

        <div
          className="mt-6 p-4 bg-yellow-100 relative"
          style={{
            border: '1px dashed #374151',
            transform: 'rotate(0.5deg)'
          }}
        >
          <p className="text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            {selectedDate
              ? `Picked: ${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
              : 'Pick a date!'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
