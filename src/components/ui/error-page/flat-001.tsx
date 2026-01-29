export default function FlatErrorPage() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-12">
          <svg className="w-80 h-80 mx-auto" viewBox="0 0 300 300">
            <rect x="50" y="100" width="200" height="150" fill="#3b82f6" rx="10" />
            <rect x="60" y="110" width="180" height="100" fill="#60a5fa" rx="5" />

            <circle cx="110" cy="150" r="8" fill="#1e3a8a" />
            <circle cx="190" cy="150" r="8" fill="#1e3a8a" />

            <path d="M 130 180 Q 150 190 170 180" stroke="#1e3a8a" strokeWidth="4" fill="none" strokeLinecap="round" />

            <rect x="100" y="60" width="100" height="40" fill="#3b82f6" rx="20" />
            <text x="150" y="85" fontSize="20" fontWeight="bold" fill="#fff" textAnchor="middle">404</text>

            <rect x="80" y="250" width="140" height="30" fill="#2563eb" />
          </svg>
        </div>

        <div className="bg-white rounded-2xl p-10 mb-8 shadow-lg">
          <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            We couldn't find the page you were looking for.
            It might have been moved or deleted.
          </p>

          <div className="flex gap-4 justify-center mb-6">
            <div className="w-16 h-16 bg-red-500 rounded-lg"></div>
            <div className="w-16 h-16 bg-yellow-400 rounded-lg"></div>
            <div className="w-16 h-16 bg-green-500 rounded-lg"></div>
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-10 py-4 bg-white text-blue-500 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-md">
            Go to Homepage
          </button>
          <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
