import { useState } from 'react';
import { Slider } from './Slider';

export default function GlassmorphismSlider() {
  const [value, setValue] = useState(50);
  const [volume, setVolume] = useState(70);
  const [brightness, setBrightness] = useState(30);
  const [priceRange, setPriceRange] = useState<[number, number]>([25, 75]);

  return (
    <div
      className="min-h-screen p-8 flex flex-col gap-10 max-w-md"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <h2 className="text-xs font-medium text-white/60 uppercase tracking-widest">Glassmorphism Sliders</h2>

      <Slider
        value={value}
        onChange={(val) => setValue(val as number)}
        label="Value"
        showValue
        theme="glassmorphism"
        size="md"
      />

      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm text-white/80">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
            <span>Volume</span>
          </div>
          <span className="font-medium text-white">{volume}%</span>
        </div>
        <Slider value={volume} onChange={(val) => setVolume(val as number)} theme="glassmorphism" size="md" />
      </div>

      <Slider
        value={brightness}
        onChange={(val) => setBrightness(val as number)}
        label="Brightness"
        showValue
        step={10}
        theme="glassmorphism"
        size="lg"
        marks={[
          { value: 0, label: '0' },
          { value: 25, label: '25' },
          { value: 50, label: '50' },
          { value: 75, label: '75' },
          { value: 100, label: '100' },
        ]}
      />

      <div className="space-y-3">
        <div className="flex justify-between text-sm text-white/80">
          <span>Price Range</span>
          <span className="font-medium text-white">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <Slider
          value={priceRange}
          onChange={(val) => setPriceRange(val as [number, number])}
          theme="glassmorphism"
          color="success"
          size="md"
        />
      </div>

      <div
        className="p-6 rounded-2xl space-y-6 backdrop-blur-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <h3 className="text-sm font-semibold text-white">Audio Equalizer</h3>
        <div className="flex gap-6 justify-center items-end h-64">
          <Slider defaultValue={60} orientation="vertical" theme="glassmorphism" size="sm" />
          <Slider defaultValue={40} orientation="vertical" theme="glassmorphism" size="sm" />
          <Slider defaultValue={75} orientation="vertical" theme="glassmorphism" size="sm" />
          <Slider defaultValue={50} orientation="vertical" theme="glassmorphism" size="sm" />
          <Slider defaultValue={65} orientation="vertical" theme="glassmorphism" size="sm" />
        </div>
      </div>

      <Slider defaultValue={50} label="Disabled" showValue disabled theme="glassmorphism" size="md" />
    </div>
  );
}
