import { useState } from 'react'

export default function SketchSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)
  const [verticalValue, setVerticalValue] = useState(60)

  return (
    <div className="min-h-screen bg-amber-50 p-8 flex gap-10 max-w-6xl">
      <div className="flex-1 space-y-10">
        <h2 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          Sketch Sliders
        </h2>

        {/* Basic Single Value Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Basic Value
            </span>
            <span
              className="text-sm font-bold text-gray-900 bg-yellow-200 px-3 py-1.5 border-2 border-gray-800 rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              style={{ transform: 'rotate(-2deg)', fontFamily: 'Comic Sans MS, cursive' }}
            >
              {value}
            </span>
          </div>
          <div className="relative h-3">
            <div
              className="absolute inset-0 bg-white border-2 border-gray-800 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              style={{
                borderStyle: 'solid',
                borderRadius: '999px 999px 999px 999px / 50% 48% 52% 50%'
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 border-2 border-gray-800 rounded-full transition-all duration-200"
              style={{
                width: `${value}%`,
                borderRadius: '999px 999px 999px 999px / 48% 52% 50% 50%'
              }}
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
              className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-white border-3 border-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 pointer-events-none"
              style={{
                left: `calc(${value}% - 14px)`,
                transform: `translateY(-50%) rotate(${value * 3.6}deg)`
              }}
            >
              <div className="absolute inset-1.5 bg-yellow-400 border-2 border-gray-700 rounded-full" />
            </div>
          </div>
        </div>

        {/* Slider with Icon and Labels */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 stroke-[2.5px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
              <span className="text-sm font-bold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Volume
              </span>
            </div>
            <span
              className="text-sm font-bold text-gray-900 bg-blue-200 px-3 py-1.5 border-2 border-gray-800 rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              style={{ transform: 'rotate(1.5deg)', fontFamily: 'Comic Sans MS, cursive' }}
            >
              {volume}%
            </span>
          </div>
          <div className="relative h-3">
            <div
              className="absolute inset-0 bg-white border-2 border-gray-800 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              style={{
                borderRadius: '999px 999px 999px 999px / 52% 50% 48% 52%'
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 border-2 border-gray-800 rounded-full transition-all duration-200"
              style={{
                width: `${volume}%`,
                borderRadius: '999px 999px 999px 999px / 50% 48% 52% 50%'
              }}
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
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-3 border-gray-800 transition-all duration-200 pointer-events-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              style={{
                left: `calc(${volume}% - 12px)`,
                transform: `translateY(-50%) rotate(${45 + volume}deg)`,
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
              }}
            >
              <div className="absolute inset-1 bg-blue-400 border-2 border-gray-700"
                style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
              />
            </div>
          </div>
        </div>

        {/* Slider with Tick Marks */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Brightness
            </span>
            <span
              className="text-sm font-bold text-gray-900 bg-green-200 px-3 py-1.5 border-2 border-gray-800 rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              style={{ transform: 'rotate(-1deg)', fontFamily: 'Comic Sans MS, cursive' }}
            >
              {brightness}%
            </span>
          </div>
          <div className="relative h-3">
            <div
              className="absolute inset-0 bg-white border-2 border-gray-800 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              style={{
                borderRadius: '999px 999px 999px 999px / 48% 52% 50% 48%'
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-400 border-2 border-gray-800 rounded-full transition-all duration-200"
              style={{
                width: `${brightness}%`,
                borderRadius: '999px 999px 999px 999px / 52% 48% 50% 52%'
              }}
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
              className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-white border-3 border-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 pointer-events-none"
              style={{ left: `calc(${brightness}% - 14px)` }}
            >
              <div className="absolute inset-1.5 bg-green-400 border-2 border-gray-700 rounded-full" />
            </div>
          </div>
          <div className="flex justify-between px-1">
            {[0, 25, 50, 75, 100].map((mark, idx) => (
              <div key={mark} className="flex flex-col items-center gap-1">
                <div className="w-0.5 h-2 bg-gray-800" style={{ transform: `rotate(${(idx % 2 === 0 ? 3 : -3)}deg)` }} />
                <span
                  className="text-xs font-bold text-gray-700 bg-white px-1.5 py-0.5 border border-gray-800 rounded"
                  style={{
                    transform: `rotate(${(idx % 2 === 0 ? 2 : -2)}deg)`,
                    fontFamily: 'Comic Sans MS, cursive'
                  }}
                >
                  {mark}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Range Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Price Range
            </span>
            <span
              className="text-sm font-bold text-gray-900 bg-pink-200 px-3 py-1.5 border-2 border-gray-800 rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              style={{ transform: 'rotate(2deg)', fontFamily: 'Comic Sans MS, cursive' }}
            >
              ${rangeStart} - ${rangeEnd}
            </span>
          </div>
          <div className="relative h-3">
            <div
              className="absolute inset-0 bg-white border-2 border-gray-800 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              style={{
                borderRadius: '999px 999px 999px 999px / 50% 52% 48% 50%'
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-pink-300 to-pink-400 border-2 border-gray-800 rounded-full transition-all duration-200"
              style={{
                left: `${rangeStart}%`,
                width: `${rangeEnd - rangeStart}%`,
                borderRadius: '999px 999px 999px 999px / 48% 50% 52% 48%'
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
              className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-white border-3 border-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 pointer-events-none"
              style={{ left: `calc(${rangeStart}% - 14px)` }}
            >
              <div className="absolute inset-1.5 bg-pink-400 border-2 border-gray-700 rounded-full" />
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-white border-3 border-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 pointer-events-none"
              style={{ left: `calc(${rangeEnd}% - 14px)` }}
            >
              <div className="absolute inset-1.5 bg-pink-400 border-2 border-gray-700 rounded-full" />
            </div>
          </div>
        </div>

        {/* Disabled State */}
        <div className="space-y-4 opacity-50 pointer-events-none">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-gray-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Disabled
            </span>
            <span
              className="text-sm font-bold text-gray-700 bg-gray-200 px-3 py-1.5 border-2 border-gray-500 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              50
            </span>
          </div>
          <div className="relative h-3">
            <div
              className="absolute inset-0 bg-gray-100 border-2 border-gray-500 rounded-full"
              style={{
                borderRadius: '999px 999px 999px 999px / 50% 48% 52% 50%'
              }}
            />
            <div
              className="absolute inset-0 bg-gray-300 border-2 border-gray-500 rounded-full"
              style={{
                width: '50%',
                borderRadius: '999px 999px 999px 999px / 52% 50% 48% 52%'
              }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-white border-3 border-gray-500 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
              style={{ left: 'calc(50% - 14px)' }}
            >
              <div className="absolute inset-1.5 bg-gray-400 border-2 border-gray-600 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Slider */}
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          Vertical
        </h3>
        <div className="flex gap-6 items-end h-96">
          <div className="relative w-3 h-full">
            <div
              className="absolute inset-0 bg-white border-2 border-gray-800 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              style={{
                borderRadius: '999px 999px 999px 999px / 50% 50% 48% 52%'
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-300 to-purple-400 border-2 border-gray-800 rounded-full transition-all duration-200"
              style={{
                height: `${verticalValue}%`,
                borderRadius: '999px 999px 999px 999px / 48% 48% 50% 50%'
              }}
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
              className="absolute left-1/2 -translate-x-1/2 w-7 h-7 bg-white border-3 border-gray-800 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 pointer-events-none"
              style={{
                bottom: `calc(${verticalValue}% - 14px)`,
                transform: `translateX(-50%) rotate(${verticalValue * 3.6}deg)`
              }}
            >
              <div className="absolute inset-1.5 bg-purple-400 border-2 border-gray-700 rounded-full" />
            </div>
          </div>
          <span
            className="text-sm font-bold text-gray-900 bg-purple-200 px-3 py-1.5 border-2 border-gray-800 rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            style={{ transform: 'rotate(-2deg)', fontFamily: 'Comic Sans MS, cursive' }}
          >
            {verticalValue}%
          </span>
        </div>
      </div>
    </div>
  )
}
