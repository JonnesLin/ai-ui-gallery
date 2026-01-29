import { useState } from 'react'

export default function ThreeDSelect() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8 flex flex-col gap-8 max-w-md">
      {/* 3D Elevated Select */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">
          Framework
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-5 py-4 bg-white rounded-lg text-slate-700 flex justify-between items-center hover:translate-y-[-2px] active:translate-y-[1px] focus:outline-none transition-all duration-200 shadow-[0_8px_0_0_rgb(148,163,184),0_13px_20px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_0_0_rgb(148,163,184),0_15px_25px_-5px_rgba(0,0,0,0.4)] active:shadow-[0_4px_0_0_rgb(148,163,184),0_8px_15px_-5px_rgba(0,0,0,0.3)]"
          >
            <span className={selected ? 'font-semibold' : 'text-slate-400'}>
              {selected || 'Select option'}
            </span>
            <svg
              className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-lg overflow-hidden z-10 shadow-[0_10px_0_0_rgb(148,163,184),0_15px_30px_-5px_rgba(0,0,0,0.4)]">
              {options.map((option, idx) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-5 py-3 text-left font-medium transition-all duration-150 ${
                    selected === option
                      ? 'bg-blue-500 text-white shadow-inner'
                      : 'text-slate-700 hover:bg-slate-100 hover:translate-x-1'
                  } ${idx !== 0 ? 'border-t border-slate-200' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 3D Gradient Select */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">
          Priority Level
        </label>
        <GradientSelect />
      </div>

      {/* 3D Multi Select with Tags */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">
          Technologies
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpenMulti(!isOpenMulti)}
            className="w-full min-h-[56px] px-5 py-3 bg-white rounded-lg flex justify-between items-center hover:translate-y-[-2px] active:translate-y-[1px] focus:outline-none transition-all duration-200 shadow-[0_8px_0_0_rgb(148,163,184),0_13px_20px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_0_0_rgb(148,163,184),0_15px_25px_-5px_rgba(0,0,0,0.4)] active:shadow-[0_4px_0_0_rgb(148,163,184),0_8px_15px_-5px_rgba(0,0,0,0.3)]"
          >
            <div className="flex flex-wrap gap-2 flex-1">
              {selectedMulti.length > 0 ? (
                selectedMulti.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-md shadow-[0_4px_0_0_rgb(79,70,229)] flex items-center gap-2"
                  >
                    {item}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleMulti(item) }}
                      className="hover:scale-125 transition-transform"
                    >
                      ×
                    </button>
                  </span>
                ))
              ) : (
                <span className="text-slate-400 font-medium">Select multiple</span>
              )}
            </div>
            <svg
              className={`w-5 h-5 text-slate-500 transition-transform duration-200 ml-2 ${isOpenMulti ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpenMulti && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-lg overflow-hidden z-10 shadow-[0_10px_0_0_rgb(148,163,184),0_15px_30px_-5px_rgba(0,0,0,0.4)]">
              {options.map((option, idx) => (
                <button
                  key={option}
                  onClick={() => toggleMulti(option)}
                  className={`w-full px-5 py-3 text-left font-medium hover:bg-slate-100 transition-all duration-150 flex items-center gap-3 ${
                    idx !== 0 ? 'border-t border-slate-200' : ''
                  }`}
                >
                  <span className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all shadow-[0_3px_0_0_rgb(148,163,184)] ${
                    selectedMulti.includes(option)
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 border-purple-600'
                      : 'border-slate-300 bg-white'
                  }`}>
                    {selectedMulti.includes(option) && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={selectedMulti.includes(option) ? 'text-slate-900' : 'text-slate-700'}>
                    {option}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 3D Card with Nested Select */}
      <div className="p-6 bg-white rounded-xl shadow-[0_12px_0_0_rgb(148,163,184),0_17px_35px_-5px_rgba(0,0,0,0.4)]">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Settings</h3>
        <div className="space-y-4">
          <SmallSelect label="Theme" options={['Light', 'Dark', 'Auto']} />
          <SmallSelect label="Language" options={['English', 'Spanish', 'French']} />
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-slate-400 uppercase tracking-wide">
          Disabled
        </label>
        <button
          disabled
          className="w-full px-5 py-4 bg-slate-200 rounded-lg text-slate-400 flex justify-between items-center cursor-not-allowed shadow-[0_4px_0_0_rgb(203,213,225)]"
        >
          <span className="font-medium">Cannot select</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function GradientSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Medium')
  const priorities = [
    { label: 'Low', color: 'from-green-400 to-emerald-600', shadow: 'rgb(34,197,94)' },
    { label: 'Medium', color: 'from-yellow-400 to-orange-600', shadow: 'rgb(251,146,60)' },
    { label: 'High', color: 'from-red-400 to-rose-600', shadow: 'rgb(244,63,94)' },
  ]

  const current = priorities.find(p => p.label === selected) || priorities[1]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-4 bg-gradient-to-br ${current.color} text-white font-bold rounded-lg flex justify-between items-center hover:translate-y-[-2px] active:translate-y-[1px] focus:outline-none transition-all duration-200`}
        style={{
          boxShadow: `0 8px 0 0 ${current.shadow}, 0 13px 20px -5px rgba(0,0,0,0.3)`
        }}
      >
        <span>{selected}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-lg overflow-hidden z-10 shadow-[0_10px_0_0_rgb(148,163,184),0_15px_30px_-5px_rgba(0,0,0,0.4)]">
          {priorities.map((priority, idx) => (
            <button
              key={priority.label}
              onClick={() => { setSelected(priority.label); setIsOpen(false) }}
              className={`w-full px-5 py-3 text-left font-semibold bg-gradient-to-r ${priority.color} text-white hover:opacity-90 transition-all ${
                idx !== 0 ? 'border-t-2 border-white/20' : ''
              }`}
            >
              {priority.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function SmallSelect({ label, options }: { label: string; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="flex items-center justify-between">
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      <div className="relative w-36">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2 bg-slate-50 rounded-md text-sm font-medium text-slate-700 flex justify-between items-center hover:bg-slate-100 focus:outline-none transition-all shadow-[0_3px_0_0_rgb(226,232,240)]"
        >
          <span>{selected}</span>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md overflow-hidden z-10 shadow-[0_6px_0_0_rgb(148,163,184),0_10px_20px_-5px_rgba(0,0,0,0.3)]">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => { setSelected(option); setIsOpen(false) }}
                className={`w-full px-3 py-2 text-sm text-left font-medium hover:bg-slate-100 transition-all ${
                  selected === option ? 'bg-blue-500 text-white' : 'text-slate-700'
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
