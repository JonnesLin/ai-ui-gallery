import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { LoginHeader } from './LoginHeader';
import { LoginForm } from './LoginForm';
import { LoginFooter } from './LoginFooter';
import { SocialLogin } from './SocialLogin';
import type { LoginPageProps } from './types';

export function LoginPage({
  theme,
  layout = 'centered',
  backgroundImage,
  logo,
  title,
  subtitle,
  onSubmit,
  loading = false,
  error,
  showRememberMe = true,
  showForgotPassword = true,
  socialLogins,
  signUpLink,
  footerLinks,
}: LoginPageProps) {
  const themeConfig = getTheme(theme);

  const containerClass = cn(
    'min-h-screen flex items-center justify-center p-4 relative',
    theme === 'glassmorphism' && 'overflow-hidden bg-slate-900',
    theme !== 'glassmorphism' && themeConfig.pageBackground
  );

  const cardClass = cn(
    'w-full',
    layout === 'centered' && 'max-w-md',
    layout === 'split' && 'max-w-4xl grid md:grid-cols-2 gap-0',
    layout === 'fullwidth' && 'max-w-6xl',
    theme === 'glassmorphism' && 'relative bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8',
    theme === 'material' && layout === 'centered' && 'bg-white rounded-lg shadow-md p-8',
    theme === 'minimalist' && 'bg-transparent'
  );

  return (
    <div className={containerClass} style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}>
      {theme === 'glassmorphism' && (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }} />
        </div>
      )}

      <div className={cardClass}>
        {layout === 'split' && (
          <div className={cn(
            'hidden md:flex items-center justify-center p-12',
            theme === 'gradient' ? 'bg-gradient-to-br from-purple-600 to-pink-600' : 'bg-gray-100'
          )}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Welcome Back!</h2>
              <p className="text-white/80">Login to access your account</p>
            </div>
          </div>
        )}

        <div className={cn(
          layout === 'split' && 'p-12 bg-white',
          layout === 'centered' && theme === 'material' && 'bg-white'
        )}>
          <LoginHeader
            theme={theme}
            logo={logo}
            title={title}
            subtitle={subtitle}
          />

          <LoginForm
            theme={theme}
            onSubmit={onSubmit}
            loading={loading}
            error={error}
            showRememberMe={showRememberMe}
            showForgotPassword={showForgotPassword}
          />

          {socialLogins && socialLogins.length > 0 && (
            <SocialLogin
              theme={theme}
              providers={socialLogins}
            />
          )}

          <LoginFooter
            theme={theme}
            signUpLink={signUpLink}
            footerLinks={footerLinks}
          />
        </div>
      </div>
    </div>
  );
}
