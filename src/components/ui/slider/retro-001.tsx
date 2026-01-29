import { useState } from 'react'

export default function RetroSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)

  return (
    <div className="min-h-screen bg-amber-100 p-8 flex flex-col gap-10 max-w-md" style={{ fontFamily: 'Courier New, monospace' }}>
      <h2 className="text-2xl font-bold text-orange-900 text-center border-4 border-orange-900 bg-amber-50 p-4 shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]">Retro Sliders</h2>

      {/* Basic Slider */}
      <div className="space-y-3 bg-orange-50 p-6 border-2 border-orange-900 rounded-none shadow-[8px_8px_0px_0px_rgba(120,53,15,0.3)]">
        <div className="flex justify-between text-sm font-bold text-orange-900">
          <span>VALUE</span>
          <span className="bg-orange-900 text-amber-50 px-3 py-1 font-mono">{value}</span>
        </div>
        <div className="relative h-6 bg-orange-200 border-2 border-orange-900 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-gradient-to-r from-orange-400 to-red-500 transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-amber-50 border-3 border-orange-900 rounded-full transition-all pointer-events-none shadow-[3px_3px_0px_0px_rgba(120,53,15,1)]"
            style={{ left: `calc(${value}% - 16px)` }}
          >
            <div className="absolute inset-2 bg-orange-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Volume Slider with Icon */}
      <div className="space-y-3 bg-orange-50 p-6 border-2 border-orange-900 rounded-none shadow-[8px_8px_0px_0px_rgba(120,53,15,0.3)]">
        <div className="flex justify-between items-center text-sm font-bold text-orange-900">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <span>VOLUME</span>
          </div>
          <span className="bg-orange-900 text-amber-50 px-3 py-1 font-mono">{volume}%</span>
        </div>
        <div className="relative h-6 bg-orange-200 border-2 border-orange-900 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-amber-50 border-3 border-orange-900 rounded-full transition-all pointer-events-none shadow-[3px_3px_0px_0px_rgba(120,53,15,1)]"
            style={{ left: `calc(${volume}% - 14px)` }}
          >
            <div className="absolute inset-2 bg-yellow-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Slider with Tick Marks */}
      <div className="space-y-3 bg-orange-50 p-6 border-2 border-orange-900 rounded-none shadow-[8px_8px_0px_0px_rgba(120,53,15,0.3)]">
        <div className="flex justify-between text-sm font-bold text-orange-900">
          <span>BRIGHTNESS</span>
          <span className="bg-orange-900 text-amber-50 px-3 py-1 font-mono">{brightness}%</span>
        </div>
        <div className="relative h-6 bg-orange-200 border-2 border-orange-900 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-gradient-to-r from-red-400 to-pink-500 transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-amber-50 border-3 border-orange-900 rounded-full transition-all pointer-events-none shadow-[3px_3px_0px_0px_rgba(120,53,15,1)]"
            style={{ left: `calc(${brightness}% - 16px)` }}
          >
            <div className="absolute inset-2 bg-red-400 rounded-full" />
          </div>
        </div>
        <div className="flex justify-between text-xs font-bold text-orange-900">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark} className="bg-orange-900 text-amber-50 px-2 py-1 font-mono">{mark}</span>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-3 bg-orange-50 p-6 border-2 border-orange-900 rounded-none shadow-[8px_8px_0px_0px_rgba(120,53,15,0.3)]">
        <div className="flex justify-between text-sm font-bold text-orange-900">
          <span>PRICE RANGE</span>
          <span className="bg-orange-900 text-amber-50 px-3 py-1 font-mono">${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-6 bg-orange-200 border-2 border-orange-900 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-gradient-to-r from-green-400 to-teal-500 transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-amber-50 border-3 border-orange-900 rounded-full transition-all pointer-events-none shadow-[3px_3px_0px_0px_rgba(120,53,15,1)]"
            style={{ left: `calc(${rangeStart}% - 16px)` }}
          >
            <div className="absolute inset-2 bg-green-400 rounded-full" />
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-amber-50 border-3 border-orange-900 rounded-full transition-all pointer-events-none shadow-[3px_3px_0px_0px_rgba(120,53,15,1)]"
            style={{ left: `calc(${rangeEnd}% - 16px)` }}
          >
            <div className="absolute inset-2 bg-teal-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-6 bg-orange-50 p-6 border-2 border-orange-900 rounded-none shadow-[8px_8px_0px_0px_rgba(120,53,15,0.3)]">
        <span className="text-sm font-bold text-orange-900">SIZES</span>
        <div className="space-y-4">
          <div className="relative h-4 bg-orange-200 border-2 border-orange-900 rounded-full">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-amber-50 border-2 border-orange-900 rounded-full shadow-[2px_2px_0px_0px_rgba(120,53,15,1)]" style={{ left: 'calc(50% - 10px)' }}>
              <div className="absolute inset-1 bg-orange-400 rounded-full" />
            </div>
          </div>
          <div className="relative h-6 bg-orange-200 border-2 border-orange-900 rounded-full">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-amber-50 border-3 border-orange-900 rounded-full shadow-[3px_3px_0px_0px_rgba(120,53,15,1)]" style={{ left: 'calc(50% - 14px)' }}>
              <div className="absolute inset-2 bg-yellow-400 rounded-full" />
            </div>
          </div>
          <div className="relative h-8 bg-orange-200 border-2 border-orange-900 rounded-full">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-red-400 to-pink-500 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-amber-50 border-3 border-orange-900 rounded-full shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]" style={{ left: 'calc(50% - 20px)' }}>
              <div className="absolute inset-2 bg-red-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 bg-orange-50 p-6 border-2 border-orange-900 rounded-none shadow-[8px_8px_0px_0px_rgba(120,53,15,0.3)] opacity-50">
        <div className="flex justify-between text-sm font-bold text-orange-900">
          <span>DISABLED</span>
          <span className="bg-orange-900 text-amber-50 px-3 py-1 font-mono">50</span>
        </div>
        <div className="relative h-6 bg-orange-200 border-2 border-orange-900 rounded-full">
          <div className="absolute h-full w-1/2 bg-orange-300 rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-amber-50 border-3 border-orange-900 rounded-full" style={{ left: 'calc(50% - 16px)' }}>
            <div className="absolute inset-2 bg-orange-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
