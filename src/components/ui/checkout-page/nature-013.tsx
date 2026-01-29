export default function NatureCheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Organic Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-2">Complete Your Order</h1>
          <p className="text-green-700">Sustainable shopping, delivered with care</p>
        </div>

        {/* Nature Progress */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-green-800">Cart</span>
            </div>
            <div className="flex-1 h-1 bg-green-600 mx-4 rounded-full"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-medium text-green-800">Details</span>
            </div>
            <div className="flex-1 h-1 bg-green-300 mx-4 rounded-full"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-green-200 text-green-600 flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-green-500">Confirm</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-green-900">Contact Information</h2>
              </div>
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-green-50 border border-green-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                      placeholder="River"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-green-50 border border-green-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                      placeholder="Forest"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-800 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-green-50 border border-green-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                    placeholder="river@nature.eco"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-green-900">Delivery Address</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-green-800 mb-2">Street Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-green-50 border border-green-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                    placeholder="123 Meadow Lane"
                  />
                </div>
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-green-50 border border-green-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                      placeholder="Boulder"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-green-50 border border-green-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                      placeholder="CO"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-green-50 border border-green-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                      placeholder="80301"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-green-900">Payment Method</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-green-800 mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-green-50 border border-green-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-green-50 border border-green-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-800 mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-green-50 border border-green-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-green-200 sticky top-8">
              <h2 className="text-xl font-semibold text-green-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-green-200">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-200 to-emerald-300"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">Bamboo Utensils Set</h3>
                    <p className="text-sm text-gray-600 mt-1">Eco-friendly</p>
                    <p className="text-sm font-semibold text-green-700 mt-2">$24.99</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-200 to-teal-300"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">Organic Cotton Tote</h3>
                    <p className="text-sm text-gray-600 mt-1">Natural fiber</p>
                    <p className="text-sm font-semibold text-green-700 mt-2">$18.99</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-green-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">$43.98</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Carbon-neutral Shipping</span>
                  <span className="text-gray-800">$4.99</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-800">$3.92</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-lg font-semibold">
                <span className="text-green-900">Total</span>
                <span className="text-green-900">$52.89</span>
              </div>

              <div className="mb-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-xs text-green-800">
                  <span className="font-semibold">🌱 Carbon Offset:</span> This order plants 3 trees
                </p>
              </div>

              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="flex-1 px-4 py-2 rounded-xl bg-green-50 border border-green-200 focus:border-green-500 focus:outline-none text-sm"
                  />
                  <button className="px-4 py-2 rounded-xl bg-green-600 text-white font-medium text-sm hover:bg-green-700 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg">
                Complete Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
