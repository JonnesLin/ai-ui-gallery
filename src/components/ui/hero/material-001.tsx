export default function MaterialHero() {
  return (
    <section className="min-h-screen bg-[#fafafa] relative overflow-hidden flex items-center justify-center px-6">
      {/* Material Design cards floating in background */}
      <div className="absolute top-20 left-[10%] w-48 h-48 bg-white rounded-lg shadow-md transform rotate-12 hidden lg:block" />
      <div className="absolute bottom-32 right-[10%] w-64 h-40 bg-white rounded-lg shadow-lg transform -rotate-6 hidden lg:block" />
      <div className="absolute top-1/3 right-[20%] w-32 h-32 bg-[#6200ee] rounded-full shadow-xl hidden lg:block" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Material Design FAB-style badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white rounded-full shadow-md">
          <div className="w-3 h-3 bg-[#6200ee] rounded-full" />
          <span className="text-sm font-medium text-gray-700">Material Design 3</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-[#1c1b1f] mb-6 leading-tight tracking-tight">
          <span className="font-light">Design with</span>
          <span className="block font-medium text-[#6200ee]">Material</span>
        </h1>

        <p className="text-lg md:text-xl text-[#49454f] mb-12 max-w-2xl mx-auto leading-relaxed">
          Build beautiful, usable products with Material Design. Comprehensive guidance and components for Android, iOS, Flutter, and web.
        </p>

        {/* Material buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {/* Filled button */}
          <button className="px-8 py-4 bg-[#6200ee] text-white font-medium rounded-full shadow-md hover:shadow-lg hover:bg-[#7c3aed] active:bg-[#5b21b6] transition-all">
            Get Started
          </button>
          {/* Outlined button */}
          <button className="px-8 py-4 border border-[#79747e] text-[#6200ee] font-medium rounded-full hover:bg-[#6200ee]/5 active:bg-[#6200ee]/10 transition-all">
            View Components
          </button>
          {/* Text button */}
          <button className="px-8 py-4 text-[#6200ee] font-medium rounded-full hover:bg-[#6200ee]/5 active:bg-[#6200ee]/10 transition-all">
            Learn More
          </button>
        </div>

        {/* Material cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Elevated card */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-left">
            <div className="w-12 h-12 bg-[#e8def8] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#6200ee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#1c1b1f] mb-2">Components</h3>
            <p className="text-sm text-[#49454f]">Build with ready-made Material components</p>
          </div>

          {/* Filled card */}
          <div className="bg-[#e8def8] rounded-xl p-6 text-left">
            <div className="w-12 h-12 bg-[#6200ee] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#1c1b1f] mb-2">Theming</h3>
            <p className="text-sm text-[#49454f]">Customize with dynamic color system</p>
          </div>

          {/* Outlined card */}
          <div className="bg-white rounded-xl p-6 border border-[#cac4d0] text-left">
            <div className="w-12 h-12 bg-[#fef7ff] rounded-full flex items-center justify-center mb-4 border border-[#e8def8]">
              <svg className="w-6 h-6 text-[#6200ee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#1c1b1f] mb-2">Responsive</h3>
            <p className="text-sm text-[#49454f]">Adaptive layouts for every screen</p>
          </div>
        </div>
      </div>
    </section>
  );
}
