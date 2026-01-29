import { useState } from 'react'

export default function CyberpunkSelect() {
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
    <div className="min-h-screen bg-black p-8 flex flex-col gap-8 max-w-md font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500 blur-[100px] opacity-20"></div>

      <div className="relative z-10 flex flex-col gap-8">
        {/* Basic Select */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 animate-pulse"></span>
            FRAMEWORK.EXE
          </label>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-3 bg-black border border-cyan-500 hover:border-cyan-400 flex justify-between items-center text-left transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className={selected ? 'text-cyan-400 relative z-10' : 'text-gray-500 relative z-10'}>
                {selected ? `> ${selected}` : '> SELECT OPTION_'}
              </span>
              <svg
                className={`w-4 h-4 text-cyan-400 transition-transform duration-300 relative z-10 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-black border border-cyan-500 z-10 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                {options.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => { setSelected(option); setIsOpen(false) }}
                    className={`w-full px-4 py-3 text-left border-b border-cyan-900 last:border-b-0 hover:bg-cyan-500/20 transition-all group ${
                      selected === option ? 'bg-cyan-500/10 text-cyan-400' : 'text-gray-400'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-cyan-500">▸</span>
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Search Select */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-fuchsia-400 animate-pulse"></span>
            LANGUAGE.SEARCH
          </label>
          <div className="relative">
            <div className="relative border border-fuchsia-500 hover:border-fuchsia-400 bg-black group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-fuchsia-400 z-10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsOpenSearch(true)}
                placeholder="SEARCH_QUERY:"
                className="w-full pl-10 pr-4 py-3 bg-transparent text-fuchsia-400 placeholder-gray-600 focus:outline-none relative z-10"
              />
            </div>

            {isOpenSearch && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-black border border-fuchsia-500 z-10 shadow-[0_0_20px_rgba(217,70,239,0.3)] max-h-48 overflow-y-auto">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option, index) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedSearch(option)
                        setSearchTerm(option)
                        setIsOpenSearch(false)
                      }}
                      className={`w-full px-4 py-3 text-left border-b border-fuchsia-900 last:border-b-0 hover:bg-fuchsia-500/20 transition-all ${
                        selectedSearch === option ? 'bg-fuchsia-500/10 text-fuchsia-400' : 'text-gray-400'
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-fuchsia-500">▸</span>
                        {option}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500 text-center">
                    ERROR: NO_DATA_FOUND
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Multi Select */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-yellow-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 animate-pulse"></span>
            TECH.MULTI_SELECT
          </label>
          <div className="relative">
            <button
              onClick={() => setIsOpenMulti(!isOpenMulti)}
              className="w-full px-4 py-3 bg-black border border-yellow-500 hover:border-yellow-400 flex justify-between items-center text-left transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className={selectedMulti.length > 0 ? 'text-yellow-400 relative z-10' : 'text-gray-500 relative z-10'}>
                {selectedMulti.length > 0 ? `[${selectedMulti.length}] ${selectedMulti.join(' | ')}` : '> MULTI_SELECT_'}
              </span>
              <svg
                className={`w-4 h-4 text-yellow-400 transition-transform duration-300 relative z-10 ${isOpenMulti ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpenMulti && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-black border border-yellow-500 z-10 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                {options.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => toggleMulti(option)}
                    className="w-full px-4 py-3 text-left border-b border-yellow-900 last:border-b-0 hover:bg-yellow-500/20 transition-all flex items-center gap-3"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className={`w-5 h-5 border border-yellow-500 flex items-center justify-center ${
                      selectedMulti.includes(option) ? 'bg-yellow-500' : 'bg-black'
                    }`}>
                      {selectedMulti.includes(option) && (
                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className={selectedMulti.includes(option) ? 'text-yellow-400' : 'text-gray-400'}>
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
          <label className="text-xs font-bold text-green-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 animate-pulse"></span>
            CATEGORY.TREE
          </label>
          <div className="relative">
            <GroupedSelect />
          </div>
        </div>

        {/* Disabled State */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-gray-600 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-600"></span>
            DISABLED.STATE
          </label>
          <button
            disabled
            className="w-full px-4 py-3 bg-black border border-gray-800 flex justify-between items-center text-left cursor-not-allowed opacity-50"
          >
            <span className="text-gray-700">ACCESS_DENIED</span>
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

function GroupedSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const groups = {
    'FRONTEND.SYS': ['React', 'Vue', 'Angular'],
    'BACKEND.SYS': ['Node.js', 'Django', 'Laravel'],
    'DATABASE.SYS': ['MongoDB', 'PostgreSQL', 'Redis']
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-black border border-green-500 hover:border-green-400 flex justify-between items-center text-left transition-all group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className={selected ? 'text-green-400 relative z-10' : 'text-gray-500 relative z-10'}>
          {selected ? `> ${selected}` : '> SELECT_CATEGORY_'}
        </span>
        <svg
          className={`w-4 h-4 text-green-400 transition-transform duration-300 relative z-10 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-black border border-green-500 z-10 shadow-[0_0_20px_rgba(34,197,94,0.3)] max-h-64 overflow-y-auto">
          {Object.entries(groups).map(([groupName, items], groupIndex) => (
            <div key={groupName}>
              <div className="px-4 py-2 bg-green-500/20 text-green-400 font-bold text-xs uppercase tracking-wider border-b border-green-500">
                // {groupName}
              </div>
              {items.map((item, index) => (
                <button
                  key={item}
                  onClick={() => { setSelected(item); setIsOpen(false) }}
                  className={`w-full px-4 py-3 text-left border-b border-green-900 last:border-b-0 hover:bg-green-500/20 transition-all ${
                    selected === item ? 'bg-green-500/10 text-green-400' : 'text-gray-400'
                  }`}
                  style={{ animationDelay: `${(groupIndex * 3 + index) * 50}ms` }}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-green-500">▸</span>
                    {item}
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
