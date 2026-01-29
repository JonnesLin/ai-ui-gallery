import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

export default function NeumorphismAvatarDemo() {
  return (
    <div className="p-8 space-y-8 min-h-screen bg-[#e0e5ec]">
      {/* Sizes */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Sizes</h3>
        <div className="flex items-end gap-5">
          <div className="p-1 rounded-full shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
            <Avatar src="https://i.pravatar.cc/32?img=1" alt="Avatar XS" size="xs" />
          </div>
          <div className="p-1 rounded-full shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]">
            <Avatar src="https://i.pravatar.cc/40?img=1" alt="Avatar SM" size="sm" />
          </div>
          <div className="p-1.5 rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            <Avatar src="https://i.pravatar.cc/48?img=1" alt="Avatar MD" size="md" />
          </div>
          <div className="p-2 rounded-full shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
            <Avatar src="https://i.pravatar.cc/64?img=1" alt="Avatar LG" size="lg" />
          </div>
          <div className="p-2.5 rounded-full shadow-[10px_10px_20px_#b8bec7,-10px_-10px_20px_#ffffff]">
            <Avatar src="https://i.pravatar.cc/80?img=1" alt="Avatar XL" size="xl" />
          </div>
        </div>
      </div>

      {/* Initials */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Initials</h3>
        <div className="flex items-center gap-5">
          <Avatar
            name="John Doe"
            alt="John Doe"
            size="lg"
            className="bg-[#e0e5ec] shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] text-gray-600"
          />
          <Avatar
            name="Sarah Connor"
            alt="Sarah Connor"
            size="lg"
            className="bg-[#e0e5ec] shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] text-gray-600"
          />
          <Avatar
            name="Michael Knight"
            alt="Michael Knight"
            size="lg"
            className="bg-[#e0e5ec] shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] text-gray-600"
          />
          <Avatar
            name="Alice Lee"
            alt="Alice Lee"
            size="lg"
            className="bg-[#e0e5ec] shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] text-gray-600"
          />
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">With Icon</h3>
        <div className="flex items-center gap-5">
          <Avatar
            alt="User placeholder"
            size="lg"
            className="bg-[#e0e5ec] shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff] text-gray-500"
          />
          <Avatar
            alt="User placeholder"
            size="lg"
            className="bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] text-gray-500"
          />
        </div>
      </div>

      {/* With Status */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">With Status</h3>
        <div className="flex items-center gap-5">
          <div className="p-1.5 rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            <Avatar
              src="https://i.pravatar.cc/48?img=2"
              alt="User online"
              status="online"
              theme="neumorphism"
            />
          </div>
          <div className="p-1.5 rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            <Avatar
              src="https://i.pravatar.cc/48?img=3"
              alt="User away"
              status="away"
              theme="neumorphism"
            />
          </div>
          <div className="p-1.5 rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            <Avatar
              src="https://i.pravatar.cc/48?img=4"
              alt="User busy"
              status="busy"
              theme="neumorphism"
            />
          </div>
          <div className="p-1.5 rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            <Avatar
              src="https://i.pravatar.cc/48?img=5"
              alt="User offline"
              status="offline"
              theme="neumorphism"
            />
          </div>
        </div>
      </div>

      {/* Avatar Group */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Avatar Group</h3>
        <div className="flex -space-x-2">
          <div className="p-1 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
            <Avatar src="https://i.pravatar.cc/40?img=6" alt="Team member" />
          </div>
          <div className="p-1 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
            <Avatar src="https://i.pravatar.cc/40?img=7" alt="Team member" />
          </div>
          <div className="p-1 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
            <Avatar src="https://i.pravatar.cc/40?img=8" alt="Team member" />
          </div>
          <div className="p-1 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
            <Avatar src="https://i.pravatar.cc/40?img=9" alt="Team member" />
          </div>
          <div className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] flex items-center justify-center text-sm font-medium text-gray-600">
            +5
          </div>
        </div>
      </div>

      {/* Inset Variant */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Inset Variant</h3>
        <div className="flex items-center gap-5">
          <div className="p-2 rounded-full shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
            <Avatar src="https://i.pravatar.cc/48?img=10" alt="Inset avatar" />
          </div>
          <Avatar
            name="Alex Brown"
            alt="Alex Brown"
            size="lg"
            className="bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff] text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
