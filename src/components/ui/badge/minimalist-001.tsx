import { Badge } from './Badge';

export default function MinimalistBadge() {
  return (
    <div className="min-h-screen bg-white p-8 space-y-10">
      {/* Outlined Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Outlined</h3>
        <div className="flex flex-wrap gap-2">
          <Badge theme="minimalist" variant="outlined" color="default" rounded="sm">
            Default
          </Badge>
          <Badge theme="minimalist" variant="outlined" color="primary" rounded="sm">
            Primary
          </Badge>
          <Badge theme="minimalist" variant="outlined" color="success" rounded="sm">
            Success
          </Badge>
          <Badge theme="minimalist" variant="outlined" color="warning" rounded="sm">
            Warning
          </Badge>
          <Badge theme="minimalist" variant="outlined" color="error" rounded="sm">
            Error
          </Badge>
          <Badge theme="minimalist" variant="outlined" color="info" rounded="sm">
            Info
          </Badge>
        </div>
      </section>

      {/* Solid Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Solid</h3>
        <div className="flex flex-wrap gap-2">
          <Badge theme="minimalist" variant="solid" color="default" rounded="sm">
            Default
          </Badge>
          <Badge theme="minimalist" variant="solid" color="primary" rounded="sm">
            Primary
          </Badge>
          <Badge theme="minimalist" variant="solid" color="success" rounded="sm">
            Success
          </Badge>
          <Badge theme="minimalist" variant="solid" color="warning" rounded="sm">
            Warning
          </Badge>
          <Badge theme="minimalist" variant="solid" color="error" rounded="sm">
            Error
          </Badge>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Sizes</h3>
        <div className="flex items-center gap-2">
          <Badge theme="minimalist" variant="outlined" color="default" size="xs" rounded="sm">
            Small
          </Badge>
          <Badge theme="minimalist" variant="outlined" color="default" size="sm" rounded="sm">
            Medium
          </Badge>
          <Badge theme="minimalist" variant="outlined" color="default" size="md" rounded="sm">
            Large
          </Badge>
        </div>
      </section>

      {/* With Dot */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">With Dot</h3>
        <div className="flex flex-wrap gap-2">
          <Badge theme="minimalist" variant="dot" color="success" rounded="sm" dot dotColor="bg-green-500">
            Online
          </Badge>
          <Badge theme="minimalist" variant="dot" color="default" rounded="sm" dot dotColor="bg-gray-400">
            Offline
          </Badge>
          <Badge theme="minimalist" variant="dot" color="warning" rounded="sm" dot dotColor="bg-amber-500">
            Away
          </Badge>
          <Badge theme="minimalist" variant="dot" color="error" rounded="sm" dot dotColor="bg-red-500">
            Busy
          </Badge>
        </div>
      </section>

      {/* Pill Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Pill</h3>
        <div className="flex flex-wrap gap-2">
          <Badge theme="minimalist" variant="outlined" color="default" rounded="full">
            Tag
          </Badge>
          <Badge theme="minimalist" variant="outlined" color="primary" rounded="full">
            Feature
          </Badge>
          <Badge theme="minimalist" variant="soft" color="primary" rounded="full" className="text-purple-700 bg-purple-100">
            Beta
          </Badge>
          <Badge theme="minimalist" variant="outlined" color="success" rounded="full">
            New
          </Badge>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Count</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-2 text-gray-600 border border-gray-200 rounded">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <Badge theme="minimalist" variant="solid" color="default" size="xs" rounded="sm" className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 text-[10px]">
              3
            </Badge>
          </div>
          <div className="relative inline-flex">
            <button className="p-2 text-gray-600 border border-gray-200 rounded">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <Badge theme="minimalist" variant="solid" color="error" size="xs" rounded="sm" className="absolute -top-1 -right-1.5 min-w-[16px] h-4 px-1 text-[10px]">
              12
            </Badge>
          </div>
          <div className="relative inline-flex">
            <button className="p-2 text-gray-600 border border-gray-200 rounded">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <Badge theme="minimalist" variant="solid" color="primary" size="xs" rounded="sm" className="absolute -top-1 -right-2 min-w-[20px] h-4 px-1 text-[10px]">
              99+
            </Badge>
          </div>
        </div>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Removable</h3>
        <div className="flex flex-wrap gap-2">
          <Badge theme="minimalist" variant="outlined" color="default" rounded="sm" removable onRemove={() => console.log('Remove React')}>
            React
          </Badge>
          <Badge theme="minimalist" variant="outlined" color="primary" rounded="sm" removable onRemove={() => console.log('Remove TypeScript')}>
            TypeScript
          </Badge>
          <Badge theme="minimalist" variant="outlined" color="success" rounded="sm" removable onRemove={() => console.log('Remove Tailwind')}>
            Tailwind
          </Badge>
        </div>
      </section>
    </div>
  );
}
