import { useState } from 'react'

export default function RetroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'Groovy Vibes', subtitle: 'Far Out, Man!', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop' },
    { id: 2, title: 'Disco Fever', subtitle: 'Boogie Nights', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=600&fit=crop' },
    { id: 3, title: 'Neon Dreams', subtitle: 'Electric Avenue', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&h=600&fit=crop' },
    { id: 4, title: 'Radical Times', subtitle: 'Totally Tubular', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-gradient-to-br from-orange-300 via-pink-300 to-purple-400 min-h-[550px] flex items-center justify-center">
      <div className="relative w-full">
        {/* Main Container with Retro Border */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden border-8 border-amber-100 shadow-[8px_8px_0_0_rgba(0,0,0,0.3)]">
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
                className="w-full h-full object-cover sepia-[.3] saturate-150"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-orange-500/30" />
            </div>
          ))}

          {/* Retro Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="text-amber-200 text-sm font-bold tracking-widest uppercase mb-2 drop-shadow-lg">
              {slides[currentIndex].subtitle}
            </p>
            <h2
              className="text-3xl md:text-5xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text drop-shadow-lg"
              style={{ fontFamily: 'system-ui' }}
            >
              {slides[currentIndex].title}
            </h2>
          </div>

          {/* Navigation Arrows - Retro Style */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-amber-100 border-4 border-amber-800 flex items-center justify-center text-amber-800 hover:bg-amber-200 transition-colors shadow-[4px_4px_0_0_rgba(120,53,15,0.5)]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-amber-100 border-4 border-amber-800 flex items-center justify-center text-amber-800 hover:bg-amber-200 transition-colors shadow-[4px_4px_0_0_rgba(120,53,15,0.5)]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators - Flower Style */}
        <div className="flex justify-center mt-8 gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-6 h-6 rounded-full transition-all duration-300 border-4 ${
                index === currentIndex
                  ? 'bg-amber-400 border-amber-800 scale-125'
                  : 'bg-amber-100 border-amber-600 hover:bg-amber-200'
              }`}
              style={{
                boxShadow: index === currentIndex ? '0 0 12px rgba(251, 191, 36, 0.6)' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
