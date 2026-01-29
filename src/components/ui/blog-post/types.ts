import type { ThemeName } from '../_themes/types';

export type BlogPostLayout = 'standard' | 'wide' | 'full';

export interface BlogPostAuthor {
  name: string;
  avatar: string;
  bio: string;
  role?: string;
}

export interface BlogPostHeaderProps {
  title: string;
  subtitle?: string;
  author: BlogPostAuthor;
  publishedAt: Date;
  readTime: string;
  category: string;
  tags: string[];
  coverImage?: string;
}

export interface BlogPostContentProps {
  children: React.ReactNode;
}

export interface BlogPostAuthorProps {
  author: BlogPostAuthor;
}

export interface BlogPostShareProps {
  title: string;
  url?: string;
}

export interface BlogPostProps {
  theme: ThemeName;
  layout?: BlogPostLayout;
  header: BlogPostHeaderProps;
  children: React.ReactNode;
  showShare?: boolean;
  showAuthorBio?: boolean;
}
