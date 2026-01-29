export default function LuxuryErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-12">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 blur-2xl opacity-30"></div>
            <h1 className="relative text-[10rem] font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 leading-none">
              404
            </h1>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent w-64 mx-auto mt-8"></div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-serif text-yellow-100 mb-6 tracking-wide">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-md mx-auto leading-relaxed">
            We regret to inform you that the page you are seeking does not exist
            within our distinguished collection.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border border-yellow-700/30 rounded-lg p-8 mb-12 backdrop-blur-sm">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-yellow-400 font-light text-sm mb-1">Error</div>
              <div className="text-white font-serif text-xl">404</div>
            </div>
            <div>
              <div className="text-yellow-400 font-light text-sm mb-1">Status</div>
              <div className="text-white font-serif text-xl">Not Found</div>
            </div>
            <div>
              <div className="text-yellow-400 font-light text-sm mb-1">Code</div>
              <div className="text-white font-mono text-xl">ERR_404</div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 justify-center">
          <button className="px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold rounded tracking-wide hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            RETURN HOME
          </button>
          <button className="px-10 py-4 border-2 border-yellow-700/50 text-yellow-100 font-semibold rounded tracking-wide hover:border-yellow-600 hover:bg-yellow-900/20 transition-all">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}
