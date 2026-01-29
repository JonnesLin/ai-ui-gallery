import { useState } from 'react';

export default function NatureTimePicker() {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-b from-emerald-50 to-green-100">
      <h2 className="text-sm font-medium text-emerald-700 uppercase tracking-widest flex items-center gap-2">
        <span>🌿</span> Nature Time Picker
      </h2>

      <div className="max-w-md">
        <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl border border-emerald-200">
          {/* Time Display */}
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-emerald-800 tracking-tight">
              {hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')}
            </div>
            <div className="text-lg font-medium text-emerald-500 mt-2 flex items-center justify-center gap-2">
              <span>{period === 'AM' ? '🌅' : '🌙'}</span>
              {period}
            </div>
          </div>

          {/* Selectors */}
          <div className="grid grid-cols-3 gap-4">
            {/* Hours */}
            <div>
              <label className="block text-xs font-medium text-emerald-600 uppercase tracking-wider mb-2">Hour</label>
              <div className="h-48 overflow-y-auto rounded-2xl border border-emerald-200 bg-emerald-50/50">
                {hours.map((h) => (
                  <button
                    key={h}
                    onClick={() => setHour(h)}
                    className={`w-full py-3 text-sm font-medium transition-all ${
                      hour === h
                        ? 'bg-emerald-500 text-white'
                        : 'text-emerald-700 hover:bg-emerald-100'
                    }`}
                  >
                    {h.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Minutes */}
            <div>
              <label className="block text-xs font-medium text-emerald-600 uppercase tracking-wider mb-2">Minute</label>
              <div className="h-48 overflow-y-auto rounded-2xl border border-emerald-200 bg-emerald-50/50">
                {minutes.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMinute(m)}
                    className={`w-full py-3 text-sm font-medium transition-all ${
                      minute === m
                        ? 'bg-emerald-500 text-white'
                        : 'text-emerald-700 hover:bg-emerald-100'
                    }`}
                  >
                    {m.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Period */}
            <div>
              <label className="block text-xs font-medium text-emerald-600 uppercase tracking-wider mb-2">Period</label>
              <div className="space-y-2">
                {(['AM', 'PM'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`w-full py-6 rounded-2xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                      period === p
                        ? 'bg-emerald-500 text-white shadow-lg'
                        : 'bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50'
                    }`}
                  >
                    <span>{p === 'AM' ? '🌅' : '🌙'}</span>
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
