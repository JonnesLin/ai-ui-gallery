export default function FlatFooter() {
  return (
    <footer className="bg-white">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              {/* Simple Flat Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">F</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">FLAT</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Simple, clean, and minimalist design. No shadows, no gradients, just pure content focus.
            </p>
            {/* Color Bar Decoration */}
            <div className="flex gap-2">
              <div className="w-16 h-1 bg-blue-500" />
              <div className="w-16 h-1 bg-green-500" />
              <div className="w-16 h-1 bg-yellow-500" />
              <div className="w-16 h-1 bg-red-500" />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wide">
              Product
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Features', color: 'blue' },
                { name: 'Pricing', color: 'green' },
                { name: 'Security', color: 'yellow' },
                { name: 'Enterprise', color: 'red' },
                { name: 'Customers', color: 'purple' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    className={`text-gray-600 hover:text-${item.color}-500 transition-colors flex items-center gap-2 group`}
                  >
                    <span className={`w-2 h-2 bg-${item.color}-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'About', color: 'blue' },
                { name: 'Blog', color: 'green' },
                { name: 'Careers', color: 'yellow' },
                { name: 'Press', color: 'red' },
                { name: 'Partners', color: 'purple' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    className={`text-gray-600 hover:text-${item.color}-500 transition-colors flex items-center gap-2 group`}
                  >
                    <span className={`w-2 h-2 bg-${item.color}-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wide">
              Resources
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Documentation', color: 'blue' },
                { name: 'Help Center', color: 'green' },
                { name: 'Community', color: 'yellow' },
                { name: 'Contact', color: 'red' },
                { name: 'Status', color: 'purple' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    className={`text-gray-600 hover:text-${item.color}-500 transition-colors flex items-center gap-2 group`}
                  >
                    <span className={`w-2 h-2 bg-${item.color}-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section - Flat Card */}
        <div className="mb-16">
          <div className="bg-gray-100 p-8 md:p-12 rounded-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Stay Updated
                  </h3>
                  <p className="text-gray-600">
                    Subscribe to our newsletter for the latest updates and insights.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <p className="text-gray-500 text-sm order-3 lg:order-1">
              © {new Date().getFullYear()} Flat Design Co. All rights reserved.
            </p>

            {/* Social Icons - Flat Colored Buttons */}
            <div className="flex gap-3 order-1 lg:order-2">
              {[
                { name: 'Twitter', icon: 'TW', color: 'bg-blue-400' },
                { name: 'Facebook', icon: 'FB', color: 'bg-blue-600' },
                { name: 'Instagram', icon: 'IG', color: 'bg-pink-500' },
                { name: 'LinkedIn', icon: 'LI', color: 'bg-blue-700' },
                { name: 'GitHub', icon: 'GH', color: 'bg-gray-800' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-11 h-11 ${social.color} rounded-lg flex items-center justify-center text-white font-bold text-xs hover:opacity-80 transition-opacity`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 order-2 lg:order-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Color Strip */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 via-red-500 to-purple-500" />
    </footer>
  );
}
