'use client';

import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { RegisterForm } from './RegisterForm';
import type { RegisterPageProps } from './types';

export function RegisterPage({
  theme: themeName,
  layout = 'centered',
  backgroundImage,
  logo,
  title = 'Create Account',
  subtitle = 'Join us today',
  formProps,
}: RegisterPageProps) {
  const theme = getTheme(themeName);

  if (layout === 'centered') {
    return (
      <div
        className={cn('min-h-screen flex items-center justify-center p-4', theme.pageBackground)}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' } : undefined}
      >
        <div className="w-full max-w-md">
          {logo && <div className="mb-8 text-center">{logo}</div>}

          <div className="mb-8 text-center">
            <h1 className={cn('text-3xl font-bold mb-2', theme.base.text)}>{title}</h1>
            <p className={cn('text-sm', theme.base.text, 'opacity-70')}>{subtitle}</p>
          </div>

          <RegisterForm {...formProps} theme={themeName} />
        </div>
      </div>
    );
  }

  if (layout === 'split') {
    return (
      <div className={cn('min-h-screen flex', theme.pageBackground)}>
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12"
          style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' } : undefined}
        >
          {logo && <div>{logo}</div>}
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className={cn('text-3xl font-bold mb-2', theme.base.text)}>{title}</h1>
              <p className={cn('text-sm', theme.base.text, 'opacity-70')}>{subtitle}</p>
            </div>

            <RegisterForm {...formProps} theme={themeName} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn('min-h-screen flex items-center justify-center p-4', theme.pageBackground)}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' } : undefined}
    >
      <div className="w-full max-w-4xl">
        {logo && <div className="mb-8 text-center">{logo}</div>}

        <div className="mb-8 text-center">
          <h1 className={cn('text-4xl font-bold mb-2', theme.base.text)}>{title}</h1>
          <p className={cn('text-base', theme.base.text, 'opacity-70')}>{subtitle}</p>
        </div>

        <RegisterForm {...formProps} theme={themeName} />
      </div>
    </div>
  );
}
