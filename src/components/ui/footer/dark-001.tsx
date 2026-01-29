import { Footer } from './Footer';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { TwitterIcon, GitHubIcon, LinkedInIcon, InstagramIcon } from './_shared-icons';

export default function DarkFooter() {
  const theme = getTheme('dark');

  return (
    <footer className={cn(theme.base.background, theme.base.text)}>
      <Footer
        theme="dark"
        layout="columns"
        brand={{
          name: 'Brand',
          logo: (
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <span className="text-gray-950 font-bold text-sm">B</span>
            </div>
          ),
          description: 'Crafting digital experiences that inspire and engage.',
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
              <div className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-white transition-all">
                <TwitterIcon className="w-4 h-4" />
              </div>
            ),
          },
          {
            name: 'GitHub',
            href: '#',
            icon: (
              <div className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-white transition-all">
                <GitHubIcon className="w-4 h-4" />
              </div>
            ),
          },
          {
            name: 'LinkedIn',
            href: '#',
            icon: (
              <div className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-white transition-all">
                <LinkedInIcon className="w-4 h-4" />
              </div>
            ),
          },
          {
            name: 'Instagram',
            href: '#',
            icon: (
              <div className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-white transition-all">
                <InstagramIcon className="w-4 h-4" />
              </div>
            ),
          },
        ]}
        copyright="© 2024 Brand. All rights reserved."
      />
    </footer>
  );
}
