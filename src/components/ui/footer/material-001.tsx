export default function MaterialFooter() {
  return (
    <footer className="bg-white">
      {/* Main Content with Material Elevation */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section - Elevated Card */}
        <div className="bg-white rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)] p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                {/* Material Logo with Elevation */}
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-600 rounded shadow-[0_4px_8px_rgba(63,81,181,0.3)] flex items-center justify-center">
                    <span className="text-white text-2xl font-medium">M</span>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900">Material</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Beautiful, intuitive design system inspired by material design principles.
              </p>
              {/* Material Divider */}
              <div className="w-12 h-1 bg-indigo-600 rounded-full" />
            </div>

            {/* Products */}
            <div>
              <h4 className="text-gray-900 font-medium mb-6 text-sm uppercase tracking-wider">
                Products
              </h4>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'Security', 'Enterprise', 'Integrations'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-indigo-600 group-hover:w-4 transition-all mr-0 group-hover:mr-2" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-gray-900 font-medium mb-6 text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-4">
                {['About Us', 'Blog', 'Careers', 'Press', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-indigo-600 group-hover:w-4 transition-all mr-0 group-hover:mr-2" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-gray-900 font-medium mb-6 text-sm uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-4">
                {['Documentation', 'Help Center', 'Community', 'API Reference', 'Status'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-indigo-600 group-hover:w-4 transition-all mr-0 group-hover:mr-2" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Material Card with Higher Elevation */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.15),0_12px_24px_rgba(63,81,181,0.2)] p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-3 text-white">
                  <h3 className="text-2xl font-medium">
                    Stay Connected
                  </h3>
                  <p className="text-indigo-100">
                    Get the latest updates, articles, and resources delivered to your inbox.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white text-gray-900 rounded shadow-[0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none focus:shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-shadow"
                  />
                  <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)] active:shadow-[0_1px_2px_rgba(0,0,0,0.15)] transition-all whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Subtle Elevation */}
        <div className="bg-gray-50 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Material Design Co. All rights reserved.
            </p>

            {/* Social Icons - Material Ripple Effect */}
            <div className="flex gap-2">
              {[
                { name: 'Twitter', icon: 'TW', color: 'indigo' },
                { name: 'Facebook', icon: 'FB', color: 'blue' },
                { name: 'LinkedIn', icon: 'LI', color: 'indigo' },
                { name: 'GitHub', icon: 'GH', color: 'gray' },
                { name: 'YouTube', icon: 'YT', color: 'red' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 bg-${social.color}-600 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] active:shadow-[0_1px_2px_rgba(0,0,0,0.2)] flex items-center justify-center text-white font-medium text-xs transition-all transform hover:scale-105 active:scale-95`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms', 'Cookies'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 text-sm transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Material Bottom Elevation Shadow */}
      <div className="h-1 bg-gradient-to-b from-gray-100 to-transparent" />
    </footer>
  );
}
