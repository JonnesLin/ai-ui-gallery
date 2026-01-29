import { Feature } from './Feature';
import { FeatureGrid } from './FeatureGrid';
import { cn } from '../_shared/utils';

export default function NeumorphismFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', description: 'Tailor every aspect to your needs.' },
    { icon: '📱', title: 'Responsive', description: 'Looks great on any device.' },
    { icon: '🔌', title: 'Integrations', description: 'Connect with your favorite tools.' },
    { icon: '📊', title: 'Analytics', description: 'Insights to grow your business.' },
  ];

  return (
    <section className="py-20 px-4 bg-[#e0e5ec]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to build amazing products
          </p>
        </div>

        <FeatureGrid columns={3} gap="lg">
          {features.map((feature, index) => (
            <Feature
              key={index}
              theme="neumorphism"
              layout="vertical"
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={cn(
                'p-8',
                'hover:shadow-[inset_8px_8px_16px_#bec3c9,inset_-8px_-8px_16px_#ffffff] transition-all duration-300'
              )}
            />
          ))}
        </FeatureGrid>
      </div>
    </section>
  );
}
