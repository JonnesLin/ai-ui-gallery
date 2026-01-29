import { useState } from 'react'

export default function NeonNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-pink-500/20 border border-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)] group-hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] transition-shadow">
                <span className="text-pink-400 font-bold text-lg">N</span>
              </div>
              <div className="absolute inset-0 rounded-lg bg-pink-500/10 blur-md" />
            </div>
            <span className="text-xl font-bold text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
              NEONIX
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {['Home', 'Gallery', 'Events', 'Contact'].map((item, index) => {
              const colors = [
                'text-pink-400 hover:text-pink-300 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]',
                'text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]',
                'text-violet-400 hover:text-violet-300 hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.7)]',
                'text-lime-400 hover:text-lime-300 hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.7)]',
              ]
              return (
                <a
                  key={item}
                  href="#"
                  className={`text-sm font-medium transition-all ${colors[index]}`}
                >
                  {item}
                </a>
              )
            })}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block relative px-6 py-2.5 text-sm font-bold text-cyan-400 border border-cyan-500 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.4),inset_0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6),inset_0_0_25px_rgba(34,211,238,0.2)] transition-all">
            <span className="relative z-10">Enter Club</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-lg border border-pink-500/50 bg-pink-500/10 shadow-[0_0_10px_rgba(236,72,153,0.3)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              {['Home', 'Gallery', 'Events', 'Contact'].map((item, index) => {
                const colors = [
                  'text-pink-400 border-pink-500/30 bg-pink-500/10 shadow-[0_0_10px_rgba(236,72,153,0.2)]',
                  'text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_10px_rgba(34,211,238,0.2)]',
                  'text-violet-400 border-violet-500/30 bg-violet-500/10 shadow-[0_0_10px_rgba(167,139,250,0.2)]',
                  'text-lime-400 border-lime-500/30 bg-lime-500/10 shadow-[0_0_10px_rgba(163,230,53,0.2)]',
                ]
                return (
                  <a
                    key={item}
                    href="#"
                    className={`px-5 py-3 text-sm font-medium rounded-lg border transition-all ${colors[index]}`}
                  >
                    {item}
                  </a>
                )
              })}
              <button className="mt-2 px-6 py-3 text-sm font-bold text-cyan-400 border border-cyan-500 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.4),inset_0_0_15px_rgba(34,211,238,0.1)]">
                Enter Club
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
