import { Empty } from './Empty';

export default function RetroEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-100 to-orange-200">
      <Empty
        theme="material"
        image={
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(234,88,12,0.4)]">
              <svg
                className="w-1/2 h-1/2 text-orange-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-orange-100"></div>
          </div>
        }
        title="Nothing to Show"
        description="Looks like you haven't added anything yet. Time to get creative and fill this space!"
        action={
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-[4px_4px_0px_0px_rgba(234,88,12,1)] hover:shadow-[2px_2px_0px_0px_rgba(234,88,12,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            Get Started
          </button>
        }
      />
    </div>
  );
}
