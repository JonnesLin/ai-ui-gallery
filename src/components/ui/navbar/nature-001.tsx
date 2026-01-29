import { useState } from 'react'

export default function NatureNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-gradient-to-b from-emerald-50 to-white border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-emerald-500 rounded-full opacity-20" />
              <div className="absolute inset-1 bg-emerald-400 rounded-full opacity-30" />
              <div className="absolute inset-2 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-emerald-800">Natura</span>
              <span className="text-[10px] text-emerald-500 tracking-wider uppercase">Organic Living</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Products', 'Garden', 'Recipes', 'Journal'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-emerald-700/70 hover:text-emerald-800 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Shop Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-emerald-100 hover:bg-emerald-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden py-6 border-t border-emerald-100">
            <div className="flex flex-col gap-2 bg-emerald-50 rounded-2xl p-4">
              {['Home', 'Products', 'Garden', 'Recipes', 'Journal'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-4 py-3 text-sm text-emerald-700/70 hover:text-emerald-800 hover:bg-white rounded-xl transition-all"
                >
                  {item}
                </a>
              ))}
              <button className="mt-2 flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
