import { useState } from 'react';

const neonColors = ['#FF00FF', '#00FFFF', '#FFFF00', '#FF0080', '#00FF80', '#8000FF', '#FF8000', '#0080FF'];

export default function NeonColorPicker() {
  const [color, setColor] = useState('#FF00FF');
  const [hue, setHue] = useState(300);

  return (
    <div className="flex flex-col gap-8 p-8 bg-black min-h-screen">
      <h2
        className="text-sm font-bold text-cyan-400 uppercase tracking-widest"
        style={{ textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF' }}
      >
        Neon Color Picker
      </h2>

      <div className="max-w-sm">
        <div
          className="bg-gray-950 rounded-xl p-6 border border-pink-500/30"
          style={{ boxShadow: '0 0 30px rgba(255,0,255,0.2), inset 0 0 30px rgba(255,0,255,0.05)' }}
        >
          <h3 className="font-bold text-pink-400 mb-1" style={{ textShadow: '0 0 8px #FF00FF' }}>Select Color</h3>
          <p className="text-sm text-pink-300/60 mb-4">Choose your neon glow</p>

          {/* Color spectrum with glow */}
          <div
            className="w-full h-40 rounded-lg mb-4 cursor-crosshair relative border border-cyan-500/30"
            style={{
              background: `linear-gradient(to bottom, transparent, #000), linear-gradient(to right, #fff, hsl(${hue}, 100%, 50%))`,
              boxShadow: 'inset 0 0 20px rgba(0,255,255,0.1)',
            }}
          >
            <div
              className="absolute w-5 h-5 rounded-full border-2 border-white"
              style={{
                top: '30%',
                left: '70%',
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 15px ${color}, 0 0 30px ${color}`,
              }}
            />
          </div>

          {/* Hue slider with neon effect */}
          <div
            className="w-full h-4 rounded-full mb-4 relative cursor-pointer"
            style={{
              background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
              boxShadow: '0 0 15px rgba(255,0,255,0.3)',
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width;
              setHue(Math.round(x * 360));
            }}
          >
            <div
              className="absolute top-1/2 w-5 h-5 rounded-full bg-black border-2 border-cyan-400"
              style={{
                left: `${(hue / 360) * 100}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF',
              }}
            />
          </div>

          {/* Color preview */}
          <div className="flex gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-lg border border-pink-500/50"
              style={{
                backgroundColor: color,
                boxShadow: `0 0 20px ${color}, 0 0 40px ${color}50`,
              }}
            />
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="flex-1 px-4 py-3 bg-black rounded-lg text-sm text-cyan-400 font-mono border border-cyan-500/30 focus:outline-none focus:border-cyan-500"
              style={{ boxShadow: 'inset 0 0 10px rgba(0,255,255,0.1)' }}
            />
          </div>

          {/* Neon swatches */}
          <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2" style={{ textShadow: '0 0 5px #00FFFF' }}>
            Neon Palette
          </p>
          <div className="grid grid-cols-8 gap-2">
            {neonColors.map((c, i) => (
              <button
                key={i}
                className="aspect-square rounded-lg border border-white/20 transition-transform hover:scale-110"
                style={{
                  backgroundColor: c,
                  boxShadow: `0 0 10px ${c}, 0 0 20px ${c}50`,
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
