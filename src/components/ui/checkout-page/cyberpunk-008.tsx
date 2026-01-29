export default function CyberpunkCheckoutPage() {
  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Glitch Lines */}
      <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-30"></div>

      <header className="relative border-b border-cyan-900/50 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-wider">
                <span className="text-pink-500">//</span> CHECKOUT_v2.1
              </h1>
              <p className="text-xs text-cyan-600 mt-1">SECURE_TRANSACTION_PROTOCOL</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-cyan-600">SESSION_ID</div>
              <div className="text-sm font-mono text-pink-400">0xF7A2B9</div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Forms */}
          <div className="lg:col-span-7 space-y-6">
            {/* Shipping */}
            <div className="border border-cyan-900 bg-black/80 backdrop-blur relative">
              <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <div className="border-b border-cyan-900/50 px-4 py-3 flex items-center justify-between">
                <h2 className="text-sm font-bold tracking-widest">
                  <span className="text-pink-500">01.</span> SHIPPING_DATA
                </h2>
                <span className="text-xs text-cyan-600">[REQUIRED]</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-cyan-600 mb-2 tracking-wider">FIRST_NAME</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-cyan-950/30 border border-cyan-800 text-cyan-300 placeholder-cyan-700 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                      placeholder="Enter value..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-cyan-600 mb-2 tracking-wider">LAST_NAME</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-cyan-950/30 border border-cyan-800 text-cyan-300 placeholder-cyan-700 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                      placeholder="Enter value..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-cyan-600 mb-2 tracking-wider">EMAIL_ADDR</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-cyan-950/30 border border-cyan-800 text-cyan-300 placeholder-cyan-700 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                    placeholder="user@domain.net"
                  />
                </div>
                <div>
                  <label className="block text-xs text-cyan-600 mb-2 tracking-wider">STREET_ADDR</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-cyan-950/30 border border-cyan-800 text-cyan-300 placeholder-cyan-700 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                    placeholder="123 Neon Street, Block 7..."
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-cyan-600 mb-2 tracking-wider">CITY</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-cyan-950/30 border border-cyan-800 text-cyan-300 placeholder-cyan-700 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                      placeholder="Neo Tokyo"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-cyan-600 mb-2 tracking-wider">SECTOR</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-cyan-950/30 border border-cyan-800 text-cyan-300 placeholder-cyan-700 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                      placeholder="7-A"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-cyan-600 mb-2 tracking-wider">ZIP_CODE</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-cyan-950/30 border border-cyan-800 text-cyan-300 placeholder-cyan-700 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                      placeholder="00-777"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="border border-pink-900 bg-black/80 backdrop-blur relative">
              <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
              <div className="border-b border-pink-900/50 px-4 py-3 flex items-center justify-between">
                <h2 className="text-sm font-bold tracking-widest text-pink-400">
                  <span className="text-cyan-400">02.</span> PAYMENT_CREDS
                </h2>
                <span className="text-xs text-pink-600">[ENCRYPTED]</span>
              </div>
              <div className="p-6 space-y-4">
                {/* Payment Methods */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <button className="p-3 border-2 border-cyan-400 bg-cyan-400/10 text-cyan-400 text-xs font-bold tracking-wider shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                    CREDIT_CHIP
                  </button>
                  <button className="p-3 border border-pink-800 text-pink-600 text-xs font-bold tracking-wider hover:border-pink-400 hover:text-pink-400 transition-colors">
                    CRYPTO_CRED
                  </button>
                  <button className="p-3 border border-pink-800 text-pink-600 text-xs font-bold tracking-wider hover:border-pink-400 hover:text-pink-400 transition-colors">
                    NEURO_PAY
                  </button>
                </div>

                <div>
                  <label className="block text-xs text-pink-600 mb-2 tracking-wider">CARD_NUMBER</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-pink-950/30 border border-pink-800 text-pink-300 placeholder-pink-700 focus:outline-none focus:border-pink-400 focus:shadow-[0_0_10px_rgba(255,0,128,0.3)] transition-all"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-pink-600 mb-2 tracking-wider">EXPIRY</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-pink-950/30 border border-pink-800 text-pink-300 placeholder-pink-700 focus:outline-none focus:border-pink-400 focus:shadow-[0_0_10px_rgba(255,0,128,0.3)] transition-all"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-pink-600 mb-2 tracking-wider">SEC_CODE</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-pink-950/30 border border-pink-800 text-pink-300 placeholder-pink-700 focus:outline-none focus:border-pink-400 focus:shadow-[0_0_10px_rgba(255,0,128,0.3)] transition-all"
                      placeholder="***"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-pink-600 mb-2 tracking-wider">HOLDER_ID</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-pink-950/30 border border-pink-800 text-pink-300 placeholder-pink-700 focus:outline-none focus:border-pink-400 focus:shadow-[0_0_10px_rgba(255,0,128,0.3)] transition-all"
                    placeholder="Registered identity..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="border border-cyan-900 bg-black/80 backdrop-blur lg:sticky lg:top-8 relative">
              <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400"></div>
              <div className="border-b border-cyan-900/50 px-4 py-3">
                <h2 className="text-sm font-bold tracking-widest">ORDER_MANIFEST</h2>
              </div>

              {/* Items */}
              <div className="p-4 space-y-4 border-b border-cyan-900/50">
                <div className="flex gap-4">
                  <div className="w-16 h-16 border border-cyan-700 bg-gradient-to-br from-cyan-900/50 to-pink-900/50 flex items-center justify-center">
                    <span className="text-2xl">&#9881;</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-cyan-300 font-bold text-sm">NEURAL_IMPLANT_X7</h3>
                    <p className="text-xs text-cyan-600">v2.1 / Chrome</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-pink-500">QTY: 1</span>
                      <span className="text-cyan-300 font-bold">$2,499.00</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 border border-cyan-700 bg-gradient-to-br from-pink-900/50 to-cyan-900/50 flex items-center justify-center">
                    <span className="text-2xl">&#9889;</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-cyan-300 font-bold text-sm">POWER_CELL_PACK</h3>
                    <p className="text-xs text-cyan-600">10000mAh / Fusion</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-pink-500">QTY: 3</span>
                      <span className="text-cyan-300 font-bold">$447.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo */}
              <div className="p-4 border-b border-cyan-900/50">
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 bg-cyan-950/30 border border-cyan-800 text-cyan-300 placeholder-cyan-700 text-sm focus:outline-none focus:border-cyan-400"
                    placeholder="PROMO_CODE"
                  />
                  <button className="px-4 py-2 border border-pink-500 text-pink-400 text-xs font-bold tracking-wider hover:bg-pink-500/20 transition-colors">
                    APPLY
                  </button>
                </div>
              </div>

              {/* Totals */}
              <div className="p-4 space-y-2 border-b border-cyan-900/50 text-sm">
                <div className="flex justify-between">
                  <span className="text-cyan-600">SUBTOTAL</span>
                  <span className="text-cyan-300">$2,946.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-600">SHIPPING</span>
                  <span className="text-cyan-300">$50.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-600">TAX</span>
                  <span className="text-cyan-300">$239.68</span>
                </div>
              </div>

              <div className="p-4 flex justify-between items-center bg-gradient-to-r from-cyan-950/50 to-pink-950/50">
                <span className="font-bold tracking-wider">TOTAL_DUE</span>
                <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text">
                  $3,235.68
                </span>
              </div>

              <div className="p-4">
                <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold tracking-widest hover:from-cyan-400 hover:to-pink-400 transition-all shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:shadow-[0_0_40px_rgba(255,0,128,0.5)]">
                  EXECUTE_TRANSACTION
                </button>
                <div className="mt-4 text-center text-xs text-cyan-700">
                  <span className="text-pink-500">&#9733;</span> QUANTUM_ENCRYPTED <span className="text-pink-500">&#9733;</span> ZERO_TRACE
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
