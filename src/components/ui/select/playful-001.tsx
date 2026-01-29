import { useState } from 'react'

export default function PlayfulSelect() {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-8 flex flex-col gap-8 max-w-md">
      {/* Playful Bouncy Select */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-purple-600">
          Pick Your Framework! 🚀
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-5 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full font-bold shadow-lg flex justify-between items-center hover:scale-105 hover:shadow-xl focus:outline-none focus:scale-105 active:scale-95 transition-all duration-200"
          >
            <span className={selected ? '' : 'opacity-80'}>
              {selected || 'Choose one! ✨'}
            </span>
            <svg
              className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-180 scale-110' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl overflow-hidden z-10 shadow-2xl border-4 border-purple-300 animate-[wiggle_0.3s_ease-in-out]">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => { setSelected(option); setIsOpen(false) }}
                  className={`w-full px-5 py-4 text-left font-bold transition-all duration-200 ${
                    selected === option
                      ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white'
                      : 'text-purple-600 hover:bg-purple-100 hover:scale-105 hover:pl-7'
                  }`}
                >
                  <span className="inline-block mr-2">🎯</span>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Rainbow Select */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-blue-600">
          What's your vibe? 🌈
        </label>
        <RainbowSelect />
      </div>

      {/* Multi Select with Fun Tags */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-orange-600">
          Mix & Match! 🎨
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpenMulti(!isOpenMulti)}
            className="w-full min-h-[68px] px-5 py-3 bg-white rounded-3xl border-4 border-orange-300 font-bold flex justify-between items-center hover:border-orange-400 hover:shadow-lg focus:outline-none transition-all"
          >
            <div className="flex flex-wrap gap-2 flex-1">
              {selectedMulti.length > 0 ? (
                selectedMulti.map((item, idx) => {
                  const colors = ['bg-red-400', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400']
                  return (
                    <span
                      key={item}
                      className={`px-4 py-2 ${colors[idx % colors.length]} text-white text-sm font-bold rounded-full shadow-md flex items-center gap-2 hover:scale-110 transition-transform`}
                    >
                      {item}
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleMulti(item) }}
                        className="w-5 h-5 bg-white/30 rounded-full hover:bg-white/50 transition-colors flex items-center justify-center"
                      >
                        ×
                      </button>
                    </span>
                  )
                })
              ) : (
                <span className="text-orange-400">Tap to add some fun! 🎉</span>
              )}
            </div>
            <svg
              className={`w-6 h-6 text-orange-500 transition-all duration-300 ml-2 ${isOpenMulti ? 'rotate-180 scale-110' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpenMulti && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl overflow-hidden z-10 shadow-2xl border-4 border-orange-300">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleMulti(option)}
                  className="w-full px-5 py-4 text-left font-bold hover:bg-orange-100 transition-all duration-200 flex items-center gap-3"
                >
                  <span className={`w-7 h-7 rounded-full border-4 flex items-center justify-center transition-all hover:scale-110 ${
                    selectedMulti.includes(option)
                      ? 'bg-gradient-to-br from-orange-400 to-pink-500 border-orange-500 shadow-lg'
                      : 'border-orange-300 bg-white'
                  }`}>
                    {selectedMulti.includes(option) && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className={selectedMulti.includes(option) ? 'text-orange-600' : 'text-gray-700'}>
                    {option}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fun Card */}
      <div className="p-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-3xl">⚡</span>
          <h3 className="text-lg font-bold text-white">Quick Settings</h3>
        </div>
        <div className="space-y-4">
          <FunSelect label="Mood" options={['Happy 😊', 'Excited 🎉', 'Chill 😎']} />
          <FunSelect label="Energy" options={['Low 🔋', 'Medium ⚡', 'High 🚀']} />
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-gray-400">
          Coming Soon! 🔜
        </label>
        <button
          disabled
          className="w-full px-5 py-4 bg-gray-200 rounded-full border-4 border-gray-300 text-gray-400 font-bold flex justify-between items-center cursor-not-allowed opacity-60"
        >
          <span>Not available yet 😢</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function RainbowSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Energetic')
  const vibes = [
    { name: 'Calm', emoji: '😌', gradient: 'from-blue-400 to-cyan-400' },
    { name: 'Energetic', emoji: '⚡', gradient: 'from-yellow-400 to-orange-400' },
    { name: 'Creative', emoji: '🎨', gradient: 'from-purple-400 to-pink-400' },
    { name: 'Focused', emoji: '🎯', gradient: 'from-green-400 to-emerald-400' },
  ]

  const current = vibes.find(v => v.name === selected) || vibes[1]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-4 bg-gradient-to-r ${current.gradient} text-white rounded-full font-bold shadow-lg flex justify-between items-center hover:scale-105 hover:shadow-xl focus:outline-none transition-all duration-200`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{current.emoji}</span>
          <span>{selected}</span>
        </div>
        <svg
          className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'rotate-180 scale-110' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl overflow-hidden z-10 shadow-2xl border-4 border-blue-300">
          {vibes.map((vibe) => (
            <button
              key={vibe.name}
              onClick={() => { setSelected(vibe.name); setIsOpen(false) }}
              className={`w-full px-5 py-4 text-left font-bold bg-gradient-to-r ${vibe.gradient} text-white hover:scale-105 transition-all duration-200 flex items-center gap-3`}
            >
              <span className="text-2xl">{vibe.emoji}</span>
              <span>{vibe.name}</span>
              {selected === vibe.name && (
                <span className="ml-auto text-xl">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function FunSelect({ label, options }: { label: string; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="flex items-center justify-between">
      <label className="text-sm font-bold text-white">{label}</label>
      <div className="relative w-44">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold text-white flex justify-between items-center hover:bg-white/30 hover:scale-105 focus:outline-none transition-all"
        >
          <span>{selected}</span>
          <svg
            className={`w-4 h-4 transition-all duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl overflow-hidden z-10 shadow-xl border-2 border-white/50">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => { setSelected(option); setIsOpen(false) }}
                className={`w-full px-4 py-2.5 text-sm text-left font-bold hover:bg-blue-100 transition-all ${
                  selected === option
                    ? 'bg-blue-200 text-blue-700'
                    : 'text-gray-700'
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
