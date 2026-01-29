export default function MaterialTooltip() {
  return (
    <div className="min-h-screen bg-gray-50 p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-base font-medium text-gray-800 uppercase tracking-wide">Material Design Tooltips</h2>

      {/* Top */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:shadow-sm">
          Hover Top
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Material elevation
        </div>
      </div>

      {/* Bottom */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-white bg-purple-600 rounded shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg active:shadow-sm">
          Hover Bottom
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Subtle shadows
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-32">
        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-medium text-white bg-green-600 rounded shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg active:shadow-sm">
            Hover Left
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 whitespace-nowrap">
            Left aligned
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-medium text-white bg-orange-600 rounded shadow-md transition-all duration-300 hover:bg-orange-700 hover:shadow-lg active:shadow-sm">
            Hover Right
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 whitespace-nowrap">
            Right aligned
          </div>
        </div>
      </div>

      {/* Raised button with ripple effect simulation */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-blue-600 bg-white rounded shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 active:shadow-sm">
          Outlined Button
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Material outlined style
        </div>
      </div>

      {/* Text button */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-blue-600 bg-transparent rounded transition-all duration-300 hover:bg-blue-50 active:bg-blue-100">
          Text Button
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Minimal material style
        </div>
      </div>

      {/* FAB (Floating Action Button) */}
      <div className="group relative inline-block">
        <button className="w-14 h-14 flex items-center justify-center text-xl text-white bg-red-600 rounded-full shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-xl active:shadow-md">
          +
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Floating Action Button
        </div>
      </div>

      {/* Icon button */}
      <div className="group relative inline-block">
        <button className="w-12 h-12 flex items-center justify-center text-gray-600 bg-transparent rounded-full transition-all duration-300 hover:bg-gray-200 active:bg-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Add item
        </div>
      </div>

      {/* Multiline tooltip */}
      <div className="group relative inline-block">
        <span className="text-sm font-medium text-gray-700 border-b border-dashed border-gray-400 cursor-help">
          More information
        </span>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-3 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 w-64">
          <div className="space-y-1">
            <p>Material Design principles</p>
            <p>Elevation and depth</p>
            <p>Responsive interactions</p>
          </div>
        </div>
      </div>

      {/* Card with tooltip */}
      <div className="group relative inline-block">
        <div className="px-6 py-4 bg-white rounded-lg shadow-md border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg">
          <p className="text-sm font-medium text-gray-700">Hover this card</p>
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Material card component
        </div>
      </div>

      {/* Chip with tooltip */}
      <div className="group relative inline-block">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-300">
          <span className="text-sm font-medium text-gray-700">Material Chip</span>
          <button className="w-5 h-5 flex items-center justify-center text-gray-500 rounded-full hover:bg-gray-400 hover:text-gray-700">
            ×
          </button>
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Chip component
        </div>
      </div>

      {/* Interactive tooltip with action */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg active:shadow-sm">
          Interactive
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-4 bg-white rounded shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56">
          <p className="text-xs font-medium text-gray-700 mb-3">Perform this action?</p>
          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 text-xs font-medium text-gray-600 bg-transparent rounded transition-all duration-200 hover:bg-gray-100">
              Cancel
            </button>
            <button className="flex-1 px-3 py-2 text-xs font-medium text-white bg-indigo-600 rounded shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow active:shadow-none">
              Confirm
            </button>
          </div>
        </div>
      </div>

      {/* Toggle switch with tooltip */}
      <div className="group relative inline-block">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300">
            <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-transform duration-300"></div>
          </div>
        </label>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Toggle switch
        </div>
      </div>

      {/* List item with tooltip */}
      <div className="group relative inline-block">
        <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:shadow">
          <div className="w-10 h-10 flex items-center justify-center text-white bg-teal-600 rounded-full">
            T
          </div>
          <span className="text-sm font-medium text-gray-700">List Item</span>
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Material list item
        </div>
      </div>
    </div>
  )
}
