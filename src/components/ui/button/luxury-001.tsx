export default function LuxuryButton() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-zinc-950">
      <h2 className="text-sm font-light text-amber-400 uppercase tracking-[0.3em]">Luxury Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Gold primary */}
        <button
          className="px-10 py-3 text-sm font-light uppercase tracking-[0.2em] text-zinc-900 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #d97706 100%)' }}
        >
          Exclusive
        </button>

        {/* Gold outline */}
        <button className="px-10 py-3 text-sm font-light uppercase tracking-[0.2em] text-amber-400 bg-transparent border border-amber-500/50 rounded-sm transition-all duration-300 hover:bg-amber-500/10 hover:border-amber-400 focus:outline-none">
          Premium
        </button>

        {/* Champagne */}
        <button
          className="px-10 py-3 text-sm font-light uppercase tracking-[0.2em] text-zinc-800 rounded-sm transition-all duration-300 hover:shadow-lg focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)' }}
        >
          Champagne
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Rose gold */}
        <button
          className="px-10 py-3 text-sm font-light uppercase tracking-[0.2em] text-zinc-900 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-rose-400/30 focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #fda4af 0%, #fb7185 50%, #f43f5e 100%)' }}
        >
          Rose Gold
        </button>

        {/* Platinum/Silver */}
        <button
          className="px-10 py-3 text-sm font-light uppercase tracking-[0.2em] text-zinc-700 rounded-sm transition-all duration-300 hover:shadow-lg focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 30%, #e2e8f0 50%, #cbd5e1 70%, #f1f5f9 100%)' }}
        >
          Platinum
        </button>

        {/* Black velvet */}
        <button className="px-10 py-3 text-sm font-light uppercase tracking-[0.2em] text-amber-400 bg-zinc-900 border border-amber-500/30 rounded-sm transition-all duration-300 hover:bg-zinc-800 hover:border-amber-400/50 focus:outline-none">
          Black Velvet
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Elegant border glow */}
        <button className="relative px-10 py-3 text-sm font-light uppercase tracking-[0.2em] text-amber-300 bg-zinc-900 rounded-sm overflow-hidden transition-all duration-300 focus:outline-none group">
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'linear-gradient(135deg, rgba(251,191,36,0.1) 0%, transparent 50%, rgba(251,191,36,0.1) 100%)' }}
          />
          <span className="absolute inset-0 border border-amber-500/30 group-hover:border-amber-400/60 transition-colors rounded-sm" />
          <span className="relative">Elegant</span>
        </button>

        {/* Diamond sparkle */}
        <button className="relative px-10 py-3 text-sm font-light uppercase tracking-[0.2em] text-white bg-zinc-900 border border-zinc-700 rounded-sm overflow-hidden transition-all duration-300 hover:border-zinc-500 focus:outline-none group">
          <span className="relative z-10">Diamond</span>
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Icon buttons */}
        <button
          className="p-4 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #d97706 100%)' }}
        >
          <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>

        <button className="p-4 text-amber-400 bg-zinc-900 border border-amber-500/30 rounded-sm transition-all duration-300 hover:bg-zinc-800 hover:border-amber-400/50 focus:outline-none">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        </button>

        {/* With text and icon */}
        <button className="px-8 py-3 text-sm font-light uppercase tracking-[0.15em] text-amber-400 bg-zinc-900 border border-amber-500/30 rounded-sm transition-all duration-300 hover:bg-zinc-800 hover:border-amber-400/50 focus:outline-none inline-flex items-center gap-3">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Purchase
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Loading */}
        <button className="px-10 py-3 text-sm font-light uppercase tracking-[0.2em] text-amber-400/50 bg-zinc-900 border border-amber-500/20 rounded-sm cursor-wait inline-flex items-center gap-3">
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Processing
        </button>

        {/* Disabled */}
        <button className="px-10 py-3 text-sm font-light uppercase tracking-[0.2em] text-zinc-600 bg-zinc-900 border border-zinc-800 rounded-sm cursor-not-allowed" disabled>
          Unavailable
        </button>
      </div>

      {/* Large luxury CTA */}
      <button
        className="w-full max-w-md px-10 py-5 text-base font-light uppercase tracking-[0.25em] text-zinc-900 rounded-sm transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/30 focus:outline-none"
        style={{ background: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 25%, #fbbf24 50%, #f59e0b 75%, #fcd34d 100%)' }}
      >
        Reserve Your Experience
      </button>
    </div>
  )
}
