import { useState } from 'react';
import { Slider } from './Slider';

export default function MinimalistSlider() {
  const [value, setValue] = useState(50);
  const [volume, setVolume] = useState(70);
  const [brightness, setBrightness] = useState(30);
  const [priceRange, setPriceRange] = useState<[number, number]>([25, 75]);

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest">Minimalist Sliders</h2>

      <Slider
        value={value}
        onChange={(val) => setValue(val as number)}
        label="Value"
        showValue
        theme="minimalist"
        size="sm"
      />

      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <span>Volume</span>
          </div>
          <span className="font-medium text-gray-900">{volume}%</span>
        </div>
        <Slider
          value={volume}
          onChange={(val) => setVolume(val as number)}
          theme="minimalist"
          size="sm"
        />
      </div>

      <Slider
        value={brightness}
        onChange={(val) => setBrightness(val as number)}
        label="Brightness"
        showValue
        step={10}
        theme="minimalist"
        size="md"
        marks={[
          { value: 0, label: '0' },
          { value: 25, label: '25' },
          { value: 50, label: '50' },
          { value: 75, label: '75' },
          { value: 100, label: '100' },
        ]}
      />

      <div className="space-y-3">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Price Range</span>
          <span className="font-medium text-gray-900">${priceRange[0]} - ${priceRange[1]}</span>
        </div>
        <Slider
          value={priceRange}
          onChange={(val) => setPriceRange(val as [number, number])}
          theme="minimalist"
          size="md"
        />
      </div>

      <div className="space-y-6">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Sizes</span>
        <div className="space-y-4">
          <Slider defaultValue={50} theme="minimalist" size="sm" />
          <Slider defaultValue={50} theme="minimalist" size="md" />
          <Slider defaultValue={50} theme="minimalist" size="lg" />
        </div>
      </div>

      <Slider
        defaultValue={50}
        label="Disabled"
        showValue
        disabled
        theme="minimalist"
        size="md"
      />
    </div>
  );
}
