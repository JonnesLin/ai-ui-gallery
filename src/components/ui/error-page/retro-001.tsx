export default function RetroErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-300 via-yellow-200 to-orange-300 flex items-center justify-center px-4 font-serif">
      <div className="text-center max-w-2xl">
        <div className="mb-8 relative">
          <div className="text-[10rem] font-black leading-none mb-4 text-orange-600 [text-shadow:4px_4px_0px_rgba(234,88,12,0.3)]">
            404
          </div>
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-orange-600 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="bg-orange-100 border-8 border-orange-600 rounded-3xl p-8 mb-8 shadow-[8px_8px_0px_0px_rgba(234,88,12,1)]">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">
            Groovy! This Page Doesn't Exist
          </h2>
          <p className="text-xl text-orange-800 mb-6">
            Far out, man! Looks like this page took a trip to nowhere.
            Maybe it's stuck in the '70s or just vibing somewhere else.
          </p>

          <div className="bg-yellow-200 border-4 border-orange-600 rounded-2xl p-4 mb-6">
            <p className="font-mono text-orange-900 text-sm">
              🎵 "The page you're looking for has left the building" 🎵
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-10 py-4 bg-orange-600 text-white font-bold text-xl rounded-full border-4 border-orange-800 shadow-[4px_4px_0px_0px_rgba(154,52,18,1)] hover:translate-y-1 hover:shadow-none transition-all">
            Back to Home
          </button>
          <button className="px-10 py-4 bg-yellow-300 text-orange-900 font-bold text-xl rounded-full border-4 border-orange-800 shadow-[4px_4px_0px_0px_rgba(154,52,18,1)] hover:translate-y-1 hover:shadow-none transition-all">
            Rewind
          </button>
        </div>
      </div>
    </div>
  );
}
