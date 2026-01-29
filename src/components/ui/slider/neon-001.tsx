import { useState } from 'react'

export default function NeonSlider() {
  const [value, setValue] = useState(50)
  const [volume, setVolume] = useState(70)
  const [brightness, setBrightness] = useState(30)
  const [rangeStart, setRangeStart] = useState(25)
  const [rangeEnd, setRangeEnd] = useState(75)
  const [energy, setEnergy] = useState(85)

  return (
    <div className="min-h-screen bg-gray-950 p-8 flex flex-col gap-10 max-w-md">
      <h2 className="text-xs font-medium uppercase tracking-widest text-cyan-400" style={{ textShadow: '0 0 10px rgba(34,211,238,0.8)' }}>
        Neon Sliders
      </h2>

      {/* Cyan Neon Slider */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm text-gray-400">
          <span>Power Level</span>
          <span className="font-bold text-cyan-400" style={{ textShadow: '0 0 8px rgba(34,211,238,0.8)' }}>{value}%</span>
        </div>
        <div className="relative h-2 bg-gray-900 rounded-full border border-cyan-500/30" style={{ boxShadow: 'inset 0 0 10px rgba(34,211,238,0.2)' }}>
          <div
            className="absolute h-full bg-cyan-500 rounded-full transition-all"
            style={{
              width: `${value}%`,
              boxShadow: '0 0 20px rgba(34,211,238,0.8), 0 0 40px rgba(34,211,238,0.4)'
            }}
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-cyan-400 rounded-full transition-all pointer-events-none"
            style={{
              left: `calc(${value}% - 10px)`,
              boxShadow: '0 0 15px rgba(34,211,238,1), 0 0 30px rgba(34,211,238,0.6)'
            }}
          />
        </div>
      </div>

      {/* Pink Neon Volume */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 5px rgba(236,72,153,0.8))' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <span>Volume</span>
          </div>
          <span className="font-bold text-pink-400" style={{ textShadow: '0 0 8px rgba(236,72,153,0.8)' }}>{volume}%</span>
        </div>
        <div className="relative h-3 bg-gray-900 rounded-full border border-pink-500/30" style={{ boxShadow: 'inset 0 0 10px rgba(236,72,153,0.2)' }}>
          <div
            className="absolute h-full bg-pink-500 rounded-full transition-all"
            style={{
              width: `${volume}%`,
              boxShadow: '0 0 20px rgba(236,72,153,0.8), 0 0 40px rgba(236,72,153,0.4)'
            }}
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-pink-400 rounded-full transition-all pointer-events-none"
            style={{
              left: `calc(${volume}% - 10px)`,
              boxShadow: '0 0 15px rgba(236,72,153,1), 0 0 30px rgba(236,72,153,0.6)'
            }}
          />
        </div>
      </div>

      {/* Purple Neon with Ticks */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm text-gray-400">
          <span>Brightness</span>
          <span className="font-bold text-purple-400" style={{ textShadow: '0 0 8px rgba(168,85,247,0.8)' }}>{brightness}%</span>
        </div>
        <div className="relative h-2 bg-gray-900 rounded-full border border-purple-500/30" style={{ boxShadow: 'inset 0 0 10px rgba(168,85,247,0.2)' }}>
          <div
            className="absolute h-full bg-purple-500 rounded-full transition-all"
            style={{
              width: `${brightness}%`,
              boxShadow: '0 0 20px rgba(168,85,247,0.8), 0 0 40px rgba(168,85,247,0.4)'
            }}
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-purple-400 rounded-full transition-all pointer-events-none"
            style={{
              left: `calc(${brightness}% - 10px)`,
              boxShadow: '0 0 15px rgba(168,85,247,1), 0 0 30px rgba(168,85,247,0.6)'
            }}
          />
        </div>
        <div className="flex justify-between text-xs font-bold" style={{ textShadow: '0 0 5px rgba(168,85,247,0.6)' }}>
          {[0, 25, 50, 75, 100].map((mark) => (
            <span key={mark} className={brightness === mark ? 'text-purple-400' : 'text-gray-600'}>{mark}</span>
          ))}
        </div>
      </div>

      {/* Range Slider - Green Neon */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm text-gray-400">
          <span>Price Range</span>
          <span className="font-bold text-green-400" style={{ textShadow: '0 0 8px rgba(34,197,94,0.8)' }}>${rangeStart} - ${rangeEnd}</span>
        </div>
        <div className="relative h-2 bg-gray-900 rounded-full border border-green-500/30" style={{ boxShadow: 'inset 0 0 10px rgba(34,197,94,0.2)' }}>
          <div
            className="absolute h-full bg-green-500 rounded-full transition-all"
            style={{
              left: `${rangeStart}%`,
              width: `${rangeEnd - rangeStart}%`,
              boxShadow: '0 0 20px rgba(34,197,94,0.8), 0 0 40px rgba(34,197,94,0.4)'
            }}
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-green-400 rounded-full transition-all pointer-events-none"
            style={{
              left: `calc(${rangeStart}% - 10px)`,
              boxShadow: '0 0 15px rgba(34,197,94,1), 0 0 30px rgba(34,197,94,0.6)'
            }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-green-400 rounded-full transition-all pointer-events-none"
            style={{
              left: `calc(${rangeEnd}% - 10px)`,
              boxShadow: '0 0 15px rgba(34,197,94,1), 0 0 30px rgba(34,197,94,0.6)'
            }}
          />
        </div>
      </div>

      {/* Neon Card with RGB Sliders */}
      <div
        className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm space-y-6 border border-cyan-500/30"
        style={{ boxShadow: '0 0 30px rgba(34,211,238,0.2), inset 0 0 20px rgba(34,211,238,0.05)' }}
      >
        <h3 className="text-base font-bold text-cyan-400" style={{ textShadow: '0 0 10px rgba(34,211,238,0.8)' }}>RGB Mixer</h3>
        <div className="space-y-5">
          {[
            { label: 'Red', value: 255, color: 'red', bg: 'bg-red-500', text: 'text-red-400', shadow: 'rgba(239,68,68' },
            { label: 'Green', value: 180, color: 'green', bg: 'bg-green-500', text: 'text-green-400', shadow: 'rgba(34,197,94' },
            { label: 'Blue', value: 100, color: 'blue', bg: 'bg-blue-500', text: 'text-blue-400', shadow: 'rgba(59,130,246' },
          ].map((item) => (
            <div key={item.label} className="space-y-2">
              <div className={`flex justify-between text-xs ${item.text} font-bold`} style={{ textShadow: `0 0 5px ${item.shadow},0.6)` }}>
                <span className="uppercase tracking-wide">{item.label}</span>
                <span className="font-mono">{item.value}</span>
              </div>
              <div className="relative h-2 bg-gray-900 rounded-full border border-gray-700">
                <div
                  className={`absolute h-full ${item.bg} rounded-full transition-all`}
                  style={{
                    width: `${(item.value / 255) * 100}%`,
                    boxShadow: `0 0 15px ${item.shadow},0.8), 0 0 30px ${item.shadow},0.4)`
                  }}
                />
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 ${item.bg} rounded-full pointer-events-none`}
                  style={{
                    left: `calc(${(item.value / 255) * 100}% - 8px)`,
                    boxShadow: `0 0 12px ${item.shadow},1), 0 0 25px ${item.shadow},0.6)`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className="h-16 rounded-lg border-2"
          style={{
            backgroundColor: 'rgb(255, 180, 100)',
            borderColor: 'rgba(255, 180, 100, 0.5)',
            boxShadow: '0 0 30px rgba(255, 180, 100, 0.5), inset 0 0 30px rgba(255, 180, 100, 0.2)'
          }}
        />
      </div>

      {/* Energy Level with Display */}
      <div
        className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm space-y-4 border border-yellow-500/30"
        style={{ boxShadow: '0 0 30px rgba(234,179,8,0.2), inset 0 0 20px rgba(234,179,8,0.05)' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center border-2 border-yellow-500"
              style={{ boxShadow: '0 0 20px rgba(234,179,8,0.6), inset 0 0 15px rgba(234,179,8,0.2)' }}
            >
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 5px rgba(234,179,8,0.8))' }}>
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-yellow-400" style={{ textShadow: '0 0 8px rgba(234,179,8,0.8)' }}>Energy</p>
              <p className="text-xs text-gray-500">System Power</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-yellow-400" style={{ textShadow: '0 0 15px rgba(234,179,8,1)' }}>{energy}%</p>
          </div>
        </div>
        <div className="relative h-3 bg-gray-900 rounded-full border border-yellow-500/30">
          <div
            className="absolute h-full rounded-full transition-all"
            style={{
              width: `${energy}%`,
              background: 'linear-gradient(90deg, #eab308 0%, #facc15 100%)',
              boxShadow: '0 0 25px rgba(234,179,8,0.9), 0 0 50px rgba(234,179,8,0.5)'
            }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={energy}
            onChange={(e) => setEnergy(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full transition-all pointer-events-none border-2 border-yellow-300"
            style={{
              left: `calc(${energy}% - 12px)`,
              boxShadow: '0 0 20px rgba(234,179,8,1), 0 0 40px rgba(234,179,8,0.6)'
            }}
          />
        </div>
      </div>

      {/* Vertical Neon Sliders */}
      <div className="flex gap-8 items-center justify-center py-8">
        {[
          { label: 'L', value: 60, color: 'bg-cyan-500', text: 'text-cyan-400', shadow: 'rgba(34,211,238' },
          { label: 'C', value: 45, color: 'bg-pink-500', text: 'text-pink-400', shadow: 'rgba(236,72,153' },
          { label: 'R', value: 75, color: 'bg-purple-500', text: 'text-purple-400', shadow: 'rgba(168,85,247' },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-3">
            <span className={`text-xs font-bold ${item.text} uppercase`} style={{ textShadow: `0 0 8px ${item.shadow},0.8)` }}>{item.label}</span>
            <div className="relative w-2 h-48 bg-gray-900 rounded-full border border-gray-700">
              <div
                className={`absolute bottom-0 w-full ${item.color} rounded-full transition-all`}
                style={{
                  height: `${item.value}%`,
                  boxShadow: `0 0 15px ${item.shadow},0.8), 0 0 30px ${item.shadow},0.4)`
                }}
              />
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 ${item.color} rounded-full pointer-events-none`}
                style={{
                  bottom: `calc(${item.value}% - 10px)`,
                  boxShadow: `0 0 12px ${item.shadow},1), 0 0 25px ${item.shadow},0.6)`
                }}
              />
            </div>
            <span className={`text-xs font-mono font-bold ${item.text}`} style={{ textShadow: `0 0 5px ${item.shadow},0.6)` }}>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Different Sizes */}
      <div className="space-y-5">
        <span className="text-xs font-medium text-cyan-400 uppercase tracking-widest" style={{ textShadow: '0 0 10px rgba(34,211,238,0.8)' }}>Sizes</span>
        <div className="space-y-4">
          {[
            { height: 'h-1', width: 'w-3', color: 'bg-cyan-500', shadow: 'rgba(34,211,238' },
            { height: 'h-2', width: 'w-4', color: 'bg-pink-500', shadow: 'rgba(236,72,153' },
            { height: 'h-3', width: 'w-5', color: 'bg-purple-500', shadow: 'rgba(168,85,247' },
          ].map((item, idx) => (
            <div key={idx} className={`relative ${item.height} bg-gray-900 rounded-full border border-gray-700`}>
              <div
                className={`absolute ${item.height} w-2/3 ${item.color} rounded-full`}
                style={{ boxShadow: `0 0 15px ${item.shadow},0.8), 0 0 30px ${item.shadow},0.4)` }}
              />
              <div
                className={`absolute top-1/2 -translate-y-1/2 ${item.width} ${item.width} ${item.color} rounded-full`}
                style={{
                  left: 'calc(66.6% - 8px)',
                  boxShadow: `0 0 12px ${item.shadow},1), 0 0 25px ${item.shadow},0.6)`
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-3 opacity-30">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Disabled</span>
          <span className="font-bold">50</span>
        </div>
        <div className="relative h-2 bg-gray-900 rounded-full border border-gray-800">
          <div className="absolute h-full w-1/2 bg-gray-700 rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-700 rounded-full" style={{ left: 'calc(50% - 10px)' }} />
        </div>
      </div>
    </div>
  )
}
