export default function PlayfulErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="relative text-center max-w-2xl">
        <div className="mb-8 animate-[bounce_2s_ease-in-out_infinite]">
          <svg className="w-48 h-48 mx-auto" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="#fff" opacity="0.9" />
            <circle cx="70" cy="80" r="8" fill="#000" />
            <circle cx="130" cy="80" r="8" fill="#000" />
            <path d="M 60 120 Q 100 140 140 120" stroke="#000" strokeWidth="4" fill="none" strokeLinecap="round" />
            <text x="100" y="70" fontSize="24" fontWeight="bold" fill="#ff6b6b" textAnchor="middle">404</text>
          </svg>
        </div>

        <div className="bg-white rounded-3xl p-8 mb-8 shadow-2xl transform rotate-1">
          <h1 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Whoopsie-Doodle!
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            This Page Went on an Adventure!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Our playful page decided to hide somewhere.
            Maybe it's playing hide and seek? Let's get you back on track!
          </p>

          <div className="flex gap-2 justify-center mb-6">
            {['🎮', '🎨', '🎭', '🎪', '🎡'].map((emoji, i) => (
              <span key={i} className="text-3xl animate-[bounce_1s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.1}s` }}>
                {emoji}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-10 py-4 bg-white text-purple-600 font-bold text-lg rounded-full shadow-lg hover:scale-110 hover:rotate-3 transition-all transform">
            Take Me Home! 🏠
          </button>
          <button className="px-10 py-4 bg-purple-500 text-white font-bold text-lg rounded-full shadow-lg hover:scale-110 hover:-rotate-3 transition-all transform">
            Go Back! ⬅️
          </button>
        </div>
      </div>
    </div>
  );
}
