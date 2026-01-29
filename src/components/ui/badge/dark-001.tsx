import { Badge } from './Badge';

export default function DarkBadge() {
  return (
    <div className="min-h-screen bg-gray-950 p-8 space-y-10">
      {/* Soft Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Soft</h3>
        <div className="flex flex-wrap gap-3">
          <Badge theme="dark" variant="soft" color="default" size="md">
            Default
          </Badge>
          <Badge theme="dark" variant="soft" color="primary" size="md">
            Primary
          </Badge>
          <Badge theme="dark" variant="soft" color="success" size="md">
            Success
          </Badge>
          <Badge theme="dark" variant="soft" color="warning" size="md">
            Warning
          </Badge>
          <Badge theme="dark" variant="soft" color="error" size="md">
            Error
          </Badge>
          <Badge theme="dark" variant="soft" color="info" size="md">
            Info
          </Badge>
        </div>
      </section>

      {/* Solid Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Solid</h3>
        <div className="flex flex-wrap gap-3">
          <Badge theme="dark" variant="solid" color="default" size="md">
            Default
          </Badge>
          <Badge theme="dark" variant="solid" color="primary" size="md">
            Primary
          </Badge>
          <Badge theme="dark" variant="solid" color="success" size="md">
            Success
          </Badge>
          <Badge theme="dark" variant="solid" color="warning" size="md">
            Warning
          </Badge>
          <Badge theme="dark" variant="solid" color="error" size="md">
            Error
          </Badge>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Sizes</h3>
        <div className="flex items-center gap-3">
          <Badge theme="dark" variant="soft" color="default" size="sm" rounded="sm">
            Small
          </Badge>
          <Badge theme="dark" variant="soft" color="default" size="md">
            Medium
          </Badge>
          <Badge theme="dark" variant="soft" color="default" size="lg">
            Large
          </Badge>
        </div>
      </section>

      {/* With Dot */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">With Dot</h3>
        <div className="flex flex-wrap gap-3">
          <Badge theme="dark" variant="dot" color="default" size="md" dot dotColor="bg-green-500" dotAnimate>
            Online
          </Badge>
          <Badge theme="dark" variant="dot" color="default" size="md" dot dotColor="bg-gray-500">
            Offline
          </Badge>
          <Badge theme="dark" variant="dot" color="default" size="md" dot dotColor="bg-amber-500">
            Away
          </Badge>
          <Badge theme="dark" variant="dot" color="default" size="md" dot dotColor="bg-red-500">
            Busy
          </Badge>
        </div>
      </section>

      {/* Pill Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Pill</h3>
        <div className="flex flex-wrap gap-3">
          <Badge theme="dark" variant="soft" color="default" size="md" rounded="full">
            Tag
          </Badge>
          <Badge theme="dark" variant="soft" color="primary" size="md" rounded="full">
            Feature
          </Badge>
          <Badge theme="dark" variant="soft" color="primary" size="md" rounded="full" className="text-purple-400 bg-purple-950 border border-purple-800">
            Beta
          </Badge>
          <Badge theme="dark" variant="soft" color="success" size="md" rounded="full">
            New
          </Badge>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Count</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-3 text-gray-400 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 text-xs font-bold text-white bg-red-600 rounded-full flex items-center justify-center">
              5
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-gray-400 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[24px] h-5 px-1.5 text-xs font-bold text-white bg-blue-600 rounded-full flex items-center justify-center">
              24
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-gray-400 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-750 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2.5 min-w-[28px] h-5 px-1.5 text-xs font-bold text-white bg-green-600 rounded-full flex items-center justify-center">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* Outlined Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Outlined</h3>
        <div className="flex flex-wrap gap-3">
          <Badge theme="dark" variant="outlined" color="default" size="md">
            Default
          </Badge>
          <Badge theme="dark" variant="outlined" color="primary" size="md">
            Primary
          </Badge>
          <Badge theme="dark" variant="outlined" color="success" size="md">
            Success
          </Badge>
          <Badge theme="dark" variant="outlined" color="warning" size="md">
            Warning
          </Badge>
          <Badge theme="dark" variant="outlined" color="error" size="md">
            Error
          </Badge>
        </div>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Removable</h3>
        <div className="flex flex-wrap gap-3">
          <Badge theme="dark" variant="soft" color="default" size="md" removable onRemove={() => console.log('Remove React')}>
            React
          </Badge>
          <Badge theme="dark" variant="soft" color="primary" size="md" removable onRemove={() => console.log('Remove TypeScript')}>
            TypeScript
          </Badge>
          <Badge theme="dark" variant="soft" color="info" size="md" removable onRemove={() => console.log('Remove Tailwind')}>
            Tailwind
          </Badge>
        </div>
      </section>
    </div>
  )
}
