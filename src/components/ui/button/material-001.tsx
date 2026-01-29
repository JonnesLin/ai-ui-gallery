export default function MaterialButton() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-white min-h-screen">
      <h2 className="text-sm font-medium text-gray-700 uppercase tracking-wide">Material Design Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Primary - Contained button */}
        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          Contained
        </button>

        {/* Secondary - Outlined button */}
        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-blue-600 bg-transparent border border-blue-600 rounded transition-all duration-200 hover:bg-blue-50 active:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Outlined
        </button>

        {/* Text button */}
        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-blue-600 bg-transparent rounded transition-all duration-200 hover:bg-blue-50 active:bg-blue-100 focus:outline-none">
          Text
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Small variant */}
        <button className="relative overflow-hidden px-4 py-2 text-xs font-medium text-white bg-purple-600 rounded shadow-md transition-all duration-200 hover:bg-purple-700 hover:shadow-lg focus:outline-none before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          Small
        </button>

        {/* Medium variant */}
        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-white bg-purple-600 rounded shadow-md transition-all duration-200 hover:bg-purple-700 hover:shadow-lg focus:outline-none before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          Medium
        </button>

        {/* Large variant */}
        <button className="relative overflow-hidden px-8 py-4 text-base font-medium text-white bg-purple-600 rounded shadow-md transition-all duration-200 hover:bg-purple-700 hover:shadow-lg focus:outline-none before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          Large
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* With icon - Add */}
        <button className="group relative overflow-hidden px-6 py-3 text-sm font-medium text-white bg-green-600 rounded shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg focus:outline-none inline-flex items-center gap-2 before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Item
        </button>

        {/* Loading state */}
        <button className="px-6 py-3 text-sm font-medium text-gray-600 bg-gray-200 rounded shadow cursor-wait inline-flex items-center gap-2">
          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading
        </button>

        {/* Disabled */}
        <button className="px-6 py-3 text-sm font-medium text-gray-400 bg-gray-200 rounded shadow cursor-not-allowed" disabled>
          Disabled
        </button>
      </div>

      {/* Elevated variants with different elevations */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded shadow-sm transition-all duration-200 hover:shadow-md focus:outline-none before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          Elevation 1
        </button>

        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded shadow-md transition-all duration-200 hover:shadow-lg focus:outline-none before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          Elevation 2
        </button>

        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          Elevation 3
        </button>
      </div>

      {/* Color variants */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-white bg-red-600 rounded shadow-md transition-all duration-200 hover:bg-red-700 hover:shadow-lg focus:outline-none before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          Error
        </button>

        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-white bg-orange-600 rounded shadow-md transition-all duration-200 hover:bg-orange-700 hover:shadow-lg focus:outline-none before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          Warning
        </button>

        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-white bg-green-600 rounded shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg focus:outline-none before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          Success
        </button>

        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-white bg-cyan-600 rounded shadow-md transition-all duration-200 hover:bg-cyan-700 hover:shadow-lg focus:outline-none before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          Info
        </button>
      </div>

      {/* Tonal variants (new in Material You) */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-blue-700 bg-blue-100 rounded transition-all duration-200 hover:bg-blue-200 active:bg-blue-300 focus:outline-none before:absolute before:inset-0 before:bg-blue-700 before:opacity-0 hover:before:opacity-5 before:transition-opacity">
          Tonal Primary
        </button>

        <button className="relative overflow-hidden px-6 py-3 text-sm font-medium text-purple-700 bg-purple-100 rounded transition-all duration-200 hover:bg-purple-200 active:bg-purple-300 focus:outline-none before:absolute before:inset-0 before:bg-purple-700 before:opacity-0 hover:before:opacity-5 before:transition-opacity">
          Tonal Secondary
        </button>
      </div>

      {/* Floating Action Button (FAB) */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="relative overflow-hidden p-4 text-white bg-pink-600 rounded-full shadow-lg transition-all duration-200 hover:bg-pink-700 hover:shadow-xl active:shadow-md focus:outline-none before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity" aria-label="Add">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>

        <button className="relative overflow-hidden px-6 py-4 text-sm font-medium text-white bg-pink-600 rounded-full shadow-lg transition-all duration-200 hover:bg-pink-700 hover:shadow-xl active:shadow-md focus:outline-none inline-flex items-center gap-2 before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Extended FAB
        </button>

        <button className="relative overflow-hidden p-3 text-white bg-pink-600 rounded-full shadow-md transition-all duration-200 hover:bg-pink-700 hover:shadow-lg active:shadow-sm focus:outline-none before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity" aria-label="Add small">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Full width variant */}
      <button className="relative overflow-hidden w-full max-w-md px-6 py-4 text-sm font-medium uppercase tracking-wider text-white bg-teal-600 rounded shadow-md transition-all duration-200 hover:bg-teal-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity">
        Full Width Contained
      </button>

      {/* Icon buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="p-2 text-gray-700 bg-transparent rounded-full transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 focus:outline-none" aria-label="Favorite">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        <button className="p-2 text-gray-700 bg-transparent rounded-full transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 focus:outline-none" aria-label="Share">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>

        <button className="p-2 text-white bg-blue-600 rounded-full shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:shadow-sm focus:outline-none" aria-label="Send">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  )
}
