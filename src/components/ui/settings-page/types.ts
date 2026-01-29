import type { ReactNode } from 'react';
import type { ThemeName } from '../_themes';

export interface SettingsSection {
  id: string;
  title: string;
  icon?: ReactNode;
}

export interface SettingsPageProps {
  theme: ThemeName;
  children: ReactNode;
  className?: string;
}

export interface SettingsNavProps {
  theme: ThemeName;
  sections: SettingsSection[];
  activeSection: string;
  onSectionChange: (id: string) => void;
  className?: string;
}

export interface SettingsSectionProps {
  theme: ThemeName;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export interface SettingsItemProps {
  theme: ThemeName;
  label: string;
  description?: string;
  children: ReactNode;
  danger?: boolean;
  className?: string;
}
