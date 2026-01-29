export default function PlayfulDivider() {
  return (
    <div className="w-full min-h-screen bg-yellow-50 p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-purple-600 mb-6">Horizontal Fun!</h2>

        {/* Wavy Line */}
        <div className="w-full h-3">
          <svg viewBox="0 0 1200 24" className="w-full h-full">
            <path d="M0,12 Q30,4 60,12 T120,12 T180,12 T240,12 T300,12 T360,12 T420,12 T480,12 T540,12 T600,12 T660,12 T720,12 T780,12 T840,12 T900,12 T960,12 T1020,12 T1080,12 T1140,12 T1200,12"
                  fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Rainbow Dots */}
        <div className="flex gap-2 justify-center">
          {['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400', 'bg-pink-400'].map((color, i) => (
            <div key={i} className={`w-4 h-4 ${color} rounded-full`}></div>
          ))}
        </div>

        {/* Zigzag */}
        <div className="w-full h-2 bg-pink-400" style={{
          clipPath: 'polygon(0 50%, 2.5% 0, 5% 50%, 7.5% 100%, 10% 50%, 12.5% 0, 15% 50%, 17.5% 100%, 20% 50%, 22.5% 0, 25% 50%, 27.5% 100%, 30% 50%, 32.5% 0, 35% 50%, 37.5% 100%, 40% 50%, 42.5% 0, 45% 50%, 47.5% 100%, 50% 50%, 52.5% 0, 55% 50%, 57.5% 100%, 60% 50%, 62.5% 0, 65% 50%, 67.5% 100%, 70% 50%, 72.5% 0, 75% 50%, 77.5% 100%, 80% 50%, 82.5% 0, 85% 50%, 87.5% 100%, 90% 50%, 92.5% 0, 95% 50%, 97.5% 100%, 100% 50%)'
        }}></div>

        {/* Bouncing Circles */}
        <div className="flex gap-1 justify-center items-end">
          {[4, 8, 12, 8, 4, 8, 12, 16, 12, 8, 4, 8, 12, 8, 4].map((height, i) => (
            <div key={i} className={`w-3 bg-blue-400 rounded-full`} style={{ height: `${height}px` }}></div>
          ))}
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-purple-600 mb-6">With Text</h2>

        {/* Bubble Text */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
          <div className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg transform -rotate-2">
            <span className="text-sm text-white font-black uppercase">Fun!</span>
          </div>
          <div className="flex-1 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
        </div>

        {/* Star Badge */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-orange-400"></div>
          <div className="relative px-8 py-3 bg-yellow-400 rounded-lg shadow-lg transform rotate-1">
            <div className="absolute -top-2 -right-2">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="text-sm text-purple-700 font-black uppercase">Yay!</span>
          </div>
          <div className="flex-1 h-1 bg-pink-400"></div>
        </div>

        {/* Speech Bubble */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-blue-300"></div>
          <div className="relative px-6 py-3 bg-blue-400 rounded-2xl shadow-lg">
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-400"></div>
            <span className="text-sm text-white font-bold">Hello!</span>
          </div>
          <div className="flex-1 h-px bg-purple-300"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-purple-600 mb-6">With Icons</h2>

        {/* Happy Face */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-yellow-400 rounded-full"></div>
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <div className="space-y-1">
              <div className="flex gap-2 justify-center">
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
              </div>
              <div className="w-6 h-3 border-b-2 border-gray-800 rounded-full"></div>
            </div>
          </div>
          <div className="flex-1 h-1 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Heart Burst */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full"></div>
          <div className="relative p-3 bg-pink-400 rounded-full shadow-lg transform rotate-12">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-300 rounded-full"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-300 rounded-full"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-300 rounded-full"></div>
          </div>
          <div className="flex-1 h-2 bg-gradient-to-r from-pink-400 to-pink-300 rounded-full"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-bold text-purple-600 mb-6">Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32 bg-white rounded-3xl shadow-lg border-4 border-purple-400 p-6 transform -rotate-1">
          <div className="text-sm text-purple-600 font-bold">Fun 1</div>
          <div className="w-2 h-full bg-gradient-to-b from-pink-400 to-purple-400 rounded-full"></div>
          <div className="text-sm text-pink-600 font-bold">Fun 2</div>
          <div className="w-2 h-full bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full"></div>
          <div className="text-sm text-orange-600 font-bold">Fun 3</div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="space-y-8">
        <h2 className="text-sm font-bold text-purple-600 mb-6">Special!</h2>

        {/* Confetti Style */}
        <div className="flex gap-1 justify-center">
          {[...Array(30)].map((_, i) => {
            const colors = ['bg-red-400', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400', 'bg-pink-400'];
            const heights = [8, 12, 16, 12, 8, 16, 12];
            return (
              <div
                key={i}
                className={`w-2 ${colors[i % colors.length]} rounded-full`}
                style={{ height: `${heights[i % heights.length]}px` }}
              ></div>
            );
          })}
        </div>

        {/* Bouncy Rainbow */}
        <div className="w-full h-4 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 rounded-full shadow-lg"></div>
      </section>
    </div>
  );
}