import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export type CookieBannerPosition = 'top' | 'bottom' | 'bottom-left' | 'bottom-right' | 'center';
export type CookieBannerVariant = 'bar' | 'popup' | 'floating';

export interface CookieBannerProps {
  theme: ThemeName;
  position?: CookieBannerPosition;
  variant?: CookieBannerVariant;
  title?: string;
  description: ReactNode;
  privacyPolicyUrl?: string;
  onAccept: () => void;
  onDecline?: () => void;
  onCustomize?: () => void;
  showDecline?: boolean;
  showCustomize?: boolean;
  className?: string;
}
