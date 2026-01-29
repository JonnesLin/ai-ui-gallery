import { useState } from 'react'

export default function MonochromeNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center">
              <span className="text-neutral-100 font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-semibold text-neutral-900 tracking-tight">Mono</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {['Home', 'Work', 'Services', 'About', 'Contact'].map((item, index) => (
              <a
                key={item}
                href="#"
                className={`px-5 py-2 text-sm transition-all rounded-lg ${
                  index === 0
                    ? 'text-neutral-100 bg-neutral-900 font-medium'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2.5 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors">
            Get in Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-200 hover:bg-neutral-300 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden py-6 border-t border-neutral-200">
            <div className="flex flex-col gap-1">
              {['Home', 'Work', 'Services', 'About', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`px-4 py-3 text-sm rounded-lg transition-all ${
                    index === 0
                      ? 'text-neutral-100 bg-neutral-900 font-medium'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                  }`}
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 px-6 py-3 text-sm font-medium text-neutral-100 bg-neutral-900 rounded-lg">
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
