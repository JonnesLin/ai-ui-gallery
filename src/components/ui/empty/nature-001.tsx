import { Empty } from './Empty';

export default function NatureEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-emerald-100">
      <Empty
        theme="pastel"
        image={
          <svg
            className="w-full h-full text-green-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.89-2.5c1.32.46 3.48.65 5.4.11 2.32-.65 4.03-2.27 5-4.61 1.02-2.45 1.37-5.63-.6-7.5zm-1 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            <path d="M5.5 9c0-2.5 2-4.5 4.5-4.5 1.42 0 2.69.67 3.5 1.71C14.31 5.17 15.58 4.5 17 4.5c2.5 0 4.5 2 4.5 4.5 0 .66-.14 1.28-.39 1.84-.72-.64-1.51-1.21-2.36-1.7.11-.35.17-.73.17-1.14 0-1.66-1.34-3-3-3-.83 0-1.58.34-2.12.88l-.88.88-.88-.88C11.58 4.34 10.83 4 10 4 8.34 4 7 5.34 7 7c0 .41.06.79.17 1.14-1.97 1.16-3.67 2.93-4.84 5.08C2.13 12.45 2 11.74 2 11c0-4.42 3.58-8 8-8 .34 0 .67.02 1 .07C11 1.24 12.24 0 13.76 0c1.25 0 2.3.79 2.69 1.9C19.17 2.66 21 4.66 21 7c0 .34-.02.67-.07 1 1.79.96 3.07 2.78 3.07 4.88 0 3.03-2.47 5.5-5.5 5.5-.61 0-1.19-.1-1.74-.29-.32 2.02-1.59 3.74-3.38 4.68C11.6 23.58 9.88 24 8 24c-4.42 0-8-3.58-8-8 0-2.95 1.61-5.53 4-6.91V9c0-1.1.9-2 2-2h.5z" />
          </svg>
        }
        title="Growing Your Garden"
        description="Your garden is ready to bloom. Plant your first seed and watch your collection grow naturally."
        action={
          <>
            <button className="px-8 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-200">
              Plant First Seed
            </button>

            <div className="mt-10 flex gap-4">
              <div className="w-2 h-8 bg-green-300 rounded-full"></div>
              <div className="w-2 h-12 bg-green-400 rounded-full"></div>
              <div className="w-2 h-6 bg-green-300 rounded-full"></div>
              <div className="w-2 h-10 bg-green-500 rounded-full"></div>
              <div className="w-2 h-7 bg-green-300 rounded-full"></div>
            </div>
          </>
        }
      />
    </div>
  );
}
