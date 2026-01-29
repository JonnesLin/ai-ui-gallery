import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { CTAProps } from './types';

const layoutStyles = {
  centered: 'text-center',
  left: 'text-left',
  split: 'flex flex-col md:flex-row md:items-center md:justify-between gap-8',
};

const variantStyles = {
  simple: 'py-24 px-4',
  card: 'py-20 px-4',
  banner: 'py-20 px-4 relative overflow-hidden',
};

export function CTA({
  theme: themeName,
  layout = 'centered',
  variant = 'simple',
  backgroundImage,
  className,
  children,
}: CTAProps) {
  const theme = getTheme(themeName);

  const containerBaseStyles = cn(
    variantStyles[variant],
    theme.pageBackground
  );

  const contentWrapperStyles = cn(
    'max-w-4xl mx-auto relative',
    variant === 'card' && 'bg-white p-10 md:p-14',
    variant === 'card' && theme.base.shadow,
    layoutStyles[layout]
  );

  if (backgroundImage) {
    return (
      <section
        className={cn(containerBaseStyles, className)}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={contentWrapperStyles}>{children}</div>
      </section>
    );
  }

  return (
    <section className={cn(containerBaseStyles, className)}>
      <div className={contentWrapperStyles}>{children}</div>
    </section>
  );
}
