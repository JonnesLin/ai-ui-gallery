import { useState } from 'react'

export default function MonochromeSelect() {
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
    <div className="min-h-screen bg-white p-8 flex flex-col gap-8 max-w-md">
      {/* Monochrome Basic Select */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-black uppercase tracking-widest">
          Framework
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-5 py-3 bg-white border-2 border-black text-black font-bold flex justify-between items-center hover:bg-black hover:text-white focus:outline-none focus:bg-black focus:text-white transition-colors"
          >
            <span className={selected ? '' : 'opacity-50'}>
              {selected || 'SELECT OPTION'}
            </span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-black z-10">
              {options.map((option, idx) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-5 py-3 text-left font-bold transition-colors ${
                    selected === option
                      ? 'bg-black text-white'
                      : 'text-black hover:bg-gray-200'
                  } ${idx !== 0 ? 'border-t-2 border-black' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Striped Select */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-black uppercase tracking-widest">
          Priority
        </label>
        <StripedSelect />
      </div>

      {/* Multi Select */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-black uppercase tracking-widest">
          Technologies
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpenMulti(!isOpenMulti)}
            className="w-full min-h-[56px] px-5 py-3 bg-white border-2 border-black font-bold flex justify-between items-center hover:bg-gray-100 focus:outline-none transition-colors"
          >
            <div className="flex flex-wrap gap-2 flex-1">
              {selectedMulti.length > 0 ? (
                selectedMulti.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-black text-white text-sm font-bold flex items-center gap-2 border-2 border-black"
                  >
                    {item}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleMulti(item) }}
                      className="hover:opacity-70 transition-opacity font-bold"
                    >
                      ✕
                    </button>
                  </span>
                ))
              ) : (
                <span className="opacity-50">SELECT MULTIPLE</span>
              )}
            </div>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ml-2 ${isOpenMulti ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpenMulti && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-black z-10">
              {options.map((option, idx) => (
                <button
                  key={option}
                  onClick={() => toggleMulti(option)}
                  className={`w-full px-5 py-3 text-left font-bold hover:bg-gray-100 transition-colors flex items-center gap-3 ${
                    idx !== 0 ? 'border-t-2 border-black' : ''
                  }`}
                >
                  <span className={`w-6 h-6 border-2 border-black flex items-center justify-center transition-all ${
                    selectedMulti.includes(option) ? 'bg-black' : 'bg-white'
                  }`}>
                    {selectedMulti.includes(option) && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={selectedMulti.includes(option) ? 'text-black' : 'text-gray-800'}>
                    {option}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dotted Border Select */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-black uppercase tracking-widest">
          Category
        </label>
        <DottedSelect />
      </div>

      {/* Monochrome Card */}
      <div className="p-6 bg-white border-4 border-black">
        <h3 className="text-lg font-bold text-black uppercase tracking-wide mb-4 pb-2 border-b-2 border-black">
          Configuration
        </h3>
        <div className="space-y-4">
          <InlineSelect label="Display" options={['Grid', 'List', 'Cards']} />
          <InlineSelect label="Sort By" options={['Name', 'Date', 'Size']} />
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Disabled
        </label>
        <button
          disabled
          className="w-full px-5 py-3 bg-gray-200 border-2 border-gray-400 text-gray-400 font-bold flex justify-between items-center cursor-not-allowed"
        >
          <span>CANNOT SELECT</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function StripedSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Medium')
  const priorities = ['Low', 'Medium', 'High']

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-3 bg-black text-white font-bold flex justify-between items-center hover:bg-gray-800 focus:outline-none transition-colors"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, black, black 10px, #333 10px, #333 20px)'
        }}
      >
        <span>{selected}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-black z-10">
          {priorities.map((priority, idx) => (
            <button
              key={priority}
              onClick={() => { setSelected(priority); setIsOpen(false) }}
              className={`w-full px-5 py-3 text-left font-bold transition-colors ${
                selected === priority
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-gray-200'
              } ${idx !== 0 ? 'border-t-2 border-black' : ''}`}
            >
              {priority}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function DottedSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Design')
  const categories = ['Design', 'Development', 'Marketing', 'Sales']

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-3 bg-white border-2 border-dashed border-black text-black font-bold flex justify-between items-center hover:bg-gray-100 focus:outline-none transition-colors"
      >
        <span>{selected}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-black z-10">
          {categories.map((category, idx) => (
            <button
              key={category}
              onClick={() => { setSelected(category); setIsOpen(false) }}
              className={`w-full px-5 py-3 text-left font-bold transition-colors ${
                selected === category
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-gray-200'
              } ${idx !== 0 ? 'border-t-2 border-black' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function InlineSelect({ label, options }: { label: string; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="flex items-center justify-between border-b-2 border-black pb-2">
      <label className="text-sm font-bold text-black uppercase tracking-wide">{label}</label>
      <div className="relative w-32">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-1.5 bg-black text-white text-sm font-bold flex justify-between items-center hover:bg-gray-800 focus:outline-none transition-colors"
        >
          <span>{selected}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-black z-10">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => { setSelected(option); setIsOpen(false) }}
                className={`w-full px-3 py-1.5 text-sm text-left font-bold transition-colors ${
                  selected === option
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-gray-200'
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
