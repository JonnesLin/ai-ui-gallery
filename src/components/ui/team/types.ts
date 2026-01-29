export type SocialPlatform = 'twitter' | 'linkedin' | 'github' | 'dribbble' | 'behance' | 'instagram';

export interface TeamSocial {
  platform: SocialPlatform;
  url: string;
}

export interface TeamMemberData {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  socials: TeamSocial[];
}

export type TeamTheme = 'dark' | 'glassmorphism' | 'minimalist' | 'material';

export interface TeamSectionProps {
  title: string;
  description: string;
  theme: TeamTheme;
  children: React.ReactNode;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  socials: TeamSocial[];
  theme: TeamTheme;
}

export type GridColumns = 2 | 3 | 4;
export type GridGap = 'sm' | 'md' | 'lg';

export interface TeamGridProps {
  children: React.ReactNode;
  columns?: GridColumns;
  gap?: GridGap;
  className?: string;
}
