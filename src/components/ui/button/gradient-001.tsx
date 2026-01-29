export default function GradientButton() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-slate-950">
      <h2 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Gradient Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Sunset gradient */}
        <button
          className="px-8 py-3 text-sm font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 focus:outline-none focus:ring-2 focus:ring-orange-500/50 active:scale-100"
          style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)' }}
        >
          Sunset
        </button>

        {/* Ocean gradient */}
        <button
          className="px-8 py-3 text-sm font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 active:scale-100"
          style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)' }}
        >
          Ocean
        </button>

        {/* Forest gradient */}
        <button
          className="px-8 py-3 text-sm font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 active:scale-100"
          style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
        >
          Forest
        </button>

        {/* Purple dream */}
        <button
          className="px-8 py-3 text-sm font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500/50 active:scale-100"
          style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)' }}
        >
          Purple
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Multi-color rainbow */}
        <button
          className="px-10 py-3 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
          style={{ background: 'linear-gradient(90deg, #f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ec4899)' }}
        >
          Rainbow
        </button>

        {/* Aurora gradient */}
        <button
          className="px-10 py-3 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30 focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #0d9488 0%, #8b5cf6 50%, #ec4899 100%)' }}
        >
          Aurora
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Animated gradient */}
        <button
          className="px-8 py-3 text-sm font-semibold text-white rounded-lg transition-transform duration-300 hover:scale-105 focus:outline-none animate-gradient bg-[length:200%_200%]"
          style={{
            background: 'linear-gradient(270deg, #f97316, #ec4899, #8b5cf6, #3b82f6)',
            backgroundSize: '400% 400%',
            animation: 'gradient-shift 8s ease infinite'
          }}
        >
          Animated
        </button>

        {/* Gradient border with dark fill */}
        <button className="relative px-8 py-3 text-sm font-semibold text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none group">
          <span
            className="absolute inset-0 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)' }}
          />
          <span className="absolute inset-[2px] rounded-[6px] bg-slate-950 group-hover:bg-slate-900 transition-colors" />
          <span className="relative">Gradient Border</span>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Icon with gradient */}
        <button
          className="p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' }}
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Text with icon */}
        <button
          className="px-6 py-3 text-sm font-semibold text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 focus:outline-none inline-flex items-center gap-2"
          style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Boost
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Loading */}
        <button
          className="px-8 py-3 text-sm font-semibold text-white/70 rounded-lg cursor-wait inline-flex items-center gap-2 opacity-70"
          style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
        >
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading
        </button>

        {/* Disabled */}
        <button
          className="px-8 py-3 text-sm font-semibold text-white/40 rounded-lg cursor-not-allowed opacity-40"
          style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
          disabled
        >
          Disabled
        </button>
      </div>

      {/* Large CTA with glow */}
      <button
        className="w-full max-w-md px-8 py-5 text-base font-bold text-white rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
        style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)' }}
      >
        Start Your Journey
      </button>

      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}
