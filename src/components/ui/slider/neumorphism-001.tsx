import { useState } from 'react'

export default function NeumorphismSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)

  return (
    <div className="min-h-screen bg-[#e0e5ec] p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-xs font-medium text-gray-500 uppercase tracking-widest">Neumorphism Sliders</h2>

      {/* Basic Neumorphic Slider */}
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Value</span>
          <span className="font-medium text-gray-700">{value}</span>
        </div>
        <div className="relative h-3 bg-[#e0e5ec] rounded-full shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
          <div
            className="absolute h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-[#e0e5ec] rounded-full shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] transition-all pointer-events-none"
            style={{ left: `calc(${value}% - 12px)` }}
          />
        </div>
      </div>

      {/* Volume with Icon */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </div>
            <span>Volume</span>
          </div>
          <span className="font-medium text-gray-700">{volume}%</span>
        </div>
        <div className="relative h-4 bg-[#e0e5ec] rounded-full shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
          <div
            className="absolute h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-[#e0e5ec] rounded-full shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] border-2 border-emerald-400 transition-all pointer-events-none"
            style={{ left: `calc(${volume}% - 14px)` }}
          />
        </div>
      </div>

      {/* Slider with Tick Marks */}
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Brightness</span>
          <span className="font-medium text-gray-700">{brightness}%</span>
        </div>
        <div className="relative h-3 bg-[#e0e5ec] rounded-full shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
          <div
            className="absolute h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-[#e0e5ec] rounded-full shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] transition-all pointer-events-none"
            style={{ left: `calc(${brightness}% - 12px)` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-400">
          {[0, 25, 50, 75, 100].map((mark) => (
            <div key={mark} className="flex flex-col items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-gray-400" />
              <span>{mark}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Price Range</span>
          <span className="font-medium text-gray-700">${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-3 bg-[#e0e5ec] rounded-full shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
          <div
            className="absolute h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-[#e0e5ec] rounded-full shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] transition-all pointer-events-none"
            style={{ left: `calc(${rangeStart}% - 12px)` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-[#e0e5ec] rounded-full shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] transition-all pointer-events-none"
            style={{ left: `calc(${rangeEnd}% - 12px)` }}
          />
        </div>
      </div>

      {/* Neumorphic Card with Sliders */}
      <div className="p-6 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff] space-y-6">
        <h3 className="text-sm font-semibold text-gray-600">Equalizer</h3>
        <div className="flex justify-between gap-4">
          {[60, 80, 45, 70, 55].map((val, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="relative w-3 h-32 bg-[#e0e5ec] rounded-full shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full"
                  style={{ height: `${val}%` }}
                />
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#e0e5ec] rounded-full shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff]"
                  style={{ bottom: `calc(${val}% - 10px)` }}
                />
              </div>
              <span className="text-xs text-gray-500">{['60', '250', '1k', '4k', '16k'][i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-4 opacity-50">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Disabled</span>
          <span className="font-medium">50</span>
        </div>
        <div className="relative h-3 bg-[#e0e5ec] rounded-full shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]">
          <div className="absolute h-full w-1/2 bg-gray-400 rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-[#e0e5ec] rounded-full shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff]" style={{ left: 'calc(50% - 12px)' }} />
        </div>
      </div>
    </div>
  )
}
