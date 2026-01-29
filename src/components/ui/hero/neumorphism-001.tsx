export default function NeumorphismHero() {
  return (
    <section className="min-h-screen bg-[#e0e5ec] flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main card with neumorphic effect */}
        <div className="bg-[#e0e5ec] rounded-[40px] p-8 md:p-16 shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff]">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm font-medium text-slate-600">New Release Available</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-700 mb-6 leading-tight">
            Soft UI for
            <span className="block text-slate-500">Modern Apps</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed">
            Experience the gentle aesthetics of neumorphic design. Soft shadows, subtle depth, and elegant interactions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-8 py-4 bg-[#e0e5ec] text-slate-700 font-semibold rounded-2xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] transition-all duration-200">
              Get Started
            </button>
            <button className="px-8 py-4 bg-[#e0e5ec] text-slate-500 font-medium rounded-2xl shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Floating neumorphic elements */}
        <div className="flex justify-center gap-8 mt-12">
          <div className="w-16 h-16 bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="w-16 h-16 bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-16 h-16 bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
