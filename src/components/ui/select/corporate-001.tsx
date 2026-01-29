import { useState } from 'react'

export default function CorporateSelect() {
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
    <div className="min-h-screen bg-slate-50 p-8 flex flex-col gap-8 max-w-md">
      {/* Basic Select */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
          Framework Selection
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md flex justify-between items-center text-left hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
          >
            <span className={selected ? 'text-slate-900 font-medium' : 'text-slate-400'}>
              {selected || 'Please select an option'}
            </span>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-md z-10 shadow-lg">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-4 py-2.5 text-left text-sm border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors ${
                    selected === option ? 'text-blue-600 font-semibold bg-blue-50' : 'text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {selected === option && (
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
        <span className="text-xs text-slate-500">Choose your preferred framework</span>
      </div>

      {/* Search Select */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
          Programming Language
        </label>
        <div className="relative">
          <div className="relative border border-slate-300 rounded-md bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all shadow-sm">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsOpenSearch(true)}
              placeholder="Search languages..."
              className="w-full pl-10 pr-4 py-3 focus:outline-none bg-transparent text-slate-900 text-sm placeholder-slate-400"
            />
          </div>

          {isOpenSearch && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-md z-10 shadow-lg max-h-48 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedSearch(option)
                      setSearchTerm(option)
                      setIsOpenSearch(false)
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors ${
                      selectedSearch === option ? 'text-blue-600 font-semibold bg-blue-50' : 'text-slate-700'
                    }`}
                  >
                    {option}
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-slate-500 text-sm text-center">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>
        <span className="text-xs text-slate-500">Type to filter options</span>
      </div>

      {/* Multi Select */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
          Technology Stack
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpenMulti(!isOpenMulti)}
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md flex justify-between items-start text-left hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm min-h-[48px]"
          >
            <div className="flex-1">
              {selectedMulti.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {selectedMulti.map((item) => (
                    <span key={item} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      {item}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleMulti(item)
                        }}
                        className="hover:text-blue-900"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              ) : (
                <span className="text-slate-400 text-sm">Select multiple options</span>
              )}
            </div>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 mt-0.5 ml-2 flex-shrink-0 ${isOpenMulti ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpenMulti && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-md z-10 shadow-lg">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleMulti(option)}
                  className="w-full px-4 py-2.5 text-left text-sm border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors flex items-center gap-3"
                >
                  <span className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                    selectedMulti.includes(option)
                      ? 'bg-blue-600 border-blue-600'
                      : 'border-slate-300'
                  }`}>
                    {selectedMulti.includes(option) && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={selectedMulti.includes(option) ? 'text-slate-900 font-medium' : 'text-slate-700'}>
                    {option}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        <span className="text-xs text-slate-500">
          {selectedMulti.length} of {options.length} selected
        </span>
      </div>

      {/* Grouped Select */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
          Department Category
        </label>
        <div className="relative">
          <GroupedSelect />
        </div>
        <span className="text-xs text-slate-500">Organized by category</span>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Restricted Access
        </label>
        <button
          disabled
          className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-md flex justify-between items-center text-left cursor-not-allowed opacity-60 shadow-sm"
        >
          <span className="text-slate-400 text-sm">Insufficient permissions</span>
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </button>
        <span className="text-xs text-slate-500">Contact administrator for access</span>
      </div>
    </div>
  )
}

function GroupedSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const groups = {
    'Engineering': ['React', 'Vue', 'Angular'],
    'Operations': ['Node.js', 'Django', 'Laravel'],
    'Infrastructure': ['MongoDB', 'PostgreSQL', 'Redis']
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md flex justify-between items-center text-left hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
      >
        <span className={selected ? 'text-slate-900 font-medium' : 'text-slate-400'}>
          {selected || 'Select department'}
        </span>
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-md z-10 shadow-lg max-h-64 overflow-y-auto">
          {Object.entries(groups).map(([groupName, items]) => (
            <div key={groupName}>
              <div className="px-4 py-2 bg-slate-100 text-slate-700 font-semibold text-xs uppercase tracking-wider border-b border-slate-200">
                {groupName}
              </div>
              {items.map((item) => (
                <button
                  key={item}
                  onClick={() => { setSelected(item); setIsOpen(false) }}
                  className={`w-full px-4 py-2.5 text-left text-sm border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors ${
                    selected === item ? 'text-blue-600 font-semibold bg-blue-50' : 'text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="pl-4">{item}</span>
                    {selected === item && (
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
