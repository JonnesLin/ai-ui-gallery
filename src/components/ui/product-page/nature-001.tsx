export default function NatureProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-square bg-gradient-to-br from-green-200 to-emerald-300 rounded-[2rem]"></div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-200 text-green-800 text-sm font-medium rounded-full mb-4">
                <span>🌿</span>
                <span>100% Organic</span>
              </div>
              <h1 className="text-5xl font-bold text-green-900 mb-4">
                Natural Bamboo Diffuser
              </h1>
              <p className="text-green-700 text-lg leading-relaxed">
                Sustainably sourced bamboo with organic essential oils.
                Bring the calm of nature into your home.
              </p>
            </div>

            <div className="text-4xl font-bold text-green-900">$49</div>

            <div className="space-y-6">
              <div>
                <label className="text-green-700 text-sm font-medium mb-3 block">Essential Oil Blend</label>
                <div className="space-y-2">
                  <button className="w-full px-6 py-4 bg-green-100 border-2 border-green-400 rounded-2xl text-left">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🌲</span>
                      <div>
                        <div className="font-semibold text-green-900">Forest Pine</div>
                        <div className="text-sm text-green-600">Cedarwood, Pine, Eucalyptus</div>
                      </div>
                    </div>
                  </button>
                  <button className="w-full px-6 py-4 bg-white border-2 border-green-200 rounded-2xl text-left hover:border-green-300">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🌸</span>
                      <div>
                        <div className="font-semibold text-green-900">Floral Garden</div>
                        <div className="text-sm text-green-600">Lavender, Rose, Jasmine</div>
                      </div>
                    </div>
                  </button>
                  <button className="w-full px-6 py-4 bg-white border-2 border-green-200 rounded-2xl text-left hover:border-green-300">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🍊</span>
                      <div>
                        <div className="font-semibold text-green-900">Citrus Breeze</div>
                        <div className="text-sm text-green-600">Orange, Lemon, Grapefruit</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <label className="text-green-700 text-sm font-medium mb-3 block">Size</label>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-white border-2 border-green-200 rounded-xl text-green-700 font-medium">Small</button>
                  <button className="flex-1 py-3 bg-green-100 border-2 border-green-400 rounded-xl text-green-900 font-semibold">Medium</button>
                  <button className="flex-1 py-3 bg-white border-2 border-green-200 rounded-xl text-green-700 font-medium">Large</button>
                </div>
              </div>
            </div>

            <button className="w-full py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              Add to Cart
            </button>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-green-100 rounded-xl text-center">
                <div className="text-3xl mb-2">♻️</div>
                <div className="text-sm text-green-800 font-medium">Eco-Friendly</div>
              </div>
              <div className="p-4 bg-green-100 rounded-xl text-center">
                <div className="text-3xl mb-2">🌱</div>
                <div className="text-sm text-green-800 font-medium">Organic</div>
              </div>
              <div className="p-4 bg-green-100 rounded-xl text-center">
                <div className="text-3xl mb-2">🤲</div>
                <div className="text-sm text-green-800 font-medium">Handmade</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] p-10 mb-16 shadow-lg">
          <div className="flex gap-8 mb-8">
            <button className="px-6 py-3 bg-green-100 text-green-900 font-semibold rounded-xl">
              Benefits
            </button>
            <button className="px-6 py-3 text-green-600">Ingredients</button>
            <button className="px-6 py-3 text-green-600">Sustainability</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="font-bold text-green-900 text-lg mb-2">Stress Relief</h3>
              <p className="text-green-700">Natural aromatherapy to calm your mind and reduce anxiety</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="text-4xl mb-4">💤</div>
              <h3 className="font-bold text-green-900 text-lg mb-2">Better Sleep</h3>
              <p className="text-green-700">Promotes relaxation and improves sleep quality naturally</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="font-bold text-green-900 text-lg mb-2">Air Purifying</h3>
              <p className="text-green-700">Naturally freshens air while eliminating odors</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-[2rem] p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-green-900 mb-8">Nature Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl mb-4"></div>
                <h3 className="text-green-900 font-semibold mb-2">Natural Product {i}</h3>
                <p className="text-green-700">$39</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}