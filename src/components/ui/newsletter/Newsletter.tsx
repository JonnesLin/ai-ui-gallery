"use client";

import { useState } from 'react';
import { cn } from '../_shared/utils';
import type { NewsletterProps } from './types';

export function Newsletter({
  layout = 'stacked',
  title,
  description,
  placeholder,
  buttonText,
  onSubmit,
  loading = false,
  success = false,
  error,
  privacyText,
  className,
  containerClassName,
  titleClassName,
  descriptionClassName,
  inputClassName,
  buttonClassName,
  successClassName,
  errorClassName,
  privacyClassName,
}: NewsletterProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      throw new Error('Email is required');
    }
    onSubmit(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className={cn('w-full max-w-md', containerClassName)}>
      <div className="mb-8">
        <h2 className={cn('mb-2 text-2xl font-bold', titleClassName)}>
          {title}
        </h2>
        <p className={cn('text-sm', descriptionClassName)}>
          {description}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className={cn(
          'space-y-4',
          layout === 'inline' && 'flex flex-row space-y-0 space-x-2',
          className
        )}
      >
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder={placeholder}
          disabled={loading}
          className={cn(
            'w-full px-4 py-3 outline-none transition-colors',
            layout === 'inline' && 'flex-1',
            inputClassName
          )}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={cn(
            'px-6 py-3 font-semibold transition-colors',
            layout === 'inline' ? 'flex-shrink-0' : 'w-full',
            buttonClassName
          )}
        >
          {loading ? 'Sending...' : buttonText}
        </button>
      </form>

      {success && (
        <p className={cn('mt-4 text-sm text-green-600', successClassName)}>
          Successfully subscribed!
        </p>
      )}

      {error && (
        <p className={cn('mt-4 text-sm text-red-600', errorClassName)}>
          {error}
        </p>
      )}

      {privacyText && (
        <p className={cn('mt-6 text-xs opacity-50', privacyClassName)}>
          {privacyText}
        </p>
      )}
    </div>
  );
}
