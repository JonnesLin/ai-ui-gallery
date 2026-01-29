export default function NatureErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-green-100 to-green-200 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8 relative">
          <svg className="w-64 h-64 mx-auto" viewBox="0 0 200 200">
            <circle cx="100" cy="60" r="40" fill="#fbbf24" opacity="0.8" />

            <ellipse cx="100" cy="150" rx="80" ry="20" fill="#86efac" opacity="0.6" />

            <path d="M 100 80 Q 90 100 90 120 L 90 140 Q 90 145 95 145 L 105 145 Q 110 145 110 140 L 110 120 Q 110 100 100 80" fill="#78350f" />

            <circle cx="100" cy="70" r="30" fill="#22c55e" opacity="0.8" />
            <circle cx="85" cy="65" r="20" fill="#16a34a" opacity="0.8" />
            <circle cx="115" cy="65" r="20" fill="#16a34a" opacity="0.8" />
            <circle cx="100" cy="55" r="18" fill="#15803d" opacity="0.8" />

            <text x="100" y="105" fontSize="20" fontWeight="bold" fill="#fff" textAnchor="middle">404</text>
          </svg>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl border border-green-200">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Lost in the Forest
          </h2>
          <p className="text-green-800 text-lg mb-6">
            It seems you've wandered off the beaten path.
            This page is like a rare flower that doesn't grow here.
          </p>

          <div className="flex gap-4 justify-center text-4xl mb-6">
            <span className="animate-[bounce_2s_ease-in-out_infinite]">🌳</span>
            <span className="animate-[bounce_2s_ease-in-out_infinite_0.2s]">🌿</span>
            <span className="animate-[bounce_2s_ease-in-out_infinite_0.4s]">🍃</span>
            <span className="animate-[bounce_2s_ease-in-out_infinite_0.6s]">🌺</span>
          </div>

          <div className="bg-green-100 rounded-2xl p-4 mb-6 border border-green-300">
            <p className="text-green-700 font-medium">
              "In every walk with nature, one receives far more than he seeks." - John Muir
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Return to Nature 🌲
          </button>
          <button className="px-8 py-4 bg-white text-green-700 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all border-2 border-green-300">
            Find the Path 🧭
          </button>
        </div>
      </div>
    </div>
  );
}
