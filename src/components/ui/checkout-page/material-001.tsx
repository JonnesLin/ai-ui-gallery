export default function MaterialCheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-medium">Checkout</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
                <h2 className="text-lg font-medium text-indigo-900">Shipping Information</h2>
              </div>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent"
                      placeholder="San Francisco"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent"
                      placeholder="CA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent"
                      placeholder="94102"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
                <h2 className="text-lg font-medium text-indigo-900">Payment Method</h2>
              </div>
              <div className="p-6 space-y-5">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-6 py-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-medium">Credit Card</span>
                    </div>
                  </button>
                  <button className="flex-1 px-6 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-medium">PayPal</span>
                    </div>
                  </button>
                  <button className="flex-1 px-6 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-medium">Google Pay</span>
                    </div>
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent"
                      placeholder="123"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-200">
              Place Order
            </button>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden lg:sticky lg:top-6">
              <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
                <h2 className="text-lg font-medium text-indigo-900">Order Summary</h2>
              </div>

              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4 pb-4 border-b border-gray-200">
                    <div className="w-20 h-20 bg-indigo-100 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        Wireless Headphones
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">Black, Premium</p>
                      <p className="text-sm font-medium text-gray-900">$199.00</p>
                    </div>
                    <span className="text-sm text-gray-500">×1</span>
                  </div>

                  <div className="flex gap-4 pb-4 border-b border-gray-200">
                    <div className="w-20 h-20 bg-indigo-100 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        USB-C Cable
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">2 meters, White</p>
                      <p className="text-sm font-medium text-gray-900">$29.00</p>
                    </div>
                    <span className="text-sm text-gray-500">×2</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">$257.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">$8.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">$21.20</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-medium pt-4 border-t-2 border-indigo-600">
                  <span className="text-gray-900">Total</span>
                  <span className="text-indigo-600">$286.20</span>
                </div>

                <div className="pt-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="flex-1 px-4 py-2 border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none transition-colors bg-transparent text-sm"
                    />
                    <button className="px-6 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
