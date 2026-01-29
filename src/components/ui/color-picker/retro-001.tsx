import { useState } from 'react';

const retroColors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7', '#009B77'];

export default function RetroColorPicker() {
  const [color, setColor] = useState('#FF6F61');
  const [hue, setHue] = useState(5);

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
        ~ Retro Color Picker ~
      </h2>

      <div className="max-w-sm">
        <div
          className="p-6 border-4"
          style={{
            backgroundColor: '#FFFAF0',
            borderColor: '#8B4513',
            boxShadow: '6px 6px 0 #8B4513',
          }}
        >
          <h3 className="font-bold mb-1" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>Select Color</h3>
          <p className="text-sm mb-4" style={{ color: '#A0522D', fontFamily: 'Georgia, serif' }}>Choose a vintage hue</p>

          {/* Color spectrum */}
          <div
            className="w-full h-40 mb-4 cursor-crosshair relative border-2"
            style={{
              borderColor: '#8B4513',
              background: `linear-gradient(to bottom, transparent, #000), linear-gradient(to right, #fff, hsl(${hue}, 60%, 50%))`,
            }}
          >
            <div
              className="absolute w-4 h-4 border-2 bg-white"
              style={{
                borderColor: '#8B4513',
                top: '40%',
                left: '60%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>

          {/* Hue slider */}
          <div
            className="w-full h-4 mb-4 relative cursor-pointer border-2"
            style={{
              borderColor: '#8B4513',
              background: 'linear-gradient(to right, #FF6F61, #F7CAC9, #88B04B, #009B77, #92A8D1, #6B5B95, #955251, #FF6F61)',
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width;
              setHue(Math.round(x * 360));
            }}
          >
            <div
              className="absolute top-1/2 w-5 h-5 border-2"
              style={{
                left: `${(hue / 360) * 100}%`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#FFFAF0',
                borderColor: '#8B4513',
              }}
            />
          </div>

          {/* Color preview */}
          <div className="flex gap-4 mb-4">
            <div
              className="w-16 h-16 border-2"
              style={{
                backgroundColor: color,
                borderColor: '#8B4513',
              }}
            />
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="flex-1 px-4 py-3 text-sm font-mono border-2 focus:outline-none"
              style={{
                backgroundColor: '#FFF8DC',
                borderColor: '#8B4513',
                color: '#8B4513',
                fontFamily: 'Georgia, serif',
              }}
            />
          </div>

          {/* Vintage swatches */}
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>
            Vintage Palette
          </p>
          <div className="grid grid-cols-8 gap-2">
            {retroColors.map((c, i) => (
              <button
                key={i}
                className="aspect-square border-2 hover:opacity-80 transition-opacity"
                style={{
                  backgroundColor: c,
                  borderColor: '#8B4513',
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
