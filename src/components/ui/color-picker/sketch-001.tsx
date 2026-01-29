import { useState } from 'react';

const sketchColors = ['#333333', '#666666', '#999999', '#CCCCCC', '#FF6B6B', '#4ECDC4', '#45B7D1', '#F7DC6F'];

export default function SketchColorPicker() {
  const [color, setColor] = useState('#333333');
  const [hue, setHue] = useState(0);

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
        Sketch Color Picker ✏️
      </h2>

      <div className="max-w-sm">
        <div
          className="bg-white p-6"
          style={{
            border: '3px solid #333',
            borderRadius: '8px 4px 12px 6px',
            boxShadow: '4px 4px 0 #ddd',
            transform: 'rotate(-0.5deg)',
          }}
        >
          <h3 className="font-bold mb-1" style={{ color: '#333', fontFamily: '"Comic Sans MS", cursive' }}>Pick a Color</h3>
          <p className="text-sm mb-4" style={{ color: '#666', fontFamily: '"Comic Sans MS", cursive' }}>* draw something nice *</p>

          {/* Color spectrum - hand-drawn look */}
          <div
            className="w-full h-40 mb-4 cursor-crosshair relative"
            style={{
              border: '2px solid #333',
              borderRadius: '4px 8px 2px 6px',
              background: `linear-gradient(to bottom, transparent, #000), linear-gradient(to right, #fff, hsl(${hue}, 80%, 50%))`,
            }}
          >
            {/* Hand-drawn pointer */}
            <div
              className="absolute w-4 h-4 rounded-full bg-white"
              style={{
                border: '2px solid #333',
                top: '40%',
                left: '60%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>

          {/* Hue slider - sketchy */}
          <div
            className="w-full h-5 mb-4 relative cursor-pointer"
            style={{
              border: '2px solid #333',
              borderRadius: '3px 5px 2px 4px',
              background: 'linear-gradient(to right, #ff6b6b, #f7dc6f, #4ecdc4, #45b7d1, #aa96da, #ff6b6b)',
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width;
              setHue(Math.round(x * 360));
            }}
          >
            <div
              className="absolute top-1/2 w-5 h-5"
              style={{
                left: `${(hue / 360) * 100}%`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                border: '2px solid #333',
                borderRadius: '50%',
              }}
            />
          </div>

          {/* Color preview */}
          <div className="flex gap-4 mb-4">
            <div
              className="w-16 h-16"
              style={{
                backgroundColor: color,
                border: '2px solid #333',
                borderRadius: '4px 2px 6px 3px',
                transform: 'rotate(1deg)',
              }}
            />
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="flex-1 px-4 py-3 text-sm font-mono focus:outline-none"
              style={{
                border: '2px solid #333',
                borderRadius: '2px 5px 3px 4px',
                color: '#333',
                fontFamily: '"Comic Sans MS", cursive',
              }}
            />
          </div>

          {/* Pencil colors */}
          <p className="text-xs uppercase tracking-wider mb-2" style={{ color: '#666', fontFamily: '"Comic Sans MS", cursive' }}>
            pencil box:
          </p>
          <div className="grid grid-cols-8 gap-2">
            {sketchColors.map((c, i) => (
              <button
                key={i}
                className="aspect-square hover:scale-110 transition-transform"
                style={{
                  backgroundColor: c,
                  border: '2px solid #333',
                  borderRadius: `${2 + i % 3}px`,
                  transform: `rotate(${-2 + i}deg)`,
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
