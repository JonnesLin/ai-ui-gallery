import { Feature } from './Feature';
import { FeatureGrid } from './FeatureGrid';

export default function MinimalistFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', description: 'Tailor every aspect to your needs.' },
    { icon: '📱', title: 'Responsive', description: 'Looks great on any device.' },
    { icon: '🔌', title: 'Integrations', description: 'Connect with your favorite tools.' },
    { icon: '📊', title: 'Analytics', description: 'Insights to grow your business.' },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">
            Powerful Features
          </h2>
          <p className="text-base text-gray-500 max-w-lg mx-auto">
            Everything you need to build amazing products
          </p>
        </div>

        <FeatureGrid columns={3} gap="lg">
          {features.map((feature, index) => (
            <Feature
              key={index}
              theme="minimalist"
              layout="vertical"
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </FeatureGrid>
      </div>
    </section>
  );
}
