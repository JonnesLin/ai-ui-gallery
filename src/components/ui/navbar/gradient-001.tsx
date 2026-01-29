import { useState } from 'react'

export default function GradientNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Gradio</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <a href="#" className="px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              Home
            </a>
            <a href="#" className="px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              Features
            </a>
            <a href="#" className="px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              Templates
            </a>
            <a href="#" className="px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              Pricing
            </a>
            <a href="#" className="px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              Blog
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2.5 text-sm font-medium text-white/90 hover:text-white transition-colors">
              Login
            </button>
            <button className="px-5 py-2.5 text-sm font-semibold text-purple-600 bg-white rounded-lg hover:bg-white/90 shadow-lg shadow-purple-900/20 transition-all">
              Get Started
            </button>
          </div>

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
          <div className="md:hidden py-6 border-t border-white/20">
            <div className="flex flex-col gap-2">
              <a href="#" className="px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                Home
              </a>
              <a href="#" className="px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                Features
              </a>
              <a href="#" className="px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                Templates
              </a>
              <a href="#" className="px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                Pricing
              </a>
              <a href="#" className="px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                Blog
              </a>
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/20">
                <button className="px-4 py-3 text-sm font-medium text-white/90 text-left">
                  Login
                </button>
                <button className="px-5 py-3 text-sm font-semibold text-purple-600 bg-white rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
