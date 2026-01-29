export default function MinimalistContact() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div>
          <h1 className="text-4xl font-light mb-2 text-gray-900">Get in Touch</h1>
          <p className="text-gray-500 mb-12">We'd love to hear from you</p>

          <form className="space-y-8">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-300 py-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 py-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border-b border-gray-300 py-3 focus:border-gray-900 outline-none transition-colors resize-none bg-transparent"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-sm font-medium text-gray-400 mb-4">ADDRESS</h2>
            <p className="text-gray-900 leading-relaxed">
              123 Design Street<br />
              San Francisco, CA 94102<br />
              United States
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-400 mb-4">CONTACT</h2>
            <p className="text-gray-900">+1 (555) 123-4567</p>
            <p className="text-gray-900">hello@minimal.design</p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-400 mb-4">FOLLOW</h2>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
