import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import type { FormProps } from './types';
import { FormProvider } from './FormContext';

export function Form({
  theme,
  layout = 'vertical',
  labelWidth,
  onSubmit,
  children,
  className,
}: FormProps) {
  const themeConfig = getTheme(theme);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <FormProvider value={{ theme, layout, labelWidth }}>
      <form
        onSubmit={handleSubmit}
        className={cn(
          'form',
          {
            'space-y-6': layout === 'vertical',
            'space-y-4': layout === 'horizontal',
            'flex flex-wrap gap-4': layout === 'inline',
          },
          className
        )}
      >
        {children}
      </form>
    </FormProvider>
  );
}
