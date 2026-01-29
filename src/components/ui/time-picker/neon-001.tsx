import { useState } from 'react';

export default function NeonTimePicker() {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  return (
    <div className="flex flex-col gap-8 p-8 bg-black min-h-screen">
      <h2
        className="text-sm font-bold text-cyan-400 uppercase tracking-widest"
        style={{ textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF' }}
      >
        Neon Time Picker
      </h2>

      <div className="max-w-md">
        <div
          className="bg-gray-950 rounded-xl p-8 border border-pink-500/30"
          style={{ boxShadow: '0 0 30px rgba(255,0,255,0.2), inset 0 0 30px rgba(255,0,255,0.05)' }}
        >
          {/* Time Display */}
          <div className="text-center mb-8">
            <div
              className="text-7xl font-bold text-pink-400 tracking-tight"
              style={{ textShadow: '0 0 20px #FF00FF, 0 0 40px #FF00FF' }}
            >
              {hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')}
            </div>
            <div
              className="text-xl font-bold text-cyan-400 mt-2"
              style={{ textShadow: '0 0 10px #00FFFF' }}
            >
              {period}
            </div>
          </div>

          {/* Selectors */}
          <div className="grid grid-cols-3 gap-4">
            {/* Hours */}
            <div>
              <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2" style={{ textShadow: '0 0 5px #00FFFF' }}>
                Hour
              </label>
              <div
                className="h-48 overflow-y-auto rounded-lg border border-cyan-500/30"
                style={{ boxShadow: 'inset 0 0 15px rgba(0,255,255,0.1)' }}
              >
                {hours.map((h) => (
                  <button
                    key={h}
                    onClick={() => setHour(h)}
                    className={`w-full py-3 text-sm font-bold transition-all ${
                      hour === h
                        ? 'bg-pink-500/30 text-pink-300 border-l-2 border-pink-500'
                        : 'text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                    style={hour === h ? { boxShadow: '0 0 15px rgba(255,0,255,0.3)' } : {}}
                  >
                    {h.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Minutes */}
            <div>
              <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2" style={{ textShadow: '0 0 5px #00FFFF' }}>
                Minute
              </label>
              <div
                className="h-48 overflow-y-auto rounded-lg border border-cyan-500/30"
                style={{ boxShadow: 'inset 0 0 15px rgba(0,255,255,0.1)' }}
              >
                {minutes.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMinute(m)}
                    className={`w-full py-3 text-sm font-bold transition-all ${
                      minute === m
                        ? 'bg-cyan-500/30 text-cyan-300 border-l-2 border-cyan-500'
                        : 'text-gray-500 hover:text-pink-400 hover:bg-pink-500/10'
                    }`}
                    style={minute === m ? { boxShadow: '0 0 15px rgba(0,255,255,0.3)' } : {}}
                  >
                    {m.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Period */}
            <div>
              <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2" style={{ textShadow: '0 0 5px #00FFFF' }}>
                Period
              </label>
              <div className="space-y-2">
                {(['AM', 'PM'] as const).map((p, i) => {
                  const colors = ['#00FFFF', '#FF00FF'];
                  return (
                    <button
                      key={p}
                      onClick={() => setPeriod(p)}
                      className={`w-full py-6 rounded-lg text-sm font-bold transition-all ${
                        period === p
                          ? 'border-2'
                          : 'border border-gray-800 text-gray-500 hover:border-gray-600'
                      }`}
                      style={
                        period === p
                          ? {
                              borderColor: colors[i],
                              color: colors[i],
                              boxShadow: `0 0 20px ${colors[i]}50, inset 0 0 15px ${colors[i]}20`,
                              textShadow: `0 0 10px ${colors[i]}`,
                            }
                          : {}
                      }
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
