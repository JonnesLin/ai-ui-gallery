import { createContext, useContext } from 'react';
import type { ThemeName } from '../_themes/types';
import type { FormLayout } from './types';

interface FormContextValue {
  theme: ThemeName;
  layout: FormLayout;
  labelWidth?: string;
}

const FormContext = createContext<FormContextValue | null>(null);

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('Form components must be used within a Form component');
  }
  return context;
}

export const FormProvider = FormContext.Provider;
