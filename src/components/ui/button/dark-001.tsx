import { Button } from './Button';

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const UploadIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    />
  </svg>
);

export default function DarkButton() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-[#0a0a0a]">
      <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Dark Mode Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        <Button theme="dark" variant="primary">
          Get Started
        </Button>

        <Button theme="dark" variant="secondary">
          Learn More
        </Button>

        <Button theme="dark" variant="ghost">
          Cancel
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button theme="dark" variant="primary">
          Primary
        </Button>

        <Button theme="dark" variant="success">
          Success
        </Button>

        <Button theme="dark" variant="danger">
          Danger
        </Button>

        <Button theme="dark" variant="warning">
          Warning
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button theme="dark" variant="secondary" size="md">
          Elevated
        </Button>

        <Button theme="dark" variant="primary" size="md" className="relative overflow-hidden group">
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity" />
          <span className="absolute inset-[1px] rounded-[7px] bg-zinc-900 group-hover:bg-zinc-800 transition-colors" />
          <span className="relative">Gradient Border</span>
        </Button>

        <Button
          theme="dark"
          variant="secondary"
          className="border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          Glow
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button theme="dark" variant="secondary" className="p-3">
          <PlusIcon />
        </Button>

        <Button theme="dark" variant="secondary" className="p-3 rounded-full">
          <SearchIcon />
        </Button>

        <Button theme="dark" variant="secondary" leftIcon={<UploadIcon />}>
          Upload
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button theme="dark" variant="primary" loading>
          Loading
        </Button>

        <Button theme="dark" variant="secondary" disabled>
          Disabled
        </Button>
      </div>

      <Button theme="dark" variant="primary" size="lg" fullWidth className="max-w-md">
        Continue to Checkout
      </Button>
    </div>
  );
}
