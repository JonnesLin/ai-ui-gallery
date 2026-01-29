import { useState } from 'react'

export default function RetroSelect() {
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
    <div className="min-h-screen bg-[#f5e6d3] p-8 flex flex-col gap-8 max-w-md font-serif">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Special+Elite&display=swap');
      `}</style>

      {/* Basic Select */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-[#4a3820] uppercase tracking-wider" style={{ fontFamily: 'Special Elite, cursive' }}>
          Framework
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 bg-[#fff8e7] border-2 border-[#8b6f47] rounded-sm flex justify-between items-center text-left hover:bg-[#ffe4b5] focus:outline-none focus:ring-2 focus:ring-[#cd853f] transition-all shadow-[3px_3px_0px_0px_rgba(139,111,71,0.3)]"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            <span className={selected ? 'text-[#4a3820]' : 'text-[#9b8b7e]'}>
              {selected || 'Select option...'}
            </span>
            <svg
              className={`w-5 h-5 text-[#8b6f47] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#fff8e7] border-2 border-[#8b6f47] rounded-sm z-10 shadow-[5px_5px_0px_0px_rgba(139,111,71,0.3)] overflow-hidden">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-4 py-3 text-left border-b border-[#d4c4a8] last:border-b-0 hover:bg-[#ffe4b5] transition-colors ${
                    selected === option ? 'bg-[#cd853f] text-white font-bold' : 'text-[#4a3820]'
                  }`}
                  style={{ fontFamily: 'Courier Prime, monospace' }}
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
        <label className="text-sm font-bold text-[#4a3820] uppercase tracking-wider flex items-center gap-2" style={{ fontFamily: 'Special Elite, cursive' }}>
          <span>📚</span> Language
        </label>
        <div className="relative">
          <div className="relative border-2 border-[#8b6f47] rounded-sm bg-[#fff8e7] shadow-[3px_3px_0px_0px_rgba(139,111,71,0.3)]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b6f47]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsOpenSearch(true)}
              placeholder="Type to search..."
              className="w-full pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#cd853f] bg-transparent text-[#4a3820]"
              style={{ fontFamily: 'Courier Prime, monospace' }}
            />
          </div>

          {isOpenSearch && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#fff8e7] border-2 border-[#8b6f47] rounded-sm z-10 shadow-[5px_5px_0px_0px_rgba(139,111,71,0.3)] max-h-48 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedSearch(option)
                      setSearchTerm(option)
                      setIsOpenSearch(false)
                    }}
                    className={`w-full px-4 py-3 text-left border-b border-[#d4c4a8] last:border-b-0 hover:bg-[#ffe4b5] transition-colors ${
                      selectedSearch === option ? 'bg-[#cd853f] text-white font-bold' : 'text-[#4a3820]'
                    }`}
                    style={{ fontFamily: 'Courier Prime, monospace' }}
                  >
                    {option}
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-[#9b8b7e] text-center" style={{ fontFamily: 'Courier Prime, monospace' }}>
                  No results found
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Multi Select */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-[#4a3820] uppercase tracking-wider flex items-center gap-2" style={{ fontFamily: 'Special Elite, cursive' }}>
          <span>⭐</span> Technologies
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpenMulti(!isOpenMulti)}
            className="w-full px-4 py-3 bg-[#fff8e7] border-2 border-[#8b6f47] rounded-sm flex justify-between items-center text-left hover:bg-[#ffe4b5] focus:outline-none focus:ring-2 focus:ring-[#cd853f] transition-all shadow-[3px_3px_0px_0px_rgba(139,111,71,0.3)]"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            <span className={selectedMulti.length > 0 ? 'text-[#4a3820]' : 'text-[#9b8b7e]'}>
              {selectedMulti.length > 0 ? `${selectedMulti.length} selected: ${selectedMulti.join(', ')}` : 'Select multiple...'}
            </span>
            <svg
              className={`w-5 h-5 text-[#8b6f47] transition-transform duration-300 ${isOpenMulti ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpenMulti && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#fff8e7] border-2 border-[#8b6f47] rounded-sm z-10 shadow-[5px_5px_0px_0px_rgba(139,111,71,0.3)] overflow-hidden">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleMulti(option)}
                  className="w-full px-4 py-3 text-left border-b border-[#d4c4a8] last:border-b-0 hover:bg-[#ffe4b5] transition-colors flex items-center gap-3"
                  style={{ fontFamily: 'Courier Prime, monospace' }}
                >
                  <span className={`w-5 h-5 border-2 border-[#8b6f47] rounded-sm flex items-center justify-center ${
                    selectedMulti.includes(option) ? 'bg-[#cd853f] border-[#cd853f]' : 'bg-[#fff8e7]'
                  }`}>
                    {selectedMulti.includes(option) && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={selectedMulti.includes(option) ? 'text-[#4a3820] font-bold' : 'text-[#4a3820]'}>
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
        <label className="text-sm font-bold text-[#4a3820] uppercase tracking-wider flex items-center gap-2" style={{ fontFamily: 'Special Elite, cursive' }}>
          <span>📂</span> Category
        </label>
        <div className="relative">
          <GroupedSelect />
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-[#9b8b7e] uppercase tracking-wider" style={{ fontFamily: 'Special Elite, cursive' }}>
          Disabled
        </label>
        <button
          disabled
          className="w-full px-4 py-3 bg-[#e8dcc8] border-2 border-[#c4b5a0] rounded-sm flex justify-between items-center text-left cursor-not-allowed opacity-60 shadow-[3px_3px_0px_0px_rgba(196,181,160,0.3)]"
          style={{ fontFamily: 'Courier Prime, monospace' }}
        >
          <span className="text-[#9b8b7e]">Cannot select</span>
          <svg className="w-5 h-5 text-[#9b8b7e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
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
        className="w-full px-4 py-3 bg-[#fff8e7] border-2 border-[#8b6f47] rounded-sm flex justify-between items-center text-left hover:bg-[#ffe4b5] focus:outline-none focus:ring-2 focus:ring-[#cd853f] transition-all shadow-[3px_3px_0px_0px_rgba(139,111,71,0.3)]"
        style={{ fontFamily: 'Courier Prime, monospace' }}
      >
        <span className={selected ? 'text-[#4a3820]' : 'text-[#9b8b7e]'}>
          {selected || 'Select category...'}
        </span>
        <svg
          className={`w-5 h-5 text-[#8b6f47] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#fff8e7] border-2 border-[#8b6f47] rounded-sm z-10 shadow-[5px_5px_0px_0px_rgba(139,111,71,0.3)] max-h-64 overflow-y-auto">
          {Object.entries(groups).map(([groupName, items]) => (
            <div key={groupName}>
              <div className="px-4 py-2 bg-[#cd853f] text-white font-bold text-xs uppercase tracking-wider" style={{ fontFamily: 'Special Elite, cursive' }}>
                {groupName}
              </div>
              {items.map((item) => (
                <button
                  key={item}
                  onClick={() => { setSelected(item); setIsOpen(false) }}
                  className={`w-full px-4 py-3 text-left border-b border-[#d4c4a8] last:border-b-0 hover:bg-[#ffe4b5] transition-colors ${
                    selected === item ? 'bg-[#cd853f] text-white font-bold' : 'text-[#4a3820]'
                  }`}
                  style={{ fontFamily: 'Courier Prime, monospace' }}
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
