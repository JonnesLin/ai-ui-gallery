import { useState } from 'react'

export default function MinimalistNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-lg font-light tracking-widest text-gray-900 uppercase">
            Minima
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-wide">
              Home
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-wide">
              Work
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-wide">
              About
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-wide">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block text-sm text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors">
            Get in touch
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-5 h-px bg-gray-900 transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`w-5 h-px bg-gray-900 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-px bg-gray-900 transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-wide">
                Home
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-wide">
                Work
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-wide">
                About
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-wide">
                Contact
              </a>
              <button className="text-sm text-gray-900 border-b border-gray-900 pb-0.5 w-fit mt-2">
                Get in touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
