import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { HeroProps } from './types';

export function Hero({
  theme,
  layout = 'centered',
  height = 'screen',
  backgroundImage,
  overlay = false,
  overlayOpacity = 0.5,
  children,
  className,
}: HeroProps) {
  const themeConfig = getTheme(theme);

  const heightClasses: Record<string, string> = {
    auto: 'min-h-fit py-20',
    screen: 'min-h-screen',
    half: 'min-h-[50vh]',
  };

  const layoutClasses: Record<string, string> = {
    centered: 'items-center justify-center text-center',
    left: 'items-center justify-start text-left',
    right: 'items-center justify-end text-right',
    split: 'items-center justify-between',
  };

  return (
    <section
      className={cn(
        'relative flex px-6',
        heightClasses[height],
        layoutClasses[layout],
        themeConfig.pageBackground,
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {overlay && backgroundImage && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      <div className="relative z-10 w-full max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
