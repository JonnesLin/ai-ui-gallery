export default function ThreeDLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span
            className="text-2xl font-bold"
            style={{
              textShadow: '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
            }}
          >
            3D Studio
          </span>
          <div className="hidden md:flex gap-8">
            {['Features', 'Showcase', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-white transition-all duration-300"
                style={{
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                }}
              >
                {item}
              </a>
            ))}
          </div>
          <button
            className="px-6 py-2.5 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4), 0 5px 15px rgba(118, 75, 162, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              transform: 'translateZ(0)',
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative">
        {/* Background 3D Elements */}
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          style={{
            transform: 'translateZ(50px) rotateX(45deg)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          style={{
            transform: 'translateZ(30px) rotateY(45deg)',
            animation: 'float 8s ease-in-out infinite 1s',
          }}
        />

        <div className="max-w-6xl mx-auto text-center relative" style={{ perspective: '1000px' }}>
          <div
            className="mb-12"
            style={{
              transform: 'translateZ(80px)',
              transformStyle: 'preserve-3d',
            }}
          >
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
                transform: 'translateZ(100px)',
              }}
            >
              Design in 3D
            </h1>
            <p
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{
                transform: 'translateZ(60px)',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              Experience the next dimension of digital design. Create immersive experiences with depth,
              perspective, and stunning visual effects that bring your ideas to life.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            style={{
              transform: 'translateZ(40px)',
              transformStyle: 'preserve-3d',
            }}
          >
            <button
              className="px-12 py-5 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-110 group"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 20px 50px rgba(102, 126, 234, 0.5), 0 10px 25px rgba(118, 75, 162, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.2)',
                transform: 'translateZ(20px)',
              }}
            >
              Start Creating
            </button>
            <button
              className="px-12 py-5 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3), inset 0 0 0 2px rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                transform: 'translateZ(20px)',
              }}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto" style={{ perspective: '1500px' }}>
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 10px 30px rgba(240, 147, 251, 0.3)',
              }}
            >
              Powerful Features
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Everything you need to create stunning 3D experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                color: 'from-purple-500 to-pink-500',
                shadow: 'rgba(168, 85, 247, 0.4)',
                title: 'Depth Layers',
                desc: 'Multi-layered shadows create realistic depth and dimension in your designs.',
              },
              {
                color: 'from-blue-500 to-cyan-500',
                shadow: 'rgba(59, 130, 246, 0.4)',
                title: 'Perspective',
                desc: 'Advanced perspective transforms bring true 3D effects to flat surfaces.',
              },
              {
                color: 'from-orange-500 to-red-500',
                shadow: 'rgba(249, 115, 22, 0.4)',
                title: 'Dynamic Light',
                desc: 'Simulated lighting effects add realism and visual interest to elements.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group cursor-pointer"
                style={{
                  transform: 'translateZ(0) rotateX(0deg) rotateY(0deg)',
                  transition: 'transform 0.3s ease-out',
                  transformStyle: 'preserve-3d',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateZ(30px) rotateX(5deg) rotateY(-5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) rotateX(0deg) rotateY(0deg)';
                }}
              >
                <div
                  className="p-10 rounded-2xl h-full"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color.replace('from-', '').replace(' to-', ', ')})`,
                    boxShadow: `
                      0 30px 60px ${feature.shadow},
                      0 15px 30px rgba(0, 0, 0, 0.3),
                      0 5px 15px rgba(0, 0, 0, 0.2),
                      inset 0 2px 0 rgba(255, 255, 255, 0.3),
                      inset 0 -2px 0 rgba(0, 0, 0, 0.3)
                    `,
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                      transform: 'translateZ(20px)',
                    }}
                  >
                    <div className="w-8 h-8 bg-white rounded-lg" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ transform: 'translateZ(15px)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed" style={{ transform: 'translateZ(10px)' }}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto" style={{ perspective: '1200px' }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See It In Action</h2>
            <p className="text-white/70 text-lg">Experience the depth and dimension</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { rotation: 'rotateY(-5deg)', color: 'from-violet-600 to-indigo-600' },
              { rotation: 'rotateY(5deg)', color: 'from-fuchsia-600 to-pink-600' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105"
                style={{
                  transform: `translateZ(50px) ${item.rotation}`,
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5), 0 20px 40px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div
                  className="aspect-video"
                  style={{
                    background: `linear-gradient(135deg, ${item.color.replace('from-', '').replace(' to-', ', ')})`,
                    boxShadow: 'inset 0 2px 0 rgba(255, 255, 255, 0.2)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What Creators Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Maria Rodriguez', role: '3D Designer', quote: 'This platform revolutionized how I approach digital design. The depth effects are incredible.' },
              { name: 'James Chen', role: 'Creative Director', quote: 'Finally, a tool that makes 3D design accessible. My team productivity increased by 300%.' },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transform: 'translateZ(30px)',
                }}
              >
                <p className="text-lg mb-6 leading-relaxed text-white/90">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      boxShadow: '0 8px 16px rgba(102, 126, 234, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
                    }}
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto" style={{ perspective: '1200px' }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-white/70 text-lg">Choose the perfect plan for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: '$29', features: ['10 Projects', 'Basic 3D Tools', 'Email Support'] },
              { name: 'Pro', price: '$79', features: ['Unlimited Projects', 'Advanced 3D Tools', 'Priority Support'], featured: true },
              { name: 'Enterprise', price: '$199', features: ['Custom Solutions', 'White Label', '24/7 Support'] },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl transition-all duration-300 ${plan.featured ? 'md:scale-110' : 'hover:scale-105'}`}
                style={{
                  background: plan.featured
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: plan.featured
                    ? '0 30px 60px rgba(102, 126, 234, 0.5), 0 15px 30px rgba(118, 75, 162, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.2)'
                    : '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  border: plan.featured ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  transform: plan.featured ? 'translateZ(40px)' : 'translateZ(20px)',
                }}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-black mb-6">
                  {plan.price}
                  <span className="text-lg font-normal text-white/70">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/90">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: plan.featured
                      ? 'rgba(255, 255, 255, 0.9)'
                      : 'rgba(255, 255, 255, 0.1)',
                    color: plan.featured ? '#764ba2' : 'white',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto" style={{ perspective: '1000px' }}>
          <div
            className="p-12 md:p-20 rounded-3xl text-center transition-all duration-500 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              boxShadow: '0 40px 80px rgba(102, 126, 234, 0.5), 0 20px 40px rgba(118, 75, 162, 0.4), 0 10px 20px rgba(240, 147, 251, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.3), inset 0 -2px 0 rgba(0, 0, 0, 0.2)',
              transform: 'translateZ(60px) rotateX(2deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Go 3D?</h2>
            <p className="text-white/90 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Join thousands of designers creating immersive experiences. Start your free trial today
              and discover the power of 3D design.
            </p>
            <button
              className="px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#764ba2',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)',
                transform: 'translateZ(30px)',
              }}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Showcase</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Social</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
            <span className="text-white/60">© 2024 3D Studio. All rights reserved.</span>
            <div className="flex gap-6 text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateZ(50px) rotateX(45deg);
          }
          50% {
            transform: translateY(-20px) translateZ(60px) rotateX(50deg);
          }
        }
      `}</style>
    </div>
  );
}
