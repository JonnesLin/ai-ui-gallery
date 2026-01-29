import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

export default function DarkAvatarDemo() {
  return (
    <div className="p-8 space-y-8 min-h-screen bg-gray-950">
      {/* Sizes */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Sizes</h3>
        <div className="flex items-end gap-4">
          <Avatar src="https://i.pravatar.cc/32?img=1" alt="Avatar XS" size="xs" showBorder theme="dark" className="ring-gray-800" />
          <Avatar src="https://i.pravatar.cc/40?img=1" alt="Avatar SM" size="sm" showBorder theme="dark" className="ring-gray-800" />
          <Avatar src="https://i.pravatar.cc/48?img=1" alt="Avatar MD" size="md" showBorder theme="dark" className="ring-gray-800" />
          <Avatar src="https://i.pravatar.cc/64?img=1" alt="Avatar LG" size="lg" showBorder theme="dark" className="ring-gray-800" />
          <Avatar src="https://i.pravatar.cc/80?img=1" alt="Avatar XL" size="xl" showBorder theme="dark" className="ring-gray-800" />
        </div>
      </div>

      {/* Initials */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Initials</h3>
        <div className="flex items-center gap-4">
          <Avatar name="John Doe" alt="John Doe" size="lg" color="#374151" />
          <Avatar name="Sarah Connor" alt="Sarah Connor" size="lg" color="#312e81" />
          <Avatar name="Michael Knight" alt="Michael Knight" size="lg" color="#064e3b" />
          <Avatar name="Alice Lee" alt="Alice Lee" size="lg" color="#78350f" />
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">With Icon</h3>
        <div className="flex items-center gap-4">
          <Avatar alt="User placeholder" size="lg" className="bg-gray-800 border border-gray-700" />
          <Avatar alt="User placeholder" size="lg" className="bg-gray-900 border border-gray-800" />
        </div>
      </div>

      {/* With Status */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">With Status</h3>
        <div className="flex items-center gap-4">
          <Avatar src="https://i.pravatar.cc/48?img=2" alt="User online" size="lg" status="online" showBorder theme="dark" className="ring-gray-800" />
          <Avatar src="https://i.pravatar.cc/48?img=3" alt="User away" size="lg" status="away" showBorder theme="dark" className="ring-gray-800" />
          <Avatar src="https://i.pravatar.cc/48?img=4" alt="User busy" size="lg" status="busy" showBorder theme="dark" className="ring-gray-800" />
          <Avatar src="https://i.pravatar.cc/48?img=5" alt="User offline" size="lg" status="offline" showBorder theme="dark" className="ring-gray-800" />
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Avatar Group</h3>
        <AvatarGroup max={4} spacing="tight" theme="dark">
          <Avatar src="https://i.pravatar.cc/40?img=6" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=7" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=8" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=9" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=10" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=11" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=12" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=13" alt="Team member" />
          <Avatar src="https://i.pravatar.cc/40?img=14" alt="Team member" />
        </AvatarGroup>
      </div>

      {/* Glow Variant */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Glow Variant</h3>
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-md"></div>
            <Avatar src="https://i.pravatar.cc/48?img=10" alt="Glow avatar" size="lg" showBorder className="relative ring-cyan-500/50" />
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-md"></div>
            <Avatar src="https://i.pravatar.cc/48?img=11" alt="Glow avatar" size="lg" showBorder className="relative ring-purple-500/50" />
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-md"></div>
            <Avatar src="https://i.pravatar.cc/48?img=12" alt="Glow avatar" size="lg" showBorder className="relative ring-emerald-500/50" />
          </div>
        </div>
      </div>
    </div>
  );
}
