export default function MonochromeButton() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-white min-h-screen">
      <h2 className="text-sm font-semibold text-black uppercase tracking-widest">Monochrome Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Primary - Black on white */}
        <button className="px-6 py-3 text-sm font-medium text-white bg-black border-2 border-black transition-all duration-200 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
          Primary Action
        </button>

        {/* Secondary - White on black */}
        <button className="px-6 py-3 text-sm font-medium text-black bg-white border-2 border-black transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
          Secondary
        </button>

        {/* Outline - Transparent with black border */}
        <button className="px-6 py-3 text-sm font-medium text-black bg-transparent border-2 border-black transition-all duration-200 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
          Outline
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Small variant */}
        <button className="px-4 py-2 text-xs font-medium text-white bg-black border-2 border-black transition-all duration-200 hover:bg-gray-900 focus:outline-none">
          Small
        </button>

        {/* Medium variant */}
        <button className="px-6 py-3 text-sm font-medium text-white bg-black border-2 border-black transition-all duration-200 hover:bg-gray-900 focus:outline-none">
          Medium
        </button>

        {/* Large variant */}
        <button className="px-8 py-4 text-base font-medium text-white bg-black border-2 border-black transition-all duration-200 hover:bg-gray-900 focus:outline-none">
          Large
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* With icon - Checkmark */}
        <button className="group px-6 py-3 text-sm font-medium text-white bg-black border-2 border-black transition-all duration-200 hover:bg-gray-900 focus:outline-none inline-flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Confirm
        </button>

        {/* Loading state */}
        <button className="px-6 py-3 text-sm font-medium text-gray-500 bg-gray-200 border-2 border-gray-300 cursor-wait inline-flex items-center gap-2">
          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading
        </button>

        {/* Disabled */}
        <button className="px-6 py-3 text-sm font-medium text-gray-400 bg-gray-200 border-2 border-gray-300 cursor-not-allowed" disabled>
          Disabled
        </button>
      </div>

      {/* Ghost variant */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="px-6 py-3 text-sm font-medium text-black bg-transparent transition-all duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
          Ghost Button
        </button>

        {/* Inverted ghost */}
        <button className="px-6 py-3 text-sm font-medium text-white bg-black transition-opacity duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
          Inverted Ghost
        </button>
      </div>

      {/* Full width variant */}
      <button className="w-full max-w-md px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-black border-2 border-black transition-all duration-200 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4">
        Full Width Action
      </button>

      {/* Striped variant - pure B&W pattern */}
      <button className="px-6 py-3 text-sm font-medium text-white bg-black relative overflow-hidden transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]">
        Striped Pattern
      </button>
    </div>
  )
}
