import { useState } from 'react'

export default function SketchCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'Hand Drawn', subtitle: 'Authentic & Raw', image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1200&h=600&fit=crop' },
    { id: 2, title: 'Pencil Lines', subtitle: 'Simple Beauty', image: 'https://images.unsplash.com/photo-1456086272160-b28b0645b729?w=1200&h=600&fit=crop' },
    { id: 3, title: 'Creative Flow', subtitle: 'Express Yourself', image: 'https://images.unsplash.com/photo-1452457750107-cd084dce177d?w=1200&h=600&fit=crop' },
    { id: 4, title: 'Doodle Art', subtitle: 'Playful Strokes', image: 'https://images.unsplash.com/photo-1503551723145-6c040742065b?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-amber-50 min-h-[550px] flex items-center justify-center">
      {/* Paper texture background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative w-full">
        {/* Decorative Sketchy Elements */}
        <div className="absolute -top-8 left-4 text-gray-400 opacity-40">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10,30 Q20,10 30,30 T50,30" strokeDasharray="3 2" />
            <circle cx="30" cy="30" r="20" strokeDasharray="4 3" />
          </svg>
        </div>

        {/* Main Container - Sketchy Border */}
        <div className="relative aspect-[16/9] overflow-hidden bg-white">
          {/* Sketchy border effect */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <rect
              x="2" y="2"
              width="calc(100% - 4px)"
              height="calc(100% - 4px)"
              fill="none"
              stroke="#374151"
              strokeWidth="2"
              strokeDasharray="8 4 2 4"
              rx="4"
            />
          </svg>

          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-2 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded"
                style={{ filter: 'sepia(0.2) contrast(0.9)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-50/90 via-transparent to-transparent" />
            </div>
          ))}

          {/* Content - Handwritten Style */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
            <p className="text-gray-500 text-sm italic mb-1" style={{ fontFamily: 'Georgia, serif' }}>
              ~ {slides[currentIndex].subtitle} ~
            </p>
            <h2
              className="text-2xl md:text-4xl text-gray-700"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              {slides[currentIndex].title}
            </h2>
            {/* Underline sketch */}
            <svg className="w-32 h-2 mt-2" viewBox="0 0 100 8">
              <path
                d="M0,4 Q25,1 50,4 T100,4"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Navigation - Sketchy Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15,5 Q12,12 15,19" strokeLinecap="round" />
              <path d="M15,5 L8,12 L15,19" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 0" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9,5 Q12,12 9,19" strokeLinecap="round" />
              <path d="M9,5 L16,12 L9,19" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Indicators - Checkbox Style */}
        <div className="flex justify-center mt-8 gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative w-6 h-6"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="4 2" />
                {index === currentIndex && (
                  <path d="M6,12 L10,16 L18,8" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          ))}
        </div>

        {/* Page Number - Handwritten */}
        <div className="absolute bottom-0 right-4 text-gray-400 italic text-sm" style={{ fontFamily: 'Georgia, serif' }}>
          {currentIndex + 1} of {slides.length}
        </div>
      </div>
    </div>
  )
}
