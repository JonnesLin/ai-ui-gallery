import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

export default function MinimalistAvatarDemo() {
  return (
    <div className="p-8 space-y-8 bg-white min-h-screen">
      {/* Sizes */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Sizes</h3>
        <div className="flex items-end gap-4">
          <Avatar src="https://i.pravatar.cc/32?img=1" alt="Avatar XS" size="xs" />
          <Avatar src="https://i.pravatar.cc/40?img=1" alt="Avatar SM" size="sm" />
          <Avatar src="https://i.pravatar.cc/48?img=1" alt="Avatar MD" size="md" />
          <Avatar src="https://i.pravatar.cc/64?img=1" alt="Avatar LG" size="lg" />
          <Avatar src="https://i.pravatar.cc/80?img=1" alt="Avatar XL" size="xl" />
        </div>
      </div>

      {/* Initials */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Initials</h3>
        <div className="flex items-center gap-4">
          <Avatar name="John Doe" alt="John Doe" />
          <Avatar name="Sarah Connor" alt="Sarah Connor" />
          <Avatar name="Michael Knight" alt="Michael Knight" />
          <Avatar name="Alice Lee" alt="Alice Lee" />
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">With Icon</h3>
        <div className="flex items-center gap-4">
          <Avatar alt="User placeholder" />
          <Avatar alt="User placeholder" />
        </div>
      </div>

      {/* With Status */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">With Status</h3>
        <div className="flex items-center gap-4">
          <Avatar src="https://i.pravatar.cc/48?img=2" alt="User online" status="online" />
          <Avatar src="https://i.pravatar.cc/48?img=3" alt="User away" status="away" />
          <Avatar src="https://i.pravatar.cc/48?img=4" alt="User busy" status="busy" />
          <Avatar src="https://i.pravatar.cc/48?img=5" alt="User offline" status="offline" />
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Avatar Group</h3>
        <AvatarGroup max={4} spacing="normal">
          <Avatar src="https://i.pravatar.cc/40?img=6" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=7" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=8" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=9" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=10" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=11" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=12" alt="Team member" />
        </AvatarGroup>
      </div>

      {/* Square Variants */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Square Variants</h3>
        <div className="flex items-center gap-4">
          <Avatar src="https://i.pravatar.cc/48?img=10" alt="Square avatar" variant="rounded" />
          <Avatar name="Alex Brown" alt="Alex Brown" variant="rounded" />
          <Avatar alt="User placeholder" variant="rounded" />
        </div>
      </div>
    </div>
  );
}
