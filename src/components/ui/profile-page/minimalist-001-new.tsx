import { ProfilePage } from './ProfilePage';

export default function MinimalistProfilePageNew() {
  return (
    <ProfilePage
      theme="minimalist"
      layout="full"
      header={{
        avatar: 'bg-gray-200',
        name: 'Alexander Chen',
        bio: 'Product designer focused on creating meaningful digital experiences',
        stats: [
          { label: 'Posts', value: 234 },
          { label: 'Followers', value: '12.4k' },
          { label: 'Following', value: 892 },
        ],
        actions: (
          <>
            <button className="flex-1 py-3 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors">
              Edit Profile
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 text-sm hover:bg-gray-50 transition-colors">
              Share
            </button>
          </>
        ),
      }}
      info={{
        items: [
          {
            icon: (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
            text: 'San Francisco, CA',
          },
          {
            icon: (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            ),
            text: 'alexanderchen.com',
            link: 'https://alexanderchen.com',
          },
        ],
      }}
    >
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-square bg-gray-100"></div>
        ))}
      </div>
    </ProfilePage>
  );
}
