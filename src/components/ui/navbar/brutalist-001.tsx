import { useState } from 'react'

export default function BrutalistNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-[#f5f5dc] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-black flex items-center justify-center">
              <span className="text-[#f5f5dc] font-black text-2xl">B</span>
            </div>
            <span className="text-2xl font-black uppercase tracking-tight">Brutal</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#" className="px-4 py-2 text-sm font-bold uppercase border-2 border-transparent hover:border-black hover:bg-yellow-300 transition-all">
              Home
            </a>
            <a href="#" className="px-4 py-2 text-sm font-bold uppercase border-2 border-transparent hover:border-black hover:bg-yellow-300 transition-all">
              Work
            </a>
            <a href="#" className="px-4 py-2 text-sm font-bold uppercase border-2 border-transparent hover:border-black hover:bg-yellow-300 transition-all">
              About
            </a>
            <a href="#" className="px-4 py-2 text-sm font-bold uppercase border-2 border-transparent hover:border-black hover:bg-yellow-300 transition-all">
              Blog
            </a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-3 text-sm font-black uppercase bg-black text-[#f5f5dc] border-4 border-black hover:bg-[#f5f5dc] hover:text-black transition-all shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-12 h-12 border-4 border-black bg-white flex items-center justify-center hover:bg-yellow-300 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-2xl font-black">X</span>
            ) : (
              <div className="flex flex-col gap-1">
                <span className="w-6 h-1 bg-black" />
                <span className="w-6 h-1 bg-black" />
                <span className="w-6 h-1 bg-black" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t-4 border-black py-4">
            <div className="flex flex-col gap-2">
              <a href="#" className="px-4 py-3 text-sm font-bold uppercase border-4 border-black bg-white hover:bg-yellow-300 transition-all">
                Home
              </a>
              <a href="#" className="px-4 py-3 text-sm font-bold uppercase border-4 border-black bg-white hover:bg-yellow-300 transition-all">
                Work
              </a>
              <a href="#" className="px-4 py-3 text-sm font-bold uppercase border-4 border-black bg-white hover:bg-yellow-300 transition-all">
                About
              </a>
              <a href="#" className="px-4 py-3 text-sm font-bold uppercase border-4 border-black bg-white hover:bg-yellow-300 transition-all">
                Blog
              </a>
              <button className="mt-2 px-6 py-3 text-sm font-black uppercase bg-black text-[#f5f5dc] border-4 border-black shadow-[4px_4px_0_0_#000]">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
