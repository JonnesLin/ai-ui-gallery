import { useState } from 'react';
import { Calendar } from './Calendar';

export default function MinimalistCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-white p-8 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <Calendar
          value={selectedDate}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="minimalist"
        />

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 tracking-wide">
            Selected: {selectedDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
