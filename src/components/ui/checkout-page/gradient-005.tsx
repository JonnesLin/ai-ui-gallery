export default function GradientCheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <header className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Checkout
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Shipping Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-purple-200 text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
                    placeholder="Doe"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-purple-200 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-purple-200 text-sm mb-2">Street Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
                    placeholder="123 Main Street"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 text-sm mb-2">City</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
                    placeholder="New York"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-purple-200 text-sm mb-2">State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
                      placeholder="NY"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 text-sm mb-2">ZIP</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Payment Details
              </h2>

              {/* Card Preview */}
              <div className="mb-6 p-6 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-white/60 text-sm">Credit Card</span>
                    <span className="text-white font-bold">VISA</span>
                  </div>
                  <div className="text-white text-xl tracking-widest font-mono mb-4">
                    **** **** **** 3456
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <span className="text-white/60 text-xs block">Card Holder</span>
                      <span className="text-white text-sm">JOHN DOE</span>
                    </div>
                    <div>
                      <span className="text-white/60 text-xs block">Expires</span>
                      <span className="text-white text-sm">12/28</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-purple-200 text-sm mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-purple-200 text-sm mb-2">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 text-sm mb-2">CVC</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
                      placeholder="123"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-purple-200 text-sm mb-2">Name on Card</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 lg:sticky lg:top-8">
              <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium truncate">Premium Headphones</h3>
                    <p className="text-purple-300 text-sm">Rose Gold</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-purple-400 text-sm">x1</span>
                      <span className="text-white">$299.00</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium truncate">Wireless Charger</h3>
                    <p className="text-purple-300 text-sm">White</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-purple-400 text-sm">x1</span>
                      <span className="text-white">$49.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300/50 text-sm focus:outline-none focus:border-pink-400"
                  placeholder="Promo code"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-white text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
                  Apply
                </button>
              </div>

              {/* Totals */}
              <div className="border-t border-white/20 pt-4 space-y-3">
                <div className="flex justify-between text-purple-200">
                  <span>Subtotal</span>
                  <span>$348.00</span>
                </div>
                <div className="flex justify-between text-purple-200">
                  <span>Shipping</span>
                  <span>$12.00</span>
                </div>
                <div className="flex justify-between text-purple-200">
                  <span>Tax</span>
                  <span>$28.80</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xl font-bold text-white mt-4 pt-4 border-t border-white/20">
                <span>Total</span>
                <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  $388.80
                </span>
              </div>

              <button className="w-full mt-6 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl text-white font-semibold hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all shadow-lg shadow-purple-500/30">
                Complete Purchase
              </button>

              <p className="text-center text-purple-300/60 text-xs mt-4">
                Secure payment powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
