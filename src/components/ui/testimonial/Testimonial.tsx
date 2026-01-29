import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { TestimonialQuote } from './TestimonialQuote';
import { TestimonialAuthor } from './TestimonialAuthor';
import type { TestimonialProps } from './types';

export function Testimonial({
  theme,
  variant = 'card',
  quote,
  author,
  rating = 5,
  showRating = true,
  accentColor,
  className,
}: TestimonialProps) {
  const themeConfig = getTheme(theme);

  const variantStyles = {
    card: cn(
      themeConfig.base.background,
      themeConfig.base.border,
      themeConfig.base.shadow,
      themeConfig.base.radius,
      'overflow-hidden'
    ),
    minimal: cn(
      'border-none shadow-none',
      'p-6'
    ),
    bubble: cn(
      themeConfig.base.background,
      themeConfig.base.border,
      themeConfig.base.shadow,
      'rounded-3xl overflow-hidden'
    ),
  };

  const ratingStyles = {
    card: 'flex gap-1 mb-6',
    minimal: 'flex justify-center gap-1 mb-4',
    bubble: 'flex gap-1 mb-6',
  };

  const quoteStyles = {
    card: cn(themeConfig.base.text, 'mb-8'),
    minimal: cn(themeConfig.base.text, 'text-center mb-6'),
    bubble: cn(themeConfig.base.text, 'italic mb-8'),
  };

  const authorWrappers = {
    card: '',
    minimal: 'flex flex-col items-center text-center',
    bubble: '',
  };

  const avatarStyles: Record<string, string> = {
    minimalist: 'rounded-full grayscale hover:grayscale-0 transition-all duration-300',
    glassmorphism: 'rounded-full border-2 border-white/30',
    flat: 'rounded-none',
    neumorphism: 'rounded-full',
    dark: 'rounded-full ring-2 ring-gray-700 group-hover:ring-gray-600 transition-all',
    gradient: 'rounded-full ring-2 ring-purple-300 group-hover:ring-pink-300 transition-all',
    material: 'rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.2)]',
    luxury: 'rounded-full ring-2 ring-amber-400 group-hover:ring-amber-500 transition-all',
    corporate: 'rounded-full ring-2 ring-blue-300 group-hover:ring-blue-400 transition-all',
    cyberpunk: 'rounded-full ring-2 ring-cyan-500/50 group-hover:ring-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]',
    pastel: 'rounded-full ring-2 ring-pink-200 group-hover:ring-pink-300 transition-all',
    futuristic: 'rounded-full ring-2 ring-violet-500/50 group-hover:ring-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.4)]',
    monochrome: 'rounded-full ring-2 ring-gray-400 group-hover:ring-gray-500 transition-all',
    brutalist: 'rounded-none border-4 border-black',
    retro: 'rounded-full border-2 border-amber-700 shadow-[2px_2px_0_0_rgba(146,64,14,1)]',
    playful: 'rounded-full ring-2 ring-purple-300 group-hover:ring-purple-400 group-hover:rotate-6 transition-all',
    nature: 'rounded-full ring-2 ring-green-300 group-hover:ring-green-400 transition-all',
    sketch: 'rounded-full border-2 border-dashed border-stone-400',
    neon: 'rounded-full ring-2 ring-pink-500/50 group-hover:ring-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)]',
    '3d': 'rounded-full shadow-[0_4px_12px_rgba(99,102,241,0.3)]',
  };

  const avatarWrapperStyles: Record<string, string> = {
    minimalist: '',
    glassmorphism: '',
    flat: '',
    neumorphism: 'p-1 rounded-full shadow-[4px_4px_8px_#b8b8b8,-4px_-4px_8px_#ffffff]',
    dark: '',
    gradient: '',
    material: '',
    luxury: '',
    corporate: '',
    cyberpunk: '',
    pastel: '',
    futuristic: '',
    monochrome: '',
    brutalist: '',
    retro: '',
    playful: '',
    nature: '',
    sketch: '',
    neon: '',
    '3d': 'p-1',
  };

  const getAvatarClassName = () => {
    const style = avatarStyles[theme];
    if (!style) {
      throw new Error(`Testimonial: theme "${theme}" not supported for avatarStyles`);
    }
    return style;
  };

  const getAvatarWrapperClassName = () => {
    const style = avatarWrapperStyles[theme];
    if (style === undefined) {
      throw new Error(`Testimonial: theme "${theme}" not supported for avatarWrapperStyles`);
    }
    return style;
  };

  return (
    <div className={cn(variantStyles[variant], className)}>
      {accentColor && <div className={cn('h-2', accentColor)} />}

      <div className="p-8">
        {showRating && (
          <div className={ratingStyles[variant]}>
            {Array.from({ length: rating }).map((_, i) => (
              <span
                key={i}
                className={cn('text-lg', themeConfig.variants.warning.text)}
              >
                ★
              </span>
            ))}
          </div>
        )}

        <TestimonialQuote className={quoteStyles[variant]}>
          "{quote}"
        </TestimonialQuote>

        <div className={authorWrappers[variant]}>
          <TestimonialAuthor
            {...author}
            avatarClassName={getAvatarClassName()}
            avatarWrapperClassName={getAvatarWrapperClassName()}
          />
        </div>
      </div>
    </div>
  );
}
