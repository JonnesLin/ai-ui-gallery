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

export default function DarkTag() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-gray-400 mb-4">Basic Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="dark" variant="soft" color="default">
              Default
            </Tag>
            <Tag theme="dark" variant="soft" color="primary">
              Primary
            </Tag>
            <Tag theme="dark" variant="soft" color="success">
              Success
            </Tag>
            <Tag theme="dark" variant="soft" color="error">
              Error
            </Tag>
            <Tag theme="dark" variant="soft" color="warning">
              Warning
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-400 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-2">
            <Tag theme="dark" variant="soft" size="sm">
              Small
            </Tag>
            <Tag theme="dark" variant="soft" size="md">
              Medium
            </Tag>
            <Tag theme="dark" variant="soft" size="lg">
              Large
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-400 mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="dark" variant="soft" color="default" icon={<UserIcon />}>
              User
            </Tag>
            <Tag theme="dark" variant="soft" color="primary" icon={<StarIcon />}>
              Featured
            </Tag>
            <Tag theme="dark" variant="soft" color="success" icon={<CheckIcon />}>
              Verified
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-400 mb-4">Removable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="dark" variant="soft" color="default" closable>
              React
            </Tag>
            <Tag theme="dark" variant="soft" color="default" closable>
              Vue
            </Tag>
            <Tag theme="dark" variant="soft" color="default" closable>
              Angular
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-400 mb-4">Selectable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="dark" variant="soft" clickable>
              All
            </Tag>
            <Tag theme="dark" variant="solid" color="primary" clickable>
              Active
            </Tag>
            <Tag theme="dark" variant="soft" clickable>
              Pending
            </Tag>
            <Tag theme="dark" variant="soft" clickable>
              Completed
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-400 mb-4">Tag Cloud</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="dark" variant="soft">
              Frontend
            </Tag>
            <Tag theme="dark" variant="soft">
              Backend
            </Tag>
            <Tag theme="dark" variant="soft">
              Fullstack
            </Tag>
            <Tag theme="dark" variant="soft">
              DevOps
            </Tag>
            <Tag theme="dark" variant="soft">
              Mobile
            </Tag>
            <Tag theme="dark" variant="soft">
              Desktop
            </Tag>
            <Tag theme="dark" variant="soft">
              Cloud
            </Tag>
            <Tag theme="dark" variant="soft">
              Security
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
