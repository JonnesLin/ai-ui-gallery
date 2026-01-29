export default function NeonCheckoutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="border-b border-cyan-500/30" style={{ boxShadow: '0 1px 20px rgba(0, 255, 255, 0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-3xl font-bold" style={{ textShadow: '0 0 20px rgba(0, 255, 255, 0.8)' }}>
            Checkout
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section
              className="border-2 border-cyan-500 p-6 sm:p-8 bg-black/50 backdrop-blur-sm"
              style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)' }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-10 h-10 rounded-full border-2 border-cyan-500 flex items-center justify-center font-bold"
                  style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)' }}
                >
                  1
                </div>
                <h2 className="text-xl font-bold text-cyan-400">Contact Information</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-cyan-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all"
                      placeholder="Alex"
                      style={{ boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.2)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-cyan-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all"
                      placeholder="Neon"
                      style={{ boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.2)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-cyan-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all"
                    placeholder="alex@neonmail.com"
                    style={{ boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.2)' }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-cyan-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all"
                    placeholder="+1 555 NEON"
                    style={{ boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.2)' }}
                  />
                </div>
              </div>
            </section>

            <section
              className="border-2 border-pink-500 p-6 sm:p-8 bg-black/50 backdrop-blur-sm"
              style={{ boxShadow: '0 0 30px rgba(255, 0, 255, 0.4)' }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-10 h-10 rounded-full border-2 border-pink-500 flex items-center justify-center font-bold"
                  style={{ boxShadow: '0 0 15px rgba(255, 0, 255, 0.6)' }}
                >
                  2
                </div>
                <h2 className="text-xl font-bold text-pink-400">Shipping Address</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-pink-300">
                    Street Address
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black border-2 border-pink-500/50 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-all"
                    placeholder="123 Neon Street"
                    style={{ boxShadow: 'inset 0 0 10px rgba(255, 0, 255, 0.2)' }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-pink-300">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black border-2 border-pink-500/50 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-all"
                      placeholder="Cyber City"
                      style={{ boxShadow: 'inset 0 0 10px rgba(255, 0, 255, 0.2)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-pink-300">
                      State
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black border-2 border-pink-500/50 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-all"
                      placeholder="NC"
                      style={{ boxShadow: 'inset 0 0 10px rgba(255, 0, 255, 0.2)' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-pink-300">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black border-2 border-pink-500/50 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-all"
                      placeholder="99999"
                      style={{ boxShadow: 'inset 0 0 10px rgba(255, 0, 255, 0.2)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-pink-300">
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black border-2 border-pink-500/50 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none transition-all"
                      placeholder="Future"
                      style={{ boxShadow: 'inset 0 0 10px rgba(255, 0, 255, 0.2)' }}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section
              className="border-2 border-purple-500 p-6 sm:p-8 bg-black/50 backdrop-blur-sm"
              style={{ boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)' }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center font-bold"
                  style={{ boxShadow: '0 0 15px rgba(147, 51, 234, 0.6)' }}
                >
                  3
                </div>
                <h2 className="text-xl font-bold text-purple-400">Payment Method</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    className="px-6 py-3 bg-purple-600 border-2 border-purple-400 font-bold hover:bg-purple-500 transition-all"
                    style={{ boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)' }}
                  >
                    Card
                  </button>
                  <button
                    className="px-6 py-3 border-2 border-purple-500/50 font-bold hover:border-purple-500 transition-all"
                    style={{ boxShadow: '0 0 10px rgba(147, 51, 234, 0.3)' }}
                  >
                    Crypto
                  </button>
                  <button
                    className="px-6 py-3 border-2 border-purple-500/50 font-bold hover:border-purple-500 transition-all"
                    style={{ boxShadow: '0 0 10px rgba(147, 51, 234, 0.3)' }}
                  >
                    PayPal
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-purple-300">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black border-2 border-purple-500/50 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all"
                    placeholder="•••• •••• •••• ••••"
                    style={{ boxShadow: 'inset 0 0 10px rgba(147, 51, 234, 0.2)' }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-purple-300">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black border-2 border-purple-500/50 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all"
                      placeholder="MM/YY"
                      style={{ boxShadow: 'inset 0 0 10px rgba(147, 51, 234, 0.2)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-purple-300">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black border-2 border-purple-500/50 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all"
                      placeholder="•••"
                      style={{ boxShadow: 'inset 0 0 10px rgba(147, 51, 234, 0.2)' }}
                    />
                  </div>
                </div>
              </div>
            </section>

            <button
              className="w-full py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-black text-lg font-bold hover:scale-105 transition-transform"
              style={{ boxShadow: '0 0 40px rgba(0, 255, 255, 0.6), 0 0 40px rgba(255, 0, 255, 0.6)' }}
            >
              PLACE ORDER
            </button>
          </div>

          <div className="lg:col-span-1">
            <div
              className="border-2 border-cyan-500 p-6 sm:p-8 bg-black/50 backdrop-blur-sm lg:sticky lg:top-8"
              style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)' }}
            >
              <h2 className="text-xl font-bold mb-8 text-cyan-400" style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.8)' }}>
                Order Summary
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4 pb-6 border-b border-cyan-500/30">
                  <div
                    className="w-20 h-20 border-2 border-cyan-500 bg-black flex-shrink-0"
                    style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)' }}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold mb-1 text-cyan-300">Neon Jacket</h3>
                    <p className="text-xs text-gray-400 mb-2">LED / Medium</p>
                    <p className="text-sm font-bold text-white">$299.00</p>
                  </div>
                  <span className="text-sm text-gray-400">×1</span>
                </div>

                <div className="flex gap-4 pb-6 border-b border-pink-500/30">
                  <div
                    className="w-20 h-20 border-2 border-pink-500 bg-black flex-shrink-0"
                    style={{ boxShadow: '0 0 15px rgba(255, 0, 255, 0.4)' }}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold mb-1 text-pink-300">Glow Sneakers</h3>
                    <p className="text-xs text-gray-400 mb-2">RGB / Size 10</p>
                    <p className="text-sm font-bold text-white">$189.00</p>
                  </div>
                  <span className="text-sm text-gray-400">×1</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 pb-8 border-b border-purple-500/30">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-300">Subtotal</span>
                  <span className="font-bold">$488.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-300">Express Delivery</span>
                  <span className="font-bold">$25.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-300">Tax</span>
                  <span className="font-bold">$41.04</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold mb-8">
                <span className="text-cyan-400">Total</span>
                <span style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.8)' }}>$554.04</span>
              </div>

              <div className="mb-8">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-4 py-3 bg-black border-2 border-cyan-500/50 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all text-sm"
                    style={{ boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.2)' }}
                  />
                  <button
                    className="px-6 py-3 border-2 border-cyan-500 font-bold hover:bg-cyan-500/20 transition-all"
                    style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.4)' }}
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-cyan-500/30">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Secure Encrypted Payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
