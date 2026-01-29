export default function CyberpunkButton() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-gray-950">
      <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em]" style={{ fontFamily: 'monospace' }}>Cyberpunk Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Neon cyan */}
        <button className="px-8 py-3 text-sm font-bold uppercase tracking-wider text-cyan-400 bg-transparent border border-cyan-400 transition-all duration-200 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_#22d3ee,inset_0_0_20px_rgba(34,211,238,0.1)] focus:outline-none relative overflow-hidden group" style={{ fontFamily: 'monospace', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
          <span className="relative z-10">Execute</span>
          <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-400" />
        </button>

        {/* Neon magenta */}
        <button className="px-8 py-3 text-sm font-bold uppercase tracking-wider text-fuchsia-400 bg-transparent border border-fuchsia-400 transition-all duration-200 hover:bg-fuchsia-400/10 hover:shadow-[0_0_20px_#e879f9,inset_0_0_20px_rgba(232,121,249,0.1)] focus:outline-none" style={{ fontFamily: 'monospace', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
          Hack
        </button>

        {/* Neon yellow */}
        <button className="px-8 py-3 text-sm font-bold uppercase tracking-wider text-yellow-400 bg-transparent border border-yellow-400 transition-all duration-200 hover:bg-yellow-400/10 hover:shadow-[0_0_20px_#facc15,inset_0_0_20px_rgba(250,204,21,0.1)] focus:outline-none" style={{ fontFamily: 'monospace', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
          Warning
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Glitch effect button */}
        <button className="relative px-8 py-3 text-sm font-bold uppercase tracking-wider text-white bg-cyan-500 transition-all duration-200 hover:bg-cyan-400 focus:outline-none group" style={{ fontFamily: 'monospace', clipPath: 'polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}>
          <span className="relative z-10">Glitch</span>
          <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 group-hover:animate-pulse translate-x-0.5" style={{ clipPath: 'polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }} />
          <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 group-hover:animate-pulse -translate-x-0.5" style={{ clipPath: 'polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }} />
        </button>

        {/* Filled cyber */}
        <button className="px-8 py-3 text-sm font-bold uppercase tracking-wider text-gray-950 bg-cyan-400 border-2 border-cyan-300 transition-all duration-200 hover:bg-cyan-300 hover:shadow-[0_0_30px_#22d3ee] focus:outline-none" style={{ fontFamily: 'monospace', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
          Upload
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Scanning line effect */}
        <button className="relative px-8 py-3 text-sm font-bold uppercase tracking-wider text-cyan-400 bg-gray-900 border border-cyan-400/50 overflow-hidden transition-all duration-200 focus:outline-none group" style={{ fontFamily: 'monospace' }}>
          <span className="relative z-10">Scanning</span>
          <span className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent translate-y-full group-hover:translate-y-[-100%] transition-transform duration-1000" />
        </button>

        {/* Grid pattern */}
        <button
          className="px-8 py-3 text-sm font-bold uppercase tracking-wider text-fuchsia-400 border border-fuchsia-400/50 transition-all duration-200 hover:border-fuchsia-400 hover:shadow-[0_0_20px_rgba(232,121,249,0.3)] focus:outline-none"
          style={{
            fontFamily: 'monospace',
            backgroundImage: 'linear-gradient(rgba(232,121,249,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,121,249,0.1) 1px, transparent 1px)',
            backgroundSize: '10px 10px'
          }}
        >
          Matrix
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Icon buttons */}
        <button className="p-4 text-cyan-400 bg-transparent border border-cyan-400 transition-all duration-200 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_#22d3ee] focus:outline-none" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>

        <button className="p-4 text-fuchsia-400 bg-transparent border border-fuchsia-400 transition-all duration-200 hover:bg-fuchsia-400/10 hover:shadow-[0_0_15px_#e879f9] focus:outline-none" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </button>

        {/* With icon */}
        <button className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-cyan-400 bg-transparent border border-cyan-400 transition-all duration-200 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_#22d3ee] focus:outline-none inline-flex items-center gap-2" style={{ fontFamily: 'monospace', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Upload
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Loading */}
        <button className="px-8 py-3 text-sm font-bold uppercase tracking-wider text-cyan-400/50 bg-transparent border border-cyan-400/30 cursor-wait inline-flex items-center gap-2" style={{ fontFamily: 'monospace', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading...
        </button>

        {/* Disabled */}
        <button className="px-8 py-3 text-sm font-bold uppercase tracking-wider text-gray-600 bg-transparent border border-gray-700 cursor-not-allowed" style={{ fontFamily: 'monospace', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }} disabled>
          Offline
        </button>
      </div>

      {/* Large CTA */}
      <button className="w-full max-w-md px-8 py-5 text-lg font-bold uppercase tracking-[0.2em] text-gray-950 bg-cyan-400 border-2 border-cyan-300 transition-all duration-200 hover:bg-cyan-300 hover:shadow-[0_0_40px_#22d3ee,0_0_80px_rgba(34,211,238,0.3)] focus:outline-none" style={{ fontFamily: 'monospace', clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
        Jack In
      </button>
    </div>
  )
}
