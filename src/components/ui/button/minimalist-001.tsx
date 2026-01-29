import { Button } from './Button';

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function MinimalistButton() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-white min-h-screen">
      <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Minimalist Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        <Button theme="minimalist" variant="primary">
          Get Started
        </Button>

        <Button theme="minimalist" variant="secondary">
          Learn More
        </Button>

        <Button theme="minimalist" variant="ghost">
          View Details
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button theme="minimalist" variant="primary" size="sm">
          Small
        </Button>

        <Button theme="minimalist" variant="primary" size="md">
          Medium
        </Button>

        <Button theme="minimalist" variant="primary" size="lg">
          Large
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button theme="minimalist" variant="primary" rightIcon={<ArrowIcon />} className="group">
          Continue
        </Button>

        <Button theme="minimalist" variant="primary" loading>
          Processing
        </Button>

        <Button theme="minimalist" variant="primary" disabled>
          Disabled
        </Button>
      </div>

      <Button theme="minimalist" variant="primary" size="lg" fullWidth className="max-w-md">
        FULL WIDTH ACTION
      </Button>
    </div>
  );
}
