import { useState } from 'react'

export default function FuturisticSelect() {
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
    <div className="min-h-screen bg-black p-8 flex flex-col gap-8 max-w-md">
      {/* Futuristic Glow Select */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em]">
          FRAMEWORK_SELECT
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-5 py-4 bg-gradient-to-r from-cyan-950 to-blue-950 text-cyan-300 border border-cyan-500/30 font-mono text-sm flex justify-between items-center hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
            }}
          >
            <span className={selected ? 'text-cyan-200' : 'text-cyan-500/50'}>
              {selected || '>> SELECT_OPTION'}
            </span>
            <svg
              className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div
              className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-b from-cyan-950/95 to-blue-950/95 backdrop-blur-sm border border-cyan-500/30 overflow-hidden z-10 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}
            >
              {options.map((option, idx) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-5 py-3 text-left font-mono text-sm transition-all duration-200 ${
                    selected === option
                      ? 'bg-cyan-500/20 text-cyan-200 shadow-[inset_0_0_15px_rgba(34,211,238,0.3)]'
                      : 'text-cyan-300/80 hover:bg-cyan-500/10 hover:text-cyan-200'
                  } ${idx !== 0 ? 'border-t border-cyan-500/20' : ''}`}
                >
                  <span className="text-cyan-500/50 mr-2">&gt;</span>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scan Line Select */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">
          PRIORITY_LEVEL
        </label>
        <ScanLineSelect />
      </div>

      {/* Multi Select with Tech Tags */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-bold text-purple-400 uppercase tracking-[0.2em]">
          TECH_STACK
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpenMulti(!isOpenMulti)}
            className="w-full min-h-[60px] px-5 py-3 bg-gradient-to-r from-purple-950 to-indigo-950 border border-purple-500/30 font-mono text-sm flex justify-between items-center hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] focus:outline-none transition-all duration-300"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
            }}
          >
            <div className="flex flex-wrap gap-2 flex-1">
              {selectedMulti.length > 0 ? (
                selectedMulti.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-purple-500/30 border border-purple-400/50 text-purple-200 text-xs font-mono flex items-center gap-2 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                    }}
                  >
                    {item}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleMulti(item) }}
                      className="hover:text-purple-400 transition-colors"
                    >
                      ×
                    </button>
                  </span>
                ))
              ) : (
                <span className="text-purple-400/50">&gt;&gt; MULTI_SELECT</span>
              )}
            </div>
            <svg
              className={`w-5 h-5 text-purple-400 transition-transform duration-300 ml-2 ${isOpenMulti ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpenMulti && (
            <div
              className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-b from-purple-950/95 to-indigo-950/95 backdrop-blur-sm border border-purple-500/30 overflow-hidden z-10 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}
            >
              {options.map((option, idx) => (
                <button
                  key={option}
                  onClick={() => toggleMulti(option)}
                  className={`w-full px-5 py-3 text-left font-mono text-sm hover:bg-purple-500/10 transition-all duration-200 flex items-center gap-3 ${
                    idx !== 0 ? 'border-t border-purple-500/20' : ''
                  }`}
                >
                  <span className={`w-6 h-6 border flex items-center justify-center transition-all ${
                    selectedMulti.includes(option)
                      ? 'border-purple-400 bg-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                      : 'border-purple-500/30 bg-purple-950/50'
                  }`}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                    }}
                  >
                    {selectedMulti.includes(option) && (
                      <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={selectedMulti.includes(option) ? 'text-purple-200' : 'text-purple-300/80'}>
                    {option}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Control Panel */}
      <div
        className="p-6 bg-gradient-to-br from-slate-950 to-blue-950 border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.15)]"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
          <h3 className="text-sm font-bold text-cyan-300 uppercase tracking-widest">SYSTEM_CONFIG</h3>
        </div>
        <div className="space-y-3">
          <CompactSelect label="DISPLAY_MODE" options={['HOLOGRAM', 'STANDARD', 'MINIMAL']} />
          <CompactSelect label="INTERFACE_LANG" options={['EN_US', 'ES_ES', 'FR_FR']} />
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em]">
          LOCKED_ACCESS
        </label>
        <button
          disabled
          className="w-full px-5 py-4 bg-gray-900 border border-gray-700 text-gray-600 font-mono text-sm flex justify-between items-center cursor-not-allowed opacity-50"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
          }}
        >
          <span>&gt;&gt; ACCESS_DENIED</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function ScanLineSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('MEDIUM')
  const priorities = [
    { label: 'LOW', color: 'from-green-500 to-emerald-600', glow: 'rgba(16,185,129,0.3)' },
    { label: 'MEDIUM', color: 'from-yellow-500 to-orange-600', glow: 'rgba(251,146,60,0.3)' },
    { label: 'HIGH', color: 'from-red-500 to-rose-600', glow: 'rgba(244,63,94,0.3)' },
  ]

  const current = priorities.find(p => p.label === selected) || priorities[1]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-4 bg-gradient-to-r ${current.color} text-white font-mono font-bold text-sm flex justify-between items-center hover:opacity-90 focus:outline-none transition-all duration-300 relative overflow-hidden`}
        style={{
          clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
          boxShadow: `0 0 20px ${current.glow}`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent animate-pulse"></div>
        <span className="relative">&gt; {selected}</span>
        <svg
          className={`w-5 h-5 relative transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-sm border border-blue-500/30 overflow-hidden z-10"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
          }}
        >
          {priorities.map((priority, idx) => (
            <button
              key={priority.label}
              onClick={() => { setSelected(priority.label); setIsOpen(false) }}
              className={`w-full px-5 py-3 text-left font-mono font-bold text-sm bg-gradient-to-r ${priority.color} text-white hover:opacity-90 transition-all relative overflow-hidden ${
                idx !== 0 ? 'border-t border-white/20' : ''
              }`}
              style={{
                boxShadow: `inset 0 0 20px ${priority.glow}`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative">&gt; {priority.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function CompactSelect({ label, options }: { label: string; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="flex items-center justify-between gap-4">
      <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{label}:</label>
      <div className="relative w-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2 bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex justify-between items-center hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:outline-none transition-all"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
          }}
        >
          <span>{selected}</span>
          <svg
            className={`w-3 h-3 text-cyan-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-1 bg-slate-950/95 backdrop-blur-sm border border-cyan-500/30 overflow-hidden z-10"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
            }}
          >
            {options.map((option) => (
              <button
                key={option}
                onClick={() => { setSelected(option); setIsOpen(false) }}
                className={`w-full px-3 py-2 text-xs text-left font-mono hover:bg-cyan-500/10 transition-all ${
                  selected === option ? 'bg-cyan-500/20 text-cyan-200' : 'text-cyan-300/80'
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
