export default function NeumorphismCheckoutPage() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">Checkout</h1>
          <p className="text-gray-500 mt-2">Complete your order</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <div className="rounded-2xl p-6 sm:p-8 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]">
              <h2 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center text-gray-600">
                  1
                </span>
                Shipping Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff] transition-shadow"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff] transition-shadow"
                    placeholder="Doe"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff] transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-gray-600 mb-2">Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff] transition-shadow"
                    placeholder="123 Main Street"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">City</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff] transition-shadow"
                    placeholder="New York"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff] transition-shadow"
                      placeholder="NY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">ZIP</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff] transition-shadow"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="rounded-2xl p-6 sm:p-8 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]">
              <h2 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center text-gray-600">
                  2
                </span>
                Payment Method
              </h2>

              {/* Card Selection */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 py-3 px-4 rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff] text-gray-700 font-medium transition-all">
                  Credit Card
                </button>
                <button className="flex-1 py-3 px-4 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] text-gray-500 font-medium hover:shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff] transition-all">
                  PayPal
                </button>
                <button className="flex-1 py-3 px-4 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] text-gray-500 font-medium hover:shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff] transition-all">
                  Apple Pay
                </button>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff] transition-shadow"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Expiry</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff] transition-shadow"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">CVC</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff] transition-shadow"
                      placeholder="123"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Name on Card</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-[inset_6px_6px_12px_#b8bcc2,inset_-6px_-6px_12px_#ffffff] transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </div>

            {/* Place Order Button - Mobile */}
            <button className="w-full lg:hidden py-4 rounded-xl bg-[#e0e5ec] shadow-[6px_6px_12px_#b8bcc2,-6px_-6px_12px_#ffffff] text-gray-700 font-semibold hover:shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] transition-shadow">
              Place Order - $347.52
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl p-6 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] lg:sticky lg:top-8">
              <h2 className="text-lg font-semibold text-gray-700 mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff]"></div>
                  <div className="flex-1">
                    <h3 className="text-gray-700 font-medium">Smart Watch</h3>
                    <p className="text-gray-500 text-sm">Silver / 42mm</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-gray-500 text-sm">x1</span>
                      <span className="text-gray-700 font-medium">$249.00</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff]"></div>
                  <div className="flex-1">
                    <h3 className="text-gray-700 font-medium">Watch Band</h3>
                    <p className="text-gray-500 text-sm">Leather / Black</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-gray-500 text-sm">x1</span>
                      <span className="text-gray-700 font-medium">$49.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 px-4 py-2 rounded-lg bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff] text-gray-700 placeholder-gray-400 text-sm focus:outline-none"
                    placeholder="Discount code"
                  />
                  <button className="px-4 py-2 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#b8bcc2,-3px_-3px_6px_#ffffff] text-gray-600 text-sm font-medium hover:shadow-[inset_2px_2px_4px_#b8bcc2,inset_-2px_-2px_4px_#ffffff] transition-shadow">
                    Apply
                  </button>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-3 pt-4 border-t border-gray-300">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>$298.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>$15.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>$34.52</span>
                </div>
              </div>

              <div className="flex justify-between text-gray-800 font-bold text-lg mt-4 pt-4 border-t border-gray-300">
                <span>Total</span>
                <span>$347.52</span>
              </div>

              {/* Place Order Button - Desktop */}
              <button className="hidden lg:block w-full mt-6 py-4 rounded-xl bg-[#e0e5ec] shadow-[6px_6px_12px_#b8bcc2,-6px_-6px_12px_#ffffff] text-gray-700 font-semibold hover:shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] transition-shadow">
                Place Order
              </button>

              <p className="text-center text-gray-500 text-xs mt-4">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
