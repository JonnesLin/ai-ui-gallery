import { cn } from '../_shared/utils';
import { FormLabel } from './FormLabel';
import { FormError } from './FormError';
import { FormHelper } from './FormHelper';
import type { FormFieldProps } from './types';
import { useFormContext } from './FormContext';

export function FormField({
  name,
  label,
  required,
  error,
  helper,
  children,
  className,
}: FormFieldProps) {
  const { theme, layout, labelWidth } = useFormContext();

  const isHorizontal = layout === 'horizontal';
  const isInline = layout === 'inline';

  return (
    <div
      className={cn(
        'form-field',
        {
          'flex items-start gap-4': isHorizontal,
          'flex items-center gap-2': isInline,
        },
        className
      )}
    >
      {label && (
        <div
          className={cn({
            'flex-shrink-0': isHorizontal,
          })}
          style={isHorizontal && labelWidth ? { width: labelWidth } : undefined}
        >
          <FormLabel htmlFor={name} required={required}>
            {label}
          </FormLabel>
        </div>
      )}

      <div className={cn('flex-1', { 'space-y-1': !isInline })}>
        {children}
        {error && <FormError>{error}</FormError>}
        {!error && helper && <FormHelper>{helper}</FormHelper>}
      </div>
    </div>
  );
}
