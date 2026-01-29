import { LandingPage, LandingSection, LandingHero, LandingFeatures, LandingCTA } from './index';

export default function MinimalistLandingPageNew() {
  return (
    <LandingPage theme="minimalist">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-medium tracking-tight">Minimal</span>
          <div className="hidden md:flex gap-10">
            <a href="#features" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">About</a>
          </div>
          <button className="px-5 py-2 text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <LandingSection background="light" padding="xl" className="pt-32">
        <LandingHero
          title="Less is more."
          subtitle="Embrace simplicity. Build products that focus on what truly matters."
          primaryCTA={{
            text: 'Start Free Trial',
            onClick: () => console.log('Start trial'),
          }}
          secondaryCTA={{
            text: 'Learn More',
            onClick: () => console.log('Learn more'),
          }}
        />
      </LandingSection>

      {/* Features */}
      <LandingSection id="features" background="light" padding="lg">
        <LandingFeatures
          title="Features"
          subtitle="Everything you need, nothing you don't."
          columns={3}
          features={[
            {
              title: 'Simple',
              description: 'Clean interfaces that put content first. No distractions.',
              icon: <div className="w-12 h-12 bg-neutral-900 mx-auto" />,
            },
            {
              title: 'Fast',
              description: 'Optimized performance. Every millisecond counts.',
              icon: <div className="w-12 h-12 bg-neutral-900 mx-auto" />,
            },
            {
              title: 'Reliable',
              description: 'Built to last. Stable and dependable.',
              icon: <div className="w-12 h-12 bg-neutral-900 mx-auto" />,
            },
          ]}
        />
      </LandingSection>

      {/* Stats */}
      <LandingSection background="light" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10K+', label: 'Users' },
              { value: '99.9%', label: 'Uptime' },
              { value: '50ms', label: 'Response' },
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </LandingSection>

      {/* CTA */}
      <LandingSection background="dark" padding="lg">
        <LandingCTA
          title="Ready to simplify?"
          description="Join thousands who have embraced minimalism. Start your journey today."
          primaryCTA={{
            text: 'Get Started Free',
            onClick: () => console.log('Get started'),
          }}
        />
      </LandingSection>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm text-neutral-500">© 2024 Minimal. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Twitter</a>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">GitHub</a>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </LandingPage>
  );
}
