import { useState } from 'react'

export default function DarkNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <span className="text-gray-900 font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-semibold text-white">Darkmode</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors relative group">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all" />
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all" />
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors relative group">
              Resources
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all" />
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              Sign in
            </button>
            <button className="px-5 py-2.5 text-sm font-medium text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg hover:from-emerald-300 hover:to-cyan-300 transition-all">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors py-2">
                Products
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors py-2">
                Solutions
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors py-2">
                Resources
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors py-2">
                Pricing
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-800">
                <button className="text-sm text-gray-400 hover:text-white transition-colors py-2 text-left">
                  Sign in
                </button>
                <button className="px-5 py-3 text-sm font-medium text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
