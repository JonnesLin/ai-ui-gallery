import { createContext, useContext } from 'react';
import type { ThemeConfig } from '../_themes/types';

interface LandingPageContextValue {
  theme: ThemeConfig;
}

const LandingPageContext = createContext<LandingPageContextValue | null>(null);

export function LandingPageProvider({ children, theme }: { children: React.ReactNode; theme: ThemeConfig }) {
  return (
    <LandingPageContext.Provider value={{ theme }}>
      {children}
    </LandingPageContext.Provider>
  );
}

export function useLandingPageTheme(): ThemeConfig {
  const context = useContext(LandingPageContext);
  if (!context) {
    throw new Error('useLandingPageTheme must be used within LandingPageProvider');
  }
  return context.theme;
}
