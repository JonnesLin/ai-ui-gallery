import { Footer } from './Footer';
import { TwitterIcon, GitHubIcon, LinkedInIcon } from './_shared-icons';

export default function GlassmorphismFooter() {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 md:p-12">
          <Footer
            theme="glassmorphism"
            layout="columns"
            brand={{
              name: 'Brand',
              description: 'Building the future of web experiences with cutting-edge technology.',
            }}
            linkGroups={[
              {
                title: 'Company',
                links: [
                  { label: 'About', href: '#' },
                  { label: 'Careers', href: '#' },
                  { label: 'Press', href: '#' },
                  { label: 'Blog', href: '#' },
                ],
              },
              {
                title: 'Products',
                links: [
                  { label: 'Features', href: '#' },
                  { label: 'Pricing', href: '#' },
                  { label: 'API', href: '#' },
                  { label: 'Integrations', href: '#' },
                ],
              },
              {
                title: 'Resources',
                links: [
                  { label: 'Documentation', href: '#' },
                  { label: 'Guides', href: '#' },
                  { label: 'Support', href: '#' },
                  { label: 'Status', href: '#' },
                ],
              },
              {
                title: 'Legal',
                links: [
                  { label: 'Privacy', href: '#' },
                  { label: 'Terms', href: '#' },
                  { label: 'Cookie Policy', href: '#' },
                ],
              },
            ]}
            socialLinks={[
              {
                name: 'Twitter',
                href: '#',
                icon: (
                  <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all">
                    <TwitterIcon className="w-5 h-5" />
                  </div>
                ),
              },
              {
                name: 'GitHub',
                href: '#',
                icon: (
                  <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all">
                    <GitHubIcon className="w-5 h-5" />
                  </div>
                ),
              },
              {
                name: 'LinkedIn',
                href: '#',
                icon: (
                  <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                ),
              },
            ]}
            copyright="© 2024 Brand. All rights reserved."
            className="px-0 py-0"
          />
        </div>
      </div>
    </footer>
  );
}
