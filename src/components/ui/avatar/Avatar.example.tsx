import { Avatar, AvatarGroup } from './index';

/**
 * Comprehensive example showcasing all Avatar component features
 */
export default function AvatarExample() {
  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Avatar Component Examples</h1>
          <p className="text-gray-600">Demonstrating all features of the reusable Avatar system</p>
        </div>

        {/* Basic Usage */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Basic Usage</h2>
          <div className="flex items-center gap-6">
            <div className="space-y-2">
              <Avatar
                src="https://i.pravatar.cc/150?img=1"
                alt="User with image"
              />
              <p className="text-sm text-gray-600">With image</p>
            </div>
            <div className="space-y-2">
              <Avatar
                name="John Doe"
                alt="John Doe"
              />
              <p className="text-sm text-gray-600">With initials</p>
            </div>
            <div className="space-y-2">
              <Avatar alt="Placeholder" />
              <p className="text-sm text-gray-600">Placeholder icon</p>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Sizes</h2>
          <div className="flex items-end gap-4">
            <Avatar name="John Doe" alt="XS" size="xs" />
            <Avatar name="John Doe" alt="SM" size="sm" />
            <Avatar name="John Doe" alt="MD" size="md" />
            <Avatar name="John Doe" alt="LG" size="lg" />
            <Avatar name="John Doe" alt="XL" size="xl" />
            <Avatar name="John Doe" alt="2XL" size="2xl" />
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Shape Variants</h2>
          <div className="flex items-center gap-6">
            <div className="space-y-2">
              <Avatar
                src="https://i.pravatar.cc/150?img=2"
                alt="Circle"
                variant="circle"
                size="lg"
              />
              <p className="text-sm text-gray-600">Circle</p>
            </div>
            <div className="space-y-2">
              <Avatar
                src="https://i.pravatar.cc/150?img=3"
                alt="Rounded"
                variant="rounded"
                size="lg"
              />
              <p className="text-sm text-gray-600">Rounded</p>
            </div>
            <div className="space-y-2">
              <Avatar
                src="https://i.pravatar.cc/150?img=4"
                alt="Square"
                variant="square"
                size="lg"
              />
              <p className="text-sm text-gray-600">Square</p>
            </div>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Status Indicators</h2>
          <div className="flex items-center gap-6">
            <div className="space-y-2">
              <Avatar
                src="https://i.pravatar.cc/150?img=5"
                alt="Online"
                status="online"
                size="lg"
              />
              <p className="text-sm text-gray-600">Online</p>
            </div>
            <div className="space-y-2">
              <Avatar
                src="https://i.pravatar.cc/150?img=6"
                alt="Away"
                status="away"
                size="lg"
              />
              <p className="text-sm text-gray-600">Away</p>
            </div>
            <div className="space-y-2">
              <Avatar
                src="https://i.pravatar.cc/150?img=7"
                alt="Busy"
                status="busy"
                size="lg"
              />
              <p className="text-sm text-gray-600">Busy</p>
            </div>
            <div className="space-y-2">
              <Avatar
                src="https://i.pravatar.cc/150?img=8"
                alt="Offline"
                status="offline"
                size="lg"
              />
              <p className="text-sm text-gray-600">Offline</p>
            </div>
          </div>
        </section>

        {/* Custom Colors */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Custom Colors</h2>
          <div className="flex items-center gap-4">
            <Avatar name="Jane Smith" alt="Blue" color="#3b82f6" size="lg" />
            <Avatar name="Bob Wilson" alt="Purple" color="#8b5cf6" size="lg" />
            <Avatar name="Alice Brown" alt="Pink" color="#ec4899" size="lg" />
            <Avatar name="Charlie Davis" alt="Green" color="#10b981" size="lg" />
          </div>
        </section>

        {/* With Border */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">With Border</h2>
          <div className="flex items-center gap-4">
            <Avatar
              src="https://i.pravatar.cc/150?img=10"
              alt="With border"
              size="lg"
              showBorder
            />
            <Avatar
              name="Emily Johnson"
              alt="With border"
              size="lg"
              showBorder
            />
          </div>
        </section>

        {/* Avatar Groups */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Avatar Groups</h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Normal spacing</p>
              <AvatarGroup max={5} spacing="normal">
                <Avatar src="https://i.pravatar.cc/150?img=11" alt="User 1" />
                <Avatar src="https://i.pravatar.cc/150?img=12" alt="User 2" />
                <Avatar src="https://i.pravatar.cc/150?img=13" alt="User 3" />
                <Avatar src="https://i.pravatar.cc/150?img=14" alt="User 4" />
                <Avatar src="https://i.pravatar.cc/150?img=15" alt="User 5" />
                <Avatar src="https://i.pravatar.cc/150?img=16" alt="User 6" />
                <Avatar src="https://i.pravatar.cc/150?img=17" alt="User 7" />
                <Avatar src="https://i.pravatar.cc/150?img=18" alt="User 8" />
              </AvatarGroup>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Tight spacing</p>
              <AvatarGroup max={4} spacing="tight">
                <Avatar name="John Doe" alt="User 1" />
                <Avatar name="Jane Smith" alt="User 2" />
                <Avatar name="Bob Wilson" alt="User 3" />
                <Avatar name="Alice Brown" alt="User 4" />
                <Avatar name="Charlie Davis" alt="User 5" />
                <Avatar name="Emily Johnson" alt="User 6" />
              </AvatarGroup>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Loose spacing</p>
              <AvatarGroup max={3} spacing="loose">
                <Avatar src="https://i.pravatar.cc/150?img=19" alt="User 1" />
                <Avatar src="https://i.pravatar.cc/150?img=20" alt="User 2" />
                <Avatar src="https://i.pravatar.cc/150?img=21" alt="User 3" />
                <Avatar src="https://i.pravatar.cc/150?img=22" alt="User 4" />
                <Avatar src="https://i.pravatar.cc/150?img=23" alt="User 5" />
              </AvatarGroup>
            </div>
          </div>
        </section>

        {/* Image Error Handling */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Image Error Handling</h2>
          <div className="flex items-center gap-4">
            <div className="space-y-2">
              <Avatar
                src="https://invalid-url.example.com/image.jpg"
                name="Sarah Connor"
                alt="Fallback to initials"
                size="lg"
              />
              <p className="text-sm text-gray-600">Failed image → initials</p>
            </div>
            <div className="space-y-2">
              <Avatar
                src="https://invalid-url.example.com/image.jpg"
                alt="Fallback to icon"
                size="lg"
              />
              <p className="text-sm text-gray-600">Failed image → icon</p>
            </div>
          </div>
        </section>

        {/* Custom Styling */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Custom Styling</h2>
          <div className="flex items-center gap-4">
            <Avatar
              name="Custom Style"
              alt="Custom"
              size="lg"
              className="ring-4 ring-blue-500 ring-offset-2"
            />
            <Avatar
              name="Shadow"
              alt="Shadow"
              size="lg"
              className="shadow-2xl"
            />
            <Avatar
              name="Opacity"
              alt="Opacity"
              size="lg"
              className="opacity-60"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
