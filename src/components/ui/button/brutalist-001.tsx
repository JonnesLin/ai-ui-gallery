export default function BrutalistButton() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-white">
      <h2 className="text-sm font-black text-black uppercase tracking-widest">Brutalist Buttons</h2>

      <div className="flex flex-wrap items-center gap-6">
        {/* Primary - Heavy black border with offset shadow */}
        <button className="px-8 py-3 text-sm font-black uppercase tracking-wider text-black bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 active:shadow-none active:translate-x-[6px] active:translate-y-[6px] focus:outline-none">
          Click Me
        </button>

        {/* Inverted */}
        <button className="px-8 py-3 text-sm font-black uppercase tracking-wider text-white bg-black border-4 border-black shadow-[6px_6px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 active:shadow-none active:translate-x-[6px] active:translate-y-[6px] focus:outline-none">
          Submit
        </button>

        {/* Outline only */}
        <button className="px-8 py-3 text-sm font-black uppercase tracking-wider text-black bg-transparent border-4 border-black transition-all duration-150 hover:bg-black hover:text-white focus:outline-none">
          Learn More
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        {/* Red accent */}
        <button className="px-8 py-3 text-sm font-black uppercase tracking-wider text-white bg-red-600 border-4 border-black shadow-[6px_6px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 focus:outline-none">
          Danger
        </button>

        {/* Yellow accent */}
        <button className="px-8 py-3 text-sm font-black uppercase tracking-wider text-black bg-yellow-400 border-4 border-black shadow-[6px_6px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 focus:outline-none">
          Warning
        </button>

        {/* Blue accent */}
        <button className="px-8 py-3 text-sm font-black uppercase tracking-wider text-white bg-blue-600 border-4 border-black shadow-[6px_6px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 focus:outline-none">
          Primary
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        {/* Double border */}
        <button className="px-8 py-3 text-sm font-black uppercase tracking-wider text-black bg-white border-4 border-black outline outline-4 outline-offset-4 outline-black transition-all duration-150 hover:bg-black hover:text-white focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-black">
          Double
        </button>

        {/* Striped background */}
        <button
          className="px-8 py-3 text-sm font-black uppercase tracking-wider text-black border-4 border-black shadow-[6px_6px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 focus:outline-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, #000 5px, #000 6px)',
            backgroundColor: '#fff'
          }}
        >
          Striped
        </button>

        {/* Dotted border */}
        <button className="px-8 py-3 text-sm font-black uppercase tracking-wider text-black bg-white border-4 border-dashed border-black transition-all duration-150 hover:bg-black hover:text-white hover:border-solid focus:outline-none">
          Dotted
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        {/* Icon button */}
        <button className="p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none">
          <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="square" strokeLinejoin="miter" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>

        {/* Arrow button */}
        <button className="px-6 py-3 text-sm font-black uppercase tracking-wider text-black bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] transition-all duration-150 hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 focus:outline-none inline-flex items-center gap-2">
          Next
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        {/* Loading state */}
        <button className="px-8 py-3 text-sm font-black uppercase tracking-wider text-gray-400 bg-white border-4 border-gray-400 cursor-wait inline-flex items-center gap-2">
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading
        </button>

        {/* Disabled */}
        <button className="px-8 py-3 text-sm font-black uppercase tracking-wider text-gray-400 bg-gray-100 border-4 border-gray-300 cursor-not-allowed" disabled>
          Disabled
        </button>
      </div>

      {/* Large CTA */}
      <button className="w-full max-w-md px-8 py-5 text-lg font-black uppercase tracking-widest text-white bg-black border-4 border-black shadow-[8px_8px_0px_0px_#ef4444] transition-all duration-150 hover:shadow-[4px_4px_0px_0px_#ef4444] hover:translate-x-1 hover:translate-y-1 active:shadow-none active:translate-x-2 active:translate-y-2 focus:outline-none">
        Take Action Now
      </button>
    </div>
  )
}
