import { Feature } from './Feature';
import { FeatureGrid } from './FeatureGrid';
import { cn } from '../_shared/utils';

export default function GlassmorphismFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', description: 'Tailor every aspect to your needs.' },
    { icon: '📱', title: 'Responsive', description: 'Looks great on any device.' },
    { icon: '🔌', title: 'Integrations', description: 'Connect with your favorite tools.' },
    { icon: '📊', title: 'Analytics', description: 'Insights to grow your business.' },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Everything you need to build amazing products
          </p>
        </div>

        <FeatureGrid columns={3} gap="md">
          {features.map((feature, index) => (
            <Feature
              key={index}
              theme="glassmorphism"
              layout="vertical"
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={cn(
                'p-8',
                'hover:bg-white/20 transition-all duration-300'
              )}
            />
          ))}
        </FeatureGrid>
      </div>
    </section>
  );
}
