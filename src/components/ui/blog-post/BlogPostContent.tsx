import type { BlogPostContentProps } from './types';
import type { ThemeName } from '../_themes/types';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';

interface Props extends BlogPostContentProps {
  theme: ThemeName;
}

export function BlogPostContent({ theme, children }: Props) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn(
      'prose prose-lg max-w-none',
      'space-y-6 leading-relaxed',
      themeConfig.base.text,
      '[&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:pt-6 [&>h2]:mb-4',
      '[&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-bold [&>h3]:pt-4 [&>h3]:mb-3',
      '[&>p]:text-base [&>p]:md:text-lg',
      '[&>ul]:space-y-2 [&>ul]:my-6',
      '[&>ol]:space-y-2 [&>ol]:my-6',
      '[&>blockquote]:border-l-4 [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8',
      '[&>blockquote]:italic [&>blockquote]:opacity-75',
      `[&>blockquote]:${themeConfig.variants.primary.border}`,
      '[&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm',
      `[&_code]:${themeConfig.variants.secondary.background}`,
      `[&_code]:${themeConfig.variants.secondary.text}`,
      '[&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-6',
      '[&_a]:underline [&_a]:transition-colors',
      `[&_a]:${themeConfig.variants.primary.text}`,
      `[&_a:hover]:opacity-80`,
      '[&_img]:rounded-lg [&_img]:my-8',
      '[&_table]:w-full [&_table]:my-8',
      '[&_th]:p-3 [&_th]:text-left [&_th]:font-semibold',
      '[&_td]:p-3',
      `[&_tr]:${themeConfig.base.border}`,
      '[&_tr]:border-b'
    )}>
      {children}
    </div>
  );
}
