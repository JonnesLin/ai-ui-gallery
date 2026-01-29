import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes/types';

export type RegisterLayout = 'centered' | 'split' | 'fullwidth';

export type RegisterFieldName = 'name' | 'email' | 'password' | 'confirmPassword' | 'phone';

export interface RegisterFormData {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  phone?: string;
  agreeTerms: boolean;
}

export interface SocialLoginConfig {
  provider: string;
  icon: ReactNode;
  onClick: () => void;
}

export interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
  loading?: boolean;
  error?: string;
  fields?: RegisterFieldName[];
  socialLogins?: SocialLoginConfig[];
  termsUrl: string;
  privacyUrl: string;
  theme: ThemeName;
  showSignInLink?: boolean;
  onSignInClick?: () => void;
}

export interface RegisterPageProps {
  theme: ThemeName;
  layout?: RegisterLayout;
  backgroundImage?: string;
  logo?: ReactNode;
  title?: string;
  subtitle?: string;
  formProps: Omit<RegisterFormProps, 'theme'>;
}
