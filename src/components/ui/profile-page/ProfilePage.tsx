import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { ProfileHeader } from './ProfileHeader';
import { ProfileInfo } from './ProfileInfo';
import { ProfileTabs } from './ProfileTabs';
import type { ProfilePageProps } from './types';

export function ProfilePage({ theme: themeName, layout = 'full', header, info, tabs, children }: ProfilePageProps) {
  const theme = getTheme(themeName);

  const containerClass = cn(
    'min-h-screen',
    theme.pageBackground,
    theme.base.text
  );

  const contentClass = cn(
    'mx-auto px-4 py-12',
    layout === 'sidebar' ? 'max-w-7xl' : 'max-w-6xl'
  );

  const mainContent = (
    <>
      <ProfileHeader theme={themeName} {...header} />
      {info && <ProfileInfo theme={themeName} {...info} />}
      {tabs && <ProfileTabs theme={themeName} {...tabs} />}
      {children}
    </>
  );

  return (
    <div className={containerClass}>
      <div className={contentClass}>
        {layout === 'sidebar' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">{mainContent}</div>
            <div className={cn('p-6', theme.base.radius, theme.base.border)}>
              <h3 className="text-lg font-semibold mb-4">Sidebar</h3>
              <p className="text-sm opacity-70">Additional content goes here</p>
            </div>
          </div>
        ) : (
          mainContent
        )}
      </div>
    </div>
  );
}
