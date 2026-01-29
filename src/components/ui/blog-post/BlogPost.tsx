import type { BlogPostProps } from './types';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { BlogPostHeader } from './BlogPostHeader';
import { BlogPostContent } from './BlogPostContent';
import { BlogPostAuthor } from './BlogPostAuthor';
import { BlogPostShare } from './BlogPostShare';

export function BlogPost({
  theme,
  layout = 'standard',
  header,
  children,
  showShare = true,
  showAuthorBio = true,
}: BlogPostProps) {
  const themeConfig = getTheme(theme);

  const layoutClasses = {
    standard: 'max-w-4xl',
    wide: 'max-w-6xl',
    full: 'max-w-full',
  };

  return (
    <div className={cn(
      'min-h-screen',
      themeConfig.pageBackground
    )}>
      <article className={cn(
        'mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16',
        layoutClasses[layout]
      )}>
        {/* Header Section */}
        <BlogPostHeader
          theme={theme}
          {...header}
        />

        {/* Content Section */}
        <BlogPostContent theme={theme}>
          {children}
        </BlogPostContent>

        {/* Tags Section */}
        {header.tags.length > 0 && (
          <div className={cn(
            'mt-8 md:mt-12 pt-6 md:pt-8 border-t-2',
            themeConfig.base.border
          )}>
            <div className="flex flex-wrap gap-3">
              {header.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    'px-3 md:px-4 py-2 text-sm font-semibold cursor-pointer transition-colors',
                    themeConfig.base.background,
                    themeConfig.base.text,
                    themeConfig.base.border,
                    themeConfig.base.radius,
                    themeConfig.variants.ghost.hover,
                    'border'
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share Section */}
        {showShare && (
          <BlogPostShare
            theme={theme}
            title={header.title}
          />
        )}

        {/* Author Bio Section */}
        {showAuthorBio && (
          <BlogPostAuthor
            theme={theme}
            author={header.author}
          />
        )}
      </article>
    </div>
  );
}
