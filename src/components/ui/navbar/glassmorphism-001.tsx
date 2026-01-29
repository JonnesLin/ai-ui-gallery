import { useState } from 'react'

export default function GlassmorphismNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl shadow-lg shadow-black/5">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="font-semibold text-gray-800">Glasify</span>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1">
                <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/40 rounded-lg transition-all">
                  Home
                </a>
                <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/40 rounded-lg transition-all">
                  Features
                </a>
                <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/40 rounded-lg transition-all">
                  Pricing
                </a>
                <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/40 rounded-lg transition-all">
                  About
                </a>
              </div>

              {/* CTA Button */}
              <button className="hidden md:block px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/40 hover:bg-white/60 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="md:hidden mt-4 pt-4 border-t border-white/30">
                <div className="flex flex-col gap-1">
                  <a href="#" className="px-4 py-3 text-sm text-gray-700 hover:bg-white/40 rounded-lg transition-all">
                    Home
                  </a>
                  <a href="#" className="px-4 py-3 text-sm text-gray-700 hover:bg-white/40 rounded-lg transition-all">
                    Features
                  </a>
                  <a href="#" className="px-4 py-3 text-sm text-gray-700 hover:bg-white/40 rounded-lg transition-all">
                    Pricing
                  </a>
                  <a href="#" className="px-4 py-3 text-sm text-gray-700 hover:bg-white/40 rounded-lg transition-all">
                    About
                  </a>
                  <button className="mt-2 px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl">
                    Get Started
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
