import { useState } from 'react';

export default function BrutalistTimePicker() {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  return (
    <div className="flex flex-col gap-8 p-8 bg-white min-h-screen">
      <h2 className="text-sm font-black text-black uppercase tracking-widest">Brutalist Time Picker</h2>

      <div className="max-w-md">
        <div className="border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
          {/* Time Display */}
          <div className="text-center mb-6 pb-6 border-b-4 border-black">
            <div className="text-7xl font-black text-black tracking-tight">
              {hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')}
            </div>
            <div className="text-xl font-black text-black mt-2">{period}</div>
          </div>

          {/* Selectors */}
          <div className="grid grid-cols-3 gap-4">
            {/* Hours */}
            <div>
              <label className="block text-xs font-black text-black uppercase mb-2">HOUR</label>
              <div className="h-48 overflow-y-auto border-4 border-black">
                {hours.map((h) => (
                  <button
                    key={h}
                    onClick={() => setHour(h)}
                    className={`w-full py-3 text-sm font-black uppercase transition-colors ${
                      hour === h
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-yellow-400'
                    }`}
                  >
                    {h.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Minutes */}
            <div>
              <label className="block text-xs font-black text-black uppercase mb-2">MIN</label>
              <div className="h-48 overflow-y-auto border-4 border-black">
                {minutes.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMinute(m)}
                    className={`w-full py-3 text-sm font-black uppercase transition-colors ${
                      minute === m
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-yellow-400'
                    }`}
                  >
                    {m.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Period */}
            <div>
              <label className="block text-xs font-black text-black uppercase mb-2">PERIOD</label>
              <div className="space-y-2">
                {(['AM', 'PM'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`w-full py-8 border-4 border-black text-lg font-black uppercase transition-colors ${
                      period === p
                        ? 'bg-black text-white shadow-[4px_4px_0_0_#FACC15]'
                        : 'bg-white text-black hover:bg-yellow-400'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
