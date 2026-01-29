export default function CorporateLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded" />
            <span className="text-xl font-semibold text-slate-900">Enterprise Corp</span>
          </div>
          <div className="hidden md:flex gap-10">
            <a href="#solutions" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#industries" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Industries</a>
            <a href="#resources" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Resources</a>
            <a href="#about" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">About</a>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2 text-sm text-slate-700 hover:text-blue-600 transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wide rounded-full">
                Industry Leading Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Transform Your Business
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Deliver exceptional results with our enterprise-grade platform. Trusted by Fortune 500 companies worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  Request Demo
                </button>
                <button className="px-8 py-3 border border-slate-300 text-slate-700 font-medium hover:border-slate-400 transition-colors">
                  View Pricing
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-slate-500 mb-8 uppercase tracking-wide">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company, i) => (
              <div key={i} className="flex items-center justify-center h-16 bg-white rounded border border-slate-200">
                <span className="text-slate-400 font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Enterprise Solutions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive tools designed for scalability, security, and performance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Security First', desc: 'Enterprise-grade security with SOC 2 Type II compliance and end-to-end encryption.' },
              { title: 'Scalable Infrastructure', desc: 'Built to grow with your business. Handle millions of transactions seamlessly.' },
              { title: 'Expert Support', desc: 'Dedicated account managers and 24/7 technical support for peace of mind.' },
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Enterprise Clients' },
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '50M+', label: 'Transactions Daily' },
              { value: '150+', label: 'Countries' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-blue-100 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Join leading organizations that trust our platform to drive their business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
              Schedule a Demo
            </button>
            <button className="px-10 py-4 border border-slate-300 text-slate-700 font-semibold hover:border-slate-400 transition-colors">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded" />
                <span className="font-semibold">Enterprise Corp</span>
              </div>
              <p className="text-sm text-slate-400">
                Leading the industry with innovative solutions since 2010.
              </p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Security', 'Roadmap'] },
              { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Compliance', 'Cookies'] },
            ].map((column, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm text-slate-400">© 2024 Enterprise Corp. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
