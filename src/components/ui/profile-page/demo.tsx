import { ProfilePage } from './ProfilePage';
import type { ThemeName } from '../_themes';

interface DemoProps {
  theme?: ThemeName;
}

export default function ProfilePageDemo({ theme = 'minimalist' }: DemoProps) {
  return (
    <ProfilePage
      theme={theme}
      layout="full"
      header={{
        avatar: 'bg-gradient-to-br from-blue-500 to-purple-600',
        name: 'Jane Smith',
        title: 'UX Designer & Frontend Developer',
        username: 'janesmith',
        bio: 'Creating beautiful and accessible user experiences. Open source enthusiast and design systems advocate.',
        stats: [
          { label: 'Projects', value: 47 },
          { label: 'Followers', value: '8.2k' },
          { label: 'Following', value: 342 },
        ],
        tags: ['Design', 'Development', 'UX', 'Accessibility'],
        actions: (
          <>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Follow
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors">
              Message
            </button>
          </>
        ),
      }}
      info={{
        title: 'Contact Information',
        items: [
          {
            icon: (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
            text: 'San Francisco, CA',
          },
          {
            icon: (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            ),
            text: 'janesmith.design',
            link: 'https://janesmith.design',
          },
          {
            icon: (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            ),
            text: 'jane@example.com',
            link: 'mailto:jane@example.com',
          },
        ],
      }}
      tabs={{
        tabs: [
          { id: 'overview', label: 'Overview', active: true },
          { id: 'projects', label: 'Projects' },
          { id: 'articles', label: 'Articles' },
          { id: 'activity', label: 'Activity' },
        ],
        onTabChange: (tabId) => console.log('Tab changed:', tabId),
      }}
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-6 rounded-lg border">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="font-semibold mb-2">Project {i + 1}</h3>
                <p className="text-sm opacity-70">A brief description of this amazing project.</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg border">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-medium mb-1">Activity item {i + 1}</p>
                  <p className="text-sm opacity-70">Something interesting happened here</p>
                  <span className="text-xs opacity-50">{i + 1} hours ago</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ProfilePage>
  );
}
