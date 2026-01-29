export default function MonochromeContact() {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Monochrome Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">CONTACT</h1>
          <div className="w-32 h-1 bg-black mb-4"></div>
          <p className="text-xl text-gray-700 max-w-2xl">
            Clear communication. Simple forms. Direct connection.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-0 py-3 border-b-2 border-black focus:outline-none bg-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-0 py-3 border-b-2 border-black focus:outline-none bg-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-0 py-3 border-b-2 border-black focus:outline-none bg-transparent"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-3">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-0 py-3 border-b-2 border-black focus:outline-none resize-none bg-transparent"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="px-12 py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider mb-3 text-gray-500">
                Address
              </div>
              <p className="text-lg leading-relaxed">
                100 Monochrome Ave<br />
                Black & White City<br />
                BW 10101
              </p>
            </div>

            <div className="h-px bg-gray-300"></div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider mb-3 text-gray-500">
                Email
              </div>
              <a href="mailto:info@monochrome.design" className="text-lg hover:underline">
                info@monochrome.design
              </a>
            </div>

            <div className="h-px bg-gray-300"></div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider mb-3 text-gray-500">
                Phone
              </div>
              <a href="tel:+15550001111" className="text-lg hover:underline">
                +1 (555) 000-1111
              </a>
            </div>

            <div className="h-px bg-gray-300"></div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider mb-3 text-gray-500">
                Hours
              </div>
              <div className="space-y-1 text-sm">
                <div>Monday - Friday: 9:00 - 18:00</div>
                <div>Saturday: 10:00 - 14:00</div>
                <div>Sunday: Closed</div>
              </div>
            </div>

            <div className="h-px bg-gray-300"></div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider mb-3 text-gray-500">
                Social
              </div>
              <div className="space-y-2">
                <a href="#" className="block hover:underline">Twitter</a>
                <a href="#" className="block hover:underline">LinkedIn</a>
                <a href="#" className="block hover:underline">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 pt-12 border-t-2 border-black">
          <blockquote className="text-2xl md:text-3xl font-light italic text-gray-700">
            "Simplicity is the ultimate sophistication."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
