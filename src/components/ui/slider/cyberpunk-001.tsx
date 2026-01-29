import { useState } from 'react'

export default function CyberpunkSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)

  return (
    <div className="min-h-screen bg-black p-8 flex flex-col gap-10 max-w-md" style={{ fontFamily: 'monospace' }}>
      <h2 className="text-2xl font-bold text-cyan-400 uppercase tracking-widest text-center border-2 border-cyan-400 p-4 shadow-[0_0_20px_rgba(0,255,255,0.5)] bg-gradient-to-r from-purple-900/50 to-pink-900/50">Cyberpunk Sliders</h2>

      {/* Basic Slider */}
      <div className="space-y-3 border-2 border-cyan-400 bg-black/80 p-6 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
        <div className="flex justify-between text-sm font-bold uppercase">
          <span className="text-cyan-400">Value</span>
          <span className="text-pink-500 bg-pink-500/20 px-3 py-1 border border-pink-500">[{value}]</span>
        </div>
        <div className="relative h-2 bg-cyan-950 border border-cyan-700">
          <div
            className="absolute h-full bg-gradient-to-r from-cyan-500 to-pink-500 transition-all shadow-[0_0_10px_rgba(0,255,255,0.5)]"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-cyan-400 transition-all pointer-events-none shadow-[0_0_15px_rgba(0,255,255,0.8)] border-2 border-cyan-300 clip-path-polygon"
            style={{ left: `calc(${value}% - 10px)`, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          />
        </div>
      </div>

      {/* Volume Slider with Icon */}
      <div className="space-y-3 border-2 border-pink-500 bg-black/80 p-6 shadow-[0_0_30px_rgba(255,0,255,0.3)]">
        <div className="flex justify-between items-center text-sm font-bold uppercase">
          <div className="flex items-center gap-2 text-pink-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <span>Volume</span>
          </div>
          <span className="text-cyan-400 bg-cyan-500/20 px-3 py-1 border border-cyan-400">[{volume}%]</span>
        </div>
        <div className="relative h-2 bg-pink-950 border border-pink-700">
          <div
            className="absolute h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all shadow-[0_0_10px_rgba(255,0,255,0.5)]"
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
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 transition-all pointer-events-none shadow-[0_0_15px_rgba(255,0,255,0.8)] border-2 border-pink-300"
            style={{ left: `calc(${volume}% - 8px)` }}
          />
        </div>
      </div>

      {/* Slider with Tick Marks */}
      <div className="space-y-3 border-2 border-purple-500 bg-black/80 p-6 shadow-[0_0_30px_rgba(128,0,255,0.3)]">
        <div className="flex justify-between text-sm font-bold uppercase">
          <span className="text-purple-400">Brightness</span>
          <span className="text-yellow-400 bg-yellow-500/20 px-3 py-1 border border-yellow-400">[{brightness}%]</span>
        </div>
        <div className="relative h-2 bg-purple-950 border border-purple-700">
          <div
            className="absolute h-full bg-gradient-to-r from-purple-500 to-yellow-500 transition-all shadow-[0_0_10px_rgba(128,0,255,0.5)]"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-purple-500 transition-all pointer-events-none shadow-[0_0_15px_rgba(128,0,255,0.8)] border-2 border-purple-300 clip-path-polygon"
            style={{ left: `calc(${brightness}% - 10px)`, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          />
        </div>
        <div className="flex justify-between text-xs font-bold">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark} className="text-purple-400 bg-purple-500/20 px-2 py-1 border border-purple-500">
              {mark}
            </span>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-3 border-2 border-green-500 bg-black/80 p-6 shadow-[0_0_30px_rgba(0,255,0,0.3)]">
        <div className="flex justify-between text-sm font-bold uppercase">
          <span className="text-green-400">Price Range</span>
          <span className="text-green-400 bg-green-500/20 px-3 py-1 border border-green-400">[${rangeStart} - ${rangeEnd}]</span>
        </div>
        <div className="relative h-2 bg-green-950 border border-green-700">
          <div
            className="absolute h-full bg-gradient-to-r from-green-500 to-cyan-500 transition-all shadow-[0_0_10px_rgba(0,255,0,0.5)]"
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 transition-all pointer-events-none shadow-[0_0_15px_rgba(0,255,0,0.8)] border-2 border-green-300 clip-path-polygon"
            style={{ left: `calc(${rangeStart}% - 10px)`, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-cyan-500 transition-all pointer-events-none shadow-[0_0_15px_rgba(0,255,255,0.8)] border-2 border-cyan-300 clip-path-polygon"
            style={{ left: `calc(${rangeEnd}% - 10px)`, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          />
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-6 border-2 border-cyan-400 bg-black/80 p-6 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
        <span className="text-sm font-bold uppercase text-cyan-400">Sizes</span>
        <div className="space-y-4">
          <div className="relative h-1 bg-cyan-950 border border-cyan-700">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-cyan-500 to-pink-500 shadow-[0_0_8px_rgba(0,255,255,0.5)]" />
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 border border-cyan-300 shadow-[0_0_10px_rgba(0,255,255,0.8)]" style={{ left: 'calc(50% - 6px)' }} />
          </div>
          <div className="relative h-2 bg-pink-950 border border-pink-700">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_8px_rgba(255,0,255,0.5)]" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 border-2 border-pink-300 shadow-[0_0_12px_rgba(255,0,255,0.8)]" style={{ left: 'calc(50% - 8px)' }} />
          </div>
          <div className="relative h-3 bg-purple-950 border border-purple-700">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-purple-500 to-yellow-500 shadow-[0_0_10px_rgba(128,0,255,0.5)]" />
            <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-purple-500 border-2 border-purple-300 shadow-[0_0_15px_rgba(128,0,255,0.8)] clip-path-polygon" style={{ left: 'calc(50% - 12px)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 border-2 border-gray-600 bg-black/80 p-6 shadow-[0_0_30px_rgba(128,128,128,0.2)] opacity-40">
        <div className="flex justify-between text-sm font-bold uppercase">
          <span className="text-gray-500">Disabled</span>
          <span className="text-gray-500 bg-gray-700/20 px-3 py-1 border border-gray-600">[50]</span>
        </div>
        <div className="relative h-2 bg-gray-900 border border-gray-700">
          <div className="absolute h-full w-1/2 bg-gray-700" />
          <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-600 border-2 border-gray-500" style={{ left: 'calc(50% - 10px)' }} />
        </div>
      </div>
    </div>
  )
}
