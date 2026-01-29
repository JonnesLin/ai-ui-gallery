import { Feature } from './Feature';
import { FeatureGrid } from './FeatureGrid';

export default function FeatureLayoutExample() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', description: 'Tailor every aspect to your needs.' },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto space-y-20">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Vertical Layout (3 Columns)</h2>
          <FeatureGrid columns={3} gap="lg">
            {features.map((feature, index) => (
              <Feature
                key={index}
                theme="minimalist"
                layout="vertical"
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={{ href: '#', label: 'Learn more' }}
              />
            ))}
          </FeatureGrid>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Centered Layout (3 Columns)</h2>
          <FeatureGrid columns={3} gap="lg">
            {features.map((feature, index) => (
              <Feature
                key={index}
                theme="minimalist"
                layout="centered"
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </FeatureGrid>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Horizontal Layout (2 Columns)</h2>
          <FeatureGrid columns={2} gap="md">
            {features.map((feature, index) => (
              <Feature
                key={index}
                theme="minimalist"
                layout="horizontal"
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={{ href: '#', label: 'Explore' }}
              />
            ))}
          </FeatureGrid>
        </div>
      </div>
    </section>
  );
}
