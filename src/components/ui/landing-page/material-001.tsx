export default function MaterialLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-medium text-blue-600">Material</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-slate-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About</a>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded shadow-md hover:shadow-lg hover:bg-blue-700 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight text-slate-900">
            Material Design
            <span className="block text-blue-600">Made Simple</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Build beautiful, responsive applications with Google's Material Design principles. Clean, modern, and user-friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white font-medium rounded shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 font-medium rounded shadow-md hover:shadow-lg transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-medium text-center mb-4">Key Features</h2>
          <p className="text-slate-600 text-center mb-16 max-w-xl mx-auto">
            Everything you need to build modern applications
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Responsive Grid', desc: 'Flexible grid system that adapts to any screen size beautifully.', color: 'bg-red-500' },
              { title: 'Material Icons', desc: 'Comprehensive icon library with thousands of symbols to choose from.', color: 'bg-green-500' },
              { title: 'Elevation', desc: 'Depth and hierarchy through shadow and layering principles.', color: 'bg-amber-500' },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-full mb-6 flex items-center justify-center shadow-md`}>
                  <div className="w-6 h-6 bg-white rounded-full" />
                </div>
                <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-medium text-center mb-16">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Components Library', desc: 'Pre-built components following Material Design guidelines', icon: '📦' },
              { title: 'Theme Customization', desc: 'Easy color and style customization for your brand', icon: '🎨' },
              { title: 'Motion & Animation', desc: 'Smooth transitions and meaningful motion', icon: '✨' },
              { title: 'Accessibility', desc: 'WCAG compliant components out of the box', icon: '♿' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-medium text-center mb-16">What Users Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Emma Wilson', role: 'Product Designer', text: 'Clean, intuitive, and beautiful!', avatar: 'bg-pink-500' },
              { name: 'Alex Chen', role: 'Frontend Dev', text: 'Best Material implementation.', avatar: 'bg-purple-500' },
              { name: 'Sarah Kim', role: 'UX Lead', text: 'Our users love the interface.', avatar: 'bg-teal-500' },
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-white rounded-lg shadow-md">
                <p className="text-slate-700 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${testimonial.avatar} rounded-full shadow-md flex items-center justify-center text-white font-medium`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-medium mb-4">Simple Pricing</h2>
          <p className="text-slate-600 mb-12">Choose the plan that works for you</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: '0', features: ['5 Projects', '1GB Storage', 'Community Support'], color: 'bg-slate-600' },
              { name: 'Pro', price: '19', features: ['Unlimited Projects', '50GB Storage', 'Priority Support'], color: 'bg-blue-600', popular: true },
              { name: 'Enterprise', price: '99', features: ['Custom Projects', 'Unlimited Storage', '24/7 Support'], color: 'bg-indigo-600' },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all ${plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="text-xs font-medium text-blue-600 mb-2 uppercase tracking-wide">Most Popular</div>
                )}
                <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-slate-600">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-700">
                      <span className="text-green-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 ${plan.color} text-white font-medium rounded shadow-md hover:shadow-lg transition-all`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-medium mb-6">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto">
            Join thousands of developers building beautiful applications with Material Design.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 font-medium rounded shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Updates', 'Beta'] },
              { title: 'Resources', links: ['Docs', 'Guides', 'Blog', 'Community'] },
              { title: 'Company', links: ['About', 'Team', 'Careers', 'Press'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'License'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-medium mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200">
            <span className="text-slate-600 text-sm">© 2024 Material. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Twitter</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">GitHub</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Dribbble</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
