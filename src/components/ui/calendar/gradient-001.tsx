import { useState } from 'react';
import { Calendar } from './Calendar';

export default function GradientCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div
      className="min-h-screen p-8 md:p-12 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}
    >
      <div className="w-full max-w-md">
        <div
          className="rounded-3xl p-6 md:p-8"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Calendar
            value={selectedDate ?? undefined}
            onChange={(date) => setSelectedDate(date as Date)}
            mode="single"
            theme="gradient"
          />

          <div
            className="mt-6 p-4 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)'
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">Selected Date</p>
                <p className="text-white font-medium">
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
        </div>
      </div>
    </div>
  );
}
