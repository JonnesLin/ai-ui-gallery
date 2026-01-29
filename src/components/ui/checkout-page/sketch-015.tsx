export default function SketchCheckoutPage() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-8" style={{ fontFamily: 'cursive' }}>
      <div className="max-w-6xl mx-auto">
        {/* Sketchy Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Checkout</span>
            <div className="absolute inset-0 border-4 border-black -rotate-1 -translate-x-1 translate-y-1"></div>
            <div className="absolute inset-0 border-4 border-black rotate-1 translate-x-1 -translate-y-1"></div>
          </h1>
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-3 h-3 border-2 border-black rounded-full bg-black"></div>
            <div className="w-16 h-3 border-2 border-black rounded-full bg-black"></div>
            <div className="w-3 h-3 border-2 border-black rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Info */}
            <div className="relative p-8 border-4 border-black rotate-1">
              <div className="absolute -top-4 left-8 bg-white px-4">
                <h2 className="text-2xl font-bold">Contact Details</h2>
              </div>
              <div className="space-y-6 mt-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                      placeholder="Jane"
                      style={{ borderWidth: '3px' }}
                    />
                    <div className="h-1 bg-black w-full mt-1"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                      placeholder="Sketch"
                      style={{ borderWidth: '3px' }}
                    />
                    <div className="h-1 bg-black w-full mt-1"></div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                    placeholder="jane@sketch.com"
                    style={{ borderWidth: '3px' }}
                  />
                  <div className="h-1 bg-black w-full mt-1"></div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="relative p-8 border-4 border-black -rotate-1">
              <div className="absolute -top-4 left-8 bg-white px-4">
                <h2 className="text-2xl font-bold">Shipping Address</h2>
              </div>
              <div className="space-y-6 mt-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Street Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                    placeholder="123 Doodle Lane"
                    style={{ borderWidth: '3px' }}
                  />
                  <div className="h-1 bg-black w-full mt-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                      placeholder="Austin"
                      style={{ borderWidth: '3px' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                      placeholder="TX"
                      style={{ borderWidth: '3px' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">ZIP</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                      placeholder="73301"
                      style={{ borderWidth: '3px' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="relative p-8 border-4 border-black rotate-1">
              <div className="absolute -top-4 left-8 bg-white px-4">
                <h2 className="text-2xl font-bold">Payment Info</h2>
              </div>
              <div className="space-y-6 mt-4">
                <div className="flex gap-4">
                  <button className="flex-1 py-3 px-6 border-4 border-black bg-black text-white font-bold transform -rotate-1 hover:rotate-0 transition-transform">
                    Credit Card
                  </button>
                  <button className="flex-1 py-3 px-6 border-4 border-black font-bold transform rotate-1 hover:rotate-0 transition-transform">
                    PayPal
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                    placeholder="1234 5678 9012 3456"
                    style={{ borderWidth: '3px' }}
                  />
                  <div className="h-1 bg-black w-full mt-1"></div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Expiry</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                      placeholder="MM/YY"
                      style={{ borderWidth: '3px' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-3 border-black focus:outline-none focus:ring-4 focus:ring-gray-300"
                      placeholder="123"
                      style={{ borderWidth: '3px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="relative p-8 border-4 border-black -rotate-1 bg-yellow-50 sticky top-8">
              <div className="absolute -top-4 left-8 bg-white px-4">
                <h2 className="text-2xl font-bold">Your Order</h2>
              </div>

              <div className="space-y-6 mt-4">
                <div className="p-4 border-3 border-black bg-white" style={{ borderWidth: '3px' }}>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 border-3 border-black bg-gray-100" style={{ borderWidth: '3px' }}></div>
                    <div className="flex-1">
                      <h3 className="font-bold">Sketch Pad</h3>
                      <p className="text-sm">A4 Size</p>
                      <p className="font-bold mt-1">$12.99</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-3 border-black bg-white" style={{ borderWidth: '3px' }}>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 border-3 border-black bg-gray-100" style={{ borderWidth: '3px' }}></div>
                    <div className="flex-1">
                      <h3 className="font-bold">Pencil Set</h3>
                      <p className="text-sm">12 pieces</p>
                      <p className="font-bold mt-1">$8.99</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t-4 border-dashed border-black space-y-2">
                  <div className="flex justify-between font-bold">
                    <span>Subtotal:</span>
                    <span>$21.98</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Shipping:</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Tax:</span>
                    <span>$2.16</span>
                  </div>
                </div>

                <div className="pt-4 border-t-4 border-black flex justify-between text-2xl font-bold">
                  <span>Total:</span>
                  <span>$29.14</span>
                </div>

                <div className="pt-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="flex-1 px-4 py-2 border-3 border-black focus:outline-none"
                      style={{ borderWidth: '3px' }}
                    />
                    <button className="px-4 py-2 border-3 border-black bg-white font-bold hover:bg-black hover:text-white transition-colors" style={{ borderWidth: '3px' }}>
                      OK
                    </button>
                  </div>
                </div>

                <button className="w-full py-4 border-4 border-black bg-black text-white font-bold text-lg transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all">
                  Place Order
                </button>

                <div className="text-center">
                  <svg className="w-full h-8" viewBox="0 0 200 30">
                    <path
                      d="M 10 15 Q 40 5, 70 15 T 130 15 Q 160 25, 190 15"
                      stroke="black"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>
                  <p className="text-xs font-bold mt-2">Secure Checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
