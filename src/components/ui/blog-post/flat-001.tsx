import { BlogPost } from './BlogPost';

export default function FlatBlogPost() {
  return (
    <BlogPost
      theme="flat"
      layout="standard"
      header={{
        title: 'Flat Design: The Beauty of Simplicity',
        subtitle: 'Flat design strips away unnecessary decoration, focusing on functionality and clean aesthetics. It\'s minimalism with purpose—every element serves a function.',
        author: {
          name: 'Jordan Davis',
          avatar: 'JD',
          bio: 'Jordan has been designing flat interfaces since the movement began. They believe that simplicity and functionality are the cornerstones of great digital design.',
          role: 'Flat Design Advocate',
        },
        publishedAt: new Date('2024-03-28'),
        readTime: '6 min read',
        category: 'DESIGN',
        tags: ['Flat Design', 'UI Trends', 'Minimalism', 'Web Design'],
        coverImage: 'https://picsum.photos/seed/flat1/1200/514',
      }}
      showShare={true}
      showAuthorBio={true}
    >
      <p>
        Born as a reaction to skeuomorphic design, flat design embraced the digital
        medium's unique properties. No fake textures, no artificial shadows—just pure
        color, typography, and space working in harmony.
      </p>

      <h2>Core Principles</h2>

      <p>
        Flat design is characterized by its straightforward approach. Bright, vibrant
        colors define different areas and actions. Typography becomes a primary design
        element, and white space creates breathing room and hierarchy.
      </p>

      <div className="my-8 bg-[#ecf0f1] p-6 md:p-8 border-l-8 border-[#3498db] rounded">
        <h3 className="text-2xl font-bold text-[#2c3e50] mb-6">Five Pillars of Flat Design</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#3498db] flex items-center justify-center shrink-0">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <p className="font-bold text-[#2c3e50] mb-1">No Gradients or Shadows</p>
              <p className="text-[#7f8c8d]">Pure, solid colors create distinct visual layers</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#e74c3c] flex items-center justify-center shrink-0">
              <span className="text-white font-bold">2</span>
            </div>
            <div>
              <p className="font-bold text-[#2c3e50] mb-1">Simple Typography</p>
              <p className="text-[#7f8c8d]">Sans-serif fonts with clear hierarchy</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#2ecc71] flex items-center justify-center shrink-0">
              <span className="text-white font-bold">3</span>
            </div>
            <div>
              <p className="font-bold text-[#2c3e50] mb-1">Vibrant Colors</p>
              <p className="text-[#7f8c8d]">Bold, saturated hues define interface elements</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#f39c12] flex items-center justify-center shrink-0">
              <span className="text-white font-bold">4</span>
            </div>
            <div>
              <p className="font-bold text-[#2c3e50] mb-1">Generous White Space</p>
              <p className="text-[#7f8c8d]">Space creates visual breathing room</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#9b59b6] flex items-center justify-center shrink-0">
              <span className="text-white font-bold">5</span>
            </div>
            <div>
              <p className="font-bold text-[#2c3e50] mb-1">Minimalist Icons</p>
              <p className="text-[#7f8c8d]">Simple, geometric shapes communicate clearly</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Color as Communication</h2>

      <p>
        In flat design, color isn't decorative—it's functional. Different hues distinguish
        between interface sections, indicate interactivity, and guide user attention.
        The bright, saturated palette became synonymous with modern digital design.
      </p>

      <blockquote>
        "Flat design forces designers to focus on what truly matters: content,
        usability, and clear communication."
        <footer>— Lisa Park, UX Designer</footer>
      </blockquote>

      <figure>
        <img
          src="https://picsum.photos/seed/flat2/900/500"
          alt="Flat design example"
          className="w-full rounded"
        />
        <figcaption className="text-center mt-4 text-sm opacity-60">
          Bold colors and clean layouts define flat design aesthetics
        </figcaption>
      </figure>

      <h2>The Evolution</h2>

      <p>
        While pure flat design dominated the mid-2010s, it evolved into "Flat 2.0"
        or "Almost Flat" design. These variants reintroduced subtle shadows and gradients
        to improve usability while maintaining flat design's core philosophy.
      </p>

      <p>
        The key lesson? Simplicity shouldn't sacrifice usability. The best flat design
        balances aesthetic purity with practical affordances that help users understand
        how to interact with interfaces.
      </p>

      <div className="my-8 grid md:grid-cols-3 gap-4">
        <div className="p-6 bg-[#3498db] text-center rounded">
          <div className="text-4xl font-bold text-white mb-2">70%</div>
          <div className="text-white opacity-90">Faster Load Times</div>
        </div>
        <div className="p-6 bg-[#e74c3c] text-center rounded">
          <div className="text-4xl font-bold text-white mb-2">85%</div>
          <div className="text-white opacity-90">Better Clarity</div>
        </div>
        <div className="p-6 bg-[#2ecc71] text-center rounded">
          <div className="text-4xl font-bold text-white mb-2">95%</div>
          <div className="text-white opacity-90">User Preference</div>
        </div>
      </div>
    </BlogPost>
  );
}
