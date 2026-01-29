import { useState } from 'react'

export default function FuturisticNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-slate-950 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Animated light beam */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              <div className="absolute inset-1 bg-blue-500/30 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 delay-75" />
              <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-950 font-black text-sm">F</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-wider">FUTURA</span>
              <span className="text-[10px] text-blue-400 tracking-[0.3em] font-mono">SYSTEMS</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/50 rounded-full px-2 py-1.5 border border-slate-800">
            {['Overview', 'Technology', 'Solutions', 'Research'].map((item) => (
              <a
                key={item}
                href="#"
                className="px-5 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-full transition-all relative group"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full relative overflow-hidden group">
            <span className="relative z-10">Launch App</span>
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-12 h-12 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-slate-800/50 rounded-xl border border-slate-700" />
            <div className="relative flex flex-col gap-1.5">
              <span className={`w-5 h-0.5 bg-blue-400 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-5 h-0.5 bg-blue-400 transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-blue-400 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-slate-800">
            <div className="flex flex-col gap-2 bg-slate-900/50 rounded-2xl p-3 border border-slate-800">
              {['Overview', 'Technology', 'Solutions', 'Research'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-5 py-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all"
                >
                  {item}
                </a>
              ))}
              <button className="mt-2 flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full">
                <span>Launch App</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
