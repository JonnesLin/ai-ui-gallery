import { useState } from 'react'

export default function FuturisticCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'QUANTUM REALM', subtitle: 'BEYOND BOUNDARIES', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop' },
    { id: 2, title: 'STELLAR VOYAGE', subtitle: 'INFINITE HORIZONS', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&h=600&fit=crop' },
    { id: 3, title: 'TECH ODYSSEY', subtitle: 'NEXT GENERATION', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop' },
    { id: 4, title: 'DIGITAL DAWN', subtitle: 'FUTURE IS NOW', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-[#050510] min-h-[550px] flex items-center justify-center">
      <div className="relative w-full">
        {/* Animated Background Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Main Container */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-blue-500/30 bg-[#0a0a1a]">
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div
              className="absolute inset-[-50%] bg-gradient-conic from-blue-500 via-transparent via-50% to-blue-500 opacity-30 animate-spin"
              style={{ animationDuration: '8s' }}
            />
          </div>
          <div className="absolute inset-[1px] rounded-lg bg-[#0a0a1a]" />

          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-60"
                style={{ filter: 'hue-rotate(200deg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/50 to-transparent" />
            </div>
          ))}

          {/* HUD Elements */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-400/70 font-mono text-xs tracking-wider">SYS.ACTIVE</span>
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-4">
            <span className="text-blue-400/50 font-mono text-xs">{new Date().toISOString().split('T')[0]}</span>
            <div className="w-px h-4 bg-blue-500/30" />
            <span className="text-blue-400/70 font-mono text-xs">{String(currentIndex + 1).padStart(2, '0')}.{String(slides.length).padStart(2, '0')}</span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent" />
              <p className="text-blue-400/80 text-sm font-mono tracking-[0.3em]">
                {slides[currentIndex].subtitle}
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text tracking-wide">
              {slides[currentIndex].title}
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-400" />
              <div className="w-24 h-px bg-gradient-to-r from-blue-500 to-transparent" />
            </div>
          </div>

          {/* Navigation - Hexagonal */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-blue-500/50 bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 transition-all"
            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-blue-500/50 bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 transition-all"
            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators - Tech Lines */}
        <div className="flex justify-center mt-8 gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative transition-all duration-300`}
            >
              <div
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'w-12 bg-gradient-to-r from-blue-500 to-cyan-400'
                    : 'w-4 bg-blue-500/30 hover:bg-blue-500/50'
                }`}
              />
              {index === currentIndex && (
                <div className="absolute -top-1 -bottom-1 left-0 right-0 bg-blue-400/20 blur-sm rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
