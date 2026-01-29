import { createContext, useContext } from 'react';
import type { NavbarProps } from './Navbar.types';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

interface NavbarContextValue {
  theme: ReturnType<typeof getTheme>;
}

const NavbarContext = createContext<NavbarContextValue | null>(null);

export function useNavbarContext() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('Navbar compound components must be used within Navbar');
  }
  return context;
}

const maxWidthClasses: Record<NonNullable<NavbarProps['maxWidth']>, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

const positionClasses: Record<NonNullable<NavbarProps['position']>, string> = {
  static: 'static',
  fixed: 'fixed top-0 left-0 right-0 z-50',
  sticky: 'sticky top-0 z-50',
};

export function Navbar({
  children,
  theme: themeName,
  position = 'static',
  maxWidth = 'xl',
  bordered = false,
  blurred = false,
  height = 'h-16',
  className,
}: NavbarProps) {
  const theme = getTheme(themeName);

  const navClasses = cn(
    'w-full',
    positionClasses[position],
    theme.base.background,
    bordered && theme.base.border,
    blurred && 'backdrop-blur-xl',
    className
  );

  const containerClasses = cn(
    maxWidthClasses[maxWidth],
    'mx-auto px-6 lg:px-8',
    height
  );

  return (
    <NavbarContext.Provider value={{ theme }}>
      <nav className={navClasses}>
        <div className={containerClasses}>
          {children}
        </div>
      </nav>
    </NavbarContext.Provider>
  );
}
