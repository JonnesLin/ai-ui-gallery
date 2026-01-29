export default function RetroProductPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-square bg-gradient-to-br from-orange-300 to-rose-400 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black"></div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="inline-block px-4 py-2 bg-cyan-400 text-black font-bold text-sm border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
                VINTAGE COLLECTION
              </div>
              <h1 className="text-6xl font-black mb-4 text-black" style={{ fontFamily: 'Impact, sans-serif' }}>
                RETRO RADIO
              </h1>
              <p className="text-2xl text-black leading-relaxed">
                Groovy design meets modern tech. Far out!
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-5xl font-black text-black">$179</div>
              <div className="px-4 py-2 bg-yellow-300 text-black font-bold border-4 border-black transform -rotate-3">
                HOT DEAL!
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-black font-bold text-lg mb-3 block">COLOR VIBE</label>
                <div className="flex gap-3">
                  <button className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></button>
                  <button className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-black"></button>
                  <button className="w-16 h-16 rounded-full bg-gradient-to-br from-lime-400 to-green-500 border-4 border-black"></button>
                </div>
              </div>

              <div>
                <label className="text-black font-bold text-lg mb-3 block">STYLE</label>
                <div className="flex gap-3">
                  <button className="px-6 py-3 bg-pink-300 border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Classic</button>
                  <button className="px-6 py-3 bg-yellow-300 border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Deluxe</button>
                  <button className="px-6 py-3 bg-white border-4 border-black font-bold">Premium</button>
                </div>
              </div>
            </div>

            <button className="w-full py-6 bg-gradient-to-r from-orange-400 to-rose-500 text-white text-2xl font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              ADD TO CART
            </button>
          </div>
        </div>

        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-16">
          <div className="flex gap-6 mb-8">
            <button className="px-6 py-3 bg-cyan-400 border-4 border-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              FEATURES
            </button>
            <button className="px-6 py-3 border-4 border-black font-black">REVIEWS</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-pink-200 to-pink-300 border-4 border-black">
              <h3 className="font-black text-2xl mb-2">BLUETOOTH 5.0</h3>
              <p className="text-lg">Wireless grooves</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-yellow-200 to-yellow-300 border-4 border-black">
              <h3 className="font-black text-2xl mb-2">FM RADIO</h3>
              <p className="text-lg">Classic tuning</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-cyan-200 to-cyan-300 border-4 border-black">
              <h3 className="font-black text-2xl mb-2">12H BATTERY</h3>
              <p className="text-lg">All day jams</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-300 to-rose-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <h2 className="text-5xl font-black mb-8 text-black">MORE GROOVY STUFF</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square bg-gradient-to-br from-cyan-300 to-blue-400 border-b-4 border-black"></div>
                <div className="p-4">
                  <h3 className="font-black text-xl mb-2">RETRO ITEM {i}</h3>
                  <p className="text-2xl font-black">$149</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}