export default function PastelProductPage() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-square bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 rounded-[3rem]"></div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-lavender-200 text-purple-600 text-sm font-medium rounded-full mb-4">
                New Arrival
              </div>
              <h1 className="text-5xl font-bold text-purple-900 mb-4">Dreamy Cloud Lamp</h1>
              <p className="text-purple-600 text-xl leading-relaxed">
                Soft ambient lighting that transforms your space into a peaceful haven.
              </p>
            </div>

            <div className="text-4xl font-bold text-purple-900">$89</div>

            <div className="space-y-6">
              <div>
                <label className="text-purple-600 text-sm font-medium mb-3 block">Color Mode</label>
                <div className="flex gap-3">
                  <button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-200 to-pink-300 shadow-lg border-4 border-pink-300"></button>
                  <button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-200 to-blue-300 shadow-lg border-2 border-blue-200"></button>
                  <button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-200 to-purple-300 shadow-lg border-2 border-purple-200"></button>
                  <button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-lg border-2 border-yellow-200"></button>
                </div>
              </div>

              <div>
                <label className="text-purple-600 text-sm font-medium mb-3 block">Brightness Level</label>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-purple-100 text-purple-700 rounded-2xl font-medium">Low</button>
                  <button className="flex-1 py-3 bg-purple-300 text-purple-900 rounded-2xl font-semibold">Medium</button>
                  <button className="flex-1 py-3 bg-purple-100 text-purple-700 rounded-2xl font-medium">High</button>
                </div>
              </div>
            </div>

            <button className="w-full py-5 bg-gradient-to-r from-purple-300 to-pink-300 text-purple-900 font-bold text-lg rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              Add to Cart
            </button>

            <div className="flex gap-4">
              <div className="flex-1 p-4 bg-blue-100 rounded-2xl text-center">
                <div className="text-3xl mb-1">🌙</div>
                <div className="text-sm text-blue-800 font-medium">Sleep Timer</div>
              </div>
              <div className="flex-1 p-4 bg-pink-100 rounded-2xl text-center">
                <div className="text-3xl mb-1">✨</div>
                <div className="text-sm text-pink-800 font-medium">Auto Dimming</div>
              </div>
              <div className="flex-1 p-4 bg-purple-100 rounded-2xl text-center">
                <div className="text-3xl mb-1">💝</div>
                <div className="text-sm text-purple-800 font-medium">Gift Ready</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-10 mb-16 shadow-lg">
          <div className="flex gap-8 mb-8">
            <button className="px-6 py-3 bg-purple-200 text-purple-900 font-semibold rounded-2xl">Features</button>
            <button className="px-6 py-3 text-purple-600 font-medium">Reviews (24)</button>
            <button className="px-6 py-3 text-purple-600 font-medium">Care Guide</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl">
              <div className="text-4xl mb-3">🌸</div>
              <h3 className="font-bold text-purple-900 text-lg mb-2">Soft Glow</h3>
              <p className="text-purple-600">Gentle LED technology for comfortable ambient lighting</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl">
              <div className="text-4xl mb-3">☁️</div>
              <h3 className="font-bold text-purple-900 text-lg mb-2">Cloud Design</h3>
              <p className="text-purple-600">Handcrafted cotton exterior with premium finish</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl">
              <div className="text-4xl mb-3">🔋</div>
              <h3 className="font-bold text-purple-900 text-lg mb-2">Long Lasting</h3>
              <p className="text-purple-600">Up to 20 hours on a single charge</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-[3rem] p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">You Might Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-4"></div>
                <h3 className="text-purple-900 font-semibold mb-2">Dreamy Item {i}</h3>
                <p className="text-purple-600">$79</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}