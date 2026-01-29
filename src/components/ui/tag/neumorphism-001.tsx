import { Tag } from './Tag';

const UserIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function NeumorphismTag() {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-4">Basic Tags</h2>
          <div className="flex flex-wrap gap-3">
            <Tag theme="neumorphism" variant="soft" color="default" rounded="lg">
              Default
            </Tag>
            <Tag theme="neumorphism" variant="soft" color="primary" rounded="lg">
              Primary
            </Tag>
            <Tag theme="neumorphism" variant="soft" color="success" rounded="lg">
              Success
            </Tag>
            <Tag theme="neumorphism" variant="soft" color="error" rounded="lg">
              Error
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Tag theme="neumorphism" variant="soft" size="sm" rounded="lg">
              Small
            </Tag>
            <Tag theme="neumorphism" variant="soft" size="md" rounded="lg">
              Medium
            </Tag>
            <Tag theme="neumorphism" variant="soft" size="lg" rounded="lg">
              Large
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-3">
            <Tag theme="neumorphism" variant="soft" color="default" icon={<UserIcon />} rounded="lg">
              User
            </Tag>
            <Tag theme="neumorphism" variant="soft" color="primary" icon={<MailIcon />} rounded="lg">
              Email
            </Tag>
            <Tag theme="neumorphism" variant="soft" color="success" icon={<CheckIcon />} rounded="lg">
              Verified
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-4">Removable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <Tag theme="neumorphism" variant="soft" closable rounded="lg">
              JavaScript
            </Tag>
            <Tag theme="neumorphism" variant="soft" closable rounded="lg">
              TypeScript
            </Tag>
            <Tag theme="neumorphism" variant="soft" closable rounded="lg">
              Python
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-4">Selectable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <Tag theme="neumorphism" variant="soft" clickable rounded="lg">
              Frontend
            </Tag>
            <Tag theme="neumorphism" variant="solid" clickable rounded="lg">
              Backend
            </Tag>
            <Tag theme="neumorphism" variant="soft" clickable rounded="lg">
              DevOps
            </Tag>
            <Tag theme="neumorphism" variant="soft" clickable rounded="lg">
              Mobile
            </Tag>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-4">Tag Cloud</h2>
          <div className="flex flex-wrap gap-3">
            <Tag theme="neumorphism" variant="soft" rounded="lg">
              HTML
            </Tag>
            <Tag theme="neumorphism" variant="soft" rounded="lg">
              CSS
            </Tag>
            <Tag theme="neumorphism" variant="soft" rounded="lg">
              JavaScript
            </Tag>
            <Tag theme="neumorphism" variant="soft" rounded="lg">
              React
            </Tag>
            <Tag theme="neumorphism" variant="soft" rounded="lg">
              Node.js
            </Tag>
            <Tag theme="neumorphism" variant="soft" rounded="lg">
              MongoDB
            </Tag>
            <Tag theme="neumorphism" variant="soft" rounded="lg">
              PostgreSQL
            </Tag>
            <Tag theme="neumorphism" variant="soft" rounded="lg">
              Docker
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
