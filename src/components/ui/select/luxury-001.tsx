import { useState } from 'react'

export default function LuxurySelect() {
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
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 flex flex-col gap-8 max-w-md">
      {/* Luxury Gold Select */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-serif text-amber-300 uppercase tracking-[0.3em]">
          Framework Selection
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-4 bg-gradient-to-b from-zinc-900 to-black text-amber-100 border border-amber-600/50 font-serif flex justify-between items-center hover:border-amber-500 hover:shadow-[0_0_30px_rgba(217,119,6,0.3)] focus:outline-none focus:border-amber-400 focus:shadow-[0_0_40px_rgba(217,119,6,0.4)] transition-all duration-500"
          >
            <span className={selected ? 'text-amber-50' : 'text-amber-600/50'}>
              {selected || 'Select Your Choice'}
            </span>
            <svg
              className={`w-5 h-5 text-amber-500 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-b from-zinc-900 to-black border border-amber-600/50 overflow-hidden z-10 shadow-[0_0_40px_rgba(217,119,6,0.2)]">
              {options.map((option, idx) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-6 py-4 text-left font-serif transition-all duration-300 ${
                    selected === option
                      ? 'bg-gradient-to-r from-amber-900/40 to-amber-800/30 text-amber-100 shadow-[inset_0_0_20px_rgba(217,119,6,0.2)]'
                      : 'text-amber-200/80 hover:bg-amber-900/20 hover:text-amber-100'
                  } ${idx !== 0 ? 'border-t border-amber-900/30' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Elegant Select with Icon */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-serif text-amber-300 uppercase tracking-[0.3em]">
          Premium Membership
        </label>
        <PremiumSelect />
      </div>

      {/* Multi Select Luxury */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-serif text-amber-300 uppercase tracking-[0.3em]">
          Exclusive Features
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpenMulti(!isOpenMulti)}
            className="w-full min-h-[64px] px-6 py-3 bg-gradient-to-b from-zinc-900 to-black border border-amber-600/50 font-serif flex justify-between items-center hover:border-amber-500 hover:shadow-[0_0_30px_rgba(217,119,6,0.3)] focus:outline-none transition-all duration-500"
          >
            <div className="flex flex-wrap gap-2 flex-1">
              {selectedMulti.length > 0 ? (
                selectedMulti.map(item => (
                  <span
                    key={item}
                    className="px-4 py-1.5 bg-gradient-to-r from-amber-700/30 to-amber-800/30 border border-amber-600/60 text-amber-100 text-sm font-serif flex items-center gap-3 shadow-[0_0_15px_rgba(217,119,6,0.2)]"
                  >
                    {item}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleMulti(item) }}
                      className="text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      ✕
                    </button>
                  </span>
                ))
              ) : (
                <span className="text-amber-600/50">Select Multiple Options</span>
              )}
            </div>
            <svg
              className={`w-5 h-5 text-amber-500 transition-transform duration-500 ml-2 ${isOpenMulti ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpenMulti && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-b from-zinc-900 to-black border border-amber-600/50 overflow-hidden z-10 shadow-[0_0_40px_rgba(217,119,6,0.2)]">
              {options.map((option, idx) => (
                <button
                  key={option}
                  onClick={() => toggleMulti(option)}
                  className={`w-full px-6 py-4 text-left font-serif hover:bg-amber-900/20 transition-all duration-300 flex items-center gap-4 ${
                    idx !== 0 ? 'border-t border-amber-900/30' : ''
                  }`}
                >
                  <span className={`w-5 h-5 border flex items-center justify-center transition-all ${
                    selectedMulti.includes(option)
                      ? 'border-amber-500 bg-gradient-to-br from-amber-700/50 to-amber-800/50 shadow-[0_0_12px_rgba(217,119,6,0.3)]'
                      : 'border-amber-700/40 bg-zinc-950'
                  }`}>
                    {selectedMulti.includes(option) && (
                      <svg className="w-3 h-3 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={selectedMulti.includes(option) ? 'text-amber-100' : 'text-amber-200/80'}>
                    {option}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Luxury Card */}
      <div className="p-8 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-amber-600/40 shadow-[0_0_50px_rgba(217,119,6,0.15)]">
        <div className="border-b border-amber-800/30 pb-4 mb-6">
          <h3 className="text-lg font-serif text-amber-100 tracking-wide">Preferences</h3>
          <p className="text-xs text-amber-600/60 mt-1">Curated for Excellence</p>
        </div>
        <div className="space-y-4">
          <ElegantSelect label="Theme" options={['Royal Gold', 'Deep Onyx', 'Midnight']} />
          <ElegantSelect label="Language" options={['English', 'Français', 'Deutsch']} />
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-serif text-zinc-700 uppercase tracking-[0.3em]">
          Unavailable Option
        </label>
        <button
          disabled
          className="w-full px-6 py-4 bg-zinc-950 border border-zinc-800 text-zinc-700 font-serif flex justify-between items-center cursor-not-allowed opacity-50"
        >
          <span>Access Restricted</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function PremiumSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Platinum')
  const tiers = [
    { name: 'Gold', icon: '⭐', color: 'from-yellow-600 to-amber-700' },
    { name: 'Platinum', icon: '💎', color: 'from-slate-400 to-slate-600' },
    { name: 'Diamond', icon: '👑', color: 'from-blue-400 to-cyan-600' },
  ]

  const current = tiers.find(t => t.name === selected) || tiers[1]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-4 bg-gradient-to-r ${current.color} text-white font-serif font-semibold flex justify-between items-center hover:opacity-90 focus:outline-none transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{current.icon}</span>
          <span>{selected} Tier</span>
        </div>
        <svg
          className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-b from-zinc-900 to-black border border-amber-600/50 overflow-hidden z-10 shadow-[0_0_40px_rgba(217,119,6,0.2)]">
          {tiers.map((tier, idx) => (
            <button
              key={tier.name}
              onClick={() => { setSelected(tier.name); setIsOpen(false) }}
              className={`w-full px-6 py-4 text-left font-serif hover:bg-amber-900/20 transition-all duration-300 flex items-center gap-3 ${
                idx !== 0 ? 'border-t border-amber-900/30' : ''
              }`}
            >
              <span className="text-2xl">{tier.icon}</span>
              <div className="flex-1">
                <div className={`font-semibold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.name} Tier
                </div>
              </div>
              {selected === tier.name && (
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

function ElegantSelect({ label, options }: { label: string; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="flex items-center justify-between">
      <label className="text-sm font-serif text-amber-300/80">{label}</label>
      <div className="relative w-44">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2.5 bg-zinc-950 border border-amber-800/40 text-sm font-serif text-amber-200 flex justify-between items-center hover:border-amber-700/60 hover:shadow-[0_0_20px_rgba(217,119,6,0.2)] focus:outline-none transition-all duration-300"
        >
          <span>{selected}</span>
          <svg
            className={`w-4 h-4 text-amber-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-gradient-to-b from-zinc-900 to-black border border-amber-800/40 overflow-hidden z-10 shadow-[0_0_30px_rgba(217,119,6,0.2)]">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => { setSelected(option); setIsOpen(false) }}
                className={`w-full px-4 py-2.5 text-sm text-left font-serif hover:bg-amber-900/20 transition-all duration-300 ${
                  selected === option
                    ? 'bg-amber-900/30 text-amber-100'
                    : 'text-amber-200/80'
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
