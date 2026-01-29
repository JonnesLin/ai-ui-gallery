import { useState } from 'react';

const playfulColors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3', '#A8D8EA'];

export default function PlayfulColorPicker() {
  const [color, setColor] = useState('#FF6B6B');
  const [hue, setHue] = useState(0);

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">
      <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest flex items-center gap-2">
        <span className="animate-bounce">🎨</span>
        Playful Color Picker
        <span className="animate-bounce delay-100">✨</span>
      </h2>

      <div className="max-w-sm">
        <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-purple-200">
          <h3 className="font-bold text-purple-600 mb-1">Pick a Color! 🌈</h3>
          <p className="text-sm text-purple-400 mb-4">Choose something fun!</p>

          {/* Color spectrum */}
          <div
            className="w-full h-40 rounded-2xl mb-4 cursor-crosshair relative overflow-hidden border-4 border-purple-100"
            style={{
              background: `linear-gradient(to bottom, transparent, #000), linear-gradient(to right, #fff, hsl(${hue}, 100%, 50%))`,
            }}
          >
            <div
              className="absolute w-6 h-6 rounded-full border-4 border-white bg-white/50"
              style={{
                top: '40%',
                left: '60%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 4px 0 #9333ea, 0 6px 12px rgba(0,0,0,0.2)',
              }}
            />
          </div>

          {/* Rainbow slider */}
          <div
            className="w-full h-6 rounded-full mb-4 relative cursor-pointer border-4 border-purple-100"
            style={{
              background: 'linear-gradient(to right, #FF6B6B, #FFE66D, #4ECDC4, #95E1D3, #AA96DA, #F38181)',
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width;
              setHue(Math.round(x * 360));
            }}
          >
            <div
              className="absolute top-1/2 w-7 h-7 rounded-full bg-white border-4 border-purple-400 transform -translate-y-1/2 hover:scale-110 transition-transform"
              style={{
                left: `${(hue / 360) * 100}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 4px 0 #9333ea',
              }}
            />
          </div>

          {/* Color preview */}
          <div className="flex gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-2xl border-4 border-purple-200 transform -rotate-3 hover:rotate-3 transition-transform"
              style={{
                backgroundColor: color,
                boxShadow: '0 6px 0 #e9d5ff',
              }}
            />
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="flex-1 px-4 py-3 bg-purple-50 rounded-2xl text-sm text-purple-800 font-mono border-4 border-purple-100 focus:outline-none focus:ring-4 focus:ring-purple-200"
            />
          </div>

          {/* Fun swatches */}
          <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">🍬 Sweet Colors</p>
          <div className="grid grid-cols-8 gap-2">
            {playfulColors.map((c, i) => (
              <button
                key={i}
                className="aspect-square rounded-xl border-4 border-white transition-transform hover:scale-125 hover:rotate-12"
                style={{
                  backgroundColor: c,
                  boxShadow: '0 4px 0 rgba(0,0,0,0.1)',
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
