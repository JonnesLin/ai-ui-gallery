'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { RegisterFormProps, RegisterFormData, RegisterFieldName } from './types';

const DEFAULT_FIELDS: RegisterFieldName[] = ['name', 'email', 'password', 'confirmPassword'];

export function RegisterForm({
  onSubmit,
  loading = false,
  error,
  fields = DEFAULT_FIELDS,
  socialLogins = [],
  termsUrl,
  privacyUrl,
  theme: themeName,
  showSignInLink = true,
  onSignInClick,
}: RegisterFormProps) {
  const theme = getTheme(themeName);

  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    agreeTerms: false,
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const hasField = (fieldName: RegisterFieldName) => fields.includes(fieldName);

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (hasField('name') && !formData.name) {
      errors.name = 'Name is required';
    }

    if (hasField('email') && !formData.email) {
      errors.email = 'Email is required';
    }

    if (hasField('password') && !formData.password) {
      errors.password = 'Password is required';
    }

    if (hasField('confirmPassword') && formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (hasField('phone') && !formData.phone) {
      errors.phone = 'Phone is required';
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = 'You must agree to terms';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formData);
  };

  const updateField = (field: keyof RegisterFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const inputBaseClass = cn(
    'w-full px-4 py-3 transition-colors',
    theme.base.border,
    theme.base.radius,
    theme.states.focus
  );

  const buttonBaseClass = cn(
    'w-full py-3 font-semibold transition-all',
    theme.base.radius,
    theme.states.hover
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className={cn('px-4 py-3 text-sm', theme.base.radius, 'bg-red-50 text-red-600 border border-red-200')}>
          {error}
        </div>
      )}

      {hasField('name') && (
        <div>
          <label htmlFor="name" className={cn('block text-sm font-medium mb-2', theme.base.text)}>
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            disabled={loading}
            className={cn(inputBaseClass, theme.base.background, theme.base.text)}
            placeholder="Enter your name"
          />
          {validationErrors.name && (
            <p className="mt-1 text-xs text-red-500">{validationErrors.name}</p>
          )}
        </div>
      )}

      {hasField('email') && (
        <div>
          <label htmlFor="email" className={cn('block text-sm font-medium mb-2', theme.base.text)}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            disabled={loading}
            className={cn(inputBaseClass, theme.base.background, theme.base.text)}
            placeholder="Enter your email"
          />
          {validationErrors.email && (
            <p className="mt-1 text-xs text-red-500">{validationErrors.email}</p>
          )}
        </div>
      )}

      {hasField('phone') && (
        <div>
          <label htmlFor="phone" className={cn('block text-sm font-medium mb-2', theme.base.text)}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            disabled={loading}
            className={cn(inputBaseClass, theme.base.background, theme.base.text)}
            placeholder="Enter your phone"
          />
          {validationErrors.phone && (
            <p className="mt-1 text-xs text-red-500">{validationErrors.phone}</p>
          )}
        </div>
      )}

      {hasField('password') && (
        <div>
          <label htmlFor="password" className={cn('block text-sm font-medium mb-2', theme.base.text)}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => updateField('password', e.target.value)}
            disabled={loading}
            className={cn(inputBaseClass, theme.base.background, theme.base.text)}
            placeholder="Enter your password"
          />
          {validationErrors.password && (
            <p className="mt-1 text-xs text-red-500">{validationErrors.password}</p>
          )}
        </div>
      )}

      {hasField('confirmPassword') && (
        <div>
          <label htmlFor="confirmPassword" className={cn('block text-sm font-medium mb-2', theme.base.text)}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => updateField('confirmPassword', e.target.value)}
            disabled={loading}
            className={cn(inputBaseClass, theme.base.background, theme.base.text)}
            placeholder="Confirm your password"
          />
          {validationErrors.confirmPassword && (
            <p className="mt-1 text-xs text-red-500">{validationErrors.confirmPassword}</p>
          )}
        </div>
      )}

      <div className="flex items-start">
        <input
          type="checkbox"
          id="terms"
          checked={formData.agreeTerms}
          onChange={(e) => updateField('agreeTerms', e.target.checked)}
          disabled={loading}
          className="mt-1 h-4 w-4"
        />
        <label htmlFor="terms" className={cn('ml-2 text-sm', theme.base.text)}>
          I agree to the{' '}
          <a href={termsUrl} className={cn('underline font-semibold', theme.variants.primary.text)}>
            Terms of Service
          </a>{' '}
          and{' '}
          <a href={privacyUrl} className={cn('underline font-semibold', theme.variants.primary.text)}>
            Privacy Policy
          </a>
        </label>
      </div>
      {validationErrors.agreeTerms && (
        <p className="text-xs text-red-500">{validationErrors.agreeTerms}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={cn(
          buttonBaseClass,
          theme.variants.primary.background,
          theme.variants.primary.text,
          theme.variants.primary.border,
          theme.variants.primary.hover,
          loading && theme.states.disabled
        )}
      >
        {loading ? 'Creating Account...' : 'Create Account'}
      </button>

      {socialLogins.length > 0 && (
        <>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className={cn('w-full border-t', theme.base.border)} />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={cn('px-2 bg-white', theme.base.text)}>Or continue with</span>
            </div>
          </div>

          <div className={cn('grid gap-3', socialLogins.length === 3 ? 'grid-cols-3' : 'grid-cols-2')}>
            {socialLogins.map((social, index) => (
              <button
                key={index}
                type="button"
                onClick={social.onClick}
                disabled={loading}
                className={cn(
                  'py-3 transition-colors flex items-center justify-center',
                  theme.base.radius,
                  theme.variants.secondary.background,
                  theme.variants.secondary.text,
                  theme.variants.secondary.border,
                  theme.variants.secondary.hover,
                  loading && theme.states.disabled
                )}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </>
      )}

      {showSignInLink && (
        <p className={cn('text-center text-sm', theme.base.text)}>
          Already have an account?{' '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSignInClick?.();
            }}
            className={cn('underline font-semibold', theme.variants.primary.text)}
          >
            Sign in
          </a>
        </p>
      )}
    </form>
  );
}
