import { useState } from 'react'

export default function PastelNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-gradient-to-r from-pink-100 via-purple-50 to-cyan-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-semibold text-purple-400">Pastela</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <a href="#" className="px-5 py-2 text-sm font-medium text-purple-400 hover:text-purple-500 hover:bg-white/60 rounded-full transition-all">
              Home
            </a>
            <a href="#" className="px-5 py-2 text-sm font-medium text-purple-400 hover:text-purple-500 hover:bg-white/60 rounded-full transition-all">
              Collections
            </a>
            <a href="#" className="px-5 py-2 text-sm font-medium text-purple-400 hover:text-purple-500 hover:bg-white/60 rounded-full transition-all">
              About
            </a>
            <a href="#" className="px-5 py-2 text-sm font-medium text-purple-400 hover:text-purple-500 hover:bg-white/60 rounded-full transition-all">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full shadow-lg shadow-purple-200/50 hover:shadow-purple-300/50 hover:scale-105 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Subscribe
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/60 hover:bg-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden py-6">
            <div className="flex flex-col gap-2 bg-white/60 rounded-2xl p-4">
              <a href="#" className="px-4 py-3 text-sm font-medium text-purple-400 hover:text-purple-500 hover:bg-white rounded-xl transition-all">
                Home
              </a>
              <a href="#" className="px-4 py-3 text-sm font-medium text-purple-400 hover:text-purple-500 hover:bg-white rounded-xl transition-all">
                Collections
              </a>
              <a href="#" className="px-4 py-3 text-sm font-medium text-purple-400 hover:text-purple-500 hover:bg-white rounded-xl transition-all">
                About
              </a>
              <a href="#" className="px-4 py-3 text-sm font-medium text-purple-400 hover:text-purple-500 hover:bg-white rounded-xl transition-all">
                Contact
              </a>
              <button className="mt-2 flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
