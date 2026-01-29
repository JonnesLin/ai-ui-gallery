import { useState } from 'react';

export default function RetroTimePicker() {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  return (
    <div
      className="flex flex-col gap-8 p-8 min-h-screen"
      style={{
        backgroundColor: '#FDF5E6',
        backgroundImage: 'radial-gradient(circle, #e5d5c5 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>
        ~ Retro Time Picker ~
      </h2>

      <div className="max-w-md">
        <div
          className="p-8 border-4"
          style={{
            backgroundColor: '#FFFAF0',
            borderColor: '#8B4513',
            boxShadow: '6px 6px 0 #8B4513',
          }}
        >
          {/* Time Display */}
          <div className="text-center mb-8 pb-6 border-b-4" style={{ borderColor: '#8B4513' }}>
            <div
              className="text-6xl font-bold tracking-tight"
              style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}
            >
              {hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')}
            </div>
            <div
              className="text-xl font-bold mt-2"
              style={{ color: '#A0522D', fontFamily: 'Georgia, serif' }}
            >
              {period}
            </div>
          </div>

          {/* Selectors */}
          <div className="grid grid-cols-3 gap-4">
            {/* Hours */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>
                Hour
              </label>
              <div className="h-48 overflow-y-auto border-2" style={{ borderColor: '#8B4513', backgroundColor: '#FFF8DC' }}>
                {hours.map((h) => (
                  <button
                    key={h}
                    onClick={() => setHour(h)}
                    className="w-full py-3 text-sm transition-colors"
                    style={{
                      backgroundColor: hour === h ? '#8B4513' : 'transparent',
                      color: hour === h ? '#FFFAF0' : '#8B4513',
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    {h.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Minutes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>
                Minute
              </label>
              <div className="h-48 overflow-y-auto border-2" style={{ borderColor: '#8B4513', backgroundColor: '#FFF8DC' }}>
                {minutes.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMinute(m)}
                    className="w-full py-3 text-sm transition-colors"
                    style={{
                      backgroundColor: minute === m ? '#8B4513' : 'transparent',
                      color: minute === m ? '#FFFAF0' : '#8B4513',
                      fontFamily: 'Georgia, serif',
                    }}
                  >
                    {m.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Period */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>
                Period
              </label>
              <div className="space-y-2">
                {(['AM', 'PM'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className="w-full py-6 border-2 text-sm font-bold transition-colors"
                    style={{
                      backgroundColor: period === p ? '#8B4513' : '#FFFAF0',
                      color: period === p ? '#FFFAF0' : '#8B4513',
                      borderColor: '#8B4513',
                      fontFamily: 'Georgia, serif',
                    }}
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
