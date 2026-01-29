import { cn } from '../_shared/utils';
import { useLandingPageTheme } from './LandingPageContext';
import type { LandingSectionProps } from './types';

const paddingMap = {
  sm: 'py-12 px-6',
  md: 'py-24 px-6',
  lg: 'py-32 px-6',
  xl: 'py-40 px-6',
};

export function LandingSection({
  id,
  background,
  padding,
  children,
  className,
}: LandingSectionProps) {
  const theme = useLandingPageTheme();

  const backgroundStyles: Record<string, string> = {
    light: theme.name === 'dark' ? 'bg-zinc-900' : 'bg-gray-50',
    dark: theme.name === 'dark' ? 'bg-black' : 'bg-gray-900 text-white',
    gradient: theme.variants.primary.background,
    image: 'bg-center bg-cover',
  };

  return (
    <section
      id={id}
      className={cn(
        paddingMap[padding],
        backgroundStyles[background],
        className
      )}
    >
      {children}
    </section>
  );
}
