import { useState } from 'react'

export default function PastelSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const options = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js']

  const [isOpenMulti, setIsOpenMulti] = useState(false)
  const [selectedMulti, setSelectedMulti] = useState<string[]>([])

  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSearch, setSelectedSearch] = useState<string | null>(null)
  const searchOptions = ['JavaScript', 'TypeScript', 'Python', 'Rust', 'Go', 'Java', 'C++']
  const filteredOptions = searchOptions.filter(opt => opt.toLowerCase().includes(searchTerm.toLowerCase()))

  const toggleMulti = (option: string) => {
    setSelectedMulti(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8 flex flex-col gap-8 max-w-md">
      {/* Basic Select */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-purple-400 flex items-center gap-2">
          <span>🌸</span> Framework
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-2xl flex justify-between items-center text-left hover:border-purple-300 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all shadow-sm"
          >
            <span className={selected ? 'text-purple-600 font-medium' : 'text-purple-300'}>
              {selected || 'Choose your favorite'}
            </span>
            <svg
              className={`w-5 h-5 text-purple-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-2xl z-10 shadow-lg overflow-hidden">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-4 py-3 text-left border-b border-purple-100 last:border-b-0 hover:bg-purple-50 transition-colors ${
                    selected === option ? 'text-purple-600 font-semibold bg-purple-50' : 'text-purple-400'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Search Select */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-blue-400 flex items-center gap-2">
          <span>💫</span> Language
        </label>
        <div className="relative">
          <div className="relative border-2 border-blue-200 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm hover:border-blue-300 transition-colors">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsOpenSearch(true)}
              placeholder="Search languages..."
              className="w-full pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-transparent text-blue-600 placeholder-blue-300 rounded-2xl"
            />
          </div>

          {isOpenSearch && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl z-10 shadow-lg max-h-48 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedSearch(option)
                      setSearchTerm(option)
                      setIsOpenSearch(false)
                    }}
                    className={`w-full px-4 py-3 text-left border-b border-blue-100 last:border-b-0 hover:bg-blue-50 transition-colors ${
                      selectedSearch === option ? 'text-blue-600 font-semibold bg-blue-50' : 'text-blue-400'
                    }`}
                  >
                    {option}
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-blue-300 text-center">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Multi Select */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-pink-400 flex items-center gap-2">
          <span>✨</span> Technologies
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpenMulti(!isOpenMulti)}
            className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-pink-200 rounded-2xl flex justify-between items-center text-left hover:border-pink-300 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all shadow-sm"
          >
            <span className={selectedMulti.length > 0 ? 'text-pink-600 font-medium' : 'text-pink-300'}>
              {selectedMulti.length > 0 ? selectedMulti.join(', ') : 'Pick multiple'}
            </span>
            <div className="flex items-center gap-2">
              {selectedMulti.length > 0 && (
                <span className="bg-pink-200 text-pink-600 text-xs font-bold px-2 py-1 rounded-full">
                  {selectedMulti.length}
                </span>
              )}
              <svg
                className={`w-5 h-5 text-pink-300 transition-transform duration-300 ${isOpenMulti ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {isOpenMulti && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/80 backdrop-blur-sm border-2 border-pink-200 rounded-2xl z-10 shadow-lg overflow-hidden">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleMulti(option)}
                  className="w-full px-4 py-3 text-left border-b border-pink-100 last:border-b-0 hover:bg-pink-50 transition-colors flex items-center gap-3"
                >
                  <span className={`w-5 h-5 border-2 rounded-lg flex items-center justify-center transition-all ${
                    selectedMulti.includes(option)
                      ? 'bg-pink-400 border-pink-400'
                      : 'border-pink-200'
                  }`}>
                    {selectedMulti.includes(option) && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={selectedMulti.includes(option) ? 'text-pink-600 font-semibold' : 'text-pink-400'}>
                    {option}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Grouped Select */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-indigo-400 flex items-center gap-2">
          <span>📦</span> Category
        </label>
        <div className="relative">
          <GroupedSelect />
        </div>
      </div>

      {/* With Icons */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-teal-400 flex items-center gap-2">
          <span>🎨</span> Color Theme
        </label>
        <div className="relative">
          <IconSelect />
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <span>🔒</span> Disabled
        </label>
        <button
          disabled
          className="w-full px-4 py-3 bg-gray-100/50 border-2 border-gray-200 rounded-2xl flex justify-between items-center text-left cursor-not-allowed opacity-60 shadow-sm"
        >
          <span className="text-gray-300">Not available</span>
          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function GroupedSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const groups = {
    'Frontend': ['React', 'Vue', 'Angular'],
    'Backend': ['Node.js', 'Django', 'Laravel'],
    'Database': ['MongoDB', 'PostgreSQL', 'Redis']
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-indigo-200 rounded-2xl flex justify-between items-center text-left hover:border-indigo-300 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all shadow-sm"
      >
        <span className={selected ? 'text-indigo-600 font-medium' : 'text-indigo-300'}>
          {selected || 'Select from groups'}
        </span>
        <svg
          className={`w-5 h-5 text-indigo-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/80 backdrop-blur-sm border-2 border-indigo-200 rounded-2xl z-10 shadow-lg max-h-64 overflow-y-auto">
          {Object.entries(groups).map(([groupName, items]) => (
            <div key={groupName}>
              <div className="px-4 py-2 bg-indigo-100 text-indigo-500 font-semibold text-xs uppercase tracking-wide">
                {groupName}
              </div>
              {items.map((item) => (
                <button
                  key={item}
                  onClick={() => { setSelected(item); setIsOpen(false) }}
                  className={`w-full px-4 py-3 text-left border-b border-indigo-100 last:border-b-0 hover:bg-indigo-50 transition-colors ${
                    selected === item ? 'text-indigo-600 font-semibold bg-indigo-50' : 'text-indigo-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

function IconSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const themes = [
    { name: 'Sunrise', icon: '🌅', color: 'text-orange-400' },
    { name: 'Ocean', icon: '🌊', color: 'text-blue-400' },
    { name: 'Forest', icon: '🌲', color: 'text-green-400' },
    { name: 'Sunset', icon: '🌆', color: 'text-pink-400' },
    { name: 'Night', icon: '🌙', color: 'text-indigo-400' }
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-teal-200 rounded-2xl flex justify-between items-center text-left hover:border-teal-300 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all shadow-sm"
      >
        {selected ? (
          <span className="flex items-center gap-2 text-teal-600 font-medium">
            <span>{themes.find(t => t.name === selected)?.icon}</span>
            <span>{selected}</span>
          </span>
        ) : (
          <span className="text-teal-300">Select a theme</span>
        )}
        <svg
          className={`w-5 h-5 text-teal-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/80 backdrop-blur-sm border-2 border-teal-200 rounded-2xl z-10 shadow-lg overflow-hidden">
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => { setSelected(theme.name); setIsOpen(false) }}
              className={`w-full px-4 py-3 text-left border-b border-teal-100 last:border-b-0 hover:bg-teal-50 transition-colors flex items-center gap-3 ${
                selected === theme.name ? 'bg-teal-50' : ''
              }`}
            >
              <span className="text-2xl">{theme.icon}</span>
              <span className={`${selected === theme.name ? theme.color + ' font-semibold' : 'text-teal-400'}`}>
                {theme.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </>
  )
}
