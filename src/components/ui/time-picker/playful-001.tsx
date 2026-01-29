import { useState } from 'react';

export default function PlayfulTimePicker() {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">
      <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest flex items-center gap-2">
        <span className="animate-bounce">⏰</span>
        Playful Time Picker
        <span className="animate-bounce delay-100">✨</span>
      </h2>

      <div className="max-w-md">
        <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-purple-200">
          {/* Time Display */}
          <div className="text-center mb-8">
            <div
              className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent tracking-tight"
            >
              {hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')}
            </div>
            <div className="text-xl font-bold text-purple-400 mt-2 flex items-center justify-center gap-2">
              {period === 'AM' ? '🌞' : '🌙'} {period}
            </div>
          </div>

          {/* Selectors */}
          <div className="grid grid-cols-3 gap-4">
            {/* Hours */}
            <div>
              <label className="block text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Hour</label>
              <div className="h-48 overflow-y-auto rounded-2xl border-4 border-purple-100 bg-purple-50/50">
                {hours.map((h) => (
                  <button
                    key={h}
                    onClick={() => setHour(h)}
                    className={`w-full py-3 text-sm font-bold transition-all ${
                      hour === h
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white scale-105'
                        : 'text-purple-600 hover:bg-purple-100'
                    }`}
                    style={hour === h ? { boxShadow: '0 4px 0 #9333ea' } : {}}
                  >
                    {h.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Minutes */}
            <div>
              <label className="block text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Minute</label>
              <div className="h-48 overflow-y-auto rounded-2xl border-4 border-purple-100 bg-purple-50/50">
                {minutes.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMinute(m)}
                    className={`w-full py-3 text-sm font-bold transition-all ${
                      minute === m
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white scale-105'
                        : 'text-purple-600 hover:bg-purple-100'
                    }`}
                    style={minute === m ? { boxShadow: '0 4px 0 #0891b2' } : {}}
                  >
                    {m.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Period */}
            <div>
              <label className="block text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Period</label>
              <div className="space-y-2">
                {(['AM', 'PM'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`w-full py-6 rounded-2xl text-sm font-bold transition-all transform hover:scale-105 ${
                      period === p
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                        : 'bg-purple-50 text-purple-600 border-4 border-purple-100 hover:bg-purple-100'
                    }`}
                    style={period === p ? { boxShadow: '0 6px 0 #9333ea' } : {}}
                  >
                    {p === 'AM' ? '🌞' : '🌙'} {p}
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
