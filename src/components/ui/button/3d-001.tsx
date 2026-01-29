export default function ThreeDButton() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <h2 className="text-sm font-bold text-gray-700 uppercase tracking-widest">3D Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Primary - Blue 3D */}
        <button className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg shadow-[0_6px_0_0_rgb(29,78,216),0_8px_10px_rgba(0,0,0,0.2)] transition-all duration-150 hover:shadow-[0_4px_0_0_rgb(29,78,216),0_6px_8px_rgba(0,0,0,0.2)] hover:translate-y-[2px] active:shadow-[0_0_0_0_rgb(29,78,216),0_2px_5px_rgba(0,0,0,0.3)] active:translate-y-[6px] focus:outline-none">
          Primary 3D
        </button>

        {/* Secondary - Green 3D */}
        <button className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-b from-green-500 to-green-600 rounded-lg shadow-[0_6px_0_0_rgb(21,128,61),0_8px_10px_rgba(0,0,0,0.2)] transition-all duration-150 hover:shadow-[0_4px_0_0_rgb(21,128,61),0_6px_8px_rgba(0,0,0,0.2)] hover:translate-y-[2px] active:shadow-[0_0_0_0_rgb(21,128,61),0_2px_5px_rgba(0,0,0,0.3)] active:translate-y-[6px] focus:outline-none">
          Secondary
        </button>

        {/* Outline - Purple 3D */}
        <button className="px-6 py-3 text-sm font-semibold text-purple-700 bg-gradient-to-b from-white to-purple-50 rounded-lg border-2 border-purple-600 shadow-[0_6px_0_0_rgb(126,34,206),0_8px_10px_rgba(0,0,0,0.2)] transition-all duration-150 hover:shadow-[0_4px_0_0_rgb(126,34,206),0_6px_8px_rgba(0,0,0,0.2)] hover:translate-y-[2px] active:shadow-[0_0_0_0_rgb(126,34,206),0_2px_5px_rgba(0,0,0,0.3)] active:translate-y-[6px] focus:outline-none">
          Outline
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Small variant */}
        <button className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-b from-red-500 to-red-600 rounded-lg shadow-[0_4px_0_0_rgb(185,28,28),0_6px_8px_rgba(0,0,0,0.2)] transition-all duration-150 hover:shadow-[0_2px_0_0_rgb(185,28,28),0_4px_6px_rgba(0,0,0,0.2)] hover:translate-y-[2px] active:shadow-[0_0_0_0_rgb(185,28,28),0_2px_5px_rgba(0,0,0,0.3)] active:translate-y-[4px] focus:outline-none">
          Small
        </button>

        {/* Medium variant */}
        <button className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-b from-red-500 to-red-600 rounded-lg shadow-[0_6px_0_0_rgb(185,28,28),0_8px_10px_rgba(0,0,0,0.2)] transition-all duration-150 hover:shadow-[0_4px_0_0_rgb(185,28,28),0_6px_8px_rgba(0,0,0,0.2)] hover:translate-y-[2px] active:shadow-[0_0_0_0_rgb(185,28,28),0_2px_5px_rgba(0,0,0,0.3)] active:translate-y-[6px] focus:outline-none">
          Medium
        </button>

        {/* Large variant */}
        <button className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-b from-red-500 to-red-600 rounded-lg shadow-[0_8px_0_0_rgb(185,28,28),0_10px_12px_rgba(0,0,0,0.2)] transition-all duration-150 hover:shadow-[0_6px_0_0_rgb(185,28,28),0_8px_10px_rgba(0,0,0,0.2)] hover:translate-y-[2px] active:shadow-[0_0_0_0_rgb(185,28,28),0_2px_5px_rgba(0,0,0,0.3)] active:translate-y-[8px] focus:outline-none">
          Large
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* With icon - Star */}
        <button className="group px-6 py-3 text-sm font-semibold text-white bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-lg shadow-[0_6px_0_0_rgb(161,98,7),0_8px_10px_rgba(0,0,0,0.2)] transition-all duration-150 hover:shadow-[0_4px_0_0_rgb(161,98,7),0_6px_8px_rgba(0,0,0,0.2)] hover:translate-y-[2px] active:shadow-[0_0_0_0_rgb(161,98,7),0_2px_5px_rgba(0,0,0,0.3)] active:translate-y-[6px] focus:outline-none inline-flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Favorite
        </button>

        {/* Loading state */}
        <button className="px-6 py-3 text-sm font-semibold text-gray-400 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg shadow-[0_4px_0_0_rgb(107,114,128),0_6px_8px_rgba(0,0,0,0.1)] cursor-wait inline-flex items-center gap-2">
          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading
        </button>

        {/* Disabled */}
        <button className="px-6 py-3 text-sm font-semibold text-gray-400 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg shadow-[0_4px_0_0_rgb(156,163,175)] cursor-not-allowed opacity-60" disabled>
          Disabled
        </button>
      </div>

      {/* Pressed/Active state variant */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-b from-indigo-600 to-indigo-700 rounded-lg shadow-[inset_0_4px_8px_rgba(0,0,0,0.3)] translate-y-[4px] focus:outline-none">
          Pressed State
        </button>

        {/* Embossed style */}
        <button className="px-6 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg shadow-[0_6px_0_0_rgb(156,163,175),inset_0_-2px_4px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)] transition-all duration-150 hover:shadow-[0_4px_0_0_rgb(156,163,175),inset_0_-2px_4px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)] hover:translate-y-[2px] focus:outline-none">
          Embossed
        </button>
      </div>

      {/* Full width variant */}
      <button className="w-full max-w-md px-6 py-4 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-b from-cyan-500 to-cyan-600 rounded-lg shadow-[0_8px_0_0_rgb(8,145,178),0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-150 hover:shadow-[0_6px_0_0_rgb(8,145,178),0_8px_12px_rgba(0,0,0,0.2)] hover:translate-y-[2px] active:shadow-[0_0_0_0_rgb(8,145,178),0_2px_5px_rgba(0,0,0,0.3)] active:translate-y-[8px] focus:outline-none">
        Full Width 3D
      </button>

      {/* Rounded pill with 3D effect */}
      <button className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-b from-pink-500 to-pink-600 rounded-full shadow-[0_6px_0_0_rgb(190,24,93),0_8px_10px_rgba(0,0,0,0.2)] transition-all duration-150 hover:shadow-[0_4px_0_0_rgb(190,24,93),0_6px_8px_rgba(0,0,0,0.2)] hover:translate-y-[2px] active:shadow-[0_0_0_0_rgb(190,24,93),0_2px_5px_rgba(0,0,0,0.3)] active:translate-y-[6px] focus:outline-none">
          Pill Shape 3D
        </button>
    </div>
  )
}
