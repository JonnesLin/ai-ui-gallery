export default function ThreeDFooter() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* 3D Perspective Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(255,255,255,0.05) 25%, transparent 25%),
            linear-gradient(225deg, rgba(255,255,255,0.05) 25%, transparent 25%),
            linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
            linear-gradient(315deg, rgba(255,255,255,0.05) 25%, transparent 25%)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 25px 0, 25px -25px, 0 0'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Content with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand Section - Elevated Card */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.7)] transition-all">
              <div className="space-y-4">
                {/* 3D Logo */}
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-6 opacity-50 blur-sm" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold">
                      3D
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  3D STUDIO
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Elevate your brand with immersive three-dimensional design experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Product Links - 3D Panel */}
          <div className="transform hover:translate-y-[-8px] transition-all duration-300">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-lg shadow-[8px_8px_20px_rgba(0,0,0,0.4)] border-l-4 border-blue-500">
              <h4 className="text-blue-400 font-bold mb-6 uppercase tracking-wider text-sm">
                Products
              </h4>
              <ul className="space-y-3">
                {['3D Modeling', 'Animation', 'Rendering', 'VR/AR', 'Cloud Studio'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all group"
                    >
                      <span className="inline-block transform group-hover:scale-110 transition-transform">▸</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Links - 3D Panel */}
          <div className="transform hover:translate-y-[-8px] transition-all duration-300">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-lg shadow-[8px_8px_20px_rgba(0,0,0,0.4)] border-l-4 border-purple-500">
              <h4 className="text-purple-400 font-bold mb-6 uppercase tracking-wider text-sm">
                Company
              </h4>
              <ul className="space-y-3">
                {['About', 'Team', 'Careers', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all group"
                    >
                      <span className="inline-block transform group-hover:scale-110 transition-transform">▸</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources - 3D Panel */}
          <div className="transform hover:translate-y-[-8px] transition-all duration-300">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-lg shadow-[8px_8px_20px_rgba(0,0,0,0.4)] border-l-4 border-pink-500">
              <h4 className="text-pink-400 font-bold mb-6 uppercase tracking-wider text-sm">
                Resources
              </h4>
              <ul className="space-y-3">
                {['Tutorials', 'Documentation', 'Community', 'Blog', 'Support'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all group"
                    >
                      <span className="inline-block transform group-hover:scale-110 transition-transform">▸</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter - Elevated 3D Card */}
        <div className="mb-12 transform hover:scale-[1.02] transition-all duration-300">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-gray-700">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Join Our 3D Community
              </h3>
              <p className="text-gray-400">
                Get exclusive access to tutorials, assets, and updates from the 3D world.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900 border-2 border-gray-700 text-white rounded focus:outline-none focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.5)] transform hover:translate-y-[-2px] transition-all">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Inset Panel */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] border border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} 3D Studio. All rights reserved.
            </p>

            {/* Social Icons - 3D Buttons */}
            <div className="flex gap-4">
              {['Twitter', 'Discord', 'LinkedIn', 'YouTube'].map((social, idx) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-[4px_4px_10px_rgba(0,0,0,0.4)] hover:shadow-[6px_6px_15px_rgba(0,0,0,0.6)] transform hover:translate-y-[-2px] flex items-center justify-center text-gray-300 hover:text-white transition-all border border-gray-600"
                  aria-label={social}
                  style={{ transform: `perspective(500px) rotateY(${idx * 5}deg)` }}
                >
                  <span className="text-xs font-bold">{social.slice(0, 2)}</span>
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-500 hover:text-white text-sm transition-colors hover:translate-y-[-1px] inline-block"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
