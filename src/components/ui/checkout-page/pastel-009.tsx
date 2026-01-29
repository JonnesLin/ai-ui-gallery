export default function PastelCheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-300 text-white flex items-center justify-center text-sm font-medium">1</div>
              <span className="text-xs mt-2 text-purple-600">Cart</span>
            </div>
            <div className="w-16 h-0.5 bg-purple-300"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-pink-300 text-white flex items-center justify-center text-sm font-medium">2</div>
              <span className="text-xs mt-2 text-pink-600">Shipping</span>
            </div>
            <div className="w-16 h-0.5 bg-pink-200"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-400 flex items-center justify-center text-sm font-medium">3</div>
              <span className="text-xs mt-2 text-pink-400">Complete</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-purple-100">
              <h2 className="text-2xl font-semibold text-purple-900 mb-6">Shipping Address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-2xl bg-purple-50/50 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                      placeholder="Emma"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-2xl bg-purple-50/50 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                      placeholder="Wilson"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-2xl bg-purple-50/50 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                    placeholder="emma@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Street Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-2xl bg-purple-50/50 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                    placeholder="123 Meadow Lane"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-2xl bg-purple-50/50 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                      placeholder="Portland"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-2xl bg-purple-50/50 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                      placeholder="OR"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-2xl bg-purple-50/50 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                      placeholder="97201"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-pink-100">
              <h2 className="text-2xl font-semibold text-pink-900 mb-6">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <button className="flex-1 p-4 rounded-2xl border-2 border-pink-300 bg-pink-50 text-pink-700 font-medium">
                    Credit Card
                  </button>
                  <button className="flex-1 p-4 rounded-2xl border-2 border-pink-200 bg-white hover:bg-pink-50 text-pink-600 font-medium transition-colors">
                    PayPal
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-pink-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-2xl bg-pink-50/50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-pink-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-2xl bg-pink-50/50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pink-700 mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-2xl bg-pink-50/50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-blue-100 sticky top-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-200 to-pink-200"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">Cozy Sweater</h3>
                    <p className="text-sm text-gray-500">Lavender / M</p>
                    <p className="text-sm font-medium text-purple-600 mt-1">$65.00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-200 to-blue-200"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">Silk Scarf</h3>
                    <p className="text-sm text-gray-500">Pastel Mix</p>
                    <p className="text-sm font-medium text-pink-600 mt-1">$32.00</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 py-4 border-t border-purple-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">$97.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-800">$8.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-800">$8.40</span>
                </div>
              </div>

              <div className="py-4 border-t border-purple-200">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-purple-900">Total</span>
                  <span className="text-purple-900">$113.40</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-4 py-2 rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
                  />
                  <button className="px-4 py-2 rounded-xl bg-purple-100 text-purple-700 font-medium text-sm hover:bg-purple-200 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <button className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
