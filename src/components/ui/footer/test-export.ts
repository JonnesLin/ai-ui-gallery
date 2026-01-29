// Type checking test file
import type {
  FooterProps,
  FooterSectionProps,
  FooterLinksProps,
  FooterSocialProps,
  FooterCopyrightProps,
  FooterLayout,
  FooterLink,
  FooterLinkGroup,
  FooterSocialLink,
} from './index';

import {
  Footer,
  FooterSection,
  FooterLinks,
  FooterSocial,
  FooterCopyright,
} from './index';

// Test types exist
const layout: FooterLayout = 'columns';
const link: FooterLink = { label: 'Test', href: '#' };
const group: FooterLinkGroup = { title: 'Test', links: [] };

// Test components are exported
const components = {
  Footer,
  FooterSection,
  FooterLinks,
  FooterSocial,
  FooterCopyright,
};

export { components, layout, link, group };
