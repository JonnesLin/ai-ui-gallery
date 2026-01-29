import { useState } from 'react'

export default function RetroNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-gradient-to-b from-[#ff6b6b] to-[#ee5a5a] border-b-4 border-[#c44d4d]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#ffd93d] rounded-full border-4 border-[#c9a82c] flex items-center justify-center shadow-[inset_0_-4px_0_#c9a82c]">
              <span className="text-[#333] font-black text-xl italic">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white italic tracking-wide drop-shadow-[2px_2px_0_#c44d4d]">
                RETRO
              </span>
              <span className="text-[10px] font-bold text-[#ffd93d] uppercase tracking-[0.2em]">
                Since 1985
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {['Home', 'Arcade', 'Music', 'Gallery'].map((item) => (
              <a
                key={item}
                href="#"
                className="px-5 py-2 text-sm font-bold text-white uppercase tracking-wider hover:bg-[#ffd93d] hover:text-[#333] rounded-full transition-all border-2 border-transparent hover:border-[#c9a82c]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:flex items-center gap-2 px-6 py-3 text-sm font-black uppercase bg-[#6bcb77] text-white rounded-full border-4 border-[#4a9d53] shadow-[0_4px_0_#4a9d53] hover:shadow-[0_2px_0_#4a9d53] hover:translate-y-0.5 transition-all">
            <span>Join Now</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-12 h-12 bg-[#ffd93d] rounded-full border-4 border-[#c9a82c] shadow-[0_4px_0_#c9a82c] active:shadow-[0_2px_0_#c9a82c] active:translate-y-0.5 flex items-center justify-center transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-[#333] font-black text-xl">{isOpen ? 'X' : '='}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-4 border-[#c44d4d]">
            <div className="flex flex-col gap-2">
              {['Home', 'Arcade', 'Music', 'Gallery'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-5 py-3 text-sm font-bold text-white uppercase tracking-wider bg-[#c44d4d]/50 hover:bg-[#ffd93d] hover:text-[#333] rounded-xl transition-all text-center"
                >
                  {item}
                </a>
              ))}
              <button className="mt-2 flex items-center justify-center gap-2 px-6 py-3 text-sm font-black uppercase bg-[#6bcb77] text-white rounded-full border-4 border-[#4a9d53] shadow-[0_4px_0_#4a9d53]">
                <span>Join Now</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
