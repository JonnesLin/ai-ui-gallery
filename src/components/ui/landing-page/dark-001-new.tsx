import { LandingPage, LandingSection, LandingHero, LandingFeatures, LandingCTA } from './index';

export default function DarkLandingPageNew() {
  return (
    <LandingPage theme="dark">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold">DARKMODE</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="text-zinc-400 hover:text-white transition-colors">Docs</a>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <LandingSection background="dark" padding="xl" className="pt-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800 rounded-full blur-[150px] opacity-30" />

        <div className="relative z-10">
          <LandingHero
            badge="Now in public beta"
            title={
              <>
                Build in the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-white">
                  shadows
                </span>
              </>
            }
            subtitle="The developer platform designed for those who work best when the lights are low. Powerful tools, minimal distractions."
            primaryCTA={{
              text: 'Start Building',
              onClick: () => console.log('Start building'),
            }}
            secondaryCTA={{
              text: 'View Documentation',
              onClick: () => console.log('View docs'),
            }}
          />
        </div>
      </LandingSection>

      {/* Code Preview */}
      <LandingSection background="dark" padding="sm">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-zinc-500">index.ts</span>
            </div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-zinc-300">
{`import { DarkMode } from '@darkmode/sdk'

const app = new DarkMode({
  theme: 'midnight',
  features: ['analytics', 'auth', 'storage']
})

app.deploy()`}
              </code>
            </pre>
          </div>
        </div>
      </LandingSection>

      {/* Features */}
      <LandingSection id="features" background="dark" padding="lg">
        <LandingFeatures
          title="Built for developers"
          subtitle="Every feature designed with developer experience in mind."
          columns={3}
          features={[
            {
              title: 'Type Safe',
              description: 'Full TypeScript support with intelligent autocomplete.',
              icon: (
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
              ),
            },
            {
              title: 'Edge Ready',
              description: 'Deploy to the edge in milliseconds with zero config.',
              icon: (
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
              ),
            },
            {
              title: 'Real-time',
              description: 'Built-in WebSocket support for live applications.',
              icon: (
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
              ),
            },
          ]}
        />
      </LandingSection>

      {/* Stats */}
      <LandingSection background="dark" padding="lg" className="border-y border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '100K+', label: 'Developers' },
              { value: '<50ms', label: 'Latency' },
              { value: '99.99%', label: 'Uptime' },
              { value: '∞', label: 'Scalability' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </LandingSection>

      {/* CTA */}
      <LandingSection background="dark" padding="lg">
        <LandingCTA
          title="Ready to go dark?"
          description="Join the developers who prefer to build without the glare. Start free, scale infinitely."
          primaryCTA={{
            text: 'Deploy Now',
            onClick: () => console.log('Deploy'),
          }}
          secondaryCTA={{
            text: 'Contact Sales →',
            onClick: () => console.log('Contact sales'),
          }}
        />
      </LandingSection>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Changelog'] },
              { title: 'Resources', links: ['Documentation', 'API Reference', 'Guides'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-medium mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-900">
            <span className="text-zinc-500 text-sm">© 2024 DARKMODE. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </LandingPage>
  );
}
