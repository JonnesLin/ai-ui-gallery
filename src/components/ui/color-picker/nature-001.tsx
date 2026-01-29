import { useState } from 'react';

const natureColors = ['#22C55E', '#15803D', '#84CC16', '#0EA5E9', '#059669', '#10B981', '#34D399', '#6EE7B7'];

export default function NatureColorPicker() {
  const [color, setColor] = useState('#22C55E');
  const [hue, setHue] = useState(140);

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-b from-emerald-50 to-green-100">
      <h2 className="text-sm font-medium text-emerald-700 uppercase tracking-widest flex items-center gap-2">
        <span>🌿</span> Nature Color Picker
      </h2>

      <div className="max-w-sm">
        <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-xl border border-emerald-200">
          <h3 className="font-semibold text-emerald-800 mb-1">Select Color</h3>
          <p className="text-sm text-emerald-600 mb-4">Choose an organic color</p>

          {/* Color spectrum with leaf pattern overlay */}
          <div
            className="w-full h-40 rounded-2xl mb-4 cursor-crosshair relative overflow-hidden"
            style={{
              background: `linear-gradient(to bottom, transparent, #000), linear-gradient(to right, #fff, hsl(${hue}, 70%, 50%))`,
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 5 Q25 15 20 25 Q15 15 20 5\' fill=\'%2322C55E\'/%3E%3C/svg%3E")',
              }}
            />
            <div
              className="absolute w-5 h-5 rounded-full border-3 border-white bg-white/30 backdrop-blur"
              style={{
                top: '40%',
                left: '60%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              }}
            />
          </div>

          {/* Hue slider - nature tones */}
          <div
            className="w-full h-4 rounded-full mb-4 relative cursor-pointer"
            style={{
              background: 'linear-gradient(to right, #22C55E, #0EA5E9, #8B5CF6, #EC4899, #F59E0B, #22C55E)',
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width;
              setHue(Math.round(x * 360));
            }}
          >
            <div
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-emerald-400"
              style={{
                left: `${(hue / 360) * 100}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 2px 8px rgba(34,197,94,0.4)',
              }}
            />
          </div>

          {/* Color preview */}
          <div className="flex gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-2xl border-2 border-emerald-200"
              style={{
                backgroundColor: color,
                boxShadow: `0 4px 12px ${color}40`,
              }}
            />
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="flex-1 px-4 py-3 bg-emerald-50 rounded-xl text-sm text-emerald-800 font-mono border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Nature palette */}
          <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-2">🌱 Organic Palette</p>
          <div className="grid grid-cols-8 gap-2">
            {natureColors.map((c, i) => (
              <button
                key={i}
                className="aspect-square rounded-xl border-2 border-emerald-200 transition-transform hover:scale-110"
                style={{
                  backgroundColor: c,
                  boxShadow: `0 2px 8px ${c}40`,
                }}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
