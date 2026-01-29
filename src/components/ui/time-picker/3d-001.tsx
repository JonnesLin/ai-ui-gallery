import { useState } from 'react';

export default function ThreeDTimePicker() {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  return (
    <div className="flex flex-col gap-8 p-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <h2 className="text-sm font-bold text-gray-700 uppercase tracking-widest">3D Time Picker</h2>

      <div className="max-w-md">
        <div
          className="bg-white rounded-2xl p-8"
          style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1)',
            transform: 'perspective(1000px) rotateX(2deg)',
          }}
        >
          {/* Time Display */}
          <div className="text-center mb-8">
            <div
              className="text-6xl font-bold text-gray-800 tracking-tight"
              style={{ textShadow: '2px 4px 0 rgba(0,0,0,0.1)' }}
            >
              {hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')}
            </div>
            <div className="text-lg font-medium text-gray-500 mt-2">{period}</div>
          </div>

          {/* Selectors */}
          <div className="grid grid-cols-3 gap-4">
            {/* Hours */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Hour</label>
              <div
                className="h-48 overflow-y-auto rounded-xl"
                style={{ boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.1)' }}
              >
                {hours.map((h) => (
                  <button
                    key={h}
                    onClick={() => setHour(h)}
                    className={`w-full py-3 text-sm font-medium transition-all ${
                      hour === h
                        ? 'bg-gradient-to-b from-blue-500 to-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    style={hour === h ? { boxShadow: '0 4px 0 rgb(29,78,216)' } : {}}
                  >
                    {h.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Minutes */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Minute</label>
              <div
                className="h-48 overflow-y-auto rounded-xl"
                style={{ boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.1)' }}
              >
                {minutes.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMinute(m)}
                    className={`w-full py-3 text-sm font-medium transition-all ${
                      minute === m
                        ? 'bg-gradient-to-b from-blue-500 to-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    style={minute === m ? { boxShadow: '0 4px 0 rgb(29,78,216)' } : {}}
                  >
                    {m.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Period */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Period</label>
              <div className="space-y-2">
                {(['AM', 'PM'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`w-full py-6 rounded-xl text-sm font-semibold transition-all ${
                      period === p
                        ? 'bg-gradient-to-b from-blue-500 to-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    style={
                      period === p
                        ? { boxShadow: '0 6px 0 rgb(29,78,216), 0 8px 12px rgba(0,0,0,0.15)' }
                        : { boxShadow: '0 4px 0 #d1d5db' }
                    }
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
