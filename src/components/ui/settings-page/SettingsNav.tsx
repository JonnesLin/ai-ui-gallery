'use client';

import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { SettingsNavProps } from './types';

export function SettingsNav({
  theme,
  sections,
  activeSection,
  onSectionChange,
  className,
}: SettingsNavProps) {
  const themeConfig = getTheme(theme);

  return (
    <nav className={cn('w-64 flex-shrink-0', className)}>
      <div className={cn(themeConfig.base.background, themeConfig.base.shadow, themeConfig.base.radius, 'overflow-hidden')}>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSectionChange(section.id)}
                className={cn(
                  'w-full flex items-center gap-3 px-6 py-4 text-sm font-medium transition-all relative',
                  themeConfig.states.hover,
                  activeSection === section.id
                    ? cn(themeConfig.variants.primary.text, themeConfig.variants.primary.background)
                    : cn(themeConfig.base.text, 'hover:bg-opacity-10', themeConfig.variants.primary.hover)
                )}
              >
                {activeSection === section.id && theme === 'material' && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-current" />
                )}
                {section.icon && <span className="text-xl">{section.icon}</span>}
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
