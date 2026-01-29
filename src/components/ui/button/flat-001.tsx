export default function FlatButton() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-gray-50 min-h-screen">
      <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Flat Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Primary - Solid blue */}
        <button className="px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Primary
        </button>

        {/* Secondary - Solid gray */}
        <button className="px-6 py-3 text-sm font-medium text-white bg-gray-600 rounded transition-colors duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          Secondary
        </button>

        {/* Outline - Transparent with border */}
        <button className="px-6 py-3 text-sm font-medium text-blue-500 bg-transparent border border-blue-500 rounded transition-colors duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Outline
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Small variant */}
        <button className="px-4 py-2 text-xs font-medium text-white bg-green-500 rounded transition-colors duration-200 hover:bg-green-600 focus:outline-none">
          Small
        </button>

        {/* Medium variant */}
        <button className="px-6 py-3 text-sm font-medium text-white bg-green-500 rounded transition-colors duration-200 hover:bg-green-600 focus:outline-none">
          Medium
        </button>

        {/* Large variant */}
        <button className="px-8 py-4 text-base font-medium text-white bg-green-500 rounded transition-colors duration-200 hover:bg-green-600 focus:outline-none">
          Large
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* With icon - Download */}
        <button className="group px-6 py-3 text-sm font-medium text-white bg-purple-500 rounded transition-colors duration-200 hover:bg-purple-600 focus:outline-none inline-flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>

        {/* Loading state */}
        <button className="px-6 py-3 text-sm font-medium text-gray-400 bg-gray-200 rounded cursor-wait inline-flex items-center gap-2">
          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading
        </button>

        {/* Disabled */}
        <button className="px-6 py-3 text-sm font-medium text-gray-400 bg-gray-200 rounded cursor-not-allowed" disabled>
          Disabled
        </button>
      </div>

      {/* Color variants */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="px-6 py-3 text-sm font-medium text-white bg-red-500 rounded transition-colors duration-200 hover:bg-red-600 focus:outline-none">
          Danger
        </button>

        <button className="px-6 py-3 text-sm font-medium text-white bg-yellow-500 rounded transition-colors duration-200 hover:bg-yellow-600 focus:outline-none">
          Warning
        </button>

        <button className="px-6 py-3 text-sm font-medium text-white bg-green-500 rounded transition-colors duration-200 hover:bg-green-600 focus:outline-none">
          Success
        </button>

        <button className="px-6 py-3 text-sm font-medium text-white bg-cyan-500 rounded transition-colors duration-200 hover:bg-cyan-600 focus:outline-none">
          Info
        </button>
      </div>

      {/* Ghost variants */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="px-6 py-3 text-sm font-medium text-blue-600 bg-transparent rounded transition-colors duration-200 hover:bg-blue-50 focus:outline-none">
          Ghost Primary
        </button>

        <button className="px-6 py-3 text-sm font-medium text-gray-600 bg-transparent rounded transition-colors duration-200 hover:bg-gray-100 focus:outline-none">
          Ghost Secondary
        </button>

        <button className="px-6 py-3 text-sm font-medium text-red-600 bg-transparent rounded transition-colors duration-200 hover:bg-red-50 focus:outline-none">
          Ghost Danger
        </button>
      </div>

      {/* Link style */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="px-2 py-1 text-sm font-medium text-blue-600 bg-transparent transition-colors duration-200 hover:text-blue-700 hover:underline focus:outline-none">
          Link Button
        </button>

        <button className="px-2 py-1 text-sm font-medium text-gray-600 bg-transparent transition-colors duration-200 hover:text-gray-700 hover:underline focus:outline-none">
          Text Link
        </button>
      </div>

      {/* Full width variant */}
      <button className="w-full max-w-md px-6 py-4 text-sm font-medium uppercase tracking-wide text-white bg-indigo-500 rounded transition-colors duration-200 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Full Width Button
      </button>

      {/* Rounded variants */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="px-6 py-3 text-sm font-medium text-white bg-pink-500 rounded-full transition-colors duration-200 hover:bg-pink-600 focus:outline-none">
          Pill Shape
        </button>

        <button className="px-6 py-3 text-sm font-medium text-white bg-orange-500 rounded-xl transition-colors duration-200 hover:bg-orange-600 focus:outline-none">
          Rounded Large
        </button>

        <button className="px-6 py-3 text-sm font-medium text-white bg-teal-500 transition-colors duration-200 hover:bg-teal-600 focus:outline-none">
          No Radius
        </button>
      </div>

      {/* Icon only buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="p-3 text-white bg-blue-500 rounded transition-colors duration-200 hover:bg-blue-600 focus:outline-none" aria-label="Settings">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        <button className="p-3 text-white bg-red-500 rounded-full transition-colors duration-200 hover:bg-red-600 focus:outline-none" aria-label="Delete">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>

        <button className="p-2 text-gray-600 bg-transparent rounded transition-colors duration-200 hover:bg-gray-100 focus:outline-none" aria-label="More">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
