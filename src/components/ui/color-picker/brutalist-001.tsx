import { useState } from 'react';

const presetColors = ['#000000', '#FFFFFF', '#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF'];

export default function BrutalistColorPicker() {
  const [color, setColor] = useState('#000000');
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div className="flex flex-col gap-8 p-8 bg-white min-h-screen">
      <h2 className="text-sm font-black text-black uppercase tracking-widest">Brutalist Color Picker</h2>

      <div className="max-w-sm">
        <div className="border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
          <h3 className="font-black text-black uppercase mb-1">SELECT COLOR</h3>
          <p className="text-sm font-bold text-black mb-4">CHOOSE YOUR COLOR</p>

          {/* Color spectrum */}
          <div
            className="w-full h-40 border-4 border-black mb-4 cursor-crosshair relative"
            style={{
              background: 'linear-gradient(to bottom, transparent, #000), linear-gradient(to right, #fff, #ff0000)',
            }}
          >
            <div
              className="absolute w-4 h-4 border-4 border-white bg-black"
              style={{ top: '30%', left: '70%', transform: 'translate(-50%, -50%)' }}
            />
          </div>

          {/* RGB Sliders */}
          <div className="space-y-3 mb-4">
            {[
              { label: 'R', value: r, setValue: setR, color: '#FF0000' },
              { label: 'G', value: g, setValue: setG, color: '#00FF00' },
              { label: 'B', value: b, setValue: setB, color: '#0000FF' },
            ].map(({ label, value, setValue, color: c }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="font-black text-black w-6">{label}</span>
                <div className="flex-1 h-6 border-4 border-black bg-white relative">
                  <div className="h-full" style={{ width: `${(value / 255) * 100}%`, backgroundColor: c }} />
                  <input
                    type="range"
                    min="0"
                    max="255"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <span className="font-black text-black w-10 text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* Color preview and input */}
          <div className="flex gap-4 mb-4">
            <div
              className="w-16 h-16 border-4 border-black"
              style={{ backgroundColor: color }}
            />
            <div className="flex-1">
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full px-4 py-3 bg-white border-4 border-black text-sm font-black uppercase focus:outline-none"
              />
            </div>
          </div>

          {/* Preset colors */}
          <p className="text-xs font-black text-black uppercase tracking-widest mb-2">SWATCHES</p>
          <div className="grid grid-cols-8 gap-2">
            {presetColors.map((c, i) => (
              <button
                key={i}
                className="aspect-square border-4 border-black hover:border-yellow-400 transition-colors"
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
