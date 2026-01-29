import { cn } from '../_shared/utils';
import type { ErrorPageBaseProps } from './types';

export function GlassmorphismErrorPage({
  code = '404',
  title = 'Lost in Space',
  description = "The page you're looking for seems to have drifted away into the digital void.",
  illustration,
  actions,
  showHomeButton = true,
  showBackButton = false,
  className,
  onHomeClick,
  onBackClick,
}: Partial<ErrorPageBaseProps> = {}) {
  const defaultIllustration = (
    <div className="mb-6">
      <svg className="w-24 h-24 mx-auto text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
  );

  const renderDefaultActions = () => {
    if (actions) {
      return actions;
    }

    if (!showHomeButton && !showBackButton) {
      return null;
    }

    return (
      <div className="flex gap-4 justify-center">
        {showHomeButton && (
          <button
            onClick={onHomeClick}
            className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all border border-white/30"
          >
            Navigate Home
          </button>
        )}
        {showBackButton && (
          <button
            onClick={onBackClick}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all border border-white/20"
          >
            Go Back
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={cn('min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center px-4', className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-12 text-center max-w-md shadow-2xl">
        {illustration || defaultIllustration}
        <h1 className="text-7xl font-bold text-white mb-4">{code}</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
        <p className="text-white/80 mb-8">{description}</p>
        {renderDefaultActions()}
      </div>
    </div>
  );
}
