import { useState } from 'react'

export default function NatureSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-xl font-semibold text-green-800 text-center">Nature Sliders</h2>

      {/* Basic Slider */}
      <div className="space-y-3 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-green-200">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-green-700">Value</span>
          <span className="text-green-800 bg-green-100 px-3 py-1 rounded-full">{value}</span>
        </div>
        <div className="relative h-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all shadow-sm"
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
            className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full transition-all pointer-events-none shadow-lg border-2 border-white"
            style={{ left: `calc(${value}% - 14px)` }}
          >
            <div className="absolute inset-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Volume Slider with Icon */}
      <div className="space-y-3 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-teal-200">
        <div className="flex justify-between items-center text-sm font-medium">
          <div className="flex items-center gap-2 text-teal-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <span>Volume</span>
          </div>
          <span className="text-teal-800 bg-teal-100 px-3 py-1 rounded-full">{volume}%</span>
        </div>
        <div className="relative h-3 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full transition-all shadow-sm"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full transition-all pointer-events-none shadow-lg border-2 border-white"
            style={{ left: `calc(${volume}% - 12px)` }}
          />
        </div>
      </div>

      {/* Slider with Tick Marks */}
      <div className="space-y-3 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-lime-200">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-lime-700">Brightness</span>
          <span className="text-lime-800 bg-lime-100 px-3 py-1 rounded-full">{brightness}%</span>
        </div>
        <div className="relative h-3 bg-gradient-to-r from-lime-100 to-green-100 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-lime-500 to-green-600 rounded-full transition-all shadow-sm"
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
            className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-gradient-to-br from-lime-400 to-green-500 rounded-full transition-all pointer-events-none shadow-lg border-2 border-white"
            style={{ left: `calc(${brightness}% - 14px)` }}
          >
            <div className="absolute inset-1 bg-white/30 rounded-full" />
          </div>
        </div>
        <div className="flex justify-between text-xs font-medium text-lime-700">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark} className="bg-lime-100 px-2 py-1 rounded-full">{mark}</span>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-3 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-emerald-200">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-emerald-700">Price Range</span>
          <span className="text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all shadow-sm"
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
            className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full transition-all pointer-events-none shadow-lg border-2 border-white"
            style={{ left: `calc(${rangeStart}% - 14px)` }}
          >
            <div className="absolute inset-1 bg-white/30 rounded-full" />
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full transition-all pointer-events-none shadow-lg border-2 border-white"
            style={{ left: `calc(${rangeEnd}% - 14px)` }}
          >
            <div className="absolute inset-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-green-200">
        <span className="text-sm font-medium text-green-700">Sizes</span>
        <div className="space-y-4">
          <div className="relative h-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-sm" />
            <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-md border-2 border-white" style={{ left: 'calc(50% - 10px)' }} />
          </div>
          <div className="relative h-3 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full shadow-sm" />
            <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full shadow-lg border-2 border-white" style={{ left: 'calc(50% - 12px)' }} />
          </div>
          <div className="relative h-4 bg-gradient-to-r from-lime-100 to-green-100 rounded-full">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-lime-500 to-green-600 rounded-full shadow-sm" />
            <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-lime-400 to-green-500 rounded-full shadow-xl border-2 border-white" style={{ left: 'calc(50% - 16px)' }}>
              <div className="absolute inset-1 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-200 opacity-50">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-gray-600">Disabled</span>
          <span className="text-gray-700 bg-gray-100 px-3 py-1 rounded-full">50</span>
        </div>
        <div className="relative h-3 bg-gray-200 rounded-full">
          <div className="absolute h-full w-1/2 bg-gray-400 rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-gray-300 rounded-full shadow-lg border-2 border-white" style={{ left: 'calc(50% - 14px)' }} />
        </div>
      </div>
    </div>
  )
}
