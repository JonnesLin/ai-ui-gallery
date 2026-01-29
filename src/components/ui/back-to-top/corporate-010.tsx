export default function CorporateBackToTop() {
  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-slate-800 mb-6">
          Corporate Back to Top
        </h1>
        <div className="rounded-lg p-6 bg-white shadow-sm border border-slate-200">
          <p className="text-slate-600 leading-relaxed mb-4">
            Corporate design emphasizes professionalism, trust, and clarity. Clean lines,
            conservative colors, and reliable interactions define this style.
          </p>
          {Array.from({ length: 6 }).map((_, i) => (
            <p key={i} className="text-slate-500 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>

      {/* Variant 1: Professional blue */}
      <button
        className="fixed bottom-6 right-6 w-12 h-12 rounded-lg bg-blue-600
                   flex items-center justify-center transition-all duration-200
                   hover:bg-blue-700 shadow-md hover:shadow-lg"
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

      {/* Variant 2: Outlined professional */}
      <button
        className="fixed bottom-6 right-24 w-12 h-12 rounded-lg bg-white
                   border-2 border-blue-600 flex items-center justify-center
                   transition-all duration-200 hover:bg-blue-50 shadow-sm"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 3: With label */}
      <button
        className="fixed bottom-24 right-6 px-4 py-2 rounded-md bg-slate-800
                   flex items-center gap-2 transition-all duration-200
                   hover:bg-slate-700 shadow-md"
        aria-label="Back to top"
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-sm text-white font-medium">Back to Top</span>
      </button>

      {/* Variant 4: Subtle gray */}
      <button
        className="fixed bottom-6 left-6 w-10 h-10 rounded bg-slate-100
                   border border-slate-300 flex items-center justify-center
                   transition-all duration-200 hover:bg-slate-200 hover:border-slate-400"
        aria-label="Back to top"
      >
        <svg
          className="w-4 h-4 text-slate-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 5: Enterprise badge */}
      <button
        className="fixed bottom-24 left-6 flex items-center gap-2 px-3 py-2 rounded-full
                   bg-white border border-slate-200 shadow-sm
                   transition-all duration-200 hover:shadow-md hover:border-blue-300"
        aria-label="Back to top"
      >
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
        <span className="text-sm text-slate-600 font-medium pr-1">Top</span>
      </button>
    </div>
  );
}
