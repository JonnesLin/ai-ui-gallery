import type { ThemeName } from '../_themes/types';

export type FormLayout = 'vertical' | 'horizontal' | 'inline';

export interface FormProps {
  theme: ThemeName;
  layout?: FormLayout;
  labelWidth?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  className?: string;
}

export interface FormFieldProps {
  name: string;
  label?: string;
  required?: boolean;
  error?: string;
  helper?: string;
  children: React.ReactNode;
  className?: string;
}

export interface FormLabelProps {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface FormErrorProps {
  children: React.ReactNode;
  className?: string;
}

export interface FormHelperProps {
  children: React.ReactNode;
  className?: string;
}
