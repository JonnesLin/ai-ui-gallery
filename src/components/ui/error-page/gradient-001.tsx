export default function GradientErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 blur-3xl opacity-50 animate-pulse"></div>
          <h1 className="relative text-[10rem] font-black text-white leading-none">
            404
          </h1>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Oops! Page Not Found
          </h2>
          <p className="text-white/90 text-lg">
            Looks like you've ventured into uncharted territory.
            The page you're seeking doesn't exist in our universe.
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all">
            Take Me Home
          </button>
          <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-all border border-white/30">
            Previous Page
          </button>
        </div>
      </div>
    </div>
  );
}
