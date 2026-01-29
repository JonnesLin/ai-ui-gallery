import { useState } from 'react'

export default function CorporateCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'Enterprise Solutions', subtitle: 'Driving Business Growth', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop' },
    { id: 2, title: 'Global Reach', subtitle: 'Connecting Markets Worldwide', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop' },
    { id: 3, title: 'Innovation First', subtitle: 'Leading Digital Transformation', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop' },
    { id: 4, title: 'Trusted Partnership', subtitle: 'Building Long-term Success', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-slate-50 min-h-[550px] flex items-center justify-center">
      <div className="relative w-full">
        {/* Main Container */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg bg-white">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
            </div>
          ))}

          {/* Content */}
          <div className="absolute inset-y-0 left-0 flex items-center p-8 md:p-16 max-w-xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-0.5 bg-blue-500" />
                <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                  {slides[currentIndex].subtitle}
                </p>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                {slides[currentIndex].title}
              </h2>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800/50">
            <div
              className="h-full bg-blue-500 transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          {/* Arrow Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded border border-slate-300 bg-white flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded border border-slate-300 bg-white flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-medium">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-8 h-1 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-blue-500'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            <span className="text-slate-400 text-sm">
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
