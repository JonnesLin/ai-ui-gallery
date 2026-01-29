import { useState } from 'react'

export default function CyberpunkNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-[#0a0a0f] border-b border-cyan-500/30 relative overflow-hidden">
      {/* Animated background line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-fuchsia-500 clip-path-polygon flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <span className="text-black font-black text-lg">C</span>
              </div>
              <div className="absolute inset-0 bg-cyan-400/50 blur-md group-hover:blur-lg transition-all" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text tracking-wider">
                CYBER
              </span>
              <span className="text-[10px] font-mono text-cyan-500/60 tracking-[0.3em]">
                v2.0.77
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {['Home', 'Network', 'Database', 'Terminal'].map((item, index) => (
              <a
                key={item}
                href="#"
                className="relative px-5 py-2 text-sm font-mono text-cyan-400/70 uppercase tracking-wider hover:text-cyan-300 transition-all group"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute left-2 text-fuchsia-500/50 font-mono text-xs">0{index + 1}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-fuchsia-500 group-hover:w-full transition-all" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block relative px-6 py-3 text-sm font-mono uppercase tracking-wider overflow-hidden group">
            <span className="relative z-10 text-black font-bold">Jack In</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 border border-cyan-400/50 group-hover:border-fuchsia-500/50 transition-colors" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }} />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-12 h-12 border border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center hover:bg-cyan-500/20 transition-all"
            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-cyan-400 font-mono font-bold">X</span>
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="w-5 h-0.5 bg-cyan-400" />
                <span className="w-4 h-0.5 bg-fuchsia-500" />
                <span className="w-5 h-0.5 bg-cyan-400" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-cyan-500/30">
            <div className="flex flex-col gap-2">
              {['Home', 'Network', 'Database', 'Terminal'].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-mono text-cyan-400/70 uppercase tracking-wider hover:text-cyan-300 hover:bg-cyan-500/10 transition-all border-l-2 border-transparent hover:border-fuchsia-500"
                >
                  <span className="text-fuchsia-500/50 text-xs">0{index + 1}</span>
                  <span>{item}</span>
                </a>
              ))}
              <button className="mt-4 px-6 py-3 text-sm font-mono font-bold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                Jack In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
