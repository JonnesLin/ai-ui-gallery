import { useState } from 'react'

export default function GradientSelect() {
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
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-slate-900">
      {/* Gradient Border Select */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white">
          Framework
        </label>
        <div className="relative">
          <div className="p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 flex justify-between items-center transition-all"
            >
              <span className={selected ? 'text-white' : 'text-gray-400'}>
                {selected || 'Select option'}
              </span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 z-10">
              <div className="bg-slate-900 rounded-xl overflow-hidden">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => { setSelected(option); setIsOpen(false) }}
                    className={`w-full px-4 py-3 text-left transition-all duration-200 ${
                      selected === option
                        ? 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 text-white'
                        : 'text-gray-300 hover:bg-slate-800'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gradient Background Select */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white">
          Priority Level
        </label>
        <GradientBackgroundSelect />
      </div>

      {/* Multi Select with Gradient Tags */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white">
          Technologies
        </label>
        <div className="relative">
          <div className="p-[2px] rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
            <button
              onClick={() => setIsOpenMulti(!isOpenMulti)}
              className="w-full min-h-[52px] px-4 py-2 rounded-xl bg-slate-900 flex justify-between items-center"
            >
              <div className="flex flex-wrap gap-2 flex-1">
                {selectedMulti.length > 0 ? (
                  selectedMulti.map(item => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-lg text-sm text-white flex items-center gap-1"
                    >
                      {item}
                      <span
                        onClick={(e) => { e.stopPropagation(); toggleMulti(item) }}
                        className="cursor-pointer hover:opacity-70"
                      >
                        ×
                      </span>
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400">Select multiple</span>
                )}
              </div>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-300 ml-2 ${isOpenMulti ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {isOpenMulti && (
            <div className="absolute top-full left-0 right-0 mt-2 p-[2px] rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 z-10">
              <div className="bg-slate-900 rounded-xl overflow-hidden">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleMulti(option)}
                    className="w-full px-4 py-3 text-left text-gray-300 hover:bg-slate-800 transition-all flex items-center gap-3"
                  >
                    <span className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      selectedMulti.includes(option)
                        ? 'bg-gradient-to-r from-amber-500 to-red-500 border-transparent'
                        : 'border-gray-500'
                    }`}>
                      {selectedMulti.includes(option) && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className={selectedMulti.includes(option) ? 'text-orange-400' : ''}>
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gradient Card with Selects */}
      <div className="p-[2px] rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600">
        <div className="p-6 rounded-2xl bg-slate-900">
          <h3 className="text-lg font-semibold text-white mb-4">Theme Settings</h3>
          <div className="flex flex-col gap-4">
            <GradientSelectSmall
              label="Color Scheme"
              options={['Ocean', 'Sunset', 'Forest', 'Aurora']}
              colors="from-emerald-400 to-cyan-500"
            />
            <GradientSelectSmall
              label="Animation"
              options={['Smooth', 'Bouncy', 'Elastic', 'None']}
              colors="from-teal-400 to-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Animated Gradient Select */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white">
          Animated Border
        </label>
        <AnimatedGradientSelect />
      </div>
    </div>
  )
}

function GradientBackgroundSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const priorities = [
    { name: 'Low', gradient: 'from-green-400 to-emerald-500' },
    { name: 'Medium', gradient: 'from-yellow-400 to-orange-500' },
    { name: 'High', gradient: 'from-orange-400 to-red-500' },
    { name: 'Critical', gradient: 'from-red-500 to-pink-600' },
  ]

  const selectedPriority = priorities.find(p => p.name === selected)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-xl flex justify-between items-center transition-all ${
          selectedPriority
            ? `bg-gradient-to-r ${selectedPriority.gradient} text-white`
            : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
        }`}
      >
        <span>{selected || 'Select priority'}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 rounded-xl overflow-hidden z-10 shadow-xl">
          {priorities.map((priority) => (
            <button
              key={priority.name}
              onClick={() => { setSelected(priority.name); setIsOpen(false) }}
              className={`w-full px-4 py-3 text-left transition-all flex items-center gap-3 hover:bg-slate-700 ${
                selected === priority.name ? 'bg-slate-700' : ''
              }`}
            >
              <span className={`w-4 h-4 rounded-full bg-gradient-to-r ${priority.gradient}`} />
              <span className="text-gray-200">{priority.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function GradientSelectSmall({ label, options, colors }: { label: string; options: string[]; colors: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-400">{label}</label>
      <div className="relative">
        <div className={`p-[1px] rounded-lg bg-gradient-to-r ${colors}`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-3 py-2 rounded-lg bg-slate-800 text-sm flex justify-between items-center"
          >
            <span className="text-gray-200">{selected}</span>
            <svg
              className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className={`absolute top-full left-0 right-0 mt-1 p-[1px] rounded-lg bg-gradient-to-r ${colors} z-10`}>
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-3 py-2 text-sm text-left transition-all ${
                    selected === option
                      ? 'bg-slate-700 text-white'
                      : 'text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function AnimatedGradientSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const options = ['Quantum', 'Neural', 'Cosmic', 'Plasma']

  return (
    <div className="relative">
      <div
        className="p-[2px] rounded-xl"
        style={{
          background: 'linear-gradient(90deg, #ff0080, #7928ca, #ff0080)',
          backgroundSize: '200% 100%',
          animation: 'gradient-shift 3s linear infinite',
        }}
      >
        <style>{`
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
        `}</style>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 rounded-xl bg-slate-900 flex justify-between items-center"
        >
          <span className={selected ? 'text-white' : 'text-gray-400'}>
            {selected || 'Select mode'}
          </span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 rounded-xl overflow-hidden z-10 shadow-xl border border-purple-500/30">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => { setSelected(option); setIsOpen(false) }}
              className={`w-full px-4 py-3 text-left transition-all ${
                selected === option
                  ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-purple-300'
                  : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
