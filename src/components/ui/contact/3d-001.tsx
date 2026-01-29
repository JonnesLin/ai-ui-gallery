export default function ThreeDContact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 3D Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black text-indigo-600 mb-4 relative inline-block"
              style={{
                textShadow: '4px 4px 0px #c084fc, 8px 8px 0px #ec4899'
              }}>
            CONTACT US
          </h1>
          <p className="text-xl text-purple-600 font-semibold">Step into our dimension</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form with 3D effects */}
          <div className="bg-white rounded-2xl p-8 relative transform hover:translate-y-[-4px] transition-transform"
               style={{
                 boxShadow: '8px 8px 0px #c084fc, 16px 16px 0px #ec4899'
               }}>
            <h2 className="text-3xl font-bold text-indigo-600 mb-8">Get in Touch</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-indigo-900 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-indigo-50 border-3 border-indigo-600 rounded-lg focus:outline-none transform focus:translate-x-[-2px] focus:translate-y-[-2px] transition-transform"
                  style={{
                    boxShadow: '4px 4px 0px #4f46e5'
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-indigo-900 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-purple-50 border-3 border-purple-600 rounded-lg focus:outline-none transform focus:translate-x-[-2px] focus:translate-y-[-2px] transition-transform"
                  style={{
                    boxShadow: '4px 4px 0px #9333ea'
                  }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-indigo-900 font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-pink-50 border-3 border-pink-600 rounded-lg focus:outline-none resize-none transform focus:translate-x-[-2px] focus:translate-y-[-2px] transition-transform"
                  style={{
                    boxShadow: '4px 4px 0px #db2777'
                  }}
                  placeholder="Tell us what you're thinking..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg transform hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform"
                style={{
                  boxShadow: '6px 6px 0px #ec4899'
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Cards with 3D effects */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-2xl p-6 transform hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform"
                 style={{
                   boxShadow: '6px 6px 0px #4f46e5, 12px 12px 0px #3730a3'
                 }}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                     style={{
                       boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                     }}>
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Location</h3>
                  <p className="text-indigo-100">
                    3D Plaza, Suite 300<br />
                    Depth City, DC 30000<br />
                    Third Dimension
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 transform hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform"
                 style={{
                   boxShadow: '6px 6px 0px #9333ea, 12px 12px 0px #7e22ce'
                 }}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                     style={{
                       boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                     }}>
                  📧
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-purple-100 text-lg">contact@3d.design</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl p-6 transform hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform"
                 style={{
                   boxShadow: '6px 6px 0px #ec4899, 12px 12px 0px #db2777'
                 }}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                     style={{
                       boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                     }}>
                  📱
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-pink-100 text-lg">+1 (555) 3D3-D3D3</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 transform hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform"
                 style={{
                   boxShadow: '6px 6px 0px #3b82f6, 12px 12px 0px #2563eb'
                 }}>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transform hover:translate-y-[-2px] transition-transform"
                   style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}>
                  <span className="text-blue-600 font-bold">T</span>
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transform hover:translate-y-[-2px] transition-transform"
                   style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}>
                  <span className="text-blue-600 font-bold">L</span>
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transform hover:translate-y-[-2px] transition-transform"
                   style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}>
                  <span className="text-blue-600 font-bold">I</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3D floating elements decoration */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transform hover:scale-110 transition-transform"
               style={{
                 boxShadow: '6px 6px 0px #4f46e5, 12px 12px 0px #ec4899'
               }}>
            We're here to help!
          </div>
        </div>
      </div>
    </div>
  );
}
