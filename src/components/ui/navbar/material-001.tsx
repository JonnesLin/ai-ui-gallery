import { useState } from 'react'

export default function MaterialNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-indigo-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-medium text-white">Material</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {['Dashboard', 'Projects', 'Team', 'Reports'].map((item, index) => (
              <a
                key={item}
                href="#"
                className={`px-4 py-2 text-sm font-medium rounded transition-all relative overflow-hidden group ${
                  index === 0 ? 'text-white bg-white/20' : 'text-white/70 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform origin-center rounded" />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all relative group">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full" />
            </button>
            <button className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-medium shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-shadow">
              JD
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              {['Dashboard', 'Projects', 'Team', 'Reports'].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`px-4 py-3 text-sm font-medium rounded transition-all ${
                    index === 0 ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/20 px-4">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all relative">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-medium">
                    JD
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">John Doe</span>
                    <span className="text-xs text-white/60">john@example.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
