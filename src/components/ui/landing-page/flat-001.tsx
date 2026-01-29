export default function FlatLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-white text-xl font-bold">FLAT</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-white/90 hover:text-white">Features</a>
            <a href="#pricing" className="text-white/90 hover:text-white">Pricing</a>
            <a href="#contact" className="text-white/90 hover:text-white">Contact</a>
          </div>
          <button className="px-6 py-2 bg-white text-blue-600 font-semibold">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Design Made Simple
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
            Flat design focuses on simplicity and functionality. No gradients, no shadows, just pure colors and clean typography.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-blue-700 text-white font-bold">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Key Features</h2>
          <p className="text-slate-600 text-center mb-16 max-w-xl mx-auto">
            Everything you need to build modern applications
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Clean Design', desc: 'Minimalist interfaces that users love', color: 'bg-emerald-500' },
              { title: 'Fast Loading', desc: 'Optimized for speed and performance', color: 'bg-amber-500' },
              { title: 'Easy to Use', desc: 'Intuitive controls and workflows', color: 'bg-rose-500' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8">
                <div className={`w-16 h-16 ${feature.color} mb-6 flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah Chen', role: 'Designer', text: 'Love the simplicity!', color: 'bg-purple-500' },
              { name: 'Mike Ross', role: 'Developer', text: 'Clean and functional.', color: 'bg-cyan-500' },
              { name: 'Emma Wilson', role: 'Founder', text: 'Perfect for our brand.', color: 'bg-pink-500' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 p-8">
                <p className="text-slate-700 mb-6 text-lg">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${testimonial.color}`} />
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Simple Pricing</h2>
          <p className="text-slate-600 mb-12">Choose the plan that fits your needs</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { name: 'Starter', price: '$9', features: ['5 Projects', '10GB Storage', 'Email Support'], color: 'bg-blue-600' },
              { name: 'Pro', price: '$29', features: ['Unlimited Projects', '100GB Storage', 'Priority Support'], color: 'bg-violet-600' },
            ].map((plan, i) => (
              <div key={i} className="bg-white p-8">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6 text-slate-900">
                  {plan.price}<span className="text-lg text-slate-600">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-slate-600">{feature}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 ${plan.color} text-white font-bold`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-10 max-w-lg mx-auto">
            Join thousands of users who trust our platform for their projects.
          </p>
          <button className="px-10 py-4 bg-blue-600 text-white font-bold text-lg">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Updates'] },
              { title: 'Support', links: ['Help Center', 'Tutorials', 'Contact'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'License'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold text-white mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-800">
            <span>© 2024 FLAT. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">GitHub</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
