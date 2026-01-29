import { Tag } from './Tag';

const UserIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function MinimalistTag() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">Basic Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="minimalist" variant="outlined" color="default" size="sm">
              Default
            </Tag>
            <Tag theme="minimalist" variant="outlined" color="primary" size="sm">
              Primary
            </Tag>
            <Tag theme="minimalist" variant="outlined" color="success" size="sm">
              Success
            </Tag>
            <Tag theme="minimalist" variant="outlined" color="error" size="sm">
              Error
            </Tag>
            <Tag theme="minimalist" variant="outlined" color="warning" size="sm">
              Warning
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-2">
            <Tag theme="minimalist" variant="outlined" size="xs">
              Small
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="sm">
              Medium
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="md">
              Large
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="minimalist" variant="outlined" color="default" size="sm" icon={<UserIcon />}>
              User
            </Tag>
            <Tag theme="minimalist" variant="outlined" color="primary" size="sm" icon={<MailIcon />}>
              Email
            </Tag>
            <Tag theme="minimalist" variant="outlined" color="success" size="sm" icon={<CheckIcon />}>
              Verified
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">Removable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="minimalist" variant="outlined" color="default" size="sm" closable>
              React
            </Tag>
            <Tag theme="minimalist" variant="outlined" color="primary" size="sm" closable>
              TypeScript
            </Tag>
            <Tag theme="minimalist" variant="outlined" color="success" size="sm" closable>
              Tailwind
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">Selectable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="minimalist" variant="outlined" size="sm" clickable>
              Design
            </Tag>
            <Tag theme="minimalist" variant="solid" color="default" size="sm" clickable>
              Development
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="sm" clickable>
              Marketing
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="sm" clickable>
              Sales
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">Tag Cloud</h2>
          <div className="flex flex-wrap gap-2">
            <Tag theme="minimalist" variant="outlined" size="sm">
              JavaScript
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="sm">
              Python
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="sm">
              Java
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="sm">
              C++
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="sm">
              Ruby
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="sm">
              PHP
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="sm">
              Swift
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="sm">
              Kotlin
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="sm">
              Go
            </Tag>
            <Tag theme="minimalist" variant="outlined" size="sm">
              Rust
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
