import { Tag } from './Tag';

const UserIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
);

export default function GlassmorphismTag() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-white/90 mb-4">Basic Tags</h2>
          <div className="flex flex-wrap gap-3">
            <Tag theme="glassmorphism" variant="solid" color="default" rounded="lg">
              Default
            </Tag>
            <Tag theme="glassmorphism" variant="solid" color="primary" rounded="lg">
              Primary
            </Tag>
            <Tag theme="glassmorphism" variant="solid" color="success" rounded="lg">
              Success
            </Tag>
            <Tag theme="glassmorphism" variant="solid" color="error" rounded="lg">
              Error
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-white/90 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Tag theme="glassmorphism" size="xs" rounded="lg">
              Small
            </Tag>
            <Tag theme="glassmorphism" size="md" rounded="lg">
              Medium
            </Tag>
            <Tag theme="glassmorphism" size="lg" rounded="lg">
              Large
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-white/90 mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-3">
            <Tag theme="glassmorphism" variant="solid" color="default" icon={<UserIcon />} rounded="lg">
              User
            </Tag>
            <Tag theme="glassmorphism" variant="solid" color="primary" icon={<StarIcon />} rounded="lg">
              Premium
            </Tag>
            <Tag theme="glassmorphism" variant="solid" color="error" icon={<HeartIcon />} rounded="lg">
              Favorite
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-white/90 mb-4">Removable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <Tag theme="glassmorphism" variant="soft" closable rounded="lg">
              Design
            </Tag>
            <Tag theme="glassmorphism" variant="soft" closable rounded="lg">
              Development
            </Tag>
            <Tag theme="glassmorphism" variant="soft" closable rounded="lg">
              Marketing
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-white/90 mb-4">Selectable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <Tag theme="glassmorphism" variant="outlined" clickable rounded="lg">
              All
            </Tag>
            <Tag theme="glassmorphism" variant="soft" clickable rounded="lg">
              Active
            </Tag>
            <Tag theme="glassmorphism" variant="outlined" clickable rounded="lg">
              Completed
            </Tag>
            <Tag theme="glassmorphism" variant="outlined" clickable rounded="lg">
              Archived
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-white/90 mb-4">Tag Cloud</h2>
          <div className="flex flex-wrap gap-3">
            <Tag theme="glassmorphism" variant="soft" rounded="lg">
              React
            </Tag>
            <Tag theme="glassmorphism" variant="soft" rounded="lg">
              Vue
            </Tag>
            <Tag theme="glassmorphism" variant="soft" rounded="lg">
              Angular
            </Tag>
            <Tag theme="glassmorphism" variant="soft" rounded="lg">
              Svelte
            </Tag>
            <Tag theme="glassmorphism" variant="soft" rounded="lg">
              Next.js
            </Tag>
            <Tag theme="glassmorphism" variant="soft" rounded="lg">
              Nuxt
            </Tag>
            <Tag theme="glassmorphism" variant="soft" rounded="lg">
              Gatsby
            </Tag>
            <Tag theme="glassmorphism" variant="soft" rounded="lg">
              Astro
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
