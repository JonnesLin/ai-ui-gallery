export default function NatureHero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-100 relative overflow-hidden flex items-center justify-center px-6">
      {/* Leaf decorations */}
      <svg className="absolute top-10 left-10 w-32 h-32 text-emerald-200 rotate-45 hidden lg:block" viewBox="0 0 100 100">
        <path d="M50,10 Q80,30 50,90 Q20,30 50,10" fill="currentColor" />
        <path d="M50,10 L50,90" stroke="rgba(16,185,129,0.3)" strokeWidth="2" />
      </svg>
      <svg className="absolute bottom-20 right-10 w-24 h-24 text-green-200 -rotate-12 hidden lg:block" viewBox="0 0 100 100">
        <path d="M50,10 Q80,30 50,90 Q20,30 50,10" fill="currentColor" />
        <path d="M50,10 L50,90" stroke="rgba(16,185,129,0.3)" strokeWidth="2" />
      </svg>
      <svg className="absolute top-1/3 right-20 w-20 h-20 text-emerald-100 rotate-90 hidden lg:block" viewBox="0 0 100 100">
        <path d="M50,10 Q80,30 50,90 Q20,30 50,10" fill="currentColor" />
      </svg>

      {/* Organic blob shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-200/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200/50 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eco badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-emerald-200">
          <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-emerald-700">Sustainable Future</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-emerald-900 mb-6 leading-tight">
          <span>Return to</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
            Nature
          </span>
        </h1>

        <p className="text-lg md:text-xl text-emerald-700/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Reconnect with the Earth. Discover sustainable solutions that nurture our planet
          while creating a better tomorrow for generations to come.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
            <span>Start Your Journey</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button className="px-8 py-4 bg-white/80 text-emerald-700 font-semibold rounded-full border border-emerald-200 hover:bg-white hover:border-emerald-300 transition-all backdrop-blur-sm">
            Learn More
          </button>
        </div>

        {/* Impact stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-emerald-900 mb-1">1M+</div>
            <div className="text-emerald-600 text-sm">Trees Planted</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-emerald-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-emerald-900 mb-1">50K</div>
            <div className="text-emerald-600 text-sm">Tons CO2 Offset</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-emerald-100">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-emerald-900 mb-1">100K+</div>
            <div className="text-emerald-600 text-sm">Community Members</div>
          </div>
        </div>
      </div>
    </section>
  );
}
