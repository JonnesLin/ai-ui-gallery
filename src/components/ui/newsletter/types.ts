export type NewsletterLayout = 'inline' | 'stacked';

export interface NewsletterProps {
  layout?: NewsletterLayout;
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
  onSubmit: (email: string) => void;
  loading?: boolean;
  success?: boolean;
  error?: string;
  privacyText?: string;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  successClassName?: string;
  errorClassName?: string;
  privacyClassName?: string;
}
