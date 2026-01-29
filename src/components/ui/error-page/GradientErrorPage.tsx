import { cn } from '../_shared/utils';
import type { ErrorPageBaseProps } from './types';

export function GradientErrorPage({
  code = '404',
  title = "Oops! Page Not Found",
  description = "Looks like you've ventured into uncharted territory. The page you're seeking doesn't exist in our universe.",
  illustration,
  actions,
  showHomeButton = true,
  showBackButton = true,
  className,
  onHomeClick,
  onBackClick,
}: Partial<ErrorPageBaseProps> = {}) {
  const defaultIllustration = (
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 blur-3xl opacity-50 animate-pulse"></div>
  );

  const renderDefaultActions = () => {
    if (actions) {
      return actions;
    }

    if (!showHomeButton && !showBackButton) {
      return null;
    }

    return (
      <div className="flex gap-4 justify-center flex-wrap">
        {showHomeButton && (
          <button
            onClick={onHomeClick}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Take Me Home
          </button>
        )}
        {showBackButton && (
          <button
            onClick={onBackClick}
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-all border border-white/30"
          >
            Previous Page
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={cn('min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center px-4', className)}>
      <div className="text-center max-w-lg">
        <div className="mb-8 relative">
          {illustration || defaultIllustration}
          <h1 className="relative text-[10rem] font-black text-white leading-none">
            {code}
          </h1>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-white/90 text-lg">
            {description}
          </p>
        </div>

        {renderDefaultActions()}
      </div>
    </div>
  );
}
