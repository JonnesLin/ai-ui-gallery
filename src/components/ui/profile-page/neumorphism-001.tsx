export default function NeumorphismProfilePage() {
  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <div className="max-w-4xl mx-auto py-12">
        {/* Profile Card */}
        <div className="bg-gray-200 rounded-3xl p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gray-200 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]"></div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Michael Brooks</h1>
              <p className="text-gray-600 mb-6">Software Engineer & Tech Enthusiast</p>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-gray-200 rounded-xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all font-medium text-gray-700">
                  Edit Profile
                </button>
                <button className="p-3 bg-gray-200 rounded-xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-200 rounded-2xl p-6 text-center shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]">
              <div className="text-3xl font-bold text-gray-800 mb-1">156</div>
              <div className="text-gray-600 text-sm">Projects</div>
            </div>
            <div className="bg-gray-200 rounded-2xl p-6 text-center shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]">
              <div className="text-3xl font-bold text-gray-800 mb-1">8.2k</div>
              <div className="text-gray-600 text-sm">Followers</div>
            </div>
            <div className="bg-gray-200 rounded-2xl p-6 text-center shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]">
              <div className="text-3xl font-bold text-gray-800 mb-1">432</div>
              <div className="text-gray-600 text-sm">Following</div>
            </div>
          </div>

          {/* Info */}
          <div className="bg-gray-200 rounded-2xl p-6 mb-8 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-lg bg-gray-200 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="text-sm">michael.brooks@email.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-lg bg-gray-200 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span className="text-sm">Seattle, Washington</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-lg bg-gray-200 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-sm">Available for work</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            {['github', 'twitter', 'linkedin', 'dribbble'].map((social) => (
              <button key={social} className="w-12 h-12 bg-gray-200 rounded-xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Activity Section */}
        <div className="mt-8 bg-gray-200 rounded-3xl p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-xl p-4 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 mb-1">Completed new project</h4>
                    <p className="text-sm text-gray-600">Built a responsive dashboard</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
