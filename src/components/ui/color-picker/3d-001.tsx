import { useState } from 'react';

const presetColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'];

export default function ThreeDColorPicker() {
  const [color, setColor] = useState('#3B82F6');
  const [hue, setHue] = useState(220);

  return (
    <div className="flex flex-col gap-8 p-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <h2 className="text-sm font-bold text-gray-700 uppercase tracking-widest">3D Color Picker</h2>

      <div className="max-w-sm">
        <div
          className="bg-white rounded-2xl p-6"
          style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1)',
            transform: 'perspective(1000px) rotateX(2deg)',
          }}
        >
          <h3 className="font-semibold text-gray-800 mb-1">Select Color</h3>
          <p className="text-sm text-gray-500 mb-4">Choose a color for your design</p>

          {/* Color spectrum */}
          <div
            className="w-full h-40 rounded-xl mb-4 cursor-crosshair relative"
            style={{
              background: `linear-gradient(to bottom, transparent, #000), linear-gradient(to right, #fff, hsl(${hue}, 100%, 50%))`,
              boxShadow: '0 8px 0 rgba(0,0,0,0.1), 0 12px 20px rgba(0,0,0,0.15)',
            }}
          >
            <div
              className="absolute w-4 h-4 rounded-full border-2 border-white"
              style={{
                top: '30%',
                left: '70%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            />
          </div>

          {/* Hue slider */}
          <div
            className="w-full h-4 rounded-full mb-4 relative cursor-pointer"
            style={{
              background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
              boxShadow: '0 4px 0 rgba(0,0,0,0.1), 0 6px 12px rgba(0,0,0,0.1)',
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width;
              setHue(Math.round(x * 360));
            }}
          >
            <div
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-gray-200"
              style={{
                left: `${(hue / 360) * 100}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              }}
            />
          </div>

          {/* Color preview and input */}
          <div className="flex gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-xl"
              style={{
                backgroundColor: color,
                boxShadow: '0 6px 0 rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.15)',
              }}
            />
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="flex-1 px-4 py-3 bg-gray-100 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)' }}
            />
          </div>

          {/* Preset colors */}
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Swatches</p>
          <div className="grid grid-cols-8 gap-2">
            {presetColors.map((c, i) => (
              <button
                key={i}
                className="aspect-square rounded-lg transition-transform hover:scale-110"
                style={{
                  backgroundColor: c,
                  boxShadow: '0 4px 0 rgba(0,0,0,0.15), 0 6px 10px rgba(0,0,0,0.1)',
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
