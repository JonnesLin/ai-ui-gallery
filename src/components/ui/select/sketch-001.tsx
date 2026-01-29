import { useState } from 'react'

export default function SketchSelect() {
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
    <div className="min-h-screen bg-amber-50 p-8 flex flex-col gap-8 max-w-md"
      style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0,0,0,0.03) 24px, rgba(0,0,0,0.03) 26px)`
      }}
    >
      {/* Sketch Hand-drawn Select */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-handwriting text-gray-700" style={{ fontFamily: 'cursive' }}>
          Framework
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-5 py-3.5 bg-white text-gray-800 border-2 border-gray-900 font-medium flex justify-between items-center hover:bg-gray-50 focus:outline-none transition-all"
            style={{
              borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
              border: '2px solid #1f2937',
              boxShadow: '2px 3px 0 rgba(0,0,0,0.3)'
            }}
          >
            <span className={selected ? 'text-gray-900' : 'text-gray-400'} style={{ fontFamily: 'cursive' }}>
              {selected || 'Select option...'}
            </span>
            <svg
              className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeLinecap="round"
            >
              <path strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div
              className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-900 overflow-hidden z-10"
              style={{
                borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px',
                boxShadow: '3px 4px 0 rgba(0,0,0,0.3)'
              }}
            >
              {options.map((option, idx) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-5 py-3 text-left font-medium transition-all ${
                    selected === option
                      ? 'bg-yellow-100 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  } ${idx !== 0 ? 'border-t-2 border-gray-900' : ''}`}
                  style={{
                    fontFamily: 'cursive',
                    borderTopStyle: idx !== 0 ? 'dashed' : 'none'
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sketch Marker Style */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'cursive' }}>
          Priority Level
        </label>
        <MarkerSelect />
      </div>

      {/* Multi Select Sketch */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'cursive' }}>
          Technologies
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpenMulti(!isOpenMulti)}
            className="w-full min-h-[64px] px-5 py-3 bg-white border-2 border-gray-900 font-medium flex justify-between items-center hover:bg-gray-50 focus:outline-none transition-all"
            style={{
              borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px',
              boxShadow: '2px 3px 0 rgba(0,0,0,0.3)'
            }}
          >
            <div className="flex flex-wrap gap-2 flex-1">
              {selectedMulti.length > 0 ? (
                selectedMulti.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-blue-200 border-2 border-blue-900 text-blue-900 text-sm font-medium flex items-center gap-2"
                    style={{
                      borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px',
                      fontFamily: 'cursive',
                      boxShadow: '1px 2px 0 rgba(0,0,0,0.2)'
                    }}
                  >
                    {item}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleMulti(item) }}
                      className="hover:scale-125 transition-transform font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))
              ) : (
                <span className="text-gray-400" style={{ fontFamily: 'cursive' }}>
                  Select multiple...
                </span>
              )}
            </div>
            <svg
              className={`w-5 h-5 text-gray-700 transition-transform duration-300 ml-2 ${isOpenMulti ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpenMulti && (
            <div
              className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-900 overflow-hidden z-10"
              style={{
                borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px',
                boxShadow: '3px 4px 0 rgba(0,0,0,0.3)'
              }}
            >
              {options.map((option, idx) => (
                <button
                  key={option}
                  onClick={() => toggleMulti(option)}
                  className={`w-full px-5 py-3 text-left font-medium hover:bg-gray-50 transition-all flex items-center gap-3 ${
                    idx !== 0 ? 'border-t-2 border-gray-900' : ''
                  }`}
                  style={{
                    fontFamily: 'cursive',
                    borderTopStyle: idx !== 0 ? 'dashed' : 'none'
                  }}
                >
                  <span
                    className={`w-6 h-6 border-2 border-gray-900 flex items-center justify-center transition-all ${
                      selectedMulti.includes(option) ? 'bg-blue-200' : 'bg-white'
                    }`}
                    style={{
                      borderRadius: '5px 15px 5px 15px/15px 5px 15px 5px',
                      transform: selectedMulti.includes(option) ? 'rotate(-2deg)' : 'none'
                    }}
                  >
                    {selectedMulti.includes(option) && (
                      <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={selectedMulti.includes(option) ? 'text-gray-900' : 'text-gray-700'}>
                    {option}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sketch Notebook Card */}
      <div
        className="p-6 bg-white border-2 border-gray-900"
        style={{
          borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px',
          boxShadow: '4px 5px 0 rgba(0,0,0,0.3)',
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(59,130,246,0.1) 30px, rgba(59,130,246,0.1) 31px)'
        }}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900" style={{ fontFamily: 'cursive', borderBottomStyle: 'dashed' }}>
          Settings
        </h3>
        <div className="space-y-4">
          <SketchSelectSmall label="Theme" options={['Light', 'Dark', 'Auto']} />
          <SketchSelectSmall label="Language" options={['English', 'Spanish', 'French']} />
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-gray-400" style={{ fontFamily: 'cursive' }}>
          Disabled
        </label>
        <button
          disabled
          className="w-full px-5 py-3.5 bg-gray-100 border-2 border-gray-400 text-gray-400 font-medium flex justify-between items-center cursor-not-allowed"
          style={{
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            fontFamily: 'cursive'
          }}
        >
          <span>Cannot select...</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function MarkerSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Medium')
  const priorities = [
    { name: 'Low', color: 'bg-green-200 border-green-900 text-green-900' },
    { name: 'Medium', color: 'bg-yellow-200 border-yellow-900 text-yellow-900' },
    { name: 'High', color: 'bg-red-200 border-red-900 text-red-900' },
  ]

  const current = priorities.find(p => p.name === selected) || priorities[1]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-3.5 ${current.color} border-2 font-bold flex justify-between items-center focus:outline-none transition-all`}
        style={{
          borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px',
          boxShadow: '2px 3px 0 rgba(0,0,0,0.3)',
          fontFamily: 'cursive',
          transform: 'rotate(-0.5deg)'
        }}
      >
        <span>{selected}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-900 overflow-hidden z-10"
          style={{
            borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px',
            boxShadow: '3px 4px 0 rgba(0,0,0,0.3)'
          }}
        >
          {priorities.map((priority, idx) => (
            <button
              key={priority.name}
              onClick={() => { setSelected(priority.name); setIsOpen(false) }}
              className={`w-full px-5 py-3 text-left font-bold ${priority.color} hover:opacity-80 transition-all ${
                idx !== 0 ? 'border-t-2 border-gray-900' : ''
              }`}
              style={{
                fontFamily: 'cursive',
                borderTopStyle: idx !== 0 ? 'dashed' : 'none',
                transform: `rotate(${idx % 2 === 0 ? '-0.5' : '0.5'}deg)`
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

function SketchSelectSmall({ label, options }: { label: string; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="flex items-center justify-between">
      <label className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'cursive' }}>
        {label}
      </label>
      <div className="relative w-36">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2 bg-white border-2 border-gray-900 text-sm font-medium text-gray-900 flex justify-between items-center hover:bg-gray-50 focus:outline-none transition-all"
          style={{
            borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px',
            fontFamily: 'cursive',
            boxShadow: '1px 2px 0 rgba(0,0,0,0.2)'
          }}
        >
          <span>{selected}</span>
          <svg
            className={`w-4 h-4 text-gray-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-900 overflow-hidden z-10"
            style={{
              borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px',
              boxShadow: '2px 3px 0 rgba(0,0,0,0.2)'
            }}
          >
            {options.map((option, idx) => (
              <button
                key={option}
                onClick={() => { setSelected(option); setIsOpen(false) }}
                className={`w-full px-3 py-2 text-sm text-left font-medium hover:bg-gray-50 transition-all ${
                  selected === option ? 'bg-yellow-100 text-gray-900' : 'text-gray-700'
                } ${idx !== 0 ? 'border-t-2 border-gray-900' : ''}`}
                style={{
                  fontFamily: 'cursive',
                  borderTopStyle: idx !== 0 ? 'dashed' : 'none'
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
