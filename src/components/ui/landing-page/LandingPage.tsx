import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { LandingPageProvider } from './LandingPageContext';
import type { LandingPageProps } from './types';

export function LandingPage({ theme: themeName, children }: LandingPageProps) {
  const theme = getTheme(themeName);

  return (
    <LandingPageProvider theme={theme}>
      <div className={cn('min-h-screen', theme.pageBackground, theme.base.text)}>
        {children}
      </div>
    </LandingPageProvider>
  );
}
