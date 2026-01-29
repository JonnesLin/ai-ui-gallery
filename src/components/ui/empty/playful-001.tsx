import { Empty } from './Empty';

export default function PlayfulEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200">
      <Empty
        theme="pastel"
        image={
          <div className="relative w-full h-full animate-bounce">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
              <svg
                className="w-1/2 h-1/2 text-pink-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.12.23-2.19.65-3.15.09.21.19.42.3.62.37.68.86 1.26 1.45 1.71.59.45 1.27.8 2 1.03.73.23 1.51.35 2.31.35.8 0 1.58-.12 2.31-.35.73-.23 1.41-.58 2-1.03.59-.45 1.08-1.03 1.45-1.71.11-.2.21-.41.3-.62.42.96.65 2.03.65 3.15 0 4.41-3.59 8-8 8z" />
                <circle cx="8.5" cy="10.5" r="1.5" />
                <circle cx="15.5" cy="10.5" r="1.5" />
              </svg>
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-400 rounded-full shadow-lg animate-pulse delay-75"></div>
          </div>
        }
        title="Oops! Nothing Here"
        description="It looks a bit lonely in here! Let's add some fun stuff to make this place exciting!"
        action={
          <>
            <button className="px-10 py-4 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 text-white font-bold text-lg rounded-full hover:scale-110 transition-transform shadow-2xl hover:shadow-pink-300">
              Let's Go!
            </button>

            <div className="mt-8 flex gap-2">
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </>
        }
        size="lg"
      />
    </div>
  );
}
