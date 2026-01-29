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

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

export default function MaterialTag() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-4">Basic Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="material" variant="solid" color="default" rounded="full">
              Default
            </Tag>
            <Tag theme="material" variant="solid" color="primary" rounded="full">
              Primary
            </Tag>
            <Tag theme="material" variant="solid" color="success" rounded="full">
              Success
            </Tag>
            <Tag theme="material" variant="solid" color="error" rounded="full">
              Error
            </Tag>
            <Tag theme="material" variant="solid" color="warning" rounded="full">
              Warning
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-2">
            <Tag theme="material" size="sm" rounded="full">
              Small
            </Tag>
            <Tag theme="material" size="md" rounded="full">
              Medium
            </Tag>
            <Tag theme="material" size="lg" rounded="full">
              Large
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="material" variant="solid" color="default" icon={<UserIcon />} rounded="full">
              User
            </Tag>
            <Tag theme="material" variant="solid" color="primary" icon={<StarIcon />} rounded="full">
              Featured
            </Tag>
            <Tag theme="material" variant="solid" color="success" icon={<CheckIcon />} rounded="full">
              Verified
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-4">Removable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="material" variant="solid" color="default" closable rounded="full">
              React
            </Tag>
            <Tag theme="material" variant="solid" color="primary" closable rounded="full">
              TypeScript
            </Tag>
            <Tag theme="material" variant="solid" color="success" closable rounded="full">
              Tailwind
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-4">Selectable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="material" variant="soft" clickable rounded="full">
              All
            </Tag>
            <Tag theme="material" variant="solid" color="primary" clickable rounded="full">
              Active
            </Tag>
            <Tag theme="material" variant="soft" clickable rounded="full">
              Pending
            </Tag>
            <Tag theme="material" variant="soft" clickable rounded="full">
              Completed
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-4">Tag Cloud</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="material" variant="soft" rounded="full">
              JavaScript
            </Tag>
            <Tag theme="material" variant="soft" rounded="full">
              Python
            </Tag>
            <Tag theme="material" variant="soft" rounded="full">
              Java
            </Tag>
            <Tag theme="material" variant="soft" rounded="full">
              C++
            </Tag>
            <Tag theme="material" variant="soft" rounded="full">
              Ruby
            </Tag>
            <Tag theme="material" variant="soft" rounded="full">
              Go
            </Tag>
            <Tag theme="material" variant="soft" rounded="full">
              Rust
            </Tag>
            <Tag theme="material" variant="soft" rounded="full">
              Swift
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
