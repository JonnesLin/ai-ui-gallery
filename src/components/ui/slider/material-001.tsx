import { useState } from 'react'

export default function MaterialSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)
  const [temperature, setTemperature] = useState(22)

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-xs font-medium text-gray-600 uppercase tracking-widest">Material Design Sliders</h2>

      {/* Primary Material Slider */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm text-gray-700">
          <span className="font-medium">Progress</span>
          <span className="text-blue-600 font-semibold">{value}%</span>
        </div>
        <div className="relative h-1 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-blue-600 rounded-full transition-all duration-200"
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
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full shadow-md transition-all duration-200 pointer-events-none"
            style={{ left: `calc(${value}% - 8px)` }}
          />
        </div>
      </div>

      {/* Volume Slider with Icon */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <span className="font-medium">Volume</span>
          </div>
          <span className="text-teal-600 font-semibold">{volume}%</span>
        </div>
        <div className="relative h-1 bg-gray-300 rounded-full">
          <div
            className="absolute h-full bg-teal-500 rounded-full transition-all duration-200"
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
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-teal-500 rounded-full shadow-md transition-all duration-200 pointer-events-none hover:scale-110"
            style={{ left: `calc(${volume}% - 8px)` }}
          />
        </div>
      </div>

      {/* Brightness with Steps */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm text-gray-700">
          <span className="font-medium">Brightness</span>
          <span className="text-amber-600 font-semibold">{brightness}%</span>
        </div>
        <div className="relative h-1 bg-gray-300 rounded-full">
          <div
            className="absolute h-full bg-amber-500 rounded-full transition-all duration-200"
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
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-amber-500 rounded-full shadow-md transition-all duration-200 pointer-events-none"
            style={{ left: `calc(${brightness}% - 8px)` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 font-medium">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark} className={brightness === mark ? 'text-amber-600' : ''}>{mark}</span>
          ))}
        </div>
      </div>

      {/* Range Slider */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm text-gray-700">
          <span className="font-medium">Price Range</span>
          <span className="text-purple-600 font-semibold">${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-1 bg-gray-300 rounded-full">
          <div
            className="absolute h-full bg-purple-500 rounded-full transition-all duration-200"
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
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-md transition-all duration-200 pointer-events-none"
            style={{ left: `calc(${rangeStart}% - 8px)` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-md transition-all duration-200 pointer-events-none"
            style={{ left: `calc(${rangeEnd}% - 8px)` }}
          />
        </div>
      </div>

      {/* Material Card with Multiple Sliders */}
      <div className="p-6 rounded-lg bg-white shadow-lg space-y-6">
        <h3 className="text-base font-semibold text-gray-800">Audio Equalizer</h3>
        <div className="space-y-5">
          {[
            { label: 'Bass', value: 60, color: 'bg-pink-500' },
            { label: 'Mid', value: 45, color: 'bg-indigo-500' },
            { label: 'Treble', value: 75, color: 'bg-cyan-500' },
          ].map((item) => (
            <div key={item.label} className="space-y-2">
              <div className="flex justify-between text-xs text-gray-600">
                <span className="font-medium uppercase tracking-wide">{item.label}</span>
                <span className="font-semibold">{item.value}%</span>
              </div>
              <div className="relative h-1 bg-gray-200 rounded-full">
                <div
                  className={`absolute h-full ${item.color} rounded-full transition-all duration-200`}
                  style={{ width: `${item.value}%` }}
                />
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 ${item.color} rounded-full shadow-md pointer-events-none`}
                  style={{ left: `calc(${item.value}% - 6px)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Temperature Control with Display */}
      <div className="p-6 rounded-lg bg-white shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Temperature</p>
              <p className="text-xs text-gray-500">Living Room</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-red-600">{temperature}°</p>
            <p className="text-xs text-gray-500">Celsius</p>
          </div>
        </div>
        <div className="relative h-2 bg-gray-200 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-blue-400 via-green-400 to-red-500 rounded-full transition-all duration-200"
            style={{ width: `${((temperature - 16) / 14) * 100}%` }}
          />
          <input
            type="range"
            min="16"
            max="30"
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-red-500 transition-all duration-200 pointer-events-none"
            style={{ left: `calc(${((temperature - 16) / 14) * 100}% - 10px)` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 font-medium">
          <span>16°</span>
          <span>23°</span>
          <span>30°</span>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-5">
        <span className="text-xs font-medium text-gray-600 uppercase tracking-widest">Sizes</span>
        <div className="space-y-4">
          <div className="relative h-0.5 bg-gray-300 rounded-full">
            <div className="absolute h-full w-3/5 bg-green-600 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-green-600 rounded-full shadow-sm" style={{ left: 'calc(60% - 6px)' }} />
          </div>
          <div className="relative h-1 bg-gray-300 rounded-full">
            <div className="absolute h-full w-3/5 bg-blue-600 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-blue-600 rounded-full shadow-md" style={{ left: 'calc(60% - 7px)' }} />
          </div>
          <div className="relative h-1.5 bg-gray-300 rounded-full">
            <div className="absolute h-full w-3/5 bg-purple-600 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full shadow-lg" style={{ left: 'calc(60% - 8px)' }} />
          </div>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 opacity-40 cursor-not-allowed">
        <div className="flex justify-between text-sm text-gray-600">
          <span className="font-medium">Disabled</span>
          <span>50%</span>
        </div>
        <div className="relative h-1 bg-gray-300 rounded-full">
          <div className="absolute h-full w-1/2 bg-gray-400 rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full shadow-sm" style={{ left: 'calc(50% - 8px)' }} />
        </div>
      </div>
    </div>
  )
}
