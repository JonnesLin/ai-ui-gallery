import type { ThemeName } from '../_themes';

export type ContactFieldType = 'text' | 'email' | 'tel' | 'textarea';

export interface ContactField {
  name: string;
  label: string;
  type: ContactFieldType;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

export interface ContactFormProps {
  theme: ThemeName;
  fields: ContactField[];
  onSubmit: (data: Record<string, string>) => void;
  loading?: boolean;
  submitText?: string;
  className?: string;
}

export interface ContactInfoProps {
  theme: ThemeName;
  email?: string;
  phone?: string;
  address?: string;
  hours?: string;
  className?: string;
}

export interface ContactCardProps {
  theme: ThemeName;
  icon: string;
  title: string;
  content: string | React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export interface ContactFormData {
  [key: string]: string;
}
