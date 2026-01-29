export default function PlayfulCheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Fun Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-2">
            Almost There!
          </h1>
          <p className="text-lg text-gray-700">Let's wrap up your awesome order!</p>
        </div>

        {/* Fun Progress Dots */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center transform rotate-12 shadow-lg">
              <span className="text-2xl">🛒</span>
            </div>
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center transform -rotate-12 shadow-lg">
              <span className="text-2xl">💳</span>
            </div>
          </div>
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
              <span className="text-2xl grayscale">🎉</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Shipping Info */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-yellow-300 transform hover:rotate-1 transition-transform">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📦</span>
                <h2 className="text-2xl font-bold text-gray-800">Where should we send your goodies?</h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-3 border-yellow-200 focus:border-yellow-400 focus:outline-none bg-yellow-50 transition-colors"
                      placeholder="Alex"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-3 border-yellow-200 focus:border-yellow-400 focus:outline-none bg-yellow-50 transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border-3 border-yellow-200 focus:border-yellow-400 focus:outline-none bg-yellow-50 transition-colors"
                    placeholder="alex@awesome.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-3 border-yellow-200 focus:border-yellow-400 focus:outline-none bg-yellow-50 transition-colors"
                    placeholder="123 Happy Street"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-3 border-yellow-200 focus:border-yellow-400 focus:outline-none bg-yellow-50 transition-colors"
                      placeholder="Funville"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-3 border-yellow-200 focus:border-yellow-400 focus:outline-none bg-yellow-50 transition-colors"
                      placeholder="CA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">ZIP</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-3 border-yellow-200 focus:border-yellow-400 focus:outline-none bg-yellow-50 transition-colors"
                      placeholder="12345"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-pink-300 transform hover:-rotate-1 transition-transform">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">💰</span>
                <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <button className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold text-lg shadow-lg transform hover:scale-105 transition-transform">
                    💳 Card
                  </button>
                  <button className="flex-1 py-4 px-6 rounded-2xl border-4 border-pink-200 text-gray-700 font-bold text-lg hover:bg-pink-50 transition-colors">
                    🅿️ PayPal
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-3 border-pink-200 focus:border-pink-400 focus:outline-none bg-pink-50 transition-colors"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Expiry</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-3 border-pink-200 focus:border-pink-400 focus:outline-none bg-pink-50 transition-colors"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-3 border-pink-200 focus:border-pink-400 focus:outline-none bg-pink-50 transition-colors"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-purple-300 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🎁</span>
                <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-yellow-300 to-orange-300 flex items-center justify-center text-3xl">
                    🧸
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">Super Toy</h3>
                    <p className="text-sm text-gray-600">Mega Fun Edition</p>
                    <p className="font-bold text-orange-600 mt-1">$29.99</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center text-3xl">
                    🎮
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">Cool Game</h3>
                    <p className="text-sm text-gray-600">Digital Download</p>
                    <p className="font-bold text-purple-600 mt-1">$49.99</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4 pb-4 border-b-4 border-dashed border-gray-200">
                <div className="flex justify-between font-medium">
                  <span>Subtotal</span>
                  <span>$79.98</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Shipping 🚚</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between font-medium text-green-600">
                  <span>Discount 🎉</span>
                  <span>-$10.00</span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-black mb-6">
                <span>Total</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                  $74.98
                </span>
              </div>

              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Got a promo code?"
                    className="flex-1 px-4 py-3 rounded-xl border-3 border-purple-200 focus:border-purple-400 focus:outline-none bg-purple-50"
                  />
                  <button className="px-6 py-3 rounded-xl bg-purple-200 font-bold text-purple-700 hover:bg-purple-300 transition-colors">
                    Go!
                  </button>
                </div>
              </div>

              <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-white font-black text-xl shadow-2xl transform hover:scale-105 hover:shadow-3xl transition-all">
                Complete Order! 🎊
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
