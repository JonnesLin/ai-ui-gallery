/**
 * Integration test file for ProfilePage components
 * This file demonstrates all features and validates the component system
 */

import { ProfilePage, ProfileHeader, ProfileInfo, ProfileTabs } from './index';
import type { ProfilePageProps } from './types';

// Test 1: Minimal configuration
export function MinimalProfilePage() {
  return (
    <ProfilePage
      theme="minimalist"
      header={{
        name: 'John Doe',
      }}
    />
  );
}

// Test 2: Full configuration with all props
export function FullProfilePage() {
  const pageProps: ProfilePageProps = {
    theme: 'dark',
    layout: 'full',
    header: {
      avatar: 'bg-blue-500',
      name: 'Jane Smith',
      title: 'Software Engineer',
      username: 'janesmith',
      bio: 'Building the future, one commit at a time.',
      coverImage: 'bg-gradient-to-r from-purple-500 to-pink-500',
      stats: [
        { label: 'Repos', value: 42 },
        { label: 'Stars', value: '1.2k' },
        { label: 'Followers', value: 567 },
      ],
      tags: ['React', 'TypeScript', 'Node.js'],
      actions: (
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Follow
        </button>
      ),
    },
    info: {
      title: 'Contact',
      items: [
        {
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
          ),
          text: 'San Francisco',
        },
        {
          icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          ),
          text: 'example.com',
          link: 'https://example.com',
        },
      ],
    },
    tabs: {
      tabs: [
        { id: 'posts', label: 'Posts', active: true },
        { id: 'repos', label: 'Repositories' },
        { id: 'about', label: 'About' },
      ],
      onTabChange: (tabId) => console.log('Selected tab:', tabId),
    },
  };

  return (
    <ProfilePage {...pageProps}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Content Area</h2>
        <p>This is the main content area where you can put anything.</p>
      </div>
    </ProfilePage>
  );
}

// Test 3: Sidebar layout
export function SidebarProfilePage() {
  return (
    <ProfilePage
      theme="glassmorphism"
      layout="sidebar"
      header={{
        name: 'Alice Brown',
        title: 'Designer',
      }}
    >
      <p>Main content with sidebar layout</p>
    </ProfilePage>
  );
}

// Test 4: Individual component usage
export function IndividualComponents() {
  return (
    <div className="min-h-screen bg-white p-8">
      <ProfileHeader
        theme="minimalist"
        name="Standalone Header"
        bio="Using ProfileHeader independently"
        stats={[{ label: 'Items', value: 10 }]}
      />

      <ProfileInfo
        theme="minimalist"
        title="Standalone Info"
        items={[
          {
            icon: <span>📍</span>,
            text: 'Location',
          },
        ]}
      />

      <ProfileTabs
        theme="minimalist"
        tabs={[
          { id: 'tab1', label: 'Tab 1' },
          { id: 'tab2', label: 'Tab 2' },
        ]}
      />
    </div>
  );
}

// Test 5: All themes
export function AllThemesTest() {
  const themes = [
    'minimalist',
    'dark',
    'glassmorphism',
    'neumorphism',
    'gradient',
    'flat',
    'material',
  ] as const;

  return (
    <div className="space-y-8">
      {themes.map((theme) => (
        <div key={theme} className="border-b pb-8">
          <h2 className="text-2xl font-bold mb-4">{theme}</h2>
          <ProfilePage
            theme={theme}
            header={{
              name: `${theme} Theme`,
              bio: `Profile page using ${theme} theme`,
            }}
          >
            <p className="p-4">Content for {theme} theme</p>
          </ProfilePage>
        </div>
      ))}
    </div>
  );
}

// Test 6: Error handling - missing required theme
export function ErrorTest() {
  try {
    // This should throw an error because theme is missing
    // @ts-expect-error Testing error case
    return <ProfilePage header={{ name: 'Test' }} />;
  } catch (error) {
    return <div>Error caught: {String(error)}</div>;
  }
}
