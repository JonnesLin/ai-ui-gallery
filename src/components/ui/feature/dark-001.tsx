import { Feature } from './Feature';
import { FeatureGrid } from './FeatureGrid';
import { cn } from '../_shared/utils';

export default function DarkFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', description: 'Tailor every aspect to your needs.' },
    { icon: '📱', title: 'Responsive', description: 'Looks great on any device.' },
    { icon: '🔌', title: 'Integrations', description: 'Connect with your favorite tools.' },
    { icon: '📊', title: 'Analytics', description: 'Insights to grow your business.' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to build amazing products
          </p>
        </div>

        <FeatureGrid columns={3} gap="md">
          {features.map((feature, index) => (
            <Feature
              key={index}
              theme="dark"
              layout="vertical"
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={cn(
                'p-8',
                'hover:bg-zinc-800/50 transition-all duration-300'
              )}
            />
          ))}
        </FeatureGrid>
      </div>
    </section>
  );
}
