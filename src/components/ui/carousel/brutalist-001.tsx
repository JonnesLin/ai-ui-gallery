import { useState } from 'react'

export default function BrutalistCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { id: 1, title: 'RAW POWER', subtitle: 'UNFILTERED DESIGN', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1200&h=600&fit=crop' },
    { id: 2, title: 'BOLD MOVE', subtitle: 'NO COMPROMISE', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop' },
    { id: 3, title: 'STARK TRUTH', subtitle: 'BRUTAL HONESTY', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=600&fit=crop' },
    { id: 4, title: 'PURE FORM', subtitle: 'FUNCTION FIRST', image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1200&h=600&fit=crop' },
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 bg-white min-h-[550px] flex items-center justify-center">
      <div className="relative w-full">
        {/* Main Container */}
        <div className="relative aspect-[16/9] border-4 border-black overflow-hidden bg-black">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-yellow-400 border-t-4 border-black">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-mono font-bold tracking-widest text-black/70 mb-1">
                  {slides[currentIndex].subtitle}
                </p>
                <h2 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight">
                  {slides[currentIndex].title}
                </h2>
              </div>
              <div className="text-right">
                <span className="text-6xl md:text-8xl font-black text-black/20">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Slide Counter */}
          <div className="absolute top-4 right-4 bg-black text-yellow-400 px-4 py-2 font-mono font-bold text-sm">
            {currentIndex + 1}/{slides.length}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={goToPrevious}
            className="px-8 py-4 bg-black text-white font-black uppercase tracking-wider border-4 border-black hover:bg-yellow-400 hover:text-black transition-colors"
          >
            PREV
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-8 h-8 border-4 border-black font-mono font-bold text-sm transition-colors ${
                  index === currentIndex
                    ? 'bg-yellow-400 text-black'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={goToNext}
            className="px-8 py-4 bg-black text-white font-black uppercase tracking-wider border-4 border-black hover:bg-yellow-400 hover:text-black transition-colors"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}
