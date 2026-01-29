import { useState } from 'react'

export default function CorporateSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-lg font-semibold text-slate-700 uppercase tracking-wide">Corporate Sliders</h2>

      {/* Basic Slider */}
      <div className="space-y-3 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <div className="flex justify-between text-sm font-medium text-slate-600">
          <span>Value</span>
          <span className="text-blue-600 font-semibold">{value}</span>
        </div>
        <div className="relative h-2 bg-slate-200 rounded">
          <div
            className="absolute h-full bg-blue-600 rounded transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-600 rounded transition-all pointer-events-none shadow-sm"
            style={{ left: `calc(${value}% - 10px)` }}
          />
        </div>
      </div>

      {/* Volume Slider with Icon */}
      <div className="space-y-3 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <div className="flex justify-between items-center text-sm font-medium text-slate-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <span>Volume</span>
          </div>
          <span className="text-blue-600 font-semibold">{volume}%</span>
        </div>
        <div className="relative h-2 bg-slate-200 rounded">
          <div
            className="absolute h-full bg-blue-600 rounded transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded transition-all pointer-events-none shadow-sm"
            style={{ left: `calc(${volume}% - 8px)` }}
          />
        </div>
      </div>

      {/* Slider with Tick Marks */}
      <div className="space-y-3 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <div className="flex justify-between text-sm font-medium text-slate-600">
          <span>Brightness</span>
          <span className="text-blue-600 font-semibold">{brightness}%</span>
        </div>
        <div className="relative h-2 bg-slate-200 rounded">
          <div
            className="absolute h-full bg-blue-600 rounded transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-600 rounded transition-all pointer-events-none shadow-sm"
            style={{ left: `calc(${brightness}% - 10px)` }}
          />
        </div>
        <div className="flex justify-between text-xs font-medium text-slate-500">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-3 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <div className="flex justify-between text-sm font-medium text-slate-600">
          <span>Price Range</span>
          <span className="text-blue-600 font-semibold">${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-2 bg-slate-200 rounded">
          <div
            className="absolute h-full bg-blue-600 rounded transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-600 rounded transition-all pointer-events-none shadow-sm"
            style={{ left: `calc(${rangeStart}% - 10px)` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-600 rounded transition-all pointer-events-none shadow-sm"
            style={{ left: `calc(${rangeEnd}% - 10px)` }}
          />
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <span className="text-sm font-medium text-slate-600">Sizes</span>
        <div className="space-y-4">
          <div className="relative h-1 bg-slate-200 rounded">
            <div className="absolute h-full w-1/2 bg-blue-600 rounded" />
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded shadow-sm" style={{ left: 'calc(50% - 6px)' }} />
          </div>
          <div className="relative h-2 bg-slate-200 rounded">
            <div className="absolute h-full w-1/2 bg-blue-600 rounded" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded shadow-sm" style={{ left: 'calc(50% - 8px)' }} />
          </div>
          <div className="relative h-3 bg-slate-200 rounded">
            <div className="absolute h-full w-1/2 bg-blue-600 rounded" />
            <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-blue-600 rounded shadow-sm" style={{ left: 'calc(50% - 12px)' }} />
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 bg-white p-6 rounded-lg shadow-sm border border-slate-200 opacity-50">
        <div className="flex justify-between text-sm font-medium text-slate-600">
          <span>Disabled</span>
          <span className="font-semibold">50</span>
        </div>
        <div className="relative h-2 bg-slate-200 rounded">
          <div className="absolute h-full w-1/2 bg-slate-400 rounded" />
          <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-slate-400 rounded" style={{ left: 'calc(50% - 10px)' }} />
        </div>
      </div>
    </div>
  )
}
