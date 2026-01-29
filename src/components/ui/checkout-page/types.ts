import type { ThemeName } from '../_themes/types';
import type { ReactNode } from 'react';

export interface CheckoutPageProps {
  theme: ThemeName;
  className?: string;
  children?: ReactNode;
}

export interface CheckoutStep {
  id: string;
  title: string;
  number: number;
}

export interface CheckoutStepsProps {
  steps: CheckoutStep[];
  currentStep: number;
  theme: ThemeName;
  className?: string;
}

export interface CartItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CheckoutCartProps {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  currency?: string;
  theme: ThemeName;
  className?: string;
  onApplyPromo?: (code: string) => void;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export interface FormSection {
  id: string;
  title: string;
  fields: FormField[];
}

export interface CheckoutFormProps {
  sections: FormSection[];
  theme: ThemeName;
  className?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  selected: boolean;
}

export interface CheckoutPaymentProps {
  methods?: PaymentMethod[];
  theme: ThemeName;
  className?: string;
  onMethodChange?: (methodId: string) => void;
  onSubmit?: () => void;
}
