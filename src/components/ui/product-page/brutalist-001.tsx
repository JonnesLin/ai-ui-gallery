export default function BrutalistProductPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="aspect-square border-4 border-white bg-yellow-400"></div>

          <div className="border-4 border-white p-8 bg-white text-black">
            <div className="space-y-6">
              <div className="border-4 border-black p-4 bg-yellow-400">
                <h1 className="text-6xl font-bold uppercase">CONCRETE LAMP</h1>
              </div>

              <div className="border-4 border-black p-4">
                <p className="text-xl uppercase">
                  RAW INDUSTRIAL DESIGN. BRUTALIST AESTHETIC. FUNCTION OVER FORM.
                </p>
              </div>

              <div className="border-4 border-black p-6 bg-black text-yellow-400">
                <div className="text-6xl font-bold">$299.00</div>
              </div>

              <div className="space-y-4">
                <div className="border-4 border-black p-4">
                  <div className="text-sm font-bold mb-3 uppercase">FINISH</div>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="border-4 border-black p-3 bg-gray-400 hover:bg-yellow-400">RAW</button>
                    <button className="border-4 border-black p-3 bg-yellow-400 font-bold">SMOOTH</button>
                    <button className="border-4 border-black p-3 bg-gray-400 hover:bg-yellow-400">ROUGH</button>
                  </div>
                </div>

                <div className="border-4 border-black p-4">
                  <div className="text-sm font-bold mb-3 uppercase">SIZE</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="border-4 border-black p-3 bg-gray-400 hover:bg-yellow-400">SMALL</button>
                    <button className="border-4 border-black p-3 bg-yellow-400 font-bold">LARGE</button>
                  </div>
                </div>
              </div>

              <button className="w-full border-4 border-black p-6 bg-black text-yellow-400 text-2xl font-bold uppercase hover:bg-yellow-400 hover:text-black transition-colors">
                [ADD TO CART]
              </button>
            </div>
          </div>
        </div>

        <div className="border-4 border-white bg-white text-black p-8 mb-4">
          <div className="flex gap-4 mb-6">
            <button className="border-4 border-black px-6 py-3 bg-yellow-400 font-bold uppercase">SPECS</button>
            <button className="border-4 border-black px-6 py-3 uppercase">REVIEWS</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-4 border-black p-6">
              <div className="font-bold text-2xl mb-2">MATERIAL</div>
              <div className="text-xl">100% CONCRETE</div>
            </div>
            <div className="border-4 border-black p-6">
              <div className="font-bold text-2xl mb-2">WEIGHT</div>
              <div className="text-xl">15 KG</div>
            </div>
            <div className="border-4 border-black p-6">
              <div className="font-bold text-2xl mb-2">DIMENSIONS</div>
              <div className="text-xl">30 x 30 x 50 CM</div>
            </div>
            <div className="border-4 border-black p-6 bg-black text-yellow-400">
              <div className="font-bold text-2xl mb-2">BULB</div>
              <div className="text-xl">E27 LED INCLUDED</div>
            </div>
          </div>
        </div>

        <div className="border-4 border-white bg-yellow-400 text-black p-8">
          <div className="border-4 border-black p-4 mb-6 bg-black text-yellow-400">
            <h2 className="text-4xl font-bold uppercase">[MORE PRODUCTS]</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-4 border-black bg-white">
                <div className="aspect-square border-b-4 border-black bg-gray-400"></div>
                <div className="p-4">
                  <div className="font-bold text-xl mb-2">ITEM #{i}</div>
                  <div className="text-2xl font-bold">$199</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}