import { useState } from 'react';

export default function SketchTimePicker() {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  return (
    <div
      className="flex flex-col gap-8 p-8 min-h-screen"
      style={{
        backgroundColor: '#FFFEF5',
        backgroundImage: 'linear-gradient(#e8e8e8 1px, transparent 1px), linear-gradient(90deg, #e8e8e8 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <h2 className="text-sm uppercase tracking-widest" style={{ color: '#444', fontFamily: '"Comic Sans MS", cursive' }}>
        Sketch Time Picker ✏️
      </h2>

      <div className="max-w-md">
        <div
          className="bg-white p-8"
          style={{
            border: '3px solid #333',
            borderRadius: '8px 4px 12px 6px',
            boxShadow: '4px 4px 0 #ddd',
            transform: 'rotate(-0.5deg)',
          }}
        >
          {/* Time Display */}
          <div className="text-center mb-8 pb-6" style={{ borderBottom: '2px dashed #333' }}>
            <div
              className="text-6xl font-bold tracking-tight"
              style={{ color: '#333', fontFamily: '"Comic Sans MS", cursive' }}
            >
              {hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')}
            </div>
            <div
              className="text-xl mt-2"
              style={{ color: '#666', fontFamily: '"Comic Sans MS", cursive' }}
            >
              * {period} *
            </div>
          </div>

          {/* Selectors */}
          <div className="grid grid-cols-3 gap-4">
            {/* Hours */}
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#666', fontFamily: '"Comic Sans MS", cursive' }}>
                hour
              </label>
              <div
                className="h-48 overflow-y-auto"
                style={{
                  border: '2px solid #333',
                  borderRadius: '4px 2px 6px 3px',
                }}
              >
                {hours.map((h, idx) => (
                  <button
                    key={h}
                    onClick={() => setHour(h)}
                    className="w-full py-3 text-sm transition-colors"
                    style={{
                      backgroundColor: hour === h ? '#f5f5f5' : 'transparent',
                      color: '#333',
                      fontFamily: '"Comic Sans MS", cursive',
                      borderBottom: idx < hours.length - 1 ? '1px dashed #ddd' : 'none',
                      backgroundImage: hour === h ? `repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 6px)` : 'none',
                    }}
                  >
                    {h.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Minutes */}
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#666', fontFamily: '"Comic Sans MS", cursive' }}>
                min
              </label>
              <div
                className="h-48 overflow-y-auto"
                style={{
                  border: '2px solid #333',
                  borderRadius: '2px 5px 3px 4px',
                }}
              >
                {minutes.map((m, idx) => (
                  <button
                    key={m}
                    onClick={() => setMinute(m)}
                    className="w-full py-3 text-sm transition-colors"
                    style={{
                      backgroundColor: minute === m ? '#f5f5f5' : 'transparent',
                      color: '#333',
                      fontFamily: '"Comic Sans MS", cursive',
                      borderBottom: idx < minutes.length - 1 ? '1px dashed #ddd' : 'none',
                      backgroundImage: minute === m ? `repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 6px)` : 'none',
                    }}
                  >
                    {m.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Period */}
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#666', fontFamily: '"Comic Sans MS", cursive' }}>
                period
              </label>
              <div className="space-y-2">
                {(['AM', 'PM'] as const).map((p, i) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className="w-full py-6 text-sm transition-colors"
                    style={{
                      backgroundColor: period === p ? '#f5f5f5' : 'white',
                      color: '#333',
                      fontFamily: '"Comic Sans MS", cursive',
                      border: '2px solid #333',
                      borderRadius: `${2 + i}px ${4 - i}px ${3 + i}px ${5 - i}px`,
                      transform: `rotate(${period === p ? -1 : 1}deg)`,
                      backgroundImage: period === p ? `repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 6px)` : 'none',
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
