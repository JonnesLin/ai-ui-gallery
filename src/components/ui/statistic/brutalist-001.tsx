export default function BrutalistStatistic() {
  return (
    <div className="w-full min-h-screen bg-yellow-300 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black border-4 border-black p-6 transform hover:translate-x-1 hover:translate-y-1 transition-transform">
            <div className="bg-red-500 inline-block px-4 py-2 mb-4 font-black text-black">
              REVENUE
            </div>
            <div className="text-6xl font-black text-white mb-2">$284K</div>
            <div className="flex items-center gap-2">
              <div className="bg-lime-400 px-3 py-1 font-black text-black">↑ 45%</div>
              <div className="text-white font-bold">GROWTH</div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-6 transform hover:translate-x-1 hover:translate-y-1 transition-transform">
            <div className="bg-blue-500 inline-block px-4 py-2 mb-4 font-black text-white">
              USERS
            </div>
            <div className="text-6xl font-black text-black mb-2">24.8K</div>
            <div className="flex items-center gap-2">
              <div className="bg-orange-400 px-3 py-1 font-black text-black">↑ 28%</div>
              <div className="text-black font-bold">ACTIVE</div>
            </div>
          </div>

          <div className="bg-lime-400 border-4 border-black p-6 transform hover:translate-x-1 hover:translate-y-1 transition-transform">
            <div className="bg-black inline-block px-4 py-2 mb-4 font-black text-white">
              ORDERS
            </div>
            <div className="text-6xl font-black text-black mb-2">8,492</div>
            <div className="flex items-center gap-2">
              <div className="bg-red-500 px-3 py-1 font-black text-white">↓ 12%</div>
              <div className="text-black font-bold">DOWN</div>
            </div>
          </div>

          <div className="bg-orange-500 border-4 border-black p-6 transform hover:translate-x-1 hover:translate-y-1 transition-transform">
            <div className="bg-white inline-block px-4 py-2 mb-4 font-black text-black">
              RATING
            </div>
            <div className="text-6xl font-black text-black mb-2">4.8★</div>
            <div className="flex items-center gap-2">
              <div className="bg-lime-400 px-3 py-1 font-black text-black">↑ 5%</div>
              <div className="text-black font-bold">GOOD</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black border-4 border-black p-8">
            <div className="bg-cyan-400 inline-block px-6 py-3 mb-6 font-black text-black text-xl">
              MONTHLY STATS
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b-4 border-white pb-2">
                <span className="text-white font-black text-lg">SALES</span>
                <span className="text-lime-400 font-black text-2xl">$542K</span>
              </div>
              <div className="flex items-center justify-between border-b-4 border-white pb-2">
                <span className="text-white font-black text-lg">PROFIT</span>
                <span className="text-lime-400 font-black text-2xl">$184K</span>
              </div>
              <div className="flex items-center justify-between border-b-4 border-white pb-2">
                <span className="text-white font-black text-lg">MARGIN</span>
                <span className="text-lime-400 font-black text-2xl">34%</span>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-8">
            <div className="bg-red-500 inline-block px-6 py-3 mb-6 font-black text-white text-xl">
              TOP METRICS
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-300 border-4 border-black p-4 text-center">
                <div className="text-3xl font-black mb-1">92%</div>
                <div className="font-bold text-sm">UPTIME</div>
              </div>
              <div className="bg-blue-400 border-4 border-black p-4 text-center">
                <div className="text-3xl font-black mb-1">1.2s</div>
                <div className="font-bold text-sm">LOAD</div>
              </div>
              <div className="bg-orange-400 border-4 border-black p-4 text-center">
                <div className="text-3xl font-black mb-1">8.4K</div>
                <div className="font-bold text-sm">VISITS</div>
              </div>
              <div className="bg-lime-400 border-4 border-black p-4 text-center">
                <div className="text-3xl font-black mb-1">245</div>
                <div className="font-bold text-sm">SIGNUPS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}