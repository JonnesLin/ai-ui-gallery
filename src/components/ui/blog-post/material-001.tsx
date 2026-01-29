import { BlogPost } from './BlogPost';

export default function MaterialBlogPost() {
  return (
    <BlogPost
      theme="material"
      layout="standard"
      header={{
        title: 'Material Design: Building Interfaces with Depth and Motion',
        subtitle: 'Material Design is Google\'s comprehensive design system that combines classic principles of good design with the innovation of technology and science.',
        author: {
          name: 'Maya Patel',
          avatar: 'https://picsum.photos/seed/authormat/160/160',
          bio: 'Maya is a UX designer at Google, contributing to the Material Design system. She specializes in motion design and responsive interfaces, helping teams implement Material principles across platforms.',
          role: 'Material Design Specialist',
        },
        publishedAt: new Date('2024-03-28'),
        readTime: '7 min read',
        category: 'Design System',
        tags: ['Material Design', 'UI System', 'Google', 'Motion'],
        coverImage: 'https://picsum.photos/seed/material1/1200/514',
      }}
      showShare={true}
      showAuthorBio={true}
    >
      <p>
        Introduced in 2014, Material Design brought a unified visual language to Android
        and Google's web products. It's built on the metaphor of paper and ink, creating
        a visual language that synthesizes classic principles with innovation.
      </p>

      <h2>The Material Metaphor</h2>

      <p>
        Material surfaces are inspired by paper, existing in a three-dimensional space
        with light and shadow. Surfaces can grow, shrink, move, and respond to user
        interaction, but they maintain their physical properties.
      </p>

      <div className="my-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Material Elevation</h3>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded shadow-sm">
            <span className="text-sm text-gray-600">Elevation 1dp - Surface</span>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <span className="text-sm text-gray-600">Elevation 2dp - Card</span>
          </div>
          <div className="p-4 bg-white rounded shadow-md">
            <span className="text-sm text-gray-600">Elevation 4dp - Raised</span>
          </div>
          <div className="p-4 bg-white rounded shadow-lg">
            <span className="text-sm text-gray-600">Elevation 8dp - Dialog</span>
          </div>
        </div>
      </div>

      <h2>Motion Provides Meaning</h2>

      <p>
        Motion in Material Design respects and reinforces the user as the prime mover.
        User actions initiate motion that cascades through the interface, providing
        visual feedback and communicating spatial relationships.
      </p>

      <blockquote>
        "Material is the metaphor. A material metaphor is the unifying theory of
        rationalized space and a system of motion."
        <footer>— Google Material Design Team</footer>
      </blockquote>

      <h2>Bold, Graphic, Intentional</h2>

      <p>
        Material Design emphasizes bold use of color, deliberate use of imagery,
        and hierarchy through typography. The visual language draws from print
        design—typography, grids, space, scale, and color.
      </p>

      <div className="my-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Material Color System</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="h-24 bg-[#6200ea] rounded-lg shadow flex items-end p-3">
            <span className="text-xs text-white font-medium">Primary</span>
          </div>
          <div className="h-24 bg-[#018786] rounded-lg shadow flex items-end p-3">
            <span className="text-xs text-white font-medium">Secondary</span>
          </div>
          <div className="h-24 bg-[#b00020] rounded-lg shadow flex items-end p-3">
            <span className="text-xs text-white font-medium">Error</span>
          </div>
          <div className="h-24 bg-[#f5f5f5] rounded-lg shadow flex items-end p-3 border border-gray-200">
            <span className="text-xs text-gray-900 font-medium">Surface</span>
          </div>
        </div>
      </div>

      <figure>
        <img
          src="https://picsum.photos/seed/material2/900/500"
          alt="Material Design example"
          className="w-full rounded-lg shadow-md"
        />
        <figcaption className="text-center mt-3 text-sm opacity-60">
          Material surfaces respond to touch with ripple effects and elevation changes
        </figcaption>
      </figure>

      <h2>Responsive and Adaptive</h2>

      <p>
        Material Design's responsive grid system ensures consistency across platforms
        and screen sizes. Layouts adapt using breakpoints and flexible grids, maintaining
        visual hierarchy and usability across devices.
      </p>

      <div className="my-8 grid md:grid-cols-2 gap-4">
        <div className="p-5 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Material as Metaphor</h3>
          <p className="text-sm text-gray-600">
            Surfaces and edges provide visual cues grounded in reality
          </p>
        </div>
        <div className="p-5 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Bold and Intentional</h3>
          <p className="text-sm text-gray-600">
            Deliberate color, imagery, and typography create hierarchy
          </p>
        </div>
        <div className="p-5 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Motion with Meaning</h3>
          <p className="text-sm text-gray-600">
            Animation provides feedback and guides user attention
          </p>
        </div>
        <div className="p-5 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Flexible Foundation</h3>
          <p className="text-sm text-gray-600">
            Adapts seamlessly across platforms and screen sizes
          </p>
        </div>
      </div>
    </BlogPost>
  );
}
