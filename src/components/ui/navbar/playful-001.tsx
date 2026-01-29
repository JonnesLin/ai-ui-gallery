import { useState } from 'react'

export default function PlayfulNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 p-1">
      <div className="bg-white rounded-b-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl rotate-6 flex items-center justify-center">
                  <span className="text-white font-black text-xl -rotate-6">P</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full animate-bounce" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Playtime
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {['Home', 'Games', 'Learn', 'Friends'].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all hover:scale-110 ${
                    index === 0
                      ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button className="hidden md:flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Start Playing!
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-6">
              <div className="flex flex-col gap-2 bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-4">
                {['Home', 'Games', 'Learn', 'Friends'].map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={`px-5 py-3 text-sm font-bold rounded-2xl text-center transition-all ${
                      index === 0
                        ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white'
                        : 'text-gray-600 hover:bg-white'
                    }`}
                  >
                    {item}
                  </a>
                ))}
                <button className="mt-2 flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Start Playing!
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
