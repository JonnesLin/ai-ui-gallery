export default function RetroCTA() {
  return (
    <section className="py-20 px-4 bg-amber-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_20%,_rgba(180,83,9,0.1)_70%)]"></div>
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-amber-600 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-orange-600 rotate-45"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="bg-gradient-to-b from-orange-200 to-amber-200 rounded-lg p-10 md:p-14 border-2 border-amber-700 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5)]">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="text-6xl">&#9733;</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4" style={{ textShadow: '2px 2px 0 rgba(255,255,255,0.5)' }}>
              A Timeless Experience
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-0.5 bg-amber-700"></div>
              <span className="text-amber-700 text-lg font-serif italic">Est. 2024</span>
              <div className="w-16 h-0.5 bg-amber-700"></div>
            </div>
            <p className="text-lg text-amber-800 mb-10 max-w-xl mx-auto font-serif leading-relaxed">
              Discover the charm of classic design combined with modern functionality. Quality that stands the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-amber-800 text-amber-100 font-serif text-lg rounded hover:bg-amber-900 transition-colors shadow-lg">
                Shop Collection
              </button>
              <button className="px-10 py-4 bg-transparent text-amber-800 font-serif text-lg rounded border-2 border-amber-800 hover:bg-amber-800 hover:text-amber-100 transition-colors">
                Our Story
              </button>
            </div>
            <div className="mt-10 flex justify-center gap-8 text-amber-700 text-sm font-serif">
              <span>&#10003; Handcrafted</span>
              <span>&#10003; Premium Quality</span>
              <span>&#10003; Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
