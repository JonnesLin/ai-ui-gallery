import { useState } from 'react'

export default function MonochromeSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)
  const [contrast, setContrast] = useState(65)

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-xs font-bold text-black uppercase tracking-widest border-b-2 border-black pb-2">Monochrome Sliders</h2>

      {/* Basic Black Slider */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-black">Value</span>
          <span className="font-mono font-bold text-black">{value}</span>
        </div>
        <div className="relative h-2 bg-gray-200 border border-gray-400">
          <div
            className="absolute h-full bg-black transition-all"
            style={{ width: `${value}%` }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-black transition-all pointer-events-none"
            style={{ left: `calc(${value}% - 10px)` }}
          />
        </div>
      </div>

      {/* Volume with Gray Scale */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <span className="font-semibold text-black">Volume</span>
          </div>
          <span className="font-mono font-bold text-black">{volume}%</span>
        </div>
        <div className="relative h-3 bg-gray-200 border-2 border-gray-800">
          <div
            className="absolute h-full bg-gradient-to-r from-gray-700 to-black transition-all"
            style={{ width: `${volume}%` }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-black border-2 border-white transition-all pointer-events-none shadow-[0_0_0_2px_black]"
            style={{ left: `calc(${volume}% - 10px)` }}
          />
        </div>
      </div>

      {/* Brightness with Tick Marks */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-black">Brightness</span>
          <span className="font-mono font-bold text-black">{brightness}%</span>
        </div>
        <div className="relative h-2 bg-gray-300 border border-black">
          <div
            className="absolute h-full bg-gray-900 transition-all"
            style={{ width: `${brightness}%` }}
          />
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black transition-all pointer-events-none"
            style={{ left: `calc(${brightness}% - 8px)` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-600 font-mono font-bold">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark} className={brightness === mark ? 'text-black' : ''}>{mark}</span>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-black">Price Range</span>
          <span className="font-mono font-bold text-black">${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-2 bg-gray-200 border border-gray-400">
          <div
            className="absolute h-full bg-black transition-all"
            style={{ left: `${rangeStart}%`, width: `${rangeEnd - rangeStart}%` }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={rangeStart}
            onChange={(e) => setRangeStart(Math.min(Number(e.target.value), rangeEnd - 5))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={rangeEnd}
            onChange={(e) => setRangeEnd(Math.max(Number(e.target.value), rangeStart + 5))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-black transition-all pointer-events-none"
            style={{ left: `calc(${rangeStart}% - 10px)` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-black transition-all pointer-events-none"
            style={{ left: `calc(${rangeEnd}% - 10px)` }}
          />
        </div>
      </div>

      {/* Monochrome Card */}
      <div className="p-6 border-4 border-black bg-gray-100 space-y-6">
        <h3 className="text-base font-bold text-black uppercase tracking-wide">Gray Scale Controls</h3>
        <div className="space-y-5">
          {[
            { label: 'Dark', value: 80, bg: 'bg-gray-900' },
            { label: 'Medium', value: 50, bg: 'bg-gray-600' },
            { label: 'Light', value: 30, bg: 'bg-gray-400' },
          ].map((item) => (
            <div key={item.label} className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-bold text-black">
                <span className="uppercase">{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="relative h-2 bg-white border border-gray-400">
                <div
                  className={`absolute h-full ${item.bg} transition-all`}
                  style={{ width: `${item.value}%` }}
                />
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 ${item.bg} border-2 border-black pointer-events-none`}
                  style={{ left: `calc(${item.value}% - 8px)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contrast Control */}
      <div className="p-6 bg-black space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-white uppercase tracking-wide">Contrast</span>
          <span className="text-2xl font-mono font-bold text-white">{contrast}%</span>
        </div>
        <div className="relative h-3 bg-gray-800 border-2 border-gray-600">
          <div
            className="absolute h-full bg-white transition-all"
            style={{ width: `${contrast}%` }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={contrast}
            onChange={(e) => setContrast(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-black transition-all pointer-events-none"
            style={{ left: `calc(${contrast}% - 12px)` }}
          />
        </div>
      </div>

      {/* Vertical Slider */}
      <div className="flex gap-8 items-center justify-center py-8">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-black uppercase">L</span>
          <div className="relative w-2 h-48 bg-gray-200 border border-black">
            <div
              className="absolute bottom-0 w-full bg-black transition-all"
              style={{ height: '60%' }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-black pointer-events-none"
              style={{ bottom: 'calc(60% - 10px)' }}
            />
          </div>
          <span className="text-xs font-mono font-bold text-black">60</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-black uppercase">M</span>
          <div className="relative w-2 h-48 bg-gray-200 border border-black">
            <div
              className="absolute bottom-0 w-full bg-gray-700 transition-all"
              style={{ height: '45%' }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-gray-700 border-2 border-black pointer-events-none"
              style={{ bottom: 'calc(45% - 10px)' }}
            />
          </div>
          <span className="text-xs font-mono font-bold text-black">45</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-black uppercase">R</span>
          <div className="relative w-2 h-48 bg-gray-200 border border-black">
            <div
              className="absolute bottom-0 w-full bg-gray-900 transition-all"
              style={{ height: '75%' }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-gray-900 border-2 border-black pointer-events-none"
              style={{ bottom: 'calc(75% - 10px)' }}
            />
          </div>
          <span className="text-xs font-mono font-bold text-black">75</span>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-5">
        <span className="text-xs font-bold text-black uppercase tracking-widest">Sizes</span>
        <div className="space-y-4">
          <div className="relative h-1 bg-gray-300 border border-gray-500">
            <div className="absolute h-full w-2/3 bg-black" />
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-black" style={{ left: 'calc(66.6% - 6px)' }} />
          </div>
          <div className="relative h-2 bg-gray-300 border border-gray-500">
            <div className="absolute h-full w-2/3 bg-black" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black" style={{ left: 'calc(66.6% - 8px)' }} />
          </div>
          <div className="relative h-3 bg-gray-300 border-2 border-black">
            <div className="absolute h-full w-2/3 bg-black" />
            <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-black" style={{ left: 'calc(66.6% - 12px)' }} />
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 opacity-40">
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-black">Disabled</span>
          <span className="font-mono font-bold">50</span>
        </div>
        <div className="relative h-2 bg-gray-200 border border-gray-400">
          <div className="absolute h-full w-1/2 bg-gray-500" />
          <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-300 border-2 border-gray-500" style={{ left: 'calc(50% - 10px)' }} />
        </div>
      </div>
    </div>
  )
}
