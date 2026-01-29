export default function MonochromeFooter() {
  return (
    <footer className="bg-black text-white border-t-4 border-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <span className="text-black text-2xl font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight">MONOCHROME</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Black and white. Simple and timeless. Focus on content, eliminate distraction.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 border-b border-white pb-2">
              Product
            </h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Security', 'Enterprise', 'Customers'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm block hover:translate-x-1 transition-transform"
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 border-b border-white pb-2">
              Company
            </h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press', 'Partners'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm block hover:translate-x-1 transition-transform"
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 border-b border-white pb-2">
              Resources
            </h4>
            <ul className="space-y-3">
              {['Documentation', 'Help Center', 'Community', 'Contact', 'Status'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm block hover:translate-x-1 transition-transform"
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-b border-white py-8 mb-8">
          <div className="max-w-2xl">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Newsletter</h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-black border-2 border-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              />
              <button className="px-8 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors border-2 border-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MONOCHROME. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {['Twitter', 'GitHub', 'LinkedIn', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label={social}
              >
                <span className="text-xs font-bold">{social.slice(0, 2).toUpperCase()}</span>
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
