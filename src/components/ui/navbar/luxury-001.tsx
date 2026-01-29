import { useState } from 'react'

export default function LuxuryNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 border-b border-[#d4af37]/20 text-xs">
          <a href="#" className="text-[#d4af37]/60 hover:text-[#d4af37] transition-colors tracking-wider">
            Store Locator
          </a>
          <a href="#" className="text-[#d4af37]/60 hover:text-[#d4af37] transition-colors tracking-wider">
            Contact
          </a>
          <a href="#" className="text-[#d4af37]/60 hover:text-[#d4af37] transition-colors tracking-wider">
            Account
          </a>
        </div>

        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col items-center">
            <span className="text-2xl font-light tracking-[0.4em] text-white">LUXURIA</span>
            <span className="text-[10px] tracking-[0.3em] text-[#d4af37]">PARIS</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {['Collections', 'Heritage', 'Craftsmanship', 'Boutiques'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-white/70 hover:text-[#d4af37] transition-colors tracking-widest uppercase relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-white/70 hover:text-[#d4af37] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-white/70 hover:text-[#d4af37] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="relative text-white/70 hover:text-[#d4af37] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4af37] text-[#0c0c0c] text-[10px] font-medium flex items-center justify-center rounded-full">
                2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="w-6 h-px bg-[#d4af37]" />
                <span className="w-6 h-px bg-[#d4af37]" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-8 border-t border-[#d4af37]/20">
            <div className="flex flex-col gap-6">
              {['Collections', 'Heritage', 'Craftsmanship', 'Boutiques'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-white/70 hover:text-[#d4af37] transition-colors tracking-widest uppercase text-center"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center justify-center gap-8 pt-6 border-t border-[#d4af37]/20">
                <button className="text-white/70 hover:text-[#d4af37] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="text-white/70 hover:text-[#d4af37] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="text-white/70 hover:text-[#d4af37] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
