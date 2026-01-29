import type { BlogPostAuthorProps } from './types';
import type { ThemeName } from '../_themes/types';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

interface Props extends BlogPostAuthorProps {
  theme: ThemeName;
}

export function BlogPostAuthor({ theme, author }: Props) {
  const themeConfig = getTheme(theme);

  return (
    <section className={cn(
      'mt-12 p-6 md:p-8',
      themeConfig.base.background,
      themeConfig.base.border,
      themeConfig.base.radius,
      'border-2'
    )}>
      <h2 className={cn(
        'text-xl md:text-2xl font-bold mb-4',
        themeConfig.base.text
      )}>
        About the Author
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        {author.avatar.startsWith('http') ? (
          <img
            src={author.avatar}
            alt={author.name}
            className={cn(
              'w-20 h-20 md:w-24 md:h-24 object-cover shrink-0',
              themeConfig.base.radius
            )}
          />
        ) : (
          <div className={cn(
            'w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-3xl md:text-4xl font-bold shrink-0',
            themeConfig.variants.secondary.background,
            themeConfig.variants.secondary.text,
            themeConfig.base.radius
          )}>
            {author.avatar}
          </div>
        )}
        <div className="flex-1">
          <h3 className={cn('text-lg md:text-xl font-bold', themeConfig.base.text)}>
            {author.name}
          </h3>
          {author.role && (
            <p className={cn('text-sm mt-1', themeConfig.base.text, 'opacity-60')}>
              {author.role}
            </p>
          )}
          <p className={cn('mt-3 md:mt-4 leading-relaxed', themeConfig.base.text, 'opacity-80')}>
            {author.bio}
          </p>
          <button className={cn(
            'mt-4 px-5 py-2 md:px-6 md:py-3 font-bold transition-colors',
            themeConfig.variants.primary.background,
            themeConfig.variants.primary.text,
            themeConfig.variants.primary.hover,
            themeConfig.base.radius
          )}>
            FOLLOW
          </button>
        </div>
      </div>
    </section>
  );
}
