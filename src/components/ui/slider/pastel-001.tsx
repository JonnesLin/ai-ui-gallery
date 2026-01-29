import { useState } from 'react'

export default function PastelSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-xl font-semibold text-purple-400 text-center bg-white/60 backdrop-blur-sm rounded-3xl p-4 shadow-sm">Pastel Sliders</h2>

      {/* Basic Slider */}
      <div className="space-y-3 bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-sm">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-purple-400">Value</span>
          <span className="text-purple-500 bg-purple-100 px-3 py-1 rounded-full">{value}</span>
        </div>
        <div className="relative h-3 bg-purple-100 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-purple-300 to-pink-300 rounded-full transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full transition-all pointer-events-none shadow-md ring-2 ring-purple-300"
            style={{ left: `calc(${value}% - 12px)` }}
          />
        </div>
      </div>

      {/* Volume Slider with Icon */}
      <div className="space-y-3 bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-sm">
        <div className="flex justify-between items-center text-sm font-medium">
          <div className="flex items-center gap-2 text-blue-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <span>Volume</span>
          </div>
          <span className="text-blue-500 bg-blue-100 px-3 py-1 rounded-full">{volume}%</span>
        </div>
        <div className="relative h-3 bg-blue-100 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full transition-all pointer-events-none shadow-md ring-2 ring-blue-300"
            style={{ left: `calc(${volume}% - 10px)` }}
          />
        </div>
      </div>

      {/* Slider with Tick Marks */}
      <div className="space-y-3 bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-sm">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-pink-400">Brightness</span>
          <span className="text-pink-500 bg-pink-100 px-3 py-1 rounded-full">{brightness}%</span>
        </div>
        <div className="relative h-3 bg-pink-100 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-pink-300 to-rose-300 rounded-full transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full transition-all pointer-events-none shadow-md ring-2 ring-pink-300"
            style={{ left: `calc(${brightness}% - 12px)` }}
          />
        </div>
        <div className="flex justify-between text-xs font-medium text-pink-400">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark} className="bg-pink-100 px-2 py-1 rounded-full">{mark}</span>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-3 bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-sm">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-green-400">Price Range</span>
          <span className="text-green-500 bg-green-100 px-3 py-1 rounded-full">${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-3 bg-green-100 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-green-300 to-emerald-300 rounded-full transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full transition-all pointer-events-none shadow-md ring-2 ring-green-300"
            style={{ left: `calc(${rangeStart}% - 12px)` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full transition-all pointer-events-none shadow-md ring-2 ring-emerald-300"
            style={{ left: `calc(${rangeEnd}% - 12px)` }}
          />
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-6 bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-sm">
        <span className="text-sm font-medium text-purple-400">Sizes</span>
        <div className="space-y-4">
          <div className="relative h-2 bg-purple-100 rounded-full">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-sm ring-2 ring-purple-300" style={{ left: 'calc(50% - 8px)' }} />
          </div>
          <div className="relative h-3 bg-blue-100 rounded-full">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-md ring-2 ring-blue-300" style={{ left: 'calc(50% - 10px)' }} />
          </div>
          <div className="relative h-4 bg-pink-100 rounded-full">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow-lg ring-2 ring-pink-300" style={{ left: 'calc(50% - 14px)' }} />
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-sm opacity-50">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-gray-400">Disabled</span>
          <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full">50</span>
        </div>
        <div className="relative h-3 bg-gray-100 rounded-full">
          <div className="absolute h-full w-1/2 bg-gray-300 rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md ring-2 ring-gray-300" style={{ left: 'calc(50% - 12px)' }} />
        </div>
      </div>
    </div>
  )
}
