import { useState } from 'react';
import { Calendar } from './Calendar';

export default function GlassmorphismCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div
      className="min-h-screen p-8 md:p-12 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
      }}
    >
      <div className="w-full max-w-md backdrop-blur-xl bg-white/20 rounded-3xl p-6 md:p-8 border border-white/30 shadow-xl">
        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="glassmorphism"
        />

        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/70">
              {selectedDate
                ? selectedDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })
                : 'Select a date'
              }
            </p>
            {selectedDate && (
              <button
                onClick={() => setSelectedDate(null)}
                className="text-xs text-white/50 hover:text-white/80 transition-colors"
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
