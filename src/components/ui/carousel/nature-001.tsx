import { useState } from 'react'

export default function NatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'Forest Whispers', subtitle: 'Listen to nature', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop' },
    { id: 2, title: 'Mountain Majesty', subtitle: 'Reach new heights', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop' },
    { id: 3, title: 'Ocean Serenity', subtitle: 'Find your calm', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop' },
    { id: 4, title: 'Meadow Dreams', subtitle: 'Embrace simplicity', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-gradient-to-b from-emerald-50 to-green-100 min-h-[550px] flex items-center justify-center">
      <div className="relative w-full">
        {/* Leaf Decorations */}
        <div className="absolute -top-4 left-8 w-8 h-8 text-emerald-300 opacity-50">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
        </div>
        <div className="absolute -top-2 right-12 w-6 h-6 text-emerald-400 opacity-40 rotate-45">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
        </div>

        {/* Main Container */}
        <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
            </div>
          ))}

          {/* Organic Shape Overlay */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-auto fill-emerald-50/90">
              <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"/>
            </svg>
          </div>

          {/* Content */}
          <div className="absolute bottom-12 left-8 right-8 md:left-16">
            <p className="text-emerald-200 text-sm font-medium tracking-wider uppercase mb-2">
              {slides[currentIndex].subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {slides[currentIndex].title}
            </h2>
          </div>

          {/* Navigation - Organic Shapes */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-emerald-700 hover:bg-emerald-100 transition-all shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-emerald-700 hover:bg-emerald-100 transition-all shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators - Leaf Dots */}
        <div className="flex justify-center mt-8 gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                index === currentIndex ? 'scale-125' : ''
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-emerald-600'
                    : 'bg-emerald-300 hover:bg-emerald-400'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
