import { useState } from 'react'

export default function LuxurySlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-xl font-serif text-amber-100 text-center tracking-widest">LUXURY SLIDERS</h2>

      {/* Basic Slider */}
      <div className="space-y-3 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-amber-700/30 shadow-2xl">
        <div className="flex justify-between text-sm font-serif">
          <span className="text-amber-100 tracking-wide">Value</span>
          <span className="text-amber-400 font-semibold">{value}</span>
        </div>
        <div className="relative h-2 bg-slate-950 rounded-full border border-amber-900/50">
          <div
            className="absolute h-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-full transition-all shadow-[0_0_10px_rgba(251,191,36,0.5)]"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full transition-all pointer-events-none shadow-[0_0_15px_rgba(251,191,36,0.8)] border-2 border-amber-200"
            style={{ left: `calc(${value}% - 12px)` }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Volume Slider with Icon */}
      <div className="space-y-3 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-amber-700/30 shadow-2xl">
        <div className="flex justify-between items-center text-sm font-serif">
          <div className="flex items-center gap-2 text-amber-100">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <span className="tracking-wide">Volume</span>
          </div>
          <span className="text-amber-400 font-semibold">{volume}%</span>
        </div>
        <div className="relative h-2 bg-slate-950 rounded-full border border-amber-900/50">
          <div
            className="absolute h-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-full transition-all shadow-[0_0_10px_rgba(251,191,36,0.5)]"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full transition-all pointer-events-none shadow-[0_0_15px_rgba(251,191,36,0.8)] border border-amber-200"
            style={{ left: `calc(${volume}% - 10px)` }}
          />
        </div>
      </div>

      {/* Slider with Tick Marks */}
      <div className="space-y-3 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-amber-700/30 shadow-2xl">
        <div className="flex justify-between text-sm font-serif">
          <span className="text-amber-100 tracking-wide">Brightness</span>
          <span className="text-amber-400 font-semibold">{brightness}%</span>
        </div>
        <div className="relative h-2 bg-slate-950 rounded-full border border-amber-900/50">
          <div
            className="absolute h-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-full transition-all shadow-[0_0_10px_rgba(251,191,36,0.5)]"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full transition-all pointer-events-none shadow-[0_0_15px_rgba(251,191,36,0.8)] border-2 border-amber-200"
            style={{ left: `calc(${brightness}% - 12px)` }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full" />
          </div>
        </div>
        <div className="flex justify-between text-xs font-serif text-amber-300">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark} className="bg-slate-900/80 px-2 py-1 rounded border border-amber-800/40">{mark}</span>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-3 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-amber-700/30 shadow-2xl">
        <div className="flex justify-between text-sm font-serif">
          <span className="text-amber-100 tracking-wide">Price Range</span>
          <span className="text-amber-400 font-semibold">${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-2 bg-slate-950 rounded-full border border-amber-900/50">
          <div
            className="absolute h-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-full transition-all shadow-[0_0_10px_rgba(251,191,36,0.5)]"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full transition-all pointer-events-none shadow-[0_0_15px_rgba(251,191,36,0.8)] border-2 border-amber-200"
            style={{ left: `calc(${rangeStart}% - 12px)` }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full" />
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full transition-all pointer-events-none shadow-[0_0_15px_rgba(251,191,36,0.8)] border-2 border-amber-200"
            style={{ left: `calc(${rangeEnd}% - 12px)` }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-6 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-amber-700/30 shadow-2xl">
        <span className="text-sm font-serif text-amber-100 tracking-wide">SIZES</span>
        <div className="space-y-4">
          <div className="relative h-1 bg-slate-950 rounded-full border border-amber-900/50">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.7)] border border-amber-200" style={{ left: 'calc(50% - 8px)' }} />
          </div>
          <div className="relative h-2 bg-slate-950 rounded-full border border-amber-900/50">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
            <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-[0_0_12px_rgba(251,191,36,0.7)] border border-amber-200" style={{ left: 'calc(50% - 10px)' }} />
          </div>
          <div className="relative h-3 bg-slate-950 rounded-full border border-amber-900/50">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
            <div className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8)] border-2 border-amber-200" style={{ left: 'calc(50% - 14px)' }}>
              <div className="absolute inset-1 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700/30 shadow-2xl opacity-40">
        <div className="flex justify-between text-sm font-serif">
          <span className="text-slate-400 tracking-wide">Disabled</span>
          <span className="text-slate-400">50</span>
        </div>
        <div className="relative h-2 bg-slate-950 rounded-full border border-slate-800">
          <div className="absolute h-full w-1/2 bg-slate-700 rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-600 rounded-full border-2 border-slate-500" style={{ left: 'calc(50% - 12px)' }} />
        </div>
      </div>
    </div>
  )
}
