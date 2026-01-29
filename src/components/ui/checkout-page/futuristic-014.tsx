export default function FuturisticCheckoutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cyber Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black tracking-tighter mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            SECURE CHECKOUT
          </h1>
          <div className="flex justify-center gap-1 mb-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 w-2/3">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-xs uppercase tracking-widest">
            <span className="text-cyan-400 font-bold">CART</span>
            <span className="text-blue-500 font-bold">PAYMENT</span>
            <span className="text-gray-600">COMPLETE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* User Data */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
                  <h2 className="text-xl font-bold tracking-tight">USER IDENTIFICATION</h2>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-cyan-400 mb-2 uppercase tracking-wider">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/50 border border-cyan-500/50 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="NEO"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-cyan-400 mb-2 uppercase tracking-wider">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/50 border border-cyan-500/50 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="ANDERSON"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-cyan-400 mb-2 uppercase tracking-wider">Email Protocol</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-black/50 border border-cyan-500/50 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="user@matrix.net"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Location Data */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500"></div>
                  <h2 className="text-xl font-bold tracking-tight">DELIVERY COORDINATES</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-blue-400 mb-2 uppercase tracking-wider">Address Vector</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/50 border border-blue-500/50 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                      placeholder="123 Cyber Street"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-blue-400 mb-2 uppercase tracking-wider">City</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/50 border border-blue-500/50 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                        placeholder="Neo Tokyo"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-blue-400 mb-2 uppercase tracking-wider">State</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/50 border border-blue-500/50 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                        placeholder="TX"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-blue-400 mb-2 uppercase tracking-wider">ZIP</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/50 border border-blue-500/50 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                        placeholder="75001"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Protocol */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500"></div>
                  <h2 className="text-xl font-bold tracking-tight">PAYMENT PROTOCOL</h2>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <button className="py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-sm border border-purple-400/50">
                      CRYPTO
                    </button>
                    <button className="py-3 px-4 bg-gray-800 rounded-lg font-bold text-sm border border-gray-700 hover:border-purple-400/50 transition-colors">
                      CARD
                    </button>
                    <button className="py-3 px-4 bg-gray-800 rounded-lg font-bold text-sm border border-gray-700 hover:border-purple-400/50 transition-colors">
                      DIGITAL
                    </button>
                  </div>
                  <div>
                    <label className="block text-xs text-purple-400 mb-2 uppercase tracking-wider">Card Sequence</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/50 rounded-lg focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all font-mono"
                      placeholder="XXXX XXXX XXXX XXXX"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-purple-400 mb-2 uppercase tracking-wider">Expiry</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/50 border border-purple-500/50 rounded-lg focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all font-mono"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-purple-400 mb-2 uppercase tracking-wider">Security Key</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/50 border border-purple-500/50 rounded-lg focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all font-mono"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Terminal */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl p-8 sticky top-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                  <h2 className="text-xl font-bold tracking-tight">ORDER DATA</h2>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-black/50 border border-cyan-500/30 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-cyan-300">Quantum Processor</h3>
                        <p className="text-xs text-gray-500 font-mono">SKU: QP-2077-X</p>
                      </div>
                      <span className="text-cyan-400 font-mono">$2,999</span>
                    </div>
                  </div>
                  <div className="p-4 bg-black/50 border border-blue-500/30 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-blue-300">Neural Interface</h3>
                        <p className="text-xs text-gray-500 font-mono">SKU: NI-2077-Y</p>
                      </div>
                      <span className="text-blue-400 font-mono">$1,499</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6 pb-6 border-b border-gray-800">
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-gray-500">SUBTOTAL</span>
                    <span>$4,498.00</span>
                  </div>
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-gray-500">SHIPPING</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-sm font-mono">
                    <span className="text-gray-500">TAX</span>
                    <span>$359.84</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6 text-xl font-bold font-mono">
                  <span>TOTAL</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    $4,857.84
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="PROMO CODE"
                      className="flex-1 px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none text-sm font-mono"
                    />
                    <button className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm font-bold hover:border-cyan-400 transition-colors">
                      APPLY
                    </button>
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-lg font-black text-lg tracking-wider hover:shadow-lg hover:shadow-cyan-500/50 transition-all relative overflow-hidden group">
                  <span className="relative z-10">EXECUTE PAYMENT</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>

                <p className="text-center text-xs text-gray-600 mt-4 font-mono">
                  ENCRYPTED • SECURE • VERIFIED
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
