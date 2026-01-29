export default function SketchLandingPage() {
  return (
    <div className="min-h-screen bg-amber-50 text-slate-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/95 backdrop-blur-sm border-b-4 border-slate-800" style={{ borderStyle: 'solid', borderImage: 'repeating-linear-gradient(90deg, #1e293b 0px, #1e293b 10px, transparent 10px, transparent 15px) 1' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>✏️ Sketch</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-slate-700 hover:text-slate-900 font-medium" style={{ textDecoration: 'underline wavy' }}>Features</a>
            <a href="#pricing" className="text-slate-700 hover:text-slate-900 font-medium" style={{ textDecoration: 'underline wavy' }}>Pricing</a>
            <a href="#about" className="text-slate-700 hover:text-slate-900 font-medium" style={{ textDecoration: 'underline wavy' }}>About</a>
          </div>
          <button
            className="px-6 py-2 bg-yellow-300 text-slate-900 font-bold border-3 border-slate-800 relative hover:translate-y-[-2px] transition-transform"
            style={{
              borderWidth: '3px',
              borderStyle: 'solid',
              transform: 'rotate(-1deg)',
              boxShadow: '3px 3px 0px #1e293b',
            }}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sketch-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10 L20 20 M30 10 L40 20 M50 10 L60 20" stroke="#1e293b" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sketch-pattern)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div
            className="inline-block px-4 py-2 bg-pink-200 border-3 border-slate-800 mb-8"
            style={{
              borderWidth: '3px',
              borderStyle: 'dashed',
              transform: 'rotate(1deg)',
            }}
          >
            <span className="font-bold">✨ Hand-drawn goodness!</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            <span className="inline-block" style={{ transform: 'rotate(-2deg)' }}>Draw</span>
            <br />
            <span className="inline-block text-blue-600" style={{ transform: 'rotate(1deg)' }}>Outside</span>
            <br />
            <span className="inline-block text-orange-600" style={{ transform: 'rotate(-1deg)' }}>The Lines</span>
          </h1>

          <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            Embrace the imperfect beauty of hand-drawn design. Playful, organic, and uniquely human.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-10 py-4 bg-yellow-400 text-slate-900 font-bold text-lg border-4 border-slate-800"
              style={{
                transform: 'rotate(-1deg)',
                boxShadow: '5px 5px 0px #1e293b',
              }}
            >
              Get Started
            </button>
            <button
              className="px-10 py-4 bg-blue-300 text-slate-900 font-bold text-lg border-4 border-slate-800"
              style={{
                transform: 'rotate(1deg)',
                boxShadow: '5px 5px 0px #1e293b',
              }}
            >
              See Examples
            </button>
          </div>
        </div>

        {/* Doodles */}
        <div className="absolute top-20 right-10 text-6xl" style={{ transform: 'rotate(15deg)' }}>✏️</div>
        <div className="absolute bottom-20 left-10 text-6xl" style={{ transform: 'rotate(-20deg)' }}>🎨</div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4" style={{ fontFamily: 'Comic Sans MS, cursive', transform: 'rotate(-1deg)' }}>
            Features ✨
          </h2>
          <div
            className="w-32 h-2 bg-slate-800 mx-auto mb-16"
            style={{ transform: 'rotate(-1deg)' }}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Hand-Drawn', desc: 'Authentic sketchy borders and organic shapes', emoji: '✏️', color: 'bg-pink-200' },
              { title: 'Playful', desc: 'Fun, whimsical design that brings joy', emoji: '🎨', color: 'bg-blue-200' },
              { title: 'Unique', desc: 'Stand out with one-of-a-kind visuals', emoji: '🌟', color: 'bg-yellow-200' },
            ].map((feature, i) => (
              <div
                key={i}
                className={`p-8 ${feature.color} border-4 border-slate-800 relative`}
                style={{
                  transform: `rotate(${i % 2 === 0 ? '-1deg' : '1deg'})`,
                  boxShadow: '6px 6px 0px #1e293b',
                }}
              >
                <div className="text-6xl mb-6">{feature.emoji}</div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  {feature.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{feature.desc}</p>

                {/* Decorative squiggle */}
                <svg className="absolute bottom-2 right-2 w-12 h-12" viewBox="0 0 50 50">
                  <path d="M10 25 Q20 15, 30 25 T50 25" stroke="#1e293b" strokeWidth="2" fill="none" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-green-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            What People Say 💬
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Sarah Doodle', role: 'Designer', text: 'Love the hand-drawn vibe! So refreshing and fun.', emoji: '😊' },
              { name: 'Mike Sketch', role: 'Creative', text: 'Finally, a design that feels human and warm!', emoji: '🎉' },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="p-8 bg-white border-4 border-slate-800 relative"
                style={{
                  transform: `rotate(${i % 2 === 0 ? '1deg' : '-1deg'})`,
                  boxShadow: '6px 6px 0px #1e293b',
                }}
              >
                <div className="absolute top-4 left-4 text-4xl opacity-20">"</div>
                <p className="text-slate-800 mb-6 text-lg leading-relaxed italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t-3 border-slate-300" style={{ borderStyle: 'dashed', borderWidth: '2px' }}>
                  <div
                    className="w-14 h-14 bg-orange-300 border-3 border-slate-800 flex items-center justify-center text-2xl"
                    style={{
                      borderWidth: '3px',
                      transform: 'rotate(-5deg)',
                    }}
                  >
                    {testimonial.emoji}
                  </div>
                  <div>
                    <div className="font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Pricing 💰
          </h2>
          <div
            className="w-24 h-2 bg-slate-800 mx-auto mb-12"
            style={{ transform: 'rotate(1deg)' }}
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: 'Starter', price: '9', features: ['10 Sketches', 'Basic Doodles', 'Email Support'], color: 'bg-purple-200' },
              { name: 'Pro', price: '29', features: ['Unlimited Sketches', 'All Doodles', 'Priority Support'], color: 'bg-orange-200' },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-10 ${plan.color} border-5 border-slate-800`}
                style={{
                  borderWidth: '4px',
                  transform: `rotate(${i % 2 === 0 ? '-2deg' : '2deg'})`,
                  boxShadow: '8px 8px 0px #1e293b',
                }}
              >
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  {plan.name}
                </h3>
                <div className="mb-8">
                  <span className="text-6xl font-bold">${plan.price}</span>
                  <span className="text-xl text-slate-600">/mo</span>
                </div>
                <div
                  className="w-full h-1 bg-slate-800 mb-8"
                  style={{ transform: 'rotate(-1deg)' }}
                />
                <ul className="space-y-4 mb-10 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                      <span className="text-2xl">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-4 bg-yellow-400 text-slate-900 font-bold border-4 border-slate-800"
                  style={{
                    transform: 'rotate(1deg)',
                    boxShadow: '4px 4px 0px #1e293b',
                  }}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-pink-200 via-blue-200 to-yellow-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50 Q50 0, 100 50 T200 50" stroke="#1e293b" strokeWidth="3" fill="none" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Comic Sans MS, cursive', transform: 'rotate(-1deg)' }}>
            Ready to Sketch? ✏️
          </h2>
          <p className="text-slate-800 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            Join the hand-drawn revolution. Create designs that feel personal and alive!
          </p>
          <button
            className="px-12 py-5 bg-orange-400 text-slate-900 font-bold text-xl border-5 border-slate-800"
            style={{
              borderWidth: '4px',
              transform: 'rotate(1deg)',
              boxShadow: '8px 8px 0px #1e293b',
            }}
          >
            Start Drawing!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-amber-100 border-t-4 border-slate-800" style={{ borderStyle: 'dashed' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Updates'] },
              { title: 'Resources', links: ['Blog', 'Tutorials', 'Gallery'] },
              { title: 'Company', links: ['About', 'Team', 'Careers'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t-2 border-slate-300" style={{ borderStyle: 'dashed' }}>
            <span className="text-slate-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              © 2024 Sketch. Drawn with love ❤️
            </span>
            <div className="flex gap-8">
              <a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Twitter</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Instagram</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 font-bold">Pinterest</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
