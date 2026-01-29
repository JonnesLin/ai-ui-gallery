import { useState } from 'react';
import { Slider } from './Slider';

export default function GradientSlider() {
  const [value, setValue] = useState(50);
  const [volume, setVolume] = useState(70);
  const [brightness, setBrightness] = useState(30);
  const [priceRange, setPriceRange] = useState<[number, number]>([25, 75]);

  return (
    <div className="min-h-screen bg-slate-900 p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-xs font-medium text-slate-400 uppercase tracking-widest">Gradient Sliders</h2>

      <Slider
        value={value}
        onChange={(val) => setValue(val as number)}
        label="Value"
        showValue
        theme="gradient"
        size="lg"
      />

      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <span>Volume</span>
          </div>
          <span className="font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {volume}%
          </span>
        </div>
        <Slider
          value={volume}
          onChange={(val) => setVolume(val as number)}
          theme="gradient"
          size="lg"
        />
      </div>

      <Slider
        value={brightness}
        onChange={(val) => setBrightness(val as number)}
        label="Brightness"
        showValue
        step={10}
        theme="gradient"
        color="primary"
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
        <div className="flex justify-between text-sm text-slate-300">
          <span>Price Range</span>
          <span className="font-medium bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <Slider
          value={priceRange}
          onChange={(val) => setPriceRange(val as [number, number])}
          theme="gradient"
          color="warning"
          size="lg"
        />
      </div>

      <div
        className="p-6 rounded-2xl space-y-6"
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2), rgba(236,72,153,0.2))',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <h3 className="text-sm font-semibold text-white">Mood Settings</h3>
        <div className="space-y-5">
          <Slider defaultValue={75} label="Energy" showValue theme="gradient" color="warning" size="md" />
          <Slider defaultValue={60} label="Focus" showValue theme="gradient" color="success" size="md" />
          <Slider defaultValue={40} label="Calm" showValue theme="gradient" color="primary" size="md" />
        </div>
      </div>

      <Slider
        defaultValue={50}
        label="Disabled"
        showValue
        disabled
        theme="gradient"
        size="lg"
      />
    </div>
  );
}
