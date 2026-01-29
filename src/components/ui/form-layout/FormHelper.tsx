import { cn } from '../_shared/utils';
import type { FormHelperProps } from './types';
import { useFormContext } from './FormContext';
import { getFormThemeStyles } from './theme-styles';

export function FormHelper({ children, className }: FormHelperProps) {
  if (!children) return null;

  const { theme } = useFormContext();
  const styles = getFormThemeStyles(theme);

  return (
    <div className={cn(styles.helper, className)}>
      {children}
    </div>
  );
}
