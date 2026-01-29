import { useState } from 'react'

export default function ThreeDSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)
  const [verticalValue, setVerticalValue] = useState(60)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 flex gap-10 max-w-6xl">
      <div className="flex-1 space-y-10">
        <h2 className="text-3xl font-bold text-white">
          3D Elevated Sliders
        </h2>

        {/* Basic Single Value Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-slate-300">
              Basic Value
            </span>
            <span className="text-sm font-bold text-white bg-gradient-to-br from-blue-400 to-blue-600 px-4 py-2 rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.3),0_4px_8px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]">
              {value}
            </span>
          </div>
          <div className="relative h-4">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),inset_0_-1px_0_rgba(255,255,255,0.05)]" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(59,130,246,0.6),0_2px_6px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.2)]"
              style={{ width: `${value}%` }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-white to-slate-100 rounded-full transition-all duration-300 pointer-events-none shadow-[0_8px_24px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3),0_2px_6px_rgba(59,130,246,0.5),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.5),0_6px_16px_rgba(0,0,0,0.3),0_3px_8px_rgba(59,130,246,0.6)]"
              style={{ left: `calc(${value}% - 16px)` }}
            >
              <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.3)]" />
            </div>
          </div>
        </div>

        {/* Slider with Icon and Labels */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3),0_2px_6px_rgba(16,185,129,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-slate-300">
                Volume
              </span>
            </div>
            <span className="text-sm font-bold text-white bg-gradient-to-br from-emerald-400 to-emerald-600 px-4 py-2 rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.3),0_4px_8px_rgba(16,185,129,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]">
              {volume}%
            </span>
          </div>
          <div className="relative h-4">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),inset_0_-1px_0_rgba(255,255,255,0.05)]" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(16,185,129,0.6),0_2px_6px_rgba(16,185,129,0.4),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.2)]"
              style={{ width: `${volume}%` }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-white to-slate-100 rounded-lg transition-all duration-300 pointer-events-none shadow-[0_8px_24px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3),0_2px_6px_rgba(16,185,129,0.5),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.1)]"
              style={{ left: `calc(${volume}% - 16px)` }}
            >
              <div className="absolute inset-2 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.3)]" />
            </div>
          </div>
        </div>

        {/* Slider with Tick Marks */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-slate-300">
              Brightness
            </span>
            <span className="text-sm font-bold text-white bg-gradient-to-br from-amber-400 to-amber-600 px-4 py-2 rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.3),0_4px_8px_rgba(245,158,11,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]">
              {brightness}%
            </span>
          </div>
          <div className="relative h-4">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),inset_0_-1px_0_rgba(255,255,255,0.05)]" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(245,158,11,0.6),0_2px_6px_rgba(245,158,11,0.4),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.2)]"
              style={{ width: `${brightness}%` }}
            />
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-white to-slate-100 rounded-full transition-all duration-300 pointer-events-none shadow-[0_8px_24px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3),0_2px_6px_rgba(245,158,11,0.5),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.1)]"
              style={{ left: `calc(${brightness}% - 16px)` }}
            >
              <div className="absolute inset-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.3)]" />
            </div>
          </div>
          <div className="flex justify-between px-1">
            {[0, 25, 50, 75, 100].map((mark) => (
              <div key={mark} className="flex flex-col items-center gap-2">
                <div className="w-1 h-3 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]" />
                <span className="text-xs font-semibold text-slate-400 bg-gradient-to-br from-slate-700 to-slate-800 px-2 py-1 rounded shadow-[0_2px_6px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]">
                  {mark}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Range Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-slate-300">
              Price Range
            </span>
            <span className="text-sm font-bold text-white bg-gradient-to-br from-rose-400 to-rose-600 px-4 py-2 rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.3),0_4px_8px_rgba(244,63,94,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]">
              ${rangeStart} - ${rangeEnd}
            </span>
          </div>
          <div className="relative h-4">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),inset_0_-1px_0_rgba(255,255,255,0.05)]" />
            <div
              className="absolute inset-0 bg-gradient-to-br from-rose-400 via-rose-500 to-rose-600 rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(244,63,94,0.6),0_2px_6px_rgba(244,63,94,0.4),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.2)]"
              style={{
                left: `${rangeStart}%`,
                width: `${rangeEnd - rangeStart}%`
              }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={rangeStart}
              onChange={(e) => setRangeStart(Math.min(Number(e.target.value), rangeEnd - 5))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={rangeEnd}
              onChange={(e) => setRangeEnd(Math.max(Number(e.target.value), rangeStart + 5))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-white to-slate-100 rounded-full transition-all duration-300 pointer-events-none shadow-[0_8px_24px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3),0_2px_6px_rgba(244,63,94,0.5),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.1)]"
              style={{ left: `calc(${rangeStart}% - 16px)` }}
            >
              <div className="absolute inset-2 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.3)]" />
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-white to-slate-100 rounded-full transition-all duration-300 pointer-events-none shadow-[0_8px_24px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3),0_2px_6px_rgba(244,63,94,0.5),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.1)]"
              style={{ left: `calc(${rangeEnd}% - 16px)` }}
            >
              <div className="absolute inset-2 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.3)]" />
            </div>
          </div>
        </div>

        {/* Hover State Example */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-slate-300">
              Hover State (Interactive)
            </span>
            <span className="text-sm font-bold text-white bg-gradient-to-br from-violet-400 to-violet-600 px-4 py-2 rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.3),0_4px_8px_rgba(139,92,246,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]">
              50%
            </span>
          </div>
          <div className="relative h-4 group">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),inset_0_-1px_0_rgba(255,255,255,0.05)] group-hover:shadow-[inset_0_2px_12px_rgba(0,0,0,0.6),inset_0_-1px_0_rgba(255,255,255,0.08)] transition-all duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400 via-violet-500 to-violet-600 rounded-full shadow-[0_4px_12px_rgba(139,92,246,0.6),0_2px_6px_rgba(139,92,246,0.4),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.2)] group-hover:shadow-[0_6px_16px_rgba(139,92,246,0.7),0_3px_8px_rgba(139,92,246,0.5),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-300 w-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-white to-slate-100 rounded-full pointer-events-none shadow-[0_8px_24px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3),0_2px_6px_rgba(139,92,246,0.5),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.1)] group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.5),0_6px_16px_rgba(0,0,0,0.4),0_3px_8px_rgba(139,92,246,0.6),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-all duration-300">
              <div className="absolute inset-2 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.3)]" />
            </div>
          </div>
        </div>

        {/* Disabled State */}
        <div className="space-y-4 opacity-40 pointer-events-none">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-slate-400">
              Disabled
            </span>
            <span className="text-sm font-bold text-slate-300 bg-gradient-to-br from-slate-600 to-slate-700 px-4 py-2 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]">
              50
            </span>
          </div>
          <div className="relative h-4">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] w-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.2)]">
              <div className="absolute inset-2 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Slider */}
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-lg font-bold text-white">
          Vertical
        </h3>
        <div className="flex gap-6 items-end h-96">
          <div className="relative w-4 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full shadow-[inset_2px_0_8px_rgba(0,0,0,0.5),inset_-1px_0_0_rgba(255,255,255,0.05)]" />
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-tr from-purple-400 via-purple-500 to-purple-600 rounded-full transition-all duration-300 shadow-[0_-4px_12px_rgba(168,85,247,0.6),0_-2px_6px_rgba(168,85,247,0.4),inset_1px_0_0_rgba(255,255,255,0.4),inset_-1px_0_0_rgba(0,0,0,0.2)]"
              style={{ height: `${verticalValue}%` }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={verticalValue}
              onChange={(e) => setVerticalValue(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              style={{
                writingMode: 'vertical-lr',
                direction: 'rtl',
                width: '100%',
                height: '100%'
              }}
              // @ts-expect-error orient is a non-standard Firefox attribute
              orient="vertical"
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-white to-slate-100 rounded-full transition-all duration-300 pointer-events-none shadow-[0_8px_24px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3),0_2px_6px_rgba(168,85,247,0.5),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.1)]"
              style={{ bottom: `calc(${verticalValue}% - 16px)` }}
            >
              <div className="absolute inset-2 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.3)]" />
            </div>
          </div>
          <span className="text-sm font-bold text-white bg-gradient-to-br from-purple-400 to-purple-600 px-4 py-2 rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.3),0_4px_8px_rgba(168,85,247,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]">
            {verticalValue}%
          </span>
        </div>
      </div>
    </div>
  )
}
