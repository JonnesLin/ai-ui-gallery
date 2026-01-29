export default function PastelButton() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-rose-50">
      <h2 className="text-sm font-medium text-rose-400 uppercase tracking-widest">Pastel Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Soft pink */}
        <button className="px-8 py-3 text-sm font-medium text-rose-600 bg-rose-200 rounded-full transition-all duration-300 hover:bg-rose-300 hover:shadow-lg hover:shadow-rose-200/50 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2">
          Pink Dream
        </button>

        {/* Soft blue */}
        <button className="px-8 py-3 text-sm font-medium text-sky-600 bg-sky-200 rounded-full transition-all duration-300 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-200/50 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2">
          Sky Blue
        </button>

        {/* Soft mint */}
        <button className="px-8 py-3 text-sm font-medium text-emerald-600 bg-emerald-200 rounded-full transition-all duration-300 hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2">
          Fresh Mint
        </button>

        {/* Soft lavender */}
        <button className="px-8 py-3 text-sm font-medium text-violet-600 bg-violet-200 rounded-full transition-all duration-300 hover:bg-violet-300 hover:shadow-lg hover:shadow-violet-200/50 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2">
          Lavender
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Soft peach */}
        <button className="px-8 py-3 text-sm font-medium text-orange-600 bg-orange-200 rounded-full transition-all duration-300 hover:bg-orange-300 hover:shadow-lg hover:shadow-orange-200/50 focus:outline-none">
          Peach
        </button>

        {/* Soft lemon */}
        <button className="px-8 py-3 text-sm font-medium text-amber-600 bg-amber-200 rounded-full transition-all duration-300 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-200/50 focus:outline-none">
          Lemon
        </button>

        {/* Soft coral */}
        <button className="px-8 py-3 text-sm font-medium text-red-500 bg-red-200 rounded-full transition-all duration-300 hover:bg-red-300 hover:shadow-lg hover:shadow-red-200/50 focus:outline-none">
          Coral
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Outline pastel */}
        <button className="px-8 py-3 text-sm font-medium text-rose-500 bg-transparent border-2 border-rose-300 rounded-full transition-all duration-300 hover:bg-rose-100 hover:border-rose-400 focus:outline-none">
          Outline Pink
        </button>

        <button className="px-8 py-3 text-sm font-medium text-sky-500 bg-transparent border-2 border-sky-300 rounded-full transition-all duration-300 hover:bg-sky-100 hover:border-sky-400 focus:outline-none">
          Outline Blue
        </button>

        <button className="px-8 py-3 text-sm font-medium text-violet-500 bg-transparent border-2 border-violet-300 rounded-full transition-all duration-300 hover:bg-violet-100 hover:border-violet-400 focus:outline-none">
          Outline Purple
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Gradient pastels */}
        <button
          className="px-8 py-3 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90 hover:shadow-lg focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #fda4af 0%, #c4b5fd 100%)' }}
        >
          Pink to Purple
        </button>

        <button
          className="px-8 py-3 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90 hover:shadow-lg focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #93c5fd 0%, #a5f3fc 100%)' }}
        >
          Blue to Cyan
        </button>

        <button
          className="px-8 py-3 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90 hover:shadow-lg focus:outline-none"
          style={{ background: 'linear-gradient(135deg, #86efac 0%, #fde68a 100%)' }}
        >
          Mint to Lemon
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Icon buttons */}
        <button className="p-4 text-rose-500 bg-rose-200 rounded-full transition-all duration-300 hover:bg-rose-300 hover:shadow-lg hover:shadow-rose-200/50 focus:outline-none">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        <button className="p-4 text-sky-500 bg-sky-200 rounded-full transition-all duration-300 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-200/50 focus:outline-none">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>

        {/* With text and icon */}
        <button className="px-6 py-3 text-sm font-medium text-violet-600 bg-violet-200 rounded-full transition-all duration-300 hover:bg-violet-300 focus:outline-none inline-flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Item
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Loading */}
        <button className="px-8 py-3 text-sm font-medium text-rose-400 bg-rose-100 rounded-full cursor-wait inline-flex items-center gap-2">
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading
        </button>

        {/* Disabled */}
        <button className="px-8 py-3 text-sm font-medium text-gray-400 bg-gray-200 rounded-full cursor-not-allowed opacity-60" disabled>
          Disabled
        </button>
      </div>

      {/* Large CTA */}
      <button
        className="w-full max-w-md px-8 py-5 text-base font-semibold text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2"
        style={{ background: 'linear-gradient(135deg, #fda4af 0%, #f9a8d4 50%, #c4b5fd 100%)' }}
      >
        Get Started Today
      </button>
    </div>
  )
}
