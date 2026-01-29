export default function SketchCTA() {
  return (
    <section className="py-20 px-4 bg-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="sketch-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#92400e" opacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#sketch-pattern)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="relative bg-white p-10 md:p-14 border-2 border-amber-900/20" style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-400 rounded-full opacity-80" style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80" style={{ borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px' }}></div>

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              <span style={{ textDecoration: 'underline', textDecorationStyle: 'wavy', textDecorationColor: '#f59e0b' }}>Sketch</span> Your Ideas
            </h2>
            <p className="text-lg text-amber-800/70 mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Sometimes the best ideas start with a simple doodle. Let your creativity flow freely.
            </p>

            <div className="inline-block mb-10">
              <svg className="w-32 h-8" viewBox="0 0 120 30">
                <path d="M5,15 Q30,5 60,15 T115,15" stroke="#92400e" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="4,4" />
              </svg>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-amber-900 text-amber-50 font-semibold text-lg hover:bg-amber-800 transition-colors" style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px', fontFamily: 'Georgia, serif' }}>
                Start Sketching
              </button>
              <button className="px-10 py-4 text-amber-900 font-semibold text-lg border-2 border-amber-900/30 hover:border-amber-900 transition-colors" style={{ borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px', fontFamily: 'Georgia, serif' }}>
                View Gallery
              </button>
            </div>

            <p className="mt-10 text-amber-700/60 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
              * No artistic skills required - just imagination!
            </p>
          </div>

          <div className="absolute top-4 left-4">
            <svg className="w-8 h-8 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4l-6.4 4.8 2.4-7.2-6-4.8h7.6z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
