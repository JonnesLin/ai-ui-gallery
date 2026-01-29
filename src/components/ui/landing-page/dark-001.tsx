export default function DarkLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
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
      <section className="pt-32 pb-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800 rounded-full blur-[150px] opacity-30" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-400 mb-8">
            Now in public beta
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Build in the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-white">
              shadows
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            The developer platform designed for those who work best when the lights are low. Powerful tools, minimal distractions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors">
              Start Building
            </button>
            <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Code Preview */}
      <section className="py-12 px-6">
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
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Built for developers</h2>
          <p className="text-zinc-400 text-center mb-16 max-w-xl mx-auto">
            Every feature designed with developer experience in mind.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Type Safe', desc: 'Full TypeScript support with intelligent autocomplete.' },
              { title: 'Edge Ready', desc: 'Deploy to the edge in milliseconds with zero config.' },
              { title: 'Real-time', desc: 'Built-in WebSocket support for live applications.' },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors"
              >
                <div className="w-10 h-10 bg-zinc-800 rounded-lg mb-6 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 border-y border-zinc-900">
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
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to go dark?</h2>
          <p className="text-zinc-400 mb-10 max-w-lg mx-auto">
            Join the developers who prefer to build without the glare. Start free, scale infinitely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors">
              Deploy Now
            </button>
            <button className="px-8 py-4 text-zinc-400 hover:text-white transition-colors">
              Contact Sales →
            </button>
          </div>
        </div>
      </section>

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
    </div>
  );
}
