import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { CheckoutFormProps } from './types';

export function CheckoutForm({ sections, theme, className }: CheckoutFormProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn('space-y-8', className)}>
      {sections.map((section) => (
        <div key={section.id} className={cn(themeConfig.base.background, themeConfig.base.radius, themeConfig.base.shadow, 'p-6')}>
          <h2 className={cn('text-xl font-semibold mb-6', themeConfig.base.text)}>{section.title}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {section.fields.map((field) => {
              const isFullWidth = field.type === 'email' || field.type === 'textarea' || field.name.includes('address');

              return (
                <div key={field.name} className={cn(isFullWidth && 'sm:col-span-2')}>
                  <label className={cn('block text-sm mb-2 opacity-70', themeConfig.base.text)}>
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={(e) => field.onChange?.(e.target.value)}
                      required={field.required}
                      className={cn(
                        'w-full px-4 py-3 min-h-24 resize-y',
                        themeConfig.base.background,
                        themeConfig.base.border,
                        themeConfig.base.radius,
                        themeConfig.base.text,
                        themeConfig.states.focus,
                        'outline-none transition-all placeholder:opacity-40'
                      )}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={(e) => field.onChange?.(e.target.value)}
                      required={field.required}
                      className={cn(
                        'w-full px-4 py-3',
                        themeConfig.base.background,
                        themeConfig.base.border,
                        themeConfig.base.radius,
                        themeConfig.base.text,
                        themeConfig.states.focus,
                        'outline-none transition-all placeholder:opacity-40'
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
