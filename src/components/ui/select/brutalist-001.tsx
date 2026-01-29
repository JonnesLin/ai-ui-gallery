import { useState } from 'react'

export default function BrutalistSelect() {
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
    <div className="min-h-screen bg-white p-8 flex flex-col gap-8 max-w-md font-mono">
      {/* Basic Select */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-black uppercase border-4 border-black p-2 bg-yellow-400">
          FRAMEWORK
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-4 bg-white border-4 border-black flex justify-between items-center text-left font-bold hover:bg-black hover:text-white transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <span>{selected || 'SELECT OPTION'}</span>
            <span className="text-2xl">{isOpen ? '▲' : '▼'}</span>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-4 border-black z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-4 py-3 text-left font-bold border-b-4 border-black last:border-b-0 hover:bg-yellow-400 transition-colors ${
                    selected === option ? 'bg-black text-white' : 'bg-white'
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
        <label className="text-sm font-bold text-white uppercase border-4 border-black p-2 bg-red-600">
          LANGUAGE [SEARCH]
        </label>
        <div className="relative">
          <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsOpenSearch(true)}
              placeholder="TYPE TO SEARCH..."
              className="w-full px-4 py-4 font-bold focus:outline-none bg-transparent"
            />
          </div>

          {isOpenSearch && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-4 border-black z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-h-48 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedSearch(option)
                      setSearchTerm(option)
                      setIsOpenSearch(false)
                    }}
                    className={`w-full px-4 py-3 text-left font-bold border-b-4 border-black last:border-b-0 hover:bg-blue-400 transition-colors ${
                      selectedSearch === option ? 'bg-black text-white' : 'bg-white'
                    }`}
                  >
                    {option}
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 font-bold text-gray-400">NO RESULTS</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Multi Select */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-white uppercase border-4 border-black p-2 bg-blue-600">
          TECHNOLOGIES [MULTI]
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpenMulti(!isOpenMulti)}
            className="w-full px-4 py-4 bg-white border-4 border-black flex justify-between items-center text-left font-bold hover:bg-black hover:text-white transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <span>{selectedMulti.length > 0 ? `[${selectedMulti.length}] SELECTED` : 'SELECT MULTIPLE'}</span>
            <span className="text-2xl">{isOpenMulti ? '▲' : '▼'}</span>
          </button>

          {isOpenMulti && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-4 border-black z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleMulti(option)}
                  className="w-full px-4 py-3 text-left font-bold border-b-4 border-black last:border-b-0 hover:bg-green-400 transition-colors flex items-center gap-3"
                >
                  <span className={`w-6 h-6 border-4 border-black flex items-center justify-center ${
                    selectedMulti.includes(option) ? 'bg-black' : 'bg-white'
                  }`}>
                    {selectedMulti.includes(option) && (
                      <span className="text-white text-lg">✓</span>
                    )}
                  </span>
                  <span>{option}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Grouped Select */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-white uppercase border-4 border-black p-2 bg-purple-600">
          CATEGORY [GROUPED]
        </label>
        <div className="relative">
          <GroupedSelect />
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-gray-400 uppercase border-4 border-gray-300 p-2 bg-gray-200">
          DISABLED
        </label>
        <button
          disabled
          className="w-full px-4 py-4 bg-gray-200 border-4 border-gray-300 flex justify-between items-center text-left font-bold cursor-not-allowed text-gray-400 shadow-[8px_8px_0px_0px_rgba(200,200,200,1)]"
        >
          <span>CANNOT SELECT</span>
          <span className="text-2xl">▼</span>
        </button>
      </div>
    </div>
  )
}

function GroupedSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const groups = {
    'FRONTEND': ['React', 'Vue', 'Angular'],
    'BACKEND': ['Node.js', 'Django', 'Laravel'],
    'DATABASE': ['MongoDB', 'PostgreSQL', 'Redis']
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 bg-white border-4 border-black flex justify-between items-center text-left font-bold hover:bg-black hover:text-white transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <span>{selected || 'SELECT CATEGORY'}</span>
        <span className="text-2xl">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-4 border-black z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-h-64 overflow-y-auto">
          {Object.entries(groups).map(([groupName, items]) => (
            <div key={groupName}>
              <div className="px-4 py-2 bg-black text-white font-bold text-xs">
                {groupName}
              </div>
              {items.map((item) => (
                <button
                  key={item}
                  onClick={() => { setSelected(item); setIsOpen(false) }}
                  className={`w-full px-4 py-3 text-left font-bold border-b-4 border-black last:border-b-0 hover:bg-pink-400 transition-colors ${
                    selected === item ? 'bg-black text-white' : 'bg-white'
                  }`}
                >
                  → {item}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
