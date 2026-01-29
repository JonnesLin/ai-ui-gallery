export default function NatureDivider() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-green-800 mb-6">Horizontal</h2>

        {/* Grass Line */}
        <div className="w-full h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>

        {/* Leaf Pattern */}
        <div className="w-full h-0.5 bg-green-500 relative">
          <div className="absolute inset-0 flex gap-8 justify-center">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-2 h-4 bg-green-600 rounded-full transform -rotate-45 -translate-y-1"></div>
            ))}
          </div>
        </div>

        {/* Earth Tones */}
        <div className="w-full h-1.5 bg-gradient-to-r from-green-700 via-green-500 to-green-700 rounded-full"></div>

        {/* Branch Style */}
        <div className="relative w-full h-2">
          <div className="absolute inset-0 h-0.5 bg-amber-800 top-1"></div>
          <div className="absolute left-1/4 w-8 h-0.5 bg-amber-700 top-0 transform rotate-45 origin-left"></div>
          <div className="absolute right-1/4 w-8 h-0.5 bg-amber-700 top-0 transform -rotate-45 origin-right"></div>
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-green-800 mb-6">With Text</h2>

        {/* Leaf Badge */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
          <div className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full shadow-md">
            <span className="text-sm text-white font-medium">Natural</span>
          </div>
          <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
        </div>

        {/* Organic Frame */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-green-400"></div>
          <div className="px-8 py-3 bg-green-50 border-2 border-green-500 rounded-2xl shadow-sm">
            <span className="text-sm text-green-700 font-medium">Eco-Friendly</span>
          </div>
          <div className="flex-1 h-px bg-green-400"></div>
        </div>

        {/* Wooden Style */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-amber-700 to-amber-700"></div>
          <div className="px-6 py-2 bg-gradient-to-br from-amber-800 to-amber-900 rounded-lg border-2 border-amber-600">
            <span className="text-sm text-amber-100 font-medium">Organic</span>
          </div>
          <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-amber-700 to-amber-700"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-green-800 mb-6">With Icon</h2>

        {/* Leaf Icon */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
          <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-md">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66 1.89-5C9.5 17 13.5 17 17 8zM3.82 21.34C5.9 16.17 8 10 17 8c0 0 1 0 1 0 0-5-5-5-6-5C8 3 7 6 3.82 21.34z"/>
            </svg>
          </div>
          <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
        </div>

        {/* Tree Icon */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-emerald-400"></div>
          <div className="p-3 bg-white border-2 border-green-600 rounded-full shadow-md">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L6 10h4v5H8l4 7 4-7h-2v-5h4z"/>
            </svg>
          </div>
          <div className="flex-1 h-px bg-emerald-400"></div>
        </div>

        {/* Flower Icon */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-pink-400 to-pink-400"></div>
          <div className="relative p-4 bg-pink-100 rounded-full border-2 border-pink-400">
            <div className="absolute -top-1 left-1/2 w-3 h-3 bg-pink-400 rounded-full transform -translate-x-1/2"></div>
            <div className="absolute -bottom-1 left-1/2 w-3 h-3 bg-pink-400 rounded-full transform -translate-x-1/2"></div>
            <div className="absolute top-1/2 -left-1 w-3 h-3 bg-pink-400 rounded-full transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 -right-1 w-3 h-3 bg-pink-400 rounded-full transform -translate-y-1/2"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
          <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-pink-400 to-pink-400"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-medium text-green-800 mb-6">Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32 bg-white rounded-2xl shadow-md border-2 border-green-300 p-6">
          <div className="text-sm text-green-700 font-medium">Forest</div>
          <div className="w-1 h-full bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></div>
          <div className="text-sm text-green-700 font-medium">Garden</div>
          <div className="w-1 h-full bg-gradient-to-b from-green-500 to-green-700 rounded-full"></div>
          <div className="text-sm text-green-700 font-medium">Meadow</div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-green-800 mb-6">Special</h2>

        {/* Grass Blades */}
        <div className="flex gap-1 justify-center items-end h-8">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-green-600 rounded-t-full"
              style={{ height: `${Math.random() * 24 + 8}px` }}
            ></div>
          ))}
        </div>

        {/* Vine Pattern */}
        <div className="w-full h-3">
          <svg viewBox="0 0 1200 24" className="w-full h-full">
            <path d="M0,12 Q30,8 60,12 T120,12 T180,12 T240,12 T300,12 T360,12 T420,12 T480,12 T540,12 T600,12 T660,12 T720,12 T780,12 T840,12 T900,12 T960,12 T1020,12 T1080,12 T1140,12 T1200,12"
                  fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
            {[...Array(12)].map((_, i) => (
              <circle key={i} cx={100 * i + 50} cy={12} r="3" fill="#22c55e"/>
            ))}
          </svg>
        </div>
      </section>
    </div>
  );
}