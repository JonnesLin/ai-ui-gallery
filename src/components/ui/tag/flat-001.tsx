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

export default function FlatTag() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4">Basic Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="flat" variant="solid" color="default">
              Default
            </Tag>
            <Tag theme="flat" variant="solid" color="primary">
              Primary
            </Tag>
            <Tag theme="flat" variant="solid" color="success">
              Success
            </Tag>
            <Tag theme="flat" variant="solid" color="error">
              Error
            </Tag>
            <Tag theme="flat" variant="solid" color="warning">
              Warning
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-2">
            <Tag theme="flat" size="sm">
              Small
            </Tag>
            <Tag theme="flat" size="md">
              Medium
            </Tag>
            <Tag theme="flat" size="lg">
              Large
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="flat" variant="solid" color="default" icon={<UserIcon />}>
              User
            </Tag>
            <Tag theme="flat" variant="solid" color="primary" icon={<StarIcon />}>
              Featured
            </Tag>
            <Tag theme="flat" variant="solid" color="success" icon={<CheckIcon />}>
              Verified
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4">Removable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="flat" variant="solid" color="default" closable>
              React
            </Tag>
            <Tag theme="flat" variant="solid" color="primary" closable>
              TypeScript
            </Tag>
            <Tag theme="flat" variant="solid" color="success" closable>
              Tailwind
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4">Selectable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="flat" variant="soft" clickable>
              All
            </Tag>
            <Tag theme="flat" variant="solid" color="primary" clickable>
              Active
            </Tag>
            <Tag theme="flat" variant="soft" clickable>
              Pending
            </Tag>
            <Tag theme="flat" variant="soft" clickable>
              Completed
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4">Tag Cloud</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="flat" variant="solid" color="error">
              JavaScript
            </Tag>
            <Tag theme="flat" variant="solid" color="primary">
              Python
            </Tag>
            <Tag theme="flat" variant="solid" color="warning">
              Java
            </Tag>
            <Tag theme="flat" variant="solid" color="primary">
              C++
            </Tag>
            <Tag theme="flat" variant="solid" color="error">
              Ruby
            </Tag>
            <Tag theme="flat" variant="solid" color="info">
              Go
            </Tag>
            <Tag theme="flat" variant="solid" color="warning">
              Rust
            </Tag>
            <Tag theme="flat" variant="solid" color="warning">
              Swift
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
