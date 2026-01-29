export default function LuxuryCheckoutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Elegant Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-4 tracking-tight">Checkout</h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>

        {/* Refined Progress */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-amber-400 mb-3"></div>
                <span className="text-xs uppercase tracking-widest text-amber-400">Details</span>
              </div>
              <div className="w-32 h-px bg-gradient-to-r from-amber-400 to-amber-600"></div>
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-amber-600 mb-3"></div>
                <span className="text-xs uppercase tracking-widest text-amber-600">Payment</span>
              </div>
              <div className="w-32 h-px bg-gradient-to-r from-amber-600 to-gray-800"></div>
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gray-800 mb-3"></div>
                <span className="text-xs uppercase tracking-widest text-gray-500">Confirm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Forms */}
          <div className="space-y-10">
            {/* Personal Information */}
            <div className="border border-amber-900/30 bg-gradient-to-br from-amber-950/20 to-transparent p-10 backdrop-blur-sm">
              <h2 className="text-2xl font-serif mb-8 text-amber-100">Personal Information</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-200/70 mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none transition-colors text-white placeholder-gray-600"
                      placeholder="Alexander"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-200/70 mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none transition-colors text-white placeholder-gray-600"
                      placeholder="Sterling"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-amber-200/70 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none transition-colors text-white placeholder-gray-600"
                    placeholder="alexander@exclusive.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-amber-200/70 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none transition-colors text-white placeholder-gray-600"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="border border-amber-900/30 bg-gradient-to-br from-amber-950/20 to-transparent p-10 backdrop-blur-sm">
              <h2 className="text-2xl font-serif mb-8 text-amber-100">Delivery Address</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-amber-200/70 mb-3">
                    Street Address
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none transition-colors text-white placeholder-gray-600"
                    placeholder="123 Park Avenue"
                  />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <label className="block text-xs uppercase tracking-widest text-amber-200/70 mb-3">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none transition-colors text-white placeholder-gray-600"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-200/70 mb-3">
                      State
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none transition-colors text-white placeholder-gray-600"
                      placeholder="NY"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-200/70 mb-3">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none transition-colors text-white placeholder-gray-600"
                      placeholder="10001"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-200/70 mb-3">
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none transition-colors text-white placeholder-gray-600"
                      placeholder="United States"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="border border-amber-900/30 bg-gradient-to-br from-amber-950/20 to-transparent p-10 backdrop-blur-sm">
              <h2 className="text-2xl font-serif mb-8 text-amber-100">Payment Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-amber-200/70 mb-3">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none transition-colors text-white placeholder-gray-600"
                    placeholder="XXXX XXXX XXXX XXXX"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-200/70 mb-3">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none transition-colors text-white placeholder-gray-600"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-amber-200/70 mb-3">
                      Security Code
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none transition-colors text-white placeholder-gray-600"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="border border-amber-900/30 bg-gradient-to-br from-amber-950/20 to-transparent p-10 backdrop-blur-sm sticky top-8">
              <h2 className="text-2xl font-serif mb-8 text-amber-100">Order Summary</h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-6 pb-6 border-b border-amber-900/30">
                  <div className="w-28 h-28 bg-gradient-to-br from-amber-900/30 to-amber-950/20 border border-amber-900/40"></div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg mb-2">Premium Timepiece</h3>
                    <p className="text-sm text-amber-200/60 mb-3">18K Gold | Limited Edition</p>
                    <p className="text-amber-100">$25,000.00</p>
                  </div>
                </div>
                <div className="flex gap-6 pb-6 border-b border-amber-900/30">
                  <div className="w-28 h-28 bg-gradient-to-br from-amber-900/30 to-amber-950/20 border border-amber-900/40"></div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg mb-2">Leather Wallet</h3>
                    <p className="text-sm text-amber-200/60 mb-3">Italian Calfskin</p>
                    <p className="text-amber-100">$850.00</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8 pb-8 border-b border-amber-900/30">
                <div className="flex justify-between text-sm">
                  <span className="text-amber-200/70">Subtotal</span>
                  <span className="text-white">$25,850.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-amber-200/70">White Glove Delivery</span>
                  <span className="text-white">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-amber-200/70">Tax</span>
                  <span className="text-white">$2,068.00</span>
                </div>
              </div>

              <div className="flex justify-between mb-8 text-xl">
                <span className="font-serif">Total</span>
                <span className="font-serif text-amber-100">$27,918.00</span>
              </div>

              <div className="mb-8">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Exclusive code"
                    className="flex-1 bg-transparent border-b border-amber-900/50 pb-3 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-gray-600"
                  />
                  <button className="text-sm uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <button className="w-full py-5 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-black font-serif text-lg tracking-wide transition-all">
                Confirm Purchase
              </button>

              <p className="text-center text-xs uppercase tracking-widest text-amber-200/50 mt-6">
                Secure & Encrypted Transaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
