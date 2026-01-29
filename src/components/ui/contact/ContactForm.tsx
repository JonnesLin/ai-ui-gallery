import { useState } from 'react';
import type { FormEvent } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ContactFormProps, ContactFormData } from './types';

export function ContactForm({
  theme,
  fields,
  onSubmit,
  loading = false,
  submitText = 'Send Message',
  className,
}: ContactFormProps) {
  const themeConfig = getTheme(theme);
  const [formData, setFormData] = useState<ContactFormData>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const missingFields = fields
      .filter(field => field.required && !formData[field.name])
      .map(field => field.label);

    if (missingFields.length > 0) {
      throw new Error(`Required fields missing: ${missingFields.join(', ')}`);
    }

    onSubmit(formData);
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isMaterialTheme = theme === 'material';

  const renderField = (field: typeof fields[0]) => {
    const baseInputClasses = cn(
      'w-full px-4 py-3',
      themeConfig.base.background,
      themeConfig.base.text,
      themeConfig.base.border,
      themeConfig.base.radius,
      themeConfig.states.focus,
      'outline-none transition-colors'
    );

    const materialInputClasses = cn(
      'peer w-full px-3 pt-5 pb-2',
      'border-b-2 border-gray-300',
      'focus:border-blue-600',
      'outline-none bg-transparent',
      themeConfig.base.text
    );

    const materialLabelClasses = cn(
      'absolute left-3 top-4 text-gray-500',
      'transition-all',
      'peer-placeholder-shown:top-4 peer-placeholder-shown:text-base',
      'peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600'
    );

    const inputClasses = isMaterialTheme ? materialInputClasses : baseInputClasses;

    if (field.type === 'textarea') {
      return (
        <div key={field.name} className={isMaterialTheme ? 'relative' : ''}>
          {!isMaterialTheme && (
            <label htmlFor={field.name} className={cn('block font-medium mb-2', themeConfig.base.text)}>
              {field.label}
            </label>
          )}
          <textarea
            id={field.name}
            name={field.name}
            required={field.required}
            rows={field.rows || 4}
            placeholder={isMaterialTheme ? ' ' : field.placeholder}
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={cn(inputClasses, 'resize-none')}
          />
          {isMaterialTheme && (
            <label htmlFor={field.name} className={materialLabelClasses}>
              {field.label}
            </label>
          )}
        </div>
      );
    }

    return (
      <div key={field.name} className={isMaterialTheme ? 'relative' : ''}>
        {!isMaterialTheme && (
          <label htmlFor={field.name} className={cn('block font-medium mb-2', themeConfig.base.text)}>
            {field.label}
          </label>
        )}
        <input
          id={field.name}
          name={field.name}
          type={field.type}
          required={field.required}
          placeholder={isMaterialTheme ? ' ' : field.placeholder}
          value={formData[field.name] || ''}
          onChange={(e) => handleChange(field.name, e.target.value)}
          className={inputClasses}
        />
        {isMaterialTheme && (
          <label htmlFor={field.name} className={materialLabelClasses}>
            {field.label}
          </label>
        )}
      </div>
    );
  };

  const primaryVariant = themeConfig.variants.primary;

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        themeConfig.base.background,
        themeConfig.base.radius,
        themeConfig.base.shadow,
        'p-8',
        className
      )}
    >
      <div className="space-y-6">
        {fields.map(renderField)}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={cn(
          'mt-8 px-8 py-3',
          primaryVariant.background,
          primaryVariant.text,
          themeConfig.base.radius,
          primaryVariant.shadow,
          primaryVariant.hover,
          themeConfig.states.hover,
          themeConfig.states.focus,
          loading && themeConfig.states.loading,
          'font-semibold'
        )}
      >
        {loading ? 'Sending...' : submitText}
      </button>
    </form>
  );
}
