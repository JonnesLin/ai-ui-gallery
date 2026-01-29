export default function MinimalistProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-32 h-32 rounded-full bg-gray-200 mb-6"></div>
          <h1 className="text-3xl font-light mb-2">Alexander Chen</h1>
          <p className="text-gray-600 max-w-md">Product designer focused on creating meaningful digital experiences</p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mb-12 pb-12 border-b border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-light mb-1">234</div>
            <div className="text-sm text-gray-500">Posts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light mb-1">12.4k</div>
            <div className="text-sm text-gray-500">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light mb-1">892</div>
            <div className="text-sm text-gray-500">Following</div>
          </div>
        </div>

        {/* Info */}
        <div className="mb-12 space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span className="text-sm">alexanderchen.com</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mb-16">
          <button className="flex-1 py-3 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors">
            Edit Profile
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 text-sm hover:bg-gray-50 transition-colors">
            Share
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gray-100"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
