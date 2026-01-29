export default function SketchCheckoutPage() {
  return (
    <div className="min-h-screen bg-amber-50 p-4 sm:p-8" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-5xl font-bold mb-2 relative z-10 transform -rotate-2">
              Checkout
            </h1>
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-yellow-200 transform rotate-1 -z-10"></div>
          </div>
          <div className="mt-6 flex justify-center">
            <svg width="120" height="12" viewBox="0 0 120 12">
              <path
                d="M5,6 Q20,2 40,6 T80,6 Q100,10 115,6"
                stroke="black"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div
              className="relative p-8 bg-white transform -rotate-1"
              style={{
                border: '3px solid black',
                boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="absolute -top-4 left-8 bg-amber-50 px-4 py-1">
                <h2 className="text-2xl font-bold">1. Your Info</h2>
              </div>

              <div className="space-y-6 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white focus:outline-none"
                      placeholder="Jane"
                      style={{ border: '3px solid black' }}
                    />
                    <div className="h-1 bg-black w-3/4 mt-2 ml-2"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white focus:outline-none"
                      placeholder="Doodle"
                      style={{ border: '3px solid black' }}
                    />
                    <div className="h-1 bg-black w-3/4 mt-2 ml-2"></div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white focus:outline-none"
                    placeholder="jane@sketch.com"
                    style={{ border: '3px solid black' }}
                  />
                  <div className="h-1 bg-black w-3/4 mt-2 ml-2"></div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white focus:outline-none"
                    placeholder="(555) 123-4567"
                    style={{ border: '3px solid black' }}
                  />
                  <div className="h-1 bg-black w-3/4 mt-2 ml-2"></div>
                </div>
              </div>
            </div>

            <div
              className="relative p-8 bg-white transform rotate-1"
              style={{
                border: '3px solid black',
                boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="absolute -top-4 left-8 bg-amber-50 px-4 py-1">
                <h2 className="text-2xl font-bold">2. Where to?</h2>
              </div>

              <div className="space-y-6 mt-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white focus:outline-none"
                    placeholder="123 Sketch Lane"
                    style={{ border: '3px solid black' }}
                  />
                  <div className="h-1 bg-black w-3/4 mt-2 ml-2"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white focus:outline-none"
                      placeholder="Austin"
                      style={{ border: '3px solid black' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white focus:outline-none"
                      placeholder="TX"
                      style={{ border: '3px solid black' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">ZIP</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white focus:outline-none"
                      placeholder="78701"
                      style={{ border: '3px solid black' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative p-8 bg-white transform -rotate-1"
              style={{
                border: '3px solid black',
                boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="absolute -top-4 left-8 bg-amber-50 px-4 py-1">
                <h2 className="text-2xl font-bold">3. Payment</h2>
              </div>

              <div className="space-y-6 mt-4">
                <div className="flex gap-4">
                  <button
                    className="flex-1 py-3 bg-yellow-300 font-bold transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all"
                    style={{
                      border: '3px solid black',
                      boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    Credit Card
                  </button>
                  <button
                    className="flex-1 py-3 bg-white font-bold transform rotate-1 hover:rotate-0 hover:scale-105 transition-all"
                    style={{
                      border: '3px solid black',
                      boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    PayPal
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white focus:outline-none"
                    placeholder="1234 5678 9012 3456"
                    style={{ border: '3px solid black' }}
                  />
                  <div className="h-1 bg-black w-3/4 mt-2 ml-2"></div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Expiry</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white focus:outline-none"
                      placeholder="MM/YY"
                      style={{ border: '3px solid black' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white focus:outline-none"
                      placeholder="123"
                      style={{ border: '3px solid black' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              className="w-full py-5 bg-green-400 text-black text-xl font-bold transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all"
              style={{
                border: '4px solid black',
                boxShadow: '10px 10px 0px rgba(0, 0, 0, 0.3)',
              }}
            >
              Place Order!
            </button>
          </div>

          <div className="lg:col-span-1">
            <div
              className="relative p-6 bg-yellow-100 transform rotate-1 lg:sticky lg:top-8"
              style={{
                border: '3px solid black',
                boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="absolute -top-4 left-6 bg-amber-50 px-4 py-1">
                <h2 className="text-2xl font-bold">Your Cart</h2>
              </div>

              <div className="space-y-6 mt-6">
                <div
                  className="p-4 bg-white"
                  style={{
                    border: '3px solid black',
                    boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div className="flex gap-4">
                    <div
                      className="w-20 h-20 bg-pink-200 flex-shrink-0"
                      style={{ border: '3px solid black' }}
                    ></div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">Sketch Pad</h3>
                      <p className="text-sm mb-2">Large / 100 pages</p>
                      <p className="font-bold">$24.99</p>
                    </div>
                  </div>
                </div>

                <div
                  className="p-4 bg-white"
                  style={{
                    border: '3px solid black',
                    boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div className="flex gap-4">
                    <div
                      className="w-20 h-20 bg-blue-200 flex-shrink-0"
                      style={{ border: '3px solid black' }}
                    ></div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">Color Markers</h3>
                      <p className="text-sm mb-2">Set of 24</p>
                      <p className="font-bold">$18.99</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-y-3" style={{ borderTop: '3px dashed black' }}>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Subtotal:</span>
                    <span>$43.98</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Shipping:</span>
                    <span>$6.00</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Tax:</span>
                    <span>$4.00</span>
                  </div>
                </div>

                <div className="pt-6 flex justify-between text-2xl font-bold" style={{ borderTop: '4px solid black' }}>
                  <span>Total:</span>
                  <span>$53.98</span>
                </div>

                <div className="pt-4">
                  <input
                    type="text"
                    placeholder="Promo code?"
                    className="w-full px-4 py-3 bg-white focus:outline-none text-center font-bold"
                    style={{ border: '3px solid black' }}
                  />
                  <div className="h-1 bg-black w-full mt-2"></div>
                </div>

                <div className="text-center pt-4">
                  <svg className="w-full h-8" viewBox="0 0 200 30">
                    <path
                      d="M10,15 Q30,8 50,15 T90,15 Q110,22 130,15 T170,15 Q185,10 195,15"
                      stroke="black"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                  <p className="text-xs font-bold mt-2 transform -rotate-1">
                    Secure Checkout!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
