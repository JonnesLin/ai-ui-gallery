export default function MonochromeLandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold">MONO</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-700 hover:text-black font-medium transition-colors">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-black font-medium transition-colors">Pricing</a>
            <a href="#about" className="text-gray-700 hover:text-black font-medium transition-colors">About</a>
          </div>
          <button className="px-6 py-2 bg-black text-white font-bold hover:bg-gray-900 transition-colors">
            START
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            BLACK
            <span className="block text-gray-400">& WHITE</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Embrace the power of monochrome. Pure contrast, maximum impact. No distractions, only focus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-black text-white font-bold text-lg hover:bg-gray-900 transition-colors">
              GET STARTED
            </button>
            <button className="px-10 py-4 border-2 border-black text-black font-bold text-lg hover:bg-black hover:text-white transition-all">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Stripes */}
      <div className="w-full h-24 flex">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-gray-800" />
        <div className="flex-1 bg-gray-600" />
        <div className="flex-1 bg-gray-400" />
        <div className="flex-1 bg-gray-200" />
      </div>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">FEATURES</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-16" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'CONTRAST', desc: 'Maximum readability through pure black and white contrast.', shade: 'bg-black' },
              { title: 'CLARITY', desc: 'Crystal clear interfaces without color distractions.', shade: 'bg-gray-700' },
              { title: 'FOCUS', desc: 'Direct attention to what truly matters in your design.', shade: 'bg-gray-500' },
            ].map((feature, i) => (
              <div key={i} className="bg-white border-2 border-black p-8">
                <div className={`w-full h-2 ${feature.shade} mb-6`} />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '100%', label: 'CONTRAST' },
              { value: '0', label: 'COLORS' },
              { value: '∞', label: 'CLARITY' },
              { value: '2', label: 'SHADES' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">{stat.label}</div>
                <div className="mt-4 h-1 bg-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">TESTIMONIALS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'John Black', role: 'Designer', text: 'Monochrome design brings unmatched clarity and sophistication.' },
              { name: 'Jane White', role: 'Developer', text: 'The simplicity of black and white creates powerful interfaces.' },
            ].map((testimonial, i) => (
              <div key={i} className="border-2 border-black p-8 relative">
                <div className="absolute top-0 left-0 w-4 h-4 bg-black" />
                <div className="absolute top-0 right-0 w-4 h-4 bg-black" />
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-black" />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-black" />
                <p className="text-gray-800 mb-6 text-lg leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-300">
                  <div className="w-12 h-12 bg-black" />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">PRICING</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: 'BASIC', price: '19', features: ['10 Projects', '50GB Storage', 'Email Support'], bg: 'bg-white', border: 'border-black' },
              { name: 'PRO', price: '49', features: ['Unlimited Projects', '500GB Storage', 'Priority Support'], bg: 'bg-black', text: 'text-white', border: 'border-black' },
            ].map((plan, i) => (
              <div key={i} className={`${plan.bg} ${plan.text} border-4 ${plan.border} p-10`}>
                <h3 className="text-3xl font-bold mb-4 tracking-wide">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-6xl font-bold">${plan.price}</span>
                  <span className="text-xl">/MO</span>
                </div>
                <div className={`w-full h-1 ${i === 0 ? 'bg-black' : 'bg-white'} mb-8`} />
                <ul className="space-y-4 mb-10 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 font-medium">
                      <span className="text-2xl">{i === 0 ? '■' : '□'}</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 ${i === 0 ? 'bg-black text-white' : 'bg-white text-black'} border-2 border-current font-bold tracking-wider hover:opacity-80 transition-opacity`}>
                  CHOOSE PLAN
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">READY?</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
            Join the monochrome revolution. Experience design in its purest form.
          </p>
          <button className="px-12 py-5 bg-white text-black font-bold text-xl hover:bg-gray-200 transition-colors">
            START NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white border-t-2 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'PRODUCT', links: ['Features', 'Pricing', 'Updates'] },
              { title: 'RESOURCES', links: ['Docs', 'Guides', 'Blog'] },
              { title: 'COMPANY', links: ['About', 'Team', 'Careers'] },
              { title: 'LEGAL', links: ['Privacy', 'Terms', 'License'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold mb-4 tracking-wider">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-600 hover:text-black font-medium transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t-2 border-black">
            <span className="text-gray-700 font-bold">© 2024 MONO. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-8">
              <a href="#" className="text-gray-700 hover:text-black font-bold transition-colors">TWITTER</a>
              <a href="#" className="text-gray-700 hover:text-black font-bold transition-colors">GITHUB</a>
              <a href="#" className="text-gray-700 hover:text-black font-bold transition-colors">DRIBBBLE</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
