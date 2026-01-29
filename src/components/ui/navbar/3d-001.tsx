import { useState } from 'react'

export default function ThreeDNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-gradient-to-b from-slate-100 to-slate-200 py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-slate-200/50">
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="#" className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-[0_8px_16px_-4px_rgba(99,102,241,0.5)] transform hover:-translate-y-0.5 transition-transform flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3D</span>
                  </div>
                </div>
                <span className="text-xl font-bold text-slate-800">Dimension</span>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-2">
                {['Home', 'Features', 'Pricing', 'About'].map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all transform hover:-translate-y-0.5 ${
                      index === 0
                        ? 'text-white bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_6px_12px_-4px_rgba(99,102,241,0.5)]'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)]'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <button className="hidden md:block px-6 py-3 text-sm font-semibold text-slate-800 bg-gradient-to-br from-amber-200 to-yellow-400 rounded-xl shadow-[0_8px_16px_-4px_rgba(251,191,36,0.5)] hover:shadow-[0_12px_20px_-4px_rgba(251,191,36,0.6)] transform hover:-translate-y-0.5 transition-all">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_-4px_rgba(0,0,0,0.15)] transform hover:-translate-y-0.5 transition-all"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="md:hidden mt-4 pt-4 border-t border-slate-100">
                <div className="flex flex-col gap-2">
                  {['Home', 'Features', 'Pricing', 'About'].map((item, index) => (
                    <a
                      key={item}
                      href="#"
                      className={`px-5 py-3 text-sm font-medium rounded-xl transition-all ${
                        index === 0
                          ? 'text-white bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_6px_12px_-4px_rgba(99,102,241,0.5)]'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {item}
                    </a>
                  ))}
                  <button className="mt-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-gradient-to-br from-amber-200 to-yellow-400 rounded-xl shadow-[0_6px_12px_-4px_rgba(251,191,36,0.5)]">
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
