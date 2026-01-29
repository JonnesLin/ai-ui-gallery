import { useState } from 'react'

export default function FlatNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-[#3498db]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#3498db] font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-white">Flatify</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {['Home', 'Products', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <a
                key={item}
                href="#"
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  index === 0
                    ? 'text-[#3498db] bg-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2.5 text-sm font-bold text-[#3498db] bg-[#f1c40f] rounded-lg hover:bg-[#f39c12] transition-colors">
            Sign Up Free
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-1">
              {['Home', 'Products', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    index === 0
                      ? 'text-[#3498db] bg-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item}
                </a>
              ))}
              <button className="mt-3 px-6 py-3 text-sm font-bold text-[#3498db] bg-[#f1c40f] rounded-lg">
                Sign Up Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
