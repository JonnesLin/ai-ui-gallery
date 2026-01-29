import { useState } from 'react'

export default function FlatSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(60)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)

  return (
    <div className="min-h-screen bg-slate-100 p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Flat Sliders</h2>

      {/* Basic Slider - Red */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-slate-700">Volume Control</span>
          <span className="text-red-600">{value}</span>
        </div>
        <div className="relative h-2 bg-red-200">
          <div
            className="absolute h-full bg-red-600 transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-red-700 transition-all pointer-events-none"
            style={{ left: `calc(${value}% - 10px)` }}
          />
        </div>
      </div>

      {/* Volume Slider with Icon - Blue */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm font-bold">
          <div className="flex items-center gap-2 text-blue-700">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
            <span>Audio Level</span>
          </div>
          <span className="text-blue-600">{volume}%</span>
        </div>
        <div className="relative h-2 bg-blue-200">
          <div
            className="absolute h-full bg-blue-600 transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-blue-700 transition-all pointer-events-none"
            style={{ left: `calc(${volume}% - 10px)` }}
          />
        </div>
      </div>

      {/* Slider with Tick Marks - Yellow */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-slate-700">Brightness</span>
          <span className="text-yellow-600">{brightness}%</span>
        </div>
        <div className="relative h-2 bg-yellow-200">
          <div
            className="absolute h-full bg-yellow-500 transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-yellow-600 transition-all pointer-events-none"
            style={{ left: `calc(${brightness}% - 10px)` }}
          />
        </div>
        <div className="flex justify-between text-xs font-bold text-yellow-600">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>
      </div>

      {/* Range Slider - Green */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-slate-700">Price Range</span>
          <span className="text-green-600">${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-2 bg-green-200">
          <div
            className="absolute h-full bg-green-600 transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-green-700 transition-all pointer-events-none"
            style={{ left: `calc(${rangeStart}% - 10px)` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-green-700 transition-all pointer-events-none"
            style={{ left: `calc(${rangeEnd}% - 10px)` }}
          />
        </div>
      </div>

      {/* Different Color Variants */}
      <div className="space-y-6">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Color Variants</span>
        <div className="space-y-4">
          <div className="relative h-2 bg-purple-200">
            <div className="absolute h-full w-3/4 bg-purple-600" />
            <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-purple-700" style={{ left: 'calc(75% - 10px)' }} />
          </div>
          <div className="relative h-2 bg-pink-200">
            <div className="absolute h-full w-1/2 bg-pink-600" />
            <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-pink-700" style={{ left: 'calc(50% - 10px)' }} />
          </div>
          <div className="relative h-2 bg-orange-200">
            <div className="absolute h-full w-1/3 bg-orange-600" />
            <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-orange-700" style={{ left: 'calc(33.33% - 10px)' }} />
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 opacity-50">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-slate-700">Disabled</span>
          <span className="text-slate-500">50</span>
        </div>
        <div className="relative h-2 bg-slate-300">
          <div className="absolute h-full w-1/2 bg-slate-500" />
          <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-slate-600" style={{ left: 'calc(50% - 10px)' }} />
        </div>
      </div>
    </div>
  )
}
