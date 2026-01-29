import { Footer } from './Footer';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { TwitterIcon, GitHubIcon, LinkedInIcon } from './_shared-icons';

export default function MinimalistFooter() {
  const theme = getTheme('minimalist');

  return (
    <footer
      className={cn(
        theme.base.background,
        theme.base.text,
        'border-t',
        theme.base.border
      )}
    >
      <Footer
        theme="minimalist"
        layout="columns"
        brand={{
          name: 'Brand',
          description: 'Simple solutions for complex problems.',
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
            icon: <TwitterIcon className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />,
          },
          {
            name: 'GitHub',
            href: '#',
            icon: <GitHubIcon className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />,
          },
          {
            name: 'LinkedIn',
            href: '#',
            icon: <LinkedInIcon className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />,
          },
        ]}
        copyright="© 2024 Brand. All rights reserved."
      />
    </footer>
  );
}
