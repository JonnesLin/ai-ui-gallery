import { useState } from 'react';
import { Calendar } from './Calendar';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function LuxuryCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-neutral-950 p-8 md:p-12 flex items-center justify-center">
      <div
        className="w-full max-w-md p-8 md:p-10 rounded-sm"
        style={{
          background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
        }}
      >
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="luxury"
        />

        <div className="mt-8 pt-6 border-t border-amber-900/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-amber-700" />
              <div>
                <p className="text-xs text-amber-600/50 tracking-[0.2em] uppercase">Selected</p>
                <p className="text-amber-100 font-light tracking-wider mt-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {selectedDate
                    ? `${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
                    : 'No selection'
                  }
                </p>
              </div>
            </div>
            {selectedDate && (
              <button
                onClick={() => setSelectedDate(null)}
                className="text-xs text-amber-600/50 hover:text-amber-400 tracking-wider transition-colors"
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
