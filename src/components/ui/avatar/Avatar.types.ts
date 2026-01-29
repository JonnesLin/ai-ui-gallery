import type { ThemeName } from '../_themes/types';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type AvatarVariant = 'circle' | 'square' | 'rounded';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

export interface AvatarProps {
  src?: string;
  alt: string;
  name?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
  theme?: ThemeName;
  status?: AvatarStatus;
  showBorder?: boolean;
  color?: string;
  className?: string;
}

export interface AvatarBadgeProps {
  status: AvatarStatus;
  size?: AvatarSize;
  theme?: ThemeName;
  className?: string;
}

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  spacing?: 'tight' | 'normal' | 'loose';
  theme?: ThemeName;
  className?: string;
}
