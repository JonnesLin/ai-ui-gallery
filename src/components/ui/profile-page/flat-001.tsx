export default function FlatProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Cover Image */}
        <div className="h-48 md:h-64 bg-blue-500"></div>

        {/* Profile Section */}
        <div className="bg-white px-4 md:px-8 py-6">
          <div className="relative -mt-20 mb-6">
            <div className="w-32 h-32 bg-purple-500 rounded-full border-4 border-white"></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">Emma Wilson</h1>
              <p className="text-gray-600">@emmawilson</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-blue-500 text-white font-medium">
                Edit Profile
              </button>
              <button className="px-6 py-2.5 bg-gray-200 text-gray-900 font-medium">
                Share
              </button>
            </div>
          </div>

          <p className="text-gray-700 mb-6 max-w-2xl">
            UX Designer crafting beautiful and functional interfaces. Passionate about user-centered design and accessibility.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>London, UK</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              <span className="text-blue-500">emmawilson.design</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>Joined January 2021</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-500 text-white p-4">
              <div className="text-2xl font-bold mb-1">342</div>
              <div className="text-sm">Posts</div>
            </div>
            <div className="bg-green-500 text-white p-4">
              <div className="text-2xl font-bold mb-1">15.2k</div>
              <div className="text-sm">Followers</div>
            </div>
            <div className="bg-yellow-500 text-white p-4">
              <div className="text-2xl font-bold mb-1">1.8k</div>
              <div className="text-sm">Following</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white mt-2">
          <div className="flex border-b-4 border-gray-200">
            <button className="px-6 py-4 font-medium border-b-4 border-blue-500 -mb-1 bg-blue-50 text-blue-600">
              Posts
            </button>
            <button className="px-6 py-4 font-medium text-gray-600">
              Media
            </button>
            <button className="px-6 py-4 font-medium text-gray-600">
              Likes
            </button>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="mt-2 space-y-2 pb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white p-6">
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-full flex-shrink-0 ${
                  i % 3 === 0 ? 'bg-purple-500' : i % 3 === 1 ? 'bg-blue-500' : 'bg-green-500'
                }`}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-gray-900">Emma Wilson</span>
                    <span className="text-gray-500 text-sm">@emmawilson</span>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-500 text-sm">{i + 2}h ago</span>
                  </div>
                  <p className="text-gray-800 mb-4">
                    {i === 0 && "Just finished redesigning our mobile app! The new flat design makes everything so much cleaner and more intuitive."}
                    {i === 1 && "Working on a new color system for our design library. Flat colors work best when you keep them bold and simple."}
                    {i === 2 && "Reminder: Good design doesn't need shadows or gradients to be effective. Sometimes simple is better."}
                    {i === 3 && "Excited to share my latest project soon! Stay tuned for some beautiful flat UI goodness."}
                  </p>
                  <div className="h-48 bg-gradient-to-r from-pink-500 to-orange-500 mb-4"></div>
                  <div className="flex gap-6 text-gray-600 text-sm">
                    <button className="flex items-center gap-2 hover:text-blue-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      <span>{15 + i * 3}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-green-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <span>{8 + i * 2}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-red-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>{42 + i * 7}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
