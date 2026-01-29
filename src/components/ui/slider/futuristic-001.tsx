import { useState } from 'react'

export default function FuturisticSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-xl font-bold text-blue-300 text-center tracking-widest uppercase">Futuristic Sliders</h2>

      {/* Basic Slider */}
      <div className="space-y-3 bg-slate-900/50 backdrop-blur-xl p-6 rounded-xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-blue-300">Value</span>
          <span className="text-blue-400 bg-blue-500/20 px-3 py-1 rounded-md border border-blue-500/40">{value}</span>
        </div>
        <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse" />
          <div
            className="absolute h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all shadow-[0_0_20px_rgba(59,130,246,0.6)]"
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
            className="absolute top-1/2 -translate-y-1/2 transition-all pointer-events-none"
            style={{ left: `calc(${value}% - 12px)` }}
          >
            <div className="w-6 h-6 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(96,165,250,0.8)]">
              <div className="absolute inset-0.5 bg-slate-900 rounded-full" />
              <div className="absolute inset-1 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Volume Slider with Icon */}
      <div className="space-y-3 bg-slate-900/50 backdrop-blur-xl p-6 rounded-xl border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
        <div className="flex justify-between items-center text-sm font-medium">
          <div className="flex items-center gap-2 text-cyan-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <span>Volume</span>
          </div>
          <span className="text-cyan-400 bg-cyan-500/20 px-3 py-1 rounded-md border border-cyan-500/40">{volume}%</span>
        </div>
        <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse" />
          <div
            className="absolute h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full transition-all shadow-[0_0_20px_rgba(34,211,238,0.6)]"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-cyan-400 rounded-full transition-all pointer-events-none shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            style={{ left: `calc(${volume}% - 10px)` }}
          >
            <div className="absolute inset-0.5 bg-slate-900 rounded-full" />
            <div className="absolute inset-1 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Slider with Tick Marks */}
      <div className="space-y-3 bg-slate-900/50 backdrop-blur-xl p-6 rounded-xl border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-purple-300">Brightness</span>
          <span className="text-purple-400 bg-purple-500/20 px-3 py-1 rounded-md border border-purple-500/40">{brightness}%</span>
        </div>
        <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse" />
          <div
            className="absolute h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full transition-all shadow-[0_0_20px_rgba(168,85,247,0.6)]"
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
            className="absolute top-1/2 -translate-y-1/2 transition-all pointer-events-none"
            style={{ left: `calc(${brightness}% - 12px)` }}
          >
            <div className="w-6 h-6 bg-purple-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]">
              <div className="absolute inset-0.5 bg-slate-900 rounded-full" />
              <div className="absolute inset-1 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xs font-medium text-purple-400">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark} className="bg-purple-500/20 px-2 py-1 rounded border border-purple-500/40">
              {mark}
            </span>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-3 bg-slate-900/50 backdrop-blur-xl p-6 rounded-xl border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-emerald-300">Price Range</span>
          <span className="text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-md border border-emerald-500/40">${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-pulse" />
          <div
            className="absolute h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.6)]"
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
            className="absolute top-1/2 -translate-y-1/2 transition-all pointer-events-none"
            style={{ left: `calc(${rangeStart}% - 12px)` }}
          >
            <div className="w-6 h-6 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)]">
              <div className="absolute inset-0.5 bg-slate-900 rounded-full" />
              <div className="absolute inset-1 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full" />
            </div>
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 transition-all pointer-events-none"
            style={{ left: `calc(${rangeEnd}% - 12px)` }}
          >
            <div className="w-6 h-6 bg-teal-400 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.8)]">
              <div className="absolute inset-0.5 bg-slate-900 rounded-full" />
              <div className="absolute inset-1 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-6 bg-slate-900/50 backdrop-blur-xl p-6 rounded-xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
        <span className="text-sm font-medium text-blue-300">Sizes</span>
        <div className="space-y-4">
          <div className="relative h-1 bg-slate-800/50 rounded-full overflow-hidden">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]" style={{ left: 'calc(50% - 8px)' }}>
              <div className="absolute inset-0.5 bg-slate-900 rounded-full" />
              <div className="absolute inset-1 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full" />
            </div>
          </div>
          <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
            <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" style={{ left: 'calc(50% - 10px)' }}>
              <div className="absolute inset-0.5 bg-slate-900 rounded-full" />
              <div className="absolute inset-1 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full" />
            </div>
          </div>
          <div className="relative h-3 bg-slate-800/50 rounded-full overflow-hidden">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
            <div className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-purple-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]" style={{ left: 'calc(50% - 14px)' }}>
              <div className="absolute inset-0.5 bg-slate-900 rounded-full" />
              <div className="absolute inset-1 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 bg-slate-900/30 backdrop-blur-xl p-6 rounded-xl border border-slate-700/30 shadow-[0_0_30px_rgba(71,85,105,0.1)] opacity-40">
        <div className="flex justify-between text-sm font-medium">
          <span className="text-slate-400">Disabled</span>
          <span className="text-slate-400 bg-slate-700/20 px-3 py-1 rounded-md border border-slate-700/40">50</span>
        </div>
        <div className="relative h-2 bg-slate-800/50 rounded-full">
          <div className="absolute h-full w-1/2 bg-slate-600 rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-500 rounded-full" style={{ left: 'calc(50% - 12px)' }}>
            <div className="absolute inset-0.5 bg-slate-900 rounded-full" />
            <div className="absolute inset-1 bg-slate-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
