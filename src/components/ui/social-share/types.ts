import type { ThemeName } from '../_themes';
import type { Platform } from './constants.tsx';

export type SocialShareVariant = 'icon' | 'button' | 'text';
export type SocialShareSize = 'sm' | 'md' | 'lg';

export interface SocialShareProps {
  url: string;
  title: string;
  description: string;
  platforms: Platform[];
  theme: ThemeName;
  variant?: SocialShareVariant;
  size?: SocialShareSize;
  showCount?: boolean;
  className?: string;
}

export interface SocialShareButtonProps {
  platform: Platform;
  url: string;
  title: string;
  description: string;
  theme: ThemeName;
  variant: SocialShareVariant;
  size: SocialShareSize;
  showCount?: boolean;
  className?: string;
}
