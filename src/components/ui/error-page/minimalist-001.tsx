export default function MinimalistErrorPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-light text-black mb-4">404</h1>
        <div className="w-16 h-px bg-black mx-auto mb-8"></div>
        <h2 className="text-2xl font-light text-black mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 font-light">
          The page you are looking for does not exist or has been moved.
        </p>
        <button className="px-8 py-3 bg-black text-white font-light hover:bg-gray-800 transition-colors">
          Return Home
        </button>
      </div>
    </div>
  );
}
