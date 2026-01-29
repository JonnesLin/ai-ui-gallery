import { useState } from 'react'

export default function MonochromeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'Pure Essence', subtitle: 'Black & White', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1200&h=600&fit=crop' },
    { id: 2, title: 'Stark Contrast', subtitle: 'Light & Shadow', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop' },
    { id: 3, title: 'Timeless', subtitle: 'Classic Beauty', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop' },
    { id: 4, title: 'Refined', subtitle: 'Elegant Simplicity', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-white min-h-[550px] flex items-center justify-center">
      <div className="relative w-full">
        {/* Main Container */}
        <div className="relative aspect-[16/9] overflow-hidden bg-black">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>
          ))}

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-6xl md:text-8xl font-thin text-white/20">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 h-px bg-white/20" />
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-2">
              {slides[currentIndex].subtitle}
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-wide">
              {slides[currentIndex].title}
            </h2>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-12 h-0.5 transition-colors ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm tracking-wider">
            {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  )
}
