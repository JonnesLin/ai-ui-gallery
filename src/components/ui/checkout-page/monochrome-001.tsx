export default function MonochromeCheckoutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 space-y-8">
            <section className="border-2 border-black p-6 sm:p-8 bg-white">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-black">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-xl font-bold">Contact Details</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </section>

            <section className="border-2 border-black p-6 sm:p-8 bg-gray-100">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-black">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-xl font-bold">Shipping Address</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300 bg-white"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300 bg-white"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300 bg-white"
                      placeholder="NY"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300 bg-white"
                      placeholder="10001"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300 bg-white"
                      placeholder="USA"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="border-2 border-black p-6 sm:p-8 bg-white">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-black">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold">
                  3
                </div>
                <h2 className="text-xl font-bold">Payment Information</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button className="px-6 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-colors">
                    Card
                  </button>
                  <button className="px-6 py-3 border-2 border-black font-bold hover:bg-gray-100 transition-colors">
                    PayPal
                  </button>
                  <button className="px-6 py-3 border-2 border-black font-bold hover:bg-gray-100 transition-colors">
                    Bank
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                      Expiry
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </section>

            <button className="w-full py-5 bg-black text-white text-lg font-bold hover:bg-gray-800 transition-colors">
              COMPLETE ORDER
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="border-2 border-black p-6 sm:p-8 bg-gray-50 lg:sticky lg:top-8">
              <h2 className="text-xl font-bold mb-8 pb-6 border-b-2 border-black">
                Order Summary
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4 pb-6 border-b border-gray-300">
                  <div className="w-24 h-24 border-2 border-black bg-white flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold mb-1">Classic Sneakers</h3>
                    <p className="text-sm text-gray-600 mb-2">White / Size 10</p>
                    <p className="text-base font-bold">$89.00</p>
                  </div>
                  <span className="text-sm font-bold">×2</span>
                </div>

                <div className="flex gap-4 pb-6 border-b border-gray-300">
                  <div className="w-24 h-24 border-2 border-black bg-white flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold mb-1">Cotton T-Shirt</h3>
                    <p className="text-sm text-gray-600 mb-2">Black / Medium</p>
                    <p className="text-base font-bold">$35.00</p>
                  </div>
                  <span className="text-sm font-bold">×1</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 pb-8 border-b-2 border-black">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-bold">$213.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Shipping</span>
                  <span className="font-bold">$12.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Tax</span>
                  <span className="font-bold">$18.00</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold mb-8">
                <span>Total</span>
                <span>$243.00</span>
              </div>

              <div className="mb-8">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="flex-1 px-4 py-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                  />
                  <button className="px-6 py-3 bg-gray-200 border-2 border-black font-bold hover:bg-gray-300 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <div className="pt-8 border-t-2 border-black text-center">
                <p className="text-xs font-bold uppercase tracking-wider">
                  Secure Checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
