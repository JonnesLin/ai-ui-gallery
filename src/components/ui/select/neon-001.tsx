import { useState } from 'react'

export default function NeonSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const options = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js']

  const [isOpenMulti, setIsOpenMulti] = useState(false)
  const [selectedMulti, setSelectedMulti] = useState<string[]>([])

  const toggleMulti = (option: string) => {
    setSelectedMulti(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 p-8 flex flex-col gap-8 max-w-md">
      {/* Neon Pink Select */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-pink-400 uppercase tracking-wider">
          Framework
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-5 py-3.5 bg-gray-900 text-pink-300 border-2 border-pink-500 font-semibold flex justify-between items-center hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] focus:outline-none focus:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-all duration-300"
            style={{
              boxShadow: '0 0 10px rgba(236,72,153,0.4)'
            }}
          >
            <span className={selected ? 'text-pink-200' : 'text-pink-500/60'}>
              {selected || 'Select option'}
            </span>
            <svg
              className={`w-5 h-5 text-pink-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div
              className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border-2 border-pink-500 overflow-hidden z-10"
              style={{
                boxShadow: '0 0 20px rgba(236,72,153,0.5)'
              }}
            >
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-5 py-3 text-left font-semibold transition-all duration-200 ${
                    selected === option
                      ? 'bg-pink-500/20 text-pink-200 shadow-[inset_0_0_20px_rgba(236,72,153,0.3)]'
                      : 'text-pink-300 hover:bg-pink-500/10 hover:shadow-[inset_0_0_15px_rgba(236,72,153,0.2)]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Neon Cyan Select */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-cyan-400 uppercase tracking-wider">
          Priority
        </label>
        <CyanSelect />
      </div>

      {/* Multi Select with Neon Tags */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-purple-400 uppercase tracking-wider">
          Technologies
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpenMulti(!isOpenMulti)}
            className="w-full min-h-[64px] px-5 py-3 bg-gray-900 border-2 border-purple-500 font-semibold flex justify-between items-center hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] focus:outline-none transition-all duration-300"
            style={{
              boxShadow: '0 0 10px rgba(168,85,247,0.4)'
            }}
          >
            <div className="flex flex-wrap gap-2 flex-1">
              {selectedMulti.length > 0 ? (
                selectedMulti.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-purple-900/50 border border-purple-400 text-purple-200 text-sm font-semibold flex items-center gap-2"
                    style={{
                      boxShadow: '0 0 10px rgba(168,85,247,0.5)'
                    }}
                  >
                    {item}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleMulti(item) }}
                      className="hover:text-purple-100 transition-colors"
                    >
                      ✕
                    </button>
                  </span>
                ))
              ) : (
                <span className="text-purple-500/60">Select multiple</span>
              )}
            </div>
            <svg
              className={`w-5 h-5 text-purple-400 transition-transform duration-300 ml-2 ${isOpenMulti ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpenMulti && (
            <div
              className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border-2 border-purple-500 overflow-hidden z-10"
              style={{
                boxShadow: '0 0 20px rgba(168,85,247,0.5)'
              }}
            >
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleMulti(option)}
                  className="w-full px-5 py-3 text-left font-semibold hover:bg-purple-500/10 transition-all duration-200 flex items-center gap-3"
                >
                  <span
                    className={`w-6 h-6 border-2 flex items-center justify-center transition-all ${
                      selectedMulti.includes(option)
                        ? 'border-purple-400 bg-purple-500/20'
                        : 'border-purple-600 bg-gray-950'
                    }`}
                    style={
                      selectedMulti.includes(option)
                        ? { boxShadow: '0 0 12px rgba(168,85,247,0.6)' }
                        : {}
                    }
                  >
                    {selectedMulti.includes(option) && (
                      <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={selectedMulti.includes(option) ? 'text-purple-200' : 'text-purple-300'}>
                    {option}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Neon RGB Select */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-green-400 uppercase tracking-wider">
          Theme Color
        </label>
        <RGBSelect />
      </div>

      {/* Neon Panel */}
      <div
        className="p-6 bg-gray-900 border-2 border-blue-500"
        style={{
          boxShadow: '0 0 30px rgba(59,130,246,0.4)'
        }}
      >
        <h3
          className="text-lg font-bold text-blue-300 uppercase tracking-wide mb-4"
          style={{
            textShadow: '0 0 10px rgba(59,130,246,0.8)'
          }}
        >
          Control Panel
        </h3>
        <div className="space-y-4">
          <CompactSelect label="Display" options={['Neon', 'Standard', 'Minimal']} color="blue" />
          <CompactSelect label="Effects" options={['Glow', 'Flash', 'Pulse']} color="green" />
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-gray-600 uppercase tracking-wider">
          Offline
        </label>
        <button
          disabled
          className="w-full px-5 py-3.5 bg-gray-900 border-2 border-gray-700 text-gray-600 font-semibold flex justify-between items-center cursor-not-allowed opacity-50"
        >
          <span>Unavailable</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function CyanSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Medium')
  const priorities = [
    { name: 'Low', color: 'green', glow: 'rgba(34,197,94,0.5)' },
    { name: 'Medium', color: 'cyan', glow: 'rgba(6,182,212,0.5)' },
    { name: 'High', color: 'red', glow: 'rgba(239,68,68,0.5)' },
  ]

  const current = priorities.find(p => p.name === selected) || priorities[1]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-3.5 bg-gray-900 text-${current.color}-300 border-2 border-${current.color}-500 font-semibold flex justify-between items-center focus:outline-none transition-all duration-300`}
        style={{
          boxShadow: `0 0 15px ${current.glow}`,
          color: current.color === 'cyan' ? '#67e8f9' : current.color === 'green' ? '#86efac' : '#fca5a5',
          borderColor: current.color === 'cyan' ? '#06b6d4' : current.color === 'green' ? '#22c55e' : '#ef4444'
        }}
      >
        <span>{selected}</span>
        <svg
          className="w-5 h-5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border-2 border-cyan-500 overflow-hidden z-10"
          style={{
            boxShadow: '0 0 20px rgba(6,182,212,0.5)'
          }}
        >
          {priorities.map((priority) => (
            <button
              key={priority.name}
              onClick={() => { setSelected(priority.name); setIsOpen(false) }}
              className={`w-full px-5 py-3 text-left font-semibold hover:bg-${priority.color}-500/10 transition-all duration-200`}
              style={{
                color: priority.color === 'cyan' ? '#67e8f9' : priority.color === 'green' ? '#86efac' : '#fca5a5'
              }}
            >
              {priority.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function RGBSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Neon Purple')
  const colors = [
    { name: 'Neon Red', border: '#ef4444', text: '#fca5a5', glow: 'rgba(239,68,68,0.5)' },
    { name: 'Neon Green', border: '#22c55e', text: '#86efac', glow: 'rgba(34,197,94,0.5)' },
    { name: 'Neon Blue', border: '#3b82f6', text: '#93c5fd', glow: 'rgba(59,130,246,0.5)' },
    { name: 'Neon Purple', border: '#a855f7', text: '#c4b5fd', glow: 'rgba(168,85,247,0.5)' },
  ]

  const current = colors.find(c => c.name === selected) || colors[3]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-3.5 bg-gray-900 font-semibold flex justify-between items-center focus:outline-none transition-all duration-300"
        style={{
          borderWidth: '2px',
          borderColor: current.border,
          color: current.text,
          boxShadow: `0 0 15px ${current.glow}`
        }}
      >
        <span>{selected}</span>
        <svg
          className="w-5 h-5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border-2 border-pink-500 overflow-hidden z-10"
          style={{
            boxShadow: '0 0 20px rgba(236,72,153,0.5)'
          }}
        >
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => { setSelected(color.name); setIsOpen(false) }}
              className="w-full px-5 py-3 text-left font-semibold hover:opacity-80 transition-all duration-200 flex items-center justify-between"
              style={{
                color: color.text,
                backgroundColor: selected === color.name ? 'rgba(255,255,255,0.05)' : 'transparent'
              }}
            >
              <span>{color.name}</span>
              <span
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: color.border,
                  boxShadow: `0 0 10px ${color.glow}`
                }}
              ></span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function CompactSelect({ label, options, color }: { label: string; options: string[]; color: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])

  const colorMap = {
    blue: { border: '#3b82f6', text: '#93c5fd', glow: 'rgba(59,130,246,0.4)' },
    green: { border: '#22c55e', text: '#86efac', glow: 'rgba(34,197,94,0.4)' }
  }

  const colors = colorMap[color as keyof typeof colorMap] || colorMap.blue

  return (
    <div className="flex items-center justify-between">
      <label className="text-sm font-semibold uppercase tracking-wide" style={{ color: colors.text }}>
        {label}
      </label>
      <div className="relative w-36">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2 bg-gray-900 border-2 text-sm font-semibold flex justify-between items-center focus:outline-none transition-all"
          style={{
            borderColor: colors.border,
            color: colors.text,
            boxShadow: `0 0 10px ${colors.glow}`
          }}
        >
          <span>{selected}</span>
          <svg
            className="w-4 h-4 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-1 bg-gray-900 border-2 overflow-hidden z-10"
            style={{
              borderColor: colors.border,
              boxShadow: `0 0 15px ${colors.glow}`
            }}
          >
            {options.map((option) => (
              <button
                key={option}
                onClick={() => { setSelected(option); setIsOpen(false) }}
                className="w-full px-3 py-2 text-sm text-left font-semibold hover:opacity-80 transition-all"
                style={{
                  color: colors.text,
                  backgroundColor: selected === option ? 'rgba(255,255,255,0.05)' : 'transparent'
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
