export default function FuturisticButton() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-slate-950">
      <h2 className="text-sm font-light text-cyan-400 uppercase tracking-[0.3em]" style={{ fontFamily: 'system-ui' }}>Futuristic Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Holographic primary */}
        <button className="relative px-10 py-3 text-sm font-medium uppercase tracking-wider text-white bg-transparent overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] focus:outline-none group">
          <span className="absolute inset-0 border border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
          <span className="relative text-cyan-400">Initialize</span>
        </button>

        {/* Energy field */}
        <button className="relative px-10 py-3 text-sm font-medium uppercase tracking-wider text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 backdrop-blur-sm transition-all duration-300 hover:bg-cyan-900/50 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3),inset_0_0_20px_rgba(34,211,238,0.1)] focus:outline-none">
          Energy Field
        </button>

        {/* Plasma glow */}
        <button
          className="px-10 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)' }}
        >
          Plasma
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Scanning line */}
        <button className="relative px-10 py-3 text-sm font-medium uppercase tracking-wider text-cyan-400 bg-slate-900 border border-cyan-500/30 overflow-hidden transition-all duration-300 focus:outline-none group">
          <span className="relative z-10">Scanning</span>
          <span className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 via-transparent to-transparent h-full w-full translate-y-full group-hover:translate-y-[-100%] transition-transform duration-700" />
        </button>

        {/* Data stream */}
        <button className="relative px-10 py-3 text-sm font-medium uppercase tracking-wider text-emerald-400 bg-slate-900 border border-emerald-500/30 overflow-hidden transition-all duration-300 focus:outline-none group">
          <span className="relative z-10">Data Stream</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000" />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Circuit board pattern */}
        <button
          className="px-10 py-3 text-sm font-medium uppercase tracking-wider text-cyan-400 border border-cyan-500/30 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] focus:outline-none"
          style={{
            background: `
              linear-gradient(90deg, transparent 50%, rgba(34,211,238,0.1) 50%),
              linear-gradient(0deg, transparent 50%, rgba(34,211,238,0.1) 50%)
            `,
            backgroundSize: '4px 4px',
            backgroundColor: 'rgb(15,23,42)'
          }}
        >
          Circuit
        </button>

        {/* Hex grid */}
        <button className="px-10 py-3 text-sm font-medium uppercase tracking-wider text-fuchsia-400 bg-slate-900 border border-fuchsia-500/30 transition-all duration-300 hover:border-fuchsia-400/50 hover:shadow-[0_0_15px_rgba(232,121,249,0.3)] focus:outline-none">
          Quantum
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Icon buttons */}
        <button className="relative p-4 text-cyan-400 bg-slate-900 border border-cyan-500/30 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] focus:outline-none">
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </button>

        <button className="p-4 text-white bg-gradient-to-br from-violet-600 to-fuchsia-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] focus:outline-none">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
        </button>

        {/* With icon */}
        <button className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-cyan-400 bg-slate-900 border border-cyan-500/30 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] focus:outline-none inline-flex items-center gap-3">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          Upload
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Loading */}
        <button className="px-10 py-3 text-sm font-medium uppercase tracking-wider text-cyan-400/50 bg-slate-900 border border-cyan-500/20 cursor-wait inline-flex items-center gap-3">
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Syncing...
        </button>

        {/* Disabled */}
        <button className="px-10 py-3 text-sm font-medium uppercase tracking-wider text-slate-600 bg-slate-900 border border-slate-800 cursor-not-allowed" disabled>
          Offline
        </button>
      </div>

      {/* Large futuristic CTA */}
      <button className="relative w-full max-w-md px-10 py-5 text-base font-medium uppercase tracking-[0.2em] text-cyan-400 bg-slate-900 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] focus:outline-none group">
        <span className="absolute inset-0 border border-cyan-500/30 group-hover:border-cyan-400/50 transition-colors" />
        <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
        <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
        <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
        <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000" />
        <span className="relative">Engage System</span>
      </button>
    </div>
  )
}
