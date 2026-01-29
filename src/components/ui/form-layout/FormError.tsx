import { cn } from '../_shared/utils';
import type { FormErrorProps } from './types';
import { useFormContext } from './FormContext';
import { getFormThemeStyles } from './theme-styles';

export function FormError({ children, className }: FormErrorProps) {
  if (!children) return null;

  const { theme } = useFormContext();
  const styles = getFormThemeStyles(theme);

  return (
    <div className={cn(styles.error, className)} role="alert">
      {children}
    </div>
  );
}
