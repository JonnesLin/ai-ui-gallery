import { cn } from '../_shared/utils';
import type { ErrorPageBaseProps } from './types';

export function MinimalistErrorPage({
  code = '404',
  title = 'Page Not Found',
  description = 'The page you are looking for does not exist or has been moved.',
  illustration,
  actions,
  showHomeButton = true,
  showBackButton = false,
  className,
  onHomeClick,
  onBackClick,
}: Partial<ErrorPageBaseProps> = {}) {
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
            className="px-8 py-3 bg-black text-white font-light hover:bg-gray-800 transition-colors"
          >
            Return Home
          </button>
        )}
        {showBackButton && (
          <button
            onClick={onBackClick}
            className="px-8 py-3 bg-gray-200 text-black font-light hover:bg-gray-300 transition-colors"
          >
            Go Back
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={cn('min-h-screen bg-white flex items-center justify-center px-4', className)}>
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-light text-black mb-4">{code}</h1>
        <div className="w-16 h-px bg-black mx-auto mb-8"></div>
        <h2 className="text-2xl font-light text-black mb-4">{title}</h2>
        <p className="text-gray-600 mb-8 font-light">{description}</p>
        {illustration}
        {renderDefaultActions()}
      </div>
    </div>
  );
}
