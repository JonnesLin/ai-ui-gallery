import { cn } from '../_shared/utils';
import type { LoginFooterProps } from './types';

export function LoginFooter({ theme, signUpLink, footerLinks }: LoginFooterProps) {
  const handleClick = (e: React.MouseEvent, onClick?: () => void, href?: string) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="mt-8">
      {signUpLink && (
        <p className={cn(
          'text-center text-sm mb-6',
          theme === 'minimalist' ? 'text-gray-500' :
          theme === 'glassmorphism' ? 'text-white/60' :
          'text-gray-600'
        )}>
          {signUpLink.text}{' '}
          <a
            href={signUpLink.href}
            onClick={(e) => handleClick(e, signUpLink.onClick, signUpLink.href)}
            className={cn(
              'font-medium transition-colors',
              theme === 'minimalist' ? 'text-gray-900 hover:underline' :
              theme === 'glassmorphism' ? 'text-purple-300 hover:text-purple-200' :
              theme === 'material' ? 'text-indigo-600 hover:text-indigo-800' :
              theme === 'gradient' ? 'text-purple-600 hover:text-purple-700' :
              'text-blue-600 hover:text-blue-700'
            )}
          >
            Sign up
          </a>
        </p>
      )}

      {footerLinks && footerLinks.length > 0 && (
        <div className="flex items-center justify-center space-x-4 text-sm">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex items-center space-x-4">
              {index > 0 && (
                <span className={cn(
                  theme === 'glassmorphism' ? 'text-white/40' : 'text-gray-400'
                )}>
                  ·
                </span>
              )}
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.onClick, link.href)}
                className={cn(
                  'transition-colors',
                  theme === 'minimalist' ? 'text-gray-500 hover:text-gray-900' :
                  theme === 'glassmorphism' ? 'text-white/60 hover:text-white/90' :
                  theme === 'material' ? 'text-gray-600 hover:text-indigo-600' :
                  'text-gray-600 hover:text-gray-900'
                )}
              >
                {link.text}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
