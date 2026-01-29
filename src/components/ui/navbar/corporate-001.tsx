import { useState } from 'react'

export default function CorporateNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-2 h-8 bg-blue-600 rounded-sm" />
              <div className="w-2 h-6 bg-blue-400 rounded-sm" />
              <div className="w-2 h-4 bg-blue-200 rounded-sm" />
            </div>
            <span className="text-xl font-semibold text-slate-800">Corpora</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600 transition-colors py-2">
                Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600 transition-colors py-2">
                Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
              Resources
            </a>
            <a href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
              Company
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
              Sign in
            </button>
            <button className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
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
          <div className="md:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-1">
              <a href="#" className="px-4 py-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all">
                Solutions
              </a>
              <a href="#" className="px-4 py-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all">
                Products
              </a>
              <a href="#" className="px-4 py-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all">
                Pricing
              </a>
              <a href="#" className="px-4 py-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all">
                Resources
              </a>
              <a href="#" className="px-4 py-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all">
                Company
              </a>
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-slate-100">
                <button className="px-4 py-2 text-sm text-slate-600 text-left">
                  Sign in
                </button>
                <button className="px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
