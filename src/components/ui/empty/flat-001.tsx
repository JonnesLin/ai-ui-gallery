export default function FlatEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="flex flex-col items-center max-w-md px-8 text-center">
        <div className="mb-10">
          <svg
            className="w-48 h-48"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="80" fill="#3B82F6" />
            <rect x="60" y="70" width="80" height="60" rx="4" fill="#60A5FA" />
            <rect x="70" y="80" width="60" height="40" fill="#93C5FD" />
            <circle cx="85" cy="95" r="8" fill="#DBEAFE" />
            <circle cx="115" cy="95" r="8" fill="#DBEAFE" />
            <path d="M85 110 Q100 120 115 110" stroke="#DBEAFE" strokeWidth="4" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <h2 className="text-4xl font-bold text-white mb-4">
          Nothing to See
        </h2>

        <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-sm">
          Your list is empty. Add new items to fill this space with content.
        </p>

        <button className="px-10 py-4 bg-white text-blue-500 font-bold text-lg rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
          Add Item
        </button>
      </div>
    </div>
  );
}
