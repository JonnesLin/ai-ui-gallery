export default function MonochromeBackToTop() {
  return (
    <div className="min-h-screen bg-neutral-100 relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-medium text-neutral-900 mb-6">
          Monochrome Back to Top
        </h1>
        <div className="rounded-lg p-6 bg-white border border-neutral-200">
          <p className="text-neutral-700 leading-relaxed mb-4">
            Monochrome design uses a single color family, typically black, white, and grays.
            This creates timeless elegance through contrast and simplicity.
          </p>
          {Array.from({ length: 6 }).map((_, i) => (
            <p key={i} className="text-neutral-500 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>

      {/* Variant 1: Solid black circle */}
      <button
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-neutral-900
                   flex items-center justify-center transition-all duration-200
                   hover:bg-neutral-700 shadow-lg"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 2: White with black border */}
      <button
        className="fixed bottom-6 right-24 w-12 h-12 rounded-full bg-white
                   border-2 border-neutral-900 flex items-center justify-center
                   transition-all duration-200 hover:bg-neutral-900 hover:text-white
                   group"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 3: Gray gradient */}
      <button
        className="fixed bottom-24 right-6 w-12 h-12 rounded-lg
                   bg-gradient-to-br from-neutral-300 to-neutral-500
                   flex items-center justify-center transition-all duration-200
                   hover:from-neutral-400 hover:to-neutral-600 shadow-md"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 4: Minimal line */}
      <button
        className="fixed bottom-6 left-6 w-10 h-10 bg-transparent
                   border border-neutral-400 flex items-center justify-center
                   transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-50"
        aria-label="Back to top"
      >
        <svg
          className="w-4 h-4 text-neutral-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 5: Half black half white */}
      <button
        className="fixed bottom-24 left-6 w-12 h-12 rounded-full overflow-hidden
                   flex items-center justify-center transition-all duration-200
                   hover:scale-105 shadow-lg border border-neutral-300"
        aria-label="Back to top"
      >
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-neutral-900" />
        <svg
          className="w-5 h-5 relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
            className="stroke-white"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
            className="stroke-neutral-900"
          />
        </svg>
      </button>
    </div>
  );
}
