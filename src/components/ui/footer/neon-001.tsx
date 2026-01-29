export default function NeonFooter() {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Neon Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="relative inline-block">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500">
                  NEON
                </div>
                <div className="absolute inset-0 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 blur-sm">
                  NEON
                </div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Electrify your digital presence with vibrant neon aesthetics and cutting-edge design.
            </p>
            {/* Neon Line Decoration */}
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
          </div>

          {/* Products */}
          <div>
            <h4 className="text-cyan-400 font-bold mb-6 uppercase tracking-wider text-sm shadow-[0_0_10px_rgba(0,255,255,0.3)]">
              Products
            </h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Security', 'Enterprise', 'Integrations'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-all hover:shadow-[0_0_8px_rgba(0,255,255,0.5)] inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-fuchsia-400 font-bold mb-6 uppercase tracking-wider text-sm shadow-[0_0_10px_rgba(255,0,255,0.3)]">
              Company
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-fuchsia-400 transition-all hover:shadow-[0_0_8px_rgba(255,0,255,0.5)] inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-purple-400 font-bold mb-6 uppercase tracking-wider text-sm shadow-[0_0_10px_rgba(168,85,247,0.3)]">
              Support
            </h4>
            <ul className="space-y-3">
              {['Help Center', 'Documentation', 'API Reference', 'Community', 'Status'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-all hover:shadow-[0_0_8px_rgba(168,85,247,0.5)] inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 border-t border-b border-cyan-500/20 py-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              Stay in the Glow
            </h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates and neon-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-black border-2 border-cyan-500/50 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-cyan-500/20">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Neon Digital. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { name: 'Twitter', icon: 'T', color: 'cyan' },
              { name: 'Discord', icon: 'D', color: 'fuchsia' },
              { name: 'GitHub', icon: 'G', color: 'purple' },
              { name: 'Instagram', icon: 'I', color: 'cyan' }
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className={`w-10 h-10 border-2 border-${social.color}-500/50 flex items-center justify-center text-${social.color}-400 hover:bg-${social.color}-500/20 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all`}
                aria-label={social.name}
              >
                <span className="font-bold">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-500 hover:text-cyan-400 text-sm transition-colors hover:shadow-[0_0_8px_rgba(0,255,255,0.3)]"
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
