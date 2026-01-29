import { Feature } from './Feature';
import { FeatureGrid } from './FeatureGrid';
import { FeatureIcon } from './FeatureIcon';

/**
 * Integration test component demonstrating all feature components
 * This file can be removed after verification
 */
export default function TestIntegration() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <h2 className="text-3xl font-bold mb-8">Minimalist Theme - Vertical</h2>
          <FeatureGrid columns={3} gap="lg">
            <Feature
              theme="minimalist"
              layout="vertical"
              icon="⚡"
              title="Lightning Fast"
              description="Built for speed with optimized performance."
              link={{ href: '#', label: 'Learn more' }}
            />
            <Feature
              theme="minimalist"
              layout="vertical"
              icon="🔒"
              title="Secure"
              description="Enterprise-grade security out of the box."
            />
            <Feature
              theme="minimalist"
              layout="vertical"
              icon="🎨"
              title="Customizable"
              description="Tailor every aspect to your needs."
            />
          </FeatureGrid>
        </div>

        <div className="bg-gray-950 -mx-6 px-6 py-16">
          <h2 className="text-3xl font-bold text-white mb-8">Dark Theme - Centered</h2>
          <FeatureGrid columns={3} gap="md">
            <Feature
              theme="dark"
              layout="centered"
              icon="📱"
              title="Responsive"
              description="Looks great on any device."
            />
            <Feature
              theme="dark"
              layout="centered"
              icon="🔌"
              title="Integrations"
              description="Connect with your favorite tools."
            />
            <Feature
              theme="dark"
              layout="centered"
              icon="📊"
              title="Analytics"
              description="Insights to grow your business."
            />
          </FeatureGrid>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">Horizontal Layout</h2>
          <FeatureGrid columns={2} gap="md">
            <Feature
              theme="minimalist"
              layout="horizontal"
              icon="⚡"
              title="Fast Performance"
              description="Optimized for speed and efficiency in every operation."
              link={{ href: '#', label: 'See benchmarks' }}
            />
            <Feature
              theme="minimalist"
              layout="horizontal"
              icon="🛡️"
              title="Security First"
              description="Built with security best practices from day one."
              link={{ href: '#', label: 'View security' }}
            />
          </FeatureGrid>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">Standalone Icon Example</h2>
          <div className="flex gap-4">
            <FeatureIcon theme="minimalist" className="w-16 h-16 text-3xl">
              🚀
            </FeatureIcon>
            <FeatureIcon theme="dark" className="w-16 h-16 text-3xl">
              🎯
            </FeatureIcon>
            <FeatureIcon theme="glassmorphism" className="w-16 h-16 text-3xl">
              💎
            </FeatureIcon>
          </div>
        </div>
      </div>
    </section>
  );
}
