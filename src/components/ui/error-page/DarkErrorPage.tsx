import { cn } from '../_shared/utils';
import type { ErrorPageBaseProps } from './types';

export function DarkErrorPage({
  code = '404',
  title = 'ERROR: PAGE NOT FOUND',
  description = 'The page you requested has vanished into the digital darkness. It may have been deleted, moved, or never existed at all.',
  illustration,
  actions,
  showHomeButton = true,
  showBackButton = true,
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
            className="px-8 py-3 bg-white text-gray-950 font-bold hover:bg-gray-200 transition-colors"
          >
            RETURN HOME
          </button>
        )}
        {showBackButton && (
          <button
            onClick={onBackClick}
            className="px-8 py-3 border-2 border-gray-700 text-white font-bold hover:border-gray-500 hover:bg-gray-900 transition-colors"
          >
            GO BACK
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={cn('min-h-screen bg-gray-950 flex items-center justify-center px-4', className)}>
      <div className="text-center max-w-2xl">
        <div className="mb-8 relative">
          <h1 className="text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-900 leading-none">
            {code}
          </h1>
          {illustration || (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-red-500 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>

        <div className="border-t border-b border-gray-800 py-6 mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-gray-400 font-mono text-sm">
            /error/{code}: No such file or directory
          </p>
        </div>

        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          {description}
        </p>

        {renderDefaultActions()}
      </div>
    </div>
  );
}
