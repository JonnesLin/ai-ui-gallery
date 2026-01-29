import { useState } from 'react'

export default function NatureSelect() {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 flex flex-col gap-8 max-w-md">
      {/* Nature Organic Select */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-green-800">
          Choose Framework
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-5 py-3.5 bg-white text-green-800 border-2 border-green-300 rounded-2xl font-medium flex justify-between items-center hover:bg-green-50 hover:border-green-400 focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)] transition-all"
          >
            <span className={selected ? 'text-green-900' : 'text-green-500'}>
              {selected || 'Select option'}
            </span>
            <svg
              className={`w-5 h-5 text-green-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-green-300 rounded-2xl overflow-hidden z-10 shadow-lg">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-5 py-3 text-left font-medium transition-all ${
                    selected === option
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-900'
                      : 'text-green-800 hover:bg-green-50'
                  }`}
                >
                  <span className="inline-block mr-2 text-green-600">🌿</span>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Leaf Pattern Select */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-green-800">
          Growth Stage
        </label>
        <LeafSelect />
      </div>

      {/* Multi Select with Nature Tags */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-green-800">
          Select Technologies
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpenMulti(!isOpenMulti)}
            className="w-full min-h-[64px] px-5 py-3 bg-white border-2 border-green-300 rounded-2xl font-medium flex justify-between items-center hover:bg-green-50 hover:border-green-400 focus:outline-none focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)] transition-all"
          >
            <div className="flex flex-wrap gap-2 flex-1">
              {selectedMulti.length > 0 ? (
                selectedMulti.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm font-medium rounded-full flex items-center gap-2 shadow-sm"
                  >
                    🌱 {item}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleMulti(item) }}
                      className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                    >
                      ✕
                    </button>
                  </span>
                ))
              ) : (
                <span className="text-green-500">Select multiple items</span>
              )}
            </div>
            <svg
              className={`w-5 h-5 text-green-600 transition-transform duration-300 ml-2 ${isOpenMulti ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpenMulti && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-green-300 rounded-2xl overflow-hidden z-10 shadow-lg">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleMulti(option)}
                  className="w-full px-5 py-3 text-left font-medium hover:bg-green-50 transition-all flex items-center gap-3"
                >
                  <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedMulti.includes(option)
                      ? 'bg-gradient-to-br from-green-400 to-emerald-500 border-green-500'
                      : 'border-green-300 bg-white'
                  }`}>
                    {selectedMulti.includes(option) && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={selectedMulti.includes(option) ? 'text-green-900' : 'text-green-800'}>
                    {option}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Ecosystem Card */}
      <div className="p-6 bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-300 rounded-3xl shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🌳</span>
          <h3 className="text-lg font-semibold text-green-900">Environment Settings</h3>
        </div>
        <div className="space-y-4">
          <NatureSelectSmall label="Season" options={['Spring 🌸', 'Summer ☀️', 'Autumn 🍂', 'Winter ❄️']} />
          <NatureSelectSmall label="Climate" options={['Tropical 🌴', 'Temperate 🌲', 'Arctic 🏔️']} />
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-green-400">
          Dormant Option
        </label>
        <button
          disabled
          className="w-full px-5 py-3.5 bg-green-100/50 border-2 border-green-200 rounded-2xl text-green-400 font-medium flex justify-between items-center cursor-not-allowed"
        >
          <span>Currently unavailable</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function LeafSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Growing')
  const stages = [
    { name: 'Seed', icon: '🌰', color: 'from-amber-100 to-yellow-100 hover:from-amber-200 hover:to-yellow-200' },
    { name: 'Sprout', icon: '🌱', color: 'from-lime-100 to-green-100 hover:from-lime-200 hover:to-green-200' },
    { name: 'Growing', icon: '🌿', color: 'from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200' },
    { name: 'Mature', icon: '🌳', color: 'from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200' },
  ]

  const current = stages.find(s => s.name === selected) || stages[2]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-3.5 bg-gradient-to-r ${current.color.split('hover:')[0]} text-green-900 border-2 border-green-300 rounded-2xl font-medium flex justify-between items-center focus:outline-none transition-all`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{current.icon}</span>
          <span>{selected}</span>
        </div>
        <svg
          className={`w-5 h-5 text-green-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-green-300 rounded-2xl overflow-hidden z-10 shadow-lg">
          {stages.map((stage) => (
            <button
              key={stage.name}
              onClick={() => { setSelected(stage.name); setIsOpen(false) }}
              className={`w-full px-5 py-3 text-left font-medium bg-gradient-to-r ${stage.color} transition-all flex items-center gap-3`}
            >
              <span className="text-2xl">{stage.icon}</span>
              <span className="text-green-900">{stage.name}</span>
              {selected === stage.name && (
                <svg className="w-5 h-5 text-green-600 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function NatureSelectSmall({ label, options }: { label: string; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="flex items-center justify-between">
      <label className="text-sm font-medium text-green-800">{label}</label>
      <div className="relative w-44">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 bg-white border-2 border-green-300 rounded-xl text-sm font-medium text-green-900 flex justify-between items-center hover:bg-green-50 hover:border-green-400 focus:outline-none transition-all"
        >
          <span>{selected}</span>
          <svg
            className={`w-4 h-4 text-green-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-green-300 rounded-xl overflow-hidden z-10 shadow-md">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => { setSelected(option); setIsOpen(false) }}
                className={`w-full px-4 py-2 text-sm text-left font-medium hover:bg-green-50 transition-all ${
                  selected === option
                    ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-900'
                    : 'text-green-800'
                }`}
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
