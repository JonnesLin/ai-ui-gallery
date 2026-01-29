export default function MonochromeHero() {
  return (
    <section className="min-h-screen bg-neutral-50 relative overflow-hidden flex items-center justify-center px-6">
      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-neutral-200 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-neutral-100 hidden lg:block" />
      <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full border-2 border-neutral-200 hidden lg:block" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-neutral-100" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="mb-8">
              <span className="text-neutral-400 text-sm uppercase tracking-[0.3em] font-medium">
                Monochrome Studio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-[1.1]">
              Simplicity
              <span className="block text-neutral-400">in Design</span>
            </h1>

            <p className="text-lg text-neutral-500 mb-10 leading-relaxed max-w-md">
              Strip away the unnecessary. Focus on what matters.
              Create designs that stand the test of time through elegant restraint.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors">
                Explore Work
              </button>
              <button className="px-8 py-4 border border-neutral-300 text-neutral-700 font-medium hover:border-neutral-900 hover:text-neutral-900 transition-colors">
                Our Process
              </button>
            </div>
          </div>

          {/* Right content - Abstract composition */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Large circle */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-neutral-900 rounded-full" />
              {/* Medium rectangle */}
              <div className="absolute bottom-0 left-0 w-48 h-64 bg-neutral-200" />
              {/* Small square */}
              <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-neutral-400" />
              {/* Thin line */}
              <div className="absolute top-1/4 left-0 w-full h-px bg-neutral-300" />
              {/* Text overlay */}
              <div className="absolute bottom-1/4 right-1/4 text-9xl font-bold text-neutral-100">
                01
              </div>
            </div>
          </div>
        </div>

        {/* Bottom navigation dots */}
        <div className="flex items-center gap-4 mt-20">
          <div className="w-8 h-8 bg-neutral-900 rounded-full" />
          <div className="w-2 h-2 bg-neutral-300 rounded-full" />
          <div className="w-2 h-2 bg-neutral-300 rounded-full" />
          <div className="w-2 h-2 bg-neutral-300 rounded-full" />
          <div className="flex-1 h-px bg-neutral-200" />
          <span className="text-neutral-400 text-sm font-mono">01/04</span>
        </div>
      </div>
    </section>
  );
}
