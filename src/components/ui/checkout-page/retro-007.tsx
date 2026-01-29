export default function RetroCheckoutPage() {
  return (
    <div className="min-h-screen bg-amber-50 font-serif">
      {/* Header */}
      <header className="bg-amber-900 text-amber-50 py-4 border-b-4 border-amber-950">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
            ~ Checkout ~
          </h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping */}
            <div className="bg-amber-100 border-2 border-amber-800 rounded-sm shadow-[4px_4px_0_0_rgba(120,53,15,0.3)]">
              <div className="bg-amber-800 text-amber-50 px-4 py-3 flex items-center gap-2">
                <span className="text-xl">&#9993;</span>
                <h2 className="font-bold tracking-wide">Shipping Details</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-amber-900 text-sm mb-1 font-semibold">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-amber-50 border-2 border-amber-700 rounded-sm text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 focus:bg-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-900 text-sm mb-1 font-semibold">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-amber-50 border-2 border-amber-700 rounded-sm text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 focus:bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-amber-900 text-sm mb-1 font-semibold">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-amber-50 border-2 border-amber-700 rounded-sm text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-amber-900 text-sm mb-1 font-semibold">Street Address</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-amber-50 border-2 border-amber-700 rounded-sm text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 focus:bg-white"
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-amber-900 text-sm mb-1 font-semibold">City</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-amber-50 border-2 border-amber-700 rounded-sm text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 focus:bg-white"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-900 text-sm mb-1 font-semibold">State</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-amber-50 border-2 border-amber-700 rounded-sm text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 focus:bg-white"
                      placeholder="NY"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-900 text-sm mb-1 font-semibold">ZIP Code</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-amber-50 border-2 border-amber-700 rounded-sm text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 focus:bg-white"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-amber-100 border-2 border-amber-800 rounded-sm shadow-[4px_4px_0_0_rgba(120,53,15,0.3)]">
              <div className="bg-amber-800 text-amber-50 px-4 py-3 flex items-center gap-2">
                <span className="text-xl">&#128179;</span>
                <h2 className="font-bold tracking-wide">Payment Information</h2>
              </div>
              <div className="p-6 space-y-4">
                {/* Card Types */}
                <div className="flex gap-4 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="cardType" defaultChecked className="accent-amber-800" />
                    <span className="text-amber-900 font-semibold">Visa</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="cardType" className="accent-amber-800" />
                    <span className="text-amber-900 font-semibold">Mastercard</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="cardType" className="accent-amber-800" />
                    <span className="text-amber-900 font-semibold">Amex</span>
                  </label>
                </div>

                <div>
                  <label className="block text-amber-900 text-sm mb-1 font-semibold">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-amber-50 border-2 border-amber-700 rounded-sm text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 focus:bg-white font-mono"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-amber-900 text-sm mb-1 font-semibold">Expiration</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-amber-50 border-2 border-amber-700 rounded-sm text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 focus:bg-white"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-900 text-sm mb-1 font-semibold">Security Code</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-amber-50 border-2 border-amber-700 rounded-sm text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 focus:bg-white"
                      placeholder="CVV"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-amber-900 text-sm mb-1 font-semibold">Cardholder Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-amber-50 border-2 border-amber-700 rounded-sm text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </div>

            {/* Submit - Mobile */}
            <button className="lg:hidden w-full py-3 bg-amber-800 text-amber-50 font-bold rounded-sm border-2 border-amber-900 shadow-[3px_3px_0_0_rgba(120,53,15,0.5)] hover:bg-amber-900 hover:shadow-[1px_1px_0_0_rgba(120,53,15,0.5)] active:shadow-none transition-all">
              Complete Purchase - $289.95
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-amber-100 border-2 border-amber-800 rounded-sm shadow-[4px_4px_0_0_rgba(120,53,15,0.3)] lg:sticky lg:top-8">
              <div className="bg-amber-800 text-amber-50 px-4 py-3">
                <h2 className="font-bold tracking-wide">Order Summary</h2>
              </div>

              {/* Items */}
              <div className="p-4 space-y-4 border-b-2 border-amber-700">
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-amber-700 rounded-sm flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-amber-900 text-sm">Vintage Radio</h3>
                    <p className="text-amber-700 text-xs">Mahogany / AM/FM</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-amber-700 text-sm">Qty: 1</span>
                      <span className="font-bold text-amber-900">$189.00</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-amber-700 rounded-sm flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-amber-900 text-sm">Record Stand</h3>
                    <p className="text-amber-700 text-xs">Oak / Compact</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-amber-700 text-sm">Qty: 1</span>
                      <span className="font-bold text-amber-900">$59.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo */}
              <div className="p-4 border-b-2 border-amber-700">
                <label className="block text-amber-900 text-sm mb-2 font-semibold">Promotional Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 bg-amber-50 border-2 border-amber-700 rounded-sm text-amber-900 text-sm focus:outline-none focus:border-amber-900"
                    placeholder="Enter code"
                  />
                  <button className="px-4 py-2 bg-amber-700 text-amber-50 text-sm font-bold rounded-sm border-2 border-amber-800 hover:bg-amber-800 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Totals */}
              <div className="p-4 space-y-2 border-b-2 border-amber-700">
                <div className="flex justify-between text-sm text-amber-800">
                  <span>Subtotal</span>
                  <span>$248.00</span>
                </div>
                <div className="flex justify-between text-sm text-amber-800">
                  <span>Shipping</span>
                  <span>$18.00</span>
                </div>
                <div className="flex justify-between text-sm text-amber-800">
                  <span>Tax</span>
                  <span>$23.95</span>
                </div>
              </div>

              <div className="p-4 bg-amber-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-900">Total</span>
                  <span className="text-xl font-bold text-amber-900">$289.95</span>
                </div>
              </div>

              {/* Submit - Desktop */}
              <div className="p-4">
                <button className="hidden lg:block w-full py-3 bg-amber-800 text-amber-50 font-bold rounded-sm border-2 border-amber-900 shadow-[3px_3px_0_0_rgba(120,53,15,0.5)] hover:bg-amber-900 hover:shadow-[1px_1px_0_0_rgba(120,53,15,0.5)] active:shadow-none transition-all">
                  Complete Purchase
                </button>
              </div>

              {/* Trust Badges */}
              <div className="p-4 bg-amber-200 border-t-2 border-amber-700 text-center">
                <p className="text-xs text-amber-800 italic">
                  "Your satisfaction is our guarantee since 1952"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
