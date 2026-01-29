export default function NatureLandingPage() {
  return (
    <div className="min-h-screen bg-green-50 text-green-950">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-green-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold text-green-700">EarthCo</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-sm text-green-700 hover:text-green-900 transition-colors">Features</a>
            <a href="#mission" className="text-sm text-green-700 hover:text-green-900 transition-colors">Mission</a>
            <a href="#impact" className="text-sm text-green-700 hover:text-green-900 transition-colors">Impact</a>
          </div>
          <button className="px-5 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors shadow-md">
            Join Us
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-24 px-6 bg-gradient-to-b from-green-100 to-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-green-200 text-green-800 text-sm font-medium rounded-full">
            Growing a Better Future
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-green-900 leading-tight">
            In Harmony with Nature
          </h1>
          <p className="text-lg md:text-xl text-green-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            Build sustainable solutions that work with the earth, not against it. Every choice matters for our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all shadow-lg">
              Start Growing
            </button>
            <button className="px-10 py-4 bg-white text-green-700 font-medium rounded-lg border-2 border-green-300 hover:border-green-400 transition-all shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-green-900">Natural Solutions</h2>
          <p className="text-center text-green-600 mb-16 max-w-xl mx-auto text-lg">
            Inspired by nature's wisdom, designed for sustainability
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Sustainable', desc: 'Renewable resources and eco-friendly practices. Zero waste, maximum impact.', icon: '🌱' },
              { title: 'Organic Growth', desc: 'Natural progression without forcing. Let things develop at their own pace.', icon: '🌿' },
              { title: 'Carbon Positive', desc: 'Not just neutral - we give back more than we take from the earth.', icon: '🌍' },
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-green-100">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-green-900">{feature.title}</h3>
                <p className="text-green-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-900">
                Our Impact
              </h2>
              <p className="text-lg text-green-700 mb-8 leading-relaxed">
                Every product, every decision, every innovation is designed to nurture our planet.
                Together, we're creating a greener tomorrow.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Trees Planted', value: '1M+' },
                  { label: 'Carbon Offset', value: '50K tons' },
                  { label: 'Renewable Energy', value: '100%' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-900">{item.value}</div>
                      <div className="text-sm text-green-600">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '100%', label: 'Renewable', emoji: '♻️' },
              { value: '0', label: 'Waste', emoji: '🌾' },
              { value: '500K+', label: 'Trees', emoji: '🌳' },
              { value: '24/7', label: 'Growing', emoji: '🌸' },
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-3xl font-bold mb-2 text-green-700">{stat.value}</div>
                <div className="text-sm text-green-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-12 text-green-100 max-w-2xl mx-auto leading-relaxed">
            Join our community of earth stewards. Together we can create lasting positive change.
          </p>
          <button className="px-14 py-5 bg-white text-green-700 text-lg font-semibold rounded-lg hover:bg-green-50 transition-all shadow-xl">
            Plant Your Roots
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-green-900 text-green-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-xl font-bold mb-4 text-white">EarthCo</div>
              <p className="text-sm text-green-300 leading-relaxed">
                Growing a sustainable future, one choice at a time.
              </p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Sustainability', 'Impact', 'Roadmap'] },
              { title: 'Company', links: ['About', 'Team', 'Careers', 'Press'] },
              { title: 'Connect', links: ['Community', 'Blog', 'Events', 'Contact'] },
            ].map((column, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4 text-white">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-green-300 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-green-800 text-center">
            <span className="text-sm text-green-400">© 2024 EarthCo. Powered by renewable energy.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
