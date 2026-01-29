export default function NeumorphismContact() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Get In Touch</h1>
          <p className="text-gray-600">We're here to help and answer any question you might have</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-gray-200 rounded-3xl p-8 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-3">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-200 rounded-xl shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff] focus:outline-none text-gray-800"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-3">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-200 rounded-xl shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff] focus:outline-none text-gray-800"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-3">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-200 rounded-xl shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff] focus:outline-none text-gray-800"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-3">Your Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-200 rounded-xl shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff] focus:outline-none resize-none text-gray-800"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-gray-200 rounded-xl shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#b8b8b8,-2px_-2px_4px_#ffffff] active:shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff] text-gray-800 font-medium transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-200 rounded-2xl p-6 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]">
              <div className="w-12 h-12 bg-gray-200 rounded-full shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] flex items-center justify-center mb-4">
                <span className="text-gray-700 text-xl">📍</span>
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">Address</h3>
              <p className="text-gray-600 text-sm">123 Soft Street, Design City, DC 12345</p>
            </div>

            <div className="bg-gray-200 rounded-2xl p-6 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]">
              <div className="w-12 h-12 bg-gray-200 rounded-full shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] flex items-center justify-center mb-4">
                <span className="text-gray-700 text-xl">📧</span>
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">Email</h3>
              <p className="text-gray-600 text-sm">hello@neuro.design</p>
            </div>

            <div className="bg-gray-200 rounded-2xl p-6 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]">
              <div className="w-12 h-12 bg-gray-200 rounded-full shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff] flex items-center justify-center mb-4">
                <span className="text-gray-700 text-xl">📞</span>
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
