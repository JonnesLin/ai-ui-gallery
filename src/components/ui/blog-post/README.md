# BlogPost Component System

A composable, theme-driven blog post component system that supports multiple design themes through a unified component architecture.

## Architecture

The BlogPost system follows a clean separation of concerns:

- **Data Structure**: Type definitions in `types.ts`
- **Composition**: Main `BlogPost` component composes sub-components
- **Theming**: Uses theme configuration from `_themes/` directory
- **Styling**: Applies theme-specific styles via `cn()` utility

## Components

### BlogPost (Main)

The primary container component that orchestrates all sub-components.

```tsx
import { BlogPost } from './blog-post';

<BlogPost
  theme="material"
  layout="standard"
  header={{
    title: 'Your Blog Title',
    subtitle: 'Optional subtitle',
    author: {
      name: 'John Doe',
      avatar: 'https://example.com/avatar.jpg', // or 'JD' for initials
      bio: 'Author biography text',
      role: 'Software Engineer',
    },
    publishedAt: new Date('2024-03-28'),
    readTime: '5 min read',
    category: 'Technology',
    tags: ['React', 'TypeScript', 'Design'],
    coverImage: 'https://example.com/cover.jpg',
  }}
  showShare={true}
  showAuthorBio={true}
>
  {/* Article content goes here */}
  <p>Your article content...</p>
  <h2>Section Title</h2>
  <p>More content...</p>
</BlogPost>
```

### BlogPostHeader

Displays the article header with title, metadata, author info, and optional cover image.

### BlogPostContent

Wraps article content with theme-appropriate typography styles. Supports:
- Headings (h2, h3)
- Paragraphs
- Lists (ul, ol)
- Blockquotes
- Code blocks
- Images
- Tables
- Links

### BlogPostAuthor

Shows author biography section with avatar, name, role, bio text, and follow button.

### BlogPostShare

Provides social sharing buttons for:
- Twitter
- LinkedIn
- Facebook
- Copy to clipboard

## Props

### BlogPostProps

```typescript
interface BlogPostProps {
  theme: ThemeName;              // Theme identifier (e.g., 'flat', 'material', 'minimalist')
  layout?: BlogPostLayout;       // 'standard' | 'wide' | 'full' (default: 'standard')
  header: BlogPostHeaderProps;   // Header configuration
  children: React.ReactNode;     // Article content
  showShare?: boolean;           // Show share buttons (default: true)
  showAuthorBio?: boolean;       // Show author section (default: true)
}
```

### BlogPostHeaderProps

```typescript
interface BlogPostHeaderProps {
  title: string;                 // Article title
  subtitle?: string;             // Optional subtitle
  author: BlogPostAuthor;        // Author information
  publishedAt: Date;             // Publication date
  readTime: string;              // Estimated read time (e.g., '5 min read')
  category: string;              // Category badge
  tags: string[];                // Tags for the article
  coverImage?: string;           // Optional cover image URL
}
```

### BlogPostAuthor

```typescript
interface BlogPostAuthor {
  name: string;                  // Author name
  avatar: string;                // Avatar URL or initials (e.g., 'JD')
  bio: string;                   // Author biography
  role?: string;                 // Optional job title/role
}
```

## Supported Themes

All themes from `_themes/` are supported:
- `minimalist` - Clean, light design with subtle borders
- `material` - Google Material Design with elevation
- `flat` - Flat design with bold colors
- `dark` - Dark theme
- `glassmorphism` - Frosted glass effect
- `neumorphism` - Soft UI design
- `gradient` - Gradient-based design
- And 13 more...

## Layout Options

- `standard`: Default layout with 4xl max-width
- `wide`: Wider layout with 6xl max-width
- `full`: Full-width layout

## Content Styling

The `BlogPostContent` component automatically styles common markdown elements:

```tsx
<BlogPostContent theme="material">
  <p>Paragraph text with theme-appropriate styling</p>

  <h2>Headings are automatically styled</h2>

  <blockquote>
    Quotes have theme-specific borders and styling
  </blockquote>

  <ul>
    <li>Lists are properly spaced</li>
    <li>With theme colors</li>
  </ul>

  <code>Inline code has theme background</code>
</BlogPostContent>
```

## Examples

See the refactored theme files for complete examples:
- `flat-001.tsx` - Flat design theme example
- `material-001.tsx` - Material design example
- `minimalist-001.tsx` - Minimalist design example

## Design Principles

This component system follows these principles:

1. **Single Source of Truth**: One component structure, theme configuration drives styling
2. **No Special Cases**: All themes use the same component hierarchy
3. **Composability**: Sub-components can be used independently if needed
4. **Type Safety**: Full TypeScript typing for all props
5. **No Fallbacks**: Missing required data throws errors immediately

## Migration Guide

To migrate existing blog post components:

1. Remove page-level wrapper (header, footer, nav)
2. Extract data into `header` prop object
3. Move article content into children
4. Replace hardcoded theme classes with `theme` prop
5. Remove duplicate styling logic

Before:
```tsx
export default function CustomBlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <header>...</header>
      <article>
        <h1>Title</h1>
        {/* content */}
      </article>
      <footer>...</footer>
    </div>
  );
}
```

After:
```tsx
import { BlogPost } from './BlogPost';

export default function CustomBlogPost() {
  return (
    <BlogPost
      theme="flat"
      header={{ title: 'Title', ... }}
    >
      {/* content only */}
    </BlogPost>
  );
}
```
