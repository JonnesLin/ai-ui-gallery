import { useState } from 'react'

export default function CyberpunkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'NEURAL_LINK', subtitle: 'SYSTEM ONLINE', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=600&fit=crop' },
    { id: 2, title: 'CYBER_GRID', subtitle: 'ACCESS GRANTED', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop' },
    { id: 3, title: 'NEON_CITY', subtitle: 'LOADING...', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1200&h=600&fit=crop' },
    { id: 4, title: 'DATA_STREAM', subtitle: 'CONNECTED', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-[#0d0d1a] min-h-[550px] flex items-center justify-center">
      <div className="relative w-full">
        {/* Glitch Lines */}
        <div className="absolute -top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50" />

        {/* Main Container */}
        <div
          className="relative aspect-[16/9] overflow-hidden border border-cyan-500/50"
          style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{ filter: 'hue-rotate(180deg) saturate(1.5)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] via-[#0d0d1a]/50 to-transparent" />
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
            </div>
          ))}

          {/* HUD Elements */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-mono text-xs tracking-wider">REC</span>
          </div>
          <div className="absolute top-4 right-4 text-fuchsia-500 font-mono text-xs">
            [{String(currentIndex + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}]
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 bg-fuchsia-500" />
              <p className="text-fuchsia-400 font-mono text-sm tracking-[0.2em] animate-pulse">
                {slides[currentIndex].subtitle}
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text font-mono tracking-wider">
              {slides[currentIndex].title}
            </h2>
            {/* Glitch effect line */}
            <div className="mt-4 h-px w-32 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-transparent" />
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-fuchsia-500" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-fuchsia-500" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-500" />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={goToPrevious}
            className="px-6 py-3 border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 font-mono text-sm tracking-wider hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            &lt;&lt; PREV
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative transition-all duration-300 ${
                  index === currentIndex ? 'scale-125' : ''
                }`}
              >
                <div
                  className={`w-4 h-4 border transition-colors ${
                    index === currentIndex
                      ? 'border-cyan-400 bg-cyan-400/30'
                      : 'border-fuchsia-500/50 bg-transparent hover:border-fuchsia-400'
                  }`}
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 w-4 h-4 border border-cyan-400 animate-ping opacity-50" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={goToNext}
            className="px-6 py-3 border border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-400 font-mono text-sm tracking-wider hover:bg-fuchsia-500/20 hover:border-fuchsia-400 transition-all"
            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
          >
            NEXT &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  )
}
