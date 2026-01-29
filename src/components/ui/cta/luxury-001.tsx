export default function LuxuryCTA() {
  return (
    <section className="py-24 px-4 bg-stone-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-stone-950 to-stone-950"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-8">
            <svg className="w-12 h-12 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-wide">
            Experience
            <span className="block font-serif italic text-amber-400">Excellence</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-8"></div>
          <p className="text-lg text-stone-400 mb-12 max-w-xl mx-auto leading-relaxed tracking-wide">
            Indulge in the finest craftsmanship. Where every detail is meticulously curated for those who demand nothing but the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-medium tracking-widest uppercase text-sm hover:from-amber-500 hover:to-amber-400 transition-all">
              Book Private Viewing
            </button>
            <button className="px-12 py-4 text-amber-500 font-medium tracking-widest uppercase text-sm border border-amber-500/30 hover:border-amber-500 hover:bg-amber-500/5 transition-all">
              Explore Collection
            </button>
          </div>
          <div className="mt-16 flex items-center justify-center gap-12 text-xs uppercase tracking-[0.2em] text-stone-500">
            <span>Since 1892</span>
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
            <span>Worldwide Delivery</span>
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
            <span>Lifetime Warranty</span>
          </div>
        </div>
      </div>
    </section>
  )
}
