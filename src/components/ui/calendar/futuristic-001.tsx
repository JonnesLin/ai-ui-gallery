import { useState } from 'react';
import { Calendar } from './Calendar';

export default function FuturisticCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-slate-950 p-8 md:p-12 flex items-center justify-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl opacity-50 blur-sm" />
        <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-cyan-500/20">
          <Calendar
            value={selectedDate ?? undefined}
            onChange={(date) => setSelectedDate(date as Date)}
            mode="single"
            theme="futuristic"
          />

          <div className="mt-6 pt-4 border-t border-cyan-500/20">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all"
                  style={{ width: selectedDate ? '100%' : '0%' }}
                />
              </div>
              <p className="text-sm text-cyan-400 font-mono min-w-fit">
                {selectedDate
                  ? `${selectedDate.getFullYear()}.${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}.${selectedDate.getDate().toString().padStart(2, '0')}`
                  : 'SELECT_DATE'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
