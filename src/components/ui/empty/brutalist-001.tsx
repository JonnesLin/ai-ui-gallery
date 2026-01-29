import { Empty } from './Empty';

export default function BrutalistEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-300">
      <Empty
        theme="flat"
        image={
          <div className="w-full h-full bg-black border-8 border-black flex items-center justify-center transform -rotate-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <svg
              className="w-1/2 h-1/2 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-3.86-.94-7-5.03-7-9.5V8.3l7-3.11 7 3.11V11c0 4.47-3.14 8.56-7 9.5z" />
            </svg>
          </div>
        }
        title="EMPTY"
        description="NO DATA EXISTS IN THIS SPACE"
        action={
          <button className="px-8 py-4 bg-black text-yellow-300 font-black text-lg uppercase border-4 border-black hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all">
            CREATE
          </button>
        }
        size="lg"
      />
    </div>
  );
}
