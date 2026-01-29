import { cn } from '../_shared/utils';
import type { FormLabelProps } from './types';
import { useFormContext } from './FormContext';
import { getFormThemeStyles } from './theme-styles';

export function FormLabel({ htmlFor, required, children, className }: FormLabelProps) {
  const { theme } = useFormContext();
  const styles = getFormThemeStyles(theme);

  return (
    <label htmlFor={htmlFor} className={cn(styles.label, className)}>
      {children}
      {required && <span className={cn('ml-1', styles.requiredMark)}>*</span>}
    </label>
  );
}
