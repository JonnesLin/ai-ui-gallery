import { useState } from 'react'

export default function SketchNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-[#faf9f6] border-b-2 border-dashed border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-gray-800 rounded-lg rotate-3 flex items-center justify-center bg-yellow-200 shadow-[3px_3px_0_#374151]">
              <span className="text-xl font-black -rotate-3">S</span>
            </div>
            <span className="text-2xl font-black text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Sketchy
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {['Home', 'Doodles', 'About', 'Blog'].map((item, index) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors px-3 py-1.5 border-2 border-transparent hover:border-gray-800 hover:border-dashed rounded-lg ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                }`}
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gray-800 border-2 border-gray-800 rounded-lg shadow-[4px_4px_0_#374151] hover:shadow-[2px_2px_0_#374151] hover:translate-x-0.5 hover:translate-y-0.5 transition-all -rotate-1"
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Draw Now!
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-12 h-12 border-2 border-gray-800 rounded-lg bg-pink-200 shadow-[3px_3px_0_#374151] flex items-center justify-center rotate-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-xl font-black -rotate-2">{isOpen ? 'X' : '='}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t-2 border-dashed border-gray-800">
            <div className="flex flex-col gap-3 bg-blue-100 p-4 rounded-xl border-2 border-gray-800 shadow-[4px_4px_0_#374151] rotate-1">
              {['Home', 'Doodles', 'About', 'Blog'].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`px-4 py-3 text-sm font-bold text-gray-700 bg-white border-2 border-gray-800 rounded-lg ${
                    index % 2 === 0 ? '-rotate-1' : 'rotate-1'
                  }`}
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  {item}
                </a>
              ))}
              <button
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-gray-800 border-2 border-gray-800 rounded-lg shadow-[3px_3px_0_#374151] -rotate-1"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Draw Now!
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
