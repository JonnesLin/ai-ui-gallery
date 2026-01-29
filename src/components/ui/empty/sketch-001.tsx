export default function SketchEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center max-w-md px-8 text-center">
        <div className="relative mb-8">
          <svg
            className="w-40 h-40"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
          >
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="#333"
              strokeWidth="2"
              strokeDasharray="2,3"
              className="text-gray-800"
            />
            <path
              d="M100 60 L100 140 M70 100 L130 100"
              stroke="#333"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M80 80 Q70 70 75 60"
              stroke="#333"
              strokeWidth="1.5"
              strokeDasharray="3,2"
              fill="none"
            />
            <path
              d="M120 80 Q130 70 125 60"
              stroke="#333"
              strokeWidth="1.5"
              strokeDasharray="3,2"
              fill="none"
            />
          </svg>

          <svg className="absolute -top-4 -right-4 w-12 h-12" viewBox="0 0 50 50">
            <path
              d="M10 25 L15 20 L20 25 L15 30 Z"
              fill="none"
              stroke="#333"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
          Blank Canvas
          <svg className="absolute -bottom-2 left-0 w-full h-1" viewBox="0 0 200 10">
            <path
              d="M0 5 Q50 8 100 5 T200 5"
              fill="none"
              stroke="#333"
              strokeWidth="2"
            />
          </svg>
        </h2>

        <p className="text-gray-600 text-base mb-8 leading-relaxed border-l-2 border-dashed border-gray-400 pl-4">
          Nothing sketched yet. Time to draw something amazing and bring your ideas to life!
        </p>

        <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-sm hover:bg-gray-900 hover:text-white transition-colors relative">
          <span>Start Drawing</span>
          <svg className="absolute -bottom-1 -right-1 w-6 h-6" viewBox="0 0 20 20">
            <path d="M0 0 L6 6 M6 0 L0 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </button>
      </div>
    </div>
  );
}
