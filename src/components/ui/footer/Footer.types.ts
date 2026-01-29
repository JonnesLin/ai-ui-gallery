import type { ThemeName } from '../_themes/types';

export type FooterLayout = 'simple' | 'columns' | 'centered';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface FooterProps {
  theme?: ThemeName;
  layout?: FooterLayout;
  brand?: {
    name: string;
    logo?: React.ReactNode;
    description?: string;
  };
  linkGroups?: FooterLinkGroup[];
  socialLinks?: FooterSocialLink[];
  copyright?: string;
  className?: string;
}

export interface FooterSectionProps {
  children: React.ReactNode;
  className?: string;
}

export interface FooterLinksProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

export interface FooterSocialProps {
  links: FooterSocialLink[];
  className?: string;
}

export interface FooterCopyrightProps {
  text: string;
  className?: string;
}
