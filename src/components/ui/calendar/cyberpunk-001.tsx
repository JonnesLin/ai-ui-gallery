import { useState } from 'react';
import { Calendar } from './Calendar';

const MONTH_NAMES = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export default function CyberpunkCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 15));

  return (
    <div className="min-h-screen bg-gray-950 p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(transparent 50%, rgba(0, 255, 255, 0.05) 50%)`,
        backgroundSize: '100% 4px'
      }} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />

      <div
        className="w-full max-w-md relative z-10 bg-gray-900/80 backdrop-blur-sm border-2 border-cyan-400 p-6 md:p-8"
        style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400" />

        <Calendar
          value={selectedDate ?? undefined}
          onChange={(date) => setSelectedDate(date as Date)}
          mode="single"
          theme="cyberpunk"
        />

        <div className="mt-6 pt-4 border-t border-cyan-400/30">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-fuchsia-500 animate-pulse" />
            <p className="text-cyan-400 font-mono text-sm">
              {selectedDate
                ? `SELECTED: ${selectedDate.getFullYear()}.${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}.${selectedDate.getDate().toString().padStart(2, '0')}`
                : 'AWAITING_INPUT...'
              }
            </p>
          </div>
          {selectedDate && (
            <button
              onClick={() => setSelectedDate(null)}
              className="mt-3 w-full py-2 border border-fuchsia-500 text-fuchsia-500 font-mono text-xs tracking-wider hover:bg-fuchsia-500/20 transition-all"
            >
              [CLEAR_SELECTION]
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
