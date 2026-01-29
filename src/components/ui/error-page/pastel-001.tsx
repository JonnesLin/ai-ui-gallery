export default function PastelErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8 relative">
          <svg className="w-64 h-64 mx-auto" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="#fae8ff" opacity="0.5" />
            <circle cx="100" cy="100" r="60" fill="#e9d5ff" opacity="0.5" />
            <circle cx="100" cy="100" r="40" fill="#ddd6fe" opacity="0.5" />
            <text x="100" y="120" fontSize="48" fontWeight="bold" fill="#a78bfa" textAnchor="middle">
              404
            </text>
          </svg>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Oopsie Daisy!
          </h2>
          <p className="text-purple-700 text-lg mb-6">
            We couldn't find the page you were looking for.
            It might be taking a little nap in the cloud.
          </p>

          <div className="flex gap-3 justify-center mb-6">
            <div className="w-3 h-3 bg-pink-300 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-300 to-purple-300 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Go Home
          </button>
          <button className="px-8 py-3 bg-white/80 text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
