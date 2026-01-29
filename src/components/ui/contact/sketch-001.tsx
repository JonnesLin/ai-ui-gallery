export default function SketchContact() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
      <div className="max-w-6xl mx-auto">
        {/* Hand-drawn style header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 relative inline-block">
            Let's Talk!
            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10">
              <path d="M0,5 Q50,8 100,5 T200,5" stroke="#4F46E5" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </h1>
          <p className="text-xl text-gray-600 mt-6">Drawn together by great ideas</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form - Sketchy style */}
          <div className="relative">
            <div className="absolute inset-0 bg-white transform rotate-1 border-2 border-gray-800 rounded-lg"
                 style={{
                   borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                   borderStyle: 'solid',
                   borderWidth: '2px'
                 }}>
            </div>
            <div className="relative bg-white p-8 border-2 border-gray-800 rounded-lg"
                 style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">Drop me a line</h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-indigo-600 bg-yellow-50/30"
                    style={{ borderRadius: '15px 225px 15px 255px/225px 15px 255px 15px' }}
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-indigo-600 bg-blue-50/30"
                    style={{ borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px' }}
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-indigo-600 resize-none bg-green-50/30"
                    style={{ borderRadius: '15px 255px 15px 225px/255px 15px 225px 15px' }}
                    placeholder="What's on your mind?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-4 border-2 border-gray-800 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  style={{ borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px' }}
                >
                  Send Message ✍️
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info - Sketchy cards */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-100 transform -rotate-1 border-2 border-gray-800"
                   style={{ borderRadius: '15px 255px 15px 225px/255px 15px 225px 15px' }}>
              </div>
              <div className="relative bg-yellow-100 p-6 border-2 border-gray-800"
                   style={{ borderRadius: '15px 255px 15px 225px/255px 15px 225px 15px' }}>
                <div className="text-4xl mb-3">📍</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Our Studio</h3>
                <p className="text-gray-700">
                  123 Sketch Street<br />
                  Art District, AD 12345<br />
                  Creative Land
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-pink-100 transform rotate-1 border-2 border-gray-800"
                   style={{ borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px' }}>
              </div>
              <div className="relative bg-pink-100 p-6 border-2 border-gray-800"
                   style={{ borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px' }}>
                <div className="text-4xl mb-3">📞</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Give us a ring</h3>
                <p className="text-gray-700 text-lg">+1 (555) ART-DRAW</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 transform -rotate-2 border-2 border-gray-800"
                   style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
              </div>
              <div className="relative bg-blue-100 p-6 border-2 border-gray-800"
                   style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
                <div className="text-4xl mb-3">✉️</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Email us</h3>
                <p className="text-gray-700">hello@sketch.art</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-green-100 transform rotate-2 border-2 border-gray-800"
                   style={{ borderRadius: '15px 225px 15px 255px/225px 15px 255px 15px' }}>
              </div>
              <div className="relative bg-green-100 p-6 border-2 border-gray-800"
                   style={{ borderRadius: '15px 225px 15px 255px/225px 15px 255px 15px' }}>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Follow the doodles</h3>
                <div className="flex gap-3 flex-wrap">
                  <a href="#" className="px-4 py-2 bg-white border-2 border-gray-800 font-bold hover:bg-gray-100 transition-colors"
                     style={{ borderRadius: '15px 255px 15px 225px/255px 15px 225px 15px' }}>
                    Twitter
                  </a>
                  <a href="#" className="px-4 py-2 bg-white border-2 border-gray-800 font-bold hover:bg-gray-100 transition-colors"
                     style={{ borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px' }}>
                    Instagram
                  </a>
                  <a href="#" className="px-4 py-2 bg-white border-2 border-gray-800 font-bold hover:bg-gray-100 transition-colors"
                     style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
                    Behance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hand-drawn arrow */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-2">We'd love to hear from you!</p>
          <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto">
            <path d="M10,10 Q20,15 30,30 Q35,40 25,50" stroke="#4F46E5" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M25,50 L20,45 M25,50 L30,48" stroke="#4F46E5" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
