export default function MonochromeErrorPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <div className="text-white/20 font-mono text-sm mb-2">ERROR</div>
              <h1 className="text-[8rem] font-black leading-none mb-4 text-white">
                404
              </h1>
              <div className="flex gap-2 mb-6">
                <div className="w-12 h-1 bg-white"></div>
                <div className="w-24 h-1 bg-white/60"></div>
                <div className="w-6 h-1 bg-white/30"></div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Page Not Found
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              The page you are looking for might have been removed,
              had its name changed, or is temporarily unavailable.
            </p>

            <div className="flex gap-4 mb-8">
              <button className="px-8 py-4 bg-white text-black font-bold hover:bg-white/90 transition-colors">
                HOME
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-all">
                BACK
              </button>
            </div>

            <div className="border-l-4 border-white/30 pl-4">
              <div className="font-mono text-sm text-white/50">
                <div>HTTP ERROR 404</div>
                <div>REQUEST_URI: /undefined</div>
                <div>TIMESTAMP: {new Date().toISOString()}</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex gap-2">
                  {[...Array(6)].map((_, j) => (
                    <div
                      key={j}
                      className="h-12 flex-1 bg-white transition-all"
                      style={{
                        opacity: Math.random() > 0.5 ? 1 : 0.1,
                      }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
