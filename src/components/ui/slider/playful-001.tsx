import { useState } from 'react'

export default function PlayfulSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-2xl font-black text-purple-600 text-center transform -rotate-2">Playful Sliders!</h2>

      {/* Basic Slider */}
      <div className="space-y-3 bg-white p-6 rounded-3xl shadow-xl transform rotate-1">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-orange-600">Value</span>
          <span className="text-purple-600 bg-purple-200 px-4 py-1 rounded-full transform -rotate-3">{value}</span>
        </div>
        <div className="relative h-6 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full transition-all pointer-events-none shadow-lg transform hover:scale-110"
            style={{ left: `calc(${value}% - 20px)` }}
          >
            <div className="absolute inset-2 bg-white rounded-full" />
            <div className="absolute inset-3 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Volume Slider with Icon */}
      <div className="space-y-3 bg-white p-6 rounded-3xl shadow-xl transform -rotate-1">
        <div className="flex justify-between items-center text-sm font-bold">
          <div className="flex items-center gap-2 text-blue-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <span>Volume</span>
          </div>
          <span className="text-blue-600 bg-blue-200 px-4 py-1 rounded-full transform rotate-3">{volume}%</span>
        </div>
        <div className="relative h-6 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 transition-all pointer-events-none"
            style={{ left: `calc(${volume}% - 16px)` }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-lg shadow-lg transform rotate-45">
              <div className="absolute inset-1 bg-white rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Slider with Tick Marks */}
      <div className="space-y-3 bg-white p-6 rounded-3xl shadow-xl transform rotate-1">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-green-600">Brightness</span>
          <span className="text-green-600 bg-green-200 px-4 py-1 rounded-full transform -rotate-2">{brightness}%</span>
        </div>
        <div className="relative h-6 bg-gradient-to-r from-green-200 to-lime-200 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-green-400 to-lime-500 rounded-full transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-green-300 to-lime-400 rounded-full transition-all pointer-events-none shadow-lg"
            style={{ left: `calc(${brightness}% - 20px)` }}
          >
            <div className="absolute inset-2 bg-white rounded-full" />
            <div className="absolute inset-3 bg-gradient-to-br from-green-300 to-lime-400 rounded-full" />
          </div>
        </div>
        <div className="flex justify-between text-xs font-bold">
          {[0, 25, 50, 75, 100].map((mark, idx) => (
            <span
              key={mark}
              className="bg-green-200 text-green-700 px-2 py-1 rounded-full transform"
              style={{ rotate: `${(idx % 2 === 0 ? 1 : -1) * 5}deg` }}
            >
              {mark}
            </span>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-3 bg-white p-6 rounded-3xl shadow-xl transform -rotate-1">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-purple-600">Price Range</span>
          <span className="text-purple-600 bg-purple-200 px-4 py-1 rounded-full transform rotate-2">${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-6 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all"
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
            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full transition-all pointer-events-none shadow-lg"
            style={{ left: `calc(${rangeStart}% - 20px)` }}
          >
            <div className="absolute inset-2 bg-white rounded-full" />
            <div className="absolute inset-3 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full" />
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full transition-all pointer-events-none shadow-lg"
            style={{ left: `calc(${rangeEnd}% - 20px)` }}
          >
            <div className="absolute inset-2 bg-white rounded-full" />
            <div className="absolute inset-3 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-6 bg-white p-6 rounded-3xl shadow-xl transform rotate-1">
        <span className="text-sm font-bold text-purple-600">Fun Sizes!</span>
        <div className="space-y-4">
          <div className="relative h-4 bg-gradient-to-r from-red-200 to-orange-200 rounded-full">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-red-400 to-orange-500 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-red-300 to-orange-400 rounded-full shadow-md" style={{ left: 'calc(50% - 12px)' }}>
              <div className="absolute inset-1 bg-white rounded-full" />
            </div>
          </div>
          <div className="relative h-6 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-lg shadow-lg transform rotate-45" style={{ left: 'calc(50% - 16px)' }}>
              <div className="absolute inset-1 bg-white rounded-sm" />
            </div>
          </div>
          <div className="relative h-8 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full">
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full shadow-xl" style={{ left: 'calc(50% - 24px)' }}>
              <div className="absolute inset-2 bg-white rounded-full" />
              <div className="absolute inset-3 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 bg-white p-6 rounded-3xl shadow-xl transform -rotate-1 opacity-50">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-gray-600">Disabled</span>
          <span className="text-gray-600 bg-gray-200 px-4 py-1 rounded-full">50</span>
        </div>
        <div className="relative h-6 bg-gray-200 rounded-full">
          <div className="absolute h-full w-1/2 bg-gray-400 rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-300 rounded-full shadow-lg" style={{ left: 'calc(50% - 20px)' }}>
            <div className="absolute inset-2 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
