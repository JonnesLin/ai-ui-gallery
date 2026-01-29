import { useState } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ProductTabsProps } from './types';

type TabType = 'features' | 'specifications';

export function ProductTabs({
  theme,
  features,
  specifications,
}: ProductTabsProps) {
  const themeConfig = getTheme(theme);
  const [activeTab, setActiveTab] = useState<TabType>('features');

  return (
    <div
      className={cn(
        'p-8 lg:p-10',
        themeConfig.base.background,
        themeConfig.base.shadow,
        themeConfig.base.radius
      )}
    >
      <div className={cn('flex gap-8 mb-8 border-b-2', themeConfig.base.border)}>
        <button
          onClick={() => setActiveTab('features')}
          className={cn(
            'pb-4 font-semibold transition-colors',
            activeTab === 'features'
              ? cn(
                  'border-b-4',
                  themeConfig.variants.primary.background.replace('bg-', 'border-'),
                  themeConfig.variants.primary.text
                )
              : 'text-gray-500'
          )}
        >
          Features
        </button>

        {specifications ? (
          <button
            onClick={() => setActiveTab('specifications')}
            className={cn(
              'pb-4 font-semibold transition-colors',
              activeTab === 'specifications'
                ? cn(
                    'border-b-4',
                    themeConfig.variants.primary.background.replace('bg-', 'border-'),
                    themeConfig.variants.primary.text
                  )
                : 'text-gray-500'
            )}
          >
            Specifications
          </button>
        ) : null}
      </div>

      {activeTab === 'features' && features ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'p-6',
                theme === 'glassmorphism'
                  ? 'bg-white/10 backdrop-blur-md border border-white/20'
                  : theme === 'neumorphism'
                  ? 'bg-gray-100 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]'
                  : 'bg-gray-50',
                themeConfig.base.radius
              )}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3
                className={cn(
                  'font-bold text-lg mb-2',
                  themeConfig.base.text
                )}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      ) : null}

      {activeTab === 'specifications' && specifications ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(specifications).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <p className={cn('font-semibold', themeConfig.base.text)}>
                {key}
              </p>
              <p className="text-gray-600">{value}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
