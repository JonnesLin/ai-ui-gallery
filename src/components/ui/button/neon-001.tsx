export default function NeonButton() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-gray-950 min-h-screen">
      <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Neon Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Primary - Cyan neon */}
        <button className="px-6 py-3 text-sm font-bold text-cyan-400 bg-transparent border-2 border-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-gray-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] focus:outline-none focus:shadow-[0_0_30px_rgba(34,211,238,1)] shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          NEON CYAN
        </button>

        {/* Secondary - Magenta neon */}
        <button className="px-6 py-3 text-sm font-bold text-fuchsia-500 bg-transparent border-2 border-fuchsia-500 transition-all duration-300 hover:bg-fuchsia-500 hover:text-gray-950 hover:shadow-[0_0_20px_rgba(217,70,239,0.8)] focus:outline-none focus:shadow-[0_0_30px_rgba(217,70,239,1)] shadow-[0_0_10px_rgba(217,70,239,0.5)]">
          NEON PINK
        </button>

        {/* Outline - Green neon */}
        <button className="px-6 py-3 text-sm font-bold text-green-400 bg-transparent border-2 border-green-400 transition-all duration-300 hover:bg-green-400 hover:text-gray-950 hover:shadow-[0_0_20px_rgba(74,222,128,0.8)] focus:outline-none focus:shadow-[0_0_30px_rgba(74,222,128,1)] shadow-[0_0_10px_rgba(74,222,128,0.5)]">
          NEON GREEN
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Small variant */}
        <button className="px-4 py-2 text-xs font-bold text-yellow-400 bg-transparent border-2 border-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-gray-950 hover:shadow-[0_0_15px_rgba(250,204,21,0.8)] focus:outline-none shadow-[0_0_8px_rgba(250,204,21,0.5)]">
          SMALL
        </button>

        {/* Medium variant */}
        <button className="px-6 py-3 text-sm font-bold text-yellow-400 bg-transparent border-2 border-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-gray-950 hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] focus:outline-none shadow-[0_0_10px_rgba(250,204,21,0.5)]">
          MEDIUM
        </button>

        {/* Large variant */}
        <button className="px-8 py-4 text-base font-bold text-yellow-400 bg-transparent border-2 border-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-gray-950 hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] focus:outline-none shadow-[0_0_12px_rgba(250,204,21,0.5)]">
          LARGE
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* With icon - Lightning */}
        <button className="group px-6 py-3 text-sm font-bold text-purple-400 bg-transparent border-2 border-purple-400 transition-all duration-300 hover:bg-purple-400 hover:text-gray-950 hover:shadow-[0_0_20px_rgba(192,132,252,0.8)] focus:outline-none shadow-[0_0_10px_rgba(192,132,252,0.5)] inline-flex items-center gap-2">
          <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
          </svg>
          POWER
        </button>

        {/* Loading state */}
        <button className="px-6 py-3 text-sm font-bold text-orange-400 bg-transparent border-2 border-orange-400 cursor-wait shadow-[0_0_10px_rgba(251,146,60,0.5)] inline-flex items-center gap-2">
          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          LOADING
        </button>

        {/* Disabled */}
        <button className="px-6 py-3 text-sm font-bold text-gray-600 bg-transparent border-2 border-gray-700 cursor-not-allowed opacity-40" disabled>
          DISABLED
        </button>
      </div>

      {/* Filled variant - Red neon */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="px-6 py-3 text-sm font-bold text-gray-950 bg-red-500 border-2 border-red-500 transition-all duration-300 hover:bg-transparent hover:text-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.8)] focus:outline-none shadow-[0_0_15px_rgba(239,68,68,0.7)]">
          FILLED NEON
        </button>

        {/* Blue variant */}
        <button className="px-6 py-3 text-sm font-bold text-gray-950 bg-blue-500 border-2 border-blue-500 transition-all duration-300 hover:bg-transparent hover:text-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] focus:outline-none shadow-[0_0_15px_rgba(59,130,246,0.7)]">
          ELECTRIC BLUE
        </button>
      </div>

      {/* Full width variant - Animated glow */}
      <button className="w-full max-w-md px-6 py-4 text-sm font-bold uppercase tracking-wider text-cyan-400 bg-transparent border-2 border-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-gray-950 focus:outline-none shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,1)] animate-pulse">
        FULL WIDTH GLOW
      </button>

      {/* Multicolor neon */}
      <button className="px-6 py-3 text-sm font-bold text-white bg-transparent border-2 border-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(34,211,238,0.5),0_0_60px_rgba(217,70,239,0.3)] focus:outline-none shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          MULTICOLOR GLOW
        </button>
    </div>
  )
}
