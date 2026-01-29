export default function SketchProductPage() {
  return (
    <div className="min-h-screen bg-white p-8" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-square border-4 border-black rounded-lg relative" style={{ transform: 'rotate(-1deg)' }}>
            <div className="absolute inset-4 bg-gray-100">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <rect x="50" y="50" width="300" height="300" fill="none" stroke="black" strokeWidth="3" strokeDasharray="5,5" />
                <circle cx="120" cy="120" r="30" fill="none" stroke="black" strokeWidth="2" />
                <circle cx="280" cy="120" r="30" fill="none" stroke="black" strokeWidth="2" />
                <path d="M 150 250 Q 200 280 250 250" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8" style={{ transform: 'rotate(0.5deg)' }}>
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-200 border-2 border-black mb-4" style={{ transform: 'rotate(-2deg)' }}>
                <span className="text-sm font-bold">✏️ Hand Drawn!</span>
              </div>
              <h1 className="text-6xl font-bold mb-4 relative">
                <span className="relative">
                  Sketch Mug
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 400 8">
                    <path d="M 0 4 Q 100 2 200 4 T 400 4" fill="none" stroke="black" strokeWidth="3" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl leading-relaxed">
                Like it was drawn by hand!<br />
                Perfect for your morning coffee~
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-5xl font-black">$24</span>
              <div className="px-3 py-1 bg-red-300 border-2 border-black" style={{ transform: 'rotate(3deg)' }}>
                <span className="font-bold">SALE!</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-4 border-black p-6 bg-blue-50" style={{ transform: 'rotate(-0.5deg)' }}>
                <label className="text-sm font-bold mb-3 block">Pick a Doodle!</label>
                <div className="grid grid-cols-3 gap-3">
                  <button className="aspect-square border-4 border-black bg-white hover:bg-yellow-100 flex items-center justify-center text-3xl">
                    ☕
                  </button>
                  <button className="aspect-square border-4 border-black bg-yellow-200 flex items-center justify-center text-3xl">
                    😊
                  </button>
                  <button className="aspect-square border-4 border-black bg-white hover:bg-yellow-100 flex items-center justify-center text-3xl">
                    ⭐
                  </button>
                </div>
              </div>

              <div className="border-4 border-black p-6 bg-pink-50" style={{ transform: 'rotate(0.5deg)' }}>
                <label className="text-sm font-bold mb-3 block">Size</label>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 border-4 border-black bg-white font-bold hover:bg-pink-200">
                    Small
                  </button>
                  <button className="flex-1 py-3 border-4 border-black bg-pink-300 font-bold">
                    Medium
                  </button>
                  <button className="flex-1 py-3 border-4 border-black bg-white font-bold hover:bg-pink-200">
                    Large
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full py-5 bg-green-300 border-4 border-black font-black text-2xl relative overflow-hidden group" style={{ transform: 'rotate(-1deg)' }}>
              <span className="relative z-10">ADD TO CART!</span>
              <div className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
            </button>

            <div className="flex gap-4">
              <div className="flex-1 p-4 border-4 border-black bg-yellow-100 text-center" style={{ transform: 'rotate(1deg)' }}>
                <div className="font-bold">✓ Dishwasher Safe</div>
              </div>
              <div className="flex-1 p-4 border-4 border-black bg-blue-100 text-center" style={{ transform: 'rotate(-1deg)' }}>
                <div className="font-bold">✓ Hand Made</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-4 border-black p-10 bg-purple-50 mb-16" style={{ transform: 'rotate(-0.5deg)' }}>
          <div className="flex gap-6 mb-8">
            <button className="px-6 py-3 bg-purple-300 border-4 border-black font-black" style={{ transform: 'rotate(2deg)' }}>
              Details ✏️
            </button>
            <button className="px-6 py-3 border-4 border-black font-bold bg-white" style={{ transform: 'rotate(-1deg)' }}>
              Reviews 💬
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border-4 border-black bg-white" style={{ transform: 'rotate(1deg)' }}>
              <div className="text-4xl mb-3">✋</div>
              <h3 className="font-black text-xl mb-2">Hand Crafted</h3>
              <p>Each mug is unique! Made with love & care</p>
            </div>
            <div className="p-6 border-4 border-black bg-white" style={{ transform: 'rotate(-1deg)' }}>
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-black text-xl mb-2">Original Art</h3>
              <p>Designed by local artists. Support creativity!</p>
            </div>
            <div className="p-6 border-4 border-black bg-white" style={{ transform: 'rotate(0.5deg)' }}>
              <div className="text-4xl mb-3">♻️</div>
              <h3 className="font-black text-xl mb-2">Eco Friendly</h3>
              <p>Made from recycled materials. Save the planet!</p>
            </div>
          </div>
        </div>

        <div className="border-4 border-black p-10 bg-orange-50" style={{ transform: 'rotate(0.5deg)' }}>
          <h2 className="text-4xl font-black mb-8 relative inline-block">
            More Sketchy Stuff!
            <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 400 6">
              <path d="M 0 3 L 400 3" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-4 border-black bg-white p-4" style={{ transform: `rotate(${i % 2 === 0 ? '-' : ''}${Math.random() * 2}deg)` }}>
                <div className="aspect-square border-2 border-black bg-gray-100 mb-4">
                  <svg className="w-full h-full p-4" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="black" strokeWidth="2" strokeDasharray="3,3" />
                  </svg>
                </div>
                <h3 className="font-black text-lg mb-2">Item #{i}</h3>
                <p className="text-xl font-bold">$19</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}