export default function BrutalistCheckoutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <header className="border-b-4 border-black py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">CHECKOUT</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Forms */}
          <div className="lg:col-span-8 space-y-8">
            {/* Shipping */}
            <section className="border-4 border-black">
              <div className="bg-black text-white p-4">
                <h2 className="text-xl font-black uppercase">01 // SHIPPING</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold mb-2 tracking-wider">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:bg-yellow-300 transition-colors uppercase"
                      placeholder="JOHN"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold mb-2 tracking-wider">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:bg-yellow-300 transition-colors uppercase"
                      placeholder="DOE"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold mb-2 tracking-wider">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:bg-yellow-300 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold mb-2 tracking-wider">Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:bg-yellow-300 transition-colors uppercase"
                    placeholder="123 MAIN STREET"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label className="block text-xs uppercase font-bold mb-2 tracking-wider">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:bg-yellow-300 transition-colors uppercase"
                      placeholder="NYC"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold mb-2 tracking-wider">State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:bg-yellow-300 transition-colors uppercase"
                      placeholder="NY"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold mb-2 tracking-wider">ZIP</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:bg-yellow-300 transition-colors"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="border-4 border-black">
              <div className="bg-black text-white p-4">
                <h2 className="text-xl font-black uppercase">02 // PAYMENT</h2>
              </div>
              <div className="p-6 space-y-4">
                {/* Payment Method Selection */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <button className="p-4 border-4 border-black bg-yellow-300 font-bold uppercase text-sm hover:bg-yellow-400 transition-colors">
                    CARD
                  </button>
                  <button className="p-4 border-4 border-black bg-white font-bold uppercase text-sm hover:bg-gray-100 transition-colors">
                    PAYPAL
                  </button>
                  <button className="p-4 border-4 border-black bg-white font-bold uppercase text-sm hover:bg-gray-100 transition-colors">
                    CRYPTO
                  </button>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold mb-2 tracking-wider">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:bg-yellow-300 transition-colors"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold mb-2 tracking-wider">Expiry</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:bg-yellow-300 transition-colors"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold mb-2 tracking-wider">CVC</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:bg-yellow-300 transition-colors"
                      placeholder="123"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold mb-2 tracking-wider">Name on Card</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:bg-yellow-300 transition-colors uppercase"
                    placeholder="JOHN DOE"
                  />
                </div>
              </div>
            </section>

            {/* Submit Button - Mobile */}
            <button className="lg:hidden w-full py-4 bg-black text-white text-xl font-black uppercase border-4 border-black hover:bg-yellow-300 hover:text-black transition-colors">
              PAY $427.00 NOW
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="border-4 border-black lg:sticky lg:top-8">
              <div className="bg-yellow-300 p-4 border-b-4 border-black">
                <h2 className="text-xl font-black uppercase">ORDER</h2>
              </div>

              {/* Items */}
              <div className="p-4 space-y-4 border-b-4 border-black">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-black flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-bold uppercase text-sm">BRUTALIST POSTER</h3>
                    <p className="text-xs text-gray-600 mt-1">24X36 / MATTE</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs font-bold">QTY: 2</span>
                      <span className="font-bold">$180.00</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-black flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-bold uppercase text-sm">CONCRETE VASE</h3>
                    <p className="text-xs text-gray-600 mt-1">LARGE / GRAY</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs font-bold">QTY: 1</span>
                      <span className="font-bold">$149.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo */}
              <div className="p-4 border-b-4 border-black">
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border-4 border-black text-sm uppercase placeholder-gray-500 focus:outline-none focus:bg-yellow-300"
                    placeholder="CODE"
                  />
                  <button className="px-4 py-2 bg-black text-white text-sm font-bold uppercase hover:bg-yellow-300 hover:text-black border-4 border-black transition-colors">
                    OK
                  </button>
                </div>
              </div>

              {/* Totals */}
              <div className="p-4 space-y-2 border-b-4 border-black">
                <div className="flex justify-between text-sm">
                  <span className="uppercase">Subtotal</span>
                  <span className="font-bold">$329.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="uppercase">Shipping</span>
                  <span className="font-bold">$25.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="uppercase">Tax</span>
                  <span className="font-bold">$73.00</span>
                </div>
              </div>

              <div className="p-4 bg-black text-white">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-black uppercase">Total</span>
                  <span className="text-2xl font-black">$427.00</span>
                </div>
              </div>

              {/* Submit Button - Desktop */}
              <button className="hidden lg:block w-full py-4 bg-yellow-300 text-black text-lg font-black uppercase border-t-4 border-black hover:bg-white transition-colors">
                COMPLETE ORDER
              </button>

              <div className="p-4 border-t-4 border-black bg-white">
                <p className="text-xs uppercase text-center font-bold tracking-wider">
                  NO REFUNDS // FINAL SALE
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
