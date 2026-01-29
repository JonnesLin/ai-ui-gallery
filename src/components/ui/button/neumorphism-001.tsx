import { Button } from './Button';

const PlusIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

export default function NeumorphismButton() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-[#e0e5ec]">
      <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Neumorphism Buttons</h2>

      <div className="flex flex-wrap items-center gap-6">
        <Button theme="neumorphism" variant="primary">
          Raised
        </Button>

        <Button theme="neumorphism" variant="secondary">
          Pressed
        </Button>

        <Button theme="neumorphism" variant="ghost">
          Flat
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <Button theme="neumorphism" variant="primary" className="rounded-full px-10">
          Pill Shape
        </Button>

        <Button theme="neumorphism" variant="primary" className="rounded-lg">
          Square
        </Button>

        <Button theme="neumorphism" variant="primary" className="p-4">
          <PlusIcon />
        </Button>

        <Button theme="neumorphism" variant="primary" className="p-4 rounded-full">
          <HeartIcon />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <Button theme="neumorphism" variant="primary" className="text-blue-500">
          Primary
        </Button>

        <Button theme="neumorphism" variant="success">
          Success
        </Button>

        <Button theme="neumorphism" variant="danger">
          Danger
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <div className="flex bg-[#e0e5ec] rounded-xl shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff] p-1">
          <Button
            theme="neumorphism"
            variant="primary"
            className="rounded-lg shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff] px-6 py-2"
          >
            Day
          </Button>
          <button className="px-6 py-2 text-sm font-medium text-gray-400 rounded-lg transition-all duration-200 hover:text-gray-600 focus:outline-none">
            Week
          </button>
          <button className="px-6 py-2 text-sm font-medium text-gray-400 rounded-lg transition-all duration-200 hover:text-gray-600 focus:outline-none">
            Month
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <Button theme="neumorphism" variant="primary" disabled>
          Disabled
        </Button>
      </div>

      <Button theme="neumorphism" variant="primary" size="xl" fullWidth className="max-w-md rounded-2xl">
        Get Started Now
      </Button>
    </div>
  );
}
