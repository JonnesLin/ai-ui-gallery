import { useState } from 'react'

export default function LuxuryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'Timeless Elegance', subtitle: 'Crafted Perfection', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop' },
    { id: 2, title: 'Refined Taste', subtitle: 'Exclusive Collection', image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=1200&h=600&fit=crop' },
    { id: 3, title: 'Pure Opulence', subtitle: 'Beyond Ordinary', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop' },
    { id: 4, title: 'Bespoke Design', subtitle: 'Artisanal Mastery', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-[#0c0c0c] min-h-[550px] flex items-center justify-center">
      <div className="relative w-full">
        {/* Gold Decorative Lines */}
        <div className="absolute -top-6 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />

        {/* Main Container */}
        <div className="relative aspect-[16/9] overflow-hidden border border-amber-800/30">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                index === currentIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/30 to-transparent" />
            </div>
          ))}

          {/* Gold Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-20">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-amber-500 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-amber-500 to-transparent" />
          </div>
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-amber-500 to-transparent" />
            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-amber-500 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20">
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-amber-500 to-transparent" />
            <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-amber-500 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-20 h-20">
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-amber-500 to-transparent" />
            <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-amber-500 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <p className="text-amber-500 text-sm font-light tracking-[0.4em] uppercase mb-3">
              {slides[currentIndex].subtitle}
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
              {slides[currentIndex].title}
            </h2>
            <div className="mt-6 w-16 h-px bg-gradient-to-r from-amber-500 to-transparent" />
          </div>

          {/* Navigation Arrows - Elegant */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-amber-500/50 flex items-center justify-center text-amber-500 hover:bg-amber-500/10 hover:border-amber-500 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-amber-500/50 flex items-center justify-center text-amber-500 hover:bg-amber-500/10 hover:border-amber-500 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators - Diamond Style */}
        <div className="flex justify-center mt-8 gap-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative transition-all duration-500 ${
                index === currentIndex ? 'scale-125' : ''
              }`}
            >
              <div
                className={`w-3 h-3 rotate-45 border transition-colors ${
                  index === currentIndex
                    ? 'border-amber-500 bg-amber-500'
                    : 'border-amber-800 bg-transparent hover:border-amber-600'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Gold Decorative Lines */}
        <div className="absolute -bottom-6 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
      </div>
    </div>
  )
}
