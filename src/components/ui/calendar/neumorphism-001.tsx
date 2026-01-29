import { useState } from 'react';
import { Calendar } from './Calendar';

export default function NeumorphismCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-[#e0e5ec] p-8 md:p-12 flex items-center justify-center">
      <div
        className="w-full max-w-sm p-6 md:p-8 rounded-3xl"
        style={{
          background: '#e0e5ec',
          boxShadow: '20px 20px 60px #bec3c9, -20px -20px 60px #ffffff'
        }}
      >
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="neumorphism"
        />

        <div
          className="mt-8 p-4 rounded-2xl"
          style={{
            background: '#e0e5ec',
            boxShadow: 'inset 5px 5px 10px #bec3c9, inset -5px -5px 10px #ffffff'
          }}
        >
          <p className="text-sm text-gray-500 text-center">
            {selectedDate
              ? selectedDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })
              : 'No date selected'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
