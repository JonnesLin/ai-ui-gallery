export default function FlatTooltip() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-xl font-bold text-white uppercase tracking-wide">Flat Tooltips</h2>

      {/* Top */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-semibold text-white bg-blue-500 rounded transition-all duration-300 hover:bg-blue-600">
          Hover Top
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-5 py-3 text-xs font-medium text-white bg-gray-800 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          Clean and simple
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-800"></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-semibold text-white bg-green-500 rounded transition-all duration-300 hover:bg-green-600">
          Hover Bottom
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-5 py-3 text-xs font-medium text-white bg-gray-800 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          Flat design style
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-gray-800"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-32">
        <div className="group relative inline-block">
          <button className="px-8 py-3 text-sm font-semibold text-white bg-purple-500 rounded transition-all duration-300 hover:bg-purple-600">
            Hover Left
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-5 py-3 text-xs font-medium text-white bg-gray-800 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            No shadows
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-8 py-3 text-sm font-semibold text-white bg-orange-500 rounded transition-all duration-300 hover:bg-orange-600">
            Hover Right
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-5 py-3 text-xs font-medium text-white bg-gray-800 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            Pure colors
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-gray-800"></div>
          </div>
        </div>
      </div>

      {/* Color variants */}
      <div className="flex gap-6">
        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-semibold text-white bg-red-500 rounded transition-all duration-300 hover:bg-red-600">
            Red
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 text-xs font-medium text-white bg-red-600 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            Red tooltip
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-red-600"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-semibold text-white bg-yellow-500 rounded transition-all duration-300 hover:bg-yellow-600">
            Yellow
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 text-xs font-medium text-white bg-yellow-600 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            Yellow tooltip
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-yellow-600"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-semibold text-white bg-teal-500 rounded transition-all duration-300 hover:bg-teal-600">
            Teal
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 text-xs font-medium text-white bg-teal-600 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            Teal tooltip
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-teal-600"></div>
          </div>
        </div>
      </div>

      {/* Light background variant */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-semibold text-gray-700 bg-white rounded transition-all duration-300 hover:bg-gray-50">
          Light Style
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-5 py-3 text-xs font-medium text-gray-700 bg-white rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          Light background
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white"></div>
        </div>
      </div>

      {/* Multiline flat */}
      <div className="group relative inline-block">
        <span className="text-sm font-semibold text-white border-b-2 border-white cursor-help">
          What is flat design?
        </span>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-6 py-4 text-xs font-medium text-white bg-gray-800 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64">
          <div className="space-y-2">
            <p>Minimalist visual elements</p>
            <p>No gradients or shadows</p>
            <p>Bold, vibrant colors</p>
            <p>Clean typography</p>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-800"></div>
        </div>
      </div>

      {/* With action button */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-semibold text-white bg-indigo-500 rounded transition-all duration-300 hover:bg-indigo-600">
          Take Action
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-6 py-5 bg-white rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-56">
          <p className="text-xs font-medium text-gray-700 mb-3">Ready to proceed?</p>
          <button className="w-full px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded transition-all duration-200 hover:bg-indigo-600">
            Continue
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white"></div>
        </div>
      </div>

      {/* Icon tooltip */}
      <div className="group relative inline-block">
        <div className="w-12 h-12 flex items-center justify-center text-lg font-bold text-white bg-pink-500 rounded-full cursor-pointer transition-all duration-300 hover:bg-pink-600">
          i
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-5 py-3 text-xs font-medium text-white bg-gray-800 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          Information icon
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-800"></div>
        </div>
      </div>

      {/* Rounded pill style */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-semibold text-white bg-rose-500 rounded-full transition-all duration-300 hover:bg-rose-600">
          Pill Button
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-5 py-3 text-xs font-medium text-white bg-gray-800 rounded-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          Rounded pill tooltip
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-gray-800"></div>
        </div>
      </div>

      {/* Large rounded corners */}
      <div className="group relative inline-block">
        <button className="px-8 py-3 text-sm font-semibold text-white bg-cyan-500 rounded-2xl transition-all duration-300 hover:bg-cyan-600">
          Rounded Style
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-5 py-3 text-xs font-medium text-white bg-gray-800 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
          Large rounded corners
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-800"></div>
        </div>
      </div>
    </div>
  )
}
