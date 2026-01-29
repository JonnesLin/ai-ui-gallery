import { Badge } from './Badge';

export default function GlassmorphismBadge() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8 space-y-10">
      {/* Soft Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">Soft</h3>
        <div className="flex flex-wrap gap-3">
          <Badge theme="glassmorphism" variant="soft" color="default" size="md" rounded="full">
            Default
          </Badge>
          <Badge theme="glassmorphism" variant="soft" color="primary" size="md" rounded="full">
            Primary
          </Badge>
          <Badge theme="glassmorphism" variant="soft" color="success" size="md" rounded="full">
            Success
          </Badge>
          <Badge theme="glassmorphism" variant="soft" color="warning" size="md" rounded="full">
            Warning
          </Badge>
          <Badge theme="glassmorphism" variant="soft" color="error" size="md" rounded="full">
            Error
          </Badge>
          <Badge theme="glassmorphism" variant="soft" color="info" size="md" rounded="full">
            Info
          </Badge>
        </div>
      </section>

      {/* Solid Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">Solid</h3>
        <div className="flex flex-wrap gap-3">
          <Badge theme="glassmorphism" variant="solid" color="default" size="md" rounded="lg">
            Frosted Light
          </Badge>
          <Badge theme="glassmorphism" variant="solid" color="default" size="md" rounded="lg" className="bg-black/20">
            Frosted Dark
          </Badge>
          <Badge theme="glassmorphism" variant="solid" color="default" size="md" rounded="lg" className="bg-gradient-to-r from-white/20 to-white/5">
            Frosted Gradient
          </Badge>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">Sizes</h3>
        <div className="flex items-center gap-3">
          <Badge theme="glassmorphism" variant="soft" color="default" size="sm" rounded="full">
            Small
          </Badge>
          <Badge theme="glassmorphism" variant="soft" color="default" size="md" rounded="full">
            Medium
          </Badge>
          <Badge theme="glassmorphism" variant="soft" color="default" size="lg" rounded="full">
            Large
          </Badge>
        </div>
      </section>

      {/* With Dot */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">With Dot</h3>
        <div className="flex flex-wrap gap-3">
          <Badge theme="glassmorphism" variant="dot" color="default" size="md" rounded="full" dot dotColor="bg-green-400 shadow-lg shadow-green-400/50" dotAnimate>
            Online
          </Badge>
          <Badge theme="glassmorphism" variant="dot" color="default" size="md" rounded="full" dot dotColor="bg-gray-400">
            Offline
          </Badge>
          <Badge theme="glassmorphism" variant="dot" color="default" size="md" rounded="full" dot dotColor="bg-amber-400 shadow-lg shadow-amber-400/50">
            Away
          </Badge>
          <Badge theme="glassmorphism" variant="dot" color="default" size="md" rounded="full" dot dotColor="bg-red-400 shadow-lg shadow-red-400/50">
            Busy
          </Badge>
        </div>
      </section>

      {/* Glow Effect */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">Glow Effect</h3>
        <div className="flex flex-wrap gap-3">
          <Badge theme="glassmorphism" variant="solid" color="primary" size="md" rounded="full">
            Blue Glow
          </Badge>
          <Badge theme="glassmorphism" variant="soft" color="primary" size="md" rounded="full" className="text-purple-100 bg-purple-500/30 border-purple-400/50 shadow-lg shadow-purple-500/30">
            Purple Glow
          </Badge>
          <Badge theme="glassmorphism" variant="soft" color="error" size="md" rounded="full" className="text-pink-100 bg-pink-500/30 border-pink-400/50 shadow-lg shadow-pink-500/30">
            Pink Glow
          </Badge>
          <Badge theme="glassmorphism" variant="solid" color="info" size="md" rounded="full">
            Cyan Glow
          </Badge>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">Count</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-3 text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 text-xs font-bold text-white bg-red-500/80 backdrop-blur-sm border border-red-400/50 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
              5
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[24px] h-5 px-1.5 text-xs font-bold text-white bg-blue-500/80 backdrop-blur-sm border border-blue-400/50 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
              24
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2.5 min-w-[28px] h-5 px-1.5 text-xs font-bold text-white bg-green-500/80 backdrop-blur-sm border border-green-400/50 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-white/70 uppercase">Removable</h3>
        <div className="flex flex-wrap gap-3">
          <Badge theme="glassmorphism" variant="soft" color="default" size="md" rounded="full" removable onRemove={() => console.log('Remove React')}>
            React
          </Badge>
          <Badge theme="glassmorphism" variant="soft" color="primary" size="md" rounded="full" removable onRemove={() => console.log('Remove TypeScript')}>
            TypeScript
          </Badge>
          <Badge theme="glassmorphism" variant="soft" color="primary" size="md" rounded="full" removable onRemove={() => console.log('Remove Tailwind')} className="text-purple-100 bg-purple-500/30 border-purple-300/30">
            Tailwind
          </Badge>
        </div>
      </section>
    </div>
  )
}
