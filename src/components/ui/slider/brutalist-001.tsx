import { useState } from 'react'

export default function BrutalistSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)

  return (
    <div className="min-h-screen bg-yellow-50 p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-xl font-black uppercase tracking-tight border-4 border-black bg-white p-4">Brutalist Sliders</h2>

      {/* Basic Slider */}
      <div className="space-y-3 border-4 border-black bg-white p-6">
        <div className="flex justify-between text-sm font-bold uppercase">
          <span>Value</span>
          <span className="bg-black text-white px-3 py-1">{value}</span>
        </div>
        <div className="relative h-8 bg-black">
          <div
            className="absolute h-full bg-red-500 transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-12 bg-white border-4 border-black transition-all pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ left: `calc(${value}% - 12px)` }}
          />
        </div>
      </div>

      {/* Volume Slider with Icon */}
      <div className="space-y-3 border-4 border-black bg-white p-6">
        <div className="flex justify-between items-center text-sm font-bold uppercase">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <span>Volume</span>
          </div>
          <span className="bg-black text-white px-3 py-1">{volume}%</span>
        </div>
        <div className="relative h-8 bg-black">
          <div
            className="absolute h-full bg-blue-500 transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-300 border-4 border-black transition-all pointer-events-none rotate-45"
            style={{ left: `calc(${volume}% - 16px)` }}
          />
        </div>
      </div>

      {/* Slider with Tick Marks */}
      <div className="space-y-3 border-4 border-black bg-white p-6">
        <div className="flex justify-between text-sm font-bold uppercase">
          <span>Brightness</span>
          <span className="bg-black text-white px-3 py-1">{brightness}%</span>
        </div>
        <div className="relative h-8 bg-black">
          <div
            className="absolute h-full bg-green-500 transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-12 bg-white border-4 border-black transition-all pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ left: `calc(${brightness}% - 12px)` }}
          />
        </div>
        <div className="flex justify-between text-xs font-bold">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark} className="bg-black text-white px-2 py-1">{mark}</span>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-3 border-4 border-black bg-white p-6">
        <div className="flex justify-between text-sm font-bold uppercase">
          <span>Price Range</span>
          <span className="bg-black text-white px-3 py-1">${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-8 bg-black">
          <div
            className="absolute h-full bg-purple-500 transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-12 bg-white border-4 border-black transition-all pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ left: `calc(${rangeStart}% - 12px)` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-6 h-12 bg-white border-4 border-black transition-all pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ left: `calc(${rangeEnd}% - 12px)` }}
          />
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-6 border-4 border-black bg-white p-6">
        <span className="text-sm font-black uppercase">Sizes</span>
        <div className="space-y-4">
          <div className="relative h-4 bg-black">
            <div className="absolute h-full w-1/2 bg-red-500" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-8 bg-white border-2 border-black" style={{ left: 'calc(50% - 8px)' }} />
          </div>
          <div className="relative h-8 bg-black">
            <div className="absolute h-full w-1/2 bg-blue-500" />
            <div className="absolute top-1/2 -translate-y-1/2 w-6 h-12 bg-white border-4 border-black" style={{ left: 'calc(50% - 12px)' }} />
          </div>
          <div className="relative h-12 bg-black">
            <div className="absolute h-full w-1/2 bg-green-500" />
            <div className="absolute top-1/2 -translate-y-1/2 w-8 h-16 bg-yellow-300 border-4 border-black rotate-45" style={{ left: 'calc(50% - 16px)' }} />
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 border-4 border-black bg-gray-100 p-6 opacity-50">
        <div className="flex justify-between text-sm font-bold uppercase">
          <span>Disabled</span>
          <span className="bg-gray-400 text-white px-3 py-1">50</span>
        </div>
        <div className="relative h-8 bg-gray-400">
          <div className="absolute h-full w-1/2 bg-gray-600" />
          <div className="absolute top-1/2 -translate-y-1/2 w-6 h-12 bg-gray-300 border-4 border-gray-600" style={{ left: 'calc(50% - 12px)' }} />
        </div>
      </div>
    </div>
  )
}
