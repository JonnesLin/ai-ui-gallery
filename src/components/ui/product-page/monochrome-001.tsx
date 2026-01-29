export default function MonochromeProductPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="aspect-square bg-black"></div>

          <div className="flex flex-col justify-center space-y-10">
            <div>
              <div className="inline-block px-4 py-1 bg-black text-white text-xs uppercase tracking-widest mb-6">
                Exclusive
              </div>
              <h1 className="text-6xl font-bold tracking-tight mb-6">
                Monochrome<br />Camera
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Pure black and white photography.
                No color. No distraction. Only essence.
              </p>
            </div>

            <div className="text-5xl font-bold">$1,299</div>

            <div className="space-y-8">
              <div>
                <label className="text-sm uppercase tracking-widest mb-4 block">Sensor Type</label>
                <div className="space-y-3">
                  <button className="w-full px-6 py-4 bg-black text-white text-left">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold">Full Frame Monochrome</div>
                        <div className="text-sm text-gray-400 mt-1">50MP • Enhanced sensitivity</div>
                      </div>
                    </div>
                  </button>
                  <button className="w-full px-6 py-4 border-2 border-black text-left hover:bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold">Medium Format Monochrome</div>
                        <div className="text-sm text-gray-600 mt-1">100MP • Maximum detail</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm uppercase tracking-widest mb-4 block">Storage</label>
                <div className="flex gap-3">
                  <button className="flex-1 py-4 border-2 border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                    128GB
                  </button>
                  <button className="flex-1 py-4 bg-black text-white text-sm uppercase tracking-wider">
                    256GB
                  </button>
                  <button className="flex-1 py-4 border-2 border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                    512GB
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-5 bg-black text-white font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                Purchase
              </button>
              <button className="px-8 py-5 border-2 border-black font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">
                Try
              </button>
            </div>

            <div className="grid grid-cols-3 gap-px bg-black border-2 border-black">
              <div className="bg-white p-6 text-center">
                <div className="font-bold text-2xl mb-1">50MP</div>
                <div className="text-xs uppercase tracking-widest text-gray-600">Resolution</div>
              </div>
              <div className="bg-white p-6 text-center">
                <div className="font-bold text-2xl mb-1">ISO 102K</div>
                <div className="text-xs uppercase tracking-widest text-gray-600">Sensitivity</div>
              </div>
              <div className="bg-white p-6 text-center">
                <div className="font-bold text-2xl mb-1">14 EVs</div>
                <div className="text-xs uppercase tracking-widest text-gray-600">Dynamic Range</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-black pt-16 mb-24">
          <div className="flex gap-12 mb-12 border-b-2 border-black">
            <button className="pb-6 border-b-4 border-black font-bold uppercase tracking-widest text-sm">
              Specifications
            </button>
            <button className="pb-6 text-gray-400 uppercase tracking-widest text-sm">
              Philosophy
            </button>
            <button className="pb-6 text-gray-400 uppercase tracking-widest text-sm">
              Gallery
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="flex justify-between py-4 border-b border-gray-200">
                <span className="uppercase tracking-wider text-sm">Sensor</span>
                <span className="font-bold">50MP Monochrome CMOS</span>
              </div>
              <div className="flex justify-between py-4 border-b border-gray-200">
                <span className="uppercase tracking-wider text-sm">Processor</span>
                <span className="font-bold">Maestro IV</span>
              </div>
              <div className="flex justify-between py-4 border-b border-gray-200">
                <span className="uppercase tracking-wider text-sm">ISO Range</span>
                <span className="font-bold">100-102,400</span>
              </div>
              <div className="flex justify-between py-4 border-b border-gray-200">
                <span className="uppercase tracking-wider text-sm">Shutter Speed</span>
                <span className="font-bold">1/8000s - 60s</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between py-4 border-b border-gray-200">
                <span className="uppercase tracking-wider text-sm">Video</span>
                <span className="font-bold">No video capability</span>
              </div>
              <div className="flex justify-between py-4 border-b border-gray-200">
                <span className="uppercase tracking-wider text-sm">Build</span>
                <span className="font-bold">Magnesium Alloy</span>
              </div>
              <div className="flex justify-between py-4 border-b border-gray-200">
                <span className="uppercase tracking-wider text-sm">Weight</span>
                <span className="font-bold">680g (body only)</span>
              </div>
              <div className="flex justify-between py-4 border-b border-gray-200">
                <span className="uppercase tracking-wider text-sm">Warranty</span>
                <span className="font-bold">2 Years</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight">System Accessories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-black border-2 border-black">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white">
                <div className="aspect-square bg-gray-100"></div>
                <div className="p-6">
                  <h3 className="font-bold mb-2 uppercase text-sm tracking-wider">Lens System {i}</h3>
                  <p className="text-sm text-gray-600 mb-4">Prime optic</p>
                  <p className="font-bold text-lg">$899</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}