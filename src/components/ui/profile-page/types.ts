import type { ThemeName } from '../_themes';

export interface ProfileStat {
  label: string;
  value: string | number;
}

export interface ProfileInfoItem {
  icon: React.ReactNode;
  text: string;
  link?: string;
}

export interface ProfileHeaderProps {
  theme: ThemeName;
  avatar?: string;
  name: string;
  title?: string;
  username?: string;
  bio?: string;
  coverImage?: string;
  stats?: ProfileStat[];
  actions?: React.ReactNode;
  tags?: string[];
}

export interface ProfileInfoProps {
  theme: ThemeName;
  items: ProfileInfoItem[];
  title?: string;
}

export interface ProfileTab {
  id: string;
  label: string;
  active?: boolean;
}

export interface ProfileTabsProps {
  theme: ThemeName;
  tabs: ProfileTab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export interface ProfilePageProps {
  theme: ThemeName;
  layout?: 'sidebar' | 'full';
  header: Omit<ProfileHeaderProps, 'theme'>;
  info?: Omit<ProfileInfoProps, 'theme'>;
  tabs?: Omit<ProfileTabsProps, 'theme'>;
  children?: React.ReactNode;
}
