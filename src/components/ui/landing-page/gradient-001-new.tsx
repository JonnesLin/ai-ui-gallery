import { LandingPage, LandingSection, LandingHero, LandingFeatures, LandingCTA } from './index';

export default function GradientLandingPageNew() {
  return (
    <LandingPage theme="gradient">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold">Gradient</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          </div>
          <button className="px-5 py-2.5 bg-white text-fuchsia-600 font-semibold rounded-full hover:bg-white/90 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <LandingSection background="gradient" padding="xl" className="pt-32 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />

        <div className="relative z-10">
          <LandingHero
            title={
              <>
                Color Your
                <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent">
                  Digital World
                </span>
              </>
            }
            subtitle="Create stunning experiences with vibrant gradients that capture attention and inspire action."
            primaryCTA={{
              text: 'Start Free Trial',
              onClick: () => console.log('Start trial'),
            }}
            secondaryCTA={{
              text: 'Watch Demo',
              onClick: () => console.log('Watch demo'),
            }}
          />
        </div>
      </LandingSection>

      {/* Features */}
      <LandingSection id="features" background="gradient" padding="lg">
        <LandingFeatures
          title="Amazing Features"
          subtitle="Everything you need to build beautiful products."
          columns={3}
          features={[
            {
              title: 'Powerful',
              description: 'Advanced features that scale with your business.',
              icon: (
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl mx-auto flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-lg" />
                </div>
              ),
            },
            {
              title: 'Intuitive',
              description: 'Designed for simplicity and ease of use.',
              icon: (
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-cyan-500 rounded-2xl mx-auto flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-lg" />
                </div>
              ),
            },
            {
              title: 'Flexible',
              description: 'Adapt to any workflow or requirement.',
              icon: (
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl mx-auto flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-lg" />
                </div>
              ),
            },
          ]}
        />
      </LandingSection>

      {/* Stats */}
      <LandingSection background="gradient" padding="lg">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '1M+', label: 'Downloads' },
                { value: '50K+', label: 'Creators' },
                { value: '200+', label: 'Templates' },
                { value: '4.9', label: 'App Rating' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
                  <div className="text-white/60 uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LandingSection>

      {/* Testimonials */}
      <LandingSection background="gradient" padding="lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Loved by Creators</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Designer', quote: 'The gradient tools are incredible. I have never created more beautiful designs.' },
              { name: 'Alex Rivera', role: 'Developer', quote: 'Integration was seamless. My apps look stunning with zero extra effort.' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
                <p className="text-xl mb-6 leading-relaxed text-white">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full" />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LandingSection>

      {/* CTA */}
      <LandingSection background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-16 text-center shadow-2xl">
            <LandingCTA
              title="Ready to Create Magic?"
              description="Join thousands of creators building beautiful products with vibrant gradients."
              primaryCTA={{
                text: 'Start Your Free Trial',
                onClick: () => console.log('Start trial'),
              }}
              className="text-gray-900"
            />
          </div>
        </div>
      </LandingSection>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-white/60">© 2024 Gradient. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </LandingPage>
  );
}
