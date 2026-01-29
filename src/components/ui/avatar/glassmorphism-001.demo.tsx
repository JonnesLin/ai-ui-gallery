import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

export default function GlassmorphismAvatarDemo() {
  return (
    <div className="p-8 space-y-8 min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Sizes */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">Sizes</h3>
        <div className="flex items-end gap-4">
          <div className="p-0.5 rounded-full bg-white/20 backdrop-blur-sm">
            <Avatar src="https://i.pravatar.cc/32?img=1" alt="Avatar XS" size="xs" />
          </div>
          <div className="p-0.5 rounded-full bg-white/20 backdrop-blur-sm">
            <Avatar src="https://i.pravatar.cc/40?img=1" alt="Avatar SM" size="sm" />
          </div>
          <div className="p-1 rounded-full bg-white/20 backdrop-blur-sm">
            <Avatar src="https://i.pravatar.cc/48?img=1" alt="Avatar MD" size="md" />
          </div>
          <div className="p-1 rounded-full bg-white/20 backdrop-blur-sm">
            <Avatar src="https://i.pravatar.cc/64?img=1" alt="Avatar LG" size="lg" />
          </div>
          <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm">
            <Avatar src="https://i.pravatar.cc/80?img=1" alt="Avatar XL" size="xl" />
          </div>
        </div>
      </div>

      {/* Initials */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">Initials</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="John Doe"
            alt="John Doe"
            size="lg"
            className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white"
          />
          <Avatar
            name="Sarah Connor"
            alt="Sarah Connor"
            size="lg"
            className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white"
          />
          <Avatar
            name="Michael Knight"
            alt="Michael Knight"
            size="lg"
            className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white"
          />
          <Avatar
            name="Alice Lee"
            alt="Alice Lee"
            size="lg"
            className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white"
          />
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">With Icon</h3>
        <div className="flex items-center gap-4">
          <Avatar
            alt="User placeholder"
            size="lg"
            className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
          />
          <Avatar
            alt="User placeholder"
            size="lg"
            className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
          />
        </div>
      </div>

      {/* With Status */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">With Status</h3>
        <div className="flex items-center gap-4">
          <div className="p-1 rounded-full bg-white/20 backdrop-blur-sm">
            <Avatar
              src="https://i.pravatar.cc/48?img=2"
              alt="User online"
              status="online"
              className="shadow-[0_0_15px_rgba(34,197,94,0.5)]"
            />
          </div>
          <div className="p-1 rounded-full bg-white/20 backdrop-blur-sm">
            <Avatar
              src="https://i.pravatar.cc/48?img=3"
              alt="User away"
              status="away"
              className="shadow-[0_0_15px_rgba(250,204,21,0.5)]"
            />
          </div>
          <div className="p-1 rounded-full bg-white/20 backdrop-blur-sm">
            <Avatar
              src="https://i.pravatar.cc/48?img=4"
              alt="User busy"
              status="busy"
              className="shadow-[0_0_15px_rgba(239,68,68,0.5)]"
            />
          </div>
          <div className="p-1 rounded-full bg-white/20 backdrop-blur-sm">
            <Avatar src="https://i.pravatar.cc/48?img=5" alt="User offline" status="offline" />
          </div>
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">Avatar Group</h3>
        <div className="flex -space-x-3">
          <div className="p-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <Avatar src="https://i.pravatar.cc/40?img=6" alt="Team member" />
          </div>
          <div className="p-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <Avatar src="https://i.pravatar.cc/40?img=7" alt="Team member" />
          </div>
          <div className="p-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <Avatar src="https://i.pravatar.cc/40?img=8" alt="Team member" />
          </div>
          <div className="p-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <Avatar src="https://i.pravatar.cc/40?img=9" alt="Team member" />
          </div>
          <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-sm font-medium text-white shadow-lg">
            +5
          </div>
        </div>
      </div>

      {/* Ring Variant */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">Ring Variant</h3>
        <div className="flex items-center gap-4">
          <div className="p-1 rounded-full bg-gradient-to-r from-white/40 to-white/10">
            <Avatar src="https://i.pravatar.cc/48?img=10" alt="Ring avatar" size="lg" />
          </div>
          <div className="p-1 rounded-full bg-gradient-to-r from-cyan-400/50 to-blue-500/50">
            <Avatar src="https://i.pravatar.cc/48?img=11" alt="Ring avatar" size="lg" />
          </div>
          <div className="p-1 rounded-full bg-gradient-to-r from-pink-400/50 to-purple-500/50">
            <Avatar src="https://i.pravatar.cc/48?img=12" alt="Ring avatar" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
