import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export type LoginLayout = 'centered' | 'split' | 'fullwidth';

export interface SocialProvider {
  provider: 'google' | 'github' | 'facebook' | 'twitter' | 'apple';
  icon: ReactNode;
  onClick: () => void;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginPageProps {
  theme: ThemeName;
  layout?: LoginLayout;
  backgroundImage?: string;
  logo?: ReactNode;
  title: string;
  subtitle?: string;
  onSubmit: (data: LoginFormData) => void;
  loading?: boolean;
  error?: string;
  showRememberMe?: boolean;
  showForgotPassword?: boolean;
  socialLogins?: SocialProvider[];
  signUpLink?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  footerLinks?: Array<{
    text: string;
    href: string;
    onClick?: () => void;
  }>;
}

export interface LoginFormProps {
  theme: ThemeName;
  onSubmit: (data: LoginFormData) => void;
  loading?: boolean;
  error?: string;
  showRememberMe?: boolean;
  showForgotPassword?: boolean;
  onForgotPasswordClick?: () => void;
}

export interface LoginHeaderProps {
  theme: ThemeName;
  logo?: ReactNode;
  title: string;
  subtitle?: string;
}

export interface LoginFooterProps {
  theme: ThemeName;
  signUpLink?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  footerLinks?: Array<{
    text: string;
    href: string;
    onClick?: () => void;
  }>;
}

export interface SocialLoginProps {
  theme: ThemeName;
  providers: SocialProvider[];
  dividerText?: string;
}
