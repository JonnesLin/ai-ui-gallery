import type { BlogPostHeaderProps } from './types';
import type { ThemeName } from '../_themes/types';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

interface Props extends BlogPostHeaderProps {
  theme: ThemeName;
}

export function BlogPostHeader({
  theme,
  title,
  subtitle,
  author,
  publishedAt,
  readTime,
  category,
  tags,
  coverImage,
}: Props) {
  const themeConfig = getTheme(theme);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <header className="mb-8 md:mb-12">
      {/* Category Badge */}
      <div className="flex items-center gap-4 mb-4 md:mb-6">
        <span className={cn(
          'px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-semibold uppercase',
          themeConfig.variants.primary.background,
          themeConfig.variants.primary.text,
          themeConfig.base.radius
        )}>
          {category}
        </span>
        <time
          dateTime={publishedAt.toISOString()}
          className={cn('text-sm', themeConfig.base.text, 'opacity-60')}
        >
          {formatDate(publishedAt)}
        </time>
        <span className={cn('text-sm', themeConfig.base.text, 'opacity-60')}>
          {readTime}
        </span>
      </div>

      {/* Title */}
      <h1 className={cn(
        'text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6',
        themeConfig.base.text
      )}>
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className={cn(
          'text-lg md:text-xl leading-relaxed mb-6 md:mb-8',
          themeConfig.base.text,
          'opacity-75'
        )}>
          {subtitle}
        </p>
      )}

      {/* Author */}
      <div className={cn(
        'flex items-center gap-4 pb-6 md:pb-8 mb-6 md:mb-8',
        themeConfig.base.border,
        'border-b-2'
      )}>
        {author.avatar.startsWith('http') ? (
          <img
            src={author.avatar}
            alt={author.name}
            className={cn('w-12 h-12 md:w-16 md:h-16 object-cover', themeConfig.base.radius)}
          />
        ) : (
          <div className={cn(
            'w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl font-bold',
            themeConfig.variants.secondary.background,
            themeConfig.variants.secondary.text,
            themeConfig.base.radius
          )}>
            {author.avatar}
          </div>
        )}
        <div>
          <p className={cn('font-bold text-base md:text-lg', themeConfig.base.text)}>
            {author.name}
          </p>
          {author.role && (
            <p className={cn('text-sm', themeConfig.base.text, 'opacity-60')}>
              {author.role}
            </p>
          )}
        </div>
      </div>

      {/* Cover Image */}
      {coverImage && (
        <figure className="mb-8 md:mb-12">
          <div className={cn(
            'aspect-[21/9] overflow-hidden',
            themeConfig.base.border,
            themeConfig.base.radius,
            'border-2'
          )}>
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </figure>
      )}
    </header>
  );
}
