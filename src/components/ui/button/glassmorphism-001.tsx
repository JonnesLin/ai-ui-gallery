import { Button } from './Button';

const HeartIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

export default function GlassmorphismButton() {
  return (
    <div
      className="flex flex-col gap-6 p-8 min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}
    >
      <h2 className="text-sm font-medium text-white/80 uppercase tracking-widest">Glassmorphism Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        <Button theme="glassmorphism" variant="primary">
          Get Started
        </Button>

        <Button theme="glassmorphism" variant="secondary">
          Learn More
        </Button>

        <Button
          theme="glassmorphism"
          variant="ghost"
          className="backdrop-blur-xl bg-black/20 border border-white/10"
        >
          Dark Glass
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button theme="glassmorphism" variant="primary" className="rounded-full px-10">
          Pill Button
        </Button>

        <Button theme="glassmorphism" variant="primary" className="rounded-lg">
          Square
        </Button>

        <Button theme="glassmorphism" variant="primary" className="p-4">
          <HeartIcon />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button
          theme="glassmorphism"
          variant="primary"
          className="relative overflow-hidden group"
        >
          <span className="relative z-10">Shimmer Effect</span>
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </Button>

        <Button
          theme="glassmorphism"
          variant="primary"
          className="hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          Glow Effect
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button theme="glassmorphism" variant="primary" loading>
          Loading
        </Button>

        <Button theme="glassmorphism" variant="primary" disabled>
          Disabled
        </Button>
      </div>

      <Button
        theme="glassmorphism"
        variant="primary"
        size="xl"
        fullWidth
        className="max-w-md bg-white/25 border-white/40 shadow-2xl hover:bg-white/35 hover:scale-[1.02] rounded-3xl"
      >
        Start Free Trial
      </Button>
    </div>
  );
}
