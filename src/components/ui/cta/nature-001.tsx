export default function NatureCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-green-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="currentColor" className="text-green-600" />
        </svg>
      </div>
      <div className="absolute top-10 right-10 text-green-200 text-8xl opacity-30">&#127793;</div>
      <div className="absolute bottom-10 left-10 text-green-200 text-6xl opacity-30">&#127807;</div>

      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 md:p-14 shadow-xl border border-green-100">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <span>&#127806;</span>
              Eco-Friendly
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Go Green with Us
            </h2>
            <p className="text-lg text-green-700 mb-10 max-w-xl mx-auto leading-relaxed">
              Join the movement towards a sustainable future. Every choice matters, and together we can make a difference for our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-200">
                Start Your Journey
              </button>
              <button className="px-10 py-4 text-green-700 font-semibold rounded-full border-2 border-green-300 hover:border-green-600 hover:bg-green-50 transition-colors">
                Learn More
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">&#127795;</div>
                <div className="text-2xl font-bold text-green-800">1M+</div>
                <div className="text-xs text-green-600">Trees Planted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">&#127757;</div>
                <div className="text-2xl font-bold text-green-800">50K</div>
                <div className="text-xs text-green-600">Tons CO2 Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">&#129309;</div>
                <div className="text-2xl font-bold text-green-800">100K</div>
                <div className="text-xs text-green-600">Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
