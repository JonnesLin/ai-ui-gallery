export default function LuxuryCheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight mb-4">
            Complete Your Order
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-8">
            <section className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/40 border border-amber-900/20 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full border-2 border-amber-500 flex items-center justify-center">
                  <span className="text-sm font-semibold">1</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif">Contact Information</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-100/60 mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/30 border border-amber-900/30 px-4 py-3 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Alexander"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-100/60 mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/30 border border-amber-900/30 px-4 py-3 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Sterling"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-amber-100/60 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black/30 border border-amber-900/30 px-4 py-3 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="alexander.sterling@exclusive.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-amber-100/60 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-black/30 border border-amber-900/30 px-4 py-3 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/40 border border-amber-900/20 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full border-2 border-amber-500 flex items-center justify-center">
                  <span className="text-sm font-semibold">2</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif">Shipping Address</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-amber-100/60 mb-3">
                    Street Address
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/30 border border-amber-900/30 px-4 py-3 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="123 Park Avenue"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-100/60 mb-3">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/30 border border-amber-900/30 px-4 py-3 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-100/60 mb-3">
                      State
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/30 border border-amber-900/30 px-4 py-3 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="NY"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-100/60 mb-3">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/30 border border-amber-900/30 px-4 py-3 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="10001"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-100/60 mb-3">
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/30 border border-amber-900/30 px-4 py-3 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="United States"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/40 border border-amber-900/20 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full border-2 border-amber-500 flex items-center justify-center">
                  <span className="text-sm font-semibold">3</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif">Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <button className="px-6 py-4 bg-amber-600 text-black font-medium hover:bg-amber-500 transition-colors">
                  Credit Card
                </button>
                <button className="px-6 py-4 border border-amber-900/30 hover:border-amber-500 transition-colors">
                  PayPal
                </button>
                <button className="px-6 py-4 border border-amber-900/30 hover:border-amber-500 transition-colors">
                  Wire Transfer
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-amber-100/60 mb-3">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/30 border border-amber-900/30 px-4 py-3 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="•••• •••• •••• ••••"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-100/60 mb-3">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/30 border border-amber-900/30 px-4 py-3 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-100/60 mb-3">
                      Security Code
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/30 border border-amber-900/30 px-4 py-3 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/40 border border-amber-900/20 backdrop-blur-sm p-6 sm:p-8 lg:sticky lg:top-8">
              <h2 className="text-2xl font-serif mb-8 pb-6 border-b border-amber-900/30">
                Order Summary
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4 pb-6 border-b border-amber-900/20">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-900/30 to-black border border-amber-900/40 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg mb-1">Swiss Chronograph</h3>
                    <p className="text-sm text-amber-100/50 mb-2">18K Rose Gold</p>
                    <p className="text-lg text-amber-100">$42,500.00</p>
                  </div>
                  <span className="text-sm text-amber-100/50">×1</span>
                </div>

                <div className="flex gap-4 pb-6 border-b border-amber-900/20">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-900/30 to-black border border-amber-900/40 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg mb-1">Leather Briefcase</h3>
                    <p className="text-sm text-amber-100/50 mb-2">Italian Calfskin</p>
                    <p className="text-lg text-amber-100">$3,200.00</p>
                  </div>
                  <span className="text-sm text-amber-100/50">×1</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 pb-8 border-b border-amber-900/30">
                <div className="flex justify-between text-sm">
                  <span className="text-amber-100/60">Subtotal</span>
                  <span>$45,700.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-amber-100/60">Express Shipping</span>
                  <span>Complimentary</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-amber-100/60">Tax</span>
                  <span>$3,656.00</span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-serif mb-8">
                <span>Total</span>
                <span className="text-amber-100">$49,356.00</span>
              </div>

              <div className="mb-8">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Gift card or promo code"
                    className="flex-1 bg-black/30 border border-amber-900/30 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
                  />
                  <button className="px-6 text-sm uppercase tracking-widest text-amber-500 hover:text-amber-400 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <button className="w-full py-5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-400 hover:to-amber-500 text-black font-serif text-lg tracking-wide transition-all duration-300">
                Complete Purchase
              </button>

              <div className="mt-8 pt-8 border-t border-amber-900/30 text-center">
                <p className="text-xs uppercase tracking-widest text-amber-100/40">
                  Secure encrypted transaction
                </p>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="w-8 h-8 bg-amber-900/30 border border-amber-900/40"></div>
                  <div className="w-8 h-8 bg-amber-900/30 border border-amber-900/40"></div>
                  <div className="w-8 h-8 bg-amber-900/30 border border-amber-900/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
