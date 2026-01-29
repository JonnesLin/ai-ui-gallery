import { useState } from 'react'

export default function NeumorphismNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('home')

  return (
    <nav className="w-full bg-[#e0e5ec] py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]"
          >
            <div className="w-8 h-8 rounded-lg bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
              <span className="text-[#6366f1] font-bold">N</span>
            </div>
            <span className="font-semibold text-gray-700">Neumorp</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3 p-2 rounded-2xl shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
            {['home', 'features', 'pricing', 'about'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveItem(item)}
                className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all capitalize ${
                  activeItem === item
                    ? 'text-[#6366f1] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-3 text-sm font-semibold text-white bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)] transition-all">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-12 h-12 rounded-xl shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden mt-6 p-4 rounded-2xl shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
            <div className="flex flex-col gap-2">
              {['home', 'features', 'pricing', 'about'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveItem(item)}
                  className={`px-5 py-3 text-sm font-medium rounded-xl transition-all capitalize text-left ${
                    activeItem === item
                      ? 'text-[#6366f1] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]'
                      : 'text-gray-500'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="mt-3 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
